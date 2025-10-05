# Cloudflare Pages Redirects Setup & Troubleshooting

## Current Status

**Redirect Method:** `_redirects` file (Native Cloudflare Pages)  
**Location:** `public/_redirects` → copies to `out/_redirects` during build  
**SEO-Friendly:** ✅ Yes - 301 permanent redirects preserve link equity

---

## How It Works

1. `public/_redirects` file contains all redirect rules
2. Next.js build copies it to `out/_redirects` 
3. Cloudflare Pages reads `_redirects` at deploy time
4. Redirects happen at edge (CDN level) - fastest possible

---

## Redirect Rules (Current)

### Service Pages
- `/appliance-repair/*` → `/services/:splat`
- `/locations/*` → `/service-locations/:splat`
- `/brands/*` → `/authorized-service`

### Location Pages (WordPress Legacy URLs)
- `/appliance-repair-santa-rosa` → `/service-locations/santa-rosa`
- `/appliance-repair-petaluma` → `/service-locations/petaluma`
- `/appliance-repair-rohnert-park` → `/service-locations/rohnert-park`
- `/appliance-repair-sonoma` → `/service-locations/sonoma`
- `/appliance-repair-sebastopol` → `/service-locations/sebastopol`
- `/appliance-repair-windsor` → `/service-locations/windsor`
- `/appliance-repair-novato` → `/service-locations/novato`
- `/appliance-repair-san-rafael` → `/service-locations/san-rafael`
- `/appliance-repair-napa` → `/service-locations/napa`
- `/appliance-repair-marin-county` → `/service-locations/marin-county`

### Blog Posts
- Old WordPress URL → `/blog/[slug]`

### Other
- `/about` → `/about-us`
- `/resources/blog` → `/blog`
- `/resources/scheduler-confirmation` → `/scheduler-confirmation`

---

## Troubleshooting 404 Errors

### Step 1: Verify Files Exist

Check that `_redirects` exists in build output:

```bash
Get-ChildItem "out\_redirects"
```

**Expected:** File exists with ~1.7KB size

### Step 2: Check Cloudflare Pages Dashboard

1. Go to: https://dash.cloudflare.com
2. Navigate to: **Workers & Pages** → **kellys-appliance-nextjs**
3. Click: Latest deployment
4. Check: **Functions** tab - should show 0 functions (static site)
5. Verify: **Build output directory** = `out`

### Step 3: Test Redirect Locally

```bash
# After build
Get-Content "out\_redirects"
```

Should show all redirect rules.

### Step 4: Force New Deployment

```bash
git commit --allow-empty -m "Force rebuild to update redirects"
git push origin main
```

Cloudflare will:
1. Pull latest code
2. Run build
3. Copy `_redirects` to root
4. Process redirects at edge

### Step 5: Clear Cloudflare Cache

1. Dashboard → **Caching** → **Configuration**
2. Click: **Purge Everything**
3. Wait 30 seconds
4. Test redirect again

---

## Why _redirects Is Best for SEO

### ✅ Advantages
- **Server-side redirects** - Search engines see 301 status
- **Link equity transfer** - SEO value passes to new URL
- **Edge processing** - No origin server hit (fastest)
- **Standard format** - Cloudflare, Netlify, Vercel compatible
- **Git-tracked** - Changes versioned in repo

### ❌ Alternatives (Not Recommended)
- **Meta refresh** - Slower, less SEO value
- **JavaScript redirect** - Search engines may not follow
- **Bulk Redirects (Cloudflare dashboard)** - Not git-tracked, harder to maintain

---

## Alternative: Cloudflare Bulk Redirects (If _redirects Fails)

If `_redirects` file is not working after following troubleshooting:

### Option A: Using Dashboard (Manual)

1. Go to: Dashboard → **Rules** → **Redirect Rules**
2. Click: **Create rule**
3. Add each redirect manually
4. Set: **Status code** = 301

**Pros:** Guaranteed to work  
**Cons:** Manual process, not git-tracked

### Option B: Using Wrangler CLI

```bash
# Install if not already
npm install -g wrangler

# Create redirects via API
wrangler pages deployment create
```

---

## Monitoring Redirects

### Check if Redirect is Working

```powershell
# Test redirect (Windows)
Invoke-WebRequest -Uri "https://kellysappliancerepair.com/appliance-repair-santa-rosa" -MaximumRedirection 0 -ErrorAction SilentlyContinue | Select-Object StatusCode, Headers
```

**Expected Output:**
- StatusCode: 301
- Location header: `/service-locations/santa-rosa`

### Check in Browser

1. Open: `https://kellysappliancerepair.com/appliance-repair-santa-rosa`
2. Press `F12` → Network tab
3. Check: First request shows `301 Moved Permanently`
4. Verify: Redirects to correct URL

---

## SEO Impact Timeline

After redirects are live:

- **Immediate:** Browsers follow redirects
- **24-48 hours:** Google starts crawling new URLs
- **1-2 weeks:** Search results show new URLs
- **4-6 weeks:** Full link equity transferred

**Monitor:** Google Search Console for redirect errors

---

## Files Checklist

- [x] `public/_redirects` - Source file (edit here)
- [x] `out/_redirects` - Built file (auto-generated)
- [x] `public/_headers` - Security headers
- [x] `next.config.ts` - Fallback redirects (doesn't work in static export)

---

## When to Edit Redirects

1. Edit: `public/_redirects`
2. Commit changes
3. Push to GitHub
4. Cloudflare auto-deploys
5. Redirects live in ~2-3 minutes

**Test immediately** after deployment completes.

---

## Support Resources

- [Cloudflare Pages Redirects Docs](https://developers.cloudflare.com/pages/configuration/redirects/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [SEO Best Practices for Redirects](https://developers.google.com/search/docs/crawling-indexing/301-redirects)
