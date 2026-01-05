import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/content'
import { allCountyPaths, allCityPaths } from '@/lib/locations'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://kellysappliancerepair.com'
  const posts = await getAllPosts()
  const now = new Date()

  // Calculate priority based on page importance (SEO best practices)
  const getPriority = (page: string): number => {
    // Homepage - highest priority
    if (page === '') return 1.0
    
    // Core service pages - high priority for conversions
    if (page.startsWith('/services/') && page !== '/services' && page !== '/services/parts' && page !== '/services/virtual') {
      return 0.9 // Individual service pages (refrigerator-repair, oven-repair, etc.)
    }
    
    // Main landing pages - high priority
    if (['/services', '/service-locations', '/contact', '/schedule-prep', '/authorized-service'].includes(page)) {
      return 0.8
    }
    
    // County pages - high priority for local SEO
    if (page.includes('/service-locations/') && (page.includes('county') || allCountyPaths.includes(page))) {
      return 0.8
    }
    
    // City pages - high priority for local SEO (based on sister company success)
    if (page.includes('/service-locations/') && !page.includes('county')) {
      return 0.8
    }
    
    // Important pages
    if (['/about-us', '/pricing', '/blog'].includes(page)) {
      return 0.7
    }
    
    // Supporting pages
    return 0.6
  }

  // Determine change frequency
  const getChangeFrequency = (page: string): 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' => {
    if (page === '') return 'weekly' // Homepage updates more frequently
    if (page.startsWith('/blog')) return 'weekly' // Blog content updates
    if (page.includes('/service-locations/')) return 'monthly' // Location pages update monthly
    return 'monthly' // Default
  }

  // Static pages - optimized priorities based on SEO tactics
  const staticPages = [
    '', // Homepage (Priority: 1.0)
    '/services', // Main services page (Priority: 0.8)
    '/service-locations', // Main locations page (Priority: 0.8)
    '/services/refrigerator-repair', // Service pages (Priority: 0.9)
    '/services/oven-repair',
    '/services/dishwasher-repair',
    '/services/washer-dryer-repair',
    '/authorized-service', // High conversion page (Priority: 0.8)
    '/contact', // High conversion page (Priority: 0.8)
    '/schedule-prep', // High conversion page (Priority: 0.8)
    '/pricing', // Important page (Priority: 0.7)
    '/about-us', // Important page (Priority: 0.7)
    '/about-us/our-team',
    '/blog', // Content hub (Priority: 0.7)
    '/services/parts', // Supporting pages (Priority: 0.6)
    '/services/virtual',
    '/resources',
    '/diamond-certified',
    '/referrals',
    '/resources/where-is-my-model-number',
    '/resources/referrals',
    '/privacy-policy', // Legal (Priority: 0.6)
  ]

  // Remove design-preview and service-area (not public-facing pages)
  // design-preview is internal/dev, service-area redirects to service-locations

  const staticSitemapEntries = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: now,
    changeFrequency: getChangeFrequency(page),
    priority: getPriority(page),
  }))

  // County pages - high priority for local SEO
  const countyEntries = allCountyPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8, // High priority for local SEO (proven tactic)
  }))

  // City pages - high priority for local SEO (based on sister company success)
  const cityEntries = allCityPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8, // High priority - sister company achieved #1 rankings with this
  }))

  // Blog posts - lower priority but still indexed
  const blogSitemapEntries = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.5, // Blog posts are lower priority
  }))

  return [...staticSitemapEntries, ...countyEntries, ...cityEntries, ...blogSitemapEntries]
}
