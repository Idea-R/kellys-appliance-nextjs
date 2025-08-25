# Kelly's Appliance Center - Next.js Frontend

Modern, high-performance website for Kelly's Appliance Center - professional appliance repair services in the Bay Area since 1975.

## 🌟 Features

- **Next.js 14+** with App Router for optimal performance
- **Tailwind CSS** for modern, responsive design
- **TypeScript** for type safety and better development experience
- **Extracted WordPress Content** - All content migrated from existing WordPress site
- **SEO Optimized** - Complete meta tags, Open Graph, and structured data
- **Performance First** - Optimized images, static generation, and fast loading
- **Mobile Responsive** - Perfect display on all devices

## 🚀 Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript
- **Styling:** Tailwind CSS, HeadlessUI, Heroicons
- **Content:** Static generation from extracted WordPress data
- **Deployment:** Cloudflare Pages
- **Performance:** Image optimization, static generation, CDN

## 📱 Site Structure

### Core Pages
- **Home** - Company overview with hero section and services
- **Services** - Refrigerator, Oven, Washer/Dryer, Dishwasher repair
- **Service Locations** - 10 Bay Area locations served
- **About Us** - Company history and team information
- **Contact** - Appointment booking and contact information
- **Blog** - Repair tips and maintenance guides

### Service Areas
- Santa Rosa
- Petaluma
- Rohnert Park
- Sonoma
- Sebastopol
- Windsor
- Marin County
- San Rafael
- Novato
- Napa

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ installed
- Git

### Setup
```bash
git clone https://github.com/Idea-R/kellys-appliance-nextjs.git
cd kellys-appliance-nextjs
npm install
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
kellys-nextjs/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with SEO
│   │   └── page.tsx            # Home page
│   ├── components/             # Reusable React components
│   │   └── Layout.tsx          # Main site layout
│   ├── lib/                    # Utility functions
│   │   └── content.ts          # Content management functions
│   └── types/                  # TypeScript type definitions
│       └── content.ts          # Content type definitions
├── public/
│   └── images/                 # Static images (logos, team photos, etc.)
├── content/                    # Extracted WordPress content (local only)
│   ├── pages/                  # Page content as JSON
│   ├── posts/                  # Blog posts as JSON
│   └── images/                 # Original images from WordPress
└── package.json
```

## 🎯 Deployment

### Cloudflare Pages (Recommended)

1. **Connect Repository**: Link GitHub repo to Cloudflare Pages
2. **Build Settings**:
   - Build command: `npm run build`
   - Output directory: `.next`
   - Node.js version: 18+

3. **Environment Variables**:
   ```
   NEXT_PUBLIC_SITE_URL=https://kellysappliancerepair.com
   NEXT_TELEMETRY_DISABLED=1
   ```

4. **Custom Domain**: Configure DNS to point to Cloudflare

### Alternative Deployments
- **Vercel**: Connect GitHub repo for automatic deployments
- **Netlify**: Deploy via GitHub integration
- **Self-hosted**: Use `npm run build` and serve the `.next` folder

## 🔧 Configuration

### Environment Variables
Create `.env.local` for local development:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_TELEMETRY_DISABLED=1

# Future: WordPress GraphQL (when headless WP is set up)
# WP_GRAPHQL_ENDPOINT=https://your-wp-site.com/graphql
```

### Content Management
Currently using static content extracted from WordPress. Future implementation will connect to headless WordPress via GraphQL.

## 📊 SEO & Performance

### Built-in SEO Features
- ✅ **Meta Tags** - Title, description, keywords for all pages
- ✅ **Open Graph** - Social media sharing optimization
- ✅ **Structured Data** - Local business schema markup
- ✅ **Canonical URLs** - Prevent duplicate content issues
- ✅ **Sitemap** - Auto-generated XML sitemap

### Performance Optimizations
- ✅ **Image Optimization** - Next.js automatic image optimization
- ✅ **Static Generation** - Pre-rendered pages for fast loading
- ✅ **Code Splitting** - Automatic bundle optimization
- ✅ **Font Optimization** - Google Fonts optimization
- ✅ **Cloudflare CDN** - Global content delivery

## 🎨 Design System

### Brand Colors
- **Primary Blue**: `#1E40AF` (blue-800)
- **Secondary Blue**: `#1E3A8A` (blue-900)
- **Accent Green**: `#059669` (green-600)
- **Text Gray**: `#374151` (gray-700)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, responsive sizing
- **Body**: Regular weight, optimized line height

### Components
- **Layout**: Responsive header/footer with navigation
- **Hero Section**: Gradient background with CTAs
- **Service Cards**: Image + description cards
- **Contact Forms**: Styled form components (future)

## 📞 Company Information

**Kelly's Appliance Center**
- **Phone**: (707) 664-9702
- **Address**: 466 Primero Ct. Suite H, Cotati, CA 94931
- **Established**: 1975 (50+ years in business)
- **Service Area**: Bay Area (10 cities)
- **Guarantee**: 90 Day Money Back Guarantee

## 🚧 Roadmap

### Phase 1: ✅ Static Site (Current)
- [x] Next.js frontend with extracted content
- [x] Modern responsive design
- [x] SEO optimization
- [x] Cloudflare deployment

### Phase 2: 🔄 Headless WordPress (In Progress)
- [ ] Set up headless WordPress instance
- [ ] Configure WPGraphQL
- [ ] Implement content management
- [ ] Dynamic content updates

### Phase 3: 🔮 Enhanced Features
- [ ] Contact form integration
- [ ] Appointment booking system
- [ ] Live chat widget
- [ ] Customer testimonials
- [ ] Blog content management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

Copyright © 2025 Kelly's Appliance Center. All rights reserved.

## 🆘 Support

For technical issues or questions:
- **Repository**: [GitHub Issues](https://github.com/Idea-R/kellys-appliance-nextjs/issues)
- **Business Contact**: (707) 664-9702

---

**Built with ❤️ for Kelly's Appliance Center**