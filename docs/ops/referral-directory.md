# Kelly's Referral Directory (Master Source of Truth)

**Last updated:** 2026-06-20
**Owner:** Ideas Realized (Shane)

This is the single source of truth for every business Kelly's recommends. It feeds two places:

1. **The website** — active partners render on `/referrals` and the county pages via `src/data/referralPartners.ts`.
2. **OATAS** — so techs can look a referral up in the field (`directory_lookup`). The OATAS directory is currently almost empty (one entry: A-One Vacuums), so this is the list to populate it from.

**Two tiers below.** *Active partners* are vetted and already public. *Candidates* are verified-real businesses sourced from our networking groups and reputable local options, but they are **leads to approach, not partners yet** — do not publish or claim a relationship until we have one.

---

## Status legend

| Status | Meaning |
|---|---|
| `active` | Vetted partner. Live on the website. Should be in OATAS. |
| `candidate` | Verified-real business to vet/approach. Not on the website. Not a claimed partner. |
| `verify` | Conflicting or incomplete data found. Resolve before any outreach or publishing. |

**OATAS category mapping:** `service_partner` (appliance sales/install), `referral_plumber`, `referral_electrician`, `referral_hvac`, `referral_handyman`, `referral_other` (everything else). Phones/emails go in as keyed JSON (`main`, `sales`, etc.).

---

## TIER 1 — Active Partners (live on site + populate into OATAS)

| Company | Trade | OATAS category | Counties | Website | Phone | Notes |
|---|---|---|---|---|---|---|
| TeeVax Home Appliance & Kitchen Center | New appliance sales & install | service_partner | Sonoma, Napa | teevax.com | (707) 545-1195 | Santa Rosa since 1949, family-owned. The "decided to replace" referral. |
| Martin & Harris Appliances | New appliance sales & install | service_partner | Marin | martin-harris.com | (415) 454-2021 | San Rafael, Diamond Certified, 50+ yrs. The Marin "replace" referral. |
| J & C Landscaping Services | Landscaping & handyman | referral_other | Sonoma | jclandscapingservices.org | (see site) | Ideas Realized client. Maintenance, patios, sod, erosion control, light handyman. |
| Prado's Plumbing, Heating and Air | Plumbing & HVAC | referral_plumber | Sonoma | pradosplumbinghvac.com | (see site) | Plumbing + HVAC. Tag both plumbing and hvac in OATAS. |
| Dryer Vent Wizard | Dryer vent cleaning | referral_other | Sonoma, Marin, Napa | dryerventwizard.com | (see site) | Directly appliance-adjacent (clogged vent = dryer running hot). |
| California Sunlight Corporation | Solar & backup power | referral_other | Sonoma, Marin, Napa | california-sunlight.com | (see site) | Dr. Bing Gu. PSPS backup power. Also backlinked in the power-outage blog post. |
| A-One Vacuums | Vacuum repair | referral_other | Sonoma | (no site on file) | (707) 566-7325 | Already in OATAS. Kelly's referral for vacuums (we don't service vacuums in-house). |

> **K2 Appliance removed** as the installer (not actively running operations) — replaced by TeeVax and Martin & Harris on 2026-06-20.

---

## TIER 2 — Candidate Partners (verified-real; to vet & approach)

Sourced June 2026 from SoCo Connections (sococonnections.org), the Rohnert Park / Windsor / Santa Rosa Metro / Sebastopol / Napa / San Rafael chambers, the Marin Referral Network (MRN), and reputable Diamond Certified local options. Confidence reflects how thoroughly each was verified.

### ⭐ Warm leads — SoCo Connections (Kelly's own referral group)

**Highest priority.** These are fellow members of Kelly's SoCo Connections group, so there is already a relationship and a warm intro path. Websites/phones are on each member's profile at sococonnections.org/directory (grab when moving to active). Prado's is already an active partner; it came from this same group.

