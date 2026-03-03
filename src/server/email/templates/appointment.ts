/**
 * Appointment request email template
 */

import { createEmailLayout } from '../_layout';
import { escapeHtml, escapeHtmlWithBreaks } from '../_escape';

export interface AppointmentFormData {
  name: string;
  phone: string;
  email?: string;
  appliance: string;
  brand?: string;
  issue: string;
}

/**
 * Creates HTML email for appointment request submission
 */
export function createAppointmentEmailHtml(data: AppointmentFormData, refNumber: string, logoUrl?: string, siteUrl?: string): string {
  const { name, phone, email, appliance, brand, issue } = data;
  const safeIssue = escapeHtmlWithBreaks(issue);

  const emailRow = email ? `
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
        </tr>` : '';

  const brandRow = brand ? `
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td width="120" style="padding-right: 16px; vertical-align: top;">
                  <strong style="color: #374151; font-size: 14px;">Brand:</strong>
                </td>
                <td style="color: #1f2937; font-size: 14px;">
                  ${escapeHtml(brand)}
                </td>
              </tr>
            </table>
          </td>
        </tr>` : '';

  const content = `
    <div style="color: #1f2937; line-height: 1.6;">
      <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px; margin-bottom: 24px; border-radius: 4px;">
        <p style="margin: 0; font-size: 15px; color: #92400e; font-weight: 600;">
          ⚡ New Appointment Request from Website
        </p>
        <p style="margin: 8px 0 0 0; font-size: 13px; color: #a16207;">
          This customer submitted the quick request form. Please call to confirm scheduling.
        </p>
      </div>

      <div style="background-color: #ecfdf5; border: 2px solid #059669; padding: 14px 20px; margin-bottom: 24px; border-radius: 8px; text-align: center;">
        <p style="margin: 0; font-size: 12px; color: #065f46; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Reference Number</p>
        <p style="margin: 4px 0 0 0; font-size: 22px; color: #059669; font-weight: 800; font-family: monospace; letter-spacing: 2px;">${escapeHtml(refNumber)}</p>
      </div>

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
                  <strong style="color: #374151; font-size: 14px;">Phone:</strong>
                </td>
                <td style="color: #1f2937; font-size: 14px;">
                  <a href="tel:${phone.replace(/[^0-9]/g, '')}" style="color: #059669; text-decoration: none; font-weight: 600; font-size: 16px;">
                    ${escapeHtml(phone)}
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>${emailRow}
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td width="120" style="padding-right: 16px; vertical-align: top;">
                  <strong style="color: #374151; font-size: 14px;">Appliance:</strong>
                </td>
                <td style="color: #1f2937; font-size: 14px;">
                  ${escapeHtml(appliance)}
                </td>
              </tr>
            </table>
          </td>
        </tr>${brandRow}
      </table>

      <div style="background-color: #f9fafb; border-left: 4px solid #059669; padding: 20px; margin-top: 24px; border-radius: 4px;">
        <h3 style="margin: 0 0 12px 0; color: #1f2937; font-size: 16px; font-weight: bold;">
          Issue Description:
        </h3>
        <div style="color: #374151; font-size: 14px; line-height: 1.8;">${safeIssue}</div>
      </div>

      <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td align="center">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding: 0 8px;">
                    <a href="tel:${phone.replace(/[^0-9]/g, '')}" style="display: inline-block; padding: 14px 28px; background-color: #059669; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 15px;">
                      📞 Call Customer Now
                    </a>
                  </td>${email ? `
                  <td style="padding: 0 8px;">
                    <a href="mailto:${escapeHtml(email)}?subject=${encodeURIComponent(`Re: Your Appointment Request ${refNumber} - Kelly's Appliance`)}" style="display: inline-block; padding: 14px 28px; background-color: #ffffff; color: #059669; text-decoration: none; border: 2px solid #059669; border-radius: 6px; font-weight: 600; font-size: 15px;">
                      ✉️ Reply via Email
                    </a>
                  </td>` : ''}
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </div>
  `;

  return createEmailLayout({
    title: `New Appointment Request ${refNumber} | ${appliance}`,
    content,
    logoUrl,
    siteUrl,
  });
}

/**
 * Creates plain text version of appointment email
 */
export function createAppointmentEmailText(data: AppointmentFormData, refNumber: string): string {
  const { name, phone, email, appliance, brand, issue } = data;

  return `⚡ NEW APPOINTMENT REQUEST FROM WEBSITE

Reference: ${refNumber}

Name: ${name}
Phone: ${phone}${email ? `\nEmail: ${email}` : ''}
Appliance: ${appliance}${brand ? `\nBrand: ${brand}` : ''}

Issue Description:
${issue}

---
Please call the customer to confirm scheduling.
Submitted from: kellysappliancerepair.com`;
}

/**
 * Creates email subject line
 */
export function createAppointmentEmailSubject(data: AppointmentFormData, refNumber: string): string {
  const safeName = data.name.replace(/[\r\n]+/g, ' ').trim();
  const safeAppliance = data.appliance.replace(/[\r\n]+/g, ' ').trim();
  return `🔧 ${refNumber} | ${safeAppliance} | ${safeName}`;
}
