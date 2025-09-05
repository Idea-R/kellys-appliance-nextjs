import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, zip, phone, message } = data || {}

    if (!name || !email || !zip || !phone || !message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
    }

    // Placeholder: wire up email delivery (SMTP, Resend, etc.) here.
    // For now we just acknowledge receipt.
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 })
  }
}


