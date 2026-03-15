# Site Audit: Kelly's Appliance Center (March 2026)

## Audit Summary

A comprehensive 4-part site audit was conducted on March 15, 2026. The audit covered SEO/AEO/structure, mobile UI, desktop UI, and future roadmap. Approximately 35 issues were identified and organized into 6 implementation phases.

## Issues Resolved

### Phase 1: Critical Fixes (Commit: 6970d80)
- [x] Updated Instagram link to real URL (`/kellysappliancerepair/`)
- [x] Removed Twitter/X social link from footer
- [x] Removed TikTok social link from footer (no active account)
- [x] Updated copyright year to dynamic `{new Date().getFullYear()}`
- [x] Fixed Google Maps embed on contact page (was placeholder coordinates)
- [x] Fixed ContactForm col-span-2 on mobile (now responsive `col-span-1 md:col-span-2`)
- [x] Fixed duplicate `<main>` tags (Layout.tsx `<main>` changed to `<div>`)
- [x] Added Instagram, Google Business Profile, and Nextdoor to schema.org sameAs
- [x] Added p-1 padding to footer social icons for 48px touch targets

### Phase 2: SEO & Structured Data (Commit: 7168861)
- [x] Added Open Graph metadata to all 11 blog post pages (type: article)
- [x] Added Open Graph metadata to all 7 service pages (type: website)
- [x] Added Open Graph metadata to authorized-service page
- [x] Trimmed meta descriptions to under 160 chars on 4 service pages
- [x] Removed keyword-stuffed "near me" patterns from service page descriptions
- [x] Removed non-standard `keywords` array from CityJsonLd schema
- [x] Removed deprecated `keywords` meta from authorized-service page
- [x] Lowered Breadcrumbs rendering threshold (items.length <= 2 to <= 1)

### Phase 3: Mobile UI Fixes (Commit: 958f408)
- [x] Added hamburger menu button in header for mobile (HamburgerButton client component)
- [x] Wired hamburger to MobileNavDrawer via custom event
- [x] Removed duplicate sticky CTA from Model Number Guide page
- [x] Fixed FloatingDiamondBadge tooltip: added focus-within, hidden on mobile
- [x] Wrapped hover-scale in @media (hover: hover) for touch devices
- [x] Expanded prefers-reduced-motion coverage (badge, slide-in, hover-scale)
- [x] Added pb-20 bottom padding on mobile for sticky CTA clearance
- [x] Increased city link touch targets in MobileNavDrawer (py-1 to py-2, text-xs to text-sm)
- [x] Increased photo remove button in PartsRequestForm (w-5 h-5 to w-8 h-8)

### Phase 4: Desktop UI & Navigation (Commit: 90f93fc)
- [x] Made blog category filter functional (BlogFilterClient client component)
- [x] Added Appliance Parts and Virtual Service Call to services index grid
- [x] Fixed tel: URI formatting on authorized-service page (3 instances)
- [x] Fixed tel: URI in BlogPostContent component

### Phase 5: Documentation (This commit)
- [x] Created blog content strategy with 15 post briefs
- [x] Created site audit archive document

### Phase 6: Future Roadmap (This commit)
- [x] Created future roadmap documentation

## Issues Deferred to Future Roadmap

The following items were identified during the audit but deferred for future implementation:

- Nav dropdown keyboard accessibility (aria-haspopup, aria-expanded, Enter/Space/Escape handlers)
- Dedicated FAQ page (`/faq`)
- Careers/Join Our Team page
- Testimonials/Reviews hub page
- Garbage disposal repair service page
- Additional Napa County city pages
- Nextdoor business profile integration (content strategy)
- YouTube channel + video schema
- Google Business Profile posts strategy
- Online scheduling integration (Calendly/Cal.com)
- Newsletter API endpoint verification
- Live chat widget evaluation
- Spam protection for contact form (honeypot/reCAPTCHA)
- Before/after photo gallery
- Bing Webmaster verification
- Commercial appliance services page (if offered)

## Audit Methodology

1. **SEO/AEO**: Reviewed all metadata exports, JSON-LD schemas, canonical URLs, sameAs references, Open Graph tags, heading hierarchy, and meta description lengths.
2. **Mobile UI**: Tested navigation patterns, touch target sizes, sticky element conflicts, reduced-motion coverage, hover state behavior on touch devices.
3. **Desktop UI**: Reviewed keyboard accessibility, form functionality, navigation dropdowns, tel: URI formatting, content completeness.
4. **Roadmap**: Identified content gaps, missing pages, integration opportunities, and competitive features.
