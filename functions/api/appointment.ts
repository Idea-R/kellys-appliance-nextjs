// Cloudflare Pages Function for appointment request form
// Handles POST requests to /api/appointment
// Accepts multipart FormData (text fields + optional photo attachments)
// Uses Resend API for email delivery

interface AppointmentFormData {
  name: string;
  phone: string;
  email?: string;
  appliance: string;
  brand?: string;
  issue: string;
  modelNumber?: string;
  serialNumber?: string;
  address?: string;
  city?: string;
  zip?: string;
}

interface FileAttachment {
  filename: string;
  content: string; // base64
  size: number;
}

/** Generate a short reference number: KAC-MMDD-XXXX */
function generateRefNumber(): string {
  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const rand = String(Math.floor(1000 + Math.random() * 9000));
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
  modelNumber: 50,
  serialNumber: 50,
  address: 200,
  city: 100,
  zip: 10,
};

const MAX_FILES = 3;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB per file
const ACCEPTED_MIME = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif'];

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Cache-Control': 'no-store',
};

function badRequest(msg: string) {
  return new Response(JSON.stringify({ ok: false, error: msg }), { status: 400, headers });
}

/** Read a FormData text field, trimmed. Returns '' if missing. */
function field(fd: FormData, key: string): string {
  const v = fd.get(key);
  return typeof v === 'string' ? v.trim() : '';
}

/** Convert a File to a base64 attachment object */
async function fileToAttachment(file: File): Promise<FileAttachment> {
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  // Convert to base64 in chunks to avoid call-stack limits
  let binary = '';
  for (let i = 0; i < bytes.length; i += 8192) {
    binary += String.fromCharCode(...bytes.subarray(i, i + 8192));
  }
  const base64 = btoa(binary);
  return { filename: file.name || 'photo.jpg', content: base64, size: file.size };
}

export async function onRequestPost(context: {
  request: Request;
  env: Env;
}) {
  try {
    // Parse multipart form data
    const fd = await context.request.formData();

    // Extract text fields
    const name = field(fd, 'name');
    const phone = field(fd, 'phone');
    const emailStr = field(fd, 'email') || undefined;
    const appliance = field(fd, 'appliance');
    const brand = field(fd, 'brand') || undefined;
    const issue = field(fd, 'issue');
    const modelNumber = field(fd, 'modelNumber') || undefined;
    const serialNumber = field(fd, 'serialNumber') || undefined;
    const address = field(fd, 'address') || undefined;
    const city = field(fd, 'city') || undefined;
    const zip = field(fd, 'zip') || undefined;

    // Validate required fields
    if (!name || !phone || !appliance || !issue) {
      return badRequest('Please fill in all required fields.');
    }

    // Validate field lengths
    if (name.length > MAX_FIELD_LENGTHS.name) return badRequest('Name is too long.');
    if (phone.length > MAX_FIELD_LENGTHS.phone) return badRequest('Phone number is too long.');
    if (emailStr && emailStr.length > MAX_FIELD_LENGTHS.email) return badRequest('Email is too long.');
    if (appliance.length > MAX_FIELD_LENGTHS.appliance) return badRequest('Appliance type is too long.');
    if (brand && brand.length > MAX_FIELD_LENGTHS.brand) return badRequest('Brand name is too long.');
    if (issue.length > MAX_FIELD_LENGTHS.issue) return badRequest('Issue description is too long.');
    if (modelNumber && modelNumber.length > MAX_FIELD_LENGTHS.modelNumber) return badRequest('Model number is too long.');
    if (serialNumber && serialNumber.length > MAX_FIELD_LENGTHS.serialNumber) return badRequest('Serial number is too long.');
    if (address && address.length > MAX_FIELD_LENGTHS.address) return badRequest('Address is too long.');
    if (city && city.length > MAX_FIELD_LENGTHS.city) return badRequest('City name is too long.');
    if (zip && zip.length > MAX_FIELD_LENGTHS.zip) return badRequest('Zip code is too long.');

    // Email format
    if (emailStr) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailStr)) return badRequest('Invalid email format.');
    }

    // Phone format
    const digitsOnly = phone.replace(/[^0-9]/g, '');
    if (digitsOnly.length < 7 || digitsOnly.length > 15) {
      return badRequest('Please enter a valid phone number.');
    }

    // Extract and validate photo files
    const photoEntries = fd.getAll('photos').filter((v): v is File => v instanceof File && v.size > 0);
    if (photoEntries.length > MAX_FILES) {
      return badRequest(`Maximum ${MAX_FILES} photos allowed.`);
    }
    for (const f of photoEntries) {
      if (!ACCEPTED_MIME.includes(f.type)) {
        return badRequest(`${f.name}: unsupported image type. Use JPG, PNG, or WebP.`);
      }
      if (f.size > MAX_FILE_SIZE) {
        return badRequest(`${f.name}: exceeds 5 MB limit.`);
      }
    }

    // Convert files to base64 attachments
    const attachments: FileAttachment[] = [];
    for (const f of photoEntries) {
      attachments.push(await fileToAttachment(f));
    }

    // Environment variables
    const apiKey = context.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return new Response(
        JSON.stringify({ ok: false, error: 'Email service is not configured' }),
        { status: 500, headers },
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
        { status: 500, headers },
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

    // Build payload
    const payload: AppointmentFormData = {
      name, phone, email: emailStr, appliance, brand, issue,
      modelNumber, serialNumber, address, city, zip,
    };

    const html = createAppointmentEmailHtml(payload, refNumber, attachments.length, logoUrl, siteUrl);
    const text = createAppointmentEmailText(payload, refNumber, attachments.length);
    const subject = createAppointmentEmailSubject(payload, refNumber);

    // Send email with attachments
    await sendEmail({
      apiKey,
      from: fromEmail,
      fromName,
      to: toEmail,
      subject,
      html,
      text,
      replyTo: emailStr,
      attachments: attachments.length
        ? attachments.map((a) => ({ filename: a.filename, content: a.content }))
        : undefined,
    });

    return new Response(
      JSON.stringify({ ok: true, message: 'Appointment request sent successfully', refNumber }),
      { status: 200, headers },
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Appointment form error:', errorMessage);

    return new Response(
      JSON.stringify({ ok: false, error: 'Failed to send request. Please call us instead.' }),
      { status: 500, headers },
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
