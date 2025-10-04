// Cloudflare Pages Function for contact form
// Handles POST requests to /api/contact

interface ContactFormData {
  name: string;
  email: string;
  zip: string;
  phone: string;
  message: string;
}

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

    // TODO: Wire up email delivery here
    // Options:
    // 1. Use Cloudflare Email Workers
    // 2. Use external service (Resend, SendGrid, etc.)
    // 3. Use Cloudflare Workers KV to queue submissions
    
    console.log('Contact form submission:', { name, email, phone, zip });

    // For now, just acknowledge receipt
    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ ok: false, error: 'Invalid payload' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
