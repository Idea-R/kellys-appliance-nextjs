# Kelly's Appliance Center — MCP Connections & API Status

**Last Updated:** April 7, 2026
**Managed by:** Ideas Realized (shane@ideas-realized.com)

---

## Active MCP Connections

### 1. Google Ads MCP ✅ CONNECTED
- **Server:** C:\Users\palli\mcp-google-ads\ (cohnen/mcp-google-ads)
- **API Version:** v23
- **Auth:** OAuth2 (refresh token)
- **Project:** chamberconnect (OAuth client)
- **MCC:** 992-664-9900 (Ideas Realized)
- **Client Account:** 854-489-2425 (Kelly's Appliance)
- **Developer Token:** -9PfM8VmR0dqWkuR4dkvRg
- **Access Level:** Basic (15K ops/day)
- **Config:** .mcp.json in project root
- **Capabilities:** Read campaigns, keywords, ads, performance metrics via GAQL queries
- **Write Operations:** Via google-ads Python library (v30.0.0) scripts, not MCP

**Tools available:**
- `list_accounts` — see all accessible accounts
- `get_campaign_performance` — campaign metrics
- `get_ad_performance` — ad-level data
- `get_ad_creatives` — headlines, descriptions, URLs
- `get_account_currency` — account currency
- `analyze_image_assets` — image performance
- `get_image_assets` — list image assets
- `get_asset_usage` — where assets are used
- `execute_gaql_query` — run any GAQL query
- `run_gaql` — advanced GAQL with formatting
- `list_resources` — valid GAQL resource types

---

### 2. Google Search Console MCP ✅ CONNECTED
- **Server:** mcp-server-gsc (npm package)
- **Auth:** Application Default Credentials (ADC)
- **Quota Project:** ideas-realized-marketing
- **Properties:** kellysappliancerepair.com (Full User), ideas-realized.com (Owner)
- **Config:** .mcp.json in project root

**Tools available:**
- `list_sites` — all Search Console properties
- `search_analytics` — query performance data (clicks, impressions, CTR, position)
- `enhanced_search_analytics` — extended analytics with regex filters, up to 25K rows
- `detect_quick_wins` — auto-detect SEO optimization opportunities
- `index_inspect` — check if a URL is indexed
- `list_sitemaps` / `get_sitemap` — sitemap management
- `submit_sitemap` — submit new sitemaps

**How to pull data:**
```
mcp__google-search-console__search_analytics({
  siteUrl: "sc-domain:kellysappliancerepair.com",
  startDate: "2026-04-01",
  endDate: "2026-04-07",
  dimensions: "query",  // or "page", "country", "device", "date"
  rowLimit: 50
})
```

---

### 3. Google Analytics MCP ⚠️ PARTIALLY CONNECTED
- **Server:** analytics-mcp.exe
- **Auth:** Application Default Credentials (ADC)
- **Quota Project:** ideas-realized-marketing
- **Status:** Server configured in .mcp.json but not yet tested
- **GA4 Property:** G-6NW7LJG197 (Kelly's Appliance)

**Tools available (need testing):**
- `get_account_summaries` — list GA properties
- `get_property_details` — property info
- `run_report` — pull GA4 reports (sessions, users, conversions, etc.)
- `run_realtime_report` — real-time visitor data
- `get_custom_dimensions_and_metrics` — custom dimensions
- `list_google_ads_links` — GA4-Ads linkage

**TODO:** Test connection, verify property access, pull first report

---

### 4. Mailchimp MCP ✅ CONNECTED
- **Server:** @agentx-ai/mailchimp-mcp-server (npm)
- **Auth:** API Key (d32caa...us2)
- **Status:** Configured in .mcp.json, not yet tested with Kelly's data

**Tools available:**
- `list_lists` / `get_list` — email lists
- `list_members` / `get_member` — subscriber management
- `list_campaigns` / `get_campaign` — email campaigns
- `get_campaign_report` — campaign performance
- `list_automations` — automation workflows
- `list_templates` — email templates
- `list_segments` — audience segments

**TODO:** Test connection, verify Kelly's Mailchimp account access, check existing lists/campaigns

---

### 5. Claude in Chrome (Browser MCP) ✅ CONNECTED
- **Browsers:** Main (pallidiumzero@gmail.com), Cloud Remote (shane@ideas-realized.com)
- **Capabilities:** Full browser automation, screenshots, form filling, navigation
- **Used for:** Google Ads UI, Search Console UI, Nextdoor, GTM, Google Cloud Console

---

### 6. Claude Preview (Dev Server MCP) ✅ CONNECTED
- **Server:** Local Next.js dev server on port 3000
- **Config:** .claude/launch.json
- **Capabilities:** Screenshot, snapshot, click, fill, eval, console logs, network requests, resize

---

### 7. Cloudflare MCP ✅ CONNECTED
- **Capabilities:** Workers, Pages, D1, KV, R2 management
- **Used for:** Site deployment monitoring

---

### 8. Supabase MCP ✅ CONNECTED
- **Capabilities:** Database management, edge functions, migrations

---

### 9. Google Calendar MCP ✅ CONNECTED
- **Capabilities:** Event creation, scheduling, availability checking

---

### 10. Slack MCP ✅ CONNECTED
- **Capabilities:** Read/send messages, search, canvas creation

---

### 11. Google Drive MCP ✅ CONNECTED
- **Capabilities:** Search docs, fetch document content

---

### 12. Gmail MCP ✅ CONNECTED
- **Capabilities:** Search threads, create drafts, label management

---

### 13. Figma MCP ✅ CONNECTED
- **Capabilities:** Design context, screenshots, code connect, variable definitions

---

## GCP Project Configuration

### Ideas Realized Marketing (ideas-realized-marketing)
- **Owner:** PallidiumZero@gmail.com (Shane Spencer)
- **Additional Access:** shane@ideas-realized.com (Editor role, just added)
- **APIs Enabled:**
  - ✅ Google Search Console API
  - ✅ Google Analytics Data API
  - ✅ Google Ads API
  - ✅ Service Usage API
- **Quota Project:** Set as ADC quota project for MCP servers
- **OAuth Consent Screen:** Needs configuration for production use

### Chamber Connect (chamberconnect)
- **Owner:** shane@ideas-realized.com
- **APIs Enabled:** Google Ads API, various others from previous projects
- **OAuth Clients:** "Chamber Connect" (Web application), created Dec 2025
- **Status:** Legacy project, OAuth client used for Google Ads MCP refresh token
- **Note:** Google Ads OAuth credentials (client ID/secret) are from this project

---

## Authentication Chain

```
Google Ads MCP
  └→ OAuth2 refresh token (from chamberconnect OAuth client)
  └→ Developer token from MCC API Center
  └→ Connects to Kelly's account via MCC

Search Console MCP
  └→ Application Default Credentials (gcloud auth)
  └→ Quota project: ideas-realized-marketing
  └→ Account: shane@ideas-realized.com (Full User on kellysappliancerepair.com)

Google Analytics MCP
  └→ Application Default Credentials (gcloud auth)
  └→ Quota project: ideas-realized-marketing
  └→ GA4 Property: G-6NW7LJG197

Mailchimp MCP
  └→ API Key authentication
  └→ Direct to Mailchimp account
```

---

## Reporting Cadence

### Weekly (every Monday)
- Pull Search Console 7-day data (top queries, pages, position changes)
- Pull Google Ads campaign performance (clicks, conversions, cost, CTR)
- Compare organic vs paid performance
- Check for new quick wins via detect_quick_wins

### Monthly (1st of each month)
- Full Search Console 28-day report
- Google Ads monthly spend and ROI summary
- Google Analytics traffic report (sessions, users, top pages)
- Update advertising-budget-tracker.md
- Review keyword strategy against actual search data

### As Needed
- URL indexing checks after new pages are published
- Sitemap submissions after major site updates
- Real-time analytics during campaign launches
- Ad hoc GAQL queries for specific analysis

---

## Remaining Setup Tasks

| Task | Priority | Status |
|------|----------|--------|
| Test Google Analytics MCP connection | High | TODO |
| Test Mailchimp MCP connection | Medium | TODO |
| Verify GA4 property access | High | TODO |
| Check existing Mailchimp lists/campaigns | Medium | TODO |
| Set up weekly Search Console quick wins detection | Low | TODO |
| Consider GCP MCP server for cloud management | Low | Research done, deferred |
| Migrate Google Ads OAuth to ideas-realized-marketing project | Low | Working fine on chamberconnect for now |

---

## How to Re-authenticate if Credentials Expire

### Google Ads MCP
The refresh token auto-renews. If it expires:
1. Run `node C:\Users\palli\Documents\google-ads-oauth.js`
2. Authorize with shane@ideas-realized.com
3. Update refresh token in `C:\Users\palli\mcp-google-ads\credentials.json`

### Search Console / Analytics MCPs
If ADC credentials expire:
```bash
gcloud auth application-default login --scopes="openid,https://www.googleapis.com/auth/userinfo.email,https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/webmasters.readonly,https://www.googleapis.com/auth/analytics.readonly"
```
Then:
```bash
gcloud auth application-default set-quota-project ideas-realized-marketing
```
Sign in with shane@ideas-realized.com (must have Editor role on ideas-realized-marketing project).

### Mailchimp MCP
API key is static. If it stops working, generate a new key at Mailchimp > Account > Extras > API Keys.
