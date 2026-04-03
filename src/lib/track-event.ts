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
 * Fire a Google Ads conversion event via the dataLayer.
 *
 * Previously this called window.gtag() directly, but when GTM is the sole
 * script loader, gtag() isn't defined on the window — causing all conversion
 * calls to silently no-op. Now we push an 'ads_conversion' event to the
 * dataLayer so GTM can fire the Google Ads Conversion Tracking tag.
 *
 * GTM setup required: create a Google Ads Conversion Tracking tag triggered
 * by Custom Event 'ads_conversion', reading conversionId + conversionLabel
 * from dataLayer variables.
 */
export function pushAdsConversion(
  sendTo: string,
  value?: number,
  currency = 'USD'
): void {
  if (typeof window === 'undefined') return
  const dl = (window as unknown as { dataLayer?: Array<Record<string, unknown>> }).dataLayer
  if (!dl) return

  // Parse "AW-XXXXX/LABEL" format into separate ID and label
  const [conversionId, conversionLabel] = sendTo.includes('/')
    ? sendTo.split('/')
    : [sendTo, undefined]

  dl.push({
    event: 'ads_conversion',
    ads_send_to: sendTo,
    ads_conversion_id: conversionId,
    ads_conversion_label: conversionLabel,
    ads_conversion_value: value,
    ads_conversion_currency: currency,
  })
}
