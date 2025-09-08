import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/content'
import { allCountyPaths, allCityPaths } from '@/lib/locations'

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
    '/blog',
    '/services',
    '/services/virtual',
    '/services/refrigerator-repair',
    '/services/oven-repair',
    '/services/dishwasher-repair',
    '/services/washer-dryer-repair',
    '/service-locations',
    '/referrals'
  ]

  const staticSitemapEntries = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page === '' ? 1 : page.startsWith('/services') ? 0.7 : 0.6,
  }))

  // County and City dynamic entries
  const locationEntries = [
    ...allCountyPaths,
    ...allCityPaths,
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path.includes('/service-locations/') ? 0.8 : 0.6,
  }))

  // Blog posts
  const blogSitemapEntries = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [...staticSitemapEntries, ...locationEntries, ...blogSitemapEntries]
}
