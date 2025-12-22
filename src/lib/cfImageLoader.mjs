/**
 * Cloudflare Image Resizing loader (ESM).
 *
 * Note: Turbopack (Next dev) can be picky about `loaderFile` module formats.
 * Using `.mjs` keeps this file unambiguous ESM for both dev + build.
 *
 * Produces URLs like:
 *   /cdn-cgi/image/width=800,quality=75,format=auto/images/hero.jpg
 */
export default function cfImageLoader({ src, width, quality }) {
  const q = quality ?? 75
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`
  const lower = String(src).toLowerCase()

  // Don't route non-resizable or already-inlined sources through the CF resizer.
  if (lower.startsWith('data:') || lower.startsWith('blob:') || lower.endsWith('.svg') || lower.endsWith('.gif')) {
    return src
  }

  const params = [`width=${width}`, `quality=${q}`, 'format=auto']

  // If src is absolute, Cloudflare supports:
  // /cdn-cgi/image/<opts>/<absolute-url>
  if (/^https?:\/\//i.test(src)) {
    return `/cdn-cgi/image/${params.join(',')}/${src}`
  }

  return `/cdn-cgi/image/${params.join(',')}${normalizedSrc}`
}


