/**
 * Shared email layout template with logo signature
 */

import { escapeHtml } from './_escape';
import { emailCompanyInfo } from './companyInfo';

interface EmailLayoutOptions {
  title: string;
  content: string;
  logoUrl?: string;
  siteUrl?: string;
}

/**
 * Creates a complete HTML email with header, content, and footer signature
 */
export function createEmailLayout({
  title,
  content,
  logoUrl,
  siteUrl = 'https://kellysappliancerepair.com',
}: EmailLayoutOptions): string {
  const safeSiteUrl = siteUrl.trim();
  const logo = (logoUrl || `${safeSiteUrl}/images/small_logo.jpg`).trim();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f4f4f4;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <!-- Main Container -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #15803d 0%, #16a34a 100%); padding: 30px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: bold; line-height: 1.4;">
                ${escapeHtml(title)}
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              ${content}
            </td>
          </tr>
          
          <!-- Footer Signature -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px 40px; border-top: 1px solid #e5e7eb;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom: 20px;">
                    <img src="${escapeHtml(logo)}" alt="${escapeHtml(emailCompanyInfo.name)}" width="120" height="120" style="display: block; border-radius: 8px; background-color: #ffffff; padding: 8px;" />
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-bottom: 16px;">
                    <h2 style="margin: 0; color: #1f2937; font-size: 20px; font-weight: bold;">
                      ${escapeHtml(emailCompanyInfo.name)}
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-bottom: 12px;">
                    <p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 1.6;">
                      ${escapeHtml(emailCompanyInfo.tagline)}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-bottom: 8px;">
                    <p style="margin: 0; color: #374151; font-size: 14px;">
                      <a href="tel:${emailCompanyInfo.phone.replace(/[^0-9]/g, '')}" style="color: #059669; text-decoration: none; font-weight: 600;">
                        ${escapeHtml(emailCompanyInfo.phone)}
                      </a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-bottom: 8px;">
                    <p style="margin: 0; color: #374151; font-size: 14px;">
                      ${escapeHtml(emailCompanyInfo.address.street)}<br>
                      ${escapeHtml(emailCompanyInfo.address.city)}, ${escapeHtml(emailCompanyInfo.address.state)} ${escapeHtml(emailCompanyInfo.address.zip)}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <p style="margin: 0; color: #6b7280; font-size: 12px; line-height: 1.6;">
                      ${escapeHtml(emailCompanyInfo.hours)}<br>
                      <a href="${escapeHtml(safeSiteUrl)}" style="color: #059669; text-decoration: none;">${escapeHtml(safeSiteUrl.replace(/^https?:\/\//, ''))}</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        
        <!-- Footer Text -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width: 600px; margin-top: 20px;">
          <tr>
            <td align="center" style="padding: 20px; color: #9ca3af; font-size: 12px;">
              <p style="margin: 0;">
                This email was sent from ${escapeHtml(safeSiteUrl.replace(/^https?:\/\//, ''))}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
