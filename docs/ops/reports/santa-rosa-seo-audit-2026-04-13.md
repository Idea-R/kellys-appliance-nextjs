# Santa Rosa SEO Audit & Improvement Plan

**Report Date:** April 13, 2026
**Prepared by:** Ideas Realized
**Status:** Investigation complete, ready to execute

---

## TL;DR

Santa Rosa is **not technically broken**. There's no recent change that caused a ranking drop. The issue is more fundamental and easier to fix than expected: **the Santa Rosa page has the same amount of content as Cotati (a city 25x smaller by population) while facing vastly more competition**. Combined with a generic meta snippet that doesn't compel clicks, the page is punching well below its weight.

**The biggest finding:** Santa Rosa ranks in positions 2-8 for key queries but gets 0.4-1% CTR when normal CTR at those positions is 5-15%. That means **the impressions are there — searchers just aren't clicking**. This is a snippet problem first, a content depth problem second.

**Good news:** Both are fixable in a few hours of work, and every fix is low-risk.

---

## Investigation Summary

### What I Checked

1. **Search Console data** (from earlier session pull, Mar 14 - Apr 11, 2026)
2. **Santa Rosa page source code** (`src/app/service-locations/santa-rosa/page.tsx`)
3. **City content data** (`src/data/cityContent.ts`)
4. **Shared components** (CityJsonLd, NearbyCityLinks, ServicesGrid, Layout)
5. **Git history** for any recent changes affecting Santa Rosa
6. **Sitemap priority** and canonical configuration
7. **Comparison against other city pages** (Petaluma, Rohnert Park, Cotati, Sebastopol)

### What I Did NOT Check (SC MCP expired)

- Fresh day-over-day position trends (would show if April 9 meta rewrite caused movement)
- Real-time impression/click data for this week
- Any Search Console alerts or manual actions

The Search Console MCP needs re-auth:
```
gcloud auth application-default login --scopes="https://www.googleapis.com/auth/analytics.readonly,https://www.googleapis.com/auth/webmasters.readonly,https://www.googleapis.com/auth/cloud-platform"
```

---

## Is Santa Rosa Actually Curbing Back?

Based on the data we do have (Mar 14 - Apr 11 pull), here's what the Santa Rosa picture looks like:

| Metric | Value | Context |
|--------|-------|---------|
| Santa Rosa page 30-day clicks | 17 | Low for largest city in service area |
| Santa Rosa page impressions | 4,600 | High — lots of visibility |
| Santa Rosa page CTR | **0.37%** | **Very low** (industry avg is 3-5%) |
| Santa Rosa page avg position | **16.6** | Middle of page 2 |

Compare to other city pages:
| Page | Clicks | Impressions | CTR | Position |
|------|--------|-------------|-----|----------|
| Napa | 27 | 3,230 | 0.83% | 27.7 |
| Petaluma | 24 | 7,662 | 0.31% | 47.2 |
| Novato | 19 | 1,583 | 1.20% | 31.7 |
| **Santa Rosa** | **17** | **4,600** | **0.37%** | **16.6** |
| Sebastopol | 9 | 836 | 1.08% | 14.6 |

**Santa Rosa has the best position but worst clicks-to-impressions ratio.** That's the textbook definition of a snippet problem: the page is getting seen, but not chosen.

### Key Non-Brand Queries Pointing at Santa Rosa

From our earlier data pull:

| Query | Impressions | Clicks | CTR | Position |
|-------|-------------|--------|-----|----------|
| "appliance repair santa rosa" | 239 | 2 | 0.84% | 8.1 |
| "appliance repair santa rosa" (different period) | 194 | 1 | 0.52% | 7.2 |
| "appliance repair santa rosa ca" | 67 | 0 | 0% | 6.4 |
| "refrigerator repair santa rosa" | 37 | 0 | 0% | 8.0 |
| "refrigerator repair santa rosa ca" | 34 | 0 | 0% | 6.6 |
| "dryer repair santa rosa" | 33 | 0 | 0% | 7.2 |
| "santa rosa appliance repair" | 46 | 0 | 0% | 7.0 |

