// Shared helper for posting form submissions to OATAS marketing_leads ingestion endpoint.
// Used by /api/appointment, /api/contact, /api/parts-request, /api/newsletter.
//
// Fire-and-forget pattern via context.waitUntil so attribution logging never
// blocks the user-facing form response or breaks if OATAS is temporarily down.

export interface OatasIngestPayload {
  source: string                     // 'website_form'
  source_detail: string              // 'appointment' | 'contact' | 'parts-request' | 'newsletter'
  customer_name?: string
  customer_phone?: string            // raw — OATAS normalizes server-side
  customer_email?: string
  appliance_type?: string
  appliance_brand?: string
  message?: string
  gclid?: string
  gbraid?: string
  wbraid?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  referrer_url?: string
  landing_url?: string
  user_agent?: string
  is_test?: boolean
}

export interface OatasEnv {
  OATAS_INGEST_URL?: string
  OATAS_INGEST_KEY?: string
}

/**
 * Build an attribution payload from FormData. Form components push gclid/UTMs
 * captured by Analytics.tsx into hidden form fields at submit time.
 */
export function buildAttributionFromFormData(
  fd: FormData,
): Pick<OatasIngestPayload, 'gclid' | 'gbraid' | 'wbraid' | 'utm_source' | 'utm_medium' | 'utm_campaign' | 'utm_term' | 'utm_content' | 'landing_url'> {
  const get = (k: string): string | undefined => {
    const v = fd.get(k)
    return typeof v === 'string' && v.trim() ? v.trim() : undefined
  }
  return {
    gclid: get('gclid'),
    gbraid: get('gbraid'),
    wbraid: get('wbraid'),
    utm_source: get('utm_source'),
    utm_medium: get('utm_medium'),
    utm_campaign: get('utm_campaign'),
    utm_term: get('utm_term'),
    utm_content: get('utm_content'),
    landing_url: get('landing_url'),
  }
}

/**
 * POST a payload to OATAS ingest endpoint. Returns a Promise that resolves
 * (with success or failure) — caller should wrap in context.waitUntil so the
 * form response isn't blocked. Errors are caught and logged, never thrown.
 *
 * Returns true if the env vars are configured (call was attempted), false if
 * skipped. Useful for tests/diagnostics; the form flow doesn't need to read it.
 */
export async function ingestToOatas(
  env: OatasEnv,
  payload: OatasIngestPayload,
  request: Request,
): Promise<boolean> {
  const url = env.OATAS_INGEST_URL
  const key = env.OATAS_INGEST_KEY
  if (!url || !key) {
    // Not configured (e.g. preview deploys without secrets). Skip silently.
    return false
  }

  // Enrich with request-side context the form can't see
  const enriched: OatasIngestPayload = {
    ...payload,
    referrer_url: payload.referrer_url ?? request.headers.get('referer') ?? undefined,
    user_agent: payload.user_agent ?? request.headers.get('user-agent') ?? undefined,
  }

  // Strip undefined keys to keep the payload clean
  const clean: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(enriched)) {
    if (v !== undefined && v !== null && v !== '') clean[k] = v
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`,
      },
      body: JSON.stringify(clean),
    })
    if (!res.ok) {
      const text = await res.text().catch(() => '')
      console.error(`OATAS ingest non-OK (${res.status}):`, text.slice(0, 500))
    }
  } catch (err) {
    console.error('OATAS ingest failed:', err instanceof Error ? err.message : String(err))
  }
  return true
}
