# SEO and Credibility Growth Plan

**Created:** July 2026 (from the June performance data)
**Goal:** Rank higher, capture the impressions we already earn, and strengthen the trust signals that lift both ranking and click-through.
**Owner key:** [BUILD] = Ideas Realized builds in the site code. [YOU] = needs a client action or external account.

---

## The core insight from June data

Kelly's earned **67,080 impressions** in June but only a **1.4% click rate**. The money is not in getting shown more, it is in converting the reach we already have. Two facts drive this whole plan:

1. **~12,300 impressions a month are stranded on page 2 and 3**, almost all of it on the city location pages. Moving these to page 1 is the largest single click opportunity on the site.
2. **Review-star schema is live on the homepage only.** Adding it site-wide puts star ratings in the search result for every ranking page at once, which lifts click-through without needing any ranking change.

| Page | June impressions | Avg position | Note |
|---|---|---|---|
| /service-locations/novato | 3,418 | 22.6 | page 3, high reach |
| /service-locations/petaluma | 2,671 | 19.0 | page 2 |
| /service-locations/san-rafael | 2,207 | 13.6 | **closest to page 1** |
| /service-locations/mill-valley | 1,857 | 19.4 | page 2 |
| /service-locations/sonoma | 1,301 | 26.9 | page 3 |
| /service-locations/napa | 861 | 20.9 | page 2, Napa cluster near page 1 |
| "dishwasher repair near me" | 1,442 | 27.4 | page exists, needs authority |

---

## Tier 1 — Site-wide trust schema (fastest win, hits every page at once) [BUILD]

Star ratings and richer results lift click-through on pages that already rank, so this captures impressions immediately with no ranking change required.

1. **Extend review-star schema beyond the homepage.** `ReviewJsonLd.tsx` already exists but runs only on `page.tsx`. Add `AggregateRating` to the five service pages and the location pages, wired to the **live** review count from `/api/reviews` (currently the schema uses a static 4.9/142 that is decoupled from the real number). Real stars in the SERP is the highest-leverage CTR change available.
2. **Add `aggregateRating` to the LocalBusiness entity** in `layout.tsx` (the site-wide `#business` node). It is the canonical entity Google reads, and it currently has no rating.
3. **Add Person / author schema for the technicians.** The team page (`about-us/our-team`) has real bios (owner Mark Kelly, service manager Dane Marcy, both Diamond Certified experts) but emits no `Person` schema, and blog posts are authored by the Organization. Attributing how-to content to a named, credentialed technician is a direct E-E-A-T (expertise) signal that Google rewards for repair advice.

## Tier 2 — The location-page ranking push (biggest reach opportunity) [BUILD]

The ~12,300 page-2 impressions live here. Priority order by closeness to page 1:

1. **San Rafael first** (pos 13.6, one solid push from page 1), then Petaluma, Mill Valley, Napa, Novato, Sonoma.
2. **Deepen the thin city pages** with genuinely local content: neighborhoods and nearby towns served, city-specific appliance notes, a city-tagged FAQ block (the `FAQSection` component supports this), and 2 to 3 real reviews from customers in that city.
3. **Add per-location review schema** so each city page can show stars.
4. **Internal linking:** link each service page and relevant blog post to the matching city pages, and cross-link neighboring cities. The location pages are currently under-linked, which caps their authority.
5. **Napa is a cluster win:** "appliance repair napa", "refrigerator repair napa", "napa appliance repair" all sit at position 8 to 11. A Napa content and linking boost likely tips several onto page 1 together.

## Tier 3 — Dishwasher: rank the page that already exists [BUILD]

The page is built and deep; it just lacks authority for "dishwasher repair near me" (pos 27).

1. **Confirm which URL Google ranks** for the query, then consolidate signals onto `/services/dishwasher-repair`.
2. **Strengthen internal links** into it from both dishwasher blog posts, the homepage services grid, and the services index.
3. **Fix the orphaned post:** `common-dishwasher-problems-and-how-to-prevent-them` is not in `blogPosts.ts`, so it is missing from the blog index and sitemap. Add it, link it to the service page.
4. **Add review schema** to the dishwasher page (covered by Tier 1).

## Tier 4 — Blog rich snippets and hygiene [BUILD]

The high-impression posts (dryer 12,157 impr, oven 5,433, washer 10,714) already have good titles. The levers now are snippet real estate and ranking, not titles.

1. **Add FAQ schema to these posts.** FAQ rich results expand the search footprint and lift click-through even at the same rank. The `FAQSection` + `FAQJsonLd` components already exist.
2. **Fix the JSON-LD headline mismatch:** the dryer and washer posts have a `headline` in structured data that differs from the page title. Align them.
3. **Add the three high-impression posts to `blogPosts.ts`** so they appear in the blog index and sitemap with a fresh lastmod (they are currently absent from the index array).
4. **Link each post to its service page** (dryer post to dryer-repair, etc.) to pass authority and give readers a path to book.

## Tier 5 — Off-site credibility (compounds rankings and trust) [YOU / ongoing]

1. **Keep Google review velocity up.** The auto-request pipeline exists; a steady flow of fresh reviews lifts both map ranking and the star count that Tier 1 puts into search results.
2. **Backlinks and citations:** reciprocal links with the referral-network partners already built, the Rohnert Park and Novato chamber member profiles, Diamond Certified, and BBB. Confirm name/address/phone is identical everywhere.
3. **GBP freshness:** the blog-to-GBP auto-posting is built; switching it on keeps the profile active, which supports the local pack.
4. **Second Santa Rosa GBP location** (already in progress) expands map visibility in the one large city where organic is weakest.
5. **AI answer-engine discovery:** an `llms.txt` file and the completed schema above position Kelly's to be cited by ChatGPT, Perplexity, and similar when customers ask them for a repair company.

---

## Recommended sequence

1. **Tier 1 review-star schema site-wide** (one build, lifts CTR on every ranking page). Fastest measurable win.
2. **Tier 2 San Rafael + Napa location push** (closest to page 1, biggest reach pool).
3. **Tier 4 blog FAQ schema + internal links** (quick, compounding).
4. **Tier 3 dishwasher authority** (links + orphan fix).
5. **Tier 5** runs in parallel as an ongoing client-side track.

Measurement: re-pull GSC in 3 to 4 weeks and watch CTR on the fixed pages and average position on San Rafael, Napa, and the dishwasher query.
