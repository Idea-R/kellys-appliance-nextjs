/**
 * Centralized content for all 21 service-location city pages.
 *
 * Each entry supplies the unique, per-city text that gets merged into
 * a shared page template.  Keep entries in the same order as
 * locations.ts (Sonoma -> Marin -> Napa).
 */

import type { FAQ } from '@/types/faq'

/**
 * Shared FAQ builder for cities that don't have fully custom FAQ content yet.
 * Produces 4 generic questions keyed to the city name. Tier 1 cities should
 * define their own detailed `faqs` array with local specifics.
 */
export function buildStandardFaqs(cityName: string, opts?: {
  driveTime?: string
  neighborhoodList?: string
  localIssue?: { question: string; answer: string }
}): FAQ[] {
  const driveTime = opts?.driveTime ?? 'a short drive from our Cotati shop'
  const faqs: FAQ[] = [
    {
      question: `How much does appliance repair cost in ${cityName}?`,
      answer: `Our service call fee is $149, which includes full diagnosis and is applied toward the repair if you proceed. Most ${cityName} repairs range from $200 to $450 depending on the appliance and parts needed. We provide an upfront estimate before any work begins, and there are no surprise charges.`,
    },
    {
      question: `Do you offer same-day appliance repair in ${cityName}?`,
      answer: `${cityName} is ${driveTime}, so we can often schedule same-day or next-day appointments for urgent refrigerator, washer, and dryer issues. Call (707) 664-9702 to check today\u2019s availability.`,
    },
    {
      question: `What appliance brands do you service in ${cityName}?`,
      answer: `We are factory-authorized for most major brands including Whirlpool, GE, Maytag, Samsung, LG, Kenmore, Frigidaire, Bosch, KitchenAid, JennAir, Sub-Zero, Viking, Wolf, and Thermador. Our technicians carry genuine OEM parts on the truck for most common repairs.`,
    },
    {
      question: `Are you licensed and insured in ${cityName}?`,
      answer: `Yes. Kelly\u2019s Appliance Center has been operating since 1975, we are fully licensed and insured, Diamond Certified by American Ratings, and factory-authorized for most major appliance brands. Every repair comes with our 90-day money-back guarantee.`,
    },
  ]
  if (opts?.localIssue) {
    faqs.splice(3, 0, opts.localIssue)
  }
  return faqs
}

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

  /** Optional FAQ section with FAQPage schema (minimum 2 required for JSON-LD) */
  faqs?: FAQ[]
}

// ---------------------------------------------------------------------------
// Sonoma County
// ---------------------------------------------------------------------------

