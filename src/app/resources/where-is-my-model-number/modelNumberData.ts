export type ApplianceSection = {
  subtitle: string
  locations: string[]
}

export type ApplianceGuide = {
  id: string
  title: string
  sections: ApplianceSection[]
  brandNotes?: string
}

export const appliances: ApplianceGuide[] = [
  {
    id: 'refrigerator',
    title: 'Refrigerators',
    sections: [
      {
        subtitle: 'Standard Top-Freezer Models',
        locations: [
          'Inside fresh food compartment - Upper left or right side wall (most common)',
          'Behind or under crisper drawers',
          'On the ceiling of fresh food compartment',
        ],
      },
      {
        subtitle: 'French Door & Side-by-Side Models',
        locations: [
          'Inside fresh food compartment - Upper right side wall (most common)',
          'Behind crisper drawers',
          'Under crisper drawers',
          'On door frame/gasket edge',
        ],
      },
      {
        subtitle: 'Additional Locations',
        locations: [
          'Behind the toe kick/grille at bottom (remove screws)',
          'Back exterior wall (requires moving unit)',
          'Inside freezer section on side wall',
        ],
      },
    ],
    brandNotes:
      'Samsung: Lower left exterior + inside right wall above top shelf | LG: Older models on right side, newer on left | Sub-Zero: Inside door near top hinge | GE: Bottom floor or behind crisper drawers',
  },
  {
    id: 'range',
    title: 'Ranges & Ovens',
    sections: [
      {
        subtitle: 'Freestanding Ranges',
        locations: [
          'Behind oven door - Front frame at lower left edge (most common)',
          'Storage drawer area - Remove drawer, look on frame',
          'Under cooktop - Lift cooktop on electric models',
          'Standard ranges: Metal tag behind control panel that can be turned up',
        ],
      },
      {
        subtitle: 'Wall Ovens',
        locations: [
          'Inside oven on front frame at lower-left edge (door open)',
          'Behind control panel (some models)',
          'On left side trim when door open',
        ],
      },
      {
        subtitle: 'Professional Ranges (Wolf, Viking, Thermador)',
        locations: [
          'Wolf: Bottom of control panel at far right; under left-hand burner pan (R-Series)',
          'Viking: Remove left rear burner bowl, look with flashlight; open oven door frame',
          'Thermador: Behind oven door on lower frame',
          'BlueStar: Inside oven on left door frame',
        ],
      },
    ],
    brandNotes:
      'Professional ranges often require lifting burner pans or removing parts. Always use caution when accessing.',
  },
  {
    id: 'dishwasher',
    title: 'Dishwashers',
    sections: [
      {
        subtitle: 'Most Common Locations',
        locations: [
          'Door edge - Left or right side of door frame (most common)',
          'Inside door - Along interior side/top',
          'Right side of tub - Inside on right wall',
          'Top of door opening - On tub frame',
          'Under control panel - Beneath controls',
        ],
      },
    ],
    brandNotes:
      'Bosch/Siemens: Left door side (E-Nr) | Miele: Door frame (starts with letter) | LG: Right door or under control panel | Cove: Inside left side',
  },
  {
    id: 'washer',
    title: 'Washing Machines',
    sections: [
      {
        subtitle: 'Front-Load Washers',
        locations: [
          'Inside door pocket - On rim around door gasket (most common)',
          'Door frame - Visible when door fully open',
          'Behind door - On wash compartment face',
          'Exterior sides - Near bottom',
        ],
      },
      {
        subtitle: 'Top-Load Washers',
        locations: [
          'Under the lid - On back of tub opening (most common)',
          'Under the lid - On frame near back',
          'Inside lid - Sticker on underside',
          'Back exterior - Rear panel',
        ],
      },
    ],
    brandNotes: 'Whirlpool front-load: Inside door pocket | Samsung/LG: Front door or back panel',
  },
  {
    id: 'dryer',
    title: 'Dryers',
    sections: [
      {
        subtitle: 'All Dryer Types',
        locations: [
          'Door opening area - Top edge or front frame (most common)',
          'Inside door frame - On rim when open',
          'Behind door - On panel around drum opening',
          'Rear panel - Back of unit',
          'Side panels - Left or right exterior',
        ],
      },
    ],
    brandNotes: 'LG/Samsung: Front panel or rear | Whirlpool/Maytag: Door opening rim or behind door',
  },
  {
    id: 'microwave',
    title: 'Microwaves',
    sections: [
      {
        subtitle: 'Countertop & Over-the-Range',
        locations: [
          'Left interior wall - Inside microwave (most common)',
          'Right interior wall - Some models',
          'Under the vent - Remove vent cover below controls (OTR)',
          'Behind door - Door frame area',
          'Bottom exterior - Underside near back (OTR)',
        ],
      },
    ],
    brandNotes: 'Most brands place tag on left interior wall. OTR models may have tag under vent cover.',
  },
  {
    id: 'cooktop',
    title: 'Cooktops',
    sections: [
      {
        subtitle: 'Built-In Cooktops',
        locations: [
          'Underneath the cooktop - Requires lifting unit or access from below',
          'On underside of burner box',
          'Side or back edge of unit',
        ],
      },
    ],
    brandNotes: 'May require partial removal from countertop. Professional brands often have unique locations.',
  },
]


