# Google Ads Performance — May 2026

**Generated:** June 14, 2026
**Data source:** Google Ads API (live MCP pull), client account 854-489-2425 (`8544892425`), manager `9926649900`
**Period:** May 1–31, 2026
**Prepared by:** Ideas Realized

---

## Executive Summary

May was a strong month for paid search. **Google Ads Search nearly doubled its conversions (53 → 95, +79%) while getting more efficient ($7.38 → $6.02 CPA).** Search now carries the program: it drove 69% of all paid conversions on 39% of the spend. LSA went the other way, slipping to 42 conversions at a $21.49 CPA (its worst efficiency of the year so far).

Total paid spend was **$1,474.74** for **137 conversions** at a blended **$10.77 CPA**, down 13% from April's $12.34. Petaluma keywords remain the single best pocket of the account, and Santa Rosa is still the weakest of the core cities, the same pattern we see in organic search.

---

## Search vs LSA Side-by-Side

| Metric | Google Ads Search | Google LSA | Winner |
|--------|------------------|-----------|--------|
| Spend | $572.18 | $902.56 | Search (37% cheaper) |
| Clicks | 265 | 224 | Search |
| Impressions | 2,794 | 1,309 | Search |
| CTR | 9.5% | 17.1% | LSA (badge visibility) |
| Conversions | **95** | 42 | **Search** |
| **CPA** | **$6.02** | $21.49 | **Search (3.6x more efficient)** |
| Avg CPC | $2.16 | $4.03 | Search (46% cheaper) |
| **Combined** | **$1,474.74 spend / 137 conversions / $10.77 blended CPA** | | |

**Search is now 3.6x more cost-efficient than LSA per conversion** — a wider gap than April's 2.4x, because Search improved while LSA got more expensive.

---

## Month-over-Month Trend (April → May)

| Metric | April | May | Change |
|--------|-------|-----|--------|
| Search conversions | 53 | **95** | **+79%** |
| Search CPA | $7.38 | **$6.02** | -18% (better) |
| Search spend | $391 | $572 | +46% |
| LSA conversions | 49 | 42 | -14% |
| LSA CPA | $17.71 | $21.49 | +21% (worse) |
| LSA spend | $868 | $903 | +4% |
| Total conversions | 102 | **137** | **+34%** |
| Blended CPA | $12.34 | **$10.77** | -13% (better) |

The story: we put 46% more budget into Search and it scaled cleanly — conversions rose faster than spend, so CPA actually dropped. This is the signal we were waiting for in April ("Search is now efficient enough to scale"). It scaled. LSA, meanwhile, spent slightly more for fewer conversions.

---

## Top May Keywords (Search)

| Keyword | Match | Clicks | Conv | Cost | CPA |
|---------|-------|--------|------|------|-----|
| appliance repair petaluma | Broad | 52 | **26** | $154.55 | $5.94 |
| appliance repair near me | Broad | 40 | 17 | $70.90 | **$4.17** |
| appliance repair | Phrase | 33 | 15 | $61.65 | **$4.11** |
| appliance repair | Broad | 25 | 8 | $45.35 | $5.67 |
| appliance parts near me | Broad | 20 | 4 | $36.72 | $9.18 |
| appliance parts santa rosa | Phrase | 12 | 3 | $40.55 | $13.52 |
| appliance repair sonoma county | Phrase | 10 | 3 | $26.96 | $8.99 |
| appliance repair santa rosa | Phrase | 10 | 2 | $21.93 | $10.96 |
| refrigerator repair santa rosa | Broad | 8 | 2 | $21.57 | $10.78 |
| oven repair near me | Phrase | 2 | 1 | $4.90 | $4.90 |
| appliance repair rohnert park | Phrase | 4 | 1 | $8.08 | $8.08 |
| appliance repair cotati | Phrase | 6 | 1 | $7.33 | $7.33 |

**Wins:**
- **"appliance repair petaluma" is the account's MVP** — 26 conversions at $5.94, more than a quarter of all Search conversions from one keyword. Petaluma was also the standout in April ($4.18 CPA).
- **"appliance repair near me"** (broad + phrase combined) is the volume engine: 20 conversions in the $4 range.
- **"oven repair near me"** converted at $4.90. Small volume (2 clicks) but worth watching now that the new `/services/oven-repair` page and oven blog post are live.

**Watch:**
- **Santa Rosa is still the soft spot.** "appliance repair santa rosa" went from 0 conversions in April to 2 in May, an improvement, but at $10.96 CPA it's nearly double the account average, and "appliance repair santa rosa ca" got 1 click and 0 conversions. Santa Rosa underperforms in both paid AND organic. It's the largest city in the service area and our weakest channel there.
- **"appliance parts santa rosa"** at $13.52 CPA is the most expensive converting term. Parts intent converted cheaply in April ($1.50); this month it was pricey. Worth a look at the parts landing experience.

---

## What Changed and What to Do

### Recommended budget shift (carry over from April)
April's report recommended testing a heavier Search / lighter LSA split. May's numbers make the case stronger: Search at $6.02 vs LSA at $21.49. **Proposed test: move ~$300/mo from LSA into Search.** At the current Search CPA that's roughly 50 more conversions per month for the same total spend.

### Santa Rosa needs a dedicated push
Same recommendation from the SEO side: Santa Rosa is the biggest gap in the whole program, paid and organic. A Santa Rosa-specific landing page (or strengthened location page) plus a tighter Santa Rosa ad group could lift both conversion rate and Quality Score, bringing that $10.96 CPA down.

### Action items
- [ ] **Test the $300 LSA→Search budget shift** for 4 weeks; compare blended CPA.
- [ ] **Investigate LSA efficiency drop** ($17.71 → $21.49 CPA). Check the LSA lead dispute rate (LSA refunds bad leads — are we disputing spam/out-of-area?) and the daily cap.
- [ ] **Build out Santa Rosa** landing + ad group. Both channels underperform there.
- [ ] **Add symptom keywords** ("dishwasher not draining", "washer error code", "dryer not heating") now that we have matching blog content to use as landing pages.
- [ ] **Confirm conversion tracking scope.** 95 Search conversions is a big jump; verify the conversion actions counted (form submits vs calls vs both) so the number is apples-to-apples with April. See the Qualified Lead report for the attribution detail.

---

## Data Notes

- Live Google Ads API pull June 14, 2026, covering May 1–31.
- Conversion counts are Google's platform-reported conversions (form submissions + calls counted via GTM). These are not yet matched one-to-one to OATAS jobs for Search — see [`2026-05-qualified-leads.md`](2026-05-qualified-leads.md) for the lead-to-job attribution that exists.
- LSA appears as `LocalServicesCampaign` (channel type `LOCAL_SERVICES`); Search appears as "Appliance Repair - Sonoma Marin" (channel type `SEARCH`).
- Cost figures converted from micros (1,000,000 micros = $1.00).
