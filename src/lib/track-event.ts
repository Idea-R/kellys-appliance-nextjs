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
 * Fire a Google Ads conversion event via gtag.
 * No-ops if gtag isn't loaded or no Ads ID is configured.
 */
export function pushAdsConversion(
  sendTo: string,
  value?: number,
  currency = 'USD'
): void {
  if (typeof window === 'undefined') return
  const win = window as unknown as { gtag?: (...args: unknown[]) => void }
  if (!win.gtag) return
  win.gtag('event', 'conversion', {
    send_to: sendTo,
    value,
    currency,
  })
}