| Company | Member | Trade | Counties | Why it fits |
|---|---|---|---|---|
| SERVPRO of Petaluma / RP / Santa Rosa | Don Sheldon | Water/fire restoration & cleaning | Sonoma | **Strong fit** — appliance water damage (leaking washer/dishwasher) is exactly their work; reciprocal natural |
| Lindsey Samuelsen Realtor | Lindsey Samuelsen | Real estate | Sonoma, Marin | Buyers/sellers need pre-sale and post-close appliance repairs |
| Villa Family Construction | Declan Villa | General contractor | Sonoma | Remodels generate appliance install/repair referrals |
| Duality Painting | Zak Samuelsen | Painting | Sonoma | New trade for the network; warm group member |
| AMP Properties | Alex Pearson | Handyman & property care | Sonoma | Property-care overlap; reciprocal home-services referrals |
| Hanson Overhead Garage Door | Teresa Carver | Garage door service | Sonoma | Common home-service cross-referral |
| Skyline Solar / Your Friend in Solar | Rafike Abdo | Solar & energy | Sonoma | Solar alternative/addition alongside California Sunlight (active) |
| Golden Coast Insurance | Janine Oswalt | Insurance | Sonoma | Homeowners water-damage claims route to repair vendors (strategy doc Tier 3) |
| L'Atelier Interior Design | Alice Lateliere | Interior design | Sonoma (Petaluma) | Kitchen design adjacency — clients buy/install appliances |

### Electricians

| Company | Counties | Website | Phone | Diamond Certified | Confidence | Source / Note |
|---|---|---|---|---|---|---|
| Joe Lunardi Electric | Sonoma, Napa, Marin | lunardielectric.com | (707) 823-2129 | Yes | High | Santa Rosa Metro Chamber member, 50+ yrs |
| Reyff Electric | Sonoma, Napa, Marin, Solano | reyffelectricinc.com | (707) 585-2481 | Yes | High | Rohnert Park based, family-owned since 1980, 24/7. Covers both Sonoma + Napa. |
| B. Henry's Quality Electric | Sonoma, Marin | bhenrysqualityelectric.com | (707) 774-2112 | Yes | High | Petaluma, 45+ yrs, residential, 5.0 star |
| All Marin Electric | Marin | allmarinelectric.com | (415) 634-7878 | Unknown | Medium | Marin residential fallback |
| Integrity Electric (Marin) | Marin, Sonoma | integrityelectric.net **or** Facebook only | (415) 499-8844 **or** (415) 347-6975 | Yes | `verify` | ⚠ Two sources returned conflicting phone/site/cert-year. Could be two firms. Resolve before outreach. |

### General Contractors / Kitchen Remodelers

| Company | Counties | Website | Phone | Confidence | Source / Note |
|---|---|---|---|---|---|
| Thompson Construction | Sonoma, Marin, Napa | gothompco.com | (707) 799-9678 | High | Diamond Certified, 40+ yrs, kitchen/bath. Covers all three counties. |
| Home Stewards (Healthy Building Science) | Marin, Sonoma, Napa, SF | homestewards.com | (415) 360-8715 | High | **MRN member.** Licensed GC + home-maintenance subscription, already inspects appliances/HVAC. |
| Kitchens Inside Out | Marin, SF | kitchensinsideout.com | (415) 505-8708 | High | **MRN member.** Kitchen/bath remodels — clients buy + install appliances. |
| Creative Construction Company | Napa, Sonoma, Marin | napavalleycontractor.com | (707) 257-7982 | Medium | Napa-based remodeler. Cert unconfirmed. |

### House Cleaning

| Company | Counties | Website | Phone | Confidence | Source / Note |
|---|---|---|---|---|---|
| SonoMarin Cleaning Services | Sonoma, Marin | sonomarincleaning.com | (707) 769-9343 | High | Diamond Certified since 2005, incl. post-remodel cleanup |
| Green Planet Cleaning Services | Marin | greenplanetcleaningservices.com | (415) 895-0996 | High | 5.0-star eco Marin residential cleaner |
| Molly Maid of Napa | Napa | mollymaid.com/locations/california/napa | (707) 361-4434 | Medium | National brand, Napa franchise — reliable Napa fallback |

### Pool & Spa Service

