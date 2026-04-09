# Google Ads — Search Campaign

**Last Updated:** April 9, 2026
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

## Performance (First 2 Days)

| Metric | Value |
|--------|-------|
| Clicks | 9 |
| Impressions | 52 |
| CTR | 35%+ |
| Cost | ~$33 |
| Conversions | 0 |
| Avg CPC | ~$3.67 |

## Pending Actions

- [ ] First conversion needed to unlock $600 credit (deadline: April 23)
- [ ] Change location targeting from "Presence or Interest" to "Presence only" (must do in UI)
- [ ] Add second RSA for A/B testing
- [ ] Consider ad schedule for business hours (8:30am-4:30pm)
- [ ] Consider switching to Manual CPC until conversion data exists
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
