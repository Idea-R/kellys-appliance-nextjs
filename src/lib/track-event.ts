/**
 * Push a custom event to the GTM dataLayer.
 * Safe to call on the server (no-ops) or before GTM loads (queues in dataLayer).
 */
export function pushEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (typeof window === 'undefined') return
  const dl = (window as unknown as { dataLayer?: Array<Record<string, unknown>> }).dataLayer
  if (!dl) return
  dl.push({
    event: eventName,
    event_name: eventName,
    ...params,
  })
}

/**
 * Fire a Google Ads website conversion.
 *
 * History: this used to only push an 'ads_conversion' event to the dataLayer and
 * rely on a Google Ads Conversion Tracking tag inside GTM to relay it. That GTM
 * tag was never created, so every conversion silently went nowhere and the
 * "Submit lead form" / "Book appointment" actions recorded zero conversions.
 *
 * Now we fire the conversion directly with gtag(). Analytics.tsx loads the Google
 * Ads tag (AW-...) on every page, so gtag is available and this works without
 * depending on any GTM container configuration.
 *
 * IMPORTANT: do NOT also add a Google Ads Conversion tag in GTM triggered by the
 * 'ads_conversion' event below, or conversions would be counted twice.
 */
export function pushAdsConversion(
  sendTo: string,
  value?: number,
  currency = 'USD'
): void {
  if (typeof window === 'undefined') return

  // Primary path: fire the conversion straight to Google Ads.
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag === 'function') {
    const payload: Record<string, unknown> = { send_to: sendTo }
    if (typeof value === 'number') {
      payload.value = value
      payload.currency = currency
    }
    gtag('event', 'conversion', payload)
  }

  // Mirror to the dataLayer for GA4 reporting and debugging only (not for Ads).
  const dl = (window as unknown as { dataLayer?: Array<Record<string, unknown>> }).dataLayer
  dl?.push({
    event: 'ads_conversion',
    ads_send_to: sendTo,
    ads_conversion_value: value,
    ads_conversion_currency: currency,
  })
}
