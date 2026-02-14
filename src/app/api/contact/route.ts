import { NextResponse } from 'next/server'
import { sendEmail } from '@/server/email/resend'
import {
  createContactEmailHtml,
  createContactEmailText,
  createContactEmailSubject,
  type ContactFormData,
} from '@/server/email/templates/contact'

// Field length limits to prevent abuse
const MAX_FIELD_LENGTHS = {
  name: 100,
  email: 255,
  zip: 10,
  phone: 20,
  message: 5000,
}

export async function POST(request: Request) {
  try {
    const data = await request.json() as ContactFormData
    const { name, email, zip, phone, message } = data || {}

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof zip !== 'string' ||
      typeof phone !== 'string' ||
      typeof message !== 'string'
    ) {
      return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 })
    }

    const nameStr = name.trim()
    const emailStr = email.trim()
    const zipStr = zip.trim()
    const phoneStr = phone.trim()
    const messageStr = message.trim()

    // Validate required fields
    if (!nameStr || !emailStr || !zipStr || !phoneStr || !messageStr) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
    }

    // Validate field lengths
    if (nameStr.length > MAX_FIELD_LENGTHS.name) {
      return NextResponse.json({ ok: false, error: 'Name is too long' }, { status: 400 })
    }
    if (emailStr.length > MAX_FIELD_LENGTHS.email) {
      return NextResponse.json({ ok: false, error: 'Email is too long' }, { status: 400 })
    }
    if (zipStr.length > MAX_FIELD_LENGTHS.zip) {
      return NextResponse.json({ ok: false, error: 'Zip code is too long' }, { status: 400 })
    }
    if (phoneStr.length > MAX_FIELD_LENGTHS.phone) {
      return NextResponse.json({ ok: false, error: 'Phone number is too long' }, { status: 400 })
    }
    if (messageStr.length > MAX_FIELD_LENGTHS.message) {
      return NextResponse.json({ ok: false, error: 'Message is too long' }, { status: 400 })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(emailStr)) {
      return NextResponse.json({ ok: false, error: 'Invalid email format' }, { status: 400 })
    }

    // Get environment variables with defaults
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json({ ok: false, error: 'Email service is not configured' }, { status: 500 })
    }

    const toEmailRaw = (process.env.CONTACT_EMAIL_TO || 'kellysappliance@gmail.com').trim()
    const toEmailList = toEmailRaw
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
    const toEmail = toEmailList.length <= 1 ? (toEmailList[0] || 'kellysappliance@gmail.com') : toEmailList

    const fromEmail = process.env.CONTACT_EMAIL_FROM?.trim()
    if (!fromEmail) {
      console.error('CONTACT_EMAIL_FROM is not configured')
      return NextResponse.json({ ok: false, error: 'Email service is not configured' }, { status: 500 })
    }

    const fromName = (process.env.CONTACT_EMAIL_FROM_NAME || "Kelly's Website Contact Form").trim()
    const logoUrl = process.env.EMAIL_LOGO_URL?.trim()
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'http://localhost:3000'

    // Create email content
    const payload = { name: nameStr, email: emailStr, zip: zipStr, phone: phoneStr, message: messageStr }
    const html = createContactEmailHtml(payload, logoUrl, siteUrl)
    const text = createContactEmailText(payload)
    const subject = createContactEmailSubject(payload)

    // Send email via Resend
    await sendEmail({
      apiKey,
      from: fromEmail,
      fromName,
      to: toEmail,
      subject,
      html,
      text,
      replyTo: emailStr,
    })

    return NextResponse.json({ ok: true, message: 'Email sent successfully' })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Contact form error:', errorMessage)
    return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 })
  }
}


