# Kelly's Appliance Center - Action Plan
**Created:** March 5, 2026
**Last Updated:** March 5, 2026

---

## Status Legend
- [ ] Not started
- [~] In progress
- [x] Completed

---

## COMPLETED ITEMS (Session: March 5, 2026)

- [x] SEO metadata fixes across 8 pages (double-branding titles, generic descriptions, truncation) — commit `c8e4b5a`
- [x] Replace generic "Learn More" links with descriptive text for Lighthouse SEO — commit `757af86`
- [x] Add WebSite schema (JSON-LD) for sitelinks potential — commit `e82ba6f`
- [x] Lazy-render MobileNavDrawer for mobile perf improvement — commit `e82ba6f`
- [x] Search Console: Revalidation requested for "Page with redirect" (43 pages) — started 3/5/26
- [x] Search Console: Revalidation requested for "Alternate page with proper canonical tag" (1 page) — started 3/5/26
- [x] Search Console: Reviewed all 77 non-indexed pages — all redirects already in place
- [x] Cloudflare: Bot Fight Mode confirmed ON
- [x] nodejs_compat flag added for photo attachment submissions — commit `854bfd2`
- [x] Google Ads account audit completed — discovered LSAs already live since Feb 18
- [x] Research docs created: google-ads-strategy.md, seo-research.md, recurring-tasks.md
- [x] Connected YouTube channel ("Mark Kelly") to Google Ads Data Manager
- [x] Confirmed GBP already linked to Google Ads (was already connected)
- [x] Content plan created: content-plan.md (GBP calendar, photo shot list, review scripts, blog calendar)

---

## HIGH PRIORITY — Do This Week

### 1. Google Business Profile Activity Blitz
- [ ] Post updates/photos at least twice per week (top ranking signal for local pack)
- [ ] Target 100+ photos total on GBP (technicians, vans, shop, completed repairs)
- [ ] Use GBP Posts for: seasonal tips, service spotlights, special offers
- **Why:** GBP activity directly controls position in the Google Maps 3-pack

### 2. Review Acceleration System
- [ ] Set up systematic review request process (text/email after service calls)
- [ ] Create direct Google review link for easy sharing
- [ ] Add QR code to invoices/receipts pointing to Google review page
- [ ] Train team to ask satisfied customers for reviews
- [ ] Respond to ALL reviews within 24 hours (positive and negative)
- **Target:** Keep growing the 158 Google review lead. Competitor Appliance Doctor has 123 on Yelp.

### 3. Cloudflare AI Crawl Control (5 min task)
- [ ] Block training crawlers: GPTBot, PetalBot, Bytespider, Meta-ExternalAgent, ClaudeBot, CCBot, Amazonbot
- [ ] Allow search bots: OAI-SearchBot, PerplexityBot, Applebot
- [ ] Turn on AI Labyrinth (Security Settings)
- [ ] Repeat for other sites

---

## MEDIUM PRIORITY — Do This Month

### 4. NAP Consistency Audit
- [ ] Verify Name, Address, Phone, Hours are identical across ALL listings:
  - [ ] Google Business Profile
  - [ ] Yelp
  - [ ] Apple Maps / Apple Business Connect
  - [ ] Bing Places
  - [ ] Facebook Business Page
  - [ ] BBB
  - [ ] Diamond Certified listing
  - [ ] Yellow Pages, Manta, Foursquare
- [ ] Run BrightLocal citation audit

### 5. Directory Expansion
- [ ] **Tier 1 (must-have):** Apple Business Connect, Bing Places, Facebook Business Page
- [ ] **Tier 2 (important):** Angi, HomeAdvisor, Thumbtack, Nextdoor
- [ ] **Local chambers:** Cotati, Rohnert Park, Santa Rosa, Petaluma
- [ ] **Industry:** Manufacturer repair locators (GE, Whirlpool, Samsung, LG)

### 6. Google Ads Optimization (see google-ads-strategy.md)
- [x] LSAs already live since Feb 18, 2026 (~$20-25/lead, 2-4 leads/day)
- [x] Phone call conversion action configured
- [x] Google tag installed (needs renaming)
- [x] **Google Business Profile** linked to Google Ads (was already connected)
- [x] **YouTube channel** linked to Google Ads (connected 3/5/26)
- [ ] **Link Google Analytics (GA4)** — needs re-auth on shane@ideas-realized.com, then: GA4 Admin → Google Ads Links → Link → enter `854-489-2425`
- [ ] **Link Search Console** — same account, go to: Google Ads → Data Manager → Search Console → Proceed
- [ ] **Accept customer data terms** in conversion settings
- [ ] **Configure enhanced conversions** for better tracking
- [ ] **Add form submission conversion tracking** (contact + appointment forms)
- [ ] **Resolve security alert** ("Protect your account from unauthorized activity")
- [ ] **Rename Google tag** from "Untitled tag" to "Kelly's Appliance Center"
- [ ] **Launch Search campaign** with AI Max (after linking GBP + GA4)
- [ ] **Review LSA lead quality** and dispute any bad leads

### 7. Content Freshness — Blog Cadence
- [ ] Target 2 new blog posts per month
- [ ] Topics to cover:
  - [ ] "How much does refrigerator repair cost in Santa Rosa?"
  - [ ] "Should I repair or replace my 10-year-old dishwasher?"
  - [ ] "What brands does Kelly's Appliance repair?"
  - [ ] "How long does appliance repair take?"
- [ ] Structure: direct answer in first paragraph (AI search optimization)

---

## ONGOING — See recurring-tasks.md for schedule

### 8. GBP Posting Calendar
### 9. Review Monitoring
### 10. Search Console Check-ins
### 11. PageSpeed Monitoring
### 12. Google Ads Optimization

---

## FUTURE OPPORTUNITIES

### 13. AI Search Optimization
- [ ] Add individual Service schema on each service page with pricing ranges
- [ ] Test how site appears in ChatGPT and Perplexity searches

### 14. Video Content
- [ ] Create short 30-60 second repair tip videos
- [ ] Post to YouTube + embed on blog posts
- [ ] YouTube is #2 search engine and feeds Google results

### 15. Local Link Building
- [ ] Partner with local realtors (move-in appliance inspections)
- [ ] Sponsor local charity/Little League for backlinks
- [ ] Get featured in local news (Sonoma Index-Tribune, Press Democrat)

### 16. Mobile Performance Deep Dive
- [ ] Current PageSpeed mobile score: 70
- [ ] Key bottlenecks: Google Maps API, brand carousel, Lenis smooth scroll
- [ ] Consider lazy-loading Google Maps when section scrolls into view

---

## COMPETITIVE LANDSCAPE

| Competitor | Reviews | Notable |
|---|---|---|
| Appliance Doctor | 123 Yelp | High review count |
| Affordable Appliance Repair | 64 Yelp | Family-owned, est. 2000 |
| TeeVax Home Appliance | Physical storefront | Since 1949 |
| JD's Appliance Repair | 58 Yelp | Santa Rosa |
| Richard's Appliance Service | 30 Yelp | 46 years experience |
| NAVI Appliance Repair | Multi-county | 15+ years |
| **Kelly's Appliance Center** | **158 Google** | **Since 1975, Diamond Certified** |
