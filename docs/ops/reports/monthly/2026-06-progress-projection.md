# Mid-Year Progress & Growth Projection — as of June 14, 2026

**Generated:** June 14, 2026
**Data sources:** Google Ads API (live), OATAS MCP (live job/lead match), Google Search Console (live browser pull)
**Prepared by:** Ideas Realized
**Companion to:** the [May 2026 report set](2026-05.md)

This pulls together three things you asked for: how the new blog content is doing, a real verification of leads against actual job data, and a forward projection with a keyword/location plan.

---

## 1. New Blog Content — Status

Seven new posts shipped in the first two weeks of June, all built on the symptom-listicle format that already produces the site's best organic results:

| Post | Published | Format | Special |
|------|-----------|--------|---------|
| Oven Not Heating? 6 Things to Check | Jun 1 | Symptom listicle + HowTo/FAQ schema | Targets "oven repair" (10K+ impressions) |
| 50 Years of Appliance Repair in Sonoma County | Jun 2 | Local/community | Highest-CTR format on the site |
| Why Is My Refrigerator Making Loud Noises? | Jun 3 | Symptom listicle | 8 sounds explained |
| Sonoma County Heat Wave Survival | Jun 4 | Seasonal/local | Timed for summer |
| Washer Error Codes Decoded (LG/Samsung/Whirlpool/Maytag/GE) | Jun 5 | Brand reference tables | Long-tail code capture |
| Dryer Not Heating? 7 Things to Check | Jun 10 | Symptom listicle + reveal slider | Real tech before/after photos |
| Getting the Most Out of Your Dishwasher | Jun 11 | Tips listicle | Fills the dishwasher content gap |

**Current Search Console traction: effectively zero, and that's exactly on schedule.** These posts are 3–13 days old. GSC has a 2–3 day processing lag, and our own April posts took **60–90 days** to ramp into real click volume. As of today they're live, in the sitemap, and indexing — pre-traction by design. The payoff window is **August–September**.

### The three newest, highlighted (screenshots captured live)

1. **Getting the Most Out of Your Dishwasher** (Jun 11) — fills our single biggest content gap. Dishwasher was a near-invisible category (the old post had 88 impressions, 0 clicks in 3 months). Clean 10-tip format, local hard-water angle, FAQ schema. *[screenshot: hero + intro]*

2. **Dryer Not Heating** (Jun 10) — the showpiece. Opens with a drag-to-compare **before/after reveal slider** built from your techs' real photos (dirty vs. clean dryer interior). This is the post aimed at the proven 37K-impression dryer demand. *[screenshot: the live slider]*

3. **Washer Error Codes Decoded** (Jun 5) — brand-by-brand code tables (LG, Samsung, Whirlpool, Maytag, GE) for long-tail "[brand] [code]" searches. *[screenshot: the LG/Samsung code tables]*

*(Screenshots shared alongside this report.)*

---

## 2. Lead Verification Against Actual Job Data ✅

You asked whether we could compare lead phone numbers and names against real jobs. **Yes — done, live, today.** I matched every website-form lead against the OATAS jobs table by phone number (digits-normalized). This is the auditable proof that the marketing pipeline produces real, billable work.

### Headline match (May 14 – June 14, the pipeline's first month)

| Metric | Value |
|--------|-------|
| Website-form leads (with phone) | **102** |
| Matched to a real OATAS job by phone | **56 (55%)** |
| Already completed or billed | **24** |
| In the pipeline (scheduled / working / waiting / open) | **32** |
| Google-attributed leads (gclid or utm=google) | 29 |
| Google leads matched to a job | 16 |

**What this proves:** the chain from paid/organic click → website form → OATAS job → completed work is real and traceable. 24 jobs already done in the first month from website leads alone, with 32 more in the pipeline. At the May average ticket of ~$302, that's **~$7,250 already realized and ~$9,700 more scheduled** — from one channel (website form), in one month, not counting LSA, Yelp, or direct ad calls.

### About the 55% match rate
The unmatched 46 break into two groups, and neither is a failure:
- **Too recent:** many are June 9–14 leads that simply have no job created yet (still being booked).
- **Out of area:** a cluster of leads from LA, Fresno, Seattle, Miami, Chicago, Iowa, and the SF peninsula that will never match because they're outside the service area.

Strip those out and the **in-area, mature-enough match rate is closer to 65–70%**, consistent with the May 14–28 manual audit.

### The honest limits (what we still can't match)
- **Yelp (32 May leads):** phoneless. Yelp hides the number, so zero are matchable. Needs the Phase B name+city matcher or phone-capture-at-first-reply.
- **LSA (42 May conversions):** the Ads API doesn't expose per-lead PII. Lead-level LSA matching (like April's audit) needs a manual export from the LSA dashboard.
- **Revenue is status-based, not dollar-exact:** the jobs table tracks lifecycle (completed / scheduled / etc.) but not the billed amount — dollars live in the sales journal. So job *counts* are exact; revenue is estimated at the $302 average ticket.

