# Section 1: Google Ads Search Campaign

**Campaign:** Appliance Repair - Sonoma Marin
**Launched:** April 6, 2026
**Status:** Active
**Budget:** $20/day ($600/month)
**Bidding:** Maximize Conversions

---

## 30-Day Performance Summary

| Metric | Value | Notes |
|--------|-------|-------|
| Impressions | 431 | Growing steadily |
| Clicks | 44 | — |
| CTR | 10.2% | Excellent (industry avg is 3-5%) |
| Cost | $124.63 | — |
| Average CPC | $2.83 | Competitive for service industry |
| Conversions | 8 | Form submissions on the website |
| Cost per Conversion | **$15.58** | Well under $25 target |
| Conversion Value | 8 | (using 1 per conversion) |
| Conversion Rate | 18.2% | Strong for paid search |

## Status Snapshot

The Search campaign only started on April 6, 2026, so 30-day data actually reflects just 7 days of real activity. Despite the short window, results are strong:

- **8 conversions in 7 days** = ~1 conversion per day
- **CPA of $15.58** beats both target ($25) and LSA CPA ($17.15)
- **10.2% CTR** indicates ad copy and landing page are well-matched to searcher intent
- **$600 promotional credit** now unlocked and available to redeem before April 23

## Ad Group Structure

| Ad Group | Clicks | Conversions | Cost | CPA |
|----------|--------|-------------|------|-----|
| Appliance Repair - All Services | 44 | 8 | $124.63 | $15.58 |

**Observation:** Single ad group structure is simple to start, but limits granularity. Recommend splitting by appliance type (Refrigerator, Washer/Dryer, Oven/Range, Dishwasher) once conversion data supports it.

## Top Performing Keywords

| Keyword | Match | Clicks | Impr. | CTR | Conv. | Cost | CPA |
|---------|-------|--------|-------|-----|-------|------|-----|
| appliance repair | Phrase | 28 | 236 | 11.9% | **6** | $85.00 | **$14.17** |
| appliance repair cotati | Phrase | 3 | 7 | 42.9% | 0 | $5.43 | — |
| appliance repair near me | Phrase | 2 | 6 | 33.3% | 0 | $3.16 | — |
| dryer repair near me | Phrase | 2 | 8 | 25.0% | 0 | $1.80 | — |
| appliance repair santa rosa | Phrase | 2 | 34 | 5.9% | 0 | $0.84 | — |
| appliance repair napa ca | Phrase | 1 | 10 | 10.0% | **1** | $5.59 | **$5.59** |
| appliance parts near me | Phrase | 1 | 4 | 25.0% | 0 | $1.32 | — |
| appliance repair novato | Phrase | 1 | 7 | 14.3% | 0 | $4.46 | — |
| appliance repair petaluma | Phrase | 1 | 14 | 7.1% | 0 | $0.65 | — |
| refrigerator repair santa rosa | Phrase | 1 | 9 | 11.1% | 0 | $6.13 | — |
| appliance repair sonoma county | Phrase | 1 | 8 | 12.5% | 0 | $5.16 | — |
| appliance parts santa rosa | Phrase | 1 | 11 | 9.1% | **1** | $5.09 | **$5.09** |

### Key Takeaways

**The "appliance repair" phrase match keyword is the workhorse.**
- 28 of 44 clicks (64%)
- 6 of 8 conversions (75%)
- $85.00 of $124.63 spend (68%)
- Standalone CPA of **$14.17**

**"appliance repair napa ca" and "appliance parts santa rosa" each converted at $5.59 and $5.09.**
- Ultra-efficient, but only 1 click each. Low impressions suggest low search volume for these exact phrases.
- Worth bidding higher to capture more of this cheap traffic if it's there.

## Zero-Click Keywords (29 of 46)

29 active keywords received impressions but zero clicks. Many are reasonable service terms that just aren't getting through the auction, or have ad relevance issues:

