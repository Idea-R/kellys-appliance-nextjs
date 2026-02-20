# Kelly's Appliance Center - Online Presence Improvement Plan

**Created:** February 2026
**Status:** Active
**Last Audit:** February 20, 2026 (updated with citation discovery results)

---

## Canonical Business Data (NAP Reference)

> **CRITICAL:** All directory listings, schema markup, and online profiles MUST use this exact data. Any deviation hurts local SEO.

| Field | Value |
|-------|-------|
| **Business Name** | Kelly's Appliance Center |
| **Street Address** | 466 Primero Ct, Suite H |
| **City, State, ZIP** | Cotati, CA 94931 |
| **Phone** | (707) 664-9702 |
| **Website** | https://kellysappliancerepair.com |
| **Email** | kellysappliance@gmail.com |
| **Founded** | 1975 |
| **Hours** | Mon-Fri 8:30 AM - 4:30 PM |
| **Service Area** | Sonoma, Marin, and Napa Counties (50-mile radius) |
| **Categories** | Appliance Repair, Appliance Service, Home Appliance Repair |

**Standard Description (use on all directories):**
> Professional appliance repair services in the Bay Area since 1975. Factory authorized, Diamond Certified. Specializing in refrigerator, oven, dishwasher, washer, and dryer repair. 90-day money-back guarantee. Serving Sonoma, Marin, and Napa counties.

---

## Current Scores (as of Feb 2026)

| Metric | Score | Target |
|--------|-------|--------|
| BrightLocal Key Citation Score | 53/100 | 85/100 |
| Domain Authority | 17/100 | 30/100 |
| Trust Flow | 12/100 | 25/100 |
| Citation Flow | 23/100 | 35/100 |
| Google Rating | 4.88/5 (158 reviews) | 4.9/5 (200+ reviews) |
| Review Diversity | 89% Google only | 70% Google, 15% Yelp, 15% other |
| Blog Content | 6 posts | 18+ posts |
| Schema Coverage | ✅ LocalBusiness + FAQ + BreadcrumbList + AggregateRating + BlogPosting | Complete |

---

## Priority 1: Quick-Win Schema Enhancements (Code) - HIGHEST IMPACT ✅ COMPLETE

> Committed as `8ce2b0d` on Feb 20, 2026 and deployed to Cloudflare Pages.

### 1A. AggregateRating Schema ✅
- **File:** `src/app/layout.tsx`
- **Action:** Added `aggregateRating` to LocalBusiness JSON-LD
- **Data:** 4.88 rating, 158 reviews, bestRating: 5, worstRating: 1
- **Impact:** Enables review stars in Google SERPs (rich results)

### 1B. BlogPosting Schema on All Blog Posts ✅
- **Files:** All 6 blog post pages in `src/app/blog/*/page.tsx`
- **Action:** Added BlogPosting JSON-LD with headline, datePublished, author, publisher, mainEntityOfPage, image, articleSection, wordCount
- **Impact:** Enables article rich results, improves content indexing

### 1C. Expanded sameAs Links ✅
- **File:** `src/app/layout.tsx`
- **Action:** Added BBB, YellowPages, MapQuest URLs to sameAs array
- **Impact:** Strengthens Knowledge Panel and AI entity recognition

---

## Priority 2: Citation NAP Error Fixes - HIGH IMPACT

### Known Errors (from BrightLocal audit + manual verification Feb 20, 2026)

| # | Directory | Error | Correct Value | Status |
|---|-----------|-------|---------------|--------|
| 1 | **Foursquare** | Address: "644 Primero Ct" + marked "Now Closed" | 466 Primero Ct, Suite H + mark OPEN | 🔴 CRITICAL - Fix ASAP |
| 2 | **Manta** | BrightLocal reported wrong address | No listing found on Manta (verified Feb 2026) | ⚪ No action needed |
| 3 | **MerchantCircle** | Suite: "Suite G", Hours: "8am-5pm" | Suite H, Hours: 8:30am-4:30pm | 🟡 Fix (listing is claimed, owner can edit) |

### Foursquare Details (CRITICAL)
- **Venue ID:** `4bb22ef335f0c9b6ddeaba83`
- **URL:** `https://foursquare.com/v/kellys-appliance-center/4bb22ef335f0c9b6ddeaba83`
- **Issues:** (1) Marked as "Now Closed" - business is OPEN, (2) Wrong address: 644 → 466
- **Fix requires:** Foursquare account login → Edit venue → Correct address + mark as open
- **Note:** Foursquare now requires login for all venue pages (walled content)

