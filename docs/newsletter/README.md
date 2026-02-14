# Newsletter Documentation

This document describes the newsletter signup functionality and how to configure it for future blog email campaigns.

## Overview

The newsletter system allows visitors to subscribe to receive:
- Monthly appliance maintenance tips
- Expert troubleshooting guides
- Exclusive offers and promotions
- Seasonal maintenance reminders

## Architecture

The newsletter system consists of:

1. **Frontend Component**: `src/components/NewsletterSignupForm.tsx`
   - Reusable form component
   - Handles user input and submission
   - Shows success/error states

2. **API Endpoint**: `functions/api/newsletter.ts`
   - Cloudflare Pages Function
   - Validates email address
   - Creates/updates contact in Resend
   - Sends welcome email

3. **Email Template**: `src/server/email/templates/newsletter.ts`
   - Welcome email HTML and text versions
   - Branded with company logo and signature

## Setup Instructions

### 1. Configure Resend

1. Sign up for a Resend account at https://resend.com
2. Verify your domain (`kellysappliancerepair.com`) in Resend dashboard
3. Get your API key from https://resend.com/api-keys

### 2. Set Environment Variables

Add these to your Cloudflare Pages environment variables (Settings > Environment Variables):

**Required:**
- `RESEND_API_KEY` - Your Resend API key
- `CONTACT_EMAIL_FROM` - Verified sender email (e.g., `contact@kellysappliancerepair.com`)

**Optional:**
- `CONTACT_EMAIL_FROM_NAME` - Friendly sender name (default: "Kelly's Appliance Center")
- `EMAIL_LOGO_URL` - Logo URL for email signature
- `SITE_URL` - Site URL for email links
- `RESEND_NEWSLETTER_SEGMENT_ID` - Segment ID for organizing subscribers
- `RESEND_NEWSLETTER_TOPIC_ID` - Topic ID for subscription management

### 3. Create Segments/Topics (Optional)

**Segments** - Organize subscribers into groups:
1. Go to Resend dashboard > Contacts > Segments
2. Create a new segment (e.g., "Newsletter Subscribers")
3. Copy the Segment ID
4. Add to `RESEND_NEWSLETTER_SEGMENT_ID` environment variable

**Topics** - Manage subscription preferences:
1. Go to Resend dashboard > Contacts > Topics
2. Create a new topic (e.g., "Monthly Newsletter")
3. Copy the Topic ID
4. Add to `RESEND_NEWSLETTER_TOPIC_ID` environment variable

## Usage

### Adding Newsletter Form to a Page

The newsletter form is already integrated into the blog page (`/blog`). To add it elsewhere:

```tsx
import NewsletterSignupForm from '@/components/NewsletterSignupForm';

// In your component:
<NewsletterSignupForm />
```

### Customizing the Form

The form component accepts no props currently, but you can customize it by:

1. Editing `src/components/NewsletterSignupForm.tsx`
2. Modifying styles, placeholder text, or button labels
3. Adding additional fields if needed (requires API updates)

## Email Flow

1. User enters email and clicks "Subscribe"
2. Frontend sends POST request to `/api/newsletter`
3. Cloudflare Function validates email format
4. Contact is created/updated in Resend
5. Contact is added to segment/topic (if configured)
6. Welcome email is sent to subscriber
7. Success message is shown to user

## Welcome Email

The welcome email includes:
- Thank you message
- What to expect from the newsletter
- Link to blog
- Company logo and contact information

To customize the welcome email, edit `src/server/email/templates/newsletter.ts`.

## Future Enhancements

### Planned Features

- [ ] Double opt-in confirmation (verify email before subscribing)
- [ ] Unsubscribe functionality
- [ ] Preference center (manage subscription types)
- [ ] Automated blog post notifications
- [ ] Segmentation based on interests (refrigerator, dishwasher, etc.)
- [ ] A/B testing for email content

### Sending Campaigns

To send newsletter campaigns:

1. **Using Resend Dashboard:**
   - Go to Resend > Broadcasts
   - Create a new broadcast
   - Select your segment/topic
   - Design email template
   - Schedule or send immediately

2. **Using Resend API:**
   - Use the Broadcasts API to send to segments
   - See [Resend Broadcasts Documentation](https://resend.com/docs/api-reference/broadcasts/create-broadcast)

3. **Using Templates:**
   - Create reusable templates in Resend dashboard
   - Use template variables for personalization
   - Send via API or dashboard

## Testing

### Local Testing

1. Set up `.env.local` with Resend credentials
2. Run `npm run dev`
3. Navigate to `/blog`
4. Submit newsletter form
5. Check email inbox for welcome message

### Production Testing

1. Deploy to Cloudflare Pages preview
2. Set environment variables in Cloudflare dashboard
3. Test newsletter signup on preview URL
4. Verify email delivery and formatting

## Troubleshooting

### Subscriptions not working

1. Check `RESEND_API_KEY` is set correctly
2. Verify `CONTACT_EMAIL_FROM` matches verified domain
3. Check Cloudflare Functions logs for errors
4. Verify email format is valid

### Welcome emails not sending

1. Check Resend API quota hasn't been exceeded
2. Verify `CONTACT_EMAIL_FROM` is correct
3. Check email isn't going to spam folder
4. Review Resend dashboard for delivery status

### Contacts not appearing in Resend

1. Check segment/topic IDs are correct (if using)
2. Verify API key has proper permissions
3. Check Resend dashboard > Contacts for new entries
4. Review function logs for errors

## Compliance

### CAN-SPAM Act

The newsletter system complies with CAN-SPAM requirements:

- ✅ Clear sender identification
- ✅ Accurate subject lines
- ✅ Physical mailing address included
- ✅ Unsubscribe mechanism (via Resend)

### GDPR Considerations

For GDPR compliance, consider:

- Adding explicit consent checkbox
- Storing consent timestamp
- Providing easy unsubscribe
- Data retention policies
- Privacy policy link in emails

## Resources

- [Resend Contacts API](https://resend.com/docs/api-reference/contacts/create-contact)
- [Resend Segments](https://resend.com/docs/dashboard/contacts/segments)
- [Resend Topics](https://resend.com/docs/dashboard/contacts/topics)
- [Resend Broadcasts](https://resend.com/docs/api-reference/broadcasts/create-broadcast)
- [CAN-SPAM Act Compliance](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business)
