# Platform Research Report — April 2026

**Last Updated:** April 9, 2026
**Purpose:** Deep research on all evaluated platforms for Kelly's Appliance Center
**Source:** Web research + industry data analysis

---

## Priority Ranking Summary

| Priority | Platform | Action | Monthly Cost |
|----------|----------|--------|-------------|
| 1 | Apple Business Connect | Claim + optimize | Free |
| 2 | Bing Places | Claim + optimize | Free |
| 3 | BrightLocal | Subscribe for citation/rank management | $49/mo |
| 4 | BBB | Get accredited | ~$40/mo |
| 5 | Facebook/Instagram | Retargeting ads + organic posting | $200-300/mo |
| 6 | Mailchimp automations | Build 5 workflows | $20/mo |
| 7 | YouTube | 1 video/month | Free (time only) |
| 8 | LinkedIn | B2B outreach to property managers | Free |
| 9 | Thumbtack | Test with small budget | $200/mo test |
| 10 | Reddit | Organic authority building | Free (time only) |
| — | Houzz | Free listing only for NAP citation | Free |
| — | Angi/HomeAdvisor | Skip entirely | — |

---

## Detailed Findings

### Angi/HomeAdvisor — SKIP
- Annual fee ~$288-300 + $15-85/lead
- Leads shared with 3-5 contractors simultaneously
- Realistic CAC: $600-1,200 per customer (some report up to $2,500)
- Appliance repair jobs average $150-400 — the math doesn't work
- Built for high-ticket home services ($5K+ jobs), not $150-400 repairs

### Thumbtack — MAYBE (small test)
- Free profile, pay-per-lead $15-80 for appliance repair
- No monthly fee (better than Angi)
- Leads shared with up to 15 pros per request
- Worth a $200/month test for 60 days; cut if CPA exceeds $100

### Facebook/Instagram — YES (retargeting focus)
- Organic pages: free. Ads: $5/day minimum
- Best ROI from retargeting website visitors ($200-300/mo)
- Excellent n8n/Zapier integration (Lead Ads → Mailchimp, auto-posting)
- Not for primary lead gen — for staying top-of-mind and seasonal pushes
- Meta Pixel on website enables retargeting audiences

### Houzz — FREE LISTING ONLY
- Wrong audience (remodeling/design, not repair)
- Paid plans $149-249/mo are irrelevant for appliance repair
- Claim free listing for NAP citation consistency only

### BBB — YES ($400-600/year)
- High trust signal specifically valuable for home services
- DA 90+ backlink (significant SEO value)
- BBB seal on website, ads, and vehicles adds credibility
- One extra customer per year covers the annual cost
- Complements existing Diamond Certified status

### YouTube — LONG-TERM (Q3)
- Free, but time-intensive
- Repair tip videos rank in Google search and AI answers
- Minimum viable: 1-2 videos/month, smartphone quality fine
- 6-12 month play before meaningful traffic, but compounds
- Embed on service pages to improve SEO and conversion

### Apple Business Connect — DO NOW
- Free, 30-minute setup
- Powers Apple Maps, Siri, Spotlight, Safari searches
- 55% of US smartphones are iPhones
- Apple Maps Ads launching summer 2026 (get in early)
- Apple recently merging Business Connect into "Apple Business" (Apr 14, 2026)

### Bing Places — DO NOW
- Free, 20-minute setup
- Can import directly from Google Business Profile
- Feeds Microsoft Copilot, ChatGPT (via Bing), Windows search, Edge
- Less competition than Google = easier visibility
- Microsoft rebuilt dashboard Oct 2025 with AI recommendations

### BrightLocal — STRONG YES ($49/mo)
- Manage plan: listing sync + rank tracking + GBP audit
- Citation consistency alone can meaningfully improve local pack rankings
- Catches issues (wrong hours, missing categories) that affect call volume
- Has API for agency automation
- 14-day free trial, no card required

### Reddit — LOW PRIORITY (free)
- 90/10 rule: 90% genuine value, 10% business mentions
- 2-4 weeks of community building before any Kelly's mention
- n8n can monitor mentions of "appliance repair" + local cities
- Value is indirect: authority, backlinks, AI training data

### LinkedIn — ORGANIC ONLY (free)
- Good for B2B: property managers, HOA boards, real estate agents
- One property management contract worth $10K-50K annually
- Auto-post via n8n/Zapier integration
- DO NOT run LinkedIn Ads for residential repair

---

## n8n Automation Opportunities

### High-Value Workflows to Build

| Workflow | Trigger | Action |
|----------|---------|--------|
| GBP Review Alert + AI Draft Response | New Google review | Slack alert + AI-drafted response |
| Lead Capture to Mailchimp | Facebook Lead Ad | Add to list + tag by service type |
| Weekly SEO Rank Report | Cron (Monday 8am) | Pull BrightLocal data → email client |
| GBP Post Auto-Publisher | New blog post | Create GBP post with image + text |
| Cross-Platform Social Posting | Content calendar trigger | Post to Facebook + LinkedIn |
| Google Ads Performance Alert | Daily cron | Alert if CPA exceeds threshold |
| Review Request After Service | Job completed webhook | Mailchimp review request email |
| Competitor Monitoring | Weekly cron | Check competitor GBP for new reviews |

### Reporting Automations
- **Monthly Dashboard:** n8n pulls GA4 + Ads + GSC + Mailchimp → Google Sheet → Looker Studio
- **Budget Pacing Alert:** Daily check of Google Ads spend vs monthly budget
- **UTM Enforcement:** Validate all outbound links have proper UTM parameters
- **Call Tracking Sync:** If using CallRail, sync call data for channel attribution

---

## Mailchimp Email Automation Workflows

**Important:** Mailchimp retired Classic Automation Builder June 2025. All automations now use Customer Journey Builder. Free plan no longer supports automations — Essentials ($13/mo) or Standard ($20/mo) required.

**Recommended plan:** Standard ($20/mo for 500 contacts) — supports multi-branch journeys, send-time optimization, behavioral targeting.

### 5 Workflows to Build

1. **Welcome Series** (new customer after first service)
   - Immediate: Thank you + $25 off next repair + review request
   - Day 7: Maintenance tips for their specific appliance
   - Day 14: Introduce other services

2. **Seasonal Maintenance Reminders** (quarterly)
   - Spring: Refrigerator coil cleaning
   - Pre-Thanksgiving: Oven/range tune-up offer
   - Post-Holiday: Dishwasher and garbage disposal check
   - Summer: Ice maker reminders

3. **Dormant Customer Re-engagement** (no service in 12 months)
   - Email 1: "It's been a while" + seasonal discount
   - Email 2 (14 days): Stronger offer + maintenance checklist
   - Email 3 (30 days): Final attempt with urgency

4. **Post-Service Review Request** (via n8n webhook)
   - 24 hours: Thank you + direct Google review link
   - 72 hours: Gentle reminder if no review

5. **Referral Program Drip** (triggered by 5-star review)
   - Thank for review + referral incentive ($25 off for both parties)
