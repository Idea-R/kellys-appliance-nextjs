# Automations Overview

**Last Updated:** April 9, 2026
**Status:** PLANNING

---

## Current Automations

| What | Tool | Status | Frequency |
|------|------|--------|-----------|
| Cloudflare auto-deploy on push | Cloudflare Pages | ACTIVE | On git push |
| GTM conversion tracking | GTM + dataLayer | ACTIVE | Real-time |
| Google Ads bidding | Maximize Conversions | ACTIVE | Real-time |
| LSA lead routing | Google LSA | ACTIVE | Real-time |

## Planned Automations (n8n / Zapier / Scripts)

### Tier 1: High Impact, Build First

| Automation | Tool | Trigger | Action | Priority |
|-----------|------|---------|--------|----------|
| Weekly SEO report | n8n + Search Console API | Every Monday 9am | Pull top queries, position changes → Slack/email | HIGH |
| Weekly Google Ads report | n8n + Google Ads API | Every Monday 9am | Pull campaign metrics → Slack/email | HIGH |
| New review notification | n8n + Google Business Profile API | New review posted | Slack notification + draft response | HIGH |
| Monthly budget tracker update | n8n + multiple APIs | 1st of month | Pull spend from all channels → update doc | HIGH |

### Tier 2: Medium Impact

| Automation | Tool | Trigger | Action | Priority |
|-----------|------|---------|--------|----------|
| New blog post → social media | n8n + RSS/webhook | Blog published | Auto-post to Facebook, LinkedIn, Nextdoor | MEDIUM |
| Form submission → CRM/email | n8n + webhook | Appointment form submitted | Add to Mailchimp, tag, trigger welcome email | MEDIUM |
| Competitor rank monitoring | n8n + BrightLocal API | Weekly | Pull competitor rankings → comparison report | MEDIUM |
| Review request email | Mailchimp automation | Post-service trigger | Send review request 24hr after service | MEDIUM |

### Tier 3: Nice to Have

| Automation | Tool | Trigger | Action | Priority |
|-----------|------|---------|--------|----------|
| Social media post scheduler | n8n + Meta API | Scheduled | Queue and publish social posts | LOW |
| GA4 anomaly detection | n8n + GA4 API | Daily | Alert if traffic drops >20% | LOW |
| Sitemap submission on deploy | n8n + webhook + GSC API | Deploy complete | Auto-submit sitemap to Google | LOW |
| Content calendar reminders | n8n + Google Calendar | Weekly | Remind about planned blog/social content | LOW |

---

## n8n Setup Notes

- **n8n instance:** TBD (self-hosted on VPS or n8n.cloud)
- **Cost:** n8n.cloud starts at $20/month; self-hosted is free
- **Integrations needed:**
  - Google APIs (Search Console, Analytics, Ads, GBP)
  - Mailchimp API
  - Slack webhook
  - Meta Graph API (Facebook/Instagram)
  - Nextdoor (manual — no API)

## Claude Code Scheduled Tasks

Some reporting can be done via Claude Code's built-in scheduled tasks:
- Weekly Search Console pull
- Weekly Google Ads performance check
- Monthly platform metrics compilation

See: `docs/ops/automations/scheduled-tasks.md`

---

## Reporting Dashboard Vision

**Goal:** Single dashboard showing all channels at a glance.

**Options:**
1. **Google Looker Studio** (free) — Connect GA4, Search Console, Google Ads natively
2. **n8n → Google Sheets** — Pull all data into one sheet, visualize with charts
3. **Custom dashboard** — Build in Next.js (overkill for now)

**Recommendation:** Start with Looker Studio for Google data, supplement with n8n for non-Google channels (Nextdoor, Yelp, Mailchimp).
