// Cloudflare Pages Function for parts request form
// Handles POST requests to /api/parts-request
// Accepts multipart FormData (text fields + optional photo attachments)
// Uses Resend API for email delivery

interface FileAttachment {
  filename: string
  content: string // base64
  size: number
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

const MAX_FILES = 3
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5 MB per file
const ACCEPTED_MIME = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif']

const CORS_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Cache-Control': 'no-store',
}

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: CORS_HEADERS })
}

/** Read a FormData text field, trimmed. Returns '' if missing. */
function field(fd: FormData, key: string): string {
  const v = fd.get(key)
  return typeof v === 'string' ? v.trim() : ''
}

/** Generate a reference number like KAP-0312-4521 */
function generateRefNumber(): string {
  const now = new Date()
  const mm = String(now.getMonth() + 1).padStart(2, '0')
  const dd = String(now.getDate()).padStart(2, '0')
  const rand = String(Math.floor(1000 + Math.random() * 9000))
  return `KAP-${mm}${dd}-${rand}`
}

/** Convert a File to a base64 attachment object */
async function fileToAttachment(file: File): Promise<FileAttachment> {
  const buffer = await file.arrayBuffer()
  const bytes = new Uint8Array(buffer)
  // Convert to base64 in chunks to avoid call-stack limits
  let binary = ''
  for (let i = 0; i < bytes.length; i += 8192) {
    binary += String.fromCharCode(...bytes.subarray(i, i + 8192))
  }
  const base64 = btoa(binary)
  return { filename: file.name || 'photo.jpg', content: base64, size: file.size }
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    // Parse multipart form data
    const fd = await context.request.formData()

    // Extract text fields
    const nameStr = field(fd, 'name')
    const phoneStr = field(fd, 'phone')
    const descStr = field(fd, 'partDescription')
    const emailStr = field(fd, 'email')
    const applianceStr = field(fd, 'appliance')
    const brandStr = field(fd, 'brand')
    const modelStr = field(fd, 'modelNumber')

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

    // Extract and validate photo files
    const photoEntries = fd.getAll('photos').filter((v): v is File => v instanceof File && v.size > 0)
    if (photoEntries.length > MAX_FILES) {
      return jsonResponse({ ok: false, error: `Maximum ${MAX_FILES} photos allowed.` }, 400)
    }
    for (const f of photoEntries) {
      if (!ACCEPTED_MIME.includes(f.type)) {
        return jsonResponse({ ok: false, error: `${f.name}: unsupported image type. Use JPG, PNG, or WebP.` }, 400)
      }
      if (f.size > MAX_FILE_SIZE) {
        return jsonResponse({ ok: false, error: `${f.name}: exceeds 5 MB limit.` }, 400)
      }
    }

    // Convert files to base64 attachments
    const attachments: FileAttachment[] = []
    for (const f of photoEntries) {
      attachments.push(await fileToAttachment(f))
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

    const html = createPartsRequestEmailHtml(formData, refNumber, attachments.length, logoUrl, siteUrl)
    const text = createPartsRequestEmailText(formData, refNumber, attachments.length)
    const subject = createPartsRequestEmailSubject(formData, refNumber)

    // Send email via Resend (with attachments if any)
    await sendEmail({
      apiKey,
      from: fromEmail,
      fromName,
      to: toEmail,
      subject,
      html,
      text,
      replyTo: emailStr || undefined,
      attachments: attachments.length
        ? attachments.map((a) => ({ filename: a.filename, content: a.content }))
        : undefined,
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
