# Review Request Automation (Spec + Copy)

**Status:** DESIGNED, not implemented. Copy and logic are ready; the sending mailer is intentionally not wired yet. The plan is to automate this inside OATAS so that when a qualified high-value work order closes, the customer is automatically asked for a Google review.

**Why:** the site's schema shows 155 Google reviews while Yelp shows 254. Google review count and freshness are among the strongest signals for both the local map pack and AI answer engines. A steady, automated ask after good jobs closes that gap without any manual effort.

**Owner:** Ideas Realized. Future build target: OATAS (Lovable + Supabase edge function + cron), tied to ServiceDesk work orders.

---

## 1. The trigger: a qualified high-value call closes

Fire the review ask only when a work order reaches a completed, paid state AND meets every qualification below. The point is to ask happy customers after real repairs, never after a cancel, a callback, or a rough job.

**Qualification criteria (all must be true):**

1. **Completed and invoiced.** Work order status is completed/closed with a finalized sale in `sd_sales` (a real `date_executed` and `total_price`). Skip anything still open, quoted-only, or canceled.
2. **High value.** `total_price` at or above a set threshold (start at **$250**, tunable). This targets genuine repairs, not bare service-call or diagnostic-only visits, and it is the "high-value" gate the owner asked for.
3. **Not a recall or warranty callback.** Exclude jobs flagged as a recall, rework, or return visit for the same problem. Asking for a review after a callback invites a bad one.
4. **No open complaint or dispute** on the job or the customer.
5. **Reachable and consented.** A valid mobile number (for SMS) or email, and the customer has not opted out. Honor the site's `preferred_contact_method` field where present.
6. **Not over-asked.** The customer has not received a review request in the last **90 days**, and this specific job has never been asked. One ask per job, with a single gentle follow-up.

**Timing:** send the same evening or the next business morning after completion, not the instant the tech closes the ticket. A few hours of settle time produces better, more considered reviews.

**Channel:** follow `preferred_contact_method`. Default to SMS when a mobile is present (highest response), fall back to email. Never both at once for the first ask.

---

## 2. The message copy

Placeholders: `{first}` customer first name, `{tech}` technician first name, `{appliance}` appliance type (e.g., refrigerator), `{review_link}` the direct Google review link.

**Review link:** use the direct "write a review" deep link, `https://search.google.com/local/writereview?placeid=<PLACE_ID>` (the Place ID is already stored as the Cloudflare env var `GOOGLE_PLACES_PLACE_ID` used by /api/reviews). The public fallback is the Google profile link already in the site schema: `https://maps.app.goo.gl/x9Uop8o7DNMfSufj9`.

### SMS (first ask)

> Hi {first}, thanks for choosing Kelly's Appliance today. If {tech} got your {appliance} working right, a quick Google review would really help our small local team: {review_link}
> Reply STOP to opt out.

Keep it under 320 characters (two segments) including the link. Always include the STOP opt-out.

### Email (first ask, if SMS is not the preferred or available channel)

**Subject:** How did we do, {first}?

> Hi {first},
>
> Thank you for trusting Kelly's Appliance Center with your {appliance} repair. We hope {tech} left everything working the way it should.
>
> We are a family-owned shop that has served Sonoma, Marin, and Napa counties since 1975, and honest reviews from neighbors are what keep us going. If you have a minute, we would be grateful if you shared your experience on Google:
>
> [Leave a Google review]({review_link})
>
> If anything is not right, please reply to this email or call us at (707) 664-9702 first, and we will make it right.
>
> Thank you,
> The Kelly's Appliance Center Team

### Follow-up (day 5, only if no review and not opted out)

**SMS:**
> Hi {first}, just a friendly follow-up from Kelly's Appliance. If you have a moment, a quick Google review would mean a lot: {review_link}. Reply STOP to opt out.

Send at most one follow-up. Then stop.

---

## 3. The "make it right" safety valve

Both messages invite an unhappy customer to reply or call **before** leaving a public review. This is a genuine service gesture, not review gating: every customer still gets the same link and is free to review publicly. The goal is to catch a fixable problem early.

---

## 4. Compliance

- **SMS:** only to customers with a valid mobile who have not opted out. Include STOP in every message and honor it permanently. Send during daytime hours only (roughly 9am to 7pm local). This follows standard TCPA practice for transactional/relationship texts to existing customers.
- **Email:** include an unsubscribe path and the business postal address.
- **Frequency cap:** the 90-day per-customer cap above prevents fatigue.

---

## 5. Future OATAS build outline (for the Lovable prompt)

When it is time to automate, this is the shape:

- **Table `review_requests`** (per-org, RLS): `invoice_number`, `customer_id`, `channel`, `status` (queued / sent / clicked / reviewed / opted_out / skipped), `qualified_reason`, `scheduled_for`, `sent_at`, `review_left_at`, `error`, timestamps. Unique on `(organization_id, invoice_number)` so a job is asked once.
- **Edge function `enqueue-review-requests`** (cron, hourly or on job-close event): scan recently completed `sd_sales` joined to `sd_all_jobs`, apply the qualification criteria in section 1, and insert qualifying jobs into `review_requests` with a `scheduled_for` in the next send window. Respect `preferred_contact_method` and the 90-day cap.
- **Edge function `send-review-requests`** (cron): send queued messages whose `scheduled_for` has passed via the messaging provider (SMS provider for texts, the existing email path for email), render the template, mark `sent`. Handle STOP replies into an opt-out list.
- **Attribution loop (optional):** compare the Google review count/new reviewers from the Places API before and after to estimate lift, and surface it on the OATAS reputation dashboard.
- **Settings:** org-level toggle, the value threshold, the send window, and an approval mode (queue-for-approval vs auto-send), shipped OFF so nothing sends until the owner flips it on, same pattern as the GBP auto-posting build.

---

## 6. What to hand the owner when this goes live

- Confirm the SMS sending number and provider.
- Confirm the exact Place ID review deep link renders the star selector.
- Approve the value threshold and the send window.
- Decide auto-send vs approve-first for the first two weeks.
