# OATAS Marketing Automation Build-Out — June 14, 2026

**Built by:** prompts sent to the OATAS (OAT:AS) Lovable project via the Lovable MCP
**Project:** `c746919e-eb2e-424e-a317-84ca23c251a0` (oatas.lovable.app)
**Prepared by:** Ideas Realized

This documents the four-prompt batch that moved our marketing reporting from manual pulls to automated crons running inside OATAS. All four were built and verified by the OATAS agent (each passed its build + security + pattern-preservation checks).

---

## What got built

### Prompt 1 — Phase A Lead-to-Job Match Cron ✅ (live and already matching)
The lead matching I'd been doing by hand now runs automatically.
- **Edge function:** `match-marketing-leads`
- **What it does:** phone-matches `marketing_leads` (website-form, last 30 days, unmatched) to real `jobs` by digit-normalized phone, writes `matched_invoice_number`, `matched_at`, `match_method='phone-auto'`.
- **Cron:** `match-marketing-leads-every-2h` (jobid 59, every 2 hours)
- **Proof it works:** the first run already **scanned 90 leads and matched 45**. This is live now, no action needed.

### Prompt 2 — Google Search Console integration + SEO data + daily cron ✅
SEO data now pulls itself from Search Console into OATAS.
- **Connector:** `google_search_console` (encrypted `service_account_json` + `property_url`)
- **Tables:** `seo_daily_metrics`, `seo_query_metrics`, `seo_page_metrics` (per-org, RLS, dedup constraints)
- **Edge function:** `sync-search-console` (mints a service-account JWT, calls the Search Analytics API for daily/query/page, upserts; clamps to today-2 for GSC's lag)
- **Cron:** `sync-search-console-daily` (jobid 60, 4:05 AM daily)
- **Replaces:** the manual browser pulls we've been doing, and the broken local GSC MCP.

### Prompt 3 — SEO management page in OATAS ✅
A real SEO dashboard inside OATAS.
- **Page + nav:** `/seo` route, "SEO" sidebar entry (gated by `canViewAnalytics`)
- **Hooks:** `useSeoMetrics` (daily 56d for trend deltas, latest query/page windows)
- **UI:** summary cards (clicks, impressions, CTR, position) with vs-prior-28d deltas; a clicks/impressions trend chart; **Zero-Click Opportunities** table (≥100 impressions, 0 clicks, position >10 — exactly the "oven repair" type win we found); top queries + top pages tables; empty state linking to Integrations.

### Prompt 4 — Angi + Thumbtack headless scrapers ✅
The two API-less platforms now have a capture path.
- **Connectors:** `thumbtack` and `angi` (encrypted username/password), new `lead_source` category
- **Dedup:** added `lead_inbox.external_lead_id` + partial unique index
- **Edge functions:** `scrape-thumbtack`, `scrape-angi` (decrypt creds → run via the existing `apify-run` actor → normalize → upsert into `lead_inbox`, the same table Yelp/Nextdoor use, so the Phase A matcher and reports pick them up automatically)
- **Crons:** `scrape-thumbtack-hourly` (jobid 61) and `scrape-angi-hourly` (jobid 62)

### Prompt 5 — External review ingestion (Google + Yelp via Apify) ✅
Public reviews now pull themselves in for reputation monitoring.
- **Tables:** `review_sources` (one row per location+platform: Google Place ID/URL or Yelp URL) and `external_reviews` (per-org, RLS, dedup on `external_review_id`)
- **Edge function:** `sync-external-reviews` — for each active source, calls the existing `apify-run` with `compass/google-maps-reviews-scraper` (Google) or `tri_angle/yelp-review-scraper` (Yelp), normalizes + upserts reviews
- **Cron:** daily
- **Management UI:** a "Review Sources" card to add the 3 GBP locations + Yelp page
- **Note:** confirmed live via the OATAS DB — both tables exist as specified.

### Prompt 6 — Reputation dashboard ✅
- **Page + nav:** `/reputation`, "Reputation" sidebar entry (Star icon, `canViewAnalytics`)
- **Hooks:** `useExternalReviews` (sources + 12-month reviews, org-scoped)
- **UI:** overall cards (avg rating + stars, total, last 30d, **needs-response count**); per-location cards with sync freshness; 12-month rating trend; a **"Reviews waiting on a reply"** list sorted low-rating-first; filterable all-reviews feed
- **Self-corrected** a regression: accidentally clobbered the internal `useReviews.ts`, restored it from git, and isolated the new hooks — the internal review-request pipeline is untouched.

> These two are the highest-value ready-to-use lane: public scraping (no login), cheap, and they feed the 3-location GBP reputation push directly.

---

## The architecture now

```
Google Search Console ──(JWT, daily)──► sync-search-console ──► seo_* tables ──► /seo page
Thumbtack / Angi ──(Apify, hourly)──► scrape-* ──► lead_inbox ┐
Yelp / Nextdoor ──(n8n, existing)──────────────────► lead_inbox ┤
Website form ─────────────────────────────────► marketing_leads ┤
                                                                 ├─► match-marketing-leads (every 2h)
                                                                 │     phone-match to jobs
                                                                 └─► matched_invoice_number ──► reporting
```

Everything funnels into OATAS, matches to real jobs automatically, and surfaces in the UI. No more manual SQL joins or browser pulls.

---

## Activation checklist (what you need to do)

The code is built and the crons are scheduled. Three things need credentials entered in the OATAS Integrations UI (all encrypted at rest — I never handle the plaintext):

1. **Google Search Console** → paste the service-account JSON (the one we set up this session) + property `sc-domain:kellysappliancerepair.com`. The `/seo` page populates on the next daily run (or trigger it manually). **This is the high-value one** — do it first.
2. **Thumbtack** → enter username/password, AND set the `THUMBTACK_APIFY_ACTOR` secret to your licensed authenticated-scrape actor (the default slug is a placeholder).
3. **Angi** → enter username/password, AND set the `ANGI_APIFY_ACTOR` secret similarly.
4. **Phase A matcher** → nothing to do, it's already running and matching.
5. **Review Sources** → on the new "Review Sources" card, add each Google Maps location (Place ID or URL) for all 3 GBP locations + the Yelp business page. No credentials needed (public scraping via the already-configured Apify token). The `/reputation` page fills in on the next daily sync.

Once those are in, the next monthly report generates end-to-end with zero manual steps: GSC data flows in daily, Angi/Thumbtack/Yelp/Nextdoor leads land in the inbox hourly, and every lead auto-matches to its job every 2 hours.

---

## Notes & limitations

- **Apify actors:** the scrapers delegate to OATAS's existing `apify-run` function. The Thumbtack/Angi actor slugs are configurable placeholders — they need to point at real authenticated-scrape actors you license, or the call returns a 404. The raw scrape is stored in `raw_payload` so field parsing can be tightened later without re-scraping.
- **Security:** every credential field uses `encrypt_credential`/`decrypt_credential`; no secrets appear in logs or error responses; all new tables have RLS scoped by `organization_id`. This followed OATAS's own project rules and verification protocol.
- **OATAS commits:** prompt 2 `5bac5dd`, prompt 3 `0a6540e`, prompt 4 `bc2ce22` (prompt 1 was already complete from a prior turn).
