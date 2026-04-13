# Google Ads — Search Campaign

**Last Updated:** April 11, 2026
**Status:** ACTIVE
**Account:** 854-489-2425 (Kelly's Appliance)
**MCC:** 992-664-9900 (Ideas Realized)
**Login:** kellysappliance@gmail.com (owner) / shane@ideas-realized.com (manager)
**Monthly Budget:** $620/month ($20/day)
**MCP Connected:** Yes (read-only via GAQL; writes via Python scripts)

---

## Current State

- **Campaign:** "Appliance Repair - Sonoma Marin" (Search)
- **Launched:** April 6, 2026
- **Bidding:** Maximize Conversions
- **Geo:** Sonoma, Marin, Napa counties
- **Keywords:** 41 phrase match keywords across appliance repair + city combos
- **Negative Keywords:** 60+ (HVAC, plumbing, small appliances, commercial, DIY)
- **Ad:** 1 RSA with 15 headlines, 4 descriptions
- **Extensions:** 8 sitelinks, 6 callouts, 1 structured snippet, 1 call extension
- **Conversion Tracking:** GTM dataLayer → GTM tag → Google Ads (fixed April 6)
- **Conversion ID:** AW-10866866733
- **Conversion Label:** 1L-TCPmLzY8cEK303L0o

## Performance (14-Day Pull — April 11, 2026)

### Search Campaign: "Appliance Repair - Sonoma Marin"

| Metric | Value |
|--------|-------|
| Clicks | 28 |
| Impressions | 240 |
| CTR | 11.7% |
| Cost | $102.66 |
| Conversions | **6** |
| CPA | **$17.11** |
| Avg CPC | $3.67 |

### LSA Campaign (System-Generated)

| Metric | Value |
|--------|-------|
| Clicks | 82 |
| Impressions | 453 |
| CTR | 18.1% |
| Cost | $326.50 |
| Conversions | **19** |
| CPA | **$17.18** |
| Avg CPC | $3.98 |

### Combined Totals

| Metric | Value |
|--------|-------|
| Total Clicks | 110 |
| Total Conversions | **25** |
| Total Cost | $429.16 |
| Blended CPA | **$17.17** |

## Pending Actions

- [x] ~~First conversion needed to unlock $600 credit~~ — **6 conversions as of Apr 11! Redeem code 6LEJG-TLAN6-DWR3 by April 23**
- [ ] **REDEEM $600 CREDIT NOW** (code: 6LEJG-TLAN6-DWR3, deadline: April 23)
- [ ] Change location targeting from "Presence or Interest" to "Presence only" (must do in UI)
- [ ] Add second RSA for A/B testing
- [ ] Consider ad schedule for business hours (8:30am-4:30pm)
- [ ] Add symptom keyword ad group (e.g., "washing machine won't drain")
- [ ] Add brand keyword ad group (e.g., "Whirlpool repair near me")
- [ ] Complete advertiser verification

## API & MCP Details

- **API Version:** v23
- **Python Library:** google-ads v30.0.0
- **Developer Token:** -9PfM8VmR0dqWkuR4dkvRg
- **Access Level:** Basic (15K ops/day)
- **MCP Server:** C:\Users\palli\mcp-google-ads\
- **Campaign Scripts:** C:\Users\palli\mcp-google-ads\create_kellys_campaign.py
- **Ad Scripts:** C:\Users\palli\mcp-google-ads\create_ad_and_sitelinks.py

## History

| Date | Action |
|------|--------|
| Apr 3, 2026 | Created Ideas Realized MCC, applied for API Basic Access (approved same day) |
| Apr 3, 2026 | Generated OAuth refresh token, connected MCP server |
| Apr 6, 2026 | Created campaign, ad group, keywords, RSA, extensions via Python API |
| Apr 6, 2026 | Fixed GTM conversion tracking (was silently failing — pushAdsConversion used gtag instead of dataLayer) |
| Apr 7, 2026 | Responded to external audit, added 46+ negative keywords |
| Apr 9, 2026 | Meta title/description rewrites shipped for 17 pages (CTR improvement) |
| Apr 11, 2026 | 14-day MCP pull: 6 Search conversions ($17.11 CPA), 19 LSA conversions. $600 credit unlockable. |
| Apr 11, 2026 | Differentiated conversion values: Appointment=$200, Contact=$150, Parts=$75 |
| Apr 11, 2026 | Added UTM parameter capture to Analytics.tsx |
