# Off-Site and Discovery Expansion Plan

Kelly's Appliance Center (kellysappliancerepair.com) | (707) 664-9702 | 466 Primero Ct Suite H, Cotati CA 94931
Serving Sonoma, Marin, and Napa counties since 1975 | Diamond Certified | Factory Authorized

**Created:** July 2026, from a 6-agent off-site research audit (Bing, Apple, backlinks, directories, competitors, AEO).

## 1. Where We Stand

**Bing (Bing Places + Bing Webmaster Tools).** Not established. No owner-claimed Bing Places listing, and the site is not verified in Bing Webmaster Tools (layout.tsx wires Google verification only). Bing likely shows an uncontrolled auto-generated stub. This matters beyond Bing.com because Bing's index feeds Microsoft Copilot and DuckDuckGo. An IndexNow script already exists (scripts/indexnow-submit.mjs) but has no verified domain behind it. NAP is already clean across citations, so a Google Business Profile import into Bing Places is fast and low-risk.

**Apple (Apple Maps + Apple Business Connect).** Almost certainly present as an unclaimed, aggregated Apple Maps card (built from Yelp, Yellow Pages, BBB, Nextdoor, Facebook data), but no evidence it is claimed in Apple Business Connect. Claim status is only visible after signing in at businessconnect.apple.com. Appliance repair is a high-intent iPhone/Siri category, and an unmanaged card risks a missing "Suite H," a mis-dropped pin, stale hours, or a wrong category. Claiming is free and unlocks Maps, Siri, Spotlight, and Showcases.

**Backlinks and Citations.** Strong for a 50-year business. Diamond Certified (229 surveys plus company video) is the market's top trust asset and a moat few rivals hold. Address and phone are consistent everywhere. Three weaknesses: (1) business-name variants ("Kelly's Appliance Center" vs "...LLC" vs "Kelly's Appliance Repair") dilute entity consolidation; (2) duplicate listings on Angi (two profiles) and Yellow Pages (Petaluma) split reviews and equity; (3) almost no earned-media or editorial links (no Press Democrat, no North Bay Business Journal). BBB is present but not accredited.

**Directories.** Deep coverage on legacy review directories (Yelp 254 reviews, Diamond Certified, BBB, Angi, Nextdoor, Checkbook, Yellow Pages, two chambers). Gaps sit on the modern discovery layer that feeds AI and maps: Bing Places, Apple Business Connect, Houzz, and Foursquare/Mapquest. Also unverified: whether Kelly's actually appears in the manufacturer "Find a Servicer" locators (Bosch/Thermador, Whirlpool/KitchenAid/Maytag, Sub-Zero/Wolf, Viking) despite being factory authorized. Those locators send the highest-intent warranty and premium leads available.

**AEO (AI answer engines).** Well positioned. The site is near best-in-class for machine readability (LocalBusiness JSON-LD, AggregateRating, areaServed for all three counties, OfferCatalog, knowsAbout, sameAs, FAQPage, llms.txt, AI-friendly robots.txt). General "best appliance repair Sonoma County" queries already name Kelly's first. Two real gaps: no community/forum footprint (Reddit is a meaningful share of ChatGPT business citations and competitors surface there while Kelly's does not), and a possibly stale BBB sameAs URL. Google review count in schema (155) also lags Yelp (254) and Diamond Certified (229).

## 2. Prioritized Action Table

