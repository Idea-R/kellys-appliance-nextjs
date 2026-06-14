# Qualified Lead Report — May 2026

**Generated:** June 14, 2026
**Data sources:** Google Ads API (live), OATAS MCP Bridge (live: `marketing_leads`, `lead_inbox`, jobs)
**Period:** May 1–31, 2026
**Prepared by:** Ideas Realized

> **What "qualified lead" means here:** a real service request from someone in or near the service area (Sonoma/Marin/Napa) that could become a billable job. Where we have a phone number, we can match it to an OATAS job and call it *converted*. Where we don't (Yelp, Nextdoor), the lead is real but currently unmeasurable past first contact.

---

## Executive Summary

Across every channel, Kelly's captured roughly **216 inbound touches** in May: 137 Google Ads conversions, 41 website-form leads, 32 Yelp requests, and 6 Nextdoor mentions. The standout is **Google Ads Search**, which is both the highest-volume and the most efficient paid channel at **$6.02 per conversion** and a **78% lead-to-job match rate** on the leads we can track.

Three things to act on:
1. **Google Ads is the proven engine.** Paid Search leads convert to real jobs at 78%, higher than organic/direct (59%). The money is working.
2. **Yelp is loud but blind.** 32 Yelp requests in May, and we can't match a single one to a job because Yelp hides the phone number. That's a measurement gap, not necessarily a conversion gap, but it means we're flying blind on a channel we pay a subscription for.
3. **Thumbtack and Angi are producing nothing.** Zero leads from either, ever, in the routing system. Either we're not active on them or the connection isn't wired. Worth a decision.

---

## Channel Scorecard

| Channel | May volume | Spend | Cost / lead | Phone-matchable? | Match → job rate | Status |
|---------|-----------|-------|-------------|------------------|------------------|--------|
| **Google Ads Search** | 95 conversions | $572.18 | $6.02 | Partial (form leads carry gclid/utm) | **78%** (audited) | 🟢 Scaling, efficient |
| **Google LSA** | 42 conversions | $902.56 | $21.49 | Yes (needs LSA export) | ~43% (Apr audit) | 🟡 Costly, slipping |
| **Website form — organic/direct** | 30 leads | $0 | $0 | Yes | 59% | 🟢 Free, converting |
| **Website form — Google-attributed** | 11 leads | (in Search spend) | — | Yes | 78% | 🟢 Best quality |
| **Yelp** | 32 requests | Yelp subscription (fixed) | — | ❌ No (phoneless) | unmeasured | 🟡 High volume, blind |
| **Nextdoor** | 6 mentions | $0 | $0 | ❌ No | brand advocacy | 🟢 Free goodwill |
| **Thumbtack** | **0** | — | — | — | — | 🔴 Not connected |
| **Angi** | **0** | — | — | — | — | 🔴 Not connected |

*Note on overlap:* Google Ads "conversions" (137) are the ad platform's own count (form submits + calls). The website-form rows (41) are what our OATAS pipeline captured, of which 11 carried Google attribution. These layers overlap — they are not additive. The scorecard reflects each system's native count.

---

## Google Ads: the conversion engine

Paid Search delivered **95 conversions at $6.02** in May (full detail in [`2026-05-google-ads.md`](2026-05-google-ads.md)). What makes Search "qualified," not just cheap:

- Of the website-form leads that carried Google attribution (gclid or `utm_source=google`), **7 of 9 matched to a real OATAS job in the May 14–28 audit — a 78% conversion rate**, higher than organic/direct's 59%.
- Two of those completed and billed inside the month: Tom Tepe (LG dryer, $169) and Katharine Defanti (Kenmore dishwasher, $149).
- Paid traffic is high-intent. People searching "appliance repair petaluma" or "appliance repair near me" need a tech now, and they book.

**LSA** brought 42 conversions but at $21.49 each, 3.6x the cost of Search. Using April's audited LSA match rate (43% of LSA leads became jobs), May's 42 LSA conversions imply roughly **18 jobs**. At May's $302 average ticket that's about **$5,400 in attributable revenue against $903 spend — a ~6x return**, consistent with April's audited 6.5x. LSA pays for the Google Guaranteed badge and visibility; it is not the efficiency play.

---

## Website form pipeline (the attribution backbone)

The `marketing_leads` pipeline went live May 14. For the back half of the month it captured **41 website-form leads** (30 organic/direct, 11 Google-attributed). The manual May 14–28 attribution audit ([`2026-05-website-lead-attribution-verification.md`](2026-05-website-lead-attribution-verification.md)) matched **20 of 31 leads (65%) to real OATAS jobs**, with **$562 in completed revenue already booked** and roughly **10 more jobs scheduled** into early June.

