# Ads & Campaign Management Chat — Starting Prompt

Copy and paste this to start a new Claude Code session focused on Google Ads and paid advertising for Kelly's Appliance Center.

---

## Prompt

I'm managing paid advertising for Kelly's Appliance Center, an appliance repair business in Cotati, CA servicing Sonoma, Marin, and Napa counties. We have a Google Ads MCP server connected and the google-ads Python library installed for campaign management via API.

**Current ad infrastructure:**
- Ideas Realized MCC: 992-664-9900 (shane@ideas-realized.com)
- Kelly's Account: 854-489-2425 (linked as sub-account)
- Google Ads API: Basic Access approved, developer token active
- MCP server: C:\Users\palli\mcp-google-ads\ (cohnen/mcp-google-ads, API v23)
- google-ads Python library (v30.0.0) installed for write operations
- Campaign creation scripts: C:\Users\palli\mcp-google-ads\create_kellys_campaign.py
- Config: C:\Users\palli\mcp-google-ads\google-ads.yaml
- GTM Container: GTM-TNTGZKKZ (Version 4, conversion tracking live)

**Active campaigns:**
1. "Appliance Repair - Sonoma Marin" (Search, LIVE since April 6)
   - Budget: $20/day, Maximize Conversions
   - 42 keywords (phrase match) + 46 negative keywords
   - 15 headlines, 4 descriptions, 4 sitelinks
   - Final URL: kellysappliancerepair.com/schedule-prep
   - Geo: Sonoma, Marin, Napa counties
   - Early data: 35%+ CTR, ~$3.50 avg CPC
2. LSA campaign (auto-generated, profitable at $18.61/conversion)

**Conversion tracking:**
- Code pushes 'ads_conversion' to dataLayer on form submission
- GTM fires Google Ads Conversion Tracking tag (ID: 10866866733, Label: 1L-TCPmLzY8cEK303L0o)
- 9 conversion actions enabled (Book appointment, Submit lead form, Calls from ads, etc.)
- $600 credit pending — need 1 form conversion by April 23

**Keyword strategy documented:**
- 350+ keywords across 7 categories in docs/research/google-ads-keyword-strategy.md
- Categories: Geo+Generic (live), Symptoms, Competitors, Brands, Misspellings, Commercial, Out-of-box
- Plan: Add as separate ad groups within single campaign

**Negative keywords active (46):**
- HVAC/AC, plumbing, small appliances, commercial, non-repair (sales/install/delivery)

**Nextdoor ads:**
- Planning $5-10/day test after Google Ads has 2 weeks baseline
- Ad creative and targeting ready in docs/research/nextdoor-posting-media-plan.md

**Files and data:**
- Session context: .claude/session-context-april6.md
- Budget tracker: docs/research/advertising-budget-tracker.md
- Keyword strategy: docs/research/google-ads-keyword-strategy.md
- Competitor research: includes 17 local competitors across 3 counties

Focus areas for this chat:
1. Monitor and optimize the live Google Ads campaign
2. Add new ad groups (symptoms, competitors, brands) based on performance data
3. A/B test ad copy
4. Launch Nextdoor ads when ready
5. Track ROI and budget across all channels
6. Unlock the $600 credit (need first conversion)

**START HERE:** Read `docs/ops/INDEX.md` first for current platform status, then `docs/ops/Q2-2026-ROADMAP.md` for priorities. Platform-specific details are in `docs/ops/platforms/google-ads.md`. Update relevant files in `docs/ops/` when work is completed.

The project is at C:\dev\KellysApplianceCenter\kellys-nextjs
