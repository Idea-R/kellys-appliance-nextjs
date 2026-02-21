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
