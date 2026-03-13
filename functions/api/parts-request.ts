// Cloudflare Pages Function for parts request form
// Handles POST requests to /api/parts-request
// Uses Resend API for email delivery

interface PartsRequestData {
  name: string
  phone: string
  email?: string
  appliance?: string
  brand?: string
  modelNumber?: string
  partDescription: string
}

interface Env {
  RESEND_API_KEY?: string
  CONTACT_EMAIL_TO?: string
  CONTACT_EMAIL_FROM?: string
  CONTACT_EMAIL_FROM_NAME?: string
  EMAIL_LOGO_URL?: string
  SITE_URL?: string
}

const MAX_FIELD_LENGTHS = {
  name: 100,
  phone: 20,
  email: 255,
  appliance: 100,
  brand: 100,
  modelNumber: 50,
  partDescription: 3000,
}

const CORS_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Cache-Control': 'no-store',
}

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: CORS_HEADERS })
}

/** Generate a reference number like KAP-0312-4521 */
function generateRefNumber(): string {
  const now = new Date()
  const mm = String(now.getMonth() + 1).padStart(2, '0')
  const dd = String(now.getDate()).padStart(2, '0')
  const rand = String(Math.floor(1000 + Math.random() * 9000))
  return `KAP-${mm}${dd}-${rand}`
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    const data = (await context.request.json()) as PartsRequestData
    const { name, phone, email, appliance, brand, modelNumber, partDescription } = data || {}

    // Validate required fields exist and are strings
    if (
      typeof name !== 'string' ||
      typeof phone !== 'string' ||
      typeof partDescription !== 'string'
    ) {
      return jsonResponse({ ok: false, error: 'Invalid payload' }, 400)
    }

    const nameStr = name.trim()
    const phoneStr = phone.trim()
    const descStr = partDescription.trim()
    const emailStr = typeof email === 'string' ? email.trim() : ''
    const applianceStr = typeof appliance === 'string' ? appliance.trim() : ''
    const brandStr = typeof brand === 'string' ? brand.trim() : ''
    const modelStr = typeof modelNumber === 'string' ? modelNumber.trim() : ''

    // Required fields
    if (!nameStr || !phoneStr || !descStr) {
      return jsonResponse({ ok: false, error: 'Name, phone, and part description are required' }, 400)
    }

    // Validate field lengths
    if (nameStr.length > MAX_FIELD_LENGTHS.name) return jsonResponse({ ok: false, error: 'Name is too long' }, 400)
    if (phoneStr.length > MAX_FIELD_LENGTHS.phone) return jsonResponse({ ok: false, error: 'Phone number is too long' }, 400)
    if (descStr.length > MAX_FIELD_LENGTHS.partDescription) return jsonResponse({ ok: false, error: 'Description is too long' }, 400)
    if (emailStr.length > MAX_FIELD_LENGTHS.email) return jsonResponse({ ok: false, error: 'Email is too long' }, 400)
    if (applianceStr.length > MAX_FIELD_LENGTHS.appliance) return jsonResponse({ ok: false, error: 'Appliance type is too long' }, 400)
    if (brandStr.length > MAX_FIELD_LENGTHS.brand) return jsonResponse({ ok: false, error: 'Brand is too long' }, 400)
    if (modelStr.length > MAX_FIELD_LENGTHS.modelNumber) return jsonResponse({ ok: false, error: 'Model number is too long' }, 400)

    // Validate phone (7-15 digits)
    const phoneDigits = phoneStr.replace(/[^0-9]/g, '')
    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      return jsonResponse({ ok: false, error: 'Please enter a valid phone number' }, 400)
    }

    // Validate email format if provided
    if (emailStr) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(emailStr)) {
        return jsonResponse({ ok: false, error: 'Invalid email format' }, 400)
      }
    }

    // Check Resend config
    const apiKey = context.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured')
      return jsonResponse({ ok: false, error: 'Email service is not configured' }, 500)
    }

    const toEmailRaw = (context.env.CONTACT_EMAIL_TO || 'kellysappliance@gmail.com').trim()
    const toEmailList = toEmailRaw.split(',').map((s) => s.trim()).filter(Boolean)
    const toEmail = toEmailList.length <= 1 ? (toEmailList[0] || 'kellysappliance@gmail.com') : toEmailList

    const fromEmail = context.env.CONTACT_EMAIL_FROM?.trim()
    if (!fromEmail) {
      console.error('CONTACT_EMAIL_FROM is not configured')
      return jsonResponse({ ok: false, error: 'Email service is not configured' }, 500)
    }

    const fromName = "Kelly's Appliance - Parts Request"
    const logoUrl = context.env.EMAIL_LOGO_URL?.trim()
    const requestOrigin = new URL(context.request.url).origin
    const siteUrl = (context.env.SITE_URL || requestOrigin || 'https://kellysappliancerepair.com').trim()

    // Import email utilities
    const { sendEmail } = await import('../../src/server/email/resend')
    const {
      createPartsRequestEmailHtml,
      createPartsRequestEmailText,
      createPartsRequestEmailSubject,
    } = await import('../../src/server/email/templates/parts-request')

    // Generate reference number
    const refNumber = generateRefNumber()

    // Build email
    const formData = {
      name: nameStr,
      phone: phoneStr,
      email: emailStr || undefined,
      appliance: applianceStr || undefined,
      brand: brandStr || undefined,
      modelNumber: modelStr || undefined,
      partDescription: descStr,
    }

    const html = createPartsRequestEmailHtml(formData, refNumber, logoUrl, siteUrl)
    const text = createPartsRequestEmailText(formData, refNumber)
    const subject = createPartsRequestEmailSubject(formData, refNumber)

    // Send email via Resend
    await sendEmail({
      apiKey,
      from: fromEmail,
      fromName,
      to: toEmail,
      subject,
      html,
      text,
      replyTo: emailStr || undefined,
    })

    return jsonResponse({ ok: true, message: 'Parts request submitted', refNumber })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Parts request error:', errorMessage)
    return jsonResponse({ ok: false, error: 'Failed to send parts request' }, 500)
  }
}

// Handle CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Cache-Control': 'no-store',
    },
  })
}
