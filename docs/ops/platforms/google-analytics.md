# Google Analytics (GA4)

**Last Updated:** April 11, 2026
**Status:** ACTIVE (MCP DISABLED — use browser UI for now)
**Account:** shane@ideas-realized.com
**Property ID:** G-6NW7LJG197
**Numeric Property ID:** 507428307 (from .env.local GA4_PROPERTY_ID)
**Monthly Budget:** Free
**MCP Connected:** BROKEN — analytics-mcp.exe hangs, needs fix (see below)

---

## Current State

- **GTM Container:** GTM-TNTGZKKZ
- **GA4 fires via:** GTM (not direct gtag.js)
- **Events tracked (actual names from code audit Apr 11):**
  - `page_view` — SPA route changes (Analytics.tsx)
  - `generate_lead` — form submissions (NOT `form_submission` as previously documented)
  - `link_click` with `link_type: "tel"` — phone clicks (NOT a dedicated `phone_click` event)
  - `ads_conversion` — Google Ads conversion via dataLayer → GTM
  - `scroll_depth` — 25/50/75/100% thresholds
  - `heartbeat` — every 15s (time on page)
  - `utm_captured` — UTM params on landing (added Apr 11)
  - `newsletter_signup` — newsletter form
  - `form_error` — failed submissions
  - `mobile_nav_open/close` — nav drawer
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

## MCP Issue (April 11, 2026)

**Problem:** `analytics-mcp.exe` hangs on `get_account_summaries` and crashes all MCP servers in the session.
**Binary:** C:\Users\palli\.local\bin\analytics-mcp.exe (installed via pipx)
**Auth:** ADC (Application Default Credentials) — same creds that Search Console uses.
**Likely cause:** ADC may lack GA4 Data API scope, or the API may not be enabled in GCP project `ideas-realized-marketing`.

**Root cause (confirmed):** ADC was created with plain `gcloud auth application-default login` — no `--scopes` flag. Only has `cloud-platform` scope, missing `analytics.readonly`. Server hangs on insufficient-scopes error instead of failing gracefully.

**Fix steps:**
1. Re-auth ADC with analytics scope:
   ```
   gcloud auth application-default login --scopes="https://www.googleapis.com/auth/analytics.readonly,https://www.googleapis.com/auth/cloud-platform"
   ```
2. Enable APIs in GCP project:
   ```
   gcloud services enable analyticsdata.googleapis.com --project=ideas-realized-marketing
   gcloud services enable analyticsadmin.googleapis.com --project=ideas-realized-marketing
   ```
3. Verify GA4 property grants Viewer access to the authenticated Google account
4. Restart Claude Code

**Known issue:** [GitHub Issue #40](https://github.com/googleanalytics/google-analytics-mcp/issues/40) — `run_report` may fail with Claude Desktop due to JSON schema `additionalProperties` incompatibility.

**Alternative MCP servers if needed:**
- `surendranb/google-analytics-mcp` (pip, feature-rich)
- `gomarble-ai/google-analytics-mcp-server` (FastMCP, auto OAuth)
- `ruchernchong/mcp-server-google-analytics` (Node.js)

## Q2 Priorities

- [ ] **FIX MCP CONNECTION** — analytics-mcp.exe hangs (see issue above)
- [ ] Enable GA4 Data API in GCP project
- [ ] Re-auth ADC with analytics.readonly scope
- [ ] Pull first GA4 report (sessions, users, top pages, conversions)
- [ ] Verify Google Ads link in GA4
- [ ] Set up goals/conversions matching the GTM events (use ACTUAL event names from code audit)
- [ ] Include GA4 data in monthly reporting
