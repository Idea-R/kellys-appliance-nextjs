# Monthly Client Report System

**Audience:** Kelly's Appliance leadership (the client). Prepared by Ideas Realized.
**Cadence:** one report per calendar month, issued mid-following-month once the month's data is complete.
**Reference build:** `C:\dev\IdeasRealized\Projects\Kellys-SEO-Report\KELLYS-SEO-REPORT-2026-06.*` (the May 2026 report) is the template. Regenerate the PDF with `embed-and-render.js`.

## The golden rule: a client report shows outcomes, not our internals

The client should read what happened, what's coming, and where we want their input. They should NOT read:
- **Our near-misses or course corrections.** Never "we were about to cut X, then realized." Present the finding, not the internal debate. (Example: LSA is framed as "converting more than it looks," not "we almost cut it.")
- **Implementation mechanics.** No "enter the Search Console credential," "add the Thumbtack login," "tune the scraper selectors." Those are agency tasks and live in the internal roadmap (`docs/ops/Q2-2026-ROADMAP.md`) and the buildout docs, never in the client deliverable.
- **Wrong-period framing.** A May report says "in May" and "this month," never "this quarter." Set the Reporting Period on the cover.

If something is genuinely client-facing but in progress, frame it as upcoming work ("going live next month"), not as a to-do with steps.

## Standard structure (9 pages)

1. **Cover** — Reporting Period (the month), Prepared For / By.
2. **Executive Summary** — 4 headline stats + 3 to 4 findings (wins, gaps, insights). One screen.
3. **Organic Search (SEO)** — the month's clicks/impressions/CTR/position + the biggest opportunity.
4. **Paid Advertising** — spend, conversions, CPA by channel, top keywords.
5. **Qualified Leads** — attribution: leads matched to real jobs, conversion quality by source.
6. **What We Delivered in [Month]** — the deliverables that shipped this month.
7. **Where It's Headed** — conservative projections with stated assumptions.
8. **Planned for Next Month** — committed upcoming deliverables (new blog posts, automations going live, landing pages, etc.).
9. **What We're Exploring** — the stack we're investigating or considering, ending with an open invitation for the client's priorities, questions, and ideas.

(Sections 8 and 9 can share a page, as in the reference build's "Where to Push Next.")

## The three forward-looking buckets (the heart of the system)

Every report ends by answering three questions plainly:
- **Delivered this month** — what they got.
- **Planned next month** — what they're getting (worded as intended deliverables, not tasks).
- **Exploring / considering** — what we're looking into, what we might implement, and an explicit "tell us what to prioritize." This invites the conversation rather than just presenting conclusions.

## Internal vs. client (where things live)

| Item | Lives in |
|---|---|
| Client deliverable (the report) | `IdeasRealized/Projects/Kellys-SEO-Report/` |
| Our implementation steps / credentials to enter / activation checklists | `docs/ops/Q2-2026-ROADMAP.md` + the relevant buildout doc |
| Build records (what was shipped, how) | `docs/ops/automations/*` |

## Production checklist (before sending)

- [ ] Reporting Period correct on cover; all "quarter" wording removed for monthly reports.
- [ ] Contact email is `shane@ideas-realized.com` (or the dedicated reports alias once created), never a personal gmail.
- [ ] No internal admissions, no credential/implementation steps in the client copy.
- [ ] Delivered / Planned / Exploring sections present, with the client-input invitation.
- [ ] Humanized: no em or en dashes (`grep -nE "[—–]"` returns nothing).
- [ ] Every section fits on one page (no overflow, no trailing blank page). Regenerate and confirm the PDF page count.
