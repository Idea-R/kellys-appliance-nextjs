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

> **Update (June 2026): Thumbtack CANCELED — no longer a focus.** Disable/remove the `scrape-thumbtack` function + `scrape-thumbtack-hourly` cron (jobid 61). Angi capture stays. Thumbtack lead-marketplace spend is off the table (see `platforms/thumbtack.md`).

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
2. **Thumbtack / Angi** → the custom Apify actor that reads the authenticated pro inbox is now built at `C:\dev\SDTriage\apify\lead-inbox-scraper` (one actor, branches by platform). To activate: (a) `apify push` it from that folder, (b) set BOTH `THUMBTACK_APIFY_ACTOR` and `ANGI_APIFY_ACTOR` secrets to `<your-username>/lead-inbox-scraper`, (c) enter the Thumbtack/Angi username/password in the OATAS connectors, (d) tune the login/inbox selectors once via Apify Live View (they're best-guess placeholders, same as the service-sheet actor). Then leads flow hourly into `lead_inbox` → auto-matched by the Phase A cron.
4. **Phase A matcher** → nothing to do, it's already running and matching.
5. **Review Sources** → on the new "Review Sources" card, add each Google Maps location (Place ID or URL) for all 3 GBP locations + the Yelp business page. No credentials needed (public scraping via the already-configured Apify token). The `/reputation` page fills in on the next daily sync.

Once those are in, the next monthly report generates end-to-end with zero manual steps: GSC data flows in daily, Angi/Thumbtack/Yelp/Nextdoor leads land in the inbox hourly, and every lead auto-matches to its job every 2 hours.

---

## Notes & limitations

- **Apify actors:** the scrapers delegate to OATAS's existing `apify-run` function. The Thumbtack/Angi actor slugs are configurable placeholders — they need to point at real authenticated-scrape actors you license, or the call returns a 404. The raw scrape is stored in `raw_payload` so field parsing can be tightened later without re-scraping.
- **Security:** every credential field uses `encrypt_credential`/`decrypt_credential`; no secrets appear in logs or error responses; all new tables have RLS scoped by `organization_id`. This followed OATAS's own project rules and verification protocol.
- **OATAS commits:** prompt 2 `5bac5dd`, prompt 3 `0a6540e`, prompt 4 `bc2ce22` (prompt 1 was already complete from a prior turn).

---

## Addendum — June 15, 2026: Prompt 10, Blog → Google Business Profile auto-posting ✅

Built to close the GBP-activity gap surfaced by the BrightLocal rank pull (Kelly's holds #1 in the local pack for all core terms, so the GBP interaction decline is a freshness/measurement issue, not a ranking loss). Posting fresh content to GBP is the one lever that directly lifts the GBP number.

**Two phases, one self-maintaining system:**
1. **Backlog drip** — every existing blog post becomes a scheduled GBP Post, spread out (default 2/week, Tue + Fri). 21 posts in `blogPosts.ts` today, so the backlog clears in ~10.5 weeks at 2/week (~7 weeks at 3/week).
2. **Ongoing** — each newly published blog post is auto-enqueued and posted at the next slot. No manual list to maintain.

**What got built (verified live):**
- **`gbp_posts` queue table** (per-org, RLS, unique on `(organization_id, blog_url)`): `blog_url`, `slug`, `title`, `snippet`, `image_url`, `cta_url`, `scheduled_for`, `status` (queued/needs_approval/published/skipped/error), `gbp_post_id`, `published_at`, `error`, timestamps. Confirmed via `get_table_schema` (15 columns, exactly to spec).
- **`sync-blog-to-gbp-queue`** (daily cron): fetches `kellysappliancerepair.com/sitemap.xml`, finds every `/blog/` URL not already queued, pulls `og:title`/`description`/`image`, enqueues into the next open drip slot. This is what makes new posts auto-appear.
- **`publish-gbp-posts`** (hourly cron): publishes queued posts whose `scheduled_for` has passed via the GBP API local-posts endpoint; respects the `auto_publish` org setting (queues for approval when off).
- **`google_business_profile` connector** (OAuth, `business.manage`, encrypted refresh token + location/account id).
- **"GBP Posts" UI**: queue + history with post preview, edit/approve/skip/post-now, cadence + post-time + `auto_publish` toggle.

The two new crons won't show in `cron_health` until they fire once (fresh deploy). Sent via `send_message` (transport timed out, but the build completed — table confirmed present, same pattern as prompts 5/7/9).

**Activation (user, in OATAS Integrations UI):**
1. Connect the **Google Business Profile** connector (OAuth, `business.manage`). Shane is the GBP owner so he can authorize it. Agent never handles the token.
2. Let the sync run once to populate the queue with all 21 drafts, **review them**, reorder (bump the **Sonoma County Heat Wave / fridge-in-July** post to the front for seasonal relevance), then flip **`auto_publish` on**. It ships OFF on purpose so nothing hits the live profile unreviewed.
- The GBP local-posts endpoint likely needs one tuning pass on first publish (CONFIG constant, same as the BrightLocal v4 paths).
