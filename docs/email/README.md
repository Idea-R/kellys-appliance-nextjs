# Email Templates Documentation

This directory contains documentation for email templates used throughout the Kelly's Appliance Center website.

## Overview

The email system uses **Resend** as the email delivery service and provides a reusable template system for consistent branding and formatting across all emails.

## Architecture

```
src/server/email/
├── resend.ts              # Resend API client wrapper
├── _escape.ts             # HTML escaping utilities (XSS prevention)
├── _layout.ts             # Shared email layout with logo signature
└── templates/
    ├── contact.ts         # Contact form submission emails
    └── newsletter.ts      # Newsletter welcome emails
```

## Template Structure

All email templates follow a consistent structure:

1. **Layout Wrapper** (`_layout.ts`): Provides header, footer, and signature with company logo
2. **Content Section**: Template-specific HTML content
3. **Plain Text Fallback**: Text-only version for email clients that don't support HTML

## Styling Guidelines

### Email Client Compatibility

Email clients have limited CSS support. Follow these guidelines:

- ✅ **Use inline styles** - Email clients strip `<style>` tags
- ✅ **Use table-based layouts** - More reliable than flexbox/grid
- ✅ **Use web-safe fonts** - Arial, Helvetica, sans-serif
- ✅ **Use absolute URLs** - For images and links
- ✅ **Use JPG/PNG images** - Avoid WebP (not supported in many email clients)
- ❌ **Avoid CSS Grid/Flexbox** - Limited support
- ❌ **Avoid JavaScript** - Not supported in emails
- ❌ **Avoid external stylesheets** - Will be blocked

### Spacing & Typography

- **Line height**: 1.6-1.8 for readability
- **Font sizes**: 12px (small), 14px (body), 16px (headings), 20px+ (hero)
- **Padding**: 20-40px for sections, 12-16px for elements
- **Max width**: 600px for email container (standard email width)

### Colors

Brand colors used in emails:

- **Primary Green**: `#059669` (green-600)
- **Dark Green**: `#15803d` (green-700)
- **Text Dark**: `#1f2937` (gray-900)
- **Text Medium**: `#374151` (gray-700)
- **Text Light**: `#6b7280` (gray-500)
- **Background**: `#f4f4f4` (gray-100)
- **Border**: `#e5e7eb` (gray-200)

## Logo Usage

The email signature includes the company logo. Logo requirements:

- **Format**: JPG or PNG (WebP not supported in email clients)
- **Size**: Recommended 120x120px for signature
- **Location**: `/images/small_logo.jpg` (default)
- **Customization**: Set `EMAIL_LOGO_URL` environment variable

## Security

### HTML Escaping

All user-provided content is escaped to prevent XSS attacks:

```typescript
import { escapeHtml, escapeHtmlWithBreaks } from '@/server/email/_escape';

// Escapes HTML special characters
const safe = escapeHtml(userInput);

// Escapes HTML but preserves line breaks as <br>
const withBreaks = escapeHtmlWithBreaks(userMessage);
```

### Field Validation

All form inputs are validated with maximum length limits:

- Name: 100 characters
- Email: 255 characters
- Phone: 20 characters
- Zip: 10 characters
- Message: 5000 characters

## Creating New Templates

To create a new email template:

1. Create a new file in `src/server/email/templates/`
2. Export functions for HTML, text, and subject:

```typescript
export function createMyEmailHtml(data: MyData, logoUrl?: string, siteUrl?: string): string {
  const content = `...your HTML content...`;
  return createEmailLayout({
    title: 'Email Title',
    content,
    logoUrl,
    siteUrl,
  });
}

export function createMyEmailText(data: MyData): string {
  return `Plain text version...`;
}

export function createMyEmailSubject(data: MyData): string {
  return 'Email Subject';
}
```

3. Use the template in your API route or Cloudflare Function

## Testing

### Local Testing

1. Set up `.env.local` with your Resend API key
2. Run `npm run dev`
3. Submit forms and check email delivery

### Local Testing (Cloudflare Pages Functions)

The **production** contact/newsletter endpoints live under `functions/api/*` (Cloudflare Pages Functions). To test them locally in a production-like environment:

1. Run `npm run build`
2. Create a local `.dev.vars` file (do **not** commit) with:
   - `RESEND_API_KEY=...`
   - `CONTACT_EMAIL_FROM=...`
   - `CONTACT_EMAIL_TO=...`
3. Run `npm run preview` (starts `wrangler pages dev out`)
4. Submit forms and verify email delivery

### Email Client Testing

Test emails in multiple clients:

- **Gmail** (web and mobile)
- **Outlook** (desktop and web)
- **Apple Mail** (iOS and macOS)
- **Yahoo Mail**

Use tools like [Litmus](https://litmus.com) or [Email on Acid](https://www.emailonacid.com) for comprehensive testing.

### Preview in Browser

You can preview HTML emails by:

1. Saving the HTML output to a file
2. Opening in a browser
3. Note: Some email-specific styles may not render correctly

## Environment Variables

See `.env.local.example` for all required and optional email configuration variables.

## Troubleshooting

### Emails not sending

1. Check `RESEND_API_KEY` is set correctly
2. Verify `CONTACT_EMAIL_FROM` matches a verified domain in Resend
3. Check Cloudflare Functions logs for errors
4. Verify Resend API quota hasn't been exceeded

### Emails look broken

1. Check logo URL is accessible (must be absolute URL)
2. Verify images use JPG/PNG format (not WebP)
3. Test in multiple email clients
4. Check inline styles are present (not external CSS)

### Logo not showing

1. Verify `EMAIL_LOGO_URL` is an absolute URL (starts with `https://`)
2. Check image format is JPG or PNG
3. Verify image is publicly accessible
4. Check image size isn't too large (recommended < 200KB)

## Resources

- [Resend Documentation](https://resend.com/docs)
- [Email Client CSS Support](https://www.caniemail.com)
- [Email Design Best Practices](https://www.campaignmonitor.com/dev-resources/guides/coding/)
