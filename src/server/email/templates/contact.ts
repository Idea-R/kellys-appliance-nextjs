/**
 * Contact form email template
 */

import { createEmailLayout } from '../_layout';
import { escapeHtml, escapeHtmlWithBreaks } from '../_escape';

export interface ContactFormData {
  name: string;
  email: string;
  zip: string;
  phone: string;
  message: string;
}

/**
 * Creates HTML email for contact form submission
 */
export function createContactEmailHtml(data: ContactFormData, logoUrl?: string, siteUrl?: string): string {
  const { name, email, zip, phone, message } = data;
  const safeMessage = escapeHtmlWithBreaks(message);

  const content = `
    <div style="color: #1f2937; line-height: 1.6;">
      <p style="margin: 0 0 24px 0; font-size: 16px; color: #374151;">
        You have received a new contact form submission from your website.
      </p>
      
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: 24px;">
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td width="120" style="padding-right: 16px; vertical-align: top;">
                  <strong style="color: #374151; font-size: 14px;">Name:</strong>
                </td>
                <td style="color: #1f2937; font-size: 14px;">
                  ${escapeHtml(name)}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td width="120" style="padding-right: 16px; vertical-align: top;">
                  <strong style="color: #374151; font-size: 14px;">Email:</strong>
                </td>
                <td style="color: #1f2937; font-size: 14px;">
                  <a href="mailto:${escapeHtml(email)}" style="color: #059669; text-decoration: none;">
                    ${escapeHtml(email)}
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td width="120" style="padding-right: 16px; vertical-align: top;">
                  <strong style="color: #374151; font-size: 14px;">Phone:</strong>
                </td>
                <td style="color: #1f2937; font-size: 14px;">
                  <a href="tel:${phone.replace(/[^0-9]/g, '')}" style="color: #059669; text-decoration: none;">
                    ${escapeHtml(phone)}
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td width="120" style="padding-right: 16px; vertical-align: top;">
                  <strong style="color: #374151; font-size: 14px;">Zip Code:</strong>
                </td>
                <td style="color: #1f2937; font-size: 14px;">
                  ${escapeHtml(zip)}
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      
      <div style="background-color: #f9fafb; border-left: 4px solid #059669; padding: 20px; margin-top: 24px; border-radius: 4px;">
        <h3 style="margin: 0 0 12px 0; color: #1f2937; font-size: 16px; font-weight: bold;">
          Message:
        </h3>
        <div style="color: #374151; font-size: 14px; line-height: 1.8;">${safeMessage}</div>
      </div>
      
      <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td align="center">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding: 0 8px;">
                    <a href="mailto:${escapeHtml(email)}?subject=${encodeURIComponent('Re: Contact Form Inquiry')}" style="display: inline-block; padding: 12px 24px; background-color: #059669; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">
                      Reply via Email
                    </a>
                  </td>
                  <td style="padding: 0 8px;">
                    <a href="tel:${phone.replace(/[^0-9]/g, '')}" style="display: inline-block; padding: 12px 24px; background-color: #ffffff; color: #059669; text-decoration: none; border: 2px solid #059669; border-radius: 6px; font-weight: 600; font-size: 14px;">
                      Call Customer
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </div>
  `;

  return createEmailLayout({
    title: `New Contact Form Submission from ${name}`,
    content,
    logoUrl,
    siteUrl,
  });
}

/**
 * Creates plain text version of contact email
 */
export function createContactEmailText(data: ContactFormData): string {
  const { name, email, zip, phone, message } = data;
  
  return `New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}
Zip Code: ${zip}

Message:
${message}

---
Submitted from: kellysappliancerepair.com`;
}

/**
 * Creates email subject line
 */
export function createContactEmailSubject(data: ContactFormData): string {
  const safeName = data.name.replace(/[\r\n]+/g, ' ').trim();
  const safeZip = data.zip.replace(/[\r\n]+/g, ' ').trim();
  return `New Contact Form Submission from ${safeName} (Zip: ${safeZip})`;
}
