# OAT:AS Marketing Platform Automation Plan

**Created:** May 13, 2026
**Status:** PLANNING — design phase, deep-dive in progress
**Owner:** Ideas Realized
**Companion to:** `ads-attribution-plan.md`, `google-ads-search-attribution-plan.md`, `lsa-lead-validation-sop.md`

---

## Vision (one paragraph)

OAT:AS becomes the single pane of glass for all marketing operations on Kelly's Appliance Center (and eventually every client). Lead data from every channel (Google Ads Search, Google Ads LSA, website forms, GBP, organic) flows automatically into `marketing_leads`. A background matcher closes the loop to actual OATAS jobs by phone. Daily Slack digests report what came in, what closed, and what's stuck. Monthly attribution reports generate from a single button click. The manual cron-of-shane that runs today (pull leads → spreadsheet → match phones → write report) is gone.

---

## Why this matters

**Current pain (manual labor we just lived through):**
- Pulling 23 May LSA leads through OATAS `lookup_jobs_by_phone` one-by-one took ~15 minutes via batched MCP calls
- April monthly attribution report took ~2 hours to compile manually
- Google Ads Search conversions (40 in May to date) currently have **zero** attribution because there's no automated form-to-CRM bridge running
- Search Console MCP keeps breaking (`invalid_rapt` auth errors)
- Every monthly review starts from scratch — no incremental state

**What automation unlocks:**
- Sub-minute attribution: lead arrives → matched to job → Slack notification within hours, not weeks
- Per-keyword Search Ads ROI (currently impossible without form_submissions infrastructure — now possible via gclid join)
- Anomaly detection: spend up but conversions flat → alert before the budget burns
- The same pipeline serves every client. Build once, sell n times.

---

## Existing infrastructure (what we DON'T need to build)