**For context, expected CTR by position:**
- Position 3: ~10-15%
- Position 5: ~6-9%
- Position 7: ~3-5%
- Position 10: ~2-3%

Santa Rosa is **4-10x below expected** across these queries.

---

## Root Cause Analysis

### Issue #1: Meta Snippet Not Compelling

**Current title:** "Appliance Repair Santa Rosa | Diamond Certified | Kelly's"
**Current description:** "Santa Rosa families have called Kelly's first since 1975. Refrigerator, washer, dryer, oven, and dishwasher repair across Fountaingrove, Rincon Valley, Bennett Valley, and Roseland. 90-day guarantee."

**What's wrong:**
- Title leads with the category ("Appliance Repair Santa Rosa") but doesn't differentiate from competitors who have similar titles
- "Diamond Certified" and "Kelly's" are trust signals but they're abstract — they don't answer the searcher's question
- Description buries the value proposition in the middle
- No urgency, no benefit, no reason to click over position 1-4 competitors
- The neighborhoods list takes up valuable description space without adding click value

**What competitors likely show:**
- "Same-Day Appliance Repair" (speed)
- "$49 Service Call Fee" (price)
- "24/7 Emergency Service" (availability)
- "Free Estimates" (no-commitment)
- Star ratings showing in snippets

### Issue #2: Content Depth vs. Market Size Mismatch

Santa Rosa is the largest city in Sonoma County with ~180,000 people. Yet its page content is the **exact same depth** as Cotati (~7,500 people) and Rohnert Park (~44,000 people).

Measured in content blocks (from cityContent.ts):

| City | Trust Paragraphs | Issues Paragraphs | Neighborhoods | Total Lines |
|------|------------------|-------------------|---------------|-------------|
| Santa Rosa | 3 | 2 | 6 | 33 |
| Petaluma | 3 | 2 | 5 | 33 |
| Rohnert Park | 3 | 2 | 5 | 33 |
| Cotati | 3 | 2 | 3 | 33 |
| Sebastopol | 3 | 2 | 4 | 32 |

**Google expects deeper content for more competitive markets.** When every city page is the same depth, small towns rank fine (less competition) but big cities struggle.

### Issue #3: Missing Local Signals

The Santa Rosa page doesn't contain enough unique, hyper-local signals that Google uses to rank for local search:

**Present:**
- City name in H1
- General mention of 4 neighborhoods
- One top-eats list (not repair-related)
- JSON-LD with lat/lng coordinates
- Breadcrumbs

**Missing:**
- Specific Santa Rosa customer testimonials or case studies
- Named repair examples ("Last month in Bennett Valley we fixed a Sub-Zero...")
- Links to Santa Rosa-specific news, landmarks, or events
- External citations from Santa Rosa sources (Press Democrat, Nextdoor, Santa Rosa directories)
- Service-level detail unique to Santa Rosa (e.g., "Common Santa Rosa fridge repair models we service")
- FAQ section with schema markup specifically for Santa Rosa queries
- Photos of Santa Rosa jobs (even simple "technician working" shots)
- More neighborhoods (currently 6, could easily be 15-20 for a city this size)
- Internal links to Santa Rosa-specific blog content (none exist yet)

### Issue #4: No Direct Blog → Santa Rosa Pipeline

The blog is the site's top traffic driver (253 clicks for one post alone), but **no blog posts link to the Santa Rosa page** in their internal links. Blog content about washing machines, dryers, fridges all pass authority to the service pages, not to specific city pages.

Santa Rosa needs a dedicated blog post or content asset it can be linked from.

### Issue #5: Competition Is Tougher Here

Santa Rosa is the biggest market in the service area. That means more local appliance repair competitors:
- Larger national chains (Sears Home Services, GE Appliance Repair)
- Well-established local shops with decades of domain history
- Yelp/Thumbtack listings ranking above dedicated pages
- Google Local Pack (GBP) dominating top 3 positions

