/**
 * Centralized content for all 21 service-location city pages.
 *
 * Each entry supplies the unique, per-city text that gets merged into
 * a shared page template.  Keep entries in the same order as
 * locations.ts (Sonoma -> Marin -> Napa).
 */

export interface CityContent {
  slug: string
  name: string
  metaTitle: string
  metaDescription: string
  heroSubtitle: string

  /** "Why [City] Residents Trust Kelly's" section */
  trustHeading: string
  trustContent: string[]

  /** Existing local highlights paragraph */
  localHighlights: string

  /** Top 3 Eats */
  topEats: string[]

  /** Community Links (chamber of commerce, etc.) */
  communityLink?: { label: string; href: string }

  /** "Common Appliance Issues in [City]" section */
  issuesHeading: string
  issuesContent: string[]

  /** Custom text for the "Local Experts" card in WhyChooseUs */
  localExpertsText: string

  /** Neighborhoods served */
  neighborhoods: string[]

  /** Optional custom MidPageCTA heading */
  midCtaHeading?: string

  /** Hero section van image path (relative to /public) */
  heroImage: string

  /** City-specific alt text for the hero van image */
  heroImageAlt: string
}

// ---------------------------------------------------------------------------
// Sonoma County
// ---------------------------------------------------------------------------

const santaRosa: CityContent = {
  slug: 'santa-rosa',
  name: 'Santa Rosa',
  metaTitle: 'Appliance Repair Santa Rosa - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Factory-authorized appliance repair in Santa Rosa, CA. Serving Fountaingrove, Rincon Valley, Bennett Valley, and Roseland since 1975. Same-day scheduling, 90-day guarantee. Call (707) 664-9702.',
  heroSubtitle:
    'Factory-authorized appliance repair for Santa Rosa homes. Serving neighborhoods from Fountaingrove to Roseland with a 90-day money-back guarantee.',

  trustHeading: 'Why Santa Rosa Residents Trust Kelly\u2019s',
  trustContent: [
    'Santa Rosa is the largest city in Sonoma County, and we have been its go-to appliance repair team since 1975. Our techs drive up Highway 101 from Cotati every day, so response times are among our fastest in the service area.',
    'We work on every major brand you will find in Santa Rosa kitchens and laundry rooms, from entry-level Whirlpool and GE sets in Roseland bungalows to premium Sub-Zero and Viking installs in Fountaingrove. Every repair uses genuine OEM parts and comes with our 90-day money-back guarantee.',
    'Santa Rosa homeowners deal with hard municipal water that can shorten dishwasher and washing machine life. We see it constantly and know the fixes that last.',
  ],

  localHighlights:
    'From Courthouse Square to the Luther Burbank Center and the weekly farmers markets, Santa Rosa blends a vibrant downtown with easy access to wine country. Whether you\u2019re in Fountaingrove or Roseland, we keep your kitchen and laundry essentials running so you can enjoy more of Sonoma County.',
  topEats: ['The Spinster Sisters', 'Bird & The Bottle', 'Stark\u2019s Steak & Seafood'],
  communityLink: { label: 'Santa Rosa Metro Chamber', href: 'https://www.santarosametrochamber.com/' },

  issuesHeading: 'Common Appliance Issues in Santa Rosa',
  issuesContent: [
    'Santa Rosa\u2019s municipal water carries enough minerals to build up inside dishwasher spray arms and washing machine valves over time. Regular cleaning and timely part replacement keep those appliances running well past their expected lifespan.',
    'Power surges from summer storms can trip control boards on modern refrigerators and ovens. If your appliance suddenly stops responding after a flicker, a board-level diagnosis is usually the first step.',
  ],

  localExpertsText: 'Our Cotati shop is about 15 minutes south on 101. We service Santa Rosa homes every single day.',
  neighborhoods: ['Fountaingrove', 'Rincon Valley', 'Bennett Valley', 'Roseland', 'Oakmont', 'South Park'],
  midCtaHeading: 'Ready for Fast Appliance Repair in Santa Rosa?',
  heroImage: '/images/SonomaVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van overlooking Santa Rosa and Sonoma County',
}

const petaluma: CityContent = {
  slug: 'petaluma',
  name: 'Petaluma',
  metaTitle: 'Appliance Repair Petaluma - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Factory-authorized appliance repair in Petaluma, CA. Serving East Side, West Side, and downtown homes since 1975. Same-day scheduling, 90-day guarantee. Call (707) 664-9702.',
  heroSubtitle:
    'Trusted appliance repair for Petaluma homes since 1975. Factory-authorized service with a 90-day money-back guarantee.',

  trustHeading: 'Why Petaluma Residents Trust Kelly\u2019s',
  trustContent: [
    'Petaluma is just a short drive south from our Cotati shop, which means we are in town fast. We have been servicing Petaluma homes for decades, from the Victorian beauties downtown to the newer builds on the east side.',
    'Our technicians are factory-authorized for every major brand, and they carry common parts on the truck so many repairs finish in one visit. Whether your fridge quit cooling or your dryer is tumbling without heat, we diagnose accurately and fix it right.',
    'Petaluma\u2019s older homes sometimes have quirks like tight laundry closets or non-standard electrical. We\u2019ve seen it all and bring the right tools and know-how.',
  ],

  localHighlights:
    'Historic Downtown Petaluma, riverfront walks, and classic Victorian neighborhoods define the city\u2019s charm. We support homes from the East Side to West Side with fast, factory-authorized appliance repair so dinner at home or a day at the river never misses a beat.',
  topEats: ['Risibisi', 'Cucina Paradiso', 'The Shuckery'],
  communityLink: { label: 'Petaluma Chamber of Commerce', href: 'https://www.petalumachamber.com/' },

  issuesHeading: 'Common Appliance Issues in Petaluma',
  issuesContent: [
    'Many Petaluma homes sit in low-lying areas near the river where humidity stays high year-round. That extra moisture can accelerate rust on dryer drums and corrode refrigerator condenser coils faster than in drier areas.',
    'Older homes on the West Side often have 1950s-era electrical panels. If your appliance trips a breaker regularly, it may be a wiring capacity issue rather than a faulty appliance. We help identify the real problem so you don\u2019t replace a good machine.',
  ],

  localExpertsText: 'Just 10 minutes south from our Cotati shop. We\u2019re in Petaluma daily.',
  neighborhoods: ['East Side', 'West Side', 'Downtown', 'Casa Grande', 'Lakeville'],
  midCtaHeading: 'Need Appliance Repair in Petaluma Today?',
  heroImage: '/images/SonomaVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van overlooking Petaluma and Sonoma County',
}

