# Enhanced Team Member Modal - Design Preview

## Visual Layout Reference

```
┌─────────────────────────────────────────────────────────────────┐
│                    [COLORED GRADIENT HEADER]                    │
│  ┌────────┐                                                     │
│  │        │   Name: Large Bold 3xl                              │
│  │ Photo  │   Role: Light text                                  │
│  │ 132px  │   [40+ Years Experience] ← Badge (if provided)     │
│  │        │                                                     │
│  └────────┘                                                     │
└─────────────────────────────────────────────────────────────────┘
│                        WHITE CONTENT AREA                       │
│                                                                 │
│  About                                                          │
│  ─────                                                          │
│  Full bio text here... (150-250 words recommended)             │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │ "Quote or professional philosophy here..." (if provided)  │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│  ┌─────────────────────┐  ┌─────────────────────────────────┐ │
│  │ SPECIALTIES         │  │ CERTIFICATIONS                  │ │
│  │ • Item 1            │  │ ✓ Cert 1                        │ │
│  │ • Item 2            │  │ ✓ Cert 2                        │ │
│  │ • Item 3            │  │ ✓ Cert 3                        │ │
│  └─────────────────────┘  └─────────────────────────────────┘ │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │ Favorite Appliance: [Answer]                              │ │
│  │ Fun Fact: [Answer]                                        │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
│                                       [Close Button]            │
└─────────────────────────────────────────────────────────────────┘
```

---

## Color Schemes by Role

### Owner (Amber/Gold Theme)
```
Header: Amber gradient background (#d97706 → #b45309)
Icon: Crown 👑
Badge: White text on amber/20 background
```

### Technician (Emerald/Green Theme)
```
Header: Emerald gradient background (#047857 → #065f46)
Icon: Wrench 🔧
Badge: White text on emerald/20 background
```

### Office Staff (Sky/Blue Theme)
```
Header: Sky gradient background (#0369a1 → #075985)
Icon: Sparkles ✨
Badge: White text on sky/20 background
```

---

## Section Details

### 1. Header Section
- **Full width colored gradient** matching role type
- **Large profile photo** (132x132px) with white ring border
- **Name** in 3xl bold white text
- **Role** in large white text with slight transparency
- **Experience badge** (optional) - rounded pill shape

### 2. About Section
- **"About" heading** in bold
- **Bio text** in comfortable reading size
- Gray color (#374151) for good readability

### 3. Quote Section (Optional)
- **Green-tinted background** (#f0fdf4)
- **Green left border** (4px solid #059669)
- **Italic text** for emphasis
- Includes quotation marks

### 4. Two-Column Details
**Left Column - Specialties:**
- Uppercase small heading
- Bullet points (•) in green
- List format

**Right Column - Certifications:**
- Uppercase small heading
- Checkmarks (✓) in green
- List format

### 5. Fun Details Section (Optional)
- **Light gray background** (#f9fafb)
- **Bold labels** with regular text
- "Favorite Appliance:" and "Fun Fact:"

### 6. Coming Soon Placeholder
- **Only shows if no extended data provided**
- Blue-tinted box (#eff6ff)
- Friendly message indicating more info will be added
- Uses person's first name

### 7. Footer
- Light gray background
- Green "Close" button aligned right

---

## Responsive Behavior

### Desktop (1024px+)
- Modal: 672px wide (max-w-2xl)
- Two-column layout for Specialties/Certifications
- Photo: 132x132px

### Tablet (768px - 1023px)
- Modal: ~90% viewport width
- Stacked single-column layout
- Photo: 132x132px

### Mobile (<768px)
- Modal: Full width with padding
- All sections stacked
- Photo: 132x132px

---

## Content Guidelines

### Bio Length
- **Recommended:** 150-250 words
- **Minimum:** 50 words
- **Maximum:** 400 words (starts to look cramped)

### Specialties List
- **Recommended:** 3-6 items
- **Format:** Short phrases or keywords
- **Example:** "High-end refrigerator diagnostics"

### Certifications List
- **Recommended:** 2-5 items
- **Format:** Official certification names
- **Example:** "EPA Universal Refrigerant Certification"

### Quote
- **Recommended:** 1-2 sentences
- **Length:** 15-40 words
- **Tone:** Professional but personal

### Fun Details
- **Favorite Appliance:** 5-15 words
- **Fun Fact:** 10-25 words
- **Tone:** Friendly and personable

---

## State Variations

### Complete Profile (All Fields)
Shows all sections:
- Header with badge
- About
- Quote (highlighted)
- Specialties & Certifications (two columns)
- Fun Details
- Close button

### Partial Profile (Some Fields)
Shows only provided sections:
- Header (may or may not have badge)
- About
- Any optional sections that are filled in
- Close button

### Minimal Profile (Basic Only)
Shows:
- Header (no badge)
- About
- **"Coming Soon" placeholder** in blue box
- Close button

---

## Animation & Interaction

### Opening Animation
- Fade in background overlay (200ms)
- Scale in modal from 95% to 100% (200ms)
- Smooth ease-out timing

### Closing Animation
- Scale out modal from 100% to 95% (150ms)
- Fade out background (150ms)
- Smooth ease-in timing

### Hover States
- Close button darkens on hover
- Smooth 200ms transition

---

## Accessibility Features

- **Keyboard navigation** supported
- **Escape key** closes modal
- **Focus trap** keeps focus within modal
- **ARIA labels** for screen readers
- **Semantic HTML** structure

---

## Example Usage Scenarios

### Scenario 1: New Technician (Minimal Data)
```typescript
{
  name: 'New Tech',
  role: 'Service Technician',
  image: '/images/new-tech.jpg',
  bio: 'Recently joined our team and learning the ropes!'
}
```
**Result:** Shows basic modal with "Coming Soon" placeholder

### Scenario 2: Established Tech (Partial Data)
```typescript
{
  name: 'Joe Denning',
  role: 'Service Technician',
  image: '/images/joe.jpg',
  bio: 'Long bio text here...',
  yearsExperience: 12,
  specialties: ['Washers', 'Dryers', 'Stackable units']
}
```
**Result:** Shows badge, bio, and specialties. No certifications/fun details sections.

### Scenario 3: Featured Tech (Complete Profile)
```typescript
{
  name: 'Mark Kelly',
  role: 'Owner',
  image: '/images/mark.jpg',
  bio: 'Complete bio...',
  yearsExperience: 40,
  specialties: [...],
  certifications: [...],
  quote: '...',
  favoriteAppliance: '...',
  funFact: '...'
}
```
**Result:** Full featured modal with all sections

---

## Technical Implementation

**Files:**
- `src/app/about-us/our-team/TeamGrid.tsx` - Modal component
- `src/app/about-us/our-team/page.tsx` - Team member data

**Dependencies:**
- `@headlessui/react` - Dialog/Modal component
- `next/image` - Optimized images
- `lucide-react` - Crown icon
- `@heroicons/react` - Other icons

**Styling:**
- Tailwind CSS utility classes
- Custom color gradients per role
- Responsive breakpoints

---

**Created:** January 4, 2025  
**For:** Kelly's Appliance Center Team Page
