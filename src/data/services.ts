export interface ServiceItem {
  name: string
  slug: string
  href: string
  icon: string
  shortDescription: string
}

export const services: ServiceItem[] = [
  {
    name: 'Refrigerator Repair',
    slug: 'refrigerator-repair',
    href: '/services/refrigerator-repair',
    icon: '\u{1F9CA}',
    shortDescription: 'Cooling issues, ice makers, leaks, and temperature problems',
  },
  {
    name: 'Oven & Range Repair',
    slug: 'oven-repair',
    href: '/services/oven-repair',
    icon: '\u{1F525}',
    shortDescription: 'Heating elements, igniters, temperature calibration, and more',
  },
  {
    name: 'Washer & Dryer Repair',
    slug: 'washer-dryer-repair',
    href: '/services/washer-dryer-repair',
    icon: '\u{1F30A}',
    shortDescription: 'Spin cycle, drainage, fill valve, and agitator issues',
  },
  {
    name: 'Dryer Repair',
    slug: 'dryer-repair',
    href: '/services/dryer-repair',
    icon: '\u{1F32C}\u{FE0F}',
    shortDescription: 'Heating, tumbling, venting, and timer problems',
  },
  {
    name: 'Dishwasher Repair',
    slug: 'dishwasher-repair',
    href: '/services/dishwasher-repair',
    icon: '\u{1F37D}\u{FE0F}',
    shortDescription: 'Spray arms, drainage, leaks, and cleaning performance',
  },
]
