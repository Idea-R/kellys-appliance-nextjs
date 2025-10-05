# AI Overview (AIO) & SEO Strategy

## Current Status: Optimized for AI Crawlers ✅

---

## What is AIO?

**AI Overview (AIO)** = Google's AI-generated answer box at top of search results
- Powered by Google's Gemini AI
- Shows AI-written summary with source links
- Appears for ~60% of searches (growing rapidly)
- **Goal:** Get your content cited in AIO answers

---

## How AI Crawlers Work

### Traditional SEO vs AIO

| Traditional SEO | AI Overview (AIO) |
|----------------|-------------------|
| Keywords in titles | Natural language answers |
| Backlinks matter | Content quality matters more |
| Page rank important | Being cited in AI response |
| Optimized for 10 blue links | Optimized for one AI answer |

### AI Crawlers Accessing Your Site

**Active AI Crawlers:**
- `GPTBot` (OpenAI/ChatGPT)
- `ChatGPT-User` (ChatGPT browsing)
- `PerplexityBot` (Perplexity AI)
- `Claude-Web` (Anthropic Claude)
- `Google-Extended` (Google Gemini training)
- `Googlebot` (Google search + AIO)

**Your Site:** ✅ Allows all AI crawlers with rate limits

---

## Current Optimization

### 1. robots.txt ✅
```
# Explicitly allow AI crawlers
User-agent: GPTBot
User-agent: ChatGPT-User
User-agent: PerplexityBot
User-agent: Claude-Web
Allow: /
Crawl-delay: 1

# Prioritize key pages
Allow: /services/
Allow: /service-locations/
Allow: /blog/
Allow: /contact
```

### 2. Structured Data (Schema.org) ✅

**Already Implemented:**
- `LocalBusiness` schema on every page
- Service areas listed
- Phone number structured
- Address structured
- Business hours in metadata

**Location:** `src/app/layout.tsx` line 90-123

### 3. Content Structure ✅

**AIO-Friendly Content Pattern:**
- Clear H1 headings (AI understands hierarchy)
- Concise paragraphs (AI prefers scannable)
- FAQ sections (AI loves Q&A format)
- Lists and tables (AI extracts easily)
- Location-specific content (AI matches local intent)

### 4. Technical SEO ✅

- ✅ `sitemap.xml` (61 pages indexed)
- ✅ Clean URLs (no query strings)
- ✅ Fast load times (Cloudflare CDN)
- ✅ Mobile-first design
- ✅ HTTPS enforced
- ✅ Proper heading hierarchy

---

## AIO Content Strategy

### What Gets Featured in AI Overviews?

1. **Answer-focused content**
   - "How to fix X"
   - "What causes Y"
   - "When should I Z"

2. **Local intent**
   - "appliance repair near me"
   - "appliance repair in Santa Rosa"
   - Service area pages

3. **Trustworthy signals**
   - Diamond Certified badge
   - Years in business (1975)
   - Clear pricing info
   - Customer testimonials

4. **Structured answers**
   - Step-by-step guides
   - Pricing tables
   - Service lists
   - Location coverage

---

## Current Content Optimized for AIO

### ✅ Blog Posts (AI-Friendly Topics)
- "Why is my dryer taking so long to dry clothes?" (diagnostic)
- "Common dishwasher problems" (troubleshooting)
- "How to clean stainless steel appliances" (how-to)
- "Why call a professional?" (decision-making)

### ✅ Service Pages (Direct Answers)
- Refrigerator repair process
- Oven repair expertise
- Washer/dryer repair steps
- Dishwasher repair services

### ✅ Location Pages (Local Intent)
- 25 city/county pages
- Service area coverage maps
- Local phone numbers
- Response times by area

---

## Gaps & Opportunities for AIO

### Missing Content (Add These)

1. **FAQ Pages**
   ```
   /faq - General appliance questions
   /faq/refrigerator - Refrigerator-specific
   /faq/washer-dryer - Washer/dryer-specific
   ```
   
   **Why:** AI loves FAQ format (question → answer)

2. **Problem/Solution Pages**
   ```
   /problems/refrigerator-not-cooling
   /problems/dryer-not-heating
   /problems/dishwasher-not-draining
   ```
   
   **Why:** Matches "how to fix" searches

3. **Cost/Pricing Guides**
   ```
   /cost-guides/refrigerator-repair-cost
   /cost-guides/oven-repair-cost
   ```
   
   **Why:** Common AIO query: "How much does X cost?"

4. **Comparison Content**
   ```
   /guides/repair-vs-replace
   /guides/diy-vs-professional
   ```
   
   **Why:** Decision-making content gets cited

### Enhanced Existing Content

