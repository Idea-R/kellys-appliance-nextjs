# Page Reach Elevation Roadmap — Kelly's Appliance Center

**Plan Date:** April 13, 2026
**Author:** Ideas Realized
**Status:** Active Execution
**Goal:** Systematically elevate every page on kellysappliancerepair.com for better search reach, higher CTR, and more conversions.

---

## Scope

This roadmap covers **every page type** on the site:

| Page Type | Count | Priority |
|-----------|-------|----------|
| City location pages | 22 (21 cities + San Anselmo) | Tiered (below) |
| County location pages | 3 (Sonoma, Marin, Napa) | Medium |
| Service pages | 7 (fridge, oven, washer/dryer, dryer, dishwasher, parts, virtual) | High |
| Blog posts | 13 (after today's fridge post) | Ongoing |
| Core pages | Home, About, Pricing, Contact, Schedule-Prep, Authorized Service | Audit as needed |
| Supporting pages | /resources, /services, /service-locations index, /blog index | Lower |

---

## Foundation: Infrastructure Already in Place

These components exist and can be reused across all pages:

- ✅ `FAQJsonLd` (`src/components/FAQJsonLd.tsx`) — Emits FAQPage schema, validates 2+ FAQs required
- ✅ `FAQSection` (`src/components/FAQSection.tsx`) — Renders FAQ visually + emits JSON-LD
- ✅ `CityJsonLd` (`src/components/CityJsonLd.tsx`) — Emits Service + LocalBusiness schema per city
- ✅ `ReviewJsonLd` (`src/components/ReviewJsonLd.tsx`) — Emits review schema
- ✅ `Breadcrumbs` + `generateBreadcrumbs` — Consistent across all pages
- ✅ `CityContent` interface — Easy to extend with new fields

**This means:** We don't need to build new infrastructure. We just need to populate data and add FAQ sections where they're missing.

---

## City Page Tiering

Not every city gets the same treatment. The biggest markets need the most content. The smallest towns can keep current structure.

### Tier 1: Largest Markets — Full Treatment (P0-P2)

These pages need everything: meta rewrite, expanded content, 6+ FAQs, brand section, blog post link, customer testimonials.

| City | Population | Market Gap (impressions) | Current Position |
|------|-----------|--------------------------|------------------|
| **Santa Rosa** | 180K | 4,600/mo | 16.6 avg |
| **San Rafael** | 62K | 3,422/mo | 11.2 avg |
| **Petaluma** | 60K | 7,662/mo | 47.2 avg |
| **Napa** | 80K | 3,230/mo | 27.7 avg |

### Tier 2: Medium Markets — FAQ + Meta Refresh (P0-P1)

Add FAQ schema, polish meta, expand neighborhoods. No major content overhaul.

| City | Population |
|------|-----------|
| Novato | 53K |
| Sonoma | 11K |
| Mill Valley | 14K |
| Sebastopol | 8K |
| Healdsburg | 12K |
| Windsor | 28K |
| Corte Madera | 10K |

### Tier 3: Smaller Markets — FAQ Only (P0)

Just add FAQ section with schema. These pages rank fine for their size, just need the schema boost.

| City | Population |
|------|-----------|
| Cotati | 7.5K |
| Rohnert Park | 44K |
| Forestville | 3.3K |
| Guerneville | 4.5K |
| Glen Ellen | 900 |
| Bodega Bay | 1K |
| Dillon Beach | 300 |
| Sausalito | 7K |
| Tiburon | 9K |
| Larkspur | 13K |
| San Anselmo | 12K |

---

## Execution Plan

### Phase 1: Foundation (Today)

**Goal:** Add FAQ support to CityContent, update city page template, ship to Santa Rosa as reference implementation.

1. Update `CityContent` interface to include optional `faqs` field
2. Update city page template to render `FAQSection` when FAQs exist
3. Write Santa Rosa P0 updates (meta + FAQs) and deploy
4. Verify with build and preview

### Phase 2: Tier 1 Rollout (This Week)

**Goal:** Ship P0 to all Tier 1 cities (Santa Rosa, San Rafael, Petaluma, Napa).

1. Meta title/description rewrites for all 4
2. 6 FAQs each, tailored to local search queries
3. Expand trust content for Santa Rosa and San Rafael (2 hours each)
4. Monitor Search Console weekly for CTR changes

### Phase 3: Tier 2 Rollout (Next Week)

**Goal:** Ship P0 to all Tier 2 cities.

1. FAQ content for each (4-5 FAQs per city)
2. Meta refresh if current is weak
3. Minor content expansion if needed

### Phase 4: Tier 3 Rollout (Week 3)

**Goal:** Ship FAQ-only updates to all Tier 3 cities.

1. FAQ content (3-4 FAQs each, can share common questions with city-specific tweaks)
2. Leave meta and content as-is

### Phase 5: Service Pages (Week 4)

**Goal:** FAQ schema + meta polish on all 7 service pages.

1. Refrigerator Repair — add 5-6 FAQs
2. Oven Repair — add 5-6 FAQs
3. Washer/Dryer Repair — add 5-6 FAQs
4. Dryer Repair — add 5-6 FAQs
5. Dishwasher Repair — add 5-6 FAQs
6. Parts — already has structure, verify FAQ presence
7. Virtual Service Calls — add 4-5 FAQs about the process

### Phase 6: County Pages (Week 5)

**Goal:** Sonoma, Marin, Napa county pages serve as aggregation hubs.

1. Add county-level FAQs (about service area, coverage, response times)
2. Ensure each links to all cities in that county
3. Meta polish

### Phase 7: Blog Content Cluster (Ongoing)

**Goal:** Each Tier 1 city gets at least one linked blog post.

1. Santa Rosa-specific blog post (already planned in Santa Rosa audit)
2. Marin County appliance repair guide (already in blog roadmap)
3. Napa County blog post (already in backlog)
4. Internal linking from blog to city pages

---

## FAQ Content Pattern

Every city FAQ section follows this structure (pick 4-6 per city):

1. **Cost question** — "How much does appliance repair cost in [City]?"
2. **Speed question** — "Do you offer same-day repair in [City]?"
3. **Brand question** — "What appliance brands do you service in [City]?"
4. **Coverage question** — "Do you service my [City] neighborhood?"
5. **Local issue question** — e.g., "Why does my dishwasher keep clogging in [City]?" (tie to local water/housing)
6. **Trust question** — "Are you licensed and insured in [City]?"

Answers should be 2-4 sentences, specific to the city, factually accurate. Never generic.

---

## Meta Rewrite Pattern

Every meta title/description follows this structure:

**Title (60 chars max):**
- `[City] Appliance Repair — [Specific Claim] [Key Benefit]`
- Example: "Santa Rosa Appliance Repair — 50 Years, 90-Day Guarantee"

**Description (150-160 chars):**
- Opens with a specific number (50 years, 1975, 90-day) — Google bolds numbers
- Lists specific appliances (refrigerator, washer, dryer, oven, dishwasher)
- Trust signal (Diamond Certified, factory-authorized, family-owned)
- CTA (call, schedule online)

---

## Tracking & Measurement

After each phase, pull Search Console data and track:

| Metric | Baseline (Apr 11) | Target (Post-Phase 2) | Target (Post-Phase 4) |
|--------|-------------------|----------------------|-----------------------|
| Total organic clicks (30d) | 1,200+ | 1,400+ | 1,700+ |
| Santa Rosa page CTR | 0.37% | 1.5%+ | 2.5%+ |
| San Rafael page CTR | 0.23% | 1%+ | 2%+ |
| Pages with FAQ schema | 7 blog posts | 15 pages | 40+ pages |
| Avg position (non-brand) | 14.2 | 12.5 | 11.0 |

---

## Risk Assessment

All changes are additive:
- Adding FAQ sections never removes existing content
- Meta rewrites are easily rolled back if tracking shows regression
- No database changes
- No external dependencies
- No cost beyond dev time

**Rollout safety:** Ship one city at a time, verify build, check site renders. If anything breaks, isolate the change.

---

## Execution Log

### Phase 1 — Foundation (April 13, 2026)

- [ ] Update CityContent interface with faqs field
- [ ] Update Santa Rosa page template to render FAQSection
- [ ] Populate Santa Rosa faqs in cityContent.ts
- [ ] Rewrite Santa Rosa meta title and description
- [ ] Verify build passes
- [ ] Commit and push

### Phase 2 — Tier 1 (Target: Apr 14-18)

- [ ] San Rafael FAQs + meta
- [ ] Petaluma FAQs + meta
- [ ] Napa FAQs + meta
- [ ] Santa Rosa P1 expanded trust content
- [ ] San Rafael P1 expanded trust content

### Phase 3 — Tier 2 (Target: Apr 21-25)

- [ ] Novato
- [ ] Sonoma
- [ ] Mill Valley
- [ ] Sebastopol
- [ ] Healdsburg
- [ ] Windsor
- [ ] Corte Madera

### Phase 4 — Tier 3 (Target: Apr 28 - May 2)

- [ ] Cotati
- [ ] Rohnert Park
- [ ] Forestville
- [ ] Guerneville
- [ ] Glen Ellen
- [ ] Bodega Bay
- [ ] Dillon Beach
- [ ] Sausalito
- [ ] Tiburon
- [ ] Larkspur
- [ ] San Anselmo

### Phase 5 — Service Pages (Target: May 5-9)

- [ ] Refrigerator Repair
- [ ] Oven Repair
- [ ] Washer/Dryer Repair
- [ ] Dryer Repair
- [ ] Dishwasher Repair
- [ ] Parts
- [ ] Virtual Service Calls

### Phase 6 — County Pages (Target: May 12-16)

- [ ] Sonoma County
- [ ] Marin County
- [ ] Napa County

### Phase 7 — Blog Content Cluster (Ongoing)

- [ ] Santa Rosa-specific blog post
- [ ] Marin County guide
- [ ] Napa County guide

---

## Related Docs

- [Santa Rosa SEO Audit](reports/santa-rosa-seo-audit-2026-04-13.md)
- [Blog Operations](blog-operations.md)
- [Q2-2026 Roadmap](Q2-2026-ROADMAP.md)
