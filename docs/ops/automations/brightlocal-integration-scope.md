# BrightLocal Integration Scope (June 2026)

**Prepared by:** Ideas Realized
**Decision context:** keep BrightLocal (it covers local-pack rank, citations, and GBP, which GSC and our OATAS build do not) and make it earn its keep by integrating it instead of letting it sit as an unused dashboard.

## Access status (June 14, 2026)
- **API key:** created (self-serve trial). Trial tier = **1,000 requests**, then disabled; upgrade to a production key (no limits) via BrightLocal support. Key lives at `tools.brightlocal.com/seo-tools/admin/api`. Stored as a secret, never in this repo.
- **Remote MCP connector:** live on the same page. Two endpoints, each with the API key embedded:
  - `SSE:  https://mcp.brightlocal.com/sse?api-key=<KEY>`
  - `HTTP: https://mcp.brightlocal.com/mcp?api-key=<KEY>` (per the page)
- **Plan:** Agency tier, 2 of 5 locations used (Kelly's Cotati + K2 Appliance Oakland). 5-location capacity is sized for the 3-location rollout.

## What BrightLocal uniquely provides (no overlap with what we built)
| Capability | Source of truth |
|---|---|
| Local-pack / geo-grid rank (map-pack position by neighborhood) | **BrightLocal** (GSC only gives blended organic) |
| Citation tracking + Citation Builder (NAP across directories) | **BrightLocal** (Kelly's has 24 live citations; we have nothing here) |
| GBP audits + GBP Post Scheduler | **BrightLocal** (our reputation lane only reads reviews) |
| Organic search clicks/position | GSC sync (`/seo`) — already ours |
| Review monitoring | OATAS reputation lane — already ours |

## Two integration paths

### Path 1 — Add the BrightLocal MCP (fast, no build)
Paste the **SSE connector URL** (with the key) into the MCP config of Claude Desktop and/or the OATAS agent stack. Immediate conversational access: "citation gaps for Kelly's," "local-pack rank for appliance repair santa rosa," "GBP audit for the new location." Best for ad-hoc local-SEO work, especially during the location rollout. No code.

### Path 2 — BrightLocal API → OATAS "Local SEO" page (durable, reportable)
Mirror the GSC sync pattern:
- **OATAS connector** `brightlocal` with an encrypted `api_key` field (user pastes the key; never handled by an agent).
- **Tables** (per-org, RLS): `brightlocal_rankings` (location, keyword, local_pack_rank, organic_rank, date), `brightlocal_citations` (location, directory, status, nap_accurate), optionally `brightlocal_gbp_audits` (location, score, issues).
- **Edge fn** `sync-brightlocal` + daily cron: pull per active location via the BrightLocal API, upsert into the tables.
- **UI:** a "Local SEO" section next to `/seo` and `/reputation` — citation health by location, local-pack rank trend, GBP audit score, and a "fix these citations" list.
- This is the half of the local-SEO stack OATAS is missing: GSC (organic) + reputation (reviews) + **BrightLocal (local-pack rank + citations + GBP)** = complete.

> **Quota caveat:** the trial key (1,000 requests) is for building/testing only. A daily cron across multiple locations + keywords will exhaust it fast. Upgrade to a production key before scheduling Path 2. Path 1 (MCP) is the cheap immediate win and uses the same key.

## Recommendation
1. **Now:** wire the MCP (Path 1) so the tool is actually used, and run the Kelly's reports that are currently at 0 (rankings already slipped 3 unmonitored).
2. **Next:** build Path 2 (OATAS Prompt 8) once a production key is in place, so citations + local-pack rank land in the system and the monthly report finally includes the local-SEO half.
3. **Most valuable during the location rollout:** Citation Builder for each new location's NAP consistency, which is the single biggest factor in a new location ranking in the map pack.