const rohnertPark: CityContent = {
  slug: 'rohnert-park',
  name: 'Rohnert Park',
  metaTitle: 'Appliance Repair Rohnert Park - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Factory-authorized appliance repair in Rohnert Park, CA. Serving SSU-area homes and neighborhoods since 1975. Same-day scheduling, 90-day guarantee. Call (707) 664-9702.',
  heroSubtitle:
    'Professional appliance repair in Rohnert Park. Factory-authorized service, genuine parts, and a 90-day money-back guarantee.',

  trustHeading: 'Why Rohnert Park Residents Trust Kelly\u2019s',
  trustContent: [
    'Rohnert Park is right next door to our Cotati headquarters, which means our response times here are the fastest in our entire service area. Many calls get same-day or next-morning appointments.',
    'We know the layout of Rohnert Park homes well. The city\u2019s planned community design means we have worked on just about every floor plan in the area, from the original ranch-style homes to the newer builds near SSU.',
    'Our technicians carry the most common parts on the truck, so most Rohnert Park repairs wrap up in a single visit. That means less waiting and less disruption for your family.',
  ],

  localHighlights:
    'Home to SSU and family-friendly neighborhoods, Rohnert Park offers parks, paths, and convenience. We keep your home\u2019s appliances dependable for busy school weeks and easy weekends.',
  topEats: ['Hana Japanese', 'Bear Republic Lakeside', 'Mi Ranchito'],
  communityLink: { label: 'Rohnert Park Chamber of Commerce', href: 'https://www.rohnertparkchamber.org/' },

  issuesHeading: 'Common Appliance Issues in Rohnert Park',
  issuesContent: [
    'Rohnert Park\u2019s original 1960s-70s tract homes often have compact laundry alcoves that trap heat and lint around dryers. Poor ventilation means dryers work harder and parts wear out faster. A regular vent cleaning goes a long way.',
    'Hard water from the local supply builds up calcium deposits in dishwasher spray arms and washing machine valves. If your dishes come out spotted or your washer fills slowly, mineral buildup is often the cause.',
  ],

  localExpertsText: 'We\u2019re literally next door. Our Cotati shop is 5 minutes away.',
  neighborhoods: ['SSU area', 'Mountain Shadows', 'Southwest', 'Northeast', 'Roberts Lake'],
  midCtaHeading: 'Need a Fast Fix in Rohnert Park?',
  heroImage: '/images/SonomaVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van overlooking Rohnert Park and Sonoma County',
}

const cotati: CityContent = {
  slug: 'cotati',
  name: 'Cotati',
  metaTitle: 'Appliance Repair Cotati - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Appliance repair in Cotati, CA, right from our home base. Factory-authorized, Diamond Certified service since 1975. Same-day scheduling, 90-day guarantee. Call (707) 664-9702.',
  heroSubtitle:
    'Appliance repair from your neighborhood shop. Our headquarters is right here in Cotati, so we are always close by.',

  trustHeading: 'Why Cotati Residents Trust Kelly\u2019s',
  trustContent: [
    'This is our home town. Kelly\u2019s Appliance Center is located at 466 Primero Ct, Suite H, right here in Cotati. When your appliance breaks down, we are minutes away.',
    'Being local means we know Cotati homes inside and out. From the bungalows near the plaza to the residences along Old Redwood Highway, we\u2019ve repaired appliances in just about every Cotati neighborhood.',
    'We are Diamond Certified, meaning our quality has been verified by independent research. That rating is backed by our 90-day money-back guarantee on every repair.',
  ],

  localHighlights:
    'Cotati\u2019s hexagon plaza and music-friendly vibe make it a unique North Bay stop. We keep home appliances performing, perfect for easy weeknight meals between concerts and campus events.',
  topEats: ['Tony\u2019s of North Beach (nearby)', 'Redwood Cafe', 'Down To Earth Cafe'],
  communityLink: { label: 'Cotati Chamber of Commerce', href: 'https://www.cotati.org/' },

  issuesHeading: 'Common Appliance Issues in Cotati',
  issuesContent: [
    'Cotati shares the same municipal water system as Rohnert Park, so hard-water mineral buildup is a frequent culprit behind slow-filling washers and spotted glassware from the dishwasher.',
    'Because many Cotati homes were built in the 1960s and 1970s, tight utility closets are common. Dryers crammed into small spaces overheat faster and need vent cleaning more often to stay safe and efficient.',
  ],

  localExpertsText: 'This is our home base. We are located right here at 466 Primero Ct, Suite H.',
  neighborhoods: ['Downtown Cotati', 'Old Redwood Highway', 'East Cotati Avenue'],
  midCtaHeading: 'Need Your Neighbor\u2019s Help With an Appliance?',
  heroImage: '/images/SonomaVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van overlooking Cotati and Sonoma County',
}

const sebastopol: CityContent = {
  slug: 'sebastopol',
  name: 'Sebastopol',
  metaTitle: 'Appliance Repair Sebastopol - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Factory-authorized appliance repair in Sebastopol, CA. Serving Graton, The Barlow area, and west county homes since 1975. Same-day scheduling, 90-day guarantee. Call (707) 664-9702.',
  heroSubtitle:
    'Factory-authorized appliance repair for Sebastopol and west Sonoma County. 90-day guarantee on every repair.',

  trustHeading: 'Why Sebastopol Residents Trust Kelly\u2019s',
  trustContent: [
    'Sebastopol\u2019s mix of farmsteads, artist studios, and family homes means we see a wide range of appliances, from vintage pieces to brand-new smart models. Our factory-authorized technicians handle them all.',
    'We make the drive from Cotati to Sebastopol regularly, usually about 20 minutes on the Gravenstein Highway. Same-day scheduling is often available, and most repairs finish in a single visit.',
    'West county properties sometimes run on well water, which carries more minerals than city supplies. That extra mineral content takes a toll on dishwashers and washing machines over time. We see the pattern constantly and know how to fix it.',
  ],

  localHighlights:
    'Don\u2019t miss The Barlow, a walkable outdoor market district with breweries, eateries, and artisan shops that showcases Sebastopol\u2019s farm-to-table culture.',
  topEats: ['Ramen Gaijin', 'K&L Bistro', 'Handline'],

  issuesHeading: 'Common Appliance Issues in Sebastopol',
  issuesContent: [
    'Well water is common in rural Sebastopol and nearby Graton. Iron and calcium deposits clog dishwasher jets and reduce washing machine flow over time. Periodic descaling and timely part replacement keep things running smoothly.',
    'Power fluctuations in rural west county areas can damage sensitive control boards on newer refrigerators and ovens. A surge protector helps, but when the damage is done, we carry the OEM boards to get you back up fast.',
  ],

  localExpertsText: 'About 20 minutes from our Cotati shop via the Gravenstein Highway.',
  neighborhoods: ['Downtown Sebastopol', 'Graton', 'The Barlow area', 'Gold Ridge'],
  midCtaHeading: 'Ready for Appliance Repair in West County?',
  heroImage: '/images/SonomaVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van overlooking Sebastopol and Sonoma County',
}

