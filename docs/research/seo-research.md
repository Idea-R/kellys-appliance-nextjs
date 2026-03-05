# Kelly's Appliance Center - SEO & Presence Research
**Created:** March 5, 2026
**Last Updated:** March 5, 2026

---

## SITE HEALTH SNAPSHOT (March 5, 2026)

### Search Console
- **Indexed pages:** 56
- **Not indexed:** 77 (6 reasons — all accounted for)
  - Page with redirect: 43 (legacy WordPress URLs, all properly 301'd)
  - Alternate page with canonical: 1 (query parameter URL, correctly canonicalized)
  - Excluded by noindex: 1 (scheduler-confirmation — intentional)
  - Crawled not indexed: 3 (favicon, font file, search template — non-pages)
  - Discovered not indexed: 1 (new blog post, awaiting crawl)
  - Not found 404: 28 (all have redirects in _redirects, validation in progress)
- **Revalidation status:** Started 3/5/26 for redirect + canonical categories

### PageSpeed Insights (Mobile)
- **Performance:** 70
- **Accessibility:** 96
- **Best Practices:** 100
- **SEO:** 92
- Key bottlenecks: Google Maps API, brand carousel, Lenis smooth scroll, MobileNavDrawer DOM

### Cloudflare
- **Bot Fight Mode:** ON
- **AI Labyrinth:** OFF (recommend turning ON)
- **Block AI Bots:** OFF (correct — don't enable blanket block)

### Structured Data Implemented
- [x] LocalBusiness + HomeAndConstructionBusiness (layout.tsx)
- [x] WebSite schema for sitelinks (layout.tsx) — added 3/5/26
- [x] CityJsonLd for location pages (CityJsonLd.tsx)
- [x] FAQJsonLd for FAQ content (FAQJsonLd.tsx)
- [x] BreadcrumbList on all pages (Breadcrumbs.tsx)
- [x] BlogPosting on blog posts
- [ ] Individual Service schema on service pages (future)

---

## AI SEARCH OPTIMIZATION

### How AI Search Works for Local Businesses
AI assistants (ChatGPT, Perplexity, Google AI Overviews) pull from:
1. Google Business Profile
2. Structured data (JSON-LD) on the website
3. Review sentiment across platforms
4. Apple Maps data
5. Directory listings (Yelp, BBB, etc.)
6. Website content (especially FAQ-style answers)

### What Makes AI Recommend a Business
- Consistent NAP across all platforms
- Rich structured data (LocalBusiness, Service, FAQ schemas)
- Recent positive reviews with detailed service descriptions
- Content that directly answers questions in the first paragraph
- Multiple authoritative directory listings

### How to Test
- Ask ChatGPT: "Who does appliance repair in Sonoma County?"
- Ask Perplexity: "Best appliance repair near Santa Rosa CA"
- Check if Kelly's appears in Google AI Overviews for key queries

---

## LOCAL SEO RANKING FACTORS (2026)

### Top Factors for Google Maps 3-Pack
1. **Google Business Profile completeness & activity** — #1 factor
2. **Review volume, recency, and response rate**
3. **NAP consistency across all listings**
4. **Proximity to searcher** (can't control, but serving wider area helps)
5. **Website relevance** (service-area pages with natural keyword integration)
6. **Backlink profile** (local links, industry links)

### Content Strategy for AI + Search
- Target conversational, question-based phrases
- Provide direct answers in the first paragraph
- AI favors structured, complete, consistent information
- Short how-to guides build trust and feed AI search
- 2 blog posts per month minimum

---

## DIRECTORY PRIORITIES

### Tier 1 — Must-Have
- [x] Google Business Profile
- [ ] Yelp (verify/optimize)
- [ ] Apple Maps / Apple Business Connect
- [ ] Bing Places
- [ ] Facebook Business Page

### Tier 2 — Important
- [ ] BBB (verify listing)
- [ ] Angi (formerly Angie's List)
- [ ] HomeAdvisor
- [ ] Thumbtack
- [ ] Nextdoor
- [ ] Yellow Pages

### Tier 3 — Local / Niche
- [ ] Chamber of Commerce (Cotati, Rohnert Park, Santa Rosa, Petaluma)
- [x] Diamond Certified
- [ ] Manta
- [ ] Foursquare
- [ ] CitySearch

### Tier 4 — Industry-Specific
- [ ] GE Appliances repair locator
- [ ] Whirlpool authorized service finder
- [ ] Samsung repair finder
- [ ] LG repair finder

---

## REDIRECT AUDIT SUMMARY

All 28 404 URLs in Search Console are covered by existing redirects in `public/_redirects`:

### Old WordPress paths → New Next.js routes
- `/resources/blog/` → `/blog`
- `/service-area/` → `/service-locations`
- `/authorized-service/*` → `/services/*`
- `/appliance-repair-[city]/` → `/service-locations/[city]`
- Blog posts at root → `/blog/[slug]`
- `/wp-json/*`, `/author/*`, `/fusion_tb_category/*` → `/` or `/about-us`
- `/portfolio-items/`, `/contact-test`, `/design-preview` → appropriate targets
- `/services/range-oven-repair` & `/services/oven-range-repair` → `/services/oven-repair`

All redirects are 301 (permanent) and have both trailing-slash and non-trailing-slash variants.
