// Cloudflare Pages Function for newsletter signup
// Handles POST requests to /api/newsletter
// Uses Resend API for contact management and email delivery

interface NewsletterSignupData {
  email: string;
}

interface Env {
  RESEND_API_KEY?: string;
  CONTACT_EMAIL_FROM?: string;
  CONTACT_EMAIL_FROM_NAME?: string;
  EMAIL_LOGO_URL?: string;
  SITE_URL?: string;
  RESEND_NEWSLETTER_SEGMENT_ID?: string;
  RESEND_NEWSLETTER_TOPIC_ID?: string;
}

const MAX_EMAIL_LENGTH = 255;

export async function onRequestPost(context: {
  request: Request;
  env: Env;
}) {
  try {
    const data = await context.request.json() as NewsletterSignupData;
    const { email } = data || {};

    // Validate required fields
    if (typeof email !== 'string') {
      return new Response(
        JSON.stringify({ ok: false, error: 'Invalid payload' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' } }
      );
    }

    const emailStr = email.trim();
    if (!emailStr) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Email is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' } }
      );
    }

    // Validate email length
    if (emailStr.length > MAX_EMAIL_LENGTH) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Email is too long' }),
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

    // Get environment variables
    const apiKey = context.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return new Response(
        JSON.stringify({ ok: false, error: 'Newsletter service is not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' } }
      );
    }

    const fromEmail = context.env.CONTACT_EMAIL_FROM?.trim();
    if (!fromEmail) {
      console.error('CONTACT_EMAIL_FROM is not configured');
      return new Response(
        JSON.stringify({ ok: false, error: 'Newsletter service is not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' } }
      );
    }

    const fromName = (context.env.CONTACT_EMAIL_FROM_NAME || "Kelly's Appliance Center").trim();
    const logoUrl = context.env.EMAIL_LOGO_URL?.trim();
    const requestOrigin = new URL(context.request.url).origin;
    const siteUrl = (context.env.SITE_URL || requestOrigin || 'https://kellysappliancerepair.com').trim();
    const segmentId = context.env.RESEND_NEWSLETTER_SEGMENT_ID?.trim();
    const topicId = context.env.RESEND_NEWSLETTER_TOPIC_ID?.trim();

    // Import Resend and email utilities
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    // Create or update contact in Resend
    try {
      const contactData: {
        email: string;
        unsubscribed?: boolean;
        segments?: Array<{ id: string }>;
        topics?: Array<{ id: string; subscription: 'opt_in' | 'opt_out' }>;
      } = {
        email: emailStr,
        unsubscribed: false,
      };

      // Add to segment if configured
      if (segmentId) {
        contactData.segments = [{ id: segmentId }];
      }

      // Add to topic if configured
      if (topicId) {
        contactData.topics = [{ id: topicId, subscription: 'opt_in' }];
      }

      await resend.contacts.create(contactData);
    } catch (contactError: any) {
      // If contact already exists, that's okay - Resend will update it
      // Log but don't fail the request
      console.log('Contact creation/update note:', contactError?.message || 'Unknown');
    }

    // Send welcome email
    const {
      createNewsletterWelcomeHtml,
      createNewsletterWelcomeText,
      createNewsletterWelcomeSubject,
    } = await import('../../src/server/email/templates/newsletter');
    const { sendEmail } = await import('../../src/server/email/resend');

    const html = createNewsletterWelcomeHtml(emailStr, logoUrl, siteUrl);
    const text = createNewsletterWelcomeText(emailStr);
    const subject = createNewsletterWelcomeSubject();

    await sendEmail({
      apiKey,
      from: fromEmail,
      fromName,
      to: emailStr,
      subject,
      html,
      text,
    });

    return new Response(
      JSON.stringify({ ok: true, message: 'Successfully subscribed to newsletter' }),
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
    console.error('Newsletter signup error:', errorMessage);
    
    return new Response(
      JSON.stringify({ ok: false, error: 'Failed to subscribe to newsletter' }),
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