const sonoma: CityContent = {
  slug: 'sonoma',
  name: 'Sonoma',
  metaTitle: 'Appliance Repair Sonoma - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Factory-authorized appliance repair in Sonoma, CA. Serving the Plaza, Springs, and vineyard homes since 1975. Same-day scheduling, 90-day guarantee. Call (707) 664-9702.',
  heroSubtitle:
    'Professional appliance repair for Sonoma homes and vacation properties. Factory-authorized with a 90-day money-back guarantee.',

  trustHeading: 'Why Sonoma Residents Trust Kelly\u2019s',
  trustContent: [
    'Sonoma\u2019s wine-country lifestyle often means high-end kitchens with premium appliances. Our technicians are factory-authorized for brands like Viking, Sub-Zero, Wolf, and Thermador, so your investment gets the expert care it deserves.',
    'We have been serving Sonoma Valley homes since 1975. Whether you live near the historic Plaza or out in the vineyards, we bring the same fast, dependable service.',
    'Many Sonoma properties double as vacation rentals or second homes, and a broken appliance can mean lost revenue or ruined plans. We prioritize quick turnarounds to keep your property running.',
  ],

  localHighlights:
    'Centered around the historic Sonoma Plaza and mission, Sonoma offers a walkable destination of tasting rooms, cafes, and parks. From Springs to the Vineyards, we keep your home\u2019s appliances in peak condition so entertaining stays effortless.',
  topEats: ['The Girl & The Fig', 'LaSalette', 'OSO Sonoma'],
  communityLink: { label: 'Sonoma Valley Chamber of Commerce', href: 'https://www.sonomachamber.org/' },

  issuesHeading: 'Common Appliance Issues in Sonoma',
  issuesContent: [
    'Well water is common in the Sonoma Valley, and it brings mineral content that builds up inside dishwashers, washing machines, and ice makers. Calcium deposits reduce water flow and cleaning performance over time.',
    'Power outages during fire season and summer storms can reset modern appliance control boards. If your refrigerator or oven stops responding after an outage, a board reset or replacement usually does the trick.',
  ],

  localExpertsText: 'We drive through the Sonoma Valley regularly. About 25 minutes from our Cotati shop.',
  neighborhoods: ['Sonoma Plaza', 'Springs', 'Vineyard area', 'Boyes Hot Springs'],
  midCtaHeading: 'Need Appliance Repair in Sonoma Valley?',
  heroImage: '/images/SonomaVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van overlooking Sonoma and the surrounding wine country',
}

const windsor: CityContent = {
  slug: 'windsor',
  name: 'Windsor',
  metaTitle: 'Appliance Repair Windsor - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Factory-authorized appliance repair in Windsor, CA. Serving Town Green area and surrounding neighborhoods since 1975. Same-day scheduling, 90-day guarantee. Call (707) 664-9702.',
  heroSubtitle:
    'Factory-authorized appliance repair for Windsor homes. 90-day money-back guarantee on every repair.',

  trustHeading: 'Why Windsor Residents Trust Kelly\u2019s',
  trustContent: [
    'Windsor is a growing, family-oriented community with homes ranging from the established neighborhoods near Town Green to newer developments along the SMART corridor. We service them all.',
    'Our drive from Cotati takes about 20 minutes up 101, and we are in Windsor multiple times a week. Same-day scheduling is often available for morning calls.',
    'Many Windsor homes were built in the last two decades with standard builder-grade appliances. When those units hit the 8-10 year mark, they start needing repairs. We keep them going strong with genuine OEM parts.',
  ],

  localHighlights:
    'Town Green concerts, family parks, and nearby river access define Windsor living. We provide fast, authorized repairs so weeknight dinners and weekend plans stay on time.',
  topEats: ['Kin', 'Khom Loi (nearby SR)', 'Himalayan Restaurant'],
  communityLink: { label: 'Windsor Chamber of Commerce', href: 'https://www.windsorchamber.com/' },

  issuesHeading: 'Common Appliance Issues in Windsor',
  issuesContent: [
    'Windsor\u2019s newer subdivisions often have compact laundry setups with stacked washer-dryer units. Limited airflow around these stacked units means dryer lint traps and vents need more frequent cleaning to prevent overheating.',
    'Builder-grade dishwashers installed in homes from the 2000s and 2010s tend to develop pump and motor issues after about a decade. Replacement parts are readily available, and the repair is usually more cost-effective than a full replacement.',
  ],

  localExpertsText: 'About 20 minutes north of our Cotati shop on 101.',
  neighborhoods: ['Town Green', 'Windsor Creek', 'Shiloh', 'Star Road area'],
  midCtaHeading: 'Need an Appliance Fix in Windsor?',
  heroImage: '/images/SonomaVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van overlooking Windsor and Sonoma County',
}

const healdsburg: CityContent = {
  slug: 'healdsburg',
  name: 'Healdsburg',
  metaTitle: 'Appliance Repair Healdsburg - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Factory-authorized appliance repair in Healdsburg, CA. Serving Plaza area, Dry Creek, and Alexander Valley homes since 1975. Same-day scheduling, 90-day guarantee. Call (707) 664-9702.',
  heroSubtitle:
    'Professional appliance repair for Healdsburg homes and estates. Factory-authorized service with a 90-day guarantee.',

  trustHeading: 'Why Healdsburg Residents Trust Kelly\u2019s',
  trustContent: [
    'Healdsburg kitchens tend to be showpieces, especially in the wine-country homes around Dry Creek and Alexander Valley. Our technicians are factory-authorized for high-end brands like Sub-Zero, Wolf, Thermador, and Viking.',
    'We have been making the drive to Healdsburg since 1975. It is about 30 minutes from our Cotati shop, and we schedule Healdsburg appointments multiple days a week.',
    'Many Healdsburg properties host guests and events regularly. When a refrigerator or oven goes down before a dinner party, we understand the urgency and work to get you back on track fast.',
  ],

  localHighlights:
    'Healdsburg\u2019s plaza anchors a world-class food and wine scene with small-town warmth. Whether you\u2019re prepping for a dinner party or hosting weekend guests, our authorized repairs help keep the heart of your home running smoothly.',
  topEats: ['Valette', 'Barndiva', 'Chalkboard'],
  communityLink: { label: 'Healdsburg Chamber of Commerce', href: 'https://www.healdsburg.com/' },

  issuesHeading: 'Common Appliance Issues in Healdsburg',
  issuesContent: [
    'Rural properties around Healdsburg often run on well water with high mineral content. That means faster scale buildup inside dishwashers, washing machines, and ice makers. Periodic maintenance goes a long way toward preventing costly repairs.',
    'Healdsburg\u2019s older homes near the Plaza sometimes have undersized electrical panels. Modern high-draw appliances like induction ranges can trip breakers on these older circuits. We can help identify if the issue is the appliance or the home\u2019s electrical.',
  ],

  localExpertsText: 'About 30 minutes north from our Cotati shop. We schedule Healdsburg visits multiple days a week.',
  neighborhoods: ['Plaza area', 'Dry Creek', 'Alexander Valley', 'Fitch Mountain'],
  midCtaHeading: 'Need Appliance Repair in Wine Country?',
  heroImage: '/images/SonomaVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van overlooking Healdsburg and Sonoma County',
}

