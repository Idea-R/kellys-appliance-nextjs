# Kelly's Appliance Center - Deployment Guide

## 🚀 Modern Setup (October 2025)

### Tech Stack
- **Framework**: Next.js 15.5.0 with Turbopack
- **Hosting**: Cloudflare Pages
- **Adapter**: OpenNext for Cloudflare
- **Analytics**: GTM, GA4, Cloudflare Web Analytics
- **Build**: Node.js 22.x

---

## 📋 Prerequisites

1. **Node.js 22.x** or higher
2. **Wrangler CLI** authenticated: `wrangler login`
3. **Cloudflare Account** with Pages enabled
4. **GitHub repository** connected to Cloudflare Pages

---

## 🔐 Environment Variables Setup

### Local Development

1. Copy the example file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Fill in your values in `.env.local`:
   ```bash
   # Analytics (Choose ONE tracking method)
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX              # Recommended: Google Tag Manager
   # OR
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX  # Direct GA4

   # Cloudflare Web Analytics (privacy-friendly, no cookies)
   NEXT_PUBLIC_CF_ANALYTICS_TOKEN=your_token_here
   ```

### Cloudflare Pages Environment Variables

Set these in the **Cloudflare Dashboard** → **Pages** → **kellys-nextjs** → **Settings** → **Environment Variables**:

#### Production Environment
```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_CF_ANALYTICS_TOKEN=your_production_token
NODE_VERSION=22
```

#### Preview Environment (optional)
```
NEXT_PUBLIC_GTM_ID=GTM-PREVIEW-ID
NEXT_PUBLIC_CF_ANALYTICS_TOKEN=your_preview_token
NODE_VERSION=22
```

---

## 🎯 Analytics Setup

### Option 1: Google Tag Manager (Recommended)

1. **Create GTM Container**:
   - Go to https://tagmanager.google.com
   - Create new container for `kellysappliancecenter.com`
   - Get your GTM-XXXXXXX ID

2. **Configure GA4 in GTM**:
   - Add GA4 Configuration tag
   - Set up triggers (All Pages, Link Clicks, etc.)
   - Add your GA4 Measurement ID

3. **Set Environment Variable**:
   ```bash
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```

### Option 2: Direct GA4 (Alternative)

1. **Create GA4 Property**:
   - Go to https://analytics.google.com
   - Create property for kellysappliancecenter.com
   - Get your G-XXXXXXXXXX ID

2. **Set Environment Variable**:
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

### Cloudflare Web Analytics

1. **Enable in Dashboard**:
   - Go to Cloudflare Dashboard → Analytics → Web Analytics
   - Add site: `kellysappliancecenter.com`
   - Copy the analytics token

2. **Set Environment Variable**:
   ```bash
   NEXT_PUBLIC_CF_ANALYTICS_TOKEN=your_token_here
   ```

### Advanced: GA4 Reporting API

For automated reporting (scripts in `/scripts/report.mjs`):

1. **Create Service Account**:
   - Go to Google Cloud Console
   - Enable Google Analytics Data API
   - Create service account with Viewer role
   - Download JSON key

2. **Add Service Account to GA4**:
   - Go to GA4 Admin → Property Access Management
   - Add service account email with Viewer role

3. **Set Environment Variables**:
   ```bash
   GA4_PROPERTY_ID=properties/123456789
   GOOGLE_APPLICATION_CREDENTIALS=./secrets/ga4-service-account.json
   ```

4. **Run Reports**:
   ```bash
   npm run report:summary -- --days=7
   npm run report:events -- --days=30
   npm run report:partners -- --days=30 --csv
   ```

---

## 🛠️ Build & Deploy

### Local Development

```bash
# Install dependencies
npm install

# Run dev server with Turbopack
npm run dev

# Open http://localhost:3000
```

### Local Preview (Cloudflare Workers simulation)

```bash
# Build for production
npm run build

# Build Cloudflare adapter
npm run build:cloudflare

# Preview locally
npm run preview
```

### Deploy to Cloudflare Pages

#### Method 1: Git-based Deployment (Recommended)

