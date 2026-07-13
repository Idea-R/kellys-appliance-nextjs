# Google Ads + LSA Action Plan — June 2026

**Generated:** June 16, 2026
**Source:** Live Google Ads audit (customer 854-489-2425, last 30 days) + the May/June reporting (organic keyword targets, search-terms analysis, LSA call attribution).
**Prepared by:** Ideas Realized

---

## Audit snapshot (last 30 days)

| Campaign | Spend | Conversions | CPA (platform) | Notes |
|---|---|---|---|---|
| **Search — "Appliance Repair, Sonoma Marin"** | $596 | 87 | **$6.85** | Efficient. Brand + Petaluma carry it. |
| **Local Services Ads (LSA)** | $920 | 49 | $18.77 | Converts via phone calls our attribution proved (~46% of charged leads book). Keep it. |

**What's working (do not touch):**
- **Brand search** converts cheaply and heavily (kellys appliance repair = 24 conv, kelly appliance repair = 11, etc.). Healthy.
- **Petaluma** is the MVP non-brand keyword: "appliance repair petaluma" (broad) = 271 impr, 54 clicks, **28 conversions**, 19.9% CTR.
- **Santa Rosa is now converting in paid** (it was zero in May): "appliance repair santa rosa" 3.5 conv, "refrigerator repair santa rosa" 4.5 conv. The market is starting to respond.
- "appliance parts near me" (8 conv) and "appliance repair near me" (6 conv) are solid.

**Structural issue:** everything lives in **one ad group** (brand, non-brand, and every city mixed together). That caps Quality Score and makes per-city landing-page relevance impossible.

---

## The plan

### 1. Negative keywords — apply now (campaign-level, phrase match)
Confirmed zero-conversion waste in the live search-terms data:
- `water heater` (water heater parts) · `scratch and dent` · `appliance store` / `appliance stores` (retail intent) · `appliances near me` (broad buy intent) · `appliance outlet` · `fairfield` (Solano, out of area) · `san francisco` · `commercial` · `handyman` · `tv repair` · `vacuum` · `used appliances`
- **Do NOT negative** the Santa Rosa, Petaluma, Napa, Marin, Sebastopol, Rohnert Park, or parts terms — all in-area or converting.
- **Competitor terms:** leave the ones that actually converted (`aaa appliance repair santa rosa`, `advanced appliance repair`, `triple a appliance` each booked a job) and keep `ape` (APE closed; conquest is legitimate). Negative only pure-junk competitor names with spend and zero conversions if any appear.

### 2. Split the single ad group (targeting + Quality Score)
Restructure the Search campaign into focused ad groups, each pointed at its best-matching landing page:
- **Brand** (kelly's appliance variants) → homepage. Keep separate so brand CPA stays clean and reporting is honest.
- **Core repair, non-brand** (appliance repair, appliance repair near me, repair service) → homepage or main services page.
- **Santa Rosa** (appliance/refrigerator/oven/washer repair santa rosa) → the **Santa Rosa landing page** once live. This is the strategic push: Santa Rosa is converting and is the weak market across every channel.
- **Petaluma** (the proven winner) → the Petaluma location page. Replicate the Petaluma playbook deliberately.
- **Parts** (appliance parts near me / santa rosa) → the parts page.

### 3. Keyword + match-type adjustments
- Keep the broad keywords that convert (Petaluma, near me) — they earn their spend.
- The zero-impression keywords (sebastopol, windsor, napa, dishwasher/dryer/washer "near me") are not serving. Either raise bids to get them into the auction or drop them; right now they are dead weight in the list. Recommend: keep the city ones (low volume but on-strategy), drop the generic appliance-type "near me" duplicates that overlap "appliance repair near me."
- **Add appliance-type + city keywords that match our high-demand organic terms** (oven repair, washer repair, the symptom queries) pointed at the matching service page, to capture the demand the organic report surfaced.

### 4. Geographic targeting
- Confirm the campaign geo covers **Sonoma + Marin + Napa** (Napa keywords exist but got zero impressions — likely outside the geo or under-bid). Add Napa if it is served.
- Make sure **Santa Rosa and the surrounding cities are in the LSA service area** (LSA ranks by proximity, so this is how you actually show up top in Santa Rosa regardless of the organic map pack).

### 5. LSA
- **Keep the budget** (it converts; the call attribution proved ~46% of charged leads book, ~4 to 6x return). The earlier idea of shifting budget away from LSA stays on hold until the full call-matcher data is in.
- Confirm **all appliance job types** are enabled and the **service area includes Santa Rosa** + the full coverage area.
- Consider a modest budget tilt toward capturing more Santa Rosa demand now that it is converting in both LSA and Search.

### 6. Landing pages / impressions-to-clicks (the CTR lever)
The "high impressions, low clicks" problem is organic (blog-post titles getting skipped). Fixes:
- **DONE (this session):** rewrote the SERP titles + descriptions on the two page-one blog posts with weak titles — "Washing Machine Acting Up? Warning Signs It Needs Repair" (was a generic "Signs Your Washing Machine...") and "How Often Should You Service Your Appliances? A Simple Schedule." The dryer post ("Why Is My Dryer Taking So Long? 7 Causes and Easy Fixes") was already optimized and left as is.
- These three pages pull ~24,000 impressions/month at sub-0.8% CTR; better titles are the fastest organic lift and model to several hundred extra clicks/month.
- For paid: each new ad group should point at its most relevant landing page (above), which lifts ad Quality Score and lowers CPA.

---

## Implementation status

- **DONE — negatives applied (June 16, via Ads UI):** added 14 campaign-level phrase negatives to "Appliance Repair, Sonoma Marin": `water heater`, `commercial`, `handyman`, `tv repair`, `vacuum`, `appliance store`, `appliance stores`, `scratch and dent`, `used appliances`, `appliance outlet`, `appliances near me`, `fairfield`, `vacaville`, `san francisco`. (The campaign already had AC/retail negatives like `ac repair`, `air conditioner`, `appliance delivery`, `appliance for sale`.)
- **DONE (repo, this session):** title/description rewrites on the two weak-titled high-impression blog posts (CTR lever); IndexNow set up (`public/<key>.txt` + `scripts/indexnow-submit.mjs`, run `npm run indexnow` after deploy).
- **DONE (verified):** Bing Webmaster Tools is set up, site verified, sitemap submitted and crawling (69 URLs, Success).
- **Still needs the Google Ads UI, deliberately (API connector is read-only):** the ad-group split + landing-page mapping (section 2), keyword/match-type cleanup (section 3), the geo check / Napa (section 4). Best paired with the Santa Rosa landing page going live.
- **LSA (UI):** confirm service area covers Santa Rosa + job types; hold budget.
- **Next levers:** Google Ads offline conversion import (feed OATAS LSA call→job matches back as conversions), ad assets/extensions (sitelinks, callouts), Bing Places listing.

> Note on application: Google Ads changes affect spend, so they are applied in the Ads UI rather than auto-pushed. The negatives are safe (they only reduce waste). The ad-group restructure should be done deliberately and is best paired with the Santa Rosa landing page going live.