const forestville: CityContent = {
  slug: 'forestville',
  name: 'Forestville',
  metaTitle: 'Appliance Repair Forestville - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Factory-authorized appliance repair in Forestville, CA. Serving Russian River area homes since 1975. Same-day scheduling, 90-day guarantee. Call (707) 664-9702.',
  heroSubtitle:
    'Professional appliance repair for Forestville and the Russian River corridor. Factory-authorized with a 90-day guarantee.',

  trustHeading: 'Why Forestville Residents Trust Kelly\u2019s',
  trustContent: [
    'Forestville sits right along the Russian River, and that proximity to water brings persistent humidity into homes. Refrigerator condenser coils and dryer components can corrode faster here than in drier parts of the county.',
    'We make the trip to Forestville regularly, about 25 minutes from Cotati through Sebastopol. Our techs carry common parts on the truck, so most repairs wrap up in one visit.',
    'Many Forestville properties serve as vacation rentals during the summer season. A down appliance means lost bookings. We prioritize getting rental properties back online quickly.',
  ],

  localHighlights:
    'Forestville sits along the Russian River with redwoods, wineries, and swim spots close by. We keep fridges cold and laundry spinning so weekends on the river stay effortless.',
  topEats: ['Backyard Forestville', 'Canneti Roadhouse Italiana', 'El Molino Central (nearby)'],
  communityLink: { label: 'Forestville Chamber of Commerce', href: 'https://www.forestvillechamber.org/' },

  issuesHeading: 'Common Appliance Issues in Forestville',
  issuesContent: [
    'Humidity from the Russian River corridor speeds up corrosion on metal appliance components, particularly dryer drums and refrigerator condenser coils. Keeping these areas clean and dry extends their life significantly.',
    'Power fluctuations are more common in the rural river corridor. Surge protectors help, but when a control board on a modern fridge or oven takes a hit, we carry the OEM replacements to get you running again.',
  ],

  localExpertsText: 'About 25 minutes from our Cotati shop through Sebastopol.',
  neighborhoods: ['Downtown Forestville', 'River Road corridor', 'Mirabel Road area'],
  midCtaHeading: 'Need Appliance Repair Along the River?',
  heroImage: '/images/SonomaVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van overlooking Forestville and the Russian River area',
}

const guerneville: CityContent = {
  slug: 'guerneville',
  name: 'Guerneville',
  metaTitle: 'Appliance Repair Guerneville - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Factory-authorized appliance repair in Guerneville, CA. Serving Russian River vacation rentals and year-round homes since 1975. 90-day guarantee. Call (707) 664-9702.',
  heroSubtitle:
    'Factory-authorized appliance repair for Guerneville homes and vacation rentals. 90-day money-back guarantee.',

  trustHeading: 'Why Guerneville Residents Trust Kelly\u2019s',
  trustContent: [
    'Guerneville is a vacation-rental hotspot, and we know that a broken fridge or washer during peak season can mean lost revenue. Our team prioritizes fast turnarounds for rental properties.',
    'Year-round Guerneville residents deal with high humidity from the river and redwood canopy. That moisture gets into everything, from dryer vents to refrigerator seals. We know what to look for.',
    'We have been making the drive to Guerneville since 1975. It is about 35 minutes from Cotati, and we schedule the area regularly so availability stays consistent.',
  ],

  localHighlights:
    'Redwood shade, river beaches, and a quirky Main Street define Guerneville. We help keep vacation rentals and year-round homes running smoothly, season after season.',
  topEats: ['Boon Eat + Drink', 'Main Street Bistro', 'El Barrio (cocktails + bites)'],
  communityLink: { label: 'Russian River Chamber of Commerce', href: 'https://russianriver.com/' },

  issuesHeading: 'Common Appliance Issues in Guerneville',
  issuesContent: [
    'The combination of river-level humidity and dense redwood shade creates a damp environment that accelerates mold growth on refrigerator gaskets and corrosion on exposed metal parts. Regular seal cleaning and gasket replacement keep things fresh.',
    'Vacation rental appliances take a beating from high turnover. Washers and dryers in rental properties often see 3x the normal usage. More frequent maintenance keeps them reliable through the busy summer season.',
  ],

  localExpertsText: 'About 35 minutes from our Cotati shop. We schedule the Russian River area regularly.',
  neighborhoods: ['Downtown Guerneville', 'Rio Nido', 'Monte Rio area', 'Vacation Beach'],
  midCtaHeading: 'Need Appliance Repair on the Russian River?',
  heroImage: '/images/SonomaVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van overlooking Guerneville and the Russian River',
}

