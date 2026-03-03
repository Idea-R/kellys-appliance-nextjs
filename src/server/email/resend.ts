/**
 * Resend email client wrapper
 * Works in both Cloudflare Functions and Next.js server routes
 */

import { Resend } from 'resend';

export interface EmailAttachment {
  filename: string;
  content: string; // base64-encoded
}

export interface SendEmailOptions {
  apiKey: string;
  from: string;
  fromName?: string;
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
  attachments?: EmailAttachment[];
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
  attachments,
}: SendEmailOptions): Promise<{ id: string }> {
  const resend = new Resend(apiKey);

  const fromAddress = fromName ? `${fromName} <${from}>` : from;

  // Convert base64 strings to Buffers for Resend SDK
  const resendAttachments = attachments?.length
    ? attachments.map((a) => ({
        filename: a.filename,
        content: Buffer.from(a.content, 'base64'),
      }))
    : undefined;

  const { data, error } = await resend.emails.send({
    from: fromAddress,
    to: Array.isArray(to) ? to : [to],
    subject,
    html,
    text: text || undefined,
    replyTo: replyTo || undefined,
    attachments: resendAttachments,
  });

  if (error) {
    throw new Error(`Resend API error: ${error.message || JSON.stringify(error)}`);
  }

  if (!data?.id) {
    throw new Error('Resend API returned no email ID');
  }

  return { id: data.id };
}