| Already built | Where |
|--------------|-------|
| `marketing_leads` table + RLS + indexes | OATAS Supabase, shipped May 13 |
| `ingest-marketing-lead` Edge Function | OATAS Edge Function, deployed |
| Bearer-token API key system (`oat_*`, SHA-256 hashed) | OATAS `api_keys` table |
| Website forms → OATAS pipeline (all 4 forms) | Cloudflare Pages Functions, shipped May 13 |
| OATAS phone lookup matching logic | `agent_lookup_jobs_by_phone` RPC |
| Google Ads OAuth refresh token | `C:\Users\palli\mcp-google-ads\credentials.json` |
| Google Ads developer token | Ideas Realized MCC API Center |
| Slack notification infrastructure | OATAS `slack-notify` Edge Function |
| LSA lead matching SOP (validated) | `docs/ops/lsa-lead-validation-sop.md` |
| Search Console OAuth (via Lovable's native connector) | Available, not yet authorized |
| Q1 + April SEO report templates | `C:\Users\palli\Documents\generate_*.py` |
| OATAS API key with `leads:ingest` scope | Created May 13, in Cloudflare env vars |

---

## Phased rollout

### Phase A — LSA Sync + Auto-Match Cron + Slack Digest

**Goal:** End the manual monthly attribution workflow. Replace with a Slack digest and live dashboard.

**Components:**

1. **`google_ads_leads_sync` Edge Function**
   - Triggered by cron every 4 hours (Supabase `pg_cron` or scheduled function)
   - Pulls last 7 days of `local_services_lead` via Google Ads API (GAQL)
   - Reads OAuth refresh token + developer token + customer_id from encrypted `organization_connectors`
   - For each lead, upserts into `marketing_leads` keyed on `(organization_id, source='google_lsa', external_id=lead.id)`
   - Idempotent — re-running same window updates status/credit fields without duping rows
   - Captures: lead_id, lead_type (PHONE_CALL/MESSAGE/BOOKING), lead_status (NEW/ACTIVE/BOOKED/DECLINED), service_id, contact_details.phoneNumber, contact_details.consumerName (when available), credit_details.credit_state, creation_date_time

2. **`match_marketing_leads` cron job**
   - Triggered every 4 hours (offset from sync by 30 minutes)
   - For all `marketing_leads` rows with `matched_invoice_number IS NULL` AND `submitted_at >= NOW() - INTERVAL '30 days'`
   - Calls `agent_lookup_jobs_by_phone(customer_phone)` for each
   - Match logic:
     - **Exact NEW match:** invoice with appointment_date >= lead.submitted_at, not pre-existing for this phone before this lead → mark as new attribution
     - **Historical match:** invoice exists but predates this lead → mark match_method='historical', don't count as conversion
     - **No match:** leave `matched_invoice_number = NULL`, increment `match_attempts`
   - On NEW match: fire Slack notification "🎯 Lead matched: [customer] booked [appliance] repair on [date] — invoice #[N]"
   - Tracks `last_match_attempt_at` to avoid re-matching the same lead more than once per day

3. **Daily Slack digest** (configurable per org, default 8 AM local time)
   - Yesterday's stats:
     - Total leads ingested: X (LSA: a, Search/website: b, Newsletter: c)
     - New matches: Y (avg time-to-match: Z hours)
     - Estimated attributed revenue (sum of matched invoice totals)
     - Stuck leads (no match after 5+ days): callouts with phone numbers for office follow-up
   - Week-to-date and month-to-date totals
   - Quick channel comparison: Cost-per-matched-job by channel

**Data model additions (Phase A):**

```sql
-- Add to existing marketing_leads:
ALTER TABLE marketing_leads ADD COLUMN external_id TEXT;        -- Google Ads lead.id, GBP review ID, etc.
ALTER TABLE marketing_leads ADD COLUMN match_attempts INTEGER DEFAULT 0;
ALTER TABLE marketing_leads ADD COLUMN last_match_attempt_at TIMESTAMPTZ;
CREATE UNIQUE INDEX uq_marketing_leads_org_source_external ON marketing_leads(organization_id, source, external_id) WHERE external_id IS NOT NULL;

-- New table for OAuth-protected ad accounts:
CREATE TABLE google_ads_accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  customer_id TEXT NOT NULL,           -- e.g., '854-489-2425'
  mcc_customer_id TEXT,                -- e.g., '992-664-9900' (Ideas Realized MCC)
  oauth_refresh_token_encrypted BYTEA NOT NULL,
  developer_token_encrypted BYTEA NOT NULL,
  oauth_client_id TEXT NOT NULL,
  oauth_client_secret_encrypted BYTEA NOT NULL,
  last_sync_at TIMESTAMPTZ,
  sync_status TEXT,                    -- 'idle' | 'running' | 'error'
  sync_error TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE google_ads_accounts ENABLE ROW LEVEL SECURITY;
-- Standard org-membership policies; service-role-only writes
```

**Effort estimate:** ~5-8 hours of OATAS agent work + ~30 min of Shane configuring the OAuth credentials in OATAS settings UI.

**Success criteria:**
- A fresh LSA lead from Google Ads appears in OATAS within 4 hours of creation
- When the customer books a job in ServiceDesk, the lead auto-matches within 4 hours of OATAS sync
- Daily Slack digest fires at 8 AM Pacific with prior-day attribution
- Zero manual work needed for monthly LSA attribution report

---

### Phase B — Google Ads Search + GSC + Marketing Dashboard

**Goal:** Replace the manual SEO/Ads pulls and PDF report generation with a live in-product dashboard.

**Components:**

1. **`google_ads_campaign_sync` Edge Function** (daily, 2 AM)
   - Pulls campaign + ad-group + keyword metrics for last 7 days via GAQL
   - Stores in `ad_metrics_daily` table
   - Pulls `click_view` for any new gclids in last 24 hours, joins keyword/ad/campaign metadata
   - Backfill mode: option to pull last 90 days on first run

2. **Search Console sync via Lovable's GSC connector** (daily, 3 AM)
   - Top 100 queries (last 7 days)
   - Top 100 pages (last 7 days)
   - Site-level aggregates
   - Stores in `search_console_daily(org_id, date, dimension_type, dimension_value, clicks, impressions, ctr, position)`
   - Quick Wins detection: queries at position 2-15 with >30 impressions and CTR < expected for that position

3. **Marketing Dashboard page** at `/marketing-dashboard`
   - **Top KPI cards** (with prior-period deltas):
     - Organic Clicks
     - Paid Clicks
     - Total Conversions
     - Attributed Revenue (sum of matched_invoice totals × 1.0 — confidence factor TBD)
     - Cost per Acquisition (channel-weighted)
   - **Channel breakdown** (stacked area chart by day, last 30/60/90 days)
   - **Top Performing Queries** (organic) — sortable table from GSC sync
   - **Top Converting Keywords** (paid) — joins Search Ads keyword → gclid → matched_invoice
   - **Quick Wins** widget — actionable list of position 2-15 queries
   - **Generate Monthly Report PDF** button — uses stored data instead of live API calls

**Data model additions (Phase B):**

```sql
CREATE TABLE ad_metrics_daily (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  channel TEXT NOT NULL,               -- 'google_ads_search' | 'google_ads_lsa' | 'google_ads_pmax'
  campaign_id TEXT,
  campaign_name TEXT,
  ad_group_id TEXT,
  keyword_text TEXT,
  match_type TEXT,
  clicks INTEGER DEFAULT 0,
  impressions INTEGER DEFAULT 0,
  conversions NUMERIC DEFAULT 0,
  cost_micros BIGINT DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX uq_ad_metrics_daily ON ad_metrics_daily(organization_id, date, channel, COALESCE(campaign_id,''), COALESCE(keyword_text,''));

CREATE TABLE search_console_daily (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  dimension_type TEXT NOT NULL,        -- 'query' | 'page' | 'site'
  dimension_value TEXT NOT NULL,
  clicks INTEGER DEFAULT 0,
  impressions INTEGER DEFAULT 0,
  ctr NUMERIC DEFAULT 0,
  position NUMERIC DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX uq_search_console_daily ON search_console_daily(organization_id, date, dimension_type, dimension_value);

CREATE TABLE marketing_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  report_type TEXT NOT NULL,           -- 'monthly' | 'weekly' | 'quarterly' | 'ad-hoc'
  period_start DATE NOT NULL,
  period_end DATE NOT NULL,
  generated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  pdf_storage_path TEXT,
  json_summary JSONB,
  generated_by UUID                    -- user_id of who triggered it
);
```

**Effort estimate:** ~10-15 hours of OATAS agent work + GSC connector authorization step.

**Success criteria:**
- A user opens `/marketing-dashboard` and sees current-month attribution in <2 seconds
- "Generate Monthly Report PDF" button produces the equivalent of the Python-generated April SEO report
- Search Console quick wins update daily without manual intervention

---

### Phase C — gclid-keyword ROI + Anomaly Alerts + Quick Wins Automation

**Goal:** Become predictive instead of reactive.

**Components:**

1. **gclid-level ROI report**
   - Join: `marketing_leads.gclid` → `ad_metrics_daily` (via `click_view` lookup on gclid date) → `keyword_text` → `matched_invoice_number` → `sd_total_price`
   - Output: "These 10 keywords generated $X this month, these 5 keywords cost $Y with no conversions"
   - Direct ad-spend reallocation signal

2. **Anomaly alerts** (Slack)
   - Trigger conditions (per org, configurable thresholds):
     - Spend up >20% vs same day last week
     - Conversions down >30% vs same day last week
     - Average position drops >3 positions for a top-10 query
     - Lead-to-match rate falls below 30%
     - Sync job error >24 hrs without recovery
   - Quiet hours support (no 3 AM alerts)

3. **Weekly Quick Wins Slack** (Mondays, 9 AM)
   - Top 5 SEO opportunities ranked by potential additional clicks
   - "Here's what to do" recommendation per item (e.g., "Add FAQ schema to /services/oven-repair")
   - Past-week win tracking (queries that moved up in position)

4. **Monthly attribution PDF auto-generation**
   - Cron on 1st of month at 6 AM Pacific
   - Generates prior month's full attribution report
   - Emails to a configurable distribution list
   - Uploads to OATAS reports table for in-product viewing

**Effort estimate:** ~10-12 hours.

---

## Authentication strategy

### Decision: How does OATAS authenticate to Google Ads?

**Recommendation: Phase A uses the existing refresh token (reuse). Phase B/C can migrate to OATAS-owned OAuth client when needed for multi-client support.**

**Option A (reuse existing — RECOMMENDED for now):**
- Take the existing refresh token from `C:\Users\palli\mcp-google-ads\credentials.json`
- Paste into OATAS settings UI (encrypted via existing credential pattern)
- Token works against Kelly's account via the Ideas Realized MCC
- **Pros:** Zero new OAuth config, ships fastest
- **Cons:** Tied to Shane's personal Google account. If Shane's account loses access to the MCC, sync breaks.

**Option B (OATAS-owned OAuth client — better for SaaS long-term):**
- Create new OAuth client in OATAS's GCP project
- Build OAuth flow in OATAS settings UI (redirect → consent → callback → store refresh token)
- Each client org connects their own Google Ads via the standard OAuth dance
- **Pros:** Proper multi-tenant SaaS pattern, decouples from Shane's account
- **Cons:** ~4 hours additional work for OAuth flow

**Migration path:**
1. Ship Phase A with Option A (refresh token reuse)
2. Build OAuth flow as part of Phase B
3. Migrate Kelly's to OAuth-owned credential when second client onboards

### Search Console authentication

Lovable provides a native `google_search_console` connector with OAuth managed by Lovable's infrastructure. **Just authorize once via the dashboard.** No new auth code needed in OATAS — the connector exposes the API surface to the project.

**Action item:** Shane authorizes at https://lovable.dev/dashboard?connectors

---

## Cron / scheduling architecture

**Question:** Where does the cron live?

**Recommendation: Supabase `pg_cron` extension.** Already available in OATAS's Supabase project. Schedules SQL or HTTP function calls. Free, native, no new service to operate.

**Alternative considered:** External cron service (e.g., Cloudflare cron triggers, Vercel cron). Not chosen because OATAS data lives in Supabase — keep cron next to data.

**Job schedule (Phase A):**
| Job | Frequency | Time (UTC) |
|-----|-----------|-----------|
| `google_ads_leads_sync` (LSA) | Every 4 hours | 0, 4, 8, 12, 16, 20 UTC |
| `match_marketing_leads` | Every 4 hours, offset by 30 min | 0:30, 4:30, 8:30, etc. |
| `daily_slack_digest` | Daily | 15:00 UTC (8 AM Pacific) |
| `weekly_quick_wins` (Phase C) | Mondays | 16:00 UTC (9 AM Pacific) |
| `monthly_attribution_pdf` (Phase C) | 1st of month | 13:00 UTC (6 AM Pacific) |

---

## Open design questions (for deep-dive)

### 1. Match confidence and false positives

**Problem:** A customer's spouse calls from a different phone, or a customer has multiple service jobs and we incorrectly attribute to the wrong invoice.

**Possible approaches:**
- Confidence scores: exact phone + recent date = HIGH; phone match + 7+ day gap = MEDIUM; multiple matches = REVIEW
- Manual override UI in `/marketing-leads`
- Re-match button if office staff updates a job and the original match is wrong

### 2. Revenue accuracy

**Problem:** `lookup_jobs_by_phone` returns invoice numbers but not dollar amounts. We currently need a 2-step lookup. Multi-visit jobs (parts → return → repair) have a total but a single invoice might only show labor.

**Possible approaches:**
- Single-tool fetch: extend OATAS to return total revenue with phone lookup (preferred)
- Periodic background "revenue enrichment" job that fills in $ amounts after match
- Use `sd_total_price` from active job; fallback to sum of associated sales

### 3. Multi-channel attribution

**Problem:** A customer Googles → clicks LSA ad → calls. Same customer later Googles → clicks Search ad → fills form. Same customer → eventually books. Who gets credit?

**Industry-standard approaches:**
- **First-touch:** LSA gets credit (first interaction)
- **Last-touch:** Form gets credit (closest to conversion)
- **Multi-touch attribution:** Split credit across all touchpoints
- **Position-based:** 40% first, 40% last, 20% middle

**Recommendation:** Default to last-touch (simpler, defensible). Add a "multi-touch view" toggle as a Phase C enhancement showing all related leads for a single customer phone.

### 4. Lead deduping across channels

**Problem:** Same customer submits via LSA AND fills a website form within hours.

**Possible approaches:**
- Phone-based deduplication: when a new lead arrives, look back 7 days for any existing lead with same phone. Group as "lead cluster."
- Show both leads in the UI but let user mark as duplicates
- Auto-merge if phone + email match within 24 hrs

### 5. Privacy / PII handling

**Problem:** `marketing_leads` stores phone numbers, emails, IP addresses. GDPR, CCPA, etc.

**Possible approaches:**
- Retention policy: auto-delete leads older than X months (configurable per org)
- "Forget me" workflow: customer requests deletion, we can purge by phone/email
- IP address: store hashed or coarse-grained (city-level) only

### 6. Spam / abuse protection

**Problem:** Public Edge Function with a static API key could be abused by anyone with the key (high volume of fake leads).

**Already in place:**
- Per-key rate limit (60/min default)
- API audit log

**Could add:**
- Cloudflare Turnstile / hCaptcha on website forms (server-validates token before ingest)
- IP-based throttling
- Honeypot fields in forms

### 7. Slack notification noise

**Problem:** Once Phase A ships, every lead match fires a Slack ping. With 60+ leads/month, that's 60+ pings.

**Possible approaches:**
- Tier notifications: critical (high-value bookings, anomalies), important (matches), quiet (stuck leads)
- Per-channel routing: critical → on-call, important → general, quiet → digest only
- Configurable per-org and per-channel

### 8. Where does the matching logic actually live?

**Option A:** Edge Function loops through leads, calls `agent_lookup_jobs_by_phone` RPC for each
**Option B:** Single SQL query that LEFT JOINs marketing_leads against jobs by normalized phone

**Option B is dramatically faster** for high-volume orgs but harder to extend with non-phone match logic (email, name+date).

**Recommendation:** Start with Option A for flexibility. Migrate to Option B if performance becomes an issue.

---

## Risks and mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Google Ads API rate limits hit during sync | Low | Medium | Use cursor-based pagination, throttle to 100 req/min |
| OAuth refresh token expires/revoked | Medium | High | Catch refresh failures, fire Slack alert, fallback to manual OAuth re-auth flow |
| OATAS Rossware sync lags (stale jobs) | Medium | Medium | Already known issue. Phase A doesn't depend on real-time sync (4hr cadence acceptable) |
| False-positive matches misattribute revenue | Medium | Medium | Confidence scoring + manual override UI |
| Slack notification fatigue | Medium | Low | Tier system, per-org configurability, daily-digest default |
| Lovable GSC connector rate limits or breaks | Low | Medium | Same data available via direct Google API as fallback |
| `pg_cron` job failures silently | Medium | Medium | Each job writes a heartbeat to a `cron_health` table; alert if last run > 2× expected interval |

---

## Estimated effort summary

| Phase | OATAS agent work | Shane manual work | Total elapsed |
|-------|------------------|-------------------|---------------|
| Phase A | ~6-8 hours | ~30 min (OAuth creds paste) | ~1 week including testing |
| Phase B | ~10-15 hours | ~5 min (GSC connector authorize) | ~2 weeks |
| Phase C | ~10-12 hours | none | ~2 weeks |
| **Total** | **~26-35 hours** | **~35 min** | **~5 weeks** |

---

## Success metrics for the platform itself

**3 months after Phase A ships:**
- Time to generate monthly attribution report: <5 minutes (from ~2 hours)
- Lead-to-match latency: <4 hours (from "whenever Shane runs the script")
- Stuck leads followed up before going cold: >80% (from "we sometimes notice")

**6 months after Phase C ships:**
- Per-keyword ROI visibility on every Search Ads keyword
- Anomaly detection catches budget waste within 48 hours
- One-click client onboarding (paste OAuth tokens, sync starts within 4 hours)
- Marketing dashboard becomes the primary daily check-in (not Slack, not spreadsheets)

---

## Related docs

- `docs/ops/ads-attribution-plan.md` — End-to-end attribution plan (predecessor)
- `docs/ops/google-ads-search-attribution-plan.md` — Search-specific attribution
- `docs/ops/lsa-lead-validation-sop.md` — Manual LSA workflow (this automates it)
- `docs/ops/reports/monthly/2026-04-lsa-attribution.md` — April LSA report (manual baseline)
- `docs/ops/Q2-2026-ROADMAP.md` — Quarter roadmap (this update gets folded in)

---

## Deep-dive agenda (next session)

Topics to work through in detail before sending build spec to OAT:AS agent:

1. **Match confidence scoring** — specific rules for HIGH/MEDIUM/REVIEW
2. **Slack channel routing** — which channels for which event types
3. **Phase A OAuth credential setup** — exactly which fields go in encrypted columns
4. **Cron failure detection** — what does the heartbeat look like
5. **GBP call attribution** — closing the last big gap (direct phone calls)
6. **Revenue confidence factor** — what % of matched_invoice $ do we count as "ad-attributable"
7. **Multi-org future** — what changes when client #2 (and #3) onboard
8. **Reporting cadence per stakeholder** — Mark (owner), Kendra (GM), Shane (agency), Ideas Realized internal

Each topic could be a 15-30 minute conversation. Plan: work through 2-3 per session.