const glenEllen: CityContent = {
  slug: 'glen-ellen',
  name: 'Glen Ellen',
  metaTitle: 'Appliance Repair Glen Ellen - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Factory-authorized appliance repair in Glen Ellen, CA. Serving Sonoma Valley homes and estates since 1975. Same-day scheduling, 90-day guarantee. Call (707) 664-9702.',
  heroSubtitle:
    'Professional appliance repair for Glen Ellen homes and valley estates. Factory-authorized with a 90-day guarantee.',

  trustHeading: 'Why Glen Ellen Residents Trust Kelly\u2019s',
  trustContent: [
    'Glen Ellen is tucked into the heart of Sonoma Valley, and many properties here feature premium kitchens that match the wine-country setting. Our technicians carry factory authorizations for Viking, Sub-Zero, Thermador, and other luxury brands.',
    'We drive through the Sonoma Valley to reach Glen Ellen, about 30 minutes from our Cotati shop. Appointments are available multiple days a week.',
    'The fire rebuilds after 2017 brought a lot of new construction to the Glen Ellen area. Newer homes mean newer appliances, and we stay current on the latest models and smart-appliance diagnostics.',
  ],

  localHighlights:
    'Between Jack London State Historic Park and quiet valley vineyards, Glen Ellen is laid-back wine country. We deliver dependable repairs that fit your tasting-room schedule.',
  topEats: ['Glen Ellen Star', 'Fig Cafe & Wine Bar', 'El Dorado Kitchen (nearby Sonoma)'],
  communityLink: { label: 'Sonoma Valley Chamber of Commerce', href: 'https://www.sonomachamber.org/' },

  issuesHeading: 'Common Appliance Issues in Glen Ellen',
  issuesContent: [
    'Glen Ellen properties often rely on well water with high mineral content. This leads to faster buildup inside dishwashers, ice makers, and washing machine inlets. Periodic descaling and filter replacement help avoid unexpected breakdowns.',
    'Rural Glen Ellen can experience power outages during fire season and winter storms. Modern appliances with electronic control boards are sensitive to sudden power loss. A surge protector is cheap insurance, and we can replace damaged boards when needed.',
  ],

  localExpertsText: 'About 30 minutes from Cotati through the Sonoma Valley.',
  neighborhoods: ['Village center', 'Arnold Drive corridor', 'Sonoma Mountain area'],
  midCtaHeading: 'Need Appliance Repair in Glen Ellen?',
  heroImage: '/images/SonomaVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van overlooking Glen Ellen and Sonoma Valley',
}

const bodegaBay: CityContent = {
  slug: 'bodega-bay',
  name: 'Bodega Bay',
  metaTitle: 'Appliance Repair Bodega Bay - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Factory-authorized appliance repair in Bodega Bay, CA. Serving Sonoma Coast homes and vacation properties since 1975. 90-day guarantee. Call (707) 664-9702.',
  heroSubtitle:
    'Trusted, factory-authorized appliance repair on the Sonoma Coast. Protecting your appliances from the coastal environment since 1975.',

  trustHeading: 'Why Bodega Bay Residents Trust Kelly\u2019s',
  trustContent: [
    'Coastal living is beautiful, but salt air is tough on appliances. Bodega Bay\u2019s marine environment corrodes metal components faster than anywhere else in our service area. We know exactly what to look for.',
    'Our drive to Bodega Bay takes about 40 minutes from Cotati, and we schedule the coast regularly. Many of our Bodega Bay customers are vacation rental owners who count on us for fast, reliable service between guests.',
    'We carry parts for every major brand on the truck, so most coastal repairs finish in a single visit, even in this remote location.',
  ],

  localHighlights:
    'Harbor views, fresh seafood, and coastal trails make Bodega Bay a classic Sonoma Coast destination. We keep appliances reliable in the salt-air environment so beach houses and getaways stay comfortable.',
  topEats: ['Fisherman\u2019s Cove', 'Spud Point Crab Co.', 'Terrapin Creek'],

  issuesHeading: 'Common Appliance Issues in Bodega Bay',
  issuesContent: [
    'Salt air is the number-one enemy of appliances on the coast. It corrodes condenser coils on refrigerators, rusts dryer drums, and degrades electrical connections. Regular cleaning of exposed metal surfaces and coils helps slow the damage.',
    'Coastal fog keeps humidity high year-round, which promotes mold growth on refrigerator door gaskets and inside washing machines. Running an empty hot wash cycle monthly and wiping gaskets regularly keeps mold at bay.',
  ],

  localExpertsText: 'About 40 minutes from our Cotati shop. We service the Sonoma Coast regularly.',
  neighborhoods: ['Harbor area', 'Bodega Harbour', 'Salmon Creek', 'Bodega village'],
  midCtaHeading: 'Need Appliance Repair on the Coast?',
  heroImage: '/images/SonomaVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van overlooking Bodega Bay and the Sonoma Coast',
}

const dillonBeach: CityContent = {
  slug: 'dillon-beach',
  name: 'Dillon Beach',
  metaTitle: 'Appliance Repair Dillon Beach - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Factory-authorized appliance repair in Dillon Beach, CA. Serving coastal homes and vacation rentals since 1975. 90-day guarantee. Call (707) 664-9702.',
  heroSubtitle:
    'Professional appliance repair for Dillon Beach homes and beach rentals. Factory-authorized with a 90-day guarantee.',

  trustHeading: 'Why Dillon Beach Residents Trust Kelly\u2019s',
  trustContent: [
    'Dillon Beach is one of the most remote communities in our service area, but we have been making the trip since 1975. Salt air and coastal humidity make appliance repair here different from inland work, and our techs know the difference.',
    'Many Dillon Beach properties are vacation rentals or weekend homes, which means appliances sit idle for stretches and then get heavy use. That on-off cycle creates unique wear patterns we have learned to anticipate.',
    'We carry common parts on the truck so most repairs finish in one visit. That is especially important in a remote coastal location where a return trip adds time.',
  ],

  localHighlights:
    'Dillon Beach is surf, sand, and salt air, plus quiet coastal nights. We keep appliances reliable in the marine environment so beach houses and getaways stay comfortable.',
  topEats: ['William Tell House (Tomales)', 'Nick\u2019s Cove (Marshall)', 'Dillon Beach Coastal Kitchen'],

  issuesHeading: 'Common Appliance Issues in Dillon Beach',
  issuesContent: [
    'Salt-air corrosion is even more pronounced at Dillon Beach than at Bodega Bay due to the direct ocean exposure. Metal components on refrigerators and dryers degrade quickly without regular cleaning.',
    'Homes that sit empty for weeks between visits can develop musty refrigerator interiors and washer drum odors. Leaving doors slightly ajar and running a cleaning cycle before extended absences helps prevent this.',
  ],

  localExpertsText: 'About 45 minutes from our Cotati shop. We schedule the coastal route regularly.',
  neighborhoods: ['Dillon Beach village', 'Oceana Marin', 'Lawson\u2019s Landing area'],
  midCtaHeading: 'Need Appliance Repair at the Beach?',
  heroImage: '/images/SonomaVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van overlooking Dillon Beach and the Sonoma Coast',
}

// ---------------------------------------------------------------------------
// Marin County
// ---------------------------------------------------------------------------