1. **Configure in Cloudflare Dashboard**:
   - Go to Pages → kellys-nextjs → Settings → Builds & Deployments
   - Build command: `npm run build && npm run build:cloudflare`
   - Build output directory: `.open-next/cloudflare`
   - Root directory: `/`
   - Node version: `22`

2. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Deploy with OpenNext"
   git push origin main
   ```

#### Method 2: Direct Deploy via Wrangler

```bash
# One command to build and deploy
npm run deploy
```

---

## 📊 What Analytics Are Tracked?

The site automatically tracks:

### Page Views
- Every route change in SPA
- Initial page load
- Full URL and title

### Link Clicks
- External links (outbound)
- Tel links (phone calls)
- Mailto links (email)
- Internal links with `data-analytics-label`

### Scroll Depth
- 25%, 50%, 75%, 100% milestones
- Per page view

### Time on Page
- Heartbeat every 15 seconds
- Engagement tracking

### Custom Events
Add custom tracking with:
```html
<a href="/some-page" data-analytics-label="custom_event_name">
  Link Text
</a>
```

---

## 🔒 Security Features

### Headers
Configured in `_headers`:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

### CSP (Content Security Policy)
Add to Cloudflare Pages → Headers/Redirects if needed.

### HTTPS
Automatic via Cloudflare (Free SSL).

---

## 🎨 Performance Optimizations

### Image Optimization
- Next.js Image component with AVIF/WebP
- Responsive sizes: 640px to 2048px
- Quality levels: 25, 50, 75, 100

### Caching Strategy
Configured in `_headers`:
- Static assets: 1 year cache
- Images: 1 day cache
- Next.js chunks: Immutable

### Build Output
- Standalone mode for smaller builds
- Tree-shaking and code splitting
- Turbopack for faster builds

---

## 🐛 Troubleshooting

### Build Fails in Cloudflare Pages

1. **Check Node version**:
   - Set `NODE_VERSION=22` in environment variables

2. **Check build command**:
   - Should be: `npm run build && npm run build:cloudflare`

3. **Check output directory**:
   - Should be: `.open-next/cloudflare`

### Analytics Not Working

1. **Check Environment Variables**:
   ```bash
   # In browser console:
   console.log('GTM:', window.dataLayer)
   ```

2. **Check GTM/GA4 Configuration**:
   - Verify container is published
   - Check triggers are active

3. **Test Cloudflare Analytics**:
   - View in Cloudflare Dashboard → Analytics
   - May take 10-15 minutes to show data

### Images Not Loading

1. **Check Image Component Usage**:
   ```tsx
   import Image from 'next/image'
   <Image src="/images/test.jpg" alt="Test" width={800} height={600} />
   ```

2. **Check Image Domains** (if using external images):
   Add to `next.config.ts`:
   ```ts
   images: {
     remotePatterns: [
       { protocol: 'https', hostname: 'example.com' }
     ]
   }
   ```

---

## 📈 Monitoring

### Cloudflare Analytics
- Real-time visitor data
- No cookies, privacy-focused
- Free tier: 10M requests/month

### GA4
- Detailed user behavior
- Custom events and conversions
- Audience insights

### Web Vitals
Monitored automatically:
- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)

---

## 🔄 CI/CD Pipeline

### Automatic Deployments
- **Production**: Push to `main` branch
- **Preview**: Push to any other branch

### Build Process
1. Install dependencies
2. Run Next.js build
3. Run OpenNext adapter
4. Deploy to Cloudflare Pages
5. Invalidate CDN cache

### Post-Deploy Checks
- [ ] Homepage loads
- [ ] Analytics tracking works
- [ ] Forms submit correctly
- [ ] Images load properly
- [ ] Redirects work

---

## 📚 Additional Resources

- [OpenNext Cloudflare Docs](https://opennext.js.org/cloudflare)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages)
- [Next.js Docs](https://nextjs.org/docs)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [GTM Setup Guide](https://support.google.com/tagmanager/answer/6103696)

---

## 🆘 Support

For issues or questions:
- Check logs: `wrangler pages deployment tail`
- View build logs in Cloudflare Dashboard
- Check GitHub Actions (if configured)