### MerchantCircle Details
- **URL:** `https://www.merchantcircle.com/kellys-appliance-center-cotati-ca`
- **Issues:** (1) "466 Primero Ct. Suite G" should be Suite H, (2) Hours show 8:00am-5:00pm instead of 8:30am-4:30pm
- **Listing is claimed** - owner can log in and edit directly

---

## Priority 3: Missing Citation Building - HIGH IMPACT

### Current Citations Found (18/39 key sites)

| # | Directory | Status | NAP Correct |
|---|-----------|--------|-------------|
| 1 | Google Business Profile | Found | Yes |
| 2 | Apple Maps | Found | Yes |
| 3 | Facebook | Found | Yes |
| 4 | Bing Places | Found | Yes |
| 5 | Foursquare | Found | **NO - Wrong address (644) + marked "Now Closed"** |
| 6 | BBB | Found | Yes |
| 7 | MapQuest | Found | Yes |
| 8 | YellowPages | Found | Yes |
| 9 | Manta | **NOT FOUND** (Feb 2026) | BrightLocal data outdated - no Cotati listing exists |
| 10 | MerchantCircle | Found | **NO - Suite G (should be H) + wrong hours** |
| 11 | Yelp | Found | Yes |
| 12 | Brownbook | Found | Yes |
| 13 | DexKnows | Found | Yes |
| 14 | Hotfrog | Found | Yes |
| 15 | YellowBot | Found | Yes |
| 16 | BOTW.org | Found | Yes |
| 17 | Data Axle | Found | Yes |
| 18 | Localeze | Found | Yes |

### Missing Citations to Build (updated after manual verification Feb 20, 2026)

> **Key finding:** BrightLocal reported 21 sites as "missing" but manual checks found several already have listings! Only ~15 are truly missing.

**Tier 1 - Free, High Authority (verified status):**

| # | Directory | URL | Actual Status (Feb 2026) | Action Needed |
|---|-----------|-----|--------------------------|---------------|
| 1 | SuperPages | superpages.com | ✅ **EXISTS** - correct NAP (466 Primero Ct Ste H) | None - already listed |
| 2 | ChamberofCommerce.com | chamberofcommerce.com | ❌ **NOT FOUND** - genuinely missing | Create new listing |
| 3 | YellowBook | yellowbook.com | ⚪ **DEFUNCT** - site is just an alphabetical directory, no search | Skip - not worth pursuing |
| 4 | EZlocal | ezlocal.com | ✅ **EXISTS** - correct NAP, unclaimed | Claim listing, add website URL, fix "since 2007" → "since 1975" |
| 5 | ShowMeLocal | showmelocal.com | ✅ **EXISTS** - correct NAP (466 Primero Ct Suite H), unclaimed | Claim listing, enhance profile |
| 6 | iBegin | ibegin.com | ✅ **EXISTS** - correct NAP, unclaimed, missing website URL | Claim listing, add website URL |

**Tier 2 - Free, Medium Authority:**

| # | Directory | URL | Status |
|---|-----------|-----|--------|
| 7 | Cortera | cortera.com | [ ] Create |
| 8 | US City Network | uscity.net | [ ] Create |
| 9 | ThinkLocal | thinklocal.com | [ ] Create |
| 10 | ZipLeaf | zipleaf.us | [ ] Create |
| 11 | Tuugo | tuugo.us | [ ] Create |
| 12 | eBusinessPages | ebusinesspages.com | [ ] Create |

**Tier 3 - Free, Niche:**

| # | Directory | URL | Status |
|---|-----------|-----|--------|
| 13 | GoLocal247 | golocal247.com | [ ] Create |
| 14 | CitySquares | citysquares.com | [ ] Create |
| 15 | iGlobal | iglobal.co | [ ] Create |
| 16 | AmericanTowns | americantowns.com | [ ] Create |
| 17 | Wand.com | wand.com | [ ] Create |
| 18 | 2FindLocal | 2findlocal.com | [ ] Create |
| 19 | LocalStack | localstack.com | [ ] Create |
| 20 | Where2GetIt | where2getit.com | [ ] Create |
| 21 | AllPages | allpages.com | [ ] Create |

