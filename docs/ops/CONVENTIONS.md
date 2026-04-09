# Documentation Conventions for Kelly's Appliance Center

**Last Updated:** April 9, 2026
**Maintained by:** Ideas Realized (shane@ideas-realized.com)

---

## Purpose

This is the **single source of truth** for all marketing, SEO, advertising, social media, and automation work on Kelly's Appliance Center. Every Claude Code agent session — SEO, Ads, Social, Email, Dev — reads from and writes to this structure.

---

## Directory Structure

```
docs/ops/                          ← CANONICAL marketing operations hub
  INDEX.md                         ← Master index (START HERE for any new session)
  CONVENTIONS.md                   ← This file. How docs are organized.
  Q2-2026-ROADMAP.md               ← Current quarter action plan

  platforms/                       ← One file per marketing platform
    google-ads.md                  ← Status, config, performance, todos
    google-lsa.md
    google-business-profile.md
    google-search-console.md
    google-analytics.md
    nextdoor.md
    yelp.md
    facebook-instagram.md
    linkedin.md
    reddit.md
    angi-homeadvisor.md
    thumbtack.md
    brightlocal.md
    mailchimp.md
    bing-places.md
    apple-business-connect.md
    youtube.md
    bbb.md

  reports/                         ← Quarterly performance reports
    q1-2026/
      seo-report.md                ← Summary of Q1 SEO report PDF
    q2-2026/
      (generated during Q2)

  automations/                     ← n8n workflows, cron jobs, scheduled tasks
    overview.md                    ← What's automated, what's manual
    n8n-workflows.md
    scheduled-tasks.md
    mailchimp-automations.md

  credentials/                     ← REFERENCE ONLY (no secrets stored here)
    mcp-connections.md             ← MCP server status, how to reconnect
    platform-logins.md             ← Which email logs into what (no passwords)
    api-keys-location.md           ← Where keys are stored on disk
```

---

## Naming Conventions

### Files
- All lowercase, hyphens between words: `google-ads.md`, not `GoogleAds.md`
- Platform files match the platform name exactly
- Reports include the quarter: `q2-2026/seo-report.md`
- No spaces in file names, ever

### Frontmatter
Every operational doc starts with:
```markdown
# [Title]

**Last Updated:** YYYY-MM-DD
**Status:** ACTIVE | PLANNED | PAUSED | DEPRECATED
**Owner:** [who manages this platform]
```

### Platform File Template
```markdown
# [Platform Name]

**Last Updated:** YYYY-MM-DD
**Status:** ACTIVE | PLANNED | PAUSED | NOT USING
**Account:** [account ID or URL]
**Login:** [email used, NOT the password]
**Monthly Budget:** $X or Free
**MCP Connected:** Yes | No | N/A

---

## Current State
[What's set up, what's running]

## Performance (Last 30 Days)
[Key metrics]

## Q2 Priorities
[What we're doing this quarter]

## History
[Key dates and changes]
```

---

## Rules for All Agents

1. **Read INDEX.md first** when starting any marketing-related session
2. **Update the platform file** when you make changes to that platform
3. **Update the roadmap** when tasks are completed or priorities shift
4. **Never duplicate** — if info exists in a platform file, link to it, don't copy it
5. **Date everything** — always update "Last Updated" when modifying a doc
6. **Status is mandatory** — every platform must have ACTIVE/PLANNED/PAUSED/NOT USING
7. **Keep it scannable** — bullet points over paragraphs, tables over lists when comparing

---

## Legacy Docs

The following directories contain historical docs and will NOT be deleted, but new work goes in `docs/ops/`:

- `docs/research/` — Strategy research from Q1 (keyword strategy, referral partners, etc.)
- `docs/seo-marketing/` — SEO technical docs from 2025 (GTM, indexing, redirects)
- `docs/analytics-reporting/` — GA4 setup docs from 2025
- `docs/chat-prompts/` — Session starting prompts for specialized agents
- `docs/email/` — Email templates and campaign HTML
- `docs/content-design/` — Design docs and UI/UX plans
- `docs/development-deployment/` — Cloudflare, deployment, CI/CD docs
- `docs/technical-docs/` — Booking system, API setup docs

These are **read-only references**. If information from them needs updating, create the updated version in `docs/ops/` and note the migration.

---

## Chat Prompt Sessions

When starting a new agent session, use the prompts in `docs/chat-prompts/`:
- `seo-aeo-chat.md` — SEO/AEO focused work
- `social-media-chat.md` — Social media management
- `ads-campaign-chat.md` — Google Ads / paid advertising

Each prompt tells the agent to read `docs/ops/INDEX.md` first.

---

## Reporting Cadence

| Frequency | What | Where |
|-----------|------|-------|
| Weekly (Monday) | Search Console + Ads quick pull | Slack or summary in chat |
| Monthly (1st) | Full platform metrics update | Each platform file in `docs/ops/platforms/` |
| Quarterly | PDF report for owner | `docs/ops/reports/qN-YYYY/` |
| As-needed | Platform status changes | Update relevant platform file + INDEX.md |
