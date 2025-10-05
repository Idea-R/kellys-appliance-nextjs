# Google Analytics 4 (GA4) Setup Complete

## Your GA4 Measurement ID: `G-6NW7LJG197`

---

## ✅ Setup Steps (Complete These)

### Step 1: Add to Cloudflare Pages Environment Variables

1. Go to: https://dash.cloudflare.com
2. Navigate to: **Workers & Pages** → **kellys-appliance-nextjs**
3. Click: **Settings** → **Environment variables**
4. Click: **Add variable** (for Production)

**Add This Variable:**
```
Variable name: NEXT_PUBLIC_GA_MEASUREMENT_ID
Value: G-6NW7LJG197
```

5. Click: **Save**
6. Redeploy site (or it will auto-deploy on next push)

### Step 2: Verify in Next Deployment

After the next deployment:
1. Open: https://kellysappliancerepair.com
2. Press `F12` → Console
3. Type: `dataLayer`
4. Should see array with GTM/GA events

### Step 3: Test Real-Time in GA4

1. Go to: https://analytics.google.com
2. Select: Property for kellysappliancerepair.com
3. Click: **Reports** → **Real-time**
4. Open your site in another tab
5. Should see yourself as active user within 30 seconds

---

## How It Works

### Current Setup (Already Built In)

**File:** `src/components/Analytics.tsx`

The component automatically:
- ✅ Loads GA4 script when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set
- ✅ Tracks page views on route changes
- ✅ Tracks link clicks (external, tel:, mailto:)
- ✅ Tracks scroll depth (25%, 50%, 75%, 100%)
- ✅ Sends heartbeat every 15 seconds (time on page)

**No code changes needed** - just add the environment variable!

---

## What Gets Tracked Automatically

### Standard Events
- `page_view` - Every page load and route change
- `scroll_depth` - When user scrolls to 25%, 50%, 75%, 100%
- `link_click` - External links, phone numbers, email links
- `heartbeat` - Time on page (15 second intervals)

### Custom Properties
- `page_path` - Current URL path
- `page_location` - Full URL
- `page_title` - Page title
- `link_url` - Clicked link URL
- `link_text` - Link text or aria-label
- `link_type` - outbound / tel / mailto / internal
- `scroll_percent` - Scroll depth percentage
- `seconds_elapsed` - Time on page in seconds

---

## GA4 Dashboard Views to Set Up

### 1. Page Performance Report
**What to track:**
- Most visited pages
- Average time on page
- Scroll depth by page
- Bounce rate

**How to create:**
1. GA4 → **Explore** → **Blank**
2. Add dimension: `Page path`
3. Add metrics: `Views`, `Average engagement time`, `Bounce rate`

### 2. Link Click Report
**What to track:**
- External link clicks
- Phone call clicks
- Email clicks

**How to create:**
1. GA4 → **Explore** → **Blank**
2. Add event: `link_click`
3. Add dimension: `link_type`, `link_url`
4. Add metric: `Event count`

### 3. Service Area Performance
**What to track:**
- Which location pages get most traffic
- User flow from location pages to booking

**How to create:**
1. GA4 → **Explore** → **Path exploration**
2. Starting point: `/service-locations/*`
3. Track conversions to: `/contact` or booking link

### 4. Conversion Tracking
**Set up these conversions:**
- Phone calls: `link_click` where `link_type = tel`
- Booking clicks: `link_click` where `link_url` contains `booking.rossware.com`
- Contact form views: `page_view` where `page_path = /contact`

---

## Privacy & Cookie Consent

### Current Configuration: ✅ GDPR-Compliant

**Analytics.tsx automatically:**
- ✅ Uses `anonymize_ip: true` (anonymizes user IPs)
- ✅ No personal data collected
- ✅ Client-side only (no server tracking)

**Optional: Add Cookie Banner**

