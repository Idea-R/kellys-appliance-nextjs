# Ads Review Cadence — Weekly / Monthly / Quarterly SOP

**Last Updated:** May 5, 2026
**Owner:** Ideas Realized
**Audience:** Whoever runs the ads operation (currently Shane / Ideas Realized)

This is the recurring SOP for keeping ads attribution, performance, and billing under control. Three cadences: weekly, monthly, quarterly.

---

## Daily — handled by office, not by this SOP

- Office checks LSA inbox, responds to messages within 1 hour
- Office grades obvious spam in LSA dashboard
- This is operational, not strategic

---

## Weekly Review (Mondays, ~30 minutes)

### 1. Pull last 7 days of LSA leads (5 min)
```
GAQL: SELECT local_services_lead.id, local_services_lead.contact_details,
              local_services_lead.creation_date_time, local_services_lead.lead_type,
              local_services_lead.service_id, local_services_lead.lead_status
       FROM local_services_lead
       WHERE local_services_lead.creation_date_time DURING LAST_7_DAYS
       ORDER BY local_services_lead.creation_date_time
```

### 2. Phone-match against OATAS (10 min)
For each phone-bearing lead, run OATAS `lookup_jobs_by_phone`. Classify:
- NEW MATCH (booked since lead date)
- HISTORICAL ONLY (old customer, didn't rebook)
- NO MATCH (lost lead)

### 3. Identify disputable + lost leads (5 min)
- **Disputable** = no-match charged leads still in 14-day window, with valid dispute reason (out-of-area, spam, cancelled, wrong-service)
- **Lost (callable)** = no-match charged leads where office can still recover

### 4. Pull last 7 days of Search ad performance (5 min)
```
GAQL: SELECT campaign.name, ad_group_criterion.keyword.text,
              metrics.clicks, metrics.impressions, metrics.cost_micros,
              metrics.conversions, metrics.cost_per_conversion
       FROM keyword_view
       WHERE segments.date DURING LAST_7_DAYS
         AND campaign.name = 'Appliance Repair - Sonoma Marin'
       ORDER BY metrics.clicks DESC
```

### 5. Pull form_submissions match status (when pipeline live) (3 min)
Once the form-capture pipeline is deployed, query D1 for last 7 days of submissions and their match status.

### 6. File the weekly report (5 min)
File: `docs/ops/reports/weekly/YYYY-MM-DD.md` using the template in [`reporting-system.md`](reporting-system.md). Include:
- LSA: leads, matched, lost, disputable
- Search: clicks, conversions, cost, top keywords
- Wins / losses / urgent actions

### 7. File any disputes immediately (variable)
Don't let the 14-day dispute window expire. File same-day during the weekly review.

---

## Monthly Review (1st of month, 1–2 hours)

Wait until ~7 days after month-end to let pending OATAS sales-journal entries close.

### 1. Pull all of last month's LSA leads
```
GAQL: WHERE local_services_lead.creation_date_time
            >= '{MONTH_START} 00:00:00'
            AND <= '{MONTH_END} 23:59:59'
```

### 2. Run full phone-match against OATAS
For each phone, `lookup_jobs_by_phone(phone, limit=1)`.
For each match, `lookup_job(invoice_number)` to get $ amount.

### 3. Pull all of last month's Search ad performance
- Campaign-level totals
- Keyword-level performance
- Ad-level A/B (if multiple RSAs running)

### 4. Pull form_submissions for the month (when pipeline live)
- Total submissions
- gclid coverage %
- Match status breakdown
- Revenue from matched

### 5. Pull OATAS business performance
- `job_volume(start, end)` — total jobs
- `repair_economics(start, end)` — total revenue, avg ticket
- `brand_mix`, `type_mix` — appliance breakdown
- `team_leaderboard`, `top_techs`
- `recall_pairs` — quality signal
- `stuck_jobs(threshold_days=14)` — operational red flag

### 6. Build the monthly report
File: `docs/ops/reports/monthly/YYYY-MM.md`
File: `docs/ops/reports/monthly/YYYY-MM-lsa-attribution.md` (per-lead detail)
File: `docs/ops/reports/monthly/YYYY-MM-lsa-actions.md` (office action checklist)

Use April 2026 as the template:
- [`2026-04.md`](reports/monthly/2026-04.md)
- [`2026-04-lsa-attribution.md`](reports/monthly/2026-04-lsa-attribution.md)
- [`2026-04-lsa-actions.md`](reports/monthly/2026-04-lsa-actions.md)

### 7. Update OATAS triage notes
For each new matched job, add a triage note via OATAS API tagging it `#LSA-ATTR` (LSA) or `#SEARCH-ATTR` (Search). Audit trail for the office.

### 8. Budget review — see Billing Checklist below

### 9. Strategic recommendations
What to scale, kill, or tweak. Surface in the monthly report's "Strategic Observations" section.

---

## Quarterly Strategic Review (every 3 months, 2-3 hours)

Use [`reporting-system.md`](reporting-system.md) Quarterly Strategic Review template.

Key questions:
1. Channel ROI ranking (LSA vs Search vs SEO vs GBP vs etc.)
2. Which keywords/categories to scale or cut
3. New channels to test (Bing, FB/IG, Nextdoor paid)
4. Operational issues impacting ad ROI (stuck jobs, recalls, response time)
5. Annual contract renewals / vendor reviews

---

## Billing & Add-on Review Checklist (Monthly)

Run this every month-end with the monthly report.

### 1. Pull current month's Google Ads spend
```
GAQL: SELECT customer.id, metrics.cost_micros
       FROM customer
       WHERE segments.date DURING LAST_30_DAYS
```

Cross-check against expected budget:
- Search: $620/mo target
- LSA: ~$520/mo target

Investigate variance > 10%.

### 2. Check `account_budget` for adjustments
```
GAQL: SELECT account_budget.id, account_budget.amount_served_micros,
              account_budget.total_adjustments_micros
       FROM account_budget
```
- `amount_served_micros` = lifetime spend
- `total_adjustments_micros` = lifetime credits/adjustments applied (invalid clicks, promotions)

If new credits appear month-over-month, note them.

### 3. Manually verify Promotions (UI only — no API)
Login to https://ads.google.com → Tools (wrench icon) → Billing → Promotions
- Are there any active promo codes / credits?
- Do any have upcoming deadlines we'd lose by not using?
- Was last month's promo (if any) fully redeemed?

### 4. Verify conversion tracking is healthy
```
GAQL: SELECT conversion_action.id, conversion_action.name,
              conversion_action.status, conversion_action.category,
              conversion_action.value_settings.default_value,
              conversion_action.click_through_lookback_window_days
       FROM conversion_action
       WHERE conversion_action.status = 'ENABLED'
```

Check:
- All expected conversion actions are status ENABLED
- Default values look reasonable (Book appointment $200, Submit lead form $50, Calls from ads $1)
- No duplicates accidentally created (e.g. "Calls from ads" + "Calls from ads (1)" — flag for cleanup)

### 5. Cross-check GTM tag firing
- Open Google Tag Assistant on the live site
- Test a form submit on `/contact` and `/schedule-prep`
- Confirm `pushAdsConversion` fires with the right conversion action
- Confirm GA4 also receives the event

### 6. Review LSA budget cap
LSA dashboard → Settings → Budget. Confirm daily cap matches the ~$520/month target. If overspending (April was $868), tighten the cap.

### 7. Check for unauthorized changes
```
GAQL: SELECT change_event.change_date_time, change_event.user_email,
              change_event.change_resource_type, change_event.changed_fields
       FROM change_event
       WHERE change_event.change_date_time DURING LAST_30_DAYS
       ORDER BY change_event.change_date_time DESC
       LIMIT 50
```
Look for changes by unexpected users (Google reps, account access additions). Note: this query has a 30-day lookback hard limit.

### 8. Add-on services review
- LSA Boost (premium placement) — currently OFF, monitor if needed
- Google Ads recommendations panel — review weekly, accept/reject deliberately (don't auto-apply)
- Performance Max campaigns — currently NOT ENABLED, revisit Q3
- YouTube ads — currently NOT ENABLED, low priority

### 9. Document budget decisions for next month
In the monthly report's "Budget Recommendations" section. Specifically:
- Does April's data justify shifting budget LSA → Search? (April said yes — Search 2.4x more efficient)
- Does the in-flight pipeline support increasing total spend?
- Are there days/hours/locations underperforming that should be excluded?

---

## Tools / Tab Cheat Sheet

When running a review, have these open:

| Tab | URL | Purpose |
|-----|-----|---------|
| LSA Dashboard | https://ads.google.com/local-services-ads | Lead inbox, disputes, status |
| Google Ads | https://ads.google.com | Search campaign metrics, billing, promotions |
| Search Console | https://search.google.com/search-console | Organic SEO performance |
| GA4 | https://analytics.google.com | Site analytics, conversion paths |
| OATAS | https://oatas.lovable.app | CRM data, job lookups |
| GitHub | (the kellys-nextjs repo) | Code changes / docs |
| GTM | https://tagmanager.google.com | Tag firing diagnostics |

---

## Common pitfalls to avoid

1. **Don't quote LSA CPA without matching to jobs.** Google's LSA dashboard shows CPA based on charged leads. Real CPA is `spend / matched jobs`, often 2x higher.

2. **Don't disable a campaign in the middle of the dispute window.** Disputes can still be filed for 14 days after charge — keep the campaign active until disputes resolve.

3. **Don't auto-apply Google Ads recommendations.** Some are good (negative keyword adds), some are bad (broad match expansion that breaks ROI). Review one-by-one.

4. **Watch for sync-staleness in OATAS.** `sync_status` should show green for both active and full sync. Red = data may be missing. Don't quote numbers from a red-status pull.

5. **The 14-day dispute window is non-negotiable.** Calendar reminder for end-of-week disputes.

6. **Don't ignore the "open" jobs that look stalled.** OATAS `stuck_jobs` is the bigger revenue lever than ad optimization most months.

---

## Related docs

- [`reporting-system.md`](reporting-system.md) — original cross-platform reporting framework
- [`ads-attribution-plan.md`](ads-attribution-plan.md) — channel-by-channel attribution strategy
- [`forms-capture-implementation.md`](forms-capture-implementation.md) — Search ad attribution build
- [`platforms/google-ads.md`](platforms/google-ads.md) — Search campaign config
- [`platforms/google-lsa.md`](platforms/google-lsa.md) — LSA campaign config
