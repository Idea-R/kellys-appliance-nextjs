# Ads Attribution Plan — End-to-End Lead → Job → Revenue

**Last Updated:** May 5, 2026
**Status:** LSA pipeline LIVE (validated April 2026). Search pipeline PENDING form-capture build.
**Owner:** Ideas Realized

---

## TL;DR

We have everything needed to do real lead-level ad attribution for **LSA**. We just demonstrated it on April 2026: pulled 51 phone leads from the Google Ads API, matched them against OATAS via `lookup_jobs_by_phone`, got a real **43% match rate / 22 new jobs / $39.45 cost-per-matched-job**.

For **Google Ads Search**, we cannot match yet because the API doesn't expose lead phone numbers. We need to capture form submissions ourselves with phone + gclid before any matching is possible. Implementation outlined below.

---

## Channel-by-Channel Status

### Google LSA — ✅ Working today

**Inputs available:**
- `local_services_lead.id` — lead UUID
- `local_services_lead.contact_details.phoneNumber` — full phone with country code
- `local_services_lead.contact_details.email` — for message leads
- `local_services_lead.contact_details.consumerName` — sometimes
- `local_services_lead.creation_date_time` — exact timestamp
- `local_services_lead.lead_type` — `PHONE_CALL` or `MESSAGE` or `BOOKING`
- `local_services_lead.lead_status` — `NEW`, `ACTIVE`, `BOOKED`, `DECLINED`, etc.
- `local_services_lead.service_id` — appliance category (`repair_refrigerator`, `repair_dryer`, etc.)
- `local_services_lead.credit_details.credit_state` — `CHARGED`, `PENDING`, `NOT_CHARGED`

**Match path (live):**
```
Google Ads API → local_services_lead → phone digits
  → OATAS lookup_jobs_by_phone(phone)
  → match found? → invoice number + appointment date + tech + appliance type
  → OATAS lookup_job(invoice_number)  [optional, gets dollar amounts]
```

**Demonstrated:** See [`reports/monthly/2026-04-lsa-attribution.md`](reports/monthly/2026-04-lsa-attribution.md) — 57 leads, 51 phones, 26 OATAS matches, 22 new April jobs.

### Google Ads Search — ⚠️ Needs form-capture build

**The gap:**
- Search conversions in Google Ads are anonymous events: `form_submitted_at_T` with no PII
- The website POSTs forms to `/api/appointment` which sends an email to Mark — no database log
- Without phone capture at submission time, we have no way to cross-reference clicks → jobs

**What's needed:**
1. **Add `form_submissions` table** (Cloudflare D1 or new Supabase table) with columns:
   - `id`, `submitted_at`, `phone`, `email`, `name`, `appliance_type`, `gclid`, `gbraid`, `wbraid`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `referrer_url`, `landing_url`, `user_agent`
2. **Wire `/api/appointment` to write to it** before/alongside the email send
3. **Capture gclid in `Analytics.tsx`** ✅ already done Apr 11 — need to confirm it's flowing through to the form
4. **Add the same logging to all forms:** `/contact`, `/schedule-prep`, future calculator/quiz forms

**Match path (after build):**
```
form submission → form_submissions table (logs phone + gclid + UTMs)
  → query form_submissions for date window
  → OATAS lookup_jobs_by_phone(phone)
  → match found? → join with Google Ads click data via gclid
  → full chain: campaign → keyword → ad → click → form → job → revenue
```

**Effort:** ~3 hours. The D1 schema and worker wiring are mechanical; the harder part is making sure every form submission path captures gclid.

### Google Business Profile — Partial (manual)

GBP "calls" and "directions" don't expose phone numbers. We see aggregate counts but cannot match individual interactions to jobs. Treat as awareness-only.

### Nextdoor / Yelp — Manual

No APIs that expose lead PII. Match manually via the platform's inbox (phone numbers customer types in messages) → OATAS phone lookup. Low volume so manageable in-app.

---

## Operating Procedure (LSA — Monthly)

### Step 1: Pull leads
```python
# Via Google Ads MCP
SELECT
  local_services_lead.id,
  local_services_lead.lead_type,
  local_services_lead.service_id,
  local_services_lead.contact_details,
  local_services_lead.creation_date_time,
  local_services_lead.lead_status,
  local_services_lead.credit_details.credit_state
FROM local_services_lead
WHERE local_services_lead.creation_date_time >= '{MONTH_START}'
  AND local_services_lead.creation_date_time <= '{MONTH_END}'
ORDER BY local_services_lead.creation_date_time
```

### Step 2: For each lead, normalize phone & lookup
```python
phone = lead.contactDetails.phoneNumber.lstrip('+1')  # strip country code
match = mcp.oatas.lookup_jobs_by_phone(phone, limit=3)
```

### Step 3: Classify each match
- **NEW MATCH** = invoice with appointment_date in lead_creation_date_time + 30 days, AND not pre-existing
- **HISTORICAL MATCH** = invoice exists but predates this lead's creation
- **NO MATCH** = no record at all

### Step 4: For NEW MATCHes, get revenue
```python
job_detail = mcp.oatas.lookup_job(invoice_number)
revenue = job_detail.sd_total_price  # exact billed amount
```

### Step 5: Roll up
- Total leads / matched / lost
- Match rate %
- Sum of revenue from matched jobs
- Cost per matched job = LSA spend / matched count
- ROI = revenue / spend

### Step 6: File the report
`docs/ops/reports/monthly/YYYY-MM-lsa-attribution.md`

