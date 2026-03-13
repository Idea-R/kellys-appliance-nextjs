export const APPLIANCE_OPTIONS = [
  'Refrigerator',
  'Washer',
  'Dryer',
  'Dishwasher',
  'Oven / Range',
  'Cooktop',
  'Microwave',
  'Ice Maker',
  'Freezer',
  'Trash Compactor',
  'Garbage Disposal',
  'Other',
] as const

export type ApplianceType = (typeof APPLIANCE_OPTIONS)[number]
