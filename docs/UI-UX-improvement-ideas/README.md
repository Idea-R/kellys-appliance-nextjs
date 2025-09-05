# UI/UX Improvement Ideas

Purpose: Collect actionable enhancements for clarity, performance, and polish across the site. Keep each idea small, testable, and reversible.

## Hero Section (Clarity first)
- Simplify CTAs: keep one primary action in the hero (Call Now). Booking remains in header/nav.
- Remove heavy overlays: rely on a high-quality photo + subtle text shadow if readability drops.
- Shorten value list: replace the 4-item grid with 2 concise chips or a single tagline.
- Add visual rhythm: constrain content width (max-w-2xl), increase spacing between heading, subhead, CTAs.
- Optional: add low-contrast bottom gradient for legibility only on very bright images (mask-image linear-gradient, not a solid color overlay).

## Carousels (Seamless + subtle)
- Keep true transparency edge fades via CSS mask (already implemented) for “infinite” feel.
- Reduce logo scale variance; clamp heights for consistent rhythm.
- Lower animation duration slightly on large screens; pause on hover for accessibility.

## Motion & Micro-interactions
- Use lenis for scroll only (already). Avoid stacking with CSS smooth.
- Prefer lightweight micro-animations: auto-animate or CSS transition utilities before pulling in heavy libs.
- Add entrance transitions at section-level only (reduce cognitive load): fade+rise 120–180ms, 40–60ms stagger.

## Visual System
- Headings: H1 48–64, H2 28–36, tighter letter-spacing on large weights.
- Color: lock primary (green-600/700) and neutrals; reduce secondary accents.
- Spacing scale: prefer 4/8 multiples; increase vertical rhythm between sections (py-20+).

## Content & IA
- Consolidate duplicate links (header vs hero vs footer) to one primary per intent.
- “Why choose us” → a short bulleted list with scannable bold leads; move long copy below fold.
- Footer: use CertifiedBanner.svg as a single stripe (done) and trim redundant badges.

## Performance
- Image: ensure every `fill` has `sizes`; use `priority` for LCP hero only.
- Serve SVG logos where possible; prefer `Image` with width/height to avoid CLS.
- Avoid large client bundles for animations; keep framer-motion optional and code-split.

## Accessibility
- Ensure link purpose clarity; external links with `aria-label` where icons only.
- Color contrast AA minimum; add focus-visible styles on all interactive elements.

## Next Actions (proposed)
1) Replace hero guarantee grid with two chips or one tagline.
2) Add small text-shadow utility to hero headings if needed for legibility.
3) Pause carousel on hover + reduce logo height variance.
4) Audit duplicate CTAs sitewide and de-duplicate.

---

## Toolbox (library index)
- Next/Image docs: `https://nextjs.org/docs/app/api-reference/components/image`
- Tailwind CSS: `https://tailwindcss.com/`
- Radix Primitives: `https://www.radix-ui.com/primitives`
- Shadcn/ui: `https://ui.shadcn.com/`
- Headless UI: `https://headlessui.com/`
- Heroicons: `https://heroicons.com/`
- Lucide: `https://lucide.dev/`
- Lenis: `https://lenis.studiofreight.com/`
- Auto Animate: `https://auto-animate.formkit.com/`
- Framer Motion: `https://www.framer.com/motion/`
- Keen Slider: `https://keen-slider.io/`
- Embla Carousel: `https://www.embla-carousel.com/`
- React Bits: `https://reactbits.dev/`
- MDX: `https://mdxjs.com/`
- Contentlayer: `https://www.contentlayer.dev/`
- eslint-plugin-jsx-a11y: `https://github.com/jsx-eslint/eslint-plugin-jsx-a11y`
- Radix Colors: `https://www.radix-ui.com/colors`
- CSS mask-image: `https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image`