### Cadence
- **Weekly snapshot:** match last 7 days of LSA leads, flag stalled lookups for office follow-up
- **Monthly final:** full month with revenue totals (waits ~7 days after month-end to let late jobs close)
- **Quarterly:** trends + dispute analysis (which lead patterns to dispute Google for)

---

## Operating Procedure (Search Ads — Once form-capture is live)

### Step 1: Pull form submissions
```sql
SELECT phone, email, name, gclid, submitted_at, utm_*
FROM form_submissions
WHERE submitted_at BETWEEN '{MONTH_START}' AND '{MONTH_END}'
  AND gclid IS NOT NULL
```

### Step 2: For each, OATAS lookup_jobs_by_phone

### Step 3: Join back to Google Ads click data
```python
# Optional but valuable: fetch click metadata from Google Ads via gclid
# Using gclid_view or click_view in GAQL
SELECT
  click_view.gclid,
  segments.keyword.info.text,
  campaign.name,
  ad_group.name,
  metrics.cost_micros
FROM click_view
WHERE click_view.gclid = '{gclid}'
```
This gives us **per-keyword ROI** — the ultimate optimization signal.

### Step 4: Roll up by campaign / ad group / keyword
- Top-converting keywords (highest revenue / lowest CPA)
- Underperforming keywords (clicks but no jobs) → candidates to pause
- Best-performing landing pages

---

## What Each Lead Tells Us (Dimensional Reporting)

Once attribution is running for both channels, every monthly report can break out:

| Dimension | Source | Example Question |
|-----------|--------|------------------|
| Channel | Lead origin | LSA vs Search vs GBP — which converts best? |
| Service category | LSA `service_id` / Search keyword | Refrigerator vs dryer leads — which has higher avg ticket? |
| Lead type | `PHONE_CALL` / `MESSAGE` / Form | Phone vs message conversion rate? |
| Geography | Phone area code / customer city | Petaluma converts 2× — should we target more? |
| Days lead-to-appt | Created → first appointment | Same-day vs 7-day — does fast response matter? |
| Tech assignment | OATAS `tech_code` | Which techs are getting the ad-driven jobs? |
| Appliance type | OATAS `appliance_type` | Mix from ads vs organic — different? |
| Customer LTV | OATAS prior_visit_count + future bookings | Do ad customers come back? |

---

## What's Already Working Today (Validated May 5, 2026)

- ✅ Google Ads MCP pulling LSA leads with phone numbers
- ✅ OATAS MCP `lookup_jobs_by_phone` returning matches with invoice + tech + status
- ✅ Date-window filtering on `local_services_lead.creation_date_time`
- ✅ Status flags: `BOOKED` leads correlated to actual booked jobs (Schaeffer test)
- ✅ Multi-phone household handling (LATHAM has both 415 and 707, OATAS finds either)

---

## What's Blocking End-to-End

### Blocker 1: Form-capture for Search ads (P0)
Without `form_submissions` table, Search Ads ROI remains estimated only.

**Fix:**
- Decide: Cloudflare D1 (keeps it on the edge, simpler) or Supabase OATAS (centralizes data)
- Build the table + write path in `/api/appointment`, `/api/contact`, `/schedule-prep`
- Backfill is impossible — start logging from deploy date forward

### Blocker 2: OATAS sync freshness (P1)
Active sync was RED (424 min stale) at pull time. Running attribution against stale data misses last-minute matches.

**Fix:**
- Investigate why active sync is lagging — may be the Rossware bridge process
- Set a sync-health alert at >60 min lag
- For monthly reports, wait ≥7 days after month-end to let sync catch up

### Blocker 3: Per-job revenue not in lookup_jobs_by_phone (P2 nice-to-have)
The phone lookup tool returns invoice number but not dollar amount. Currently we'd do a 2-step process: phone-match → invoice → second lookup_job call.

**Fix options:**
- Request OATAS bridge enhance lookup_jobs_by_phone to include `sd_total_price`
- Or build a thin wrapper that does phone match + revenue join in one shot

### Blocker 4: No structured dispute pipeline (P2)
Some lost leads (out-of-area, spam, wrong-service) are eligible for LSA refund disputes. Currently this is manual in the LSA dashboard.

**Fix:**
- Create a "to dispute" list in each monthly attribution report
- Office disputes within Google's 14-day window
- Track dispute outcomes in a follow-up column

---

## Q2 Action Items

### P0 — May
- [ ] **Build form_submissions logging** (D1 or Supabase) wired into `/api/appointment` and `/contact`
- [ ] **Verify gclid is being captured at the form layer** (Analytics.tsx wired Apr 11 — check end-to-end)
- [ ] **Investigate OATAS active sync staleness** — set alerting when >60 min behind
- [ ] **Run May LSA attribution at end of month** using the same flow as April

### P1 — June
- [ ] **First Search attribution report** (assumes form-capture deploys mid-May, need 30 days of data)
- [ ] **Add `lookup_job` enrichment loop** to attribution report — get actual dollar amounts per matched invoice
- [ ] **Build LSA dispute checklist** from each monthly report's "lost leads" section

### P2 — Q3
- [ ] **Per-keyword ROI report** (Search × OATAS join via gclid → click_view → keyword)
- [ ] **GBP call attribution** — explore call-tracking number on the listing as a workaround for the GBP API's PII gap
- [ ] **Customer LTV by channel** — use OATAS `prior_visit_count` + new visits to calculate LSA-acquired vs Search-acquired customer lifetime spend