This is the infrastructure win of the quarter: for the first time we can trace paid click → form → OATAS job → revenue. The one missing piece is the automated match cron (Phase A) — right now the matching is manual, so the `matched_invoice_number` column shows only 10 matches when the true number is ~20+. Once Phase A ships, this becomes automatic every report.

---

## Yelp: high volume, zero visibility

Yelp was the second-largest lead source in May with **32 requests**, and the demand mix mirrors the business:

| Appliance | Yelp requests (May) |
|-----------|---------------------|
| Refrigerator | 9 |
| Washer | 6 |
| Dishwasher | 3 |
| Dryer | 3 |
| Oven | 2 |
| Freezer | 2 |

**The problem: not one Yelp lead is phone-matchable.** Yelp delivers the request through its own messaging without exposing a phone number, so we can't tie any of these 32 to an OATAS job. We know the requests came in; we have no idea how many became paying customers. For a paid channel, that's a real blind spot. Phase B of the attribution plan (match by name + city + appliance, or capture phone at first Yelp reply) is the fix.

---

## Thumbtack & Angi: the dormant channels

You asked specifically about Thumbtack. Here's the finding: **the lead routing system has never received a single Thumbtack or Angi lead.** The only sources flowing in are Yelp, Nextdoor, and property management (PURE Property Management work orders started June 1). First routed lead of any kind was May 19.

Two possibilities:
1. Kelly's isn't actively advertising on Thumbtack/Angi right now, or
2. The accounts exist but the n8n routing for them was never wired.

Either way it's a decision point. Thumbtack in particular is a pay-per-lead model that competitors in this market use heavily. **Recommend confirming account status before deciding whether to activate, reconnect, or formally drop them** so we stop wondering.

---

## Estimated qualified-lead revenue (May, paid channels)

Honest math with the attribution we have. These are estimates, not invoiced totals, because most jobs are scheduled or unmatched:

| Channel | Conversions | Est. match rate | Est. jobs | × $302 avg ticket | Spend | Est. ROI |
|---------|-------------|-----------------|-----------|-------------------|-------|----------|
| Search | 95 | 50% (conservative) | ~48 | ~$14,500 | $572 | ~25x |
| LSA | 42 | 43% (Apr audit) | ~18 | ~$5,400 | $903 | ~6x |
| **Paid total** | **137** | | **~66** | **~$19,900** | **$1,475** | **~13x blended** |

Even at deliberately conservative match rates, paid advertising is returning well over 10x. The Search number is the one to trust most — it has the cleanest attribution chain and the highest measured match rate.

---

## Action Items

### P0 — Measurement
- [ ] **Ship the Phase A match cron** so website-form → job matching runs automatically instead of by hand. This is the difference between a manual audit and a live dashboard.
- [ ] **Decide on Thumbtack & Angi.** Confirm whether the accounts are active. Activate, reconnect the routing, or formally drop them.
- [ ] **Close the Yelp attribution gap.** Capture phone at first Yelp reply, or build name+city+appliance matching (Phase B). 32 unmeasured leads/month is too many to keep guessing on.

### P1 — Optimization
- [ ] **Shift ~$300/mo from LSA to Search** (Search is 3.6x more efficient). See the Ads report.
- [ ] **Office follow-up on the 11 unmatched website leads** from the May audit, especially the 3 carrying `utm=google` — those are paid clicks that may not have been called back.
- [ ] **Dispute bad LSA leads** (out-of-area, spam) to bring the $21.49 CPA down. Google refunds qualifying LSA leads.

### P2 — Growth
- [ ] **Re-pull this report end of June** to capture revenue from the ~10 May jobs that were scheduled into June.
- [ ] **Build the property-manager channel.** PURE Property Management work orders began routing June 1 — a predictable, recurring B2B source worth nurturing.

---

## Data Notes

- Google Ads: live API pull June 14, 2026 (May 1–31). Conversions are platform-reported.
- OATAS: live MCP pull June 14, 2026. `marketing_leads` and `lead_inbox` queried directly. Org `96c6ab17…`.
- Lead-to-job match rates (78% Google, 65% overall) come from the manual May 14–28 audit; the automated match cron was not yet running, so the live `matched_invoice_number` column undercounts.
- Average ticket ($302.53) from OATAS `kpi_overview`, May 2026.
- "0 Thumbtack / 0 Angi" verified against the full `lead_inbox` history (all sources, all dates): only yelp, nextdoor, yelp_followup, property_mgmt appear.
