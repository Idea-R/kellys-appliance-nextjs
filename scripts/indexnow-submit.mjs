// IndexNow submitter for kellysappliancerepair.com
// Fetches the live sitemap, extracts URLs, and submits them to IndexNow so Bing,
// Yandex, and other IndexNow search engines index new/updated pages within minutes
// instead of waiting for the next crawl.
//
// Run manually:   node scripts/indexnow-submit.mjs
// Or as a post-deploy CI step (recommended) so every publish pings automatically.
//
// The key file public/3b71390272aec99a59e02c24d8374e4c.txt must be live at the site
// root (https://kellysappliancerepair.com/3b71390272aec99a59e02c24d8374e4c.txt) for
// IndexNow to verify ownership. Deploy the site once before the first run.

const HOST = 'kellysappliancerepair.com';
const KEY = '3b71390272aec99a59e02c24d8374e4c';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP = `https://${HOST}/sitemap.xml`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

async function main() {
  const res = await fetch(SITEMAP);
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (!urlList.length) throw new Error('No <loc> URLs found in sitemap');
  console.log(`Submitting ${urlList.length} URLs to IndexNow...`);

  const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };
  const submit = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });
  console.log(`IndexNow response: ${submit.status} ${submit.statusText}`);
  if (submit.status === 200 || submit.status === 202) {
    console.log('Success. Search engines notified.');
  } else {
    const t = await submit.text().catch(() => '');
    console.log('Non-success response body:', t);
    process.exit(1);
  }
}

main().catch((e) => {
  console.error('ERROR:', e.message);
  process.exit(1);
});
