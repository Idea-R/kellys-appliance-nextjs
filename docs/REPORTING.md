## Reporting and Analytics

This project supports on-demand GA4 reporting via a CLI and robust client-side tracking compatible with GTM/GA4.

### Client Tracking
- Set `NEXT_PUBLIC_GTM_ID` (preferred) or `NEXT_PUBLIC_GA_MEASUREMENT_ID` in env.
- `src/components/Analytics.tsx` injects GTM/GA and pushes `link_click` events with GA4-friendly params:
  - `link_url`, `link_text`, `link_domain`, `link_type`, `page_location`, `page_path`, `page_title`
- Add `data-analytics-label` to links for clean labels.

### GA4 Reporting CLI
Requires:
- `GA4_PROPERTY_ID`: GA4 property numeric id (e.g., 123456789)
- Auth via `GOOGLE_APPLICATION_CREDENTIALS` pointing to a service account JSON with GA Data API access to the property.

Install dev dependency:
```bash
npm i -D @google-analytics/data
```

Scripts:
- `npm run report:summary` – sessions/users/events/views last 7 days
- `npm run report:events` – event rows last 30 days
- `npm run report:partners` – partner click events (CSV) last 30 days

Manual usage:
```bash
node scripts/report.mjs summary --days=14
node scripts/report.mjs events --event=link_click --days=30 --csv
node scripts/report.mjs partners --days=90
```

Outputs are written to `logs/reports/` as JSON or CSV with timestamps.

### Environment Setup
Create `.env.local` with:
```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
# or
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXX

# reporting
GA4_PROPERTY_ID=123456789
GOOGLE_APPLICATION_CREDENTIALS=C:\\path\\to\\service-account.json
```

Grant the service account at least "Viewer" and Data API permissions to the GA4 property.

### Extending Metrics
- Add custom dimensions/metrics to `scripts/report.mjs` dimensions/metrics arrays.
- For partner-specific events, ensure links include `data-analytics-label="partner_name"`.