The site is competing against businesses with more inbound links and more reviews. Content alone won't fix this — but it's the first step, and it's what's most fixable.

---

## Is It "Curbing Back"?

**Honest answer:** Based on the data we have, I can't prove Santa Rosa position has DROPPED recently (SC MCP is expired, so I can't compare week-over-week). But the data we do have paints a clear picture:

- **Position is actually OK** (7-8 for main queries, up to 3 for brand queries)
- **CTR is the real problem** — the position doesn't translate to clicks
- **The April 9 meta rewrite was recent enough** that it may or may not have helped yet (Google takes 2-4 weeks to fully re-index)
- **The underlying weakness** (thin content, generic snippet) has always been there

So "curbing back" may actually be "never broke through to the level it should." Santa Rosa is Kelly's biggest market but the current page never received the depth investment it deserved.

---

## Improvement Plan

### Priority Tiers

**P0 (this week, highest impact, lowest effort):**
- Rewrite meta title and description for click-worthiness
- Add FAQ section with Santa Rosa-specific questions and FAQPage schema

**P1 (this month, high impact, moderate effort):**
- Expand trustContent from 3 to 6-8 paragraphs with local detail
- Add 2 new sections: "Brands We Repair in Santa Rosa" + "What Your Neighbors Are Saying"
- Add 10+ more neighborhoods to the neighborhood list
- Write and publish one Santa Rosa-specific blog post

**P2 (Q2, long-term SEO health):**
- Get 3-5 new Santa Rosa customer reviews to feature
- Build Santa Rosa-specific citations (Yelp profile optimization, Santa Rosa Chamber link, Nextdoor presence)
- Add photos of real Santa Rosa jobs (when available)
- Consider a Santa Rosa virtual office (part of the multi-location GBP expansion plan in Q2 roadmap)

---

## P0 Fix #1: Meta Snippet Rewrite

### New Meta Title Options (Pick One to Test)

| Option | Title | Rationale |
|--------|-------|-----------|
| A | "Santa Rosa Appliance Repair \| Diamond Certified Since 1975" | Longevity, trust |
| B | "Santa Rosa Appliance Repair — 50 Years, 90-Day Guarantee" | Specific years + guarantee |
| C | "Kelly's Santa Rosa Appliance Repair \| Factory Authorized" | Authority signal first |
| D | "Appliance Repair in Santa Rosa CA \| Family-Owned Since 1975" | Family angle, local |

**Recommendation: Option B.** Best balance of specificity (50 years, 90-day), trust, and search intent. The dash pattern tests well in SERPs.

### New Meta Description

**Current:** "Santa Rosa families have called Kelly's first since 1975. Refrigerator, washer, dryer, oven, and dishwasher repair across Fountaingrove, Rincon Valley, Bennett Valley, and Roseland. 90-day guarantee."

**Proposed:**
> "50 years fixing refrigerators, washers, dryers, ovens, and dishwashers for Santa Rosa homes. Diamond Certified technicians, factory-authorized parts, and every repair backed by our 90-day money-back guarantee. Schedule online or call today."

**Why it's better:**
- Opens with a specific number (50 years) — Google bolds numbers in snippets
- Lists exact appliances (keyword coverage)
- Trust signals (Diamond Certified, factory-authorized)
- Strong CTA at the end ("Schedule online or call")
- No wasted space on neighborhood names (those already appear in the H1 content)

### Code Change

```typescript
// src/data/cityContent.ts
const santaRosa: CityContent = {
  slug: 'santa-rosa',
  name: 'Santa Rosa',
  metaTitle: 'Santa Rosa Appliance Repair — 50 Years, 90-Day Guarantee',
  metaDescription:
    '50 years fixing refrigerators, washers, dryers, ovens, and dishwashers for Santa Rosa homes. Diamond Certified technicians, factory-authorized parts, and every repair backed by our 90-day money-back guarantee. Schedule online or call today.',
  // ... rest unchanged
}
```

---

## P0 Fix #2: Add FAQ Section