| Company | Counties | Website | Phone | Confidence | Source / Note |
|---|---|---|---|---|---|
| Beyond Pool Care | Sonoma, Napa | beyondpoolcare.com | (707) 992-0153 | High | **Cotati-based (same town as Kelly's)**, 35+ yrs, serves both counties |
| Roger's Pool & Spa Service | Sonoma | rogerspoolnspa.com | (707) 823-8345 | High | Sebastopol Chamber member, 30+ yrs |
| Marin Pool Service | Marin, Sonoma | marinpoolservice.com | (415) 892-4000 | High | Novato, pool/spa/hot-tub service + repair |

### High-Value Relationship Partners (they refer TO us)

These flag broken appliances at the moment a homeowner needs us. Higher-effort to land, higher-value (see the partner strategy doc, Tier 1).

| Company | Type | Counties | Website | Phone | Confidence | Why they refer |
|---|---|---|---|---|---|---|
| Urbina Property Management | Property mgmt | Sonoma, Marin | urbinapm.com | (707) 843-3539 | High | **RP Chamber member** (cross-validated). Single-family rentals, recurring repair demand |
| Sonoma County Property Rentals | Property mgmt | Sonoma | (RP Chamber listing) | (707) 596-1020 | High | **RP Chamber member + named in strategy doc.** Rohnert Park based |
| Premier Property Services | Property mgmt | Sonoma, Napa, Marin | premierpsinc.com | (707) 544-2005 | High | Covers all 3 counties; tenants report broken appliances |
| Woodruff Property Management | Property mgmt | Sonoma | (RP Chamber listing) | (707) 299-9628 | Medium | RP Chamber member, Rohnert Park / Santa Rosa |
| Sonoma Marin Property Management | Property mgmt | Sonoma, Marin | (RP Chamber listing) | (707) 583-7775 | Medium | RP Chamber member, Rohnert Park |
| Crown Realty Property Management | Property mgmt | Napa | crownpm.com | (707) 255-0880 | Medium | Covers the Napa gap; rental turns drive referrals |
| North Bay Home Inspections | Home inspector | Sonoma, Marin, Napa | northbayhomeinspections.com | (707) 570-0408 | High | Reports flag aging appliances buyers must address |
| Buy Wise Inspections | Home inspector | Sonoma, Napa, Marin | buywiseinspect.com | (707) 326-6115 | High | Certified Master Inspector covering Cotati/Petaluma/Santa Rosa |
| Prosper Team (Coldwell Banker) | Real estate | Sonoma | winecountryhome.net | (707) 396-2687 | High | Sellers need pre-sale fixes, buyers need post-close repairs |
| Hillary Ryan Group (Sotheby's) | Real estate | Napa, Sonoma | hillaryryangroup.com | (707) 312-2105 | High | Napa/Sonoma luxury team; repair contingencies |
| Carolyn Moren (Golden Gate Sotheby's) | Real estate | Marin | marinhouseandhome.com | (415) 505-3013 | Medium | **MRN member** alongside Kelly's — warm network referral |

### Sonoma additions — Rohnert Park Chamber (Kelly's is a member)

Fellow RP Chamber members, so there is a shared-chamber intro path. Phones from the chamber listing; websites to grab when moving to active.

| Company | Trade | Counties | Phone | Note |
|---|---|---|---|---|
| SERVPRO of Petaluma / RP / Santa Rosa | Water/fire restoration | Sonoma | (707) 588-8226 | **Triple-confirmed: SoCo Connections + RP Chamber.** Best fit on the list (appliance water damage). Cotati. |
| Caballero's Plumbing | Plumbing | Sonoma | (707) 787-7597 | Listed in both Plumbing + Home Services = engaged member |
| Elevated Comfort | HVAC | Sonoma (Cotati) | (707) 284-1039 | **Member of BOTH RP + Novato chambers.** Cotati, same town as Kelly's; works Sonoma + Marin |
| Baier Heating & Air Conditioning | HVAC | Sonoma | (707) 890-5330 | RP Chamber, Rohnert Park |
| Gonvar Building Maintenance | Janitorial / commercial cleaning | Sonoma | (707) 328-9849 | RP Chamber |
| DM Quality Painting | Painting | Sonoma (RP) | (415) 532-4162 | RP Chamber (Home Services). Alternative to Duality Painting. |

*RP Chamber intel: the Appliance Repair category contains only Kelly's — no competitor on the chamber.*

### Marin bench — Novato Chamber (Kelly's is a member)

This fills the previously-thin Marin coverage. All are Novato Chamber members (warm via shared chamber), verified websites.

| Trade | Company | Phone | City | Website |
|---|---|---|---|---|
| Electrician | W. Bradley Electric | (415) 898-1400 | Novato | wbeinc.com |
| Plumbing + HVAC | Peter Levi Plumbing, Heating & Cooling | (415) 454-7771 | Novato | callpeterlevi.com |
| Plumbing | Classic Pipes Plumbing | (415) 827-8139 | Novato | classicpipesplumbing.com |
| HVAC | AAERO Heating & Sheetmetal | (415) 897-4187 | Novato | aaeroheating.com |
| Contractor / remodel | The Home Doctors | (415) 883-4085 | Novato | homedoctors.com |
| Contractor (kitchen/bath installs) | Travis Remodeling | (415) 883-8177 | Novato | travisremodeling.com |
| Pool & spa | Don Johnson's Pool & Spa | (415) 897-7615 | Novato | djohnsonpools.com |
| Property mgmt | PRANDI Property Management | (415) 482-9988 | San Rafael | prandiprop.com |
| Property mgmt | Nave Properties | (415) 454-4700 | Novato | (not listed) |
| Real estate | Kyle Frazier / Imagine Marin (Compass) | (415) 350-9440 | Novato | imaginemarin.com |
| Real estate | Marie Borders Inc. | (415) 601-1715 | Novato | marinsfinest.com |
| Insurance | Novato Insurance Agency | (415) 892-8794 | Novato | novatoinsuranceagency.com |

**Best Marin fits:** PRANDI Property Management (recurring rental-repair volume), Don Johnson's Pool & Spa (clean non-overlap), Peter Levi (plumbing + HVAC in one), The Home Doctors / Travis Remodeling (remodel install referrals). These supersede the cold "Integrity Electric" lead, which had conflicting data — use W. Bradley Electric instead.

### Napa city bench (sourced June 2026)

Scoped to the city of Napa per the job data (see Napa Expansion Plan). Cold-sourced via Diamond Certified + reviews (no shared chamber), so vet before publishing. **Publish-ready picks** (outbound — businesses we recommend to customers) are marked ⭐. The relationship partners below them refer TO us and are an outreach list, not website content.

| Trade | Company | Phone | Website | Trust signal | Confidence |
|---|---|---|---|---|---|
| ⭐ Plumbing + HVAC | Bell Products, Inc. | (707) 255-1811 | bellproducts.com | Diamond Certified, 75-yr Napa firm | High — **anchor (covers two trades)** |
| ⭐ Plumbing | O.G. Plumbing | (707) 694-5155 | og-plumbing.com | Diamond Certified, Napa | High |
| HVAC | All Weather Heating & Air | unverified | (Diamond Certified report) | Diamond Certified, county-serving | Medium (backup) |
| ⭐ Electrician | Aleco Electric | (707) 418-0712 | alecoelectric.com | 275+ 5-star Google reviews | High (Vacaville HQ, serves Napa) |
| Electrician | Napa Electric | (707) 252-6611 | napaelectric.com | In-city Napa | Medium (commercial-leaning) |
| ⭐ House cleaning | Valencia Pro Cleaning | (707) 812-1073 | vprocleaningagency.com | "Best of Napa County" 2023/24 | High |
| House cleaning | BerryClean | (415) 633-6225 | berryclean.com | 4.8 Yelp, 600+ reviews | High |
| Landscaping | Gutierrez Modern Landscaping | (707) 285-9856 (verify) | landscaperca-napa.com | Napa residential | Medium — phone differs between site/Yelp; confirm first |

**Relationship partners (outreach list — they refer TO Kelly's):**

| Type | Company | Phone | Website | Confidence |
|---|---|---|---|---|
| Property mgmt | Crown Realty & Property Mgmt | (707) 255-0880 | crownpm.com | High (verified: 1601 Lincoln Ave, Napa) |
| Property mgmt | Hedgerow Property Management | (707) 254-1837 | hedgerowproperty.com | High |
| Property mgmt | Wyman Property Management | (707) 224-0400 | wymanpm.com | High |
| Real estate | Coldwell Banker Brokers of the Valley | (707) 258-5200 | cbnapavalley.com | High (largest Napa brokerage) |
| Real estate | Connie & Jamie (Sotheby's) | (707) 480-5557 | connieandjamie.com | High |
| Home inspector | Inspect Your Nest | (707) 690-6378 | inspectyournest.com | High |
| Home inspector | Abella Home Inspection | (707) 326-5886 | abellahomeinspection.com | Medium |

---

## Sourcing notes & gaps

- **SoCo Connections fully mined** (28 members). All relevant trades captured in the warm-leads table above. Most non-appliance trades are warm leads here. The rest of the roster (finance, mortgage, hospice, photography, legal, wealth/IV wellness) is not appliance-relevant.
- **Rohnert Park Chamber fully mined** (all home-service categories: electrician, plumbing, HVAC, construction/handyman, landscaping, cleaning/disaster-recovery, home-services, window-treatment, real-estate/PM). No pool, garage-door, or home-inspection category exists there. Biggest contributions: property-management depth + restoration (SERVPRO) + plumbing/HVAC bench. Cold electrician members (Roddan, CM Taylor, B.A. Electric) are the secondary bench behind the Diamond Certified picks (Lunardi, Reyff).
- **Novato Chamber fully mined** (Marin — ChamberMate platform, 378 members). This is the main fix for the thin Marin bench: real Novato/Marin electrician, plumbing, HVAC, contractor, pool, property-management, real-estate, and insurance members are now in the Marin bench table above. Full per-category lists available on request.
- **MRN ("one person per profession") is fully mined.** Kelly's (Mark Kelly) is already the appliance member. The only relevant MRN members are Home Stewards (GC), Kitchens Inside Out (kitchen), and Carolyn Moren (real estate) — all listed. MRN has no electrician, cleaner, or pool member, so those use reputable local fallbacks.
- **Napa coverage is thinner.** Prefer the dual-county businesses (Reyff, Thompson, Beyond Pool Care, Creative Construction) that already serve both Sonoma and Napa.
- **Resolved:** the conflicting "Integrity Electric" lead is superseded by W. Bradley Electric (Novato Chamber member, verified) for Marin. Still worth a quick check before outreach: Creative Construction (cert), Crown Realty (Napa PM substitute after a blocked listing).
- **Napa is still the thinnest county** — no Napa chamber audit yet. The Napa Chamber would be the next source to mine (Kelly's membership there unconfirmed). Dual-county businesses (Reyff, Thompson, Beyond Pool Care, TeeVax) currently carry Napa.
- **Still open / no candidate yet:** appliance retailers beyond TeeVax/Martin & Harris, moving companies, insurance agents, home warranty networks, HOA managers (see partner strategy doc for the full Tier list).

## Napa Expansion Plan

**Right-size to the data.** Napa is **4.9% of Kelly's jobs** (134 of 2,725 in the last 12 months, per OATAS), and **100% of those jobs are in the city of Napa** (zip 94558/94559). There are zero jobs up-valley (St. Helena, Calistoga, Yountville) or in American Canyon. So Napa is a real but small, single-city market — the plan should match that, not a full chamber sweep like Sonoma/Marin got.

**What Napa already has** (mostly via dual-county partners): TeeVax (appliance sales, active), Dryer Vent Wizard (active), California Sunlight (active), plus candidates Reyff Electric, Thompson Construction, Beyond Pool Care, Creative Construction (Napa remodeler), Crown Realty (Napa PM), Molly Maid (Napa cleaning). The live Napa county page currently shows only the 3 active ones.

**The gap:** no *Napa-city-local, warm* partners. The dual-county firms cover it on paper, but there is nothing rooted in Napa itself.

**Plan (proportionate, ~6-8 partners, city-of-Napa focused):**

1. **Do NOT join/audit a full chamber yet.** Kelly's is not a confirmed Napa Chamber member, and at 5% of business the dues + audit effort are hard to justify. (Revisit only if Napa grows or a second-location push happens there — unrelated to the active Santa Rosa GBP effort.)
2. **Source directly from trust signals instead** — fast, no membership needed:
   - Diamond Certified Napa listings (same cert Kelly's carries — instant credibility filter)
   - Top-reviewed Napa-city businesses (Google / Yelp 4.5+)
   - The Napa Chamber's *public* directory (browsable without joining) as a cross-check only
3. **Target trades (1-2 each, Napa city):** plumber, HVAC, electrician (or confirm Reyff serves Napa city), house cleaning, landscaper. Plus the high-value relationship partners: confirm **Crown Realty** (PM), add 1 Napa real-estate team, 1 Napa home inspector.
4. **Quick win:** even 3-4 Napa-city trade partners doubles the Napa county page (3 → 6-7) and makes it credible. Add them to `referralPartners.ts` with `counties: ['Napa']`.
5. **Skip up-valley** (St. Helena/Calistoga/Yountville) until there are actual jobs there.

**Effort estimate:** one focused sourcing pass (Diamond Certified + reviews for ~5 trades) plus relationship-partner confirmation. Small, because the market is small.

**Status: sourcing pass DONE (June 2026).** See the "Napa city bench" above. Publish-ready outbound picks (⭐): Bell Products (plumbing+HVAC anchor), O.G. Plumbing, Aleco Electric, Valencia Pro Cleaning. Wiring 3-4 of these into `referralPartners.ts` with `counties: ['Napa']` takes the Napa county page from 3 → 6-7. Relationship partners (Crown, Hedgerow, Wyman, etc.) are an outreach list, not website content. Landscaping pick needs a phone double-check first.

## How to add a partner

1. Vet the candidate (confirm they want to be a referral partner; ideally agree a reciprocal link).
2. Move them up to Tier 1 here with `active` status.
3. Add to `src/data/referralPartners.ts` (auto-publishes to the website).
4. Add to OATAS via `directory_add_entry` so techs can look them up.

Related: the full strategy, incentives, and 90-day rollout live in [`docs/research/referral-partners-and-seo-tools-strategy.md`](../research/referral-partners-and-seo-tools-strategy.md).