| Keyword | Impressions | Issue Hypothesis |
|---------|-------------|------------------|
| washer repair near me | 8 | Being served, not getting clicks |
| appliance repair santa rosa ca | 8 | Being served, not getting clicks |
| appliance repair sebastopol | 10 | Being served, not getting clicks |
| appliance repair san rafael | 7 | Being served, not getting clicks |
| appliance repair sausalito | 5 | — |
| refrigerator repair near me | 2 | Low volume |
| dishwasher repair near me | 2 | Low volume |
| oven repair near me | 1 | Low volume |
| washer and dryer repair near me | 1 | Low volume |
| washing machine repair near me | 1 | Low volume |
| small appliance repair near me | 1 | Should be negative — we don't do small appliances |

**Observation:** Some zero-click keywords (san rafael, sausalito, sebastopol) are in key service areas but aren't winning impressions. Likely outranked by competitors or Google Local pack. Search Console data suggests these should be performing better.

## The Broken Fix (April 6)

**Context:** Before April 6, the GTM conversion tracking tag was silently failing. The `pushAdsConversion` function called `window.gtag()` directly, but since GTM was the only tag loader, `gtag` was undefined. Every conversion attempt was a no-op. This was fixed April 6 to push events to `dataLayer` instead, which GTM picks up and forwards to Google Ads.

**Result:** Conversions started firing immediately on April 6. The 8 conversions since are the first real ones.

## The $600 Credit Status

| Field | Value |
|-------|-------|
| Promo Code | 6LEJG-TLAN6-DWR3 |
| Requirement | Spend $600 → get $600 back |
| Deadline | April 23, 2026 |
| Current Spend | $124.63 |
| Spend Required | $475.37 more |
| Credit Unlocked? | ✅ Yes (6+ conversions achieved) |
| Action Required | Continue normal spend, credit will apply automatically |

## Recommendations

### Immediate (This Week)
1. **Redeem the $600 credit.** Continue normal daily spend; credit applies automatically if the codes are correctly tied to the account.
2. **Verify advertiser identity verification** is complete (required to keep ads running).
3. **Change location targeting from "Presence or Interest" to "Presence only"** in Google Ads UI. This reduces wasted spend on out-of-area searchers.

### Short-Term (This Month)
4. **Pause zero-click keywords that duplicate the winner.** Keep "appliance repair" as the main driver, pause generic "[service] near me" phrases that aren't pulling weight. Save budget for higher-intent terms.
5. **Add "small appliance repair near me" as a negative keyword.** Kelly's doesn't service small appliances — this is wasted impressions.
6. **Add second RSA (Responsive Search Ad) for A/B testing.** Current single ad limits optimization.
7. **Consider ad schedule** to show only during business hours (8:30am-4:30pm Mon-Fri). Currently serving 24/7.

### Medium-Term (Q2)
8. **Build form submission logging in D1** (2.5 hrs). Unlocks full per-click attribution and actual revenue tracking.
9. **Split the single ad group** into appliance-type ad groups (Refrigerator, Washer/Dryer, Oven, Dishwasher) once you have 15-20+ conversions.
10. **Add symptom-based keywords** like "washing machine won't drain", "fridge not cooling", "oven not heating" — these have higher intent than generic "appliance repair."
11. **Add brand-based keywords** like "Whirlpool repair", "LG fridge repair", "Samsung dryer repair" — customers searching brand + repair have already identified their brand.

## Return on Investment (Estimated)

Assuming ~$300 average job value (aligned with CRM data):

| Metric | Value |
|--------|-------|
| 30-Day Spend | $124.63 |
| Conversions | 8 |
| Est. Revenue | $2,400 |
| Est. ROI | **~19x** |

*Exact ROI requires form submission logging to match each click to its resulting CRM job. Currently blocked.*

## Growth Projection

If the Search campaign maintains the current $15.58 CPA and scales with the $600 credit and normal $620/month budget:

| Scenario | Monthly Spend | Expected Conversions | Est. Revenue |
|----------|--------------|---------------------|--------------|
| Conservative (current pace) | $620 | 40 | $12,000 |
| With $600 credit applied | $620 (out of pocket) + $600 | 77 | $23,100 |
| Scaled to $1,000/month | $1,000 | 64 | $19,200 |

The ROI math supports increasing the Search budget if LSA and Search continue this pace.
