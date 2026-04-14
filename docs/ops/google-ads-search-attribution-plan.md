# Google Ads Search Attribution Plan

**Last Updated:** April 13, 2026
**Status:** BLOCKED — needs form submission logging
**Blocker Priority:** HIGH (estimated 2-3 hours of dev work unblocks full attribution)

---

## The Problem

LSA validation works because Google gives us the caller's phone number. Google Ads Search conversions only give us:
- Click timestamp
- Conversion timestamp
- Campaign/ad group/keyword
- Cost

There's **no way to tie a specific conversion to a specific CRM job** without extra work.

---

## Current State (Apr 13, 2026)

### What We Know
- 8 Search conversions over Apr 8-12, 2026
- $17.11 CPA on the Search campaign
- 6 conversions on Apr 10 alone (strongest day so far)

### What We Don't Know
- Which 8 CRM jobs came from Search ads (out of 76 non-LSA jobs on those days)
- Actual revenue per Search click
- True Search ROI vs. estimated

### The Indirect Attribution Attempt
Running "exclude LSA leads from conversion days":
- Apr 8: 3 conversions expected / 36 non-LSA jobs
- Apr 10: 4 conversions expected / 29 non-LSA jobs
- Apr 12: 1 conversion expected / 5 non-LSA jobs
- **Conclusion: 70 possible candidates for 8 conversions. Attribution is guessing.**

---

## The Fix: Form Submission Logging

### Architecture
```
User clicks Google Ad
  → URL has ?gclid=ABC123&utm_source=google&utm_campaign=sonoma-marin
  → Lands on /schedule-prep or /contact
  → Analytics.tsx captures gclid + UTMs into sessionStorage (ALREADY DONE Apr 12)
  → User fills out form
  → AppointmentForm/ContactForm reads sessionStorage, appends to form data
  → POST /api/appointment with: name, phone, email, appliance, issue, gclid, utms, timestamp
  → Cloudflare Worker at functions/api/appointment.ts:
    → Send email (existing)
    → INSERT into D1 form_submissions table (NEW)
    → Return success
  → Google Ads conversion fires via GTM dataLayer (existing)
```

### D1 Table Schema
```sql
CREATE TABLE form_submissions (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,  -- ISO timestamp
  form_type TEXT NOT NULL,   -- 'appointment', 'contact', 'parts'
  customer_name TEXT,
  phone TEXT,
  email TEXT,
  zip TEXT,
  city TEXT,
  appliance_type TEXT,
  brand TEXT,
  issue TEXT,
  gclid TEXT,                -- Google click ID (if present)
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  utm_content TEXT,
  user_agent TEXT,
  ip_country TEXT,
  ref_number TEXT            -- our internal ref number
);

CREATE INDEX idx_phone ON form_submissions(phone);
CREATE INDEX idx_gclid ON form_submissions(gclid);
CREATE INDEX idx_created ON form_submissions(created_at);
```

### Matching Process (Weekly)
```
1. Query D1: SELECT * FROM form_submissions WHERE created_at > last_week
2. For each submission:
   a. Match phone to CRM (SDtype6 TelNmbr1/2/3)
   b. If gclid present → confirmed Google Ads attribution
   c. If utm_source = 'google' but no gclid → likely organic Google
   d. If no UTMs → direct/bookmark/referral
3. Join Google Ads conversions by gclid → full click-to-job attribution
4. Calculate:
   - Revenue per Google Ads click
   - Revenue per keyword (via gclid → ad group)
   - Conversion rate (submissions / clicks)
   - Match rate (matched jobs / submissions)
```

### Implementation Effort
| Task | Time | Status |
|------|------|--------|
| Create D1 table | 10 min | Pending |
| Update `functions/api/appointment.ts` to log | 30 min | Pending |
| Update `functions/api/contact.ts` to log | 20 min | Pending |
| Update `functions/api/parts-request.ts` to log | 20 min | Pending |
| Update form components to send gclid/UTMs (reuse sessionStorage from Apr 12 work) | 30 min | Pending |
| Test end-to-end | 30 min | Pending |
| Deploy | 10 min | Pending |
| **Total** | **~2.5 hrs** | Ready to build |

---

## What Else This Unblocks

Once form submissions are logged in D1, we get attribution for **everything**, not just Google Ads:

- **Interactive tools** (Repair vs Replace Calculator, Diagnostic Quiz) — track which tools drive leads
- **Blog posts** — see which posts convert readers to bookings
- **Cloudflare Analytics** — cross-reference with server-side tracking
- **Email campaigns** — track Mailchimp click-throughs to form submissions
- **Facebook/Instagram Ads** (future) — same gclid pattern with fbclid
- **Nextdoor** — track UTM-tagged links from posts
- **Direct marketing** — print ads with custom UTMs

**One database table, attribution for every channel forever.**

---

## Interim Workaround (Until D1 Is Built)

While form logging is being built, we can still get partial Google Ads insights:

1. **Ad Group / Keyword Level** — Google Ads already shows which keywords converted. Optimize based on that, even without job-level attribution.
2. **Landing Page Performance** — Track /schedule-prep vs /contact conversion rates via GTM events (already tracked).
3. **Daily Conversion Count** — Compare to daily CRM job creation volume for rough correlation.
4. **Call-Only Campaigns** — If any are added later, they give phone numbers directly like LSA.

---

## Recommended Action

Build the form submission logging this week. It's the biggest leverage point in the entire reporting system — it unlocks all future channel attribution for a few hours of work.

Priority: **Before launching any new paid channels** (Meta, Nextdoor paid, etc.) because without this, we can't measure them either.

---

## Related Docs

- [Reporting System](reporting-system.md) — how all this fits together
- [LSA Lead Validation SOP](lsa-lead-validation-sop.md) — the working template
- [Interactive Tools Strategy](interactive-tools-strategy.md) — also needs form logging
- [Google Ads Platform File](platforms/google-ads.md) — current state
