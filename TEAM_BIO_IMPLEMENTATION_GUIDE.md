# Team Member Bio System - Implementation Guide

## What Was Changed

### 1. **Dishwasher Repair Page Title** ✅
Changed from "Sonoma County & Novato" to "Sonoma, Marin and Napa County"

**File:** `src/app/services/dishwasher-repair/page.tsx` (line 169)

---

### 2. **Enhanced Team Member Modal** ✅

#### New Features:
- **Larger, more professional modal** (max-width: 2xl)
- **Colored gradient header** matching role type (Owner=Amber, Technician=Emerald, Office=Sky)
- **Years of experience badge** displayed prominently
- **Quote/Philosophy section** with attractive styling
- **Two-column layout** for Specialties and Certifications
- **Fun details section** (Favorite Appliance, Fun Fact)
- **"Coming Soon" placeholder** for team members without extended data
- **Button text changed** from "About the Tech" to "Learn More"

#### New Data Fields:
```typescript
{
  name: string                    // Required
  role: string                    // Required
  image: string                   // Required
  bio: string                     // Required - SHORT bio for card (2-3 sentences)
  bioFull?: string                // Optional - Full bio for modal (falls back to bio)
  yearsExperience?: number        // Optional - Shows badge if present
  yearsOfService?: number         // Optional - Years with Kelly's (shows service badge)
  specialties?: string[]          // Optional - List of expertise areas
  certifications?: string[]       // Optional - Professional certs
  favoriteAppliance?: string      // Optional - Fun personal detail
  funFact?: string               // Optional - Personal touch
  quote?: string                 // Optional - Professional philosophy
}
```

**Files Modified:**
- `src/app/about-us/our-team/TeamGrid.tsx` - Enhanced modal design
- `src/app/about-us/our-team/page.tsx` - Updated Mark Kelly as example

---

### 3. **Technician Bio Template** ✅
Created a comprehensive template for technicians to fill out.

**File:** `TECHNICIAN_BIO_TEMPLATE.md`

---

## How to Add/Update Team Member Info

### Step 1: Collect Information from Technician
Print or email the **TECHNICIAN_BIO_TEMPLATE.md** to the team member.

### Step 2: Update the Team Member Data
Open `src/app/about-us/our-team/page.tsx` and find the `teamMembers` array.

### Example - Complete Profile:
```typescript
{
  name: 'Shane Spencer',
  role: 'Tech Service Manager',
  image: '/images/Shane-3.jpg',
  bio: 'Ten years with Kelly\'s Appliance, started as a technician and worked my way up to Tech Service Manager. I support our amazing customers and provide rapid technical support to field technicians.',
  bioFull: 'I\'ve been with Kelly\'s Appliance for ten years, started as a technician, and worked my way to a desk, talking to our wonderful customers and helping technicians with rapid support! I could never imagine working for anybody else! I wish I could say I come from a background of tinkering with machines, but that\'s not the case! I did have a great passion for computers though...',
  yearsExperience: 10,
  yearsOfService: 10,
  specialties: [
    'Premium residential appliances (Sub-Zero, Wolf, DCS, Fisher & Paykel, KitchenAid)',
    'Component-based control board repair',
    'Wiring schematics & troubleshooting best practices'
  ],
  certifications: [
    'Appliantology Master Samurai Tech'
  ],
  quote: 'Honesty above all else, this is my community and I intend to offer the best service possible here for years to come.',
  favoriteAppliance: 'Electric ovens/dryers - 240V makes the journey much more fun!',
  funFact: 'Playing D&D for 20+ years, owned by 5 cats, builds websites & software for fun!'
}
```

### Example - Minimal Profile (Still Works!):
```typescript
{
  name: 'Joe Denning',
  role: 'Service Technician',
  image: '/images/Joe-23-scaled.jpg',
  bio: 'Skilled service technician with expertise in washer and dryer repair services.'
}
```
*Note: This will show the "Coming Soon" placeholder in the modal.*

---