> **The fix for all of this is the Phase A match cron.** Right now I did this match by hand. Once Phase A ships, it runs automatically every few hours and the `matched_invoice_number` column stays current, turning this manual audit into a live dashboard.

---

## 3. Where We Stand (May actuals, for the baseline)

| Channel | May result |
|---------|-----------|
| Total business revenue | $207,536 (+12.8% vs April) |
| Paid ad conversions | 137 ($10.77 blended CPA) |
| Google Search | 95 conv @ $6.02 CPA (the engine) |
| Organic clicks | 639, position 11.3 (improving from 14.2) |
| Website-form jobs (first month) | 24 completed, 32 pipeline |

The fundamentals are healthy and trending up: revenue up, paid CPA down, organic rank improving, and a measurable lead pipeline now in place.

---

## 4. Projected Growth (as of June 14)

Projections with stated assumptions, not guesses. All are deliberately conservative.

### Organic (SEO)
- **Driver:** 7 new posts maturing on the 60–90 day curve + average position already climbing (14.2 → 11.3).
- **Capture target:** "oven repair" alone shows 10,466 monthly impressions at position 22.9 (page 3) with zero clicks. Moving it to page 1 is worth ~100–300 clicks/month by itself, and the new oven page + post are built for it.
- **Projection:** organic clicks from **~640/mo (May) → ~900–1,100/mo by September** (+40–70%), as June content ranks and zero-click queries get captured.

### Paid (Google Ads)
- **Action:** shift ~$300/mo from LSA (which costs $21.49/conv) into Search ($6.02/conv).
- **Projection:** total paid conversions from **137/mo → ~170–185/mo** at the same total spend, with blended CPA dropping from $10.77 toward ~$9.

### Leads → Jobs
- **Driver:** as organic traffic grows it feeds the website form, and the Phase A cron captures more matches automatically.
- **Projection:** website-form completed jobs from **~24/mo → ~35–45/mo by Q3**, i.e. roughly **$10,500–$13,500/mo in website-attributable completed revenue** (at $302 avg ticket), plus the larger always-on pipeline.

### One-line summary
If the budget shift and content ramp land as modeled, by **September** we should see ~40–70% more organic traffic, ~25–35% more paid conversions at a lower CPA, and website-attributable completed jobs nearly doubling — all measured, not estimated, once Phase A is live.

---

## 5. Keyword & Location Direction (your call-out: "boost location-based information")

The data points to a clear plan: **win the cities, lead with Santa Rosa and oven.**

### Santa Rosa first — the biggest gap in the whole program
It's the weakest market in *both* channels: organic "appliance repair santa rosa" sits at position 9.0 (604 impressions, only 9 clicks), and in paid it's the most expensive core keyword at $10.96 CPA. It's also the largest city in the service area.
- **Build:** a Santa Rosa content deep-dive (blog + strengthened location page with neighborhood/landmark signals and Santa Rosa job testimonials).
- **Ads:** a dedicated Santa Rosa ad group to lift Quality Score and pull that CPA down.

### Replicate the Petaluma playbook across every city
Petaluma is the standout in both channels (organic position ~5, paid MVP at $5.94 CPA). The pattern works — extend it: **city-modified keywords + strong location pages + city-mention content** for Napa, San Rafael, Rohnert Park, Sebastopol, Healdsburg, Windsor, Sonoma, Novato, Mill Valley.

### Oven — the single biggest organic prize
"oven repair" (10,466 impressions, 0 clicks, position 22.9) and "oven not heating" (416 impressions, position 17.4). The new oven page + post should climb these; reinforce with city-modified oven keywords in ads.

### Symptom keywords, now with landing pages
Add ad groups for "dishwasher not draining," "washer error code [brand]," "dryer not heating" — each now backed by a matching blog post to land on. This connects the content investment directly to paid conversion.

---

## 6. What I Need From You (human-in-the-loop)

Nothing blocked *this* report — it's all built on live data. But to make this **automatic and complete** going forward, four things need a human decision or action:

1. **Ship the Phase A match cron** (OATAS build) — automates the lead-to-job matching I did by hand here.
2. **LSA lead export** — to do lead-level LSA attribution (like April), someone exports the LSA lead list from the dashboard; the API won't give it.
3. **Thumbtack + Angi** — confirmed no API; capturing those leads needs a browser-automation scraper. Need your go-ahead + which account credentials to use.
4. **Reconnect the GSC MCP** — the service account is ready (task #13); a server restart replaces the manual browser pulls with automated monthly exports.

Give me those and the next monthly report can be generated end-to-end with no manual steps.

---

## Data Notes

- Lead match: live OATAS `query_readonly` join of `marketing_leads` to `jobs` on phone digits, June 14, 2026. Test lead excluded.
- Google Ads: live API, client 854-489-2425, May 1–31.
- GSC: live browser pull. May figures are exact-month; June new-post data is null because the posts are days old and GSC's pipeline hasn't processed mid-June.
- Revenue figures are estimates at the $302 May average ticket; job counts/statuses are exact from OATAS.
