"use client"

import Script from 'next/script'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function Analytics() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const gadsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
  const cfToken = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN
  const hasAnalytics = Boolean(gtmId || gaId || gadsId)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!hasAnalytics) return
    const handler = (e: Event) => {
      const el = e.target as HTMLElement | null
      if (!el) return
      const anchor = el.closest('a') as HTMLAnchorElement | null
      if (!anchor) return
      const href = anchor.getAttribute('href') || ''
      const label = (anchor.dataset.analyticsLabel || anchor.ariaLabel || anchor.textContent || '').trim()
      const isExternal = /^https?:\/\//i.test(href)
      const isTel = href.startsWith('tel:')
      const isMailto = href.startsWith('mailto:')
      if (!(isExternal || isTel || isMailto || anchor.dataset.analyticsLabel)) return
      const dl = (window as unknown as { dataLayer?: Array<Record<string, unknown>> }).dataLayer
      const eventCategory = isExternal ? 'outbound' : (isTel ? 'tel' : (isMailto ? 'mailto' : 'internal'))
      dl?.push({
        event: 'link_click',
        event_name: 'link_click',
        link_url: href,
        link_text: label,
        link_domain: (() => { try { return new URL(href, window.location.origin).hostname } catch { return '' } })(),
        link_type: eventCategory,
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: document.title,
      })
    }
    document.addEventListener('click', handler, true)
    return () => document.removeEventListener('click', handler, true)
  }, [hasAnalytics])

  // Capture UTM parameters on first page load and store in sessionStorage
  useEffect(() => {
    if (!hasAnalytics) return
    const params = new URLSearchParams(window.location.search)
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid'] as const
    const captured: Record<string, string> = {}
    let hasUtm = false
    utmKeys.forEach((key) => {
      const val = params.get(key)
      if (val) { captured[key] = val; hasUtm = true }
    })
    if (hasUtm) {
      // Store for session attribution (forms can read this later)
      try { sessionStorage.setItem('kellys_utm', JSON.stringify(captured)) } catch { /* noop */ }
      const dl = (window as unknown as { dataLayer?: Array<Record<string, unknown>> }).dataLayer
      dl?.push({ event: 'utm_captured', ...captured })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Only on mount — captures landing page UTMs once

  // SPA page_view tracking on route changes (App Router)
  useEffect(() => {
    if (!hasAnalytics) return
    const url = `${window.location.pathname}${window.location.search}`
    const dl = (window as unknown as { dataLayer?: Array<Record<string, unknown>> }).dataLayer
    dl?.push({
      event: 'page_view',
      page_path: url,
      page_location: window.location.href,
      page_title: document.title,
    })
    // If using GA4 directly without GTM
    if (!gtmId) {
      const win = window as unknown as { gtag?: (...args: unknown[]) => void }
      if (win.gtag) {
        win.gtag('event', 'page_view', {
          page_path: url,
          page_location: window.location.href,
          page_title: document.title,
        })
      }
    }
  }, [hasAnalytics, gtmId, pathname, searchParams])

  // Scroll depth tracking (25/50/75/100)
  useEffect(() => {
    if (!hasAnalytics) return
    const thresholds = [25, 50, 75, 100]
    const fired = new Set<number>()
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
      )
      const winHeight = window.innerHeight
      const progress = Math.min(100, Math.round(((scrollTop + winHeight) / docHeight) * 100))
      thresholds.forEach((t) => {
        if (!fired.has(t) && progress >= t) {
          fired.add(t)
          const dl = (window as unknown as { dataLayer?: Array<Record<string, unknown>> }).dataLayer
          dl?.push({ event: 'scroll_depth', scroll_percent: t })
        }
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [hasAnalytics])

  // Time-on-page heartbeat every 15s
  useEffect(() => {
    if (!hasAnalytics) return
    let seconds = 0
    const id = window.setInterval(() => {
      seconds += 15
      const dl = (window as unknown as { dataLayer?: Array<Record<string, unknown>> }).dataLayer
      dl?.push({ event: 'heartbeat', seconds_elapsed: seconds })
    }, 15000)
    return () => window.clearInterval(id)
  }, [hasAnalytics])

  return (
    <>
      {/* Google Tag Manager */}
      {gtmId && (
        <>
          <Script id="gtm-init" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
          <noscript>
            <iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`} title="GTM noscript" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
          </noscript>
        </>
      )}

      {/* Google Analytics (if using gtag directly) */}
      {!gtmId && gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${gaId}',{anonymize_ip:true});${gadsId ? `gtag('config','${gadsId}');` : ''}`}
          </Script>
        </>
      )}

      {/* Google Ads (standalone — loads gtag if GA4 isn't present) */}
      {!gtmId && !gaId && gadsId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gadsId}`} strategy="afterInteractive" />
          <Script id="gads-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${gadsId}');`}
          </Script>
        </>
      )}

      {/* Cloudflare Web Analytics */}
      {cfToken && (
        <Script
          id="cf-analytics"
          strategy="afterInteractive"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          defer
          data-cf-beacon={`{\"token\":\"${cfToken}\"}` as unknown as string}
        />
      )}

      {/* Delegated click tracking for anchors */}
      {hasAnalytics && (
        <Script id="click-tracking-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];`}
        </Script>
      )}
      {/* Hook via React to attach once */}
    </>
  )
}


