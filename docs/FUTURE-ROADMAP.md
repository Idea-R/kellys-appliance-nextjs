# Future Roadmap: Kelly's Appliance Center Website

Items identified during the March 2026 site audit, organized by priority and category. These are documented for future planning and implementation.

---

## High Priority (Next Quarter)

### Content Pages
- **Dedicated FAQ Page** (`/faq`): Consolidate common customer questions with FAQPage schema. Currently FAQs are scattered across individual service pages. A central FAQ page would improve AEO (Answer Engine Optimization) and provide a single entry point for voice search queries.
- **Garbage Disposal Repair Service Page** (`/services/garbage-disposal-repair`): Currently not offered as a standalone service page despite being a common repair request. Add to the services grid and sitemap.

### Navigation & Accessibility
- **Nav Dropdown Keyboard Accessibility**: Add `aria-haspopup="true"` and `aria-expanded` to dropdown trigger links. Implement keyboard interaction: Enter/Space to toggle dropdown, Escape to close. Consider `@media (hover: hover)` for hover-based behavior, click-based for touch. This is an accessibility compliance item.

### SEO/Technical
- **Bing Webmaster Verification**: Submit sitemap to Bing Webmaster Tools. Currently only Google Search Console is configured.
- **Newsletter API Endpoint**: Verify the newsletter signup form actually connects to an email service. Currently the endpoint may not be functional.

---

## Medium Priority (Q3-Q4 2026)

### Content Expansion
- **Careers/Join Our Team Page** (`/careers`): Kelly's is growing. A careers page would help with recruiting and add employer brand signals to the site.
- **Testimonials/Reviews Hub** (`/reviews`): Consolidate Google Reviews, Diamond Certified testimonials, and Yelp reviews into a single social proof page. Would complement the existing AggregateRating schema.
- **Additional Napa County City Pages**: Currently only `/service-locations/napa`. Consider adding American Canyon, St. Helena, Calistoga, and Yountville based on service area coverage.
- **Commercial Appliance Services Page**: If Kelly's serves commercial clients (restaurants, hotels), a dedicated page would target a distinct keyword set.

### Integration & Features
- **Online Scheduling Integration**: Replace "Request Appointment" flow with direct scheduling via Calendly, Cal.com, or similar. The virtual service page currently mentions "Coming soon: Direct online scheduling with payment integration."
- **Spam Protection for Contact Form**: Add honeypot field or reCAPTCHA to the contact form. Currently relies on basic validation only.
- **Live Chat Widget**: Evaluate adding a chat widget (Tidio, Intercom, or similar) for instant customer communication during business hours.

### Social & Marketing
- **Google Business Profile Posts Strategy**: Regular GBP posts with photos, offers, and updates to improve local pack visibility.
- **Nextdoor Business Profile**: Active engagement on the existing Nextdoor page (`https://nextdoor.com/pages/kellys-appliance-cotati-ca/`).
- **YouTube Channel + Video Schema**: If Kelly's creates repair tip videos, host on YouTube and embed with VideoObject schema. Would significantly boost AEO.

---

## Lower Priority (2027+)

### Content
- **Before/After Photo Gallery**: Showcase repair work with before/after photos. Good for trust signals and social sharing.
- **Appliance Buying Guide Hub** (`/guides`): Expand beyond blog posts into comprehensive buying guides with comparison tables.
- **Seasonal Maintenance Guides**: Create evergreen seasonal content (spring cleaning, winter prep, holiday cooking season).

### Technical
- **Image Gallery/Lightbox Component**: Build a reusable photo gallery component for the team page, blog posts, and before/after showcase.
- **Advanced Search**: Site-wide search for blog posts, service pages, and location pages.
- **Performance Monitoring**: Set up Core Web Vitals monitoring via Cloudflare Analytics or a dedicated tool.

---

## Resolved Questions from Audit

| Question | Resolution |
|----------|-----------|
| TikTok social link | Removed (no active account) |
| Twitter/X social link | Removed (per user request) |
| Founding year inconsistency | No change needed. "1974" on parts page refers to APE (different business). Kelly's is "since 1975" everywhere else. |
| Google Business Profile URL | Using `https://maps.app.goo.gl/x9Uop8o7DNMfSufj9` (already in codebase) |
| /referrals vs /resources/referrals | Different pages: customer referrals vs partner referrals. Both kept. |
