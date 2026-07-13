# Form Capture Pipeline — Implementation Plan

**Last Updated:** May 5, 2026
**Status:** Plan ready, awaiting build kickoff
**Owner:** Ideas Realized (engineering)
**Why:** Unlock Search ad → job → revenue attribution (currently blocked because Google Ads API doesn't expose form-submission PII)

---

## Goal

Capture every form submission on kellysappliancerepair.com with enough data to:
1. Match the submission to an OATAS job (via phone number)
2. Match the submission to a Google Ads click (via gclid)
3. Match the submission to organic traffic (via UTMs / referrer)

Result: end-to-end attribution from Search ad / SEO / direct → job → revenue.

---

## Architecture

```
┌─────────────────────────┐
│ User on website         │
│ /contact, /schedule-prep│
│ Click ad → URL has gclid│
└──────────┬──────────────┘
           │ Analytics.tsx captures gclid → sessionStorage
           ▼
┌─────────────────────────┐
│ Form submit             │
│ POST /api/appointment   │
└──────────┬──────────────┘
           │
           ├─► EXISTING: Email send to Mark
           │
           ├─► EXISTING: GTM dataLayer push → Google Ads conversion fire
           │
           └─► NEW: Write to form_submissions
                    (Cloudflare D1, edge-fast)
                    │
                    │ Daily cron via Cloudflare Worker
                    ▼
           ┌─────────────────────┐
           │ Match against OATAS │
           │ for each submission │
           │ run lookup_jobs_    │
           │ by_phone via MCP    │
           └──────────┬──────────┘
                      │
                      ▼
           ┌─────────────────────┐
           │ Weekly attribution  │
           │ report (auto)       │
           └─────────────────────┘
```

---

## Schema — `form_submissions` (Cloudflare D1)

```sql
CREATE TABLE form_submissions (
  id            TEXT PRIMARY KEY,           -- nanoid or UUID
  submitted_at  TEXT NOT NULL,              -- ISO 8601 UTC
  form_type     TEXT NOT NULL,              -- 'appointment' | 'contact' | 'schedule-prep' | 'calculator' | etc
  phone         TEXT,                       -- digits only, normalized
  phone_raw     TEXT,                       -- original form input
  email         TEXT,
  name          TEXT,
  appliance_type TEXT,                      -- if form has it
  zip           TEXT,
  message       TEXT,                       -- notes/comments field
  -- Attribution
  gclid         TEXT,                       -- Google click ID
  gbraid        TEXT,                       -- iOS click ID
  wbraid        TEXT,                       -- web click ID
  fbclid        TEXT,                       -- Facebook click ID (future)
  utm_source    TEXT,
  utm_medium    TEXT,
  utm_campaign  TEXT,
  utm_term      TEXT,
  utm_content   TEXT,
  referrer_url  TEXT,
  landing_url   TEXT,                       -- first page on the site this session
  page_url      TEXT,                       -- page form was submitted from
  user_agent    TEXT,
  ip_country    TEXT,                       -- from CF Request.cf.country
  ip_region     TEXT,                       -- CF Request.cf.region
  -- OATAS match (filled by daily cron)
  oatas_match_status TEXT,                  -- 'unchecked' | 'matched' | 'no_match' | 'historical_only'
  oatas_invoice_number INTEGER,             -- if matched
  oatas_match_at TEXT,                      -- when match was found
  oatas_revenue_amount REAL,                -- if matched and billed
  -- Hygiene
  is_spam       INTEGER DEFAULT 0,          -- 1 if marked as spam
  is_test       INTEGER DEFAULT 0,          -- 1 if test submission
  notes         TEXT                        -- internal/dev notes
);

CREATE INDEX idx_form_submissions_submitted_at ON form_submissions(submitted_at);
CREATE INDEX idx_form_submissions_phone ON form_submissions(phone);
CREATE INDEX idx_form_submissions_gclid ON form_submissions(gclid);
CREATE INDEX idx_form_submissions_oatas_match_status ON form_submissions(oatas_match_status);
```

Why D1: site is already on Cloudflare Pages, the Worker that handles `/api/appointment` can write to D1 in the same edge call without latency. Free tier (5M reads/day, 100K writes/day) is more than enough.

---

## Build sequence

### Phase 1: Capture (estimated 3 hours)

**1.1 — D1 binding**
- Create D1 database `kellys-form-submissions` via `wrangler d1 create`
- Add binding to `wrangler.toml` / `wrangler.jsonc`
- Apply schema migration

**1.2 — Worker route updates**
Files to edit:
- `app/api/appointment/route.ts` (or wherever the appointment form POSTs)
- `app/api/contact/route.ts`
- Any other form endpoints (`/schedule-prep`, future calculator routes)

For each:
```typescript
// In the POST handler, after parsing form body:
const submission = {
  id: crypto.randomUUID(),
  submitted_at: new Date().toISOString(),
  form_type: 'appointment',
  phone: normalizePhone(body.phone),
  phone_raw: body.phone,
  email: body.email,
  name: body.name,
  appliance_type: body.applianceType,
  zip: body.zip,
  message: body.notes,
  gclid: body.gclid || null,             // pass from Analytics.tsx via hidden form field
  gbraid: body.gbraid || null,
  wbraid: body.wbraid || null,
  utm_source: body.utm_source,
  utm_medium: body.utm_medium,
  utm_campaign: body.utm_campaign,
  utm_term: body.utm_term,
  utm_content: body.utm_content,
  referrer_url: request.headers.get('referer'),
  landing_url: body.landing_url,
  page_url: body.page_url,
  user_agent: request.headers.get('user-agent'),
  ip_country: request.cf?.country,
  ip_region: request.cf?.region,
  oatas_match_status: 'unchecked',
};

await env.FORMS_DB.prepare(`INSERT INTO form_submissions (...) VALUES (...)`).bind(...).run();

// THEN existing email + GTM logic continues unchanged
```

**1.3 — Frontend gclid passing**
- `Analytics.tsx` already captures gclid into sessionStorage (Apr 11 work — needs verification)
- Update form components to read from sessionStorage and include hidden inputs:
  ```tsx
  <input type="hidden" name="gclid" value={getGclid()} />
  <input type="hidden" name="utm_source" value={getUtm('source')} />
  ...
  ```
- Verify by submitting a test form with `?gclid=test123&utm_source=test_search` in the URL

**1.4 — Verification checklist**
- [ ] Submit a real test form via `/contact` with a tracked URL
- [ ] Confirm row appears in D1 within 5 seconds
- [ ] Confirm gclid + UTMs are populated
- [ ] Confirm phone is digit-normalized
- [ ] Confirm existing email send + GTM conversion still fires (regression check)

### Phase 2: Match (estimated 2 hours)

**2.1 — Daily matching cron**
Create a Cloudflare Worker scheduled at 04:00 PT daily:
```typescript
// wrangler.toml
[[triggers]]
crons = ["0 11 * * *"] // 04:00 PT in UTC

// worker code
export default {
  async scheduled(event, env, ctx) {
    const unchecked = await env.FORMS_DB
      .prepare("SELECT * FROM form_submissions WHERE oatas_match_status = 'unchecked' AND submitted_at < datetime('now', '-2 hours')")
      .all();

    for (const sub of unchecked.results) {
      const match = await fetch('https://lsxfwgvbapprjlkwzgpn.supabase.co/functions/v1/oatas-mcp', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.OATAS_KEY}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/event-stream',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'tools/call',
          params: {
            name: 'lookup_jobs_by_phone',
            arguments: { phone: sub.phone, limit: 1 },
          },
        }),
      });
      // parse SSE response
      const result = await parseOatasResponse(match);

      let status = 'no_match';
      let invoice = null;
      let revenue = null;

      if (result.matches?.length > 0) {
        const m = result.matches[0];
        // Only count as "matched" if appointment is on/after submission date
        const subDate = new Date(sub.submitted_at);
        const apptDate = m.appointment_date ? new Date(m.appointment_date) : null;
        if (apptDate && apptDate >= subDate) {
          status = 'matched';
          invoice = m.invoice_number;
        } else {
          status = 'historical_only';
        }
      }

      // If matched, optionally fetch revenue via lookup_job
      if (status === 'matched' && invoice) {
        // (call lookup_job, parse sd_total_price... omitted for brevity)
      }

      await env.FORMS_DB
        .prepare(`UPDATE form_submissions SET oatas_match_status = ?, oatas_invoice_number = ?, oatas_revenue_amount = ?, oatas_match_at = ? WHERE id = ?`)
        .bind(status, invoice, revenue, new Date().toISOString(), sub.id)
        .run();
    }
  }
};
```

**2.2 — Verify**
- Run the cron manually via `wrangler dev` triggering `__scheduled`
- Check D1 rows updated with status

### Phase 3: Reporting (estimated 2 hours)

**3.1 — Weekly attribution view**
Add a route or report query that joins:
- `form_submissions` (last 7 days)
- gclid → Google Ads `click_view` (via GAQL: `SELECT campaign.name, ad_group.name, segments.keyword.info.text FROM click_view WHERE click_view.gclid = ?`)
- OATAS match data (already in `form_submissions`)

Output: weekly Search ad attribution table mirroring the LSA one.

**3.2 — Monthly rollup**
Same as weekly but for full month + sums to revenue.

**3.3 — Integration with existing monthly report**
Add to `docs/ops/reports/monthly/YYYY-MM.md`:
- "Search Ad Attribution" section (parallels the LSA Attribution section)
- Real CPA per keyword
- Real ROI per ad group

---

## Tools / dependencies

| Tool | Purpose | Cost |
|------|---------|------|
| Cloudflare D1 | Edge SQL for form_submissions | Free (under 5M reads/day) |
| Cloudflare Worker | Form POST handlers + scheduled match cron | Free (under 100K req/day) |
| OATAS MCP `lookup_jobs_by_phone` | Phone → invoice match | Included with OATAS subscription |
| Google Ads API (gclid → keyword) | Optional: keyword-level attribution | Free with Basic Access |

---

## Open questions / decisions

1. **D1 vs Supabase for form storage?** D1 picked for edge-co-location with the existing Pages site. Could revisit if we need stronger SQL or row-level security.
2. **Should we backfill form submissions retroactively?** No — impossible without historical capture. Forward-only from deploy date.
3. **Should the form-capture write block the user's submit flow?** No — fire-and-forget via `ctx.waitUntil()` so user submit success isn't tied to D1 latency.
4. **Spam protection on the D1 table?** Add a `is_spam` flag and a simple heuristic (e.g., empty phone + empty email = spam). Existing form already has Cloudflare Turnstile or similar — leave those as-is.
5. **PII / privacy?** Phone, email, name stored. Privacy policy already covers form submissions. No new disclosure needed.

---

## Success criteria

- [ ] Form submissions write to D1 within 5 seconds of submit
- [ ] At least 95% of submissions have phone (the matching key)
- [ ] At least 80% of paid-traffic submissions have gclid
- [ ] Daily cron successfully matches and updates status for all unchecked rows
- [ ] By June 5, the May monthly report has a "Search Ad Attribution" section with real numbers (>= 30 days of data)

---

## Related docs

- [`ads-attribution-plan.md`](ads-attribution-plan.md) — overall attribution strategy
- [`reports/monthly/2026-04-lsa-attribution.md`](reports/monthly/2026-04-lsa-attribution.md) — proof-of-concept LSA attribution
- [`google-ads-search-attribution-plan.md`](google-ads-search-attribution-plan.md) — earlier draft of this plan (now superseded)
