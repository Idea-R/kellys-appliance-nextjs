#!/usr/bin/env node
// GA4 Reporting CLI
// Usage examples:
//   node scripts/report.mjs summary --days 7
//   node scripts/report.mjs events --metric eventCount --event link_click --days 30 --csv

import fs from 'node:fs'
import path from 'node:path'

const { BetaAnalyticsDataClient } = await (async () => {
  try {
    const mod = await import('@google-analytics/data')
    return mod
  } catch (e) {
    console.error('Missing dependency: @google-analytics/data. Run: npm i -D @google-analytics/data')
    process.exit(1)
  }
})()

const PROPERTY_ID = process.env.GA4_PROPERTY_ID
if (!PROPERTY_ID) {
  console.error('GA4_PROPERTY_ID env var is required')
  process.exit(1)
}

// Service account auth via GOOGLE_APPLICATION_CREDENTIALS (path to JSON) or workload identity
const analyticsDataClient = new BetaAnalyticsDataClient()

function parseArgs(argv) {
  const args = { _: [] }
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i]
    if (a.startsWith('--')) {
      const [k, v] = a.slice(2).split('=')
      args[k] = v ?? true
    } else {
      args._.push(a)
    }
  }
  return args
}

function daysAgo(n) {
  const d = new Date()
  d.setDate(d.getDate() - n)
  return d.toISOString().slice(0, 10)
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true })
}

function toCSV(rows) {
  if (!rows.length) return ''
  const headers = Object.keys(rows[0])
  const esc = (v) => {
    if (v == null) return ''
    const s = String(v)
    return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s
  }
  const lines = [headers.join(',')]
  for (const r of rows) lines.push(headers.map((h) => esc(r[h])).join(','))
  return lines.join('\n')
}

async function runSummary({ days = 7 }) {
  const startDate = daysAgo(Number(days))
  const endDate = daysAgo(0)
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [{ startDate, endDate }],
    metrics: [
      { name: 'sessions' },
      { name: 'totalUsers' },
      { name: 'eventCount' },
      { name: 'screenPageViews' },
    ],
  })
  const row = response.rows?.[0]
  const summary = {
    startDate,
    endDate,
    sessions: row?.metricValues?.[0]?.value ?? '0',
    users: row?.metricValues?.[1]?.value ?? '0',
    events: row?.metricValues?.[2]?.value ?? '0',
    pageViews: row?.metricValues?.[3]?.value ?? '0',
  }
  return [summary]
}

async function runEvents({ days = 30, metric = 'eventCount', event }) {
  const startDate = daysAgo(Number(days))
  const endDate = daysAgo(0)
  const dimensions = [
    { name: 'eventName' },
    { name: 'date' },
    { name: 'linkUrl' },
    { name: 'linkText' },
    { name: 'pagePath' },
  ]
  const dimensionFilter = event
    ? { filter: { fieldName: 'eventName', stringFilter: { value: event } } }
    : undefined

  const [response] = await analyticsDataClient.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [{ startDate, endDate }],
    metrics: [{ name: metric }],
    dimensions,
    dimensionFilter,
    limit: 100000,
  })

  const rows = (response.rows ?? []).map((r) => ({
    date: r.dimensionValues?.[1]?.value,
    eventName: r.dimensionValues?.[0]?.value,
    linkUrl: r.dimensionValues?.[2]?.value,
    linkText: r.dimensionValues?.[3]?.value,
    pagePath: r.dimensionValues?.[4]?.value,
    [metric]: r.metricValues?.[0]?.value,
  }))
  return rows
}

async function runPartners({ days = 30 }) {
  // Convenience: filter our partner clicks by label prefix partner_
  return runEvents({ days, event: 'link_click' })
}

async function main() {
  const args = parseArgs(process.argv)
  const cmd = args._[0] || 'summary'
  const outDir = path.join(process.cwd(), 'logs', 'reports')
  ensureDir(outDir)

  let rows = []
  if (cmd === 'summary') rows = await runSummary(args)
  else if (cmd === 'events') rows = await runEvents(args)
  else if (cmd === 'partners') rows = (await runPartners(args)).filter((r) => (r.linkText || '').startsWith('partner_'))
  else {
    console.error('Unknown command. Use one of: summary, events, partners')
    process.exit(1)
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
  const base = path.join(outDir, `${cmd}-${timestamp}`)
  if (args.csv) {
    const csv = toCSV(rows)
    fs.writeFileSync(base + '.csv', csv)
    console.log(base + '.csv')
  } else {
    fs.writeFileSync(base + '.json', JSON.stringify(rows, null, 2))
    console.log(base + '.json')
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})


