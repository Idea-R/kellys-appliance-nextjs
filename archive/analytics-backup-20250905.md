# Backup of src/components/Analytics.tsx (2025-09-05)

```1:83:src/components/Analytics.tsx
"use client"

import Script from 'next/script'
import { useEffect } from 'react'

export default function Analytics() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const cfToken = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN
  const hasAnalytics = Boolean(gtmId || gaId)

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
      dl?.push({ event: 'link_click', href, label, location: window.location.pathname })
    }
    document.addEventListener('click', handler, true)
    return () => document.removeEventListener('click', handler, true)
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
            <iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
          </noscript>
        </>
      )}

      {/* Google Analytics (if using gtag directly) */}
      {!gtmId && gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${gaId}',{anonymize_ip:true});`}
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


```


