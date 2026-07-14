/**
 * Google Ads website conversion tracking.
 *
 * The Ads tag (AW-...) is loaded by `Analytics.tsx` on every page, alongside GTM.
 * GTM carries GA4, but the Ads conversion tag needs its own gtag config, otherwise
 * website conversions can never fire (which is why "Submit lead form" and
 * "Book appointment" recorded zero conversions).
 *
 * Labels below come straight from the Google Ads conversion actions
 * (account 854-489-2425). Both actions are ENABLED and count ONE_PER_CLICK,
 * so Google de-duplicates repeats from the same ad click.
 */

export const GOOGLE_ADS_ID = 'AW-10866866733'

export const ADS_CONVERSIONS = {
  /** Contact / parts / lead forms. Google Ads action: "Submit lead form" */
  submitLeadForm: {
    sendTo: 'AW-10866866733/qP8LCKDa_44cEK303L0o',
    value: 50.0,
    currency: 'USD',
  },
  /** Appointment requests. Google Ads action: "Book appointment" */
  bookAppointment: {
    sendTo: 'AW-10866866733/1L-TCPmLzY8cEK303L0o',
  },
} as const

type GtagFn = (...args: unknown[]) => void

/**
 * Fire a Google Ads conversion. Safe to call anywhere: it no-ops on the server
 * and when the Ads tag has not loaded (for example if an ad blocker removed it).
 */
export function reportAdsConversion(
  conversion: { sendTo: string; value?: number; currency?: string },
  extra?: Record<string, unknown>
) {
  if (typeof window === 'undefined') return
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag
  if (typeof gtag !== 'function') return

  const payload: Record<string, unknown> = { send_to: conversion.sendTo, ...extra }
  if (typeof conversion.value === 'number') payload.value = conversion.value
  if (conversion.currency) payload.currency = conversion.currency

  gtag('event', 'conversion', payload)
}