const sanRafael: CityContent = {
  slug: 'san-rafael',
  name: 'San Rafael',
  metaTitle: 'Appliance Repair San Rafael - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Factory-authorized appliance repair in San Rafael, CA. Serving downtown, Terra Linda, Sun Valley, and Dominican area since 1975. 90-day guarantee. Call (707) 664-9702.',
  heroSubtitle:
    'Professional appliance repair for San Rafael homes. Factory-authorized service with a 90-day money-back guarantee.',

  trustHeading: 'Why San Rafael Residents Trust Kelly\u2019s',
  trustContent: [
    'San Rafael is the largest city in Marin County, and we have been servicing homes here since 1975. From the older homes in the downtown area to the mid-century ranches in Terra Linda and Sun Valley, we know the appliance mix well.',
    'Our drive from Cotati to San Rafael takes about 30 minutes via 101. We schedule Marin appointments multiple days a week, and same-day availability is often possible.',
    'Marin kitchens often feature higher-end built-in appliances. Our factory authorizations for Sub-Zero, Viking, Thermador, and other premium brands mean your investment gets proper care.',
  ],

  localHighlights:
    'From the Frank Lloyd Wright-designed Civic Center to vibrant downtown dining, San Rafael is a hub for Marin. We deliver fast, reliable appliance repair to keep your home ready for busy weeks and relaxed weekends alike.',
  topEats: ['Sol Food', 'State Room', 'Il Davide'],
  communityLink: { label: 'San Rafael Chamber of Commerce', href: 'https://www.srchamber.com/' },

  issuesHeading: 'Common Appliance Issues in San Rafael',
  issuesContent: [
    'San Rafael\u2019s older neighborhoods (built in the 1950s-70s) sometimes have undersized electrical panels that cannot handle modern high-draw appliances. If your appliance trips breakers frequently, the issue may be the circuit, not the machine.',
    'Hillside homes in areas like Sun Valley and Dominican can experience higher humidity levels that promote mold on refrigerator gaskets and inside front-load washers. Regular gasket cleaning prevents odor and seal damage.',
  ],

  localExpertsText: 'About 30 minutes south from our Cotati shop on 101.',
  neighborhoods: ['Downtown', 'Terra Linda', 'Sun Valley', 'Dominican', 'Gerstle Park', 'Peacock Gap'],
  midCtaHeading: 'Ready for Appliance Repair in San Rafael?',
  heroImage: '/images/MarinVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van in Marin County with San Francisco Bay views',
}

const novato: CityContent = {
  slug: 'novato',
  name: 'Novato',
  metaTitle: 'Appliance Repair Novato - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Factory-authorized appliance repair in Novato, CA. Serving downtown, Hamilton, and Bel Marin Keys since 1975. Same-day scheduling, 90-day guarantee. Call (707) 664-9702.',
  heroSubtitle:
    'Factory-authorized appliance repair for Novato homes. 90-day money-back guarantee on every repair.',

  trustHeading: 'Why Novato Residents Trust Kelly\u2019s',
  trustContent: [
    'Novato is the northernmost city in Marin and the closest Marin community to our Cotati shop, about 20 minutes down 101. That means fast response times for Novato homeowners.',
    'The city\u2019s mix of housing ranges from the historic homes near downtown to the waterfront properties at Bel Marin Keys and the family neighborhoods in Hamilton. We\u2019ve worked on appliances in all of them.',
    'Our technicians are factory-authorized for every major brand, and they carry the most common parts on the truck. Most Novato repairs finish in a single visit.',
  ],

  localHighlights:
    'With trail access at Mount Burdell and a lively downtown, Novato balances outdoor life and neighborhood living. We offer prompt, warranty-safe repairs so your home stays ready for weeknights and weekends.',
  topEats: ['Wildfox', 'Grazie', 'HopMonk Novato'],
  communityLink: { label: 'Novato Chamber of Commerce', href: 'https://www.novatochamber.com/' },

  issuesHeading: 'Common Appliance Issues in Novato',
  issuesContent: [
    'Novato\u2019s Bel Marin Keys neighborhood sits near sea level, where humidity and occasional flood risk create a tough environment for appliances. Elevated units and good ventilation help protect washers and dryers in these homes.',
    'Homes in the Hamilton redevelopment area were built on a former military base with a mix of new and renovated structures. Electrical configurations can vary, and we help diagnose whether issues are appliance-related or wiring-related.',
  ],

  localExpertsText: 'About 20 minutes south on 101. We are in Novato multiple times a week.',
  neighborhoods: ['Downtown', 'Hamilton', 'Bel Marin Keys', 'Indian Valley', 'Ignacio'],
  midCtaHeading: 'Need Appliance Repair in Novato?',
  heroImage: '/images/MarinVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van in Marin County with San Francisco Bay views',
}

const millValley: CityContent = {
  slug: 'mill-valley',
  name: 'Mill Valley',
  metaTitle: 'Appliance Repair Mill Valley - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Factory-authorized appliance repair in Mill Valley, CA. Serving Tam Valley, Strawberry, and downtown homes since 1975. 90-day guarantee. Call (707) 664-9702.',
  heroSubtitle:
    'Professional appliance repair for Mill Valley homes. Factory-authorized with a 90-day money-back guarantee.',

  trustHeading: 'Why Mill Valley Residents Trust Kelly\u2019s',
  trustContent: [
    'Mill Valley homes tend to have well-appointed kitchens with premium built-in appliances. Our factory authorizations for Sub-Zero, Wolf, Thermador, Bosch, and other high-end brands give homeowners confidence that their appliances are in expert hands.',
    'We make the drive from Cotati to Mill Valley regularly, about 40 minutes via 101. We group Marin south appointments to keep scheduling efficient and availability consistent.',
    'Mill Valley\u2019s hillside and canyon homes can be challenging to access, and some have unique installation setups. We bring the right tools and experience for tight spaces, steep driveways, and custom cabinetry.',
  ],

  localHighlights:
    'Nestled beneath Mt. Tam and close to the redwoods of Muir Woods, Mill Valley mixes outdoor living with refined dining. We keep your home\u2019s appliances ready for post-hike meals and everyday routines.',
  topEats: ['Playa', 'Buckeye Roadhouse', 'Bungalow 44'],
  communityLink: { label: 'Mill Valley Chamber of Commerce', href: 'https://www.millvalley.org/' },

  issuesHeading: 'Common Appliance Issues in Mill Valley',
  issuesContent: [
    'Mill Valley\u2019s canyon and hillside homes sit in a microclimate that is cooler and more humid than surrounding areas. That extra moisture can promote mold growth on refrigerator door seals and inside front-load washer drums.',
    'Many Mill Valley homes have tight utility closets or custom-built appliance alcoves. Dryers in these spaces need extra attention to venting, since restricted airflow leads to overheating and longer dry times.',
  ],

  localExpertsText: 'About 40 minutes from Cotati. We group south Marin appointments for consistent availability.',
  neighborhoods: ['Downtown', 'Tam Valley', 'Strawberry', 'Alto', 'Homestead Valley'],
  midCtaHeading: 'Need Appliance Repair in Mill Valley?',
  heroImage: '/images/MarinVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van in Marin County with San Francisco Bay views',
}