**For Each Service Page, Add:**
- ❓ **"Common Questions"** section
- 💰 **"Typical Cost Range"** table
- 🔧 **"Signs You Need Repair"** list
- ⏱️ **"How Long Does Repair Take?"** answer

**For Each Location Page, Add:**
- 🏆 **"Why Choose Us in [City]"** section
- 📍 **"We Serve These [City] Areas"** map
- ⭐ **"[City] Customer Reviews"** testimonials
- 📞 **"Emergency Service in [City]"** callout

---

## AIO Ranking Factors

### What Makes Content AIO-Worthy?

1. **E-E-A-T Signals** (Experience, Expertise, Authority, Trust)
   - ✅ 50 years in business (1975)
   - ✅ Diamond Certified
   - ✅ Factory Authorized Service
   - ✅ Expert team bios (`/about-us/our-team`)

2. **Content Freshness**
   - ✅ Blog posts dated
   - ✅ Pages updated regularly
   - ❌ Need: "Last updated" dates on service pages

3. **Citations & References**
   - ✅ Links to manufacturer sites
   - ✅ Diamond Certified external verification
   - ❌ Need: Industry certifications prominently displayed

4. **User Intent Match**
   - ✅ Location-specific pages
   - ✅ Service-specific pages
   - ✅ How-to content
   - ❌ Need: More "near me" optimization

---

## Technical Implementation for AIO

### 1. Add FAQ Schema to Pages

```typescript
// Add to service pages
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How much does refrigerator repair cost?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Typical refrigerator repair costs range from $150-$400..."
    }
  }]
}
```

### 2. Add Review Schema

```typescript
{
  "@type": "LocalBusiness",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500+"
  }
}
```

### 3. Add HowTo Schema (Blog Posts)

```typescript
{
  "@type": "HowTo",
  "name": "How to Fix a Dryer That Won't Heat",
  "step": [...]
}
```

---

## Monitoring AIO Performance

### Tools to Track AIO Mentions

1. **Google Search Console**
   - Position tracking for queries
   - Look for position 0 (featured snippets)
   - Track impressions for "near me" queries

2. **Manual Checks**
   ```
   Search: "appliance repair santa rosa"
   Check: Is AIO showing?
   Cited: Is kellysappliancerepair.com mentioned?
   ```

3. **AI Chat Tests**
   - Ask ChatGPT: "Best appliance repair in Santa Rosa"
   - Ask Perplexity: "refrigerator repair sonoma county"
   - Ask Claude: "how much does oven repair cost"

---

## Action Plan (Priority Order)

### Phase 1: Quick Wins (This Week)
1. ✅ Fix CSP to allow Google Maps embeds
2. ✅ Optimize robots.txt for AI crawlers
3. ⬜ Add FAQ sections to top 3 service pages
4. ⬜ Add "Last Updated" dates to all pages

### Phase 2: Content Expansion (This Month)
1. ⬜ Create `/faq` page with 20+ common questions
2. ⬜ Add cost guides to each service page
3. ⬜ Create 3 "Problem/Solution" pages
4. ⬜ Add customer review counts to schema

### Phase 3: Advanced Optimization (Next Month)
1. ⬜ Add FAQ schema to all service pages
2. ⬜ Add HowTo schema to blog posts
3. ⬜ Create location-specific FAQ pages
4. ⬜ Add review/rating schema with real data

---

## Success Metrics

**Track Monthly:**
- Google Search Console impressions for "near me" queries
- Position in search results (aim for top 3)
- Citations in AI overview boxes
- Click-through rate from AIO

**Goal Benchmarks:**
- Featured in AIO for "appliance repair [city]" → 50% of cities
- Position 1-3 for "refrigerator repair santa rosa" → 80% of time
- Cited in ChatGPT/Perplexity → For brand name searches

---

## Competitor Analysis

### What Are Competitors Doing?

Check these for ideas:
- Appliance repair companies ranking in AIO
- Local service businesses in your area
- National chains (Sears, Mr. Appliance)

**Differentiation:**
- ✅ 50 years history (most can't claim this)
- ✅ Diamond Certified (unique credential)
- ✅ Family-owned (trust factor)
- ✅ 90 Day Money Back Guarantee

---

## Resources

- [Google AIO Best Practices](https://developers.google.com/search/docs/appearance/overview)
- [Schema.org LocalBusiness](https://schema.org/LocalBusiness)
- [OpenAI GPTBot](https://platform.openai.com/docs/gptbot)
- [Perplexity Crawler](https://docs.perplexity.ai/docs/perplexitybot)

---

## Summary

**Current State:** Site is well-optimized for traditional SEO and basic AIO
**Strength:** Technical foundation, structured data, clean content
**Opportunity:** Add FAQ sections, cost guides, problem-solving content
**Timeline:** 4-6 weeks to dominate local AIO results
