/**
 * Cloudflare Pages Function middleware
 *
 * Purpose:
 * - Force any requests to the legacy mobile subdomain to 301 to the primary domain
 * - Preserve full path + query string
 */

export async function onRequest(context: { request: Request; next: () => Promise<Response> }) {
  const url = new URL(context.request.url)
  const hostname = url.hostname.toLowerCase()

  // Redirect legacy mobile subdomain to primary domain (preserve path + query)
  if (hostname === 'mobile.kellysappliancerepair.com') {
    url.protocol = 'https:'
    url.hostname = 'kellysappliancerepair.com'
    return Response.redirect(url.toString(), 301)
  }

  return context.next()
}