If you want to be extra compliant:
```typescript
// Only load analytics after consent
const [consent, setConsent] = useState(false)

useEffect(() => {
  const hasConsent = localStorage.getItem('analytics_consent')
  setConsent(hasConsent === 'true')
}, [])

// Then wrap analytics with consent check
{consent && <Analytics />}
```

---

## Testing Checklist

After adding environment variable and redeploying:

### ✅ Browser Console Test
```javascript
// Should return array with events
console.log(dataLayer)

// Should return function
console.log(typeof gtag)
```

### ✅ GA4 Real-Time Test
1. Open GA4 Real-time report
2. Visit different pages on your site
3. Should see:
   - Active users count increase
   - Page views appearing
   - Events firing (scroll, clicks)

### ✅ Network Tab Test
1. Press F12 → Network tab
2. Filter: `google-analytics.com`
3. Should see:
   - `collect?` requests
   - `measurement_id=G-6NW7LJG197` in URL

---

## Troubleshooting

### No Data Showing in GA4

**Check 1: Environment Variable**
```bash
# Verify it's set in Cloudflare Pages dashboard
# Should be: NEXT_PUBLIC_GA_MEASUREMENT_ID=G-6NW7LJG197
```

**Check 2: Browser Console**
```javascript
// Should return your GA ID
console.log(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID)

// If undefined, variable not loaded
```

**Check 3: Force Redeploy**
```bash
git commit --allow-empty -m "Trigger redeploy for GA4"
git push origin main
```

### Data Delayed in GA4

**Normal Behavior:**
- Real-time: Shows within 30 seconds
- Standard reports: 24-48 hour delay
- Custom reports: Can take up to 48 hours

### Ad Blockers Interfering

**Expected:**
- ~30-40% of users have ad blockers
- GA4 requests get blocked
- This is normal - use Cloudflare Analytics for complete picture

---

## Alternative: Google Tag Manager (GTM)

**If you prefer GTM instead of direct GA4:**

### Benefits of GTM
- Manage multiple tracking tools (GA4, Facebook Pixel, etc.)
- No code changes needed to add new tags
- Better for non-technical team members
- More advanced event tracking options

### How to Switch to GTM

1. Create GTM container: https://tagmanager.google.com
2. Get GTM ID: `GTM-XXXXXXX`
3. **Replace** GA4 environment variable with GTM:
   ```
   Remove: NEXT_PUBLIC_GA_MEASUREMENT_ID
   Add: NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```
4. Configure GA4 inside GTM dashboard
5. Redeploy site

**Analytics.tsx automatically detects which one you're using!**

---

## Current vs Target State

### ✅ Already Implemented
- Analytics component built and working
- Auto page view tracking
- Link click tracking
- Scroll depth tracking
- Time on page tracking
- Privacy-compliant (IP anonymization)

### ⏳ After Adding Environment Variable
- GA4 will start collecting data
- Real-time reports will work
- 24 hours → Standard reports populate
- 1 week → Sufficient data for insights

---

## Next Steps

1. **Immediate:** Add `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-6NW7LJG197` to Cloudflare Pages
2. **Within 1 hour:** Verify real-time tracking working
3. **Within 24 hours:** Check standard reports populating
4. **Within 1 week:** Set up custom reports and conversions
5. **Ongoing:** Monitor weekly for insights

---

## Support Resources

- [GA4 Dashboard](https://analytics.google.com)
- [GA4 Documentation](https://support.google.com/analytics/answer/9304153)
- [Next.js Analytics Guide](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)
- [Cloudflare Pages Env Vars](https://developers.cloudflare.com/pages/configuration/build-configuration/#environment-variables)

---

## Quick Reference

**GA4 Property ID:** `G-6NW7LJG197`  
**Environment Variable:** `NEXT_PUBLIC_GA_MEASUREMENT_ID`  
**Component Location:** `src/components/Analytics.tsx`  
**Already Called In:** `src/app/layout.tsx` (line 88)

**Status:** ✅ Code ready, just add environment variable!
