/**
 * Newsletter welcome email template
 */

import { createEmailLayout } from '../_layout';

/**
 * Creates HTML email for newsletter welcome
 */
export function createNewsletterWelcomeHtml(email: string, logoUrl?: string, siteUrl?: string): string {
  const content = `
    <div style="color: #1f2937; line-height: 1.6;">
      <p style="margin: 0 0 24px 0; font-size: 16px; color: #374151;">
        Thank you for subscribing to our newsletter!
      </p>
      
      <p style="margin: 0 0 24px 0; font-size: 14px; color: #6b7280; line-height: 1.8;">
        You'll receive expert appliance repair tips, maintenance guides, and special offers delivered straight to your inbox.
      </p>
      
      <div style="background-color: #f0fdf4; border-left: 4px solid #059669; padding: 20px; margin: 24px 0; border-radius: 4px;">
        <h3 style="margin: 0 0 12px 0; color: #1f2937; font-size: 16px; font-weight: bold;">
          What to expect:
        </h3>
        <ul style="margin: 0; padding-left: 20px; color: #374151; font-size: 14px; line-height: 1.8;">
          <li>Monthly maintenance tips to keep your appliances running smoothly</li>
          <li>Expert troubleshooting guides for common appliance issues</li>
          <li>Exclusive offers and promotions for subscribers</li>
          <li>Seasonal maintenance reminders</li>
        </ul>
      </div>
      
      <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td align="center">
              <a href="${siteUrl || 'https://kellysappliancerepair.com'}/blog" style="display: inline-block; padding: 12px 24px; background-color: #059669; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">
                Read Our Latest Blog Posts
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  `;

  return createEmailLayout({
    title: 'Welcome to Kelly\'s Appliance Center Newsletter',
    content,
    logoUrl,
    siteUrl,
  });
}

/**
 * Creates plain text version of newsletter welcome email
 */
export function createNewsletterWelcomeText(email: string): string {
  void email;
  return `Thank you for subscribing to our newsletter!

You'll receive expert appliance repair tips, maintenance guides, and special offers delivered straight to your inbox.

What to expect:
- Monthly maintenance tips to keep your appliances running smoothly
- Expert troubleshooting guides for common appliance issues
- Exclusive offers and promotions for subscribers
- Seasonal maintenance reminders

Visit our blog: https://kellysappliancerepair.com/blog

Thank you,
Kelly's Appliance Center`;
}

/**
 * Creates email subject line
 */
export function createNewsletterWelcomeSubject(): string {
  return 'Welcome to Kelly\'s Appliance Center Newsletter';
}
