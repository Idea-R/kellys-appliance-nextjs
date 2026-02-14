/**
 * Company info used in email templates.
 *
 * This is intentionally kept dependency-free (no `@/` path aliases) so it can be
 * safely imported by Cloudflare Pages Functions bundles.
 */

export const emailCompanyInfo = {
  name: "Kelly's Appliance Center",
  phone: '(707) 664-9702',
  tagline: 'Professional appliance repair services in the Bay Area since 1975',
  address: {
    street: '466 Primero Ct. Suite H',
    city: 'Cotati',
    state: 'CA',
    zip: '94931',
  },
  hours: 'Monday - Friday: 8:30 AM - 4:30 PM',
} as const;

