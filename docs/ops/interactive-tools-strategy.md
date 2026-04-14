# Interactive Tools Strategy — Kelly's Appliance Center

**Last Updated:** April 12, 2026
**Status:** PLANNED
**Goal:** Replace passive blog content with interactive tools that capture leads, build trust, and keep visitors on-site longer

---

## Why Interactive Tools (Not Comments)

- Blog comments aren't worth it for a local service business. Spam overwhelms value. Discussion happens on social media instead.
- Interactive tools convert at 3-5x higher rates than passive content.
- Calculators and quizzes capture lead data while delivering actual value.
- Unique tools = content competitors can't copy. They earn backlinks and social shares naturally.

---

## Tool Priority List

### Tier 1: Build Now (High value, directly drives revenue)

| Tool | Page | What It Does | Lead Capture | Revenue Line |
|------|------|-------------|-------------|-------------|
| **Repair vs. Replace Calculator** | `/tools/repair-or-replace` | User inputs appliance type, age, estimated repair cost. Gets a recommendation with cost math, typical repair ranges, and lifespan data. | Email for full report | Repair service (keeps the repair) or honest "replace" advice (builds trust) |
| **"What's Wrong?" Diagnostic Quiz** | `/tools/whats-wrong` | 5-7 questions: appliance type, symptom, age, brand. Returns likely cause, difficulty level, and CTA to book or try virtual call. | Optional email for results | Repair bookings + virtual service calls |
| **Service Cost Estimator** | `/tools/cost-estimator` | Select appliance + symptom. Shows typical repair cost range in Sonoma/Marin/Napa. Transparent pricing builds trust. | None required (low friction) | Positions Kelly's as honest, drives bookings from price-comparison shoppers |

### Tier 2: Build Next (Strong value, supports existing content)

| Tool | Page | What It Does | Revenue Line |
|------|------|-------------|-------------|
| **Water Filter Finder** | `/tools/filter-finder` | Enter fridge brand + model. Returns exact filter needed + link to order from Kelly's parts counter. | Parts sales. Perfect companion to the fridge water blog post. |
| **Appliance Age & Parts Lookup** | `/tools/appliance-age` | Enter brand + model. Shows typical lifespan, common failures at that age, parts availability status. | Drives repair calls for aging appliances. Drives parts sales for DIYers. |
| **Energy Cost Calculator** | `/tools/energy-calculator` | Input appliance type and age. Estimates annual energy cost vs. a new model. Shows break-even point. | Ties into PG&E savings angle. Drives both repair (tune-up) and honest replace recommendations. |

### Tier 3: Simple Engagement Widgets (Low effort, embed in blog posts)

| Widget | Where | What It Does | Effort |
|--------|-------|-------------|--------|
| **"Was this helpful?" thumbs up/down** | Bottom of every blog post | Quick feedback. Gives data on which posts resonate. No spam risk. | Small React component |
| **Email signup prompt** | End of blog posts + sidebar | "Get repair tips in your inbox." Builds Mailchimp subscriber list. | Mailchimp embed form |
| **Social share buttons** | Blog posts | "Share this tip" for Facebook, LinkedIn, X. Free distribution. | Small component |
| **"Quick Question" chat prompt** | Floating or bottom of service pages | Not a full chatbot. Just a simple "Describe your issue" box that submits to the appointment form or triggers a virtual call CTA. | Medium effort |

---

## Technical Approach

All tools built as React components within the Next.js site. No third-party SaaS tools needed (no Outgrow, no Typeform). Benefits:
- Full control over design and UX
- No monthly fees
- Fast loading (no external scripts)
- SEO-friendly (content renders server-side)
- Lead data goes directly to our systems (Mailchimp, appointment form)

### Component Structure
```
src/app/tools/
  repair-or-replace/page.tsx    ← Calculator with multi-step form
  whats-wrong/page.tsx          ← Diagnostic quiz
  cost-estimator/page.tsx       ← Price range lookup
  filter-finder/page.tsx        ← Filter model matcher
  appliance-age/page.tsx        ← Lifespan + parts lookup
  energy-calculator/page.tsx    ← Energy cost comparison

src/components/
  BlogFeedback.tsx              ← Thumbs up/down widget
  NewsletterSignup.tsx          ← Already exists, embed in blog footer
  SocialShareButtons.tsx        ← Share to FB/LI/X
```

### Data Sources
- Repair cost ranges: Kelly's internal pricing data (needs input from Mark/team)
- Appliance lifespans: Industry averages (Yale Appliance, Consumer Reports data)
- Filter compatibility: Manufacturer cross-reference databases
- Energy costs: PG&E rate schedules + appliance wattage tables

---

## SEO Value

Each tool page targets high-intent keywords:

| Tool | Target Keywords |
|------|----------------|
| Repair vs Replace | "should I repair or replace my refrigerator", "appliance repair vs replace calculator", "is it worth fixing my washer" |
| Diagnostic Quiz | "why is my dryer not heating", "dishwasher won't drain", "fridge making noise" |
| Cost Estimator | "how much does appliance repair cost", "refrigerator repair cost near me", "washer repair price" |
| Filter Finder | "what water filter does my fridge need", "[brand] [model] water filter" |
| Appliance Age | "how long does a [appliance] last", "appliance lifespan chart" |

These are all queries people search before they call anyone. The tool answers their question AND captures them as a lead. Way more effective than a blog post alone.

---

## Build Order

1. **Repair vs Replace Calculator** (April/May) — highest search demand, already on Q2 roadmap
2. **Thumbs up/down + email signup widgets** (April) — quick wins, embed in existing blog posts
3. **Diagnostic Quiz** (May) — drives virtual service calls
4. **Water Filter Finder** (May) — pairs with fridge water blog post, drives parts sales
5. **Cost Estimator** (June) — builds pricing trust
6. **Appliance Age Lookup** (June) — educational + repair driver
7. **Energy Calculator** (Q3) — seasonal tie-in with summer energy bills

---

## Related Docs

- [Blog Operations](blog-operations.md) — publishing schedule, content calendar
- [Q2 Roadmap](Q2-2026-ROADMAP.md) — task #42: Build Repair vs Replace Calculator
- [Referral Partners & SEO Tools Strategy](../research/referral-partners-and-seo-tools-strategy.md) — original research on interactive tools