const santaRosa: CityContent = {
  slug: 'santa-rosa',
  name: 'Santa Rosa',
  metaTitle: 'Santa Rosa Appliance Repair \u2014 50 Years, 90-Day Guarantee',
  metaDescription:
    '50 years fixing refrigerators, washers, dryers, ovens, and dishwashers for Santa Rosa homes. Diamond Certified technicians, factory-authorized parts, 90-day money-back guarantee. Schedule online or call (707) 664-9702.',
  heroSubtitle:
    'Factory-authorized appliance repair for Santa Rosa homes. Serving neighborhoods from Fountaingrove to Roseland with a 90-day money-back guarantee.',

  trustHeading: 'Why Santa Rosa Residents Trust Kelly\u2019s',
  trustContent: [
    'Santa Rosa is the largest city in Sonoma County with over 180,000 residents, and we have been its go-to appliance repair team since 1975. Our technicians drive up Highway 101 from Cotati every single day, so Santa Rosa response times are among the fastest in our service area.',
    'We work on every major brand you will find in Santa Rosa kitchens and laundry rooms. That includes entry-level Whirlpool, GE, and Maytag sets in Roseland and Coffey Park bungalows, mid-range LG, Samsung, and Frigidaire units in Rincon Valley homes, and premium Sub-Zero, Viking, Thermador, and Wolf installs in Fountaingrove and Skyhawk estates. Every repair uses genuine OEM parts and comes with our 90-day money-back guarantee.',
    'Santa Rosa homeowners deal with hard municipal water that can shorten the life of dishwashers, washing machines, ice makers, and water filters. We see mineral buildup constantly, know the fixes that last, and stock the replacement valves and spray arms that most competitors have to order.',
    'After the 2017 Tubbs Fire, we watched Santa Rosa rebuild from Coffey Park to Fountaingrove. Many homes that were rebuilt have newer appliance installations, and we have been the trusted service partner for homeowners dealing with warranty claims, smart appliance quirks, and the adjustment period that comes with any new kitchen.',
    'Our Cotati headquarters is 15 minutes south on 101, which means we can typically get a technician to Santa Rosa within a few hours for urgent calls. We also service neighboring communities like Windsor, Healdsburg, Sebastopol, Rohnert Park, and Cotati, so our team is already in the area most days.',
    'We are Diamond Certified, a rating reserved for businesses with a proven track record of customer satisfaction based on independent research. That certification is renewed annually, and we have held it for years.',
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
  neighborhoods: [
    'Fountaingrove',
    'Rincon Valley',
    'Bennett Valley',
    'Roseland',
    'Oakmont',
    'South Park',
    'Coffey Park',
    'Rincon Ridge',
    'Skyhawk',
    'Montecito Heights',
    'Proctor Terrace',
    'Junior College',
    'West End',
    'Cherry Valley',
    'Burbank Gardens',
    'Hidden Valley',
  ],
  midCtaHeading: 'Ready for Fast Appliance Repair in Santa Rosa?',
  heroImage: '/images/SonomaVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van overlooking Santa Rosa and Sonoma County',
  faqs: [
    {
      question: 'How much does appliance repair cost in Santa Rosa?',
      answer: 'Our standard service call fee is $149, which includes diagnosis and gets applied toward the repair if you proceed. Most Santa Rosa repairs range from $200 to $450 depending on the appliance and parts needed. We give you an upfront estimate before any work begins, and there are no surprise charges.',
    },
    {
      question: 'Do you offer same-day appliance repair in Santa Rosa?',
      answer: 'We frequently have same-day availability for Santa Rosa, especially for urgent refrigerator or washer issues. Our Cotati shop is only 15 minutes south on Highway 101, so response times here are among our fastest in the service area. Call (707) 664-9702 to check today\u2019s schedule.',
    },
    {
      question: 'What appliance brands do you repair in Santa Rosa?',
      answer: 'We are factory-authorized for most major brands including Whirlpool, GE, Maytag, Samsung, LG, Kenmore, Frigidaire, Bosch, KitchenAid, JennAir, Sub-Zero, Viking, Wolf, and Thermador. Whether your kitchen has entry-level appliances or premium installs in Fountaingrove or Skyhawk, we carry genuine OEM parts for the job.',
    },
    {
      question: 'Do you service my Santa Rosa neighborhood?',
      answer: 'Yes. We service every Santa Rosa neighborhood including Fountaingrove, Rincon Valley, Bennett Valley, Roseland, Oakmont, South Park, Coffey Park, Rincon Ridge, and Skyhawk. We also cover surrounding communities in Sonoma County like Windsor, Sebastopol, and Healdsburg.',
    },
    {
      question: 'Why does my dishwasher keep getting clogged in Santa Rosa?',
      answer: 'Santa Rosa\u2019s municipal water is relatively hard, meaning it carries minerals that build up inside dishwasher spray arms, drain pumps, and water inlet valves over time. Regular cleaning and timely part replacement prevent most issues. If your dishes are still coming out spotted after a cleaning cycle, call us for a diagnostic.',
    },
    {
      question: 'Are you licensed and insured in Santa Rosa?',
      answer: 'Yes. Kelly\u2019s Appliance Center has been operating since 1975, we are fully licensed and insured, Diamond Certified by American Ratings, and factory-authorized for most major appliance brands. Every repair comes with our 90-day money-back guarantee.',
    },
  ],
}

const petaluma: CityContent = {
  slug: 'petaluma',
  name: 'Petaluma',
  metaTitle: 'Petaluma Appliance Repair \u2014 50 Years, 90-Day Guarantee',
  metaDescription:
    '50 years fixing refrigerators, washers, dryers, ovens, and dishwashers for Petaluma homes. 10 minutes from our Cotati shop, Diamond Certified, 90-day money-back guarantee. Schedule online or call (707) 664-9702.',
  heroSubtitle:
    'Trusted appliance repair for Petaluma homes since 1975. Factory-authorized service with a 90-day money-back guarantee.',

  trustHeading: 'Why Petaluma Residents Trust Kelly\u2019s',
  trustContent: [
    'Petaluma is just 10 minutes south of our Cotati shop, which means we are in town fast. We have been servicing Petaluma homes since 1975, from the Victorian beauties downtown and the riverfront Craftsmans on the West Side to the newer builds on the East Side and out toward Casa Grande.',
    'Our technicians are factory-authorized for every major brand: Whirlpool, GE, Samsung, LG, Maytag, Frigidaire, Bosch, KitchenAid, Sub-Zero, Viking, and more. They carry common parts on the truck so many Petaluma repairs finish in a single visit.',
    'Petaluma\u2019s older homes have quirks. Tight laundry closets in West Side Victorians trap dryer heat. 1950s-era electrical panels on some Historic Downtown streets can\u2019t handle modern high-draw appliances. We\u2019ve seen it all and bring the tools and know-how to diagnose whether it\u2019s the appliance or the installation.',
    'Many Petaluma homes sit in low-lying areas near the river where humidity stays high year-round. That moisture accelerates rust on dryer drums and corrodes refrigerator condenser coils faster than in drier areas. We know where to look first.',
    'Every repair comes with our 90-day money-back guarantee, and we are Diamond Certified by American Ratings for consistent customer satisfaction.',
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
  neighborhoods: ['East Side', 'West Side', 'Downtown', 'Casa Grande', 'Lakeville', 'McDowell', 'Penngrove', 'Oakhill-Brewster', 'Sunnyslope', 'Victoria'],
  midCtaHeading: 'Need Appliance Repair in Petaluma Today?',
  heroImage: '/images/SonomaVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van overlooking Petaluma and Sonoma County',
  faqs: [
    {
      question: 'How much does appliance repair cost in Petaluma?',
      answer: 'Our service call fee is $149, which includes full diagnosis and is applied toward the repair if you proceed. Most Petaluma repairs range from $200 to $450 depending on the appliance and parts needed. We provide an upfront estimate before any work begins.',
    },
    {
      question: 'Do you offer same-day appliance repair in Petaluma?',
      answer: 'Yes, often. Petaluma is only 10 minutes south of our Cotati headquarters, so our techs are in town daily and same-day calls are common. Call (707) 664-9702 to check today\u2019s availability.',
    },
    {
      question: 'What appliance brands do you service in Petaluma?',
      answer: 'We are factory-authorized for Whirlpool, GE, Samsung, LG, Maytag, Frigidaire, Bosch, KitchenAid, JennAir, Kenmore, Sub-Zero, Viking, Wolf, and Thermador. Our technicians carry genuine OEM parts on the truck for most common repairs.',
    },
    {
      question: 'Do you service my Petaluma neighborhood?',
      answer: 'Yes. We service all Petaluma neighborhoods including East Side, West Side, Downtown, Casa Grande, Lakeville, McDowell, Penngrove, Oakhill-Brewster, and Sunnyslope. We also cover nearby Cotati, Rohnert Park, and north Marin.',
    },
    {
      question: 'Why does my dryer keep tripping the breaker in my older Petaluma home?',
      answer: 'Many West Side and Historic Downtown homes have 1950s-era electrical panels that cannot handle the draw of a modern dryer, especially if the dryer shares a circuit with other appliances. The issue may not be your dryer at all. We can diagnose whether the problem is the appliance or the circuit.',
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Yes. Kelly\u2019s Appliance Center has been operating since 1975, we are fully licensed and insured, Diamond Certified, and factory-authorized for most major brands. Every repair comes with our 90-day money-back guarantee.',
    },
  ],
}

const rohnertPark: CityContent = {
  slug: 'rohnert-park',
  name: 'Rohnert Park',
  metaTitle: 'Appliance Repair Rohnert Park | Your Neighbor in Cotati | Kelly\'s',
  metaDescription:
    'Just down the road in Cotati. Kelly\'s has been the neighborhood appliance repair shop for Rohnert Park since 1975. 90-day guarantee, all major brands. Book online.',
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
  faqs: buildStandardFaqs('Rohnert Park', {
    driveTime: '5 minutes from our Cotati shop \u2014 we are literally next door',
    localIssue: {
      question: 'Why does my dishwasher keep getting spotty glassware in Rohnert Park?',
      answer: 'Rohnert Park shares its municipal water system with Cotati, and that water is fairly hard. Mineral deposits build up on dishwasher spray arms and inside water inlet valves, which leaves spots on glassware and reduces cleaning power. Regular descaling helps, and when it doesn\u2019t, we know exactly which parts to replace.',
    },
  }),
}

const cotati: CityContent = {
  slug: 'cotati',
  name: 'Cotati',
  metaTitle: 'Appliance Repair Cotati | Our Home Base | Kelly\'s',
  metaDescription:
    'This is where Kelly\'s lives. Appliance repair right from our Cotati headquarters since 1975. Diamond Certified, 90-day guarantee on parts and labor. Call (707) 664-9702.',
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
  faqs: buildStandardFaqs('Cotati', {
    driveTime: 'our home base \u2014 we\u2019re located right here at 466 Primero Ct, Suite H',
    localIssue: {
      question: 'Do you really do same-day repair in Cotati?',
      answer: 'For Cotati calls, often yes. Our shop is here, our techs live and work here, and Cotati customers get priority scheduling when we can make it happen. Call (707) 664-9702 first thing in the morning for the best chance at a same-day slot.',
    },
  }),
}

const sebastopol: CityContent = {
  slug: 'sebastopol',
  name: 'Sebastopol',
  metaTitle: 'Appliance Repair Sebastopol - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Factory-authorized appliance repair in Sebastopol, CA. Serving Graton, The Barlow area, and west county homes since 1975. Diamond Certified, 90-day guarantee. Call (707) 664-9702.',
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
  faqs: buildStandardFaqs('Sebastopol', {
    driveTime: 'about 20 minutes from our Cotati shop via the Gravenstein Highway',
    localIssue: {
      question: 'Why is my dishwasher running slow in rural Sebastopol?',
      answer: 'Many Sebastopol and Graton properties run on well water, which carries much more iron and calcium than city supplies. Those minerals clog dishwasher spray arms and restrict water inlet valves over time. Periodic descaling helps, and when parts need replacing we carry them for most major brands.',
    },
  }),
}

const sonoma: CityContent = {
  slug: 'sonoma',
  name: 'Sonoma',
  metaTitle: 'Appliance Repair Sonoma | Family-Owned Since 1975 | Kelly\'s',
  metaDescription:
    'Sonoma\'s go-to for appliance repair. Plaza, Springs, and vineyard homes served by the same family-owned team for 50+ years. Diamond Certified, 90-day guarantee on parts and labor.',
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
  faqs: buildStandardFaqs('Sonoma', {
    driveTime: 'about 25 minutes from our Cotati shop through the Sonoma Valley',
    localIssue: {
      question: 'Do you service Sonoma vacation rentals and second homes?',
      answer: 'Yes, and we understand the urgency. Many Sonoma properties are vacation rentals or second homes where a broken appliance means lost bookings or ruined plans. Tell us the situation when you call and we will prioritize getting someone out fast.',
    },
  }),
}

const windsor: CityContent = {
  slug: 'windsor',
  name: 'Windsor',
  metaTitle: 'Appliance Repair Windsor CA | 90-Day Guarantee | Kelly\'s',
  metaDescription:
    'Windsor homeowners have trusted Kelly\'s with their appliances since 1975. Refrigerator, washer, dryer, and oven repair. Town Green area and all surrounding neighborhoods. Book online today.',
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
  faqs: buildStandardFaqs('Windsor', {
    driveTime: 'about 20 minutes north of our Cotati shop on 101',
    localIssue: {
      question: 'My stacked washer-dryer overheats in my Windsor home. What\u2019s wrong?',
      answer: 'Many Windsor subdivisions have compact laundry closets with stacked washer-dryer units. Limited airflow around the dryer traps heat and lint, which makes the dryer work harder and wear out faster. Clean the lint trap after every load, check the vent line behind the unit annually, and call us if cycles start getting longer.',
    },
  }),
}

const healdsburg: CityContent = {
  slug: 'healdsburg',
  name: 'Healdsburg',
  metaTitle: 'Appliance Repair Healdsburg - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Factory-authorized appliance repair in Healdsburg, CA. Serving Plaza area, Dry Creek, and Alexander Valley homes since 1975. Diamond Certified, 90-day guarantee. Call (707) 664-9702.',
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
  faqs: buildStandardFaqs('Healdsburg', {
    driveTime: 'about 30 minutes north from Cotati. We schedule Healdsburg visits multiple days a week',
    localIssue: {
      question: 'Do you repair Sub-Zero and Viking in Healdsburg wine country homes?',
      answer: 'Yes. We are factory-authorized for Sub-Zero, Viking, Wolf, Thermador, and Miele \u2014 common in Dry Creek and Alexander Valley estates. We stock or quickly source the genuine OEM parts these premium brands require.',
    },
  }),
}

const forestville: CityContent = {
  slug: 'forestville',
  name: 'Forestville',
  metaTitle: 'Appliance Repair Forestville - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Factory-authorized appliance repair in Forestville, CA. Serving Russian River area homes since 1975. Diamond Certified, 90-day guarantee. Call (707) 664-9702.',
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
  faqs: buildStandardFaqs('Forestville', {
    driveTime: 'about 25 minutes from Cotati through Sebastopol',
    localIssue: {
      question: 'My fridge is rusting near the coils in Forestville. Why?',
      answer: 'Forestville\u2019s proximity to the Russian River brings persistent humidity into homes, and that moisture accelerates corrosion on refrigerator condenser coils and dryer drums faster than in drier parts of the county. Keeping these areas clean and dry extends their life significantly.',
    },
  }),
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
  faqs: buildStandardFaqs('Guerneville', {
    driveTime: 'about 35 minutes from Cotati. We schedule the Russian River regularly',
    localIssue: {
      question: 'Do you service Guerneville vacation rentals?',
      answer: 'Yes. A lot of our Guerneville calls come from rental owners who need fast turnaround between guests. Washers and dryers in rentals often see 3x normal use, and we know the common failure points. Let us know if it\u2019s urgent and we will prioritize the call.',
    },
  }),
}

const glenEllen: CityContent = {
  slug: 'glen-ellen',
  name: 'Glen Ellen',
  metaTitle: 'Appliance Repair Glen Ellen - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Factory-authorized appliance repair in Glen Ellen, CA. Serving Sonoma Valley homes and estates since 1975. Diamond Certified, 90-day guarantee. Call (707) 664-9702.',
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
  faqs: buildStandardFaqs('Glen Ellen', {
    driveTime: 'about 30 minutes from Cotati through the Sonoma Valley',
    localIssue: {
      question: 'Why does my dishwasher run slowly in Glen Ellen?',
      answer: 'Many Glen Ellen properties run on well water with high mineral content, which builds up inside dishwasher spray arms, water inlet valves, and drain pumps. Periodic descaling and timely part replacement keep things flowing. We see this constantly and know which parts fail first on which brands.',
    },
  }),
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
  faqs: buildStandardFaqs('Bodega Bay', {
    driveTime: 'about 40 minutes from Cotati, and we service the Sonoma Coast regularly',
    localIssue: {
      question: 'How does salt air affect my appliances in Bodega Bay?',
      answer: 'Salt air is tough on appliances. It corrodes refrigerator condenser coils, rusts dryer drums, and degrades electrical connections faster than any inland location. Regular cleaning of exposed metal, keeping coils dust-free, and running a monthly hot wash on your washer helps. We know what to look for on coastal properties.',
    },
  }),
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
  faqs: buildStandardFaqs('Dillon Beach', {
    driveTime: 'about 45 minutes from Cotati along the coastal route',
    localIssue: {
      question: 'Why do my appliances get musty in my Dillon Beach house?',
      answer: 'Beach houses that sit empty for weeks develop musty refrigerator interiors and washer drum odors because of the combination of coastal humidity and low use. Leave fridge and washer doors slightly ajar during extended absences and run a cleaning cycle before you leave. If the smell persists, the gasket or internal components may need cleaning or replacement.',
    },
  }),
}

// ---------------------------------------------------------------------------
// Marin County
// ---------------------------------------------------------------------------

const sanRafael: CityContent = {
  slug: 'san-rafael',
  name: 'San Rafael',
  metaTitle: 'San Rafael Appliance Repair \u2014 Marin\u2019s Trusted Choice Since 1975',
  metaDescription:
    '50 years of factory-authorized appliance repair for Marin County homes. Refrigerators, washers, dryers, ovens, and dishwashers. Diamond Certified, 90-day guarantee. Call (707) 664-9702 or schedule online.',
  heroSubtitle:
    'Professional appliance repair for San Rafael homes. Factory-authorized service with a 90-day money-back guarantee.',

  trustHeading: 'Why San Rafael Residents Trust Kelly\u2019s',
  trustContent: [
    'San Rafael is the largest city in Marin County, and we have been servicing homes here since 1975. From the Victorian homes near the Mission to the mid-century ranches in Terra Linda and Sun Valley, plus the hillside estates in Dominican and Peacock Gap, we know the appliance mix well.',
    'Our drive from Cotati to San Rafael takes about 30 minutes via 101, and we schedule Marin appointments multiple days a week. Same-day availability is often possible for morning calls, especially for urgent refrigerator or washer issues.',
    'Marin kitchens often feature higher-end built-in appliances. Our factory authorizations for Sub-Zero, Viking, Thermador, Wolf, Miele, and other premium brands mean your investment gets proper expert care. We also service standard brands like Whirlpool, GE, Samsung, LG, Maytag, and Frigidaire across every San Rafael neighborhood.',
    'Hillside neighborhoods like Sun Valley, Dominican, and Peacock Gap experience higher humidity from their proximity to the bay and the surrounding terrain. That moisture promotes mold on refrigerator gaskets and inside front-load washer drums, which is one of the most common calls we get from this area. We know the cleaning techniques and replacement parts that actually fix the problem.',
    'San Rafael\u2019s older neighborhoods, particularly around the downtown core and Gerstle Park, sometimes have undersized 1950s-70s electrical panels that cannot handle modern high-draw appliances. If your new induction range or professional refrigerator keeps tripping breakers, the real problem is usually the circuit, not the appliance. We help you figure out which it is before you spend money on unnecessary repairs.',
    'Every repair comes with our 90-day money-back guarantee, and we are Diamond Certified by American Ratings for consistent customer satisfaction year after year.',
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
  neighborhoods: ['Downtown', 'Terra Linda', 'Sun Valley', 'Dominican', 'Gerstle Park', 'Peacock Gap', 'Glenwood', 'Bret Harte', 'Picnic Valley', 'Lucas Valley', 'Marinwood', 'Santa Venetia'],
  midCtaHeading: 'Ready for Appliance Repair in San Rafael?',
  heroImage: '/images/MarinVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van in Marin County with San Francisco Bay views',
  faqs: [
    {
      question: 'How much does appliance repair cost in San Rafael?',
      answer: 'Our service call fee is $149, which includes full diagnosis and is applied toward the repair if you proceed. Most San Rafael repairs range from $200 to $500 depending on the appliance, brand, and parts needed. Premium brand repairs (Sub-Zero, Viking, Wolf) can run higher due to specialty parts. We always give you an upfront estimate before any work begins.',
    },
    {
      question: 'Do you offer same-day repair in San Rafael?',
      answer: 'Often, yes. We schedule Marin appointments multiple days per week and same-day calls are possible for morning inquiries. The drive from our Cotati shop takes about 30 minutes on 101. Call (707) 664-9702 as early as possible to check today\u2019s schedule.',
    },
    {
      question: 'What appliance brands do you service in San Rafael?',
      answer: 'We are factory-authorized for Sub-Zero, Viking, Wolf, Thermador, Miele, JennAir, KitchenAid, Bosch, Whirlpool, GE, Samsung, LG, Maytag, Frigidaire, and most other major brands. We understand Marin kitchens often have premium built-in appliances, and we carry genuine OEM parts for the repairs they need.',
    },
    {
      question: 'Do you service my San Rafael neighborhood?',
      answer: 'Yes. We service all San Rafael neighborhoods including Downtown, Terra Linda, Sun Valley, Dominican, Gerstle Park, Peacock Gap, Glenwood, Bret Harte, Lucas Valley, Marinwood, and Santa Venetia. We also cover nearby San Anselmo, Novato, Larkspur, Corte Madera, and Mill Valley.',
    },
    {
      question: 'Why does my front-load washer smell in my San Rafael home?',
      answer: 'Marin\u2019s higher humidity, especially in hillside and bayside neighborhoods, promotes mildew and mold growth in the rubber door gasket, drum, and detergent dispenser of front-load washers. Regular cleaning of the gasket and running a monthly hot wash with a washer cleaner helps. If the smell persists, the gasket or internal components may need replacement.',
    },
    {
      question: 'Are you licensed and insured in Marin County?',
      answer: 'Yes. Kelly\u2019s Appliance Center has been operating since 1975, we are fully licensed, insured, Diamond Certified by American Ratings, and factory-authorized for most major appliance brands. Every repair comes with our 90-day money-back guarantee regardless of where you live in our service area.',
    },
  ],
}

const sanAnselmo: CityContent = {
  slug: 'san-anselmo',
  name: 'San Anselmo',
  metaTitle: 'Appliance Repair San Anselmo - Refrigerator, Oven, Washer & Dryer Service',
  metaDescription:
    'Factory-authorized appliance repair in San Anselmo, CA. Serving Downtown, Sleepy Hollow, and Seminary area since 1975. 90-day guarantee. Call (707) 664-9702.',
  heroSubtitle:
    'Professional appliance repair for San Anselmo homes. Factory-authorized service with a 90-day money-back guarantee.',

  trustHeading: 'Why San Anselmo Residents Trust Kelly\u2019s',
  trustContent: [
    'San Anselmo is one of Marin County\u2019s most charming small towns, and we have been servicing homes here since 1975. From the cozy bungalows along San Anselmo Avenue to the hillside estates in Sleepy Hollow, we know the appliance mix well.',
    'Our drive from Cotati to San Anselmo takes about 35 minutes via 101 and Sir Francis Drake Boulevard. We schedule Marin appointments multiple days a week, and same-day availability is often possible.',
    'San Anselmo kitchens often feature a blend of vintage charm and modern upgrades. Whether it\u2019s a classic range in a 1920s Craftsman or a new built-in refrigerator in a remodeled kitchen, our factory authorizations cover every major brand.',
  ],

  localHighlights:
    'Known for its independent shops and restaurants along San Anselmo Avenue, Creek Park strolls, and the leafy neighborhoods of Sleepy Hollow, San Anselmo has a welcoming small-town character. We keep your kitchen and laundry running so you can enjoy everything this community has to offer.',
  topEats: ['Insalata\u2019s', 'Cucina Restaurant', 'Comforts'],
  communityLink: { label: 'San Anselmo Chamber of Commerce', href: 'https://www.sananselmochamber.org/' },

  issuesHeading: 'Common Appliance Issues in San Anselmo',
  issuesContent: [
    'Many San Anselmo homes date to the 1920s through 1960s and have older electrical panels that may not fully support modern high-draw appliances. If your appliance trips breakers frequently, the issue may be circuit capacity rather than the machine itself.',
    'The shaded, tree-lined neighborhoods in areas like Sleepy Hollow can experience higher humidity, which promotes mold on refrigerator gaskets and inside front-load washers. Regular gasket cleaning and leaving washer doors ajar between loads prevents odor and seal damage.',
  ],

  localExpertsText: 'About 35 minutes south from our Cotati shop via 101 and Sir Francis Drake.',
  neighborhoods: ['Downtown', 'Sleepy Hollow', 'Seminary', 'San Anselmo Ave Corridor', 'Robson-Harrington Park area'],
  midCtaHeading: 'Ready for Appliance Repair in San Anselmo?',
  heroImage: '/images/MarinVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van in Marin County serving San Anselmo',
  faqs: buildStandardFaqs('San Anselmo', {
    driveTime: 'about 35 minutes south from Cotati via 101 and Sir Francis Drake',
    localIssue: {
      question: 'Does San Anselmo\u2019s shaded neighborhoods cause more appliance mold?',
      answer: 'Yes. Tree-lined neighborhoods like Sleepy Hollow hold more humidity, which promotes mold growth on refrigerator door gaskets and inside front-load washers. Regular gasket cleaning and leaving washer doors ajar between loads prevents odor and seal damage. We also replace gaskets when the mold has gone beyond cleaning.',
    },
  }),
}

const novato: CityContent = {
  slug: 'novato',
  name: 'Novato',
  metaTitle: 'Appliance Repair Novato | Diamond Certified | Kelly\'s',
  metaDescription:
    'Novato\'s highest-rated appliance repair team. Downtown, Hamilton, Bel Marin Keys, and all surrounding areas. Family-owned since 1975 with a 90-day money-back guarantee.',
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
  neighborhoods: ['Downtown', 'Hamilton', 'Bel Marin Keys', 'Indian Valley', 'Ignacio', 'Pointe Marin', 'Black Point'],
  midCtaHeading: 'Need Appliance Repair in Novato?',
  heroImage: '/images/MarinVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van in Marin County with San Francisco Bay views',
  faqs: buildStandardFaqs('Novato', {
    driveTime: 'about 20 minutes south on 101. We are in Novato multiple times a week',
    localIssue: {
      question: 'My appliance in Bel Marin Keys keeps getting damp. Why?',
      answer: 'Bel Marin Keys sits near sea level where humidity and occasional flood risk create a tough environment for appliances. Elevated washer and dryer installations, good ventilation, and dehumidifiers in laundry areas all help protect your appliances. We also know which parts fail first in these coastal-flat conditions.',
    },
  }),
}

const millValley: CityContent = {
  slug: 'mill-valley',
  name: 'Mill Valley',
  metaTitle: 'Appliance Repair Mill Valley | Marin County | Kelly\'s',
  metaDescription:
    'Mill Valley families trust Kelly\'s for every appliance repair. Tam Valley, Strawberry, and downtown. Diamond Certified, family-owned since 1975, 90-day guarantee.',
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
  neighborhoods: ['Downtown', 'Tam Valley', 'Strawberry', 'Alto', 'Homestead Valley', 'Scott Valley', 'Cascade Canyon'],
  midCtaHeading: 'Need Appliance Repair in Mill Valley?',
  heroImage: '/images/MarinVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van in Marin County with San Francisco Bay views',
  faqs: buildStandardFaqs('Mill Valley', {
    driveTime: 'about 40 minutes from Cotati. We group south Marin appointments for consistent availability',
    localIssue: {
      question: 'Do you service Mill Valley hillside and canyon homes with tough access?',
      answer: 'Yes. Many Mill Valley homes have steep driveways, tight utility closets, or custom cabinetry installations that require extra care. Our technicians bring the right tools and experience for these challenging setups, and we factor the canyon microclimate (cooler, more humid) into our diagnostics.',
    },
  }),
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
  neighborhoods: ['Downtown', 'Caledonia', 'Marinship', 'Floating homes', 'Old Town', 'Banana Belt'],
  midCtaHeading: 'Need Appliance Repair in Sausalito?',
  heroImage: '/images/MarinVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van in Marin County with San Francisco Bay views',
  faqs: buildStandardFaqs('Sausalito', {
    driveTime: 'about 45 minutes from Cotati on our regular south Marin route',
    localIssue: {
      question: 'Do you repair appliances in Sausalito\u2019s floating homes?',
      answer: 'Yes. Floating homes often have compact or European-style appliances with unique part requirements. Our factory authorizations cover brands like Bosch, Miele, and Fisher & Paykel that are common in smaller waterfront spaces. We also account for salt-air exposure in every coastal diagnosis.',
    },
  }),
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
  neighborhoods: ['Downtown', 'Belvedere', 'Paradise Drive', 'Reed Heights', 'Strawberry Point', 'Hawthorne Terrace'],
  midCtaHeading: 'Need Appliance Repair in Tiburon?',
  heroImage: '/images/MarinVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van in Marin County with San Francisco Bay views',
  faqs: buildStandardFaqs('Tiburon', {
    driveTime: 'about 45 minutes from Cotati on our regular south Marin schedule',
    localIssue: {
      question: 'Do you repair Sub-Zero and Wolf in Tiburon and Belvedere waterfront homes?',
      answer: 'Yes. We are factory-authorized for Sub-Zero, Wolf, Viking, Dacor, Thermador, and Miele, which are common in Tiburon and Belvedere estates. We also factor salt-air exposure into every diagnosis, since waterfront homes see accelerated corrosion on coils and connections.',
    },
  }),
}

const corteMadera: CityContent = {
  slug: 'corte-madera',
  name: 'Corte Madera',
  metaTitle: 'Appliance Repair Corte Madera | Diamond Certified | Kelly\'s',
  metaDescription:
    'Trusted by Corte Madera families for 50+ years. Refrigerator, washer, dryer, and oven repair with a 90-day guarantee. The Village, Christmas Tree Hill, and all nearby neighborhoods.',
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
  communityLink: { label: 'Corte Madera Chamber of Commerce', href: 'https://cortemadera.org/' },

  issuesHeading: 'Common Appliance Issues in Corte Madera',
  issuesContent: [
    'Corte Madera\u2019s proximity to the bay means some neighborhoods experience slightly higher humidity. Front-load washers in these areas are more prone to gasket mold and odor if the door is kept closed between washes.',
    'Homes on Christmas Tree Hill often have older electrical systems. Modern appliances with digital controls can behave unpredictably on these circuits. We can help determine if the appliance or the wiring needs attention.',
  ],

  localExpertsText: 'About 35 minutes from Cotati. Part of our regular central Marin route.',
  neighborhoods: ['The Village area', 'Christmas Tree Hill', 'Madera Gardens', 'Mariner Cove', 'Chapman Park', 'Mariner Green'],
  midCtaHeading: 'Need Appliance Repair in Corte Madera?',
  heroImage: '/images/MarinVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van in Marin County with San Francisco Bay views',
  faqs: buildStandardFaqs('Corte Madera', {
    driveTime: 'about 35 minutes from Cotati on our regular central Marin route',
    localIssue: {
      question: 'Why is my front-load washer getting musty in Corte Madera?',
      answer: 'Corte Madera\u2019s proximity to the bay means slightly higher humidity in many neighborhoods. Front-loaders are particularly prone to gasket mold and odor if the door is kept closed between washes. Leave the door ajar, run a monthly hot-water cleaning cycle with vinegar or a washer cleaner, and wipe the gasket dry. If the smell persists, the gasket may need replacement.',
    },
  }),
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
  neighborhoods: ['Downtown Larkspur', 'Greenbrae', 'Kentfield', 'Murray Park', 'Madrone Park', 'Baltimore Canyon'],
  midCtaHeading: 'Need Appliance Repair in Larkspur?',
  heroImage: '/images/MarinVan.jpg',
  heroImageAlt: 'Kelly\'s Appliance service van in Marin County with San Francisco Bay views',
  faqs: buildStandardFaqs('Larkspur', {
    driveTime: 'about 35 minutes from Cotati on our regular central Marin schedule',
    localIssue: {
      question: 'My dryer is taking extra-long to dry in my Greenbrae home. Why?',
      answer: 'Many Greenbrae and Kentfield homes built in the 1950s and 1960s have compact utility spaces that restrict dryer airflow. If your dryer is taking extra-long cycles, check the vent path first \u2014 look for kinks, lint buildup, or crushing behind the dryer. Clean the lint trap after every load and have the vent line professionally cleaned annually. If the issue persists, the heating element or thermal fuse may need replacement.',
    },
  }),
}

// ---------------------------------------------------------------------------
// Napa County
// ---------------------------------------------------------------------------

const napa: CityContent = {
  slug: 'napa',
  name: 'Napa',
  metaTitle: 'Napa Appliance Repair \u2014 Factory Authorized Since 1975',
  metaDescription:
    '50 years of factory-authorized appliance repair for Napa Valley homes. Sub-Zero, Viking, Wolf, Thermador, and every major brand. Diamond Certified, 90-day guarantee. Call (707) 664-9702 or book online.',
  heroSubtitle:
    'Professional appliance repair for Napa homes and vineyard properties. Factory-authorized with a 90-day money-back guarantee.',

  trustHeading: 'Why Napa Residents Trust Kelly\u2019s',
  trustContent: [
    'Napa kitchens are built for entertaining, and many homes feature commercial-grade appliances from brands like Viking, Wolf, Sub-Zero, Thermador, and Miele. Our factory authorizations ensure these premium investments get proper expert care with genuine OEM parts.',
    'We cross the county line from Cotati to Napa in about 30 minutes, and we schedule Napa visits multiple days a week. Whether your call comes from Downtown, Browns Valley, the Silverado Trail, or the vineyards toward Yountville, we bring the same reliable, guaranteed service.',
    'Napa Valley\u2019s groundwater is notoriously hard, with high calcium and mineral content. This takes a serious toll on dishwashers, ice makers, water filters, and washing machine valves over time. Homes on well water are especially affected. We see the pattern constantly and know how to fix it.',
    'Wine-lifestyle kitchens with professional ranges, multiple refrigerators, and built-in wine coolers put heavy demands on home electrical systems. If your breaker trips when two large appliances run simultaneously, the issue may be circuit capacity rather than the appliance itself. We help you figure out which it is.',
    'Many Napa properties are second homes, vacation rentals, or host guests regularly. A broken appliance before a dinner party or a rental turnover can mean lost revenue. We understand the urgency and work to get you back online fast.',
    'Every repair comes with our 90-day money-back guarantee, and we are Diamond Certified for consistent quality across every Napa address we visit.',
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
  neighborhoods: ['Downtown', 'Browns Valley', 'Silverado', 'Old Town', 'Westwood', 'Alta Heights', 'Bel Aire Park', 'Linda Vista', 'Trancas Crossing', 'Napa Valley'],
  midCtaHeading: 'Need Appliance Repair in Napa Valley?',
  heroImage: '/images/SonomaVan2.jpg',
  heroImageAlt: 'Kelly\'s Appliance service vans in wine country, serving Napa Valley',
  faqs: [
    {
      question: 'How much does appliance repair cost in Napa?',
      answer: 'Our service call fee is $149, which includes full diagnosis and is applied toward the repair if you proceed. Standard Napa repairs range from $200 to $500, while premium brand work on Sub-Zero, Viking, Wolf, or Thermador can run higher due to specialty parts. We always provide an upfront estimate before any work begins.',
    },
    {
      question: 'Do you repair Sub-Zero, Viking, and Wolf in Napa?',
      answer: 'Yes. We are factory-authorized for Sub-Zero, Viking, Wolf, Thermador, Miele, and most other premium brands common in Napa Valley kitchens. Our technicians are trained on these specific models and we stock or can quickly order the genuine OEM parts they require.',
    },
    {
      question: 'Do you offer same-day repair in Napa?',
      answer: 'Often, yes. We schedule Napa visits multiple days per week and same-day calls are possible, especially for urgent refrigerator, ice maker, or wine cooler issues. The drive from Cotati takes about 30 minutes across the county line. Call (707) 664-9702 to check availability.',
    },
    {
      question: 'Why does my dishwasher keep getting clogged in Napa?',
      answer: 'Napa Valley\u2019s groundwater is extremely hard with high calcium and mineral content. Mineral deposits build up inside dishwasher spray arms, drain pumps, and water inlet valves faster than in most other areas. Homes on well water are especially affected. Regular cleaning and part replacement prevents most issues, and we know exactly which parts fail most often on which brands.',
    },
    {
      question: 'Do you service my Napa neighborhood?',
      answer: 'Yes. We service all Napa neighborhoods including Downtown, Browns Valley, Silverado, Old Town, Westwood, Alta Heights, Bel Aire Park, Linda Vista, and the vineyard properties along the Silverado Trail. If you\u2019re in the greater Napa Valley, we cover you.',
    },
    {
      question: 'Can you repair appliances in my Napa vacation rental fast?',
      answer: 'Yes, and we understand the urgency. Many Napa properties are second homes, vacation rentals, or event venues. We prioritize calls where a broken appliance could mean lost bookings or ruined plans. Let us know the situation when you call and we\u2019ll do our best to get someone out quickly.',
    },
  ],
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
  'san-anselmo': sanAnselmo,
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