---

## Bonus: Additional Directories Discovered (Feb 20, 2026)

During manual verification, the following directories were found to already have listings (not tracked by BrightLocal):

| # | Directory | URL | NAP Status |
|---|-----------|-----|------------|
| 1 | Rohnert Park Chamber | rohnertparkchamber.org | Needs verification |
| 2 | Windsor Chamber | windsorchamber.com | Needs verification |
| 3 | Nextdoor | nextdoor.com/pages/kellys-appliance-cotati-ca | Needs verification |
| 4 | Diamond Certified | diamondcertified.org/report/kellys-appliance-center | Needs verification |
| 5 | Angi (Angie's List) | angi.com | Has reviews |
| 6 | Marin Referral Network | marinreferral.net | Needs verification |
| 7 | LinkedIn | linkedin.com/company/kelly's-appliance-center-llc | Needs verification |

> These additional citations strengthen the business's online presence. Verify NAP accuracy on each.

---

## Priority 4: Content Strategy - MEDIUM IMPACT

### Blog Editorial Calendar (Target: 2+ posts/month)

**Immediate topics (high search volume, local intent):**
1. "How Often Should You Clean Your Refrigerator Coils?" (maintenance)
2. "Signs Your Oven Needs Professional Repair" (service awareness)
3. "Appliance Repair vs. Replace: When to Call a Technician" (decision guide)
4. "How to Prepare Your Appliances for Winter in Sonoma County" (seasonal/local)
5. "What to Do When Your Dishwasher Won't Drain" (troubleshooting)
6. "Energy-Efficient Appliance Tips for Bay Area Homeowners" (local/green)

### Content Types to Diversify:
- **How-to guides** (DIY maintenance tips)
- **Brand-specific pages** (Sub-Zero, Viking, Thermador, etc.)
- **Seasonal content** (spring cleaning, holiday prep)
- **Local content** (city-specific service pages already exist - cross-link from blog)
- **FAQ expansion** (voice search / AEO optimization)

---

## Priority 5: Analytics & Review Strategy - MEDIUM IMPACT

### GA4 Conversion Tracking
- [ ] Track phone number clicks (tel: links)
- [ ] Track "Book Appointment" button clicks
- [ ] Track contact form submissions
- [ ] Set up conversion goals in GA4

### Review Generation Strategy
- [ ] Add review request to post-service email workflow
- [ ] Add Yelp review link alongside Google review CTA on website
- [ ] Consider BBB review solicitation
- [ ] Target: Diversify from 89% Google to 70/15/15 split

### BrightLocal Monitoring
- [ ] Set up Google Rankings tracking in BrightLocal
- [ ] Schedule monthly citation audit
- [ ] Monitor NAP consistency after fixes

---

## Technical Audit Summary (Feb 2026)

| Area | Score | Notes |
|------|-------|-------|
| Sitemap | 9/10 | Comprehensive, 60+ URLs, proper priority weighting |
| Schema Markup | 9/10 | ✅ LocalBusiness + AggregateRating + BlogPosting + BreadcrumbList + FAQPage (deployed Feb 20) |
| Security Headers | 9/10 | HSTS, CSP, X-Frame-Options all configured |
| Redirects | 9/10 | 100+ WordPress-to-Next.js redirects, all 301s |
| AEO (AI Optimization) | 8/10 | llms.txt, llms-full.txt, all AI crawlers allowed |
| Blog Content | 3/10 | Only 6 posts, oldest from 2019 - needs volume |
| Citations | 5/10 | 53/100 score, 21 missing, 3 NAP errors |
| Analytics | 7/10 | GA4 + GTM active, missing conversion tracking |
| Mobile/Cross-Platform | 8/10 | Tailwind responsive, potential oklch() concern for old browsers |

---

## Site Architecture Reference

- **Total pages:** 54
- **Service pages:** 8 (refrigerator, oven, dishwasher, washer-dryer, dryer, parts, virtual)
- **Location pages:** 24 (3 counties + 21 cities)
- **Blog posts:** 6
- **Other:** homepage, about, contact, resources, reviews, blog index
- **Tech stack:** Next.js 15.5.0 (static export) on Cloudflare Pages
- **Domain:** kellysappliancerepair.com
