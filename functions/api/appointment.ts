// Cloudflare Pages Function for appointment request form
// Handles POST requests to /api/appointment
// Uses Resend API for email delivery

interface AppointmentFormData {
  name: string;
  phone: string;
  email?: string;
  appliance: string;
  brand?: string;
  issue: string;
}

/** Generate a short reference number: KAC-MMDD-XXXX */
function generateRefNumber(): string {
  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const rand = String(Math.floor(1000 + Math.random() * 9000)); // 4-digit random
  return `KAC-${mm}${dd}-${rand}`;
}

interface Env {
  RESEND_API_KEY?: string;
  CONTACT_EMAIL_TO?: string;
  CONTACT_EMAIL_FROM?: string;
  CONTACT_EMAIL_FROM_NAME?: string;
  EMAIL_LOGO_URL?: string;
  SITE_URL?: string;
}

const MAX_FIELD_LENGTHS = {
  name: 100,
  phone: 20,
  email: 255,
  appliance: 100,
  brand: 100,
  issue: 3000,
};

export async function onRequestPost(context: {
  request: Request;
  env: Env;
}) {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-store',
  };

  try {
    const data = await context.request.json() as AppointmentFormData;
    const { name, phone, email, appliance, brand, issue } = data || {};

    // Validate required string fields
    if (
      typeof name !== 'string' ||
      typeof phone !== 'string' ||
      typeof appliance !== 'string' ||
      typeof issue !== 'string'
    ) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Invalid payload' }),
        { status: 400, headers }
      );
    }

    const nameStr = name.trim();
    const phoneStr = phone.trim();
    const emailStr = (typeof email === 'string' ? email.trim() : '') || undefined;
    const applianceStr = appliance.trim();
    const brandStr = (typeof brand === 'string' ? brand.trim() : '') || undefined;
    const issueStr = issue.trim();

    // Validate required fields
    if (!nameStr || !phoneStr || !applianceStr || !issueStr) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Please fill in all required fields' }),
        { status: 400, headers }
      );
    }

    // Validate field lengths
    if (nameStr.length > MAX_FIELD_LENGTHS.name) {
      return new Response(JSON.stringify({ ok: false, error: 'Name is too long' }), { status: 400, headers });
    }
    if (phoneStr.length > MAX_FIELD_LENGTHS.phone) {
      return new Response(JSON.stringify({ ok: false, error: 'Phone number is too long' }), { status: 400, headers });
    }
    if (emailStr && emailStr.length > MAX_FIELD_LENGTHS.email) {
      return new Response(JSON.stringify({ ok: false, error: 'Email is too long' }), { status: 400, headers });
    }
    if (applianceStr.length > MAX_FIELD_LENGTHS.appliance) {
      return new Response(JSON.stringify({ ok: false, error: 'Appliance type is too long' }), { status: 400, headers });
    }
    if (brandStr && brandStr.length > MAX_FIELD_LENGTHS.brand) {
      return new Response(JSON.stringify({ ok: false, error: 'Brand name is too long' }), { status: 400, headers });
    }
    if (issueStr.length > MAX_FIELD_LENGTHS.issue) {
      return new Response(JSON.stringify({ ok: false, error: 'Issue description is too long' }), { status: 400, headers });
    }

    // Basic email validation (optional field)
    if (emailStr) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailStr)) {
        return new Response(
          JSON.stringify({ ok: false, error: 'Invalid email format' }),
          { status: 400, headers }
        );
      }
    }

    // Basic phone validation
    const digitsOnly = phoneStr.replace(/[^0-9]/g, '');
    if (digitsOnly.length < 7 || digitsOnly.length > 15) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Please enter a valid phone number' }),
        { status: 400, headers }
      );
    }

    // Get environment variables
    const apiKey = context.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return new Response(
        JSON.stringify({ ok: false, error: 'Email service is not configured' }),
        { status: 500, headers }
      );
    }

    const toEmailRaw = (context.env.CONTACT_EMAIL_TO || 'kellysappliance@gmail.com').trim();
    const toEmailList = toEmailRaw.split(',').map((s) => s.trim()).filter(Boolean);
    const toEmail = toEmailList.length <= 1 ? (toEmailList[0] || 'kellysappliance@gmail.com') : toEmailList;

    const fromEmail = context.env.CONTACT_EMAIL_FROM?.trim();
    if (!fromEmail) {
      console.error('CONTACT_EMAIL_FROM is not configured');
      return new Response(
        JSON.stringify({ ok: false, error: 'Email service is not configured' }),
        { status: 500, headers }
      );
    }

    const fromName = (context.env.CONTACT_EMAIL_FROM_NAME || "Kelly's Appliance - Appointment Request").trim();
    const logoUrl = context.env.EMAIL_LOGO_URL?.trim();
    const requestOrigin = new URL(context.request.url).origin;
    const siteUrl = (context.env.SITE_URL || requestOrigin || 'https://kellysappliancerepair.com').trim();

    // Import email utilities
    const { sendEmail } = await import('../../src/server/email/resend');
    const {
      createAppointmentEmailHtml,
      createAppointmentEmailText,
      createAppointmentEmailSubject,
    } = await import('../../src/server/email/templates/appointment');

    // Generate reference number
    const refNumber = generateRefNumber();

    // Create email content
    const payload = {
      name: nameStr,
      phone: phoneStr,
      email: emailStr,
      appliance: applianceStr,
      brand: brandStr,
      issue: issueStr,
    };
    const html = createAppointmentEmailHtml(payload, refNumber, logoUrl, siteUrl);
    const text = createAppointmentEmailText(payload, refNumber);
    const subject = createAppointmentEmailSubject(payload, refNumber);

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

    return new Response(
      JSON.stringify({ ok: true, message: 'Appointment request sent successfully', refNumber }),
      { status: 200, headers }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Appointment form error:', errorMessage);

    return new Response(
      JSON.stringify({ ok: false, error: 'Failed to send request. Please call us instead.' }),
      { status: 500, headers }
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
