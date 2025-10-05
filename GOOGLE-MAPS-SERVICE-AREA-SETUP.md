# Google Maps API - Service Area Overlay Setup

## Overview
Interactive Google Maps with transparent blue overlays showing service areas for Sonoma County, Marin County, and Napa City.

---

## Environment Variable

Add to **Cloudflare Pages** environment variables (and local `.env.local`):

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_api_key_here
```

**Note:** Must use `NEXT_PUBLIC_` prefix for client-side access.

---

## Google Cloud Console Setup

### 1. Enable APIs
In your existing Google Cloud project:

1. Go to **APIs & Services > Library**
2. Enable these APIs:
   - **Maps JavaScript API** (for interactive maps)
   - **Maps Embed API** (optional, for static embeds)
   - **Geocoding API** (optional, for address lookups)

### 2. Create API Key

1. Go to **APIs & Services > Credentials**
2. Click **Create Credentials > API Key**
3. **Restrict the key** (Important for security):
   - **Application restrictions:**
     - HTTP referrers (websites)
     - Add: `kellysappliancerepair.com/*`
     - Add: `*.kellysappliancerepair.com/*`
     - Add: `localhost:3000/*` (for local dev)
   - **API restrictions:**
     - Select "Restrict key"
     - Check: Maps JavaScript API
4. Copy the API key

### 3. Set Billing (Required)
- Google Maps requires a billing account
- **Free tier:** $200/month credit (covers ~28,000 map loads)
- **Typical usage:** ~100-500 loads/month = $0-5/month

---

## Implementation

### Component: `GoogleMapWithServiceArea.tsx`

**Features:**
- Interactive Google Maps
- Light blue polygon overlays for service areas
- Business location marker (red pin)
- Pan, zoom, street view controls

**Service Areas Defined:**
- **Sonoma County** - Full county coverage
- **Marin County** - Full county coverage  
- **Napa City** - City limits only (not full county)

### Usage Example

```tsx
import GoogleMapWithServiceArea from '@/components/GoogleMapWithServiceArea'

<GoogleMapWithServiceArea
  apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
  businessLocation={{ lat: 38.327, lng: -122.707 }} // Cotati, CA
  className="w-full h-[420px]"
/>
```

---

## Refinement: Precise County Boundaries

The current polygons are **rough approximations**. For precise county boundaries:

### Option 1: Google Maps Platform Datasets (Recommended)
- Upload official GeoJSON county boundary files
- Google provides free datasets

### Option 2: Manual Coordinates
Use tools like:
- [geojson.io](https://geojson.io/) - Draw polygons on map
- Export as GeoJSON
- Convert to `LatLngLiteral[]` array

### Option 3: Census Bureau TIGER Files
- Download from: https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html
- Filter by county FIPS codes:
  - Sonoma: 06097
  - Marin: 06041
  - Napa: 06055

---

## Cost Management

### Monitor Usage
- Google Cloud Console > APIs & Services > Dashboard
- Set budget alerts at $10, $25, $50

### Optimize Costs
- **Static map fallback:** Use static image for mobile
- **Lazy loading:** Only load map when section is visible
- **Cache:** Map loads are counted per page load, not interactions

---

## Google Business Profile Integration

In your Google Business Profile settings:

1. **Profile > Service Area**
2. Add service areas:
   - Sonoma County, CA
   - Marin County, CA
   - Napa, CA
3. This affects:
   - Local search visibility
   - Google Maps search results
   - NOT the map display (requires API)

---

## Security Best Practices

✅ **Do:**
- Restrict API key to your domains
- Use `NEXT_PUBLIC_` for client keys only
- Monitor usage dashboard weekly

❌ **Don't:**
- Commit API keys to git (use env vars)
- Use unrestricted keys in production
- Enable unnecessary APIs

---

## Troubleshooting

### Map not loading
1. Check browser console for errors
2. Verify API key is in environment variables
3. Confirm Maps JavaScript API is enabled
4. Check domain restrictions allow your site

### Wrong service areas displayed
- Adjust polygon coordinates in `GoogleMapWithServiceArea.tsx`
- Use geojson.io to visualize boundaries

### Slow map loading
- Implement lazy loading with Intersection Observer
- Use static map image as placeholder

---

## Next Steps

1. ✅ Add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` to Cloudflare
2. ✅ Enable Maps JavaScript API in Google Cloud
3. ✅ Set up billing (free tier sufficient)
4. 🔲 Replace static map on service locations page
5. 🔲 Refine county boundary polygons (optional)
6. 🔲 Set service areas in Google Business Profile
7. 🔲 Monitor usage and costs

---

**Status:** Ready to deploy after API key added to environment variables.
