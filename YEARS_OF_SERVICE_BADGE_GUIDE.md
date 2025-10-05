# Years of Service Badge System - Documentation

## Overview

The Years of Service badge system celebrates team member loyalty and tenure at Kelly's Appliance Center with beautiful, milestone-based badges that appear on team member cards and modals.

---

## Visual Preview

### Badge Tiers & Milestones

```
🏆 LEGEND (30+ years)
   Color: Gold/Amber gradient
   Icon: Trophy
   Stars: ★★★
   Glow: Amber shadow

🥈 PLATINUM (20-29 years)
   Color: Silver/Gray gradient
   Icon: Award
   Stars: ★★
   Glow: Slate shadow

⭐ GOLD (10-19 years)
   Color: Yellow/Amber gradient
   Icon: Star
   Stars: ★★
   Glow: Yellow shadow

✨ EMERALD (5-9 years)
   Color: Green/Emerald gradient
   Icon: Sparkles
   Stars: ★
   Glow: Emerald shadow

💠 BLUE (1-4 years)
   Color: Blue/Sky gradient
   Icon: Sparkles
   Stars: ★
   Glow: Blue shadow
```

---

## Badge Positions

### 1. Corner Badge (Team Cards)
- **Location:** Bottom-right corner of team member photo
- **Size:** Compact pill shape
- **Hover Effect:** Scales up 110%, rotates 3°, shows tooltip
- **Tooltip:** "{X} Years of Service"
- **Animation:** Icon pulses, stars twinkle (for 2+ star tiers)

### 2. Inline Badge (Modal Header)
- **Location:** Below role title in modal header
- **Display:** "{X} Years with Kelly's" text badge
- **Style:** White text on semi-transparent background
- **Purpose:** Shows alongside "Years Experience" badge

---

## Implementation

### Adding Years of Service to a Team Member

**File:** `src/app/about-us/our-team/page.tsx`

```typescript
{
  name: 'Shane Spencer',
  role: 'Tech Service Manager',
  image: '/images/Shane-3.jpg',
  bio: '...',
  yearsExperience: 10,        // Total experience in field
  yearsOfService: 10,         // ← Add this field!
  // ... rest of profile
}
```