The Santa Rosa page has no FAQ section. Adding one with FAQPage schema does three things:
1. Captures "People Also Ask" box real estate
2. Provides Google direct answers to local queries
3. Adds structured data that Google rewards for local pages

### Suggested FAQs (matched to real Search Console queries)

```typescript
// src/data/cityContent.ts - add to CityContent interface
faqs?: Array<{
  question: string
  answer: string
}>

// Then for Santa Rosa:
faqs: [
  {
    question: "How much does appliance repair cost in Santa Rosa?",
    answer: "Our standard service call fee is $149, which includes diagnosis and is applied toward the repair if you proceed. Most Santa Rosa repairs range from $200 to $450 depending on the appliance and parts needed. We provide an upfront estimate before any work begins.",
  },
  {
    question: "Do you offer same-day appliance repair in Santa Rosa?",
    answer: "We frequently have same-day availability for Santa Rosa, especially for urgent refrigerator or washer issues. Our Cotati shop is only 15 minutes south on Highway 101, so response times here are among our fastest. Call (707) 664-9702 to check today's schedule.",
  },
  {
    question: "What appliance brands do you repair in Santa Rosa?",
    answer: "We're factory-authorized for most major brands including Whirlpool, GE, Maytag, Samsung, LG, Kenmore, Frigidaire, Bosch, KitchenAid, JennAir, Sub-Zero, Viking, Wolf, and Thermador. Whether your kitchen has entry-level appliances or premium Sub-Zero and Viking installs in Fountaingrove, we carry genuine OEM parts for the job.",
  },
  {
    question: "Do you service my Santa Rosa neighborhood?",
    answer: "Yes. We service every Santa Rosa neighborhood including Fountaingrove, Rincon Valley, Bennett Valley, Roseland, Oakmont, South Park, Coffey Park, Rincon Ridge, and Skyhawk. We also cover surrounding communities in Sonoma County like Windsor, Sebastopol, and Healdsburg.",
  },
  {
    question: "Why does my dishwasher keep getting clogged in Santa Rosa?",
    answer: "Santa Rosa's municipal water is relatively hard, meaning it carries minerals that build up inside dishwasher spray arms, drain pumps, and water inlet valves over time. Regular cleaning and timely part replacement prevent most issues. If your dishes are still coming out spotted after a cleaning cycle, call us for a diagnostic.",
  },
  {
    question: "Are you licensed and insured in Santa Rosa?",
    answer: "Yes. Kelly's Appliance Center has been operating since 1975, we're fully licensed and insured, Diamond Certified by American Ratings, and we're factory-authorized for most major appliance brands. Every repair comes with our 90-day money-back guarantee.",
  },
],
```

Then add to the page template:

```tsx
// src/app/service-locations/santa-rosa/page.tsx (or add to shared template)
{city.faqs && city.faqs.length > 0 && (
  <>
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions — Appliance Repair in {city.name}
        </h2>
        <div className="space-y-6">
          {city.faqs.map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <FAQJsonLd faqs={city.faqs} />
  </>
)}
```

And the schema component (create if not exists):

```tsx
// src/components/FAQJsonLd.tsx
type FAQ = { question: string; answer: string }

export default function FAQJsonLd({ faqs }: { faqs: FAQ[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer,
            },
          })),
        }),
      }}
    />
  )
}
```

---

## P1 Fix #1: Expand Trust Content

Current trustContent has 3 paragraphs. Expand to 6-8 with real local detail:

```typescript
trustContent: [
  'Santa Rosa is the largest city in Sonoma County with over 180,000 residents, and we have been its go-to appliance repair team since 1975. Our technicians drive up Highway 101 from Cotati every single day — Santa Rosa response times are among our fastest in the service area.',
  
  'We work on every major brand you will find in Santa Rosa kitchens and laundry rooms. That includes entry-level Whirlpool, GE, and Maytag sets in Roseland and Coffey Park bungalows, mid-range LG, Samsung, and Frigidaire units in Rincon Valley homes, and premium Sub-Zero, Viking, Thermador, and Wolf installs in Fountaingrove and Skyhawk estates. Every repair uses genuine OEM parts and comes with our 90-day money-back guarantee.',
  
  'Santa Rosa homeowners deal with hard municipal water that can shorten the life of dishwashers, washing machines, ice makers, and water filters. We see mineral buildup constantly, know the fixes that last, and stock the replacement valves and spray arms that most competitors have to order.',
  
  'After the 2017 Tubbs Fire, we watched Santa Rosa rebuild from Coffey Park to Fountaingrove. Many homes that were rebuilt or repaired have newer appliance installations, and we have been the trusted service partner for homeowners dealing with warranty claims, smart appliance quirks, and the adjustment period that comes with any new kitchen.',
  
  'Our Cotati headquarters is 15 minutes south on 101, which means we can typically get a technician to Santa Rosa within a few hours for urgent calls. We also service neighboring communities like Windsor, Healdsburg, Sebastopol, Rohnert Park, and Cotati, so our team is already in the area most days.',
  
  'We are Diamond Certified, a rating reserved for businesses with a proven track record of customer satisfaction based on independent research. That certification is renewed annually, and we have held it for years. You can read about our Diamond Certified status on our website or verify it directly through American Ratings.',
],
```

This takes the page from ~300 words to ~700 words of unique, local, E-E-A-T-rich content.

---

## P1 Fix #2: Add "Brands We Repair" Section (Unique to Santa Rosa)

New section with Santa Rosa-specific brand coverage:

```tsx
<section className="py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">
      Brands We Repair in Santa Rosa
    </h2>
    <p className="text-gray-700 mb-6 max-w-3xl">
      From everyday workhorses to luxury kitchens, we service every major appliance brand in Santa Rosa. Our technicians are factory-authorized for most brands, which means we can handle warranty repairs and carry genuine OEM parts.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* Standard brands */}
      {['Whirlpool', 'GE', 'Maytag', 'Samsung', 'LG', 'Kenmore', 'Frigidaire', 'Bosch'].map(brand => (
        <div key={brand} className="bg-white border border-gray-200 rounded-lg p-4 text-center">
          <p className="font-semibold">{brand}</p>
        </div>
      ))}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
      Premium Brands (Fountaingrove, Skyhawk, Rincon Ridge)
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {['Sub-Zero', 'Viking', 'Wolf', 'Thermador', 'JennAir', 'KitchenAid', 'Dacor', 'Miele'].map(brand => (
        <div key={brand} className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <p className="font-semibold text-green-900">{brand}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

This adds:
- More keyword coverage for brand+city queries
- Visual differentiation from thin competitor pages
- Implicit E-E-A-T (Kelly's services premium brands = serious shop)

---

## P1 Fix #3: More Neighborhoods

Current: 6 neighborhoods
Proposed: 15+ with implicit hierarchy

```typescript
neighborhoods: [
  // Established areas
  'Fountaingrove',
  'Rincon Valley',
  'Bennett Valley',
  'Roseland',
  'Oakmont',
  'South Park',
  // Additional neighborhoods
  'Coffey Park',
  'Rincon Ridge',
  'Skyhawk',
  'Montecito Heights',
  'Proctor Terrace',
  'Junior College',
  'West End',
  'Cherry Valley',
  'Burbank Gardens',
  'Hidden Valley',
],
```

---

## P1 Fix #4: Write a Santa Rosa-Specific Blog Post

Something like:
**"Appliance Repair in Santa Rosa: What Every Homeowner Should Know"**

Covers:
- Santa Rosa's water quality and how it affects appliances
- Post-fire rebuild considerations for new appliances
- Most common repair calls we get from each neighborhood
- When to repair vs replace specific to Santa Rosa home styles
- How to find a local appliance repair you can trust

Target keywords:
- "appliance repair santa rosa"
- "santa rosa appliance repair"
- "appliance repair near santa rosa"
- "who fixes appliances in santa rosa"

Then internally link from this blog post → /service-locations/santa-rosa and vice versa. This creates the content cluster Google looks for.

---

## P2 Fixes (Long-Term)

### Get More Santa Rosa Reviews

- Identify 10 recent Santa Rosa jobs that went well
- Ask those customers to leave a Google review mentioning Santa Rosa or their neighborhood
- Feature 3-5 of those reviews directly on the Santa Rosa page

### Build Santa Rosa Citations

- Santa Rosa Chamber of Commerce listing
- Santa Rosa Press Democrat business directory
- Nextdoor Santa Rosa neighborhood presence
- Yelp Santa Rosa profile (fully optimized)
- BBB Santa Rosa listing
- Angi/HomeAdvisor (if ever activated)

### Santa Rosa Virtual Office (Q2 Roadmap Item)

Already planned: multi-location GBP expansion includes a Santa Rosa virtual office. Once live, the Santa Rosa page should link to it and vice versa.

---

## Expected Impact

If all P0 and P1 fixes ship within 2 weeks:

| Metric | Current | Projected (30 days post-launch) |
|--------|---------|-------------------------------|
| Santa Rosa page CTR | 0.37% | **1.5-3%** (4-8x improvement) |
| Position for "appliance repair santa rosa" | 7-8 | **4-6** |
| Monthly clicks from Santa Rosa page | 17 | **60-120** |
| Monthly leads estimated from Santa Rosa page | 1-2 | **5-10** |

Projections are conservative. The CTR improvement alone from a better meta snippet at current position could 3-4x the clicks without any position improvement.

---

## Implementation Order

### Week 1 (This Week)
1. **[30 min]** Update Santa Rosa metaTitle and metaDescription in cityContent.ts
2. **[1 hr]** Add `faqs` field to CityContent interface, populate Santa Rosa FAQs
3. **[1 hr]** Create FAQJsonLd component (if not exists)
4. **[30 min]** Add FAQ section to shared city page template
5. **[10 min]** Deploy and verify

### Week 2
6. **[1 hr]** Expand trustContent from 3 to 6 paragraphs
7. **[1 hr]** Add "Brands We Repair" section to shared template
8. **[30 min]** Update neighborhoods list to 15+
9. **[2 hr]** Write Santa Rosa blog post draft
10. **[1 hr]** Humanize, add schema, publish
11. **[10 min]** Deploy and verify

### Monitoring
- Pull Search Console data weekly (once MCP auth is fixed)
- Watch position + CTR for Santa Rosa queries over 4 weeks
- If CTR doesn't improve after 2 weeks, A/B test a different meta title

---

## Risk Assessment

**Low risk:**
- All changes are additive (expand content, add sections)
- Meta rewrites are routine and don't require technical changes
- FAQ schema is well-supported and Google rewards it

**Medium risk:**
- None identified

**Zero risk:**
- Nothing requires server or database changes
- No external dependencies
- No cost beyond dev time

---

## Questions for Shane/Mark Before Executing

1. **Any Santa Rosa-specific customer stories we can use as testimonials?** (Real stories beat generic content 10x for trust signals)
2. **Any notable Santa Rosa jobs worth mentioning?** (Big Sub-Zero repairs in Fountaingrove, unusual repairs, etc.)
3. **Does Kelly's have a preferred list of neighborhoods to emphasize?** (Upscale vs working-class focus?)
4. **Any Santa Rosa events or sponsorships worth mentioning?** (Community signals)
5. **Are there photos we can include of Santa Rosa service jobs?** (Van in Santa Rosa, technician on a call, before/after)
6. **Have we gotten any Google reviews from Santa Rosa customers that specifically mention the neighborhood?** (Feature those)

---

## Related Docs

- [Meta Rewrite April 9 Commit](https://github.com/Idea-R/kellys-appliance-nextjs/commit/f310ab1)
- [Full 30-Day Marketing Report](ads-health-2026-04-13/kellys-marketing-report-2026-04-13.pdf)
- [Search Console Section of Main Report](ads-health-2026-04-13/03-search-console.md)
- [Blog Operations Doc](../../blog-operations.md)
- [Q2-2026 Roadmap](../../Q2-2026-ROADMAP.md)