| # | Action | Channel | Impact | Effort | Owner |
|---|--------|---------|--------|--------|-------|
| 1 | Fix the BBB sameAs URL in layout.tsx (verify correct profile ID first) | AEO | High | Low | agency-can-do |
| 2 | Verify the site in Bing Webmaster Tools (import from Google Search Console, no code change) | Bing | High | Low | needs-owner-login |
| 3 | Claim/create Bing Places by importing the existing Google Business Profile | Bing | High | Low | needs-owner-login |
| 4 | Claim Apple Business Connect and lock correct NAP, hours, category, logo, description | Apple | High | Medium | needs-owner-login |
| 5 | Complete Apple verification (phone code to the shop or upload license/lease) | Apple | High | Low | needs-owner-login |
| 6 | Resolve duplicate Angi listings (claim the stronger as canonical, merge/remove the other) | Directories | High | Medium | needs-owner-login |
| 7 | Launch a post-job Google review push via OATAS/ServiceDesk to close the 254-Yelp vs 155-Google gap | AEO / Directories | High | Medium | either |
| 8 | Standardize business name to "Kelly's Appliance Center" across Yelp, BBB, Angi, Yellow Pages, Nextdoor, chambers, Checkbook | Citations | High | Medium | needs-owner-login |
| 9 | Verify presence in each manufacturer Find-a-Servicer locator; request listing where missing | Directories | High | Medium | needs-owner-login |
| 10 | Expand schema sameAs (Diamond Certified report, Angi, Checkbook, Rohnert Park Chamber) | AEO | Medium | Low | agency-can-do |
| 11 | Submit XML sitemap in Bing and confirm IndexNow fires on publish | Bing | Medium | Low | needs-owner-login |
| 12 | Independently verify primary Cotati GBP NAP and resolve the flagged Santa Rosa duplicate GBP | Citations | High | Low | needs-owner-login |
| 13 | Pitch a "50 years / Diamond Certified" angle to Press Democrat and North Bay Business Journal; add a community sponsorship page | Backlinks | High | High | either |
| 14 | Seed authentic, non-spam community answers in r/santarosa, r/petaluma, and local Nextdoor/Facebook threads | AEO | High | High | needs-owner-login |
| 15 | Pursue named inclusion in third-party "best appliance repair Sonoma County" listicles (Expertise.com, local blogs) | AEO / Backlinks | High | Medium | either |
| 16 | Add higher-DA chamber memberships (Santa Rosa Metro, Petaluma, Sonoma Valley) | Citations | Medium | Medium | needs-owner-login |
| 17 | Create a Houzz Pro profile positioned around Viking, Sub-Zero, Thermador, Bosch authorization | Directories | Medium | Medium | needs-owner-login |
| 18 | Add Foursquare and Mapquest listings (Foursquare syndicates NAP widely) | Directories | Medium | Low | needs-owner-login |
| 19 | Publish an Apple Business Connect Showcase after verification | Apple | Medium | Low | needs-owner-login |
| 20 | Pursue BBB Accreditation | Citations | Medium | Low | needs-owner-login |
| 21 | Create a Wikidata entity (established 1975, Cotati CA, Diamond Certified) as a knowledge-graph anchor | AEO | Medium | High | either |
| 22 | Store the business Apple ID and Microsoft account as shared company accounts | Apple / Bing | Medium | Low | needs-owner-login |
| 23 | Pull Bing keyword/impression data after ~30 days; run the free Bing Site Scan | Bing | Medium | Medium | either |
| 24 | Update docs/ops/platforms and INDEX.md as channels move to ACTIVE | Ops | Low | Low | agency-can-do |

Note: several items the research labeled "agency-can-do" actually require creating an account or signing in as the business (Foursquare, Mapquest, Houzz, Wikidata, BBB). Those are marked needs-owner-login here, since the agency cannot create accounts or authenticate on the owner's behalf.

## 3. What the Agency Can Do In-Code Now

- Fix the BBB sameAs URL once the correct profile ID is confirmed.
- Expand the schema sameAs array with verified URLs (Diamond Certified report first).
- Draft the Press Democrat / North Bay Business Journal "50 years and Diamond Certified" pitch, and a target list of local "best appliance repair" listicles to request inclusion in.
- Update the platform docs and INDEX as channels go live.

## 4. Needs Your Login or Claim (highest impact)

- **Apple Business Connect:** claim the listing and complete verification (phone code to the shop or a license/lease upload). Decide on a shared company Apple ID first, not a personal one.
- **Bing Places + Bing Webmaster Tools:** claim by importing the existing Google Business Profile (needs a Microsoft account). Webmaster Tools imports directly from Google Search Console.
- **Google review push:** approve the post-job SMS/email ask through OATAS/ServiceDesk to close the review-count gap.
- **Angi duplicates:** claim the stronger of the two profiles as canonical, request merge/removal of the other.
- **Manufacturer Find-a-Servicer locators:** check each brand portal (Bosch/Thermador, Whirlpool group, Sub-Zero/Wolf, Viking) and request public listing where missing. Highest-intent leads available.
- **Business-name standardization:** correct the "LLC" and "Repair" variants on Yelp, BBB, Angi, Yellow Pages, Checkbook.
- **Google Business Profile:** confirm the primary Cotati NAP and resolve the flagged Santa Rosa duplicate.
- **BBB Accreditation** and **higher-DA chamber memberships** (Santa Rosa Metro, Petaluma, Sonoma Valley).
