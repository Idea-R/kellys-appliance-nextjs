/**
 * Trusted local referral partners for Kelly's Appliance Center.
 *
 * These are the businesses Kelly's actively recommends across complementary
 * trades (plumbing, electrical, landscaping, appliance installation, backup
 * power, and so on). They surface on the three county service-area pages
 * (Sonoma / Marin / Napa) and on the consolidated /referrals hub.
 *
 * This is the SERVICE-REFERRAL NETWORK, kept separate from the lighter
 * per-city "local favorites" (technicians' favorite eats) that live in
 * cityContent.ts and the TopPicks component.
 *
 * Most partners come from Kelly's networking circles: SoCo Connections,
 * the MRN Referral Network, and the Rohnert Park / Windsor Chambers.
 * Add new partners here and they appear automatically on the matching
 * county pages and the hub. Keep `counties` honest to where a partner
 * actually serves.
 */

export type County = 'Sonoma' | 'Marin' | 'Napa'

export interface ReferralPartner {
  /** Business name as it should display */
  name: string
  /** Destination URL (their site) */
  url: string
  /** Short, human description of what they do and why we recommend them */
  description: string
  /** Trade category label, e.g. "Plumbing & HVAC" */
  category: string
  /** Optional public phone number */
  phone?: string
  /** Optional logo/photo path relative to /public */
  logoSrc?: string
  /** Cities / regions they serve, shown as a small "Serves:" line */
  serviceAreas?: string[]
  /** Which county pages this partner should appear on */
  counties: County[]
  /** Featured partners render larger, above the regular grid */
  featured?: boolean
  /**
   * UTM / ref query string appended to the outbound link (without the
   * leading ? or &). Lets us see referral click-throughs in analytics.
   */
  utm?: string
}

/**
 * The live partner roster. Seeded with vetted partners we already work with;
 * expand from the networking groups above as new ones are confirmed.
 */
export const referralPartners: ReferralPartner[] = [
  {
    name: 'TeeVax Home Appliance & Kitchen Center',
    url: 'https://www.teevax.com/',
    description:
      'A Santa Rosa institution since 1949, TeeVax is the local, family-owned stop for buying and installing a new appliance when a repair no longer makes sense. Deep brand selection and honest guidance, with delivery and install across Sonoma and Napa.',
    category: 'New Appliance Sales & Installation',
    phone: '(707) 545-1195',
    serviceAreas: ['Santa Rosa', 'Sonoma County', 'Napa County'],
    counties: ['Sonoma', 'Napa'],
    featured: true,
    utm: 'utm_source=kellys&utm_medium=referral&utm_campaign=partner-network',
  },
  {
    name: 'Martin & Harris Appliances',
    url: 'https://www.martin-harris.com/',
    description:
      'Family-owned and Diamond Certified, serving Marin for over 50 years. The local place to buy and have a new appliance installed when it is time to replace. Top brands like Bosch, GE, KitchenAid, Maytag, and Whirlpool, with delivery throughout Marin County.',
    category: 'New Appliance Sales & Installation',
    phone: '(415) 454-2021',
    serviceAreas: ['San Rafael', 'Marin County'],
    counties: ['Marin'],
    featured: true,
    utm: 'utm_source=kellys&utm_medium=referral&utm_campaign=partner-network',
  },
  {
    name: 'J & C Landscaping Services',
    url: 'https://www.jclandscapingservices.org/',
    description:
      'Family-run landscape maintenance, patios, planter boxes, sod repair, erosion control, and light handyman work across Sonoma County. Reliable crews who show up and do honest work.',
    category: 'Landscaping & Outdoor',
    serviceAreas: ['Santa Rosa', 'Petaluma', 'Rohnert Park', 'Windsor', 'Healdsburg', 'Sebastopol'],
    counties: ['Sonoma'],
    utm: 'utm_source=kellys&utm_medium=referral&utm_campaign=partner-network',
  },
  {
    name: "Prado's Plumbing, Heating and Air",
    url: 'https://pradosplumbinghvac.com/',
    description:
      'Trusted local pros for plumbing and HVAC. Repairs, maintenance, and installs with quality workmanship. A natural partner when an appliance issue turns out to be a water line or a heating and cooling problem.',
    category: 'Plumbing & HVAC',
    counties: ['Sonoma'],
    utm: 'utm_source=kellys&utm_medium=referral&utm_campaign=partner-network',
  },
  {
    name: 'Dryer Vent Wizard',
    url: 'https://dryerventwizard.com/dryer-vent-cleaning',
    description:
      'Residential dryer vent cleaning and repairs that improve safety and efficiency. A clogged vent is one of the most common reasons a dryer runs hot or takes two cycles to dry, so this pairs directly with the work we do.',
    category: 'Dryer Vent Cleaning',
    counties: ['Sonoma', 'Marin', 'Napa'],
    utm: 'utm_source=kellys&utm_medium=referral&utm_campaign=partner-network',
  },
  {
    name: 'California Sunlight Corporation',
    url: 'https://california-sunlight.com/',
    description:
      'Portable solar generators and battery backup systems sized to keep a refrigerator running through a multi-day PSPS shutoff. Founded by Dr. Bing Gu, a trusted partner of Kelly\'s and a smart call before wine-country fire season.',
    category: 'Solar & Backup Power',
    logoSrc: '/images/Referral/BingHeadshot.jpg',
    serviceAreas: ['Sonoma County', 'Napa County', 'Marin County'],
    counties: ['Sonoma', 'Napa', 'Marin'],
    utm: 'utm_source=kellys&utm_medium=referral&utm_campaign=partner-network',
  },
]

/** Append the partner's UTM string to its URL, handling existing query params. */
export function partnerHref(partner: ReferralPartner): string {
  if (!partner.utm) return partner.url
  const sep = partner.url.includes('?') ? '&' : '?'
  return `${partner.url}${sep}${partner.utm}`
}

/** Partners that should appear on a given county service-area page. */
export function getPartnersForCounty(county: County): ReferralPartner[] {
  return referralPartners.filter((p) => p.counties.includes(county))
}
