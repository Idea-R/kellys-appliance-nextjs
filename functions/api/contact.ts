// Cloudflare Pages Function for contact form
// Handles POST requests to /api/contact
// Uses Resend API for email delivery
// Also fires fire-and-forget POST to OATAS for lead attribution tracking

import { ingestToOatas } from '../_lib/oatas-ingest'

interface ContactFormData {
  name: string;
  email: string;
  zip: string;
  phone: string;
  message: string;
  preferredContact?: 'phone' | 'text' | 'email';
  // Optional attribution fields appended by ContactForm.tsx from sessionStorage
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  landing_url?: string;
}

interface Env {
  RESEND_API_KEY?: string;
  CONTACT_EMAIL_TO?: string;
  CONTACT_EMAIL_FROM?: string;
  CONTACT_EMAIL_FROM_NAME?: string;
  EMAIL_LOGO_URL?: string;
  SITE_URL?: string;
  OATAS_INGEST_URL?: string;
  OATAS_INGEST_KEY?: string;
}

// Field length limits to prevent abuse
const MAX_FIELD_LENGTHS = {
  name: 100,
  email: 255,
  zip: 10,
  phone: 20,
  message: 5000,
};

export async function onRequestPost(context: {
  request: Request;
  env: Env;
  waitUntil: (promise: Promise<unknown>) => void;
}) {
  try {
    const data = await context.request.json() as ContactFormData;
    const { name, email, zip, phone, message } = data || {};

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof zip !== 'string' ||
      typeof phone !== 'string' ||
      typeof message !== 'string'
    ) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Invalid payload' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' } }
      );
    }

    const nameStr = name.trim();
    const emailStr = email.trim();
    const zipStr = zip.trim();
    const phoneStr = phone.trim();
    const messageStr = message.trim();
    const preferredContactRaw = (data.preferredContact || 'phone').toString().trim();
    const preferredContact: 'phone' | 'text' | 'email' =
      preferredContactRaw === 'text' || preferredContactRaw === 'email'
        ? preferredContactRaw
        : 'phone';
    const contactPrefLabel = preferredContact === 'phone' ? 'Phone call' : preferredContact === 'text' ? 'Text' : 'Email';

    // Validate required fields
    if (!nameStr || !emailStr || !zipStr || !phoneStr || !messageStr) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' } }
      );
    }

    // Validate field lengths
    if (nameStr.length > MAX_FIELD_LENGTHS.name) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Name is too long' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' } }
      );
    }
    if (emailStr.length > MAX_FIELD_LENGTHS.email) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Email is too long' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' } }
      );
    }
    if (zipStr.length > MAX_FIELD_LENGTHS.zip) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Zip code is too long' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' } }
      );
    }
    if (phoneStr.length > MAX_FIELD_LENGTHS.phone) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Phone number is too long' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' } }
      );
    }
    if (messageStr.length > MAX_FIELD_LENGTHS.message) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Message is too long' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' } }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailStr)) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Invalid email format' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' } }
      );
    }

    // Get environment variables with defaults
    const apiKey = context.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return new Response(
        JSON.stringify({ ok: false, error: 'Email service is not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' } }
      );
    }

    const toEmailRaw = (context.env.CONTACT_EMAIL_TO || 'kellysappliance@gmail.com').trim();
    const toEmailList = toEmailRaw
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    const toEmail = toEmailList.length <= 1 ? (toEmailList[0] || 'kellysappliance@gmail.com') : toEmailList;

    const fromEmail = context.env.CONTACT_EMAIL_FROM?.trim();
    if (!fromEmail) {
      console.error('CONTACT_EMAIL_FROM is not configured');
      return new Response(
        JSON.stringify({ ok: false, error: 'Email service is not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' } }
      );
    }

    const fromName = (context.env.CONTACT_EMAIL_FROM_NAME || "Kelly's Website Contact Form").trim();
    const logoUrl = context.env.EMAIL_LOGO_URL?.trim();
    const requestOrigin = new URL(context.request.url).origin;
    const siteUrl = (context.env.SITE_URL || requestOrigin || 'https://kellysappliancerepair.com').trim();

    // Import email utilities
    const { sendEmail } = await import('../../src/server/email/resend');
    const {
      createContactEmailHtml,
      createContactEmailText,
      createContactEmailSubject,
    } = await import('../../src/server/email/templates/contact');

    // Create email content
    const payload = { name: nameStr, email: emailStr, zip: zipStr, phone: phoneStr, message: messageStr, preferredContact };
    const html = createContactEmailHtml(payload, logoUrl, siteUrl);
    const text = createContactEmailText(payload);
    const subject = createContactEmailSubject(payload);

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
    });

    // Fire-and-forget: post to OATAS for lead attribution tracking.
    context.waitUntil(
      ingestToOatas(
        { OATAS_INGEST_URL: context.env.OATAS_INGEST_URL, OATAS_INGEST_KEY: context.env.OATAS_INGEST_KEY },
        {
          source: 'website_form',
          source_detail: 'contact',
          customer_name: nameStr,
          customer_phone: phoneStr,
          customer_email: emailStr,
          message: `Preferred contact: ${contactPrefLabel}\n\n${messageStr}`,
          gclid: data.gclid,
          gbraid: data.gbraid,
          wbraid: data.wbraid,
          utm_source: data.utm_source,
          utm_medium: data.utm_medium,
          utm_campaign: data.utm_campaign,
          utm_term: data.utm_term,
          utm_content: data.utm_content,
          landing_url: data.landing_url,
        },
        context.request,
      ),
    );

    return new Response(
      JSON.stringify({ ok: true, message: 'Email sent successfully' }),
      { 
        status: 200, 
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-store',
        } 
      }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Contact form error:', errorMessage);
    
    return new Response(
      JSON.stringify({ ok: false, error: 'Failed to send email' }),
      { 
        status: 500, 
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-store',
        } 
      }
    );
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
  });
}