## Modal Design Features

### Color Coding by Role:
- **Owner** - Amber/Gold theme with Crown icon
- **Technician** - Emerald/Green theme with Wrench icon
- **Office Staff** - Sky/Blue theme with Sparkles icon

### Sections in Modal:

1. **Header** (Gradient background)
   - Large profile photo (132x132px)
   - Name and role
   - Years of experience badge (if provided)

2. **About Section**
   - Full bio text with good readability

3. **Quote Section** (if provided)
   - Green highlighted box with italic text

4. **Specialties & Certifications** (if provided)
   - Two-column grid layout
   - Bulleted lists with icons

5. **Fun Details** (if provided)
   - Gray box with favorite appliance and fun fact

6. **Coming Soon Placeholder** (if no extended data)
   - Blue info box indicating more details will be added

---

## Quick Update Guide

### For Office Staff:

1. **Get completed template** from technician
2. **Open** `src/app/about-us/our-team/page.tsx`
3. **Find the team member** in the `teamMembers` array
4. **Add the new fields** following the examples
5. **Save the file**
6. **Run build** to test: `npm run build`
7. **Deploy** changes

### Tips:
- All optional fields can be added gradually
- If a field is missing, the modal gracefully hides that section
- **Keep card `bio` short** - 2-3 sentences max (displays on card)
- **Use `bioFull` for complete story** - 150-250 words (displays in modal)
- If no `bioFull` provided, modal uses `bio` instead
- List 3-6 specialties maximum
- Quotes should be 1-2 sentences
- Modal scrolls if content is long (thin gray scrollbar)

---

## Testing the Changes

After updating a team member profile:

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Start dev server:**
   ```bash
   npm run dev
   ```

3. **Navigate to:** http://localhost:3000/about-us/our-team

4. **Click "Learn More"** on the updated team member card

5. **Verify:** All new information displays correctly

---

## Future Enhancements (Ideas)

- [ ] Add "Service Area" field (specific cities they cover)
- [ ] Add "Languages Spoken" field
- [ ] Add "Join Date" field
- [ ] Add photo gallery for before/after repairs
- [ ] Add customer testimonials specific to each tech
- [ ] Add "Typical Day" video or description
- [ ] Integration with scheduling system to show availability

---

## Need Help?

**Questions about:**
- **Technical implementation** - Contact your web developer
- **Content updates** - Contact Kendra (Office Manager)
- **Design changes** - Contact your web developer

---

## Example: Converting a Current Team Member

### Before (Current):
```typescript
{
  name: 'Shane Spencer',
  role: 'Tech Service Manager',
  image: '/images/Shane-23-scaled.jpg',
  bio: 'Experienced leader and technician specializing in all major appliance brands and models.'
}
```

### After (Enhanced):
```typescript
{
  name: 'Shane Spencer',
  role: 'Tech Service Manager',
  image: '/images/Shane-23-scaled.jpg',
  bio: 'Shane has been with Kelly\'s Appliance Center since 2015, bringing over 18 years of appliance repair experience to the team. As Tech Service Manager, he leads our field technicians and ensures every repair meets our high standards. Shane\'s expertise spans all major brands and his diagnostic skills are second to none.',
  yearsExperience: 18,
  specialties: [
    'Team leadership & training',
    'Complex diagnostic troubleshooting',
    'High-end appliance repair',
    'Commercial appliance service',
    'Warranty claim management'
  ],
  certifications: [
    'Factory Authorized Service - Multiple Brands',
    'EPA Universal Refrigerant Certification',
    'Advanced Appliance Diagnostics Certification'
  ],
  quote: 'The best repairs are the ones where customers understand what went wrong and how to prevent it from happening again.',
  favoriteAppliance: 'Sub-Zero refrigerators - they\'re built like tanks and incredibly satisfying to repair!',
  funFact: 'Former marine mechanic who switched to appliances because "they don\'t sink!"'
}
```

---

**Last Updated:** January 4, 2025  
**Version:** 1.0
