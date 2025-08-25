# Cloudflare Pages Deployment Guide

## 🚀 Rapid Deployment to Cloudflare Pages

### Step 1: Cloudflare Pages Setup

1. **Log into Cloudflare Dashboard**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to `Pages` in the sidebar

2. **Create New Project**
   - Click "Create a project"
   - Choose "Connect to Git"
   - Select GitHub and authorize Cloudflare

3. **Connect Repository**
   - Find and select: `Idea-R/kellys-appliance-nextjs`
   - Click "Begin setup"

### Step 2: Build Configuration

Set these build settings in Cloudflare Pages:

```
Framework preset: Next.js
Build command: npm run build
Build output directory: .next
Root directory: /
```

### Step 3: Environment Variables

Add these environment variables in Cloudflare Pages dashboard:

```
NEXT_PUBLIC_SITE_URL = https://kellysappliancerepair.com
NEXT_TELEMETRY_DISABLED = 1
NODE_VERSION = 18
```

### Step 4: Custom Domain Setup

1. **Add Custom Domain**
   - In Cloudflare Pages project settings
   - Go to "Custom domains"
   - Add `kellysappliancerepair.com`
   - Add `www.kellysappliancerepair.com`

2. **DNS Configuration**
   - Update nameservers to Cloudflare (if not already)
   - Or add CNAME records:
     ```
     kellysappliancerepair.com → CNAME → your-project.pages.dev
     www.kellysappliancerepair.com → CNAME → your-project.pages.dev
     ```

### Step 5: Deploy & Test

1. **Trigger Deployment**
   - Push any commit to main branch, or
   - Click "Retry deployment" in Cloudflare dashboard

2. **Verify Deployment**
   - Check build logs for any errors
   - Test the preview URL
   - Verify custom domain works

## 🔧 Troubleshooting

### Common Issues

**Build Fails:**
- Check Node.js version is set to 18+
- Verify environment variables are set
- Check build logs for specific errors

**Images Not Loading:**
- Ensure images are in `public/images/` directory
- Check file paths in components
- Verify Next.js image optimization is working

**Styling Issues:**
- Confirm Tailwind CSS is building properly
- Check for any CSS conflicts
- Verify responsive design on mobile

### Performance Optimization

**Cloudflare Settings:**
- Enable "Auto Minify" for HTML, CSS, JS
- Enable "Brotli" compression
- Set "Browser Cache TTL" to 1 month
- Enable "Always Online"

**Next.js Optimizations:**
- Images automatically optimized via Next.js
- Static generation enabled for all pages
- Code splitting automatic

## 📊 Expected Performance

**Core Web Vitals Targets:**
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

**Lighthouse Scores (Target):**
- **Performance:** 95+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 95+

## 🎯 Go-Live Checklist

### Pre-Launch
- [ ] Build completes successfully
- [ ] All pages load correctly
- [ ] Mobile responsiveness verified
- [ ] Contact information accurate
- [ ] Phone numbers clickable
- [ ] Images optimized and loading
- [ ] SEO meta tags in place

### DNS Migration
- [ ] Staging URL tested and approved
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] WWW and non-WWW both work
- [ ] 301 redirects set up (if needed)

### Post-Launch
- [ ] Google Analytics connected (future)
- [ ] Google Search Console updated
- [ ] Monitor performance metrics
- [ ] Check for broken links
- [ ] Verify contact forms work (future)

## 🚨 Emergency Rollback

If issues occur after going live:

1. **Immediate Action:**
   - Revert DNS to previous settings
   - Or use Cloudflare's "Rollback" feature

2. **Investigation:**
   - Check deployment logs
   - Review recent commits
   - Test on staging URL

3. **Fix & Redeploy:**
   - Fix issues in development
   - Test thoroughly
   - Deploy when ready

## 📞 Support Contacts

**Technical Issues:**
- Cloudflare Support: [support.cloudflare.com](https://support.cloudflare.com)
- GitHub Issues: [Repository Issues](https://github.com/Idea-R/kellys-appliance-nextjs/issues)

**Business Questions:**
- Kelly's Appliance Center: (707) 664-9702

---

**Deployment should take 5-10 minutes once configured!**