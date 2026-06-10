# Google Search Console

**Last Updated:** June 10, 2026
**Status:** ACTIVE — MCP migrated to service account (permanent fix)
**Account:** shane@ideas-realized.com (Full User) + service account
**Property:** sc-domain:kellysappliancerepair.com
**Monthly Budget:** Free
**MCP Connected:** Auth FIXED via service account. Awaiting SA being granted property access.

---

## ⭐ Service Account Migration (June 10, 2026 — the permanent fix)

**Root cause of all prior breakage:** The MCP was using gcloud's *shared* OAuth
client (`764086051850-...`) via ADC. Google blocks that shared client from
sensitive scopes (`webmasters.readonly`) → "this app is blocked" + recurring
`invalid_rapt` reauth expiry. **The API was always enabled — the credential was
the problem.**

**Fix applied:**
- Created service account `gsc-ga4-mcp-reader@ideas-realized-marketing.iam.gserviceaccount.com`
- Key stored at `C:\Users\palli\mcp-marketing\gsc-ga4-service-account.json`
- Both `.mcp.json` files (project + user) now point `GOOGLE_APPLICATION_CREDENTIALS`
  at the SA key instead of the ADC file
- Verified: `list_sites` returns NO auth error (clean). Service account
  authenticates permanently — no reauth, no expiry, no "app blocked", ever.

**Remaining one-time step (Shane):** Add the SA email as a **Full** user in
Search Console → Settings → Users and permissions. (Brand-new service accounts
take 5-60 min to propagate before Search Console accepts them — "user not found"
on first try is normal; retry after propagation.) Once added, the MCP returns
live data immediately (no restart needed — auth layer already works).

**Same SA also fixes GA4** — add it as Viewer on GA4 property 507428307.

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
