/**
 * Resend email client wrapper
 * Works in both Cloudflare Functions and Next.js server routes
 */

import { Resend } from 'resend';

export interface SendEmailOptions {
  apiKey: string;
  from: string;
  fromName?: string;
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}

/**
 * Sends an email via Resend API
 */
export async function sendEmail({
  apiKey,
  from,
  fromName,
  to,
  subject,
  html,
  text,
  replyTo,
}: SendEmailOptions): Promise<{ id: string }> {
  const resend = new Resend(apiKey);

  const fromAddress = fromName ? `${fromName} <${from}>` : from;

  const { data, error } = await resend.emails.send({
    from: fromAddress,
    to: Array.isArray(to) ? to : [to],
    subject,
    html,
    text: text || undefined,
    replyTo: replyTo || undefined,
  });

  if (error) {
    throw new Error(`Resend API error: ${error.message || JSON.stringify(error)}`);
  }

  if (!data?.id) {
    throw new Error('Resend API returned no email ID');
  }

  return { id: data.id };
}