const sausalito: CityContent = {
  slug: 'sausalito',
  name: 'Sausalito',
  metaTitle: 'Appliance Repair Sausalito - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Factory-authorized appliance repair in Sausalito, CA. Serving waterfront, hillside, and downtown homes since 1975. 90-day guarantee. Call (707) 664-9702.',
  heroSubtitle:
    'Factory-authorized appliance repair for Sausalito homes. 90-day money-back guarantee on every repair.',

  trustHeading: 'Why Sausalito Residents Trust Kelly\u2019s',
  trustContent: [
    'Sausalito\u2019s waterfront location means salt-air exposure is a real factor for appliances. Our technicians understand how the marine environment affects metal components, electrical connections, and seals differently than inland homes.',
    'Compact living spaces are common in Sausalito, from houseboats to hillside cottages. We bring compact-appliance expertise and the right tools for tight installations.',
    'We have been serving Sausalito since 1975. The drive from Cotati takes about 45 minutes, and we schedule the south Marin route multiple days a week.',
  ],

  localHighlights:
    'Bay views, art galleries, and waterfront paths make Sausalito a destination. We help keep kitchens and laundry rooms ready for everyday living between ferry rides and coastal strolls.',
  topEats: ['Scoma\u2019s', 'Sushi Ran', 'The Trident'],
  communityLink: { label: 'Sausalito Chamber of Commerce', href: 'https://www.sausalito.org/' },

  issuesHeading: 'Common Appliance Issues in Sausalito',
  issuesContent: [
    'Salt air from the bay corrodes refrigerator condenser coils and dryer components faster than in inland locations. Regular coil cleaning and inspection of metal parts can add years to your appliances\u2019 lifespan.',
    'Many Sausalito homes, especially the floating homes community, have compact or European-style appliances with unique part requirements. Our factory authorizations cover brands like Bosch, Miele, and Fisher & Paykel that are popular in smaller spaces.',
  ],

  localExpertsText: 'About 45 minutes from Cotati. We schedule south Marin appointments regularly.',
  neighborhoods: ['Downtown', 'Caledonia', 'Marinship', 'Floating homes'],
  midCtaHeading: 'Need Appliance Repair in Sausalito?',
  heroImage: '/images/MarinVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van in Marin County with San Francisco Bay views',
}

const tiburon: CityContent = {
  slug: 'tiburon',
  name: 'Tiburon',
  metaTitle: 'Appliance Repair Tiburon - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Factory-authorized appliance repair in Tiburon, CA. Serving Belvedere, Paradise Drive, and waterfront homes since 1975. 90-day guarantee. Call (707) 664-9702.',
  heroSubtitle:
    'Professional appliance repair for Tiburon and Belvedere homes. Factory-authorized with a 90-day guarantee.',

  trustHeading: 'Why Tiburon Residents Trust Kelly\u2019s',
  trustContent: [
    'Tiburon and Belvedere homes are among the finest in Marin County, and their kitchens match. We are factory-authorized for the premium brands found here, including Sub-Zero, Wolf, Viking, Dacor, and Thermador.',
    'Our drive from Cotati takes about 45 minutes, and we combine Tiburon visits with our south Marin schedule. Same-day availability is sometimes possible depending on the day\u2019s route.',
    'Waterfront homes in Tiburon face salt-air exposure that inland homes do not. We factor that into our diagnostics, checking for corrosion and moisture damage that less-experienced techs might miss.',
  ],

  localHighlights:
    'Harbor views and ferry access define Tiburon\u2019s relaxed coastal feel. We keep your home\u2019s essentials reliable so entertaining with a view is always stress-free.',
  topEats: ['Luna Blu', 'Sam\u2019s Anchor Cafe', 'Servino'],
  communityLink: { label: 'Tiburon Chamber of Commerce', href: 'https://www.tiburonchamber.org/' },

  issuesHeading: 'Common Appliance Issues in Tiburon',
  issuesContent: [
    'Tiburon\u2019s bayfront homes deal with salt air and higher humidity that accelerates wear on refrigerator coils, dryer components, and dishwasher racks. A biannual coil cleaning and rack inspection go a long way.',
    'High-end built-in appliances in Tiburon homes sometimes require longer lead times for specialty parts. We maintain relationships with factory distributors to get hard-to-find parts as quickly as possible.',
  ],

  localExpertsText: 'About 45 minutes from Cotati. Part of our regular south Marin schedule.',
  neighborhoods: ['Downtown', 'Belvedere', 'Paradise Drive', 'Reed Heights'],
  midCtaHeading: 'Need Appliance Repair in Tiburon?',
  heroImage: '/images/MarinVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van in Marin County with San Francisco Bay views',
}

const corteMadera: CityContent = {
  slug: 'corte-madera',
  name: 'Corte Madera',
  metaTitle: 'Appliance Repair Corte Madera - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Factory-authorized appliance repair in Corte Madera, CA. Serving The Village area, Christmas Tree Hill, and surrounding neighborhoods since 1975. 90-day guarantee. Call (707) 664-9702.',
  heroSubtitle:
    'Factory-authorized appliance repair for Corte Madera homes. 90-day money-back guarantee on every repair.',

  trustHeading: 'Why Corte Madera Residents Trust Kelly\u2019s',
  trustContent: [
    'Corte Madera is a family-centered community with homes ranging from 1950s-era originals on Christmas Tree Hill to modern builds near The Village shopping center. We\u2019ve repaired appliances in every style.',
    'Our drive from Cotati is about 35 minutes, and we are in central Marin multiple days a week. Quick scheduling keeps your family\u2019s routine on track.',
    'Many Corte Madera homes have been remodeled with upgraded kitchens. We work on both the new premium appliances and the older holdovers that homeowners keep running during a phased renovation.',
  ],

  localHighlights:
    'Corte Madera pairs easy shopping at The Village with access to trails and the Bay. We provide fast, authorized appliance repair so home life runs like clockwork.',
  topEats: ['Picco', 'Farmshop', 'Marin Joe\u2019s'],
  communityLink: { label: 'Corte Madera Chamber of Commerce', href: 'http://www.cortemadera.org/' },

  issuesHeading: 'Common Appliance Issues in Corte Madera',
  issuesContent: [
    'Corte Madera\u2019s proximity to the bay means some neighborhoods experience slightly higher humidity. Front-load washers in these areas are more prone to gasket mold and odor if the door is kept closed between washes.',
    'Homes on Christmas Tree Hill often have older electrical systems. Modern appliances with digital controls can behave unpredictably on these circuits. We can help determine if the appliance or the wiring needs attention.',
  ],

  localExpertsText: 'About 35 minutes from Cotati. Part of our regular central Marin route.',
  neighborhoods: ['The Village area', 'Christmas Tree Hill', 'Madera Gardens', 'Mariner Cove'],
  midCtaHeading: 'Need Appliance Repair in Corte Madera?',
  heroImage: '/images/MarinVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van in Marin County with San Francisco Bay views',
}

