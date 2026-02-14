## SEO/AEO Notes (from Feb 2026 audit)

This repo is a **Next.js static export** deployed on **Cloudflare Pages**. Many of the biggest SEO/AEO fixes are Cloudflare dashboard settings (not code changes).

### Robots.txt errors (GSC critical)

**What’s happening**

- The repo’s `public/robots.txt` is standards-compliant.
- Cloudflare is currently injecting a **managed robots.txt block** that includes `Content-Signal:` directives.
- Google Search Console flags this as a syntax error because `Content-Signal` is not a standard `robots.txt` directive.

You can verify the injected content by requesting `https://kellysappliancerepair.com/robots.txt` and looking for:

```
Content-Signal: search=yes,ai-train=no
```

**Fix (Cloudflare dashboard)**

- Go to Cloudflare Dashboard → **AI** → **Crawl Control** → **Robots.txt**
- Disable Cloudflare’s **managed robots.txt injection** (or at least disable the Content-Signal injection).
- Keep `public/robots.txt` as the canonical robots content.

**After changes**

- In GSC, request a **recrawl** for the robots.txt URLs that show errors.

### AEO strategy (AI answer engines)

The audit recommends:

- Keep **training disabled** (ai-train = no)
- Allow **AI search / grounding** (ai-input = yes) so AI answer engines can cite the site

This is primarily controlled by Cloudflare AI Crawl Control settings today (since Cloudflare is injecting the block).

#### Current project preference

For this site, we **allow all crawlers** (including GPTBot/ClaudeBot) because it is a public service-business site with no private user area.

Recommended Cloudflare setting:

- Cloudflare Dashboard → **AI** → **Crawl Control**: set AI bot controls to **Allow** and avoid injecting non-standard robots.txt directives.

### `llms.txt`

This repo ships:

- `public/llms.txt` (structured “AI-readable” overview + key URLs)
- `public/llm.txt` (pointer)

These files are optional, but can help AI assistants find canonical pages quickly.

### Redirect limits / indexing failures

Cloudflare Pages `_redirects` limits (per docs) are:

- **2,000 static redirects**
- **100 dynamic redirects** (wildcards/splats)

If you ever exceed these limits (or if you need better reporting), move legacy redirects to **Cloudflare Bulk Redirects** (URL forwarding lists).

### Cache hit rate (static export should be high)

Cloudflare does not necessarily cache HTML by default. For a static export, you typically want:

- Cache Rule: **Cache Everything** for HTML routes, with an Edge TTL (example: 1 hour)
- Keep long-lived caching for static assets (already set in `public/_headers`)

### Performance toggles (Cloudflare dashboard quick wins)

The audit suggests enabling:

- **Early Hints**
- **0-RTT connection resumption**
- **Speed Brain**

These are Cloudflare dashboard settings.

### Sitemap improvements

- `src/app/sitemap.ts` now includes **individual blog posts** (so `<lastmod>` is not identical for every URL).
- Future improvement: derive per-page lastmod from a CMS “modified” timestamp or another authoritative source.

