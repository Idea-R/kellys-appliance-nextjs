// Cloudflare Pages Function for contact form
// Handles POST requests to /api/contact
// Uses MailChannels API for email delivery

interface ContactFormData {
  name: string;
  email: string;
  zip: string;
  phone: string;
  message: string;
}

const RECIPIENT_EMAIL = 'kellysappliance@gmail.com';
const MAILCHANNELS_API = 'https://api.mailchannels.net/tx/v1/send';

export async function onRequestPost(context: {
  request: Request;
  env: any;
}) {
  try {
    const data = await context.request.json() as ContactFormData;
    const { name, email, zip, phone, message } = data || {};

    // Validate required fields
    if (!name || !email || !zip || !phone || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Invalid email format' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Send email via MailChannels
    const emailPayload = {
      personalizations: [
        {
          to: [{ email: RECIPIENT_EMAIL, name: 'Kelly\'s Appliance Repair' }],
          dkim_domain: 'kellysappliancerepair.com',
          dkim_selector: 'mailchannels',
        },
      ],
      from: {
        email: 'contact@kellysappliancerepair.com',
        name: 'Kelly\'s Website Contact Form',
      },
      reply_to: {
        email: email,
        name: name,
      },
      subject: `New Contact Form Submission from ${name}`,
      content: [
        {
          type: 'text/plain',
          value: `New contact form submission:

Name: ${name}
Email: ${email}
Phone: ${phone}
Zip Code: ${zip}

Message:
${message}

---
Submitted from: kellysappliancerepair.com`,
        },
        {
          type: 'text/html',
          value: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a1a1a; color: white; padding: 20px; text-align: center; }
    .content { background: #f4f4f4; padding: 20px; margin-top: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; }
    .value { margin-top: 5px; }
    .message-box { background: white; padding: 15px; margin-top: 15px; border-left: 4px solid #1a1a1a; }
    .footer { text-align: center; color: #777; font-size: 12px; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Contact Form Submission</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Phone:</div>
        <div class="value"><a href="tel:${phone}">${phone}</a></div>
      </div>
      <div class="field">
        <div class="label">Zip Code:</div>
        <div class="value">${zip}</div>
      </div>
      <div class="message-box">
        <div class="label">Message:</div>
        <div class="value">${message.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
    <div class="footer">
      Submitted from kellysappliancerepair.com
    </div>
  </div>
</body>
</html>`,
        },
      ],
    };

    const mailResponse = await fetch(MAILCHANNELS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    });

    if (!mailResponse.ok) {
      const errorText = await mailResponse.text();
      throw new Error(`MailChannels API error: ${mailResponse.status} - ${errorText}`);
    }

    return new Response(
      JSON.stringify({ ok: true, message: 'Email sent successfully' }),
      { 
        status: 200, 
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        } 
      }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return new Response(
      JSON.stringify({ ok: false, error: 'Failed to send email', details: errorMessage }),
      { 
        status: 500, 
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
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
    },
  });
}