const larkspur: CityContent = {
  slug: 'larkspur',
  name: 'Larkspur',
  metaTitle: 'Appliance Repair Larkspur - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Factory-authorized appliance repair in Larkspur, CA. Serving downtown, Greenbrae, and Kentfield area homes since 1975. 90-day guarantee. Call (707) 664-9702.',
  heroSubtitle:
    'Professional appliance repair for Larkspur and Greenbrae homes. Factory-authorized with a 90-day guarantee.',

  trustHeading: 'Why Larkspur Residents Trust Kelly\u2019s',
  trustContent: [
    'Larkspur\u2019s charming downtown and surrounding neighborhoods like Greenbrae and Kentfield feature homes with well-appointed kitchens. Our factory authorizations cover every brand you\u2019ll find here.',
    'We drive from Cotati in about 35 minutes and schedule central Marin visits throughout the week. Same-day appointments are often available for morning calls.',
    'Whether it is an older Larkspur cottage with a built-in dishwasher or a Greenbrae remodel with a new professional-grade range, we handle the full spectrum of home appliance repairs.',
  ],

  localHighlights:
    'From the historic downtown to nearby ferry access, Larkspur offers easy Bay connections and neighborhood charm. We provide prompt appliance repair so your routine stays smooth in the heart of Marin.',
  topEats: ['Picco', 'Farmshop', 'Marin Joe\u2019s'],

  issuesHeading: 'Common Appliance Issues in Larkspur',
  issuesContent: [
    'Greenbrae and Kentfield homes built in the 1950s and 1960s sometimes have compact utility spaces that restrict dryer airflow. If your dryer is taking extra-long cycles, the vent path is the first thing to check.',
    'Larkspur sits in a low-lying area near Corte Madera Creek, and homes near the creek can experience slightly higher humidity that affects refrigerator coil performance and promotes mold in front-load washers.',
  ],

  localExpertsText: 'About 35 minutes from Cotati. Part of our regular central Marin schedule.',
  neighborhoods: ['Downtown Larkspur', 'Greenbrae', 'Kentfield', 'Murray Park'],
  midCtaHeading: 'Need Appliance Repair in Larkspur?',
  heroImage: '/images/MarinVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van in Marin County with San Francisco Bay views',
}

// ---------------------------------------------------------------------------
// Napa County
// ---------------------------------------------------------------------------

const napa: CityContent = {
  slug: 'napa',
  name: 'Napa',
  metaTitle: 'Appliance Repair Napa - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Factory-authorized appliance repair in Napa, CA. Serving downtown, Browns Valley, Silverado, and vineyard homes since 1975. 90-day guarantee. Call (707) 664-9702.',
  heroSubtitle:
    'Professional appliance repair for Napa homes and vineyard properties. Factory-authorized with a 90-day money-back guarantee.',

  trustHeading: 'Why Napa Residents Trust Kelly\u2019s',
  trustContent: [
    'Napa kitchens are built for entertaining, and many homes feature commercial-grade appliances from brands like Viking, Wolf, Sub-Zero, and Thermador. Our factory authorizations ensure these investments get proper expert care.',
    'We cross the county line from Cotati to Napa in about 30 minutes, and we schedule Napa visits multiple days a week. Same-day availability is often possible.',
    'Whether you live near downtown\u2019s Oxbow Public Market or in a vineyard estate along the Silverado Trail, we bring the same reliable, guaranteed service to every Napa address.',
  ],

  localHighlights:
    'From the Oxbow Public Market to scenic Silverado Trail, Napa makes everyday life feel special. We keep your kitchen and laundry appliances humming between tastings, markets, and family dinners.',
  topEats: ['Oenotri', 'La Toque', 'TORC'],
  communityLink: { label: 'Napa Chamber of Commerce', href: 'https://napachamber.com/' },

  issuesHeading: 'Common Appliance Issues in Napa',
  issuesContent: [
    'Napa Valley\u2019s groundwater is notoriously hard, with high calcium and mineral content. This takes a toll on dishwashers, ice makers, and washing machine valves over time. Homes on well water are especially affected.',
    'Wine-lifestyle kitchens with professional ranges and multiple refrigerators put heavy demands on home electrical systems. If your breaker trips when two large appliances run simultaneously, the issue may be circuit capacity rather than the appliance itself.',
  ],

  localExpertsText: 'About 30 minutes east from our Cotati shop, crossing into Napa County.',
  neighborhoods: ['Downtown', 'Browns Valley', 'Silverado', 'Old Town', 'Westwood'],
  midCtaHeading: 'Need Appliance Repair in Napa Valley?',
  heroImage: '/images/SonomaVan2.jpg',
  heroImageAlt: 'Kelly\'s Appliance service vans in wine country, serving Napa Valley',
}

// ---------------------------------------------------------------------------
// Export lookup
// ---------------------------------------------------------------------------

export const cityContentMap: Record<string, CityContent> = {
  'santa-rosa': santaRosa,
  'petaluma': petaluma,
  'rohnert-park': rohnertPark,
  'cotati': cotati,
  'sebastopol': sebastopol,
  'sonoma': sonoma,
  'windsor': windsor,
  'healdsburg': healdsburg,
  'forestville': forestville,
  'guerneville': guerneville,
  'glen-ellen': glenEllen,
  'bodega-bay': bodegaBay,
  'dillon-beach': dillonBeach,
  'san-rafael': sanRafael,
  'novato': novato,
  'mill-valley': millValley,
  'sausalito': sausalito,
  'tiburon': tiburon,
  'corte-madera': corteMadera,
  'larkspur': larkspur,
  'napa': napa,
}

/** Convenience helper: throws if slug is missing (catches typos at build time). */
export function getCityContent(slug: string): CityContent {
  const data = cityContentMap[slug]
  if (!data) throw new Error(`No cityContent entry for slug "${slug}"`)
  return data
}