**Field Rules:**
- `yearsOfService` is optional
- Must be a positive integer (1+)
- Badge only appears if value is 1 or greater
- Separate from `yearsExperience` (total experience vs. time at Kelly's)

---

## Badge Design Details

### Corner Badge (Card View)

**Structure:**
```
┌────────────────────────┐
│ [Icon] [10 Years] [★★] │  ← Rounded pill
└────────────────────────┘
         ↑
    Animated pulse
```

**Features:**
- **Gradient background** with matching tier color
- **Ring border** (2-4px) with semi-transparent color
- **Drop shadow** with colored glow
- **Icon** animates with pulse
- **Stars** appear for 10+ year tiers, staggered animation
- **Hover tooltip** appears above badge
- **Transform** on hover: scale + rotate for playful effect

### Inline Badge (Modal View)

**Structure:**
```
┌─────────────────────────────────┐
│ "10 Years Experience"           │  ← Semi-transparent
│ "10 Years with Kelly's"         │  ← Semi-transparent
└─────────────────────────────────┘
```

**Purpose:**
- Complements years of experience badge
- Shows time specifically at Kelly's Appliance
- Consistent styling with other header badges

---

## Milestone Tier Breakdown

### 🏆 Legend Tier (30+ years)
**Employees:** Mark Kelly (40+ years)
**Visual Identity:**
- Rich amber/gold gradient (#d97706 → #b45309)
- Trophy icon 🏆
- 3 animated stars ★★★
- Strong amber glow shadow
- 4px ring border
- "Hall of Fame" level achievement

**Message:** Legendary service, foundational team member

---

### 🥈 Platinum Tier (20-29 years)
**Visual Identity:**
- Silver/slate gradient (#cbd5e1 → #94a3b8)
- Award medal icon 🏅
- 2 animated stars ★★
- Subtle slate glow
- 4px ring border

**Message:** Veteran expertise, long-term dedication

---

### ⭐ Gold Tier (10-19 years)
**Employees:** Shane Spencer (10 years)
**Visual Identity:**
- Bright yellow/gold gradient (#facc15 → #eab308)
- Star icon ⭐
- 2 animated stars ★★
- Bright yellow glow
- 4px ring border

**Message:** Established expert, proven track record

---

### ✨ Emerald Tier (5-9 years)
**Visual Identity:**
- Green/emerald gradient (#10b981 → #059669)
- Sparkles icon ✨
- 1 star ★
- Green glow
- 4px ring border

**Message:** Experienced professional, growing expertise

---

### 💠 Blue Tier (1-4 years)
**Visual Identity:**
- Blue/sky gradient (#3b82f6 → #0ea5e9)
- Sparkles icon ✨
- 1 star ★
- Blue glow
- 2px ring border (lighter)

**Message:** Valued team member, building experience

---

## Animation & Interaction Details

### Corner Badge Animations

**On Page Load:**
- Badge fades in with card
- No initial animation (waits for user interaction)

**On Hover (Badge):**
1. Badge scales to 110% over 300ms
2. Badge rotates 3° clockwise
3. Tooltip fades in above badge (200ms delay)
4. All transitions use `ease-out` timing

**Icon Animation:**
- Continuous pulse animation
- 2-second cycle
- Draws attention without being distracting

**Star Animation (10+ years only):**
- Each star pulses independently
- Staggered 200ms delay between stars
- Creates "twinkling" effect

### Tooltip Design

**Position:** Above badge, right-aligned
**Content:** "{X} Years of Service"
**Style:**
- Dark gray background (#111827)
- White text
- Rounded corners
- Small drop shadow
- Pointer arrow pointing down to badge

**Behavior:**
- Only appears on hover
- 200ms fade transition
- `pointer-events: none` (doesn't interfere with clicks)

---

## Usage Examples

### Example 1: Mark Kelly (Legend Tier - 40 years)
```typescript
{
  name: 'Mark Kelly',
  yearsOfService: 40,  // Shows LEGEND badge
  // Badge: Gold with Trophy + 3 stars
}
```

### Example 2: Shane Spencer (Gold Tier - 10 years)
```typescript
{
  name: 'Shane Spencer',
  yearsOfService: 10,  // Shows GOLD badge
  // Badge: Yellow with Star + 2 stars
}
```

### Example 3: New Tech (Blue Tier - 2 years)
```typescript
{
  name: 'New Technician',
  yearsOfService: 2,   // Shows BLUE badge
  // Badge: Blue with Sparkles + 1 star
}
```

### Example 4: No Badge
```typescript
{
  name: 'Recent Hire',
  // No yearsOfService field = no badge shown
}
```

---

## Responsive Behavior

### Desktop (1024px+)
- Badge: Full size (standard)
- Stars visible at all times
- Hover effects fully functional

### Tablet (768px - 1023px)
- Badge: Same size
- All features intact
- Touch devices: Tap to reveal tooltip briefly

### Mobile (<768px)
- Badge: Slightly smaller text
- Stars still visible
- Tooltip may not show on touch devices (acceptable)

---

## Code Structure

### Component File
**Location:** `src/components/YearsOfServiceBadge.tsx`

**Props:**
```typescript
interface YearsOfServiceBadgeProps {
  years: number;           // Required: Years of service
  position?: 'corner' | 'inline';  // Optional: Display mode
}
```

**Functions:**
- `getMilestone(years)` - Determines tier and styling based on years
- Returns tier object with colors, icons, stars, etc.

### Integration Points

**Team Card:**
- File: `src/app/about-us/our-team/TeamGrid.tsx`
- Line: ~70 (after nameplate, before closing image div)

**Modal Header:**
- File: `src/app/about-us/our-team/TeamGrid.tsx`  
- Line: ~118 (in header badges section)

---

## Maintenance & Updates

### Adding a New Tier

1. Open `src/components/YearsOfServiceBadge.tsx`
2. Add new condition in `getMilestone()` function
3. Define new tier colors, icon, stars
4. Test with sample data

### Adjusting Tier Thresholds

Current thresholds:
- 30+ years → Legend
- 20-29 years → Platinum
- 10-19 years → Gold
- 5-9 years → Emerald
- 1-4 years → Blue

To change: Edit conditionals in `getMilestone()` function

### Customizing Colors

All colors use Tailwind CSS classes:
- Easy to modify in component file
- Maintains design system consistency
- Supports dark mode if needed

---

## Best Practices

### Do's ✅
- Update years annually on anniversary date
- Use accurate years of service
- Keep years of service separate from total experience
- Test badge appearance after adding new data

### Don'ts ❌
- Don't use decimal years (e.g., 10.5)
- Don't add badges for less than 1 year
- Don't modify milestone colors without design review
- Don't forget to update both fields (experience vs. service)

---

## Frequently Asked Questions

**Q: What's the difference between `yearsExperience` and `yearsOfService`?**
A: 
- `yearsExperience` = Total years in appliance repair field (any company)
- `yearsOfService` = Years specifically at Kelly's Appliance Center

**Q: What happens if I only set `yearsOfService` but not `yearsExperience`?**
A: The service badge will show, but no experience badge appears. This is fine!

**Q: Can I have more experience than years of service?**
A: Yes! Example: 15 years experience, 5 years of service (worked elsewhere before Kelly's)

**Q: Should contractors/part-time staff get badges?**
A: Use your discretion. If they're featured on the team page, they deserve recognition!

**Q: Can I customize the badge for special occasions?**
A: Yes, but requires code changes. Contact your developer for anniversary or retirement specials.

---

## Future Enhancement Ideas

- [ ] Add "founding member" special badge
- [ ] Add retirement/emeritus badge
- [ ] Add animation when hovering over card (not just badge)
- [ ] Add anniversary celebration mode (confetti on specific years)
- [ ] Add "rising star" badge for new exceptional performers
- [ ] Integration with HR system for automatic updates
- [ ] Badge collection view showing team tenure distribution
- [ ] Exportable badge graphics for social media

---

**Created:** January 4, 2025  
**Last Updated:** January 4, 2025  
**Version:** 1.0  
**Component:** YearsOfServiceBadge
