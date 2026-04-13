# Google Search Console

**Last Updated:** April 11, 2026
**Status:** ACTIVE (MCP needs re-auth)
**Account:** shane@ideas-realized.com (Full User)
**Property:** sc-domain:kellysappliancerepair.com
**Monthly Budget:** Free
**MCP Connected:** BROKEN — `invalid_rapt` error (ADC credentials expired/insufficient)

---

## Current State

- **Verified:** Domain-level property
- **Sitemaps:** Submitted and indexed
- **Indexed Pages:** 40+ (all service, location, blog pages)
- **MCP Server:** mcp-server-gsc via npm
- **Auth:** Application Default Credentials (ADC), quota project: ideas-realized-marketing

## Q1 2026 Summary (Jan 7 - Apr 7)

| Metric | Value |
|--------|-------|
| Total Clicks | 1,932 |
| Total Impressions | 137,000 |
| Average CTR | 1.4% |
| Average Position | 14.2 |

## MCP Tools Available

- `search_analytics` — Query performance data
- `enhanced_search_analytics` — Extended with regex, up to 25K rows
- `detect_quick_wins` — Auto-detect optimization opportunities
- `index_inspect` — Check URL indexing status
- `list_sitemaps` / `submit_sitemap` — Sitemap management

## MCP Auth Issue (April 11, 2026)

**Error:** `invalid_grant: reauth related error (invalid_rapt)`
**Same fix as GA4** — re-auth ADC with all needed scopes:
```
gcloud auth application-default login --scopes="https://www.googleapis.com/auth/analytics.readonly,https://www.googleapis.com/auth/webmasters.readonly,https://www.googleapis.com/auth/cloud-platform"
```
This single command fixes BOTH Search Console AND GA4 MCP servers.

## Q2 Priorities

- [ ] **FIX MCP AUTH** — run gcloud re-auth command above
- [ ] Weekly quick-wins detection (every Monday)
- [ ] Monitor Santa Rosa position (currently 9.1, target top 5)
- [ ] Monitor Marin cities (San Rafael, Mill Valley — high impressions, low clicks)
- [ ] Submit sitemap after any new page deployments
- [ ] Track position changes for top 20 keywords monthly
