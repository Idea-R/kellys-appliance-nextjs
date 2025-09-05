import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/content'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://kellysappliancerepair.com'
  const posts = await getAllPosts()

  // Static pages
  const staticPages = [
    '',
    '/about-us',
    '/about-us/our-team',
    '/authorized-service',
    '/contact',
    '/design-preview',
    '/pricing',
    '/privacy-policy',
    '/resources',
    '/diamond-certified',
    '/service-area',
    '/schedule-prep',
    '/resources/where-is-my-model-number',
    '/resources/referrals',
    '/scheduler-confirmation',
    '/services',
    '/services/refrigerator-repair',
    '/services/oven-repair',
    '/services/dishwasher-repair',
    '/services/washer-dryer-repair',
    '/service-locations',
    '/service-locations/santa-rosa',
    '/service-locations/petaluma',
    '/service-locations/rohnert-park',
    '/service-locations/sonoma',
    '/service-locations/sebastopol',
    '/service-locations/windsor',
    '/service-locations/novato',
    '/service-locations/san-rafael',
    '/service-locations/napa',
    '/service-locations/cotati',
    '/service-locations/healdsburg',
    '/service-locations/forestville',
    '/service-locations/guerneville',
    '/service-locations/glen-ellen',
    '/service-locations/mill-valley',
    '/service-locations/sausalito',
    '/service-locations/tiburon',
    '/service-locations/corte-madera',
    '/service-locations/dillon-beach',
    '/referrals'
  ]

  const staticSitemapEntries = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page === '' ? 1 : page.includes('/appliance-repair/') || page.includes('/locations/') ? 0.8 : 0.6,
  }))

  // Blog posts
  const blogSitemapEntries = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [...staticSitemapEntries, ...blogSitemapEntries]
}
