# Google Analytics (GA4)

**Last Updated:** April 9, 2026
**Status:** ACTIVE (MCP needs testing)
**Account:** shane@ideas-realized.com
**Property ID:** G-6NW7LJG197
**Monthly Budget:** Free
**MCP Connected:** Partially (configured, not tested)

---

## Current State

- **GTM Container:** GTM-TNTGZKKZ
- **GA4 fires via:** GTM (not direct gtag.js)
- **Events tracked:** page_view, form_submission, phone_click, ads_conversion
- **Conversion tracking:** Fixed April 6 (was silently failing before)
- **MCP Server:** analytics-mcp.exe via pipx
- **Auth:** ADC with quota project ideas-realized-marketing

## MCP Tools Available (Need Testing)

- `get_account_summaries` — List GA properties
- `get_property_details` — Property info
- `run_report` — Pull GA4 reports
- `run_realtime_report` — Real-time visitor data
- `get_custom_dimensions_and_metrics` — Custom dimensions
- `list_google_ads_links` — GA4-Ads linkage

## Q2 Priorities

- [ ] **TEST MCP CONNECTION** (high priority)
- [ ] Verify GA4 property access via MCP
- [ ] Pull first GA4 report (sessions, users, top pages, conversions)
- [ ] Verify Google Ads link in GA4
- [ ] Set up goals/conversions matching the GTM events
- [ ] Include GA4 data in monthly reporting
