# MailChannels Email Setup for Contact Form

## Overview
Contact form now uses MailChannels API (free for Cloudflare Workers) to send emails directly to `kellysappliance@gmail.com`.

## DNS Configuration Required

To improve email deliverability and enable DKIM signing, add these DNS records:

### 1. DKIM Record (Recommended)
Add a TXT record for DKIM signing:

```
Name: mailchannels._domainkey.kellysappliancerepair.com
Type: TXT
Value: v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC7RXKZqOhwDqWs7p3YILwqSqKJKRGwMmLGPCfLpFQxWqQqEqJmLKLPGJRFMJLGKqPFKLGPKqPJKLGPKqPJKLGPKqPJKLGPKqPJKLGPKqPJKLGPKqPJKLGPKqPJKLGPKqPJKLGPKqPJKLGPKqPJKLGPKqPJKLGP
```

**OR** use MailChannels auto-generated key:

```
Name: mailchannels._domainkey
Type: TXT  
Value: v=DKIM1; k=rsa; p=[request from MailChannels support]
```

### 2. SPF Record (Recommended)
Update or add SPF record:

```
Name: kellysappliancerepair.com (or @)
Type: TXT
Value: v=spf1 include:_spf.mailchannels.net ~all
```

If you already have an SPF record, add `include:_spf.mailchannels.net` before `~all`:
```
v=spf1 include:_spf.cloudflare.com include:_spf.mailchannels.net ~all
```

### 3. DMARC Record (Optional but Recommended)
```
Name: _dmarc.kellysappliancerepair.com
Type: TXT
Value: v=DMARC1; p=none; rua=mailto:kellysappliance@gmail.com
```

## How It Works

1. User submits contact form on website
2. Cloudflare Pages Function receives POST to `/api/contact`
3. Worker validates data and calls MailChannels API
4. MailChannels sends email to `kellysappliance@gmail.com`
5. Reply-to header set to customer's email for easy responses

## Email Format

**Plain Text:**
```
New contact form submission:

Name: [Customer Name]
Email: [customer@example.com]
Phone: [Customer Phone]
Zip Code: [ZIP]

Message:
[Customer Message]

---
Submitted from: kellysappliancerepair.com
```

**HTML:** Styled email with formatted fields and clickable email/phone links

## Testing

### Local Testing (Not Possible)
MailChannels API only works from Cloudflare Workers/Pages - cannot test locally.

### Production Testing
1. Deploy changes to Cloudflare Pages
2. Submit test form on live site
3. Check kellysappliance@gmail.com inbox
4. Verify reply-to address works

## Troubleshooting

**No emails received:**
- Check Cloudflare Pages logs for errors
- Verify DNS records propagated (24-48 hours)
- Check Gmail spam folder
- Review MailChannels API status

**Emails in spam:**
- Add DNS records (SPF, DKIM, DMARC)
- Ask recipients to mark as "Not Spam"
- Wait for domain reputation to build

**API Errors:**
- Check Cloudflare Pages function logs
- Verify MailChannels API endpoint accessible
- Review request/response in browser Network tab

## No Cost
MailChannels partnership with Cloudflare = **FREE** email sending from Workers/Pages functions.

## Deploy Command
```bash
git add .
git commit -m "feat: add MailChannels email delivery to contact form"
git push origin main
```

Cloudflare auto-deploys on push to main branch.
