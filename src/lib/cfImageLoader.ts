import type { ImageLoaderProps } from 'next/image'

/**
 * Cloudflare Image Resizing loader.
 *
 * Requires Cloudflare Image Resizing to be enabled for the zone.
 * Docs: https://developers.cloudflare.com/images/transform-images/transform-via-url/
 *
 * Produces URLs like:
 *   /cdn-cgi/image/width=800,quality=75,format=auto/images/hero.jpg
 */
export default function cfImageLoader({ src, width, quality }: ImageLoaderProps): string {
  const q = quality ?? 75
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`
  const lower = src.toLowerCase()

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


