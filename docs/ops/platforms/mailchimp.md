# Mailchimp

**Last Updated:** April 11, 2026
**Status:** ACTIVE
**Account:** Kelly's Appliance Center
**Login:** Via API key (datacenter: us2)
**Monthly Budget:** Free tier (up to 500 contacts)
**MCP Connected:** Yes (tested and working April 11, 2026)

---

## Current State

- **MCP Server:** @agentx-ai/mailchimp-mcp-server via npx
- **Auth:** API key stored at C:\Users\palli\mcp-marketing\mailchimp.json
- **Email Template:** Welcome offer email built (docs/email/welcome-campaign-v1.html)
- **Lists:** 1 list — "Kelly's Appliance" (ID: be358dce9f), 1 member, created Dec 15, 2025
- **Automations:** None set up yet

## Planned Email Workflows

1. **Welcome Series** (new subscriber → 3-email drip)
   - Email 1: Welcome + $25 off first repair
   - Email 2: "5 Signs Your Appliance Needs Repair" (day 3)
   - Email 3: Review request + referral offer (day 14)

2. **Seasonal Campaign** (quarterly)
   - Spring: "Get Your Appliances Summer-Ready"
   - Fall: "Oven & Stove Tune-Up Before the Holidays"
   - Winter: "Is Your Dryer Working Hard Enough?"

3. **Post-Service Follow-Up** (requires CRM integration)
   - Day 1 after service: "How did we do?" + Google Review link
   - Day 30: "Maintenance reminder" email

## Plan Requirement

**Important:** Mailchimp retired Classic Automation Builder June 2025. Free plan no longer supports automations. Need **Standard plan ($20/mo for 500 contacts)** minimum for multi-branch Customer Journeys, send-time optimization, and behavioral targeting.

## Q2 Priorities

- [x] ~~TEST MCP CONNECTION~~ — Confirmed working April 11, 2026
- [x] ~~Enumerate existing lists~~ — 1 list "Kelly's Appliance" (be358dce9f), 1 subscriber
- [ ] Upgrade to Standard plan ($20/mo) if on free tier
- [ ] Upload welcome-campaign-v1.html template
- [ ] Create subscriber signup form (embed on website footer)
- [ ] Set up Welcome Series automation (3-email drip)
- [ ] Set up Post-Service Review Request automation (24hr + 72hr)
- [ ] Plan first seasonal campaign (Summer prep, June send)
- [ ] Integrate signup with appointment form (opt-in checkbox)
- [ ] Build Dormant Customer Re-engagement flow (12-month trigger)
