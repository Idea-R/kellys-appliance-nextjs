# Cross-Platform Reporting System — Kelly's Appliance Center

**Last Updated:** April 13, 2026
**Status:** ACTIVE
**Owner:** Ideas Realized
**Purpose:** Consistent, actionable reporting across all marketing and lead-generation platforms

---

## Philosophy

Every report should answer three questions for every platform:

1. **What worked?** (Wins — replicate these)
2. **What didn't?** (Losses — fix or kill these)
3. **What needs a decision?** (Actions — require Mark or Shane's attention)

No data without a "so what." No metric without a resulting action.

---

## Report Cadence

| Frequency | Report | Who | Duration | Purpose |
|-----------|--------|-----|----------|---------|
| **Daily** | Lead inbox check | Mark/Office | 5 min | Respond to new leads, grade obvious spam |
| **Weekly (Monday)** | Weekly Action Report | Shane | 30 min | Wins, losses, action items across all platforms |
| **Monthly (1st)** | Monthly Performance Review | Shane | 1-2 hrs | KPIs, trends, budget decisions |
| **Quarterly** | Strategic Review | Shane + Mark | 2-3 hrs | Channel ROI, platform decisions, next-quarter plan |

---

## Platform Tracking Matrix

Every platform gets scored on the same dimensions in every report:

| Dimension | What It Measures | How We Get It |
|-----------|------------------|---------------|
| **Spend** | Money out | Platform API or manual |
| **Leads** | Raw volume | Platform API/dashboard |
| **Matched Jobs** | Leads that became real work | Phone match to CRM (SDtype6) |
| **Revenue** | Actual dollars in | Invoice match to CRM (SDSalesByMore) |
| **CPA** | Cost per acquisition | Spend / Matched Jobs |
| **ROI** | Return multiple | Revenue / Spend |
| **Response Time** | How fast leads got handled | Platform-specific (LSA status, email logs) |
| **Quality Signal** | Spam rate, wrong-service rate | Grading data |

### Current Status by Platform

| Platform | Lead Data Access | CRM Match Method | Current Match Rate | Status |
|----------|-----------------|------------------|-------------------|--------|
| **Google LSA** | ✅ Dashboard CSV + API | Phone number | 47% (28/60) | Working |
| **Google Ads Search** | ✅ API (clicks + conversions) | **BLOCKED** — no phone in API | 0% (no method) | Needs form logging |
| **Google Business Profile** | ⚠️ Insights only | Phone taps only | Partial | Manual review |
| **Search Console** | ✅ API (organic) | N/A (organic, not leads) | N/A | Monitoring only |
| **Mailchimp** | ✅ API | Email → CRM email field | Not tested | Ready to implement |
| **Nextdoor** | ❌ No API | Manual message review | Manual | In-app only |
| **Yelp** | ❌ No API | Manual (phone/message) | Manual | In-app only |
| **Thumbtack** | Future | TBD | N/A | Not active |
| **Facebook/Instagram** | Future (Meta API) | Lead form → phone | N/A | Not active |

---

## The Google Ads Search Gap

Unlike LSA (which gives us phone numbers), Google Ads Search conversions only tell us "a form was submitted at X time." To match Search conversions to CRM jobs, we need to log form submissions server-side with enough data to match.

### Current Flow (No Matching Possible)
```
User clicks Google Ad → lands on /schedule-prep or /contact
  → fills out form
  → form POST to /api/appointment
  → email sent to Mark
  → no database record
  → Google Ads conversion fires via GTM dataLayer
  ↓
Mark gets email, creates job in ServiceDesk manually
  ↓
No link back to the Google click
```

### Required Flow (Enables Matching)
```
User clicks Google Ad → URL has ?gclid=XYZ
  → capture gclid in Analytics.tsx
  → fills out form
  → form POST to /api/appointment with gclid + UTMs + phone
  → Cloudflare Worker logs submission to D1 or Supabase
  → email sent to Mark (unchanged)
  → Google Ads conversion fires (unchanged)
  ↓
Later: query form_submissions table by date + phone
  → match to CRM TelNmbr1
  → match to Google Ads click data by gclid
  → full attribution chain: click → form → job → revenue
```

### Implementation Plan (Interactive Tools Tie-In)
This dovetails with the interactive tools strategy. Building a form_submissions log unlocks:
- Google Ads Search validation
- Repair vs Replace Calculator lead tracking
- Diagnostic Quiz lead tracking
- Any future lead form attribution

**Est. effort:** 2-3 hours to add a `form_submissions` D1 table, wire up the API routes, and capture gclid/UTMs. Then backfill starts working from the deploy date forward.

---

## Weekly Action Report Template

File: `docs/ops/reports/weekly/YYYY-MM-DD.md`

```markdown
# Weekly Marketing Report — [Week of YYYY-MM-DD]

## Top-Line This Week

| Metric | This Week | Last Week | Trend |
|--------|-----------|-----------|-------|
| Total Ad Spend | $X | $X | ↑↓→ |
| Total Leads | N | N | ↑↓→ |
| Matched Jobs | N | N | ↑↓→ |
| Est. Revenue | $X | $X | ↑↓→ |
| Blended CPA | $X | $X | ↑↓→ |

## Wins 🟢
- [What worked this week — specific wins, not generic]

## Losses 🔴
- [Unmatched leads, stalled jobs, CPA spikes, things to fix]

## Urgent Actions Required ⚡
- [ ] [Specific action with owner and deadline]
- [ ] [Another action]

## Platform Deep Dives

### Google LSA
- Leads: N | Matched: N (X%) | Revenue: $X | CPA: $X
- Wins: [list]
- Issues: [list]
- Actions: [list]

### Google Ads Search
- Clicks: N | Conversions: N | Cost: $X | CPA: $X
- Wins: [list]
- Issues: [list]
- Actions: [list]

### Google Business Profile
- Views: N | Calls: N | Direction requests: N
- Wins: [list]
- Issues: [list]
- Actions: [list]

### Search Console (SEO)
- Clicks: N | Impressions: N | Top movers: [list]
- Wins: [list]
- Issues: [list]
- Actions: [list]

### Social (when active)
- Per-platform summary

## Notes for Next Week
- [Anything to watch, experiment with, or prepare]
```

---

## Monthly Performance Review Template

File: `docs/ops/reports/monthly/YYYY-MM.md`

```markdown
# Monthly Marketing Review — [Month YYYY]

## Executive Summary
[2-3 sentences — what happened this month at the highest level]

## Month at a Glance

| Platform | Spend | Leads | Matched | Revenue (est.) | ROI |
|----------|-------|-------|---------|---------------|-----|
| Google LSA | $X | N | N (X%) | $X | Xx |
| Google Ads Search | $X | N | N (X%) | $X | Xx |
| Organic (GBP/SEO) | $0 | N | N | $X | ∞ |
| Mailchimp | $X | N | N | $X | Xx |
| **Total Paid** | **$X** | N | N | **$X** | **Xx** |
| **Total All Channels** | **$X** | N | N | **$X** | **Xx** |

## Full LSA Validation (run SOP)
[Link to weekly reports + key findings]

## Full Google Ads Validation (when form logging live)
[Link to weekly reports + key findings]

## Appliance Mix (Matched Jobs)
- Refrigerator: N (%)
- Washer: N (%)
- etc.

## Top Referring Cities
[City ranking by job count]

## Month-over-Month Trends
[What's growing, what's shrinking]

## Budget Recommendations for Next Month
- [Specific dollar reallocation recommendations]

## Strategic Observations
- [Bigger-picture insights]
```

---

## Quarterly Strategic Review Template

File: `docs/ops/reports/quarterly/YYYY-QN.md`

```markdown
# Quarterly Strategic Review — [Qx YYYY]

## Quarter in Review
- 3-month summary by platform
- What's working, what's not
- Channel-by-channel ROI ranking

## Strategic Questions
1. Which platforms should we scale?
2. Which platforms should we cut?
3. What new platforms to test?
4. What organizational/ops improvements would help?

## Full-Funnel Analysis
- Awareness → Lead → Quote → Job → Revenue → Review → Referral
- Where are the biggest drops?

## Competitive Notes
- What competitors are doing
- Market changes
- New opportunities

## Next Quarter Plan
- Goals
- Experiments
- Budget
- Team capacity

## Attached Reports
- Weekly reports: [links]
- Monthly reports: [links]
```

---

## Report Storage Structure

```
docs/ops/reports/
├── weekly/
│   ├── 2026-04-13.md
│   ├── 2026-04-20.md
│   └── ...
├── monthly/
│   ├── 2026-04.md
│   ├── 2026-05.md
│   └── ...
├── quarterly/
│   ├── 2026-Q1.md
│   ├── 2026-Q2.md
│   └── ...
└── validations/
    ├── lsa-lead-validation-report-2026-04-13.md
    ├── gads-search-validation-2026-XX-XX.md (when available)
    └── ...
```

---

## Action Item Tracking

Every action item from a report goes into a shared list. Use the TodoWrite skill or a simple markdown file:

`docs/ops/action-items.md`

Format:
```markdown
# Active Action Items

## High Priority
- [ ] **2026-04-13 (LSA)**: Call 4 stalled customers from Feb/Mar (Cooper, Davis, Morada, Smith) — Owner: Mark/Office — Due: Apr 15
- [ ] **2026-04-13 (LSA)**: Grade last 90 days of LSA leads in dashboard — Owner: Shane — Due: Apr 20

## Medium Priority
- [ ] ...

## Completed (Archive monthly)
- [x] ...
```

---

## Metrics Dictionary

Agreed definitions across all reports:

| Term | Definition |
|------|-----------|
| **Lead** | Any contact attempt from a paid or organic channel (call, form, message) |
| **Charged Lead** | A lead Google (or other platform) billed for |
| **Matched Job** | A lead that appears in ServiceDesk CRM as a real job |
| **Match Rate** | Matched Jobs / Charged Leads (excludes messages, in-review, not-charged) |
| **Revenue** | From SDSalesByMore TotalAmount — includes parts, labor, and tax |
| **Est. Revenue** | Estimated when exact match not possible (uses avg per appliance type) |
| **CPA** | Cost Per Acquisition = Spend / Matched Jobs |
| **ROI** | Revenue / Spend (expressed as multiple, e.g., "22x") |
| **Stalled Job** | CRM job in "Working to Schedule" for >14 days |
| **Lost Lead** | Charged lead with no CRM match (assumed lost or handled off-platform) |

---

## Related Docs

- [LSA Lead Validation SOP](lsa-lead-validation-sop.md) — the validation process template
- [LSA Validation Report 2026-04-13](lsa-lead-validation-report-2026-04-13.md) — first full application
- [Blog Operations](blog-operations.md) — organic content reporting
- [Interactive Tools Strategy](interactive-tools-strategy.md) — future lead capture and attribution
- [Q2-2026 Roadmap](Q2-2026-ROADMAP.md) — where reporting improvements fit
