// API route for serving analytics data to frontend
// Usage: /api/analytics/summary?days=7

import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

type AnalyticsType = 'summary' | 'events' | 'partners' | 'trends' | 'status'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  try {
    const { type: typeParam } = await params
    const type = typeParam as AnalyticsType
    const { searchParams } = new URL(request.url)
    const days = parseInt(searchParams.get('days') || '7')

    let data: any = null

    switch (type) {
      case 'summary':
        data = getLatestSummary()
        break

      case 'events':
        const eventType = searchParams.get('event')
        data = getLatestEvents(eventType || undefined)
        break

      case 'partners':
        data = getLatestPartners()
        break

      case 'trends':
        data = getHistoricalTrends(days)
        break

      case 'status':
        data = getSystemStatus()
        break

      default:
        return NextResponse.json(
          { error: 'Invalid analytics type' },
          { status: 400 }
        )
    }

    if (data === null) {
      return NextResponse.json(
        { error: 'No data available' },
        { status: 404 }
      )
    }

    return NextResponse.json(data)

  } catch (error) {
    console.error('Analytics API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Helper functions (duplicated from lib/analytics.ts for server-side use)
function getLatestSummary() {
  try {
    const reportsDir = path.join(process.cwd(), 'docs', 'analytics-reporting', 'daily')
    const files = fs.readdirSync(reportsDir)
      .filter(f => f.startsWith('summary-') && f.endsWith('.json'))
      .sort()
      .reverse()

    if (files.length === 0) return null

    const latestFile = path.join(reportsDir, files[0])
    const data = JSON.parse(fs.readFileSync(latestFile, 'utf8'))
    return data[0]
  } catch (error) {
    console.error('Error reading summary report:', error)
    return null
  }
}

function getLatestEvents(eventType?: string) {
  try {
    const reportsDir = path.join(process.cwd(), 'docs', 'analytics-reporting', 'daily')
    const files = fs.readdirSync(reportsDir)
      .filter(f => f.startsWith('events-') && f.endsWith('.json'))
      .sort()
      .reverse()

    if (files.length === 0) return []

    const latestFile = path.join(reportsDir, files[0])
    const data = JSON.parse(fs.readFileSync(latestFile, 'utf8'))

    if (eventType) {
      return data.filter((event: any) => event.eventName === eventType)
    }

    return data
  } catch (error) {
    console.error('Error reading events report:', error)
    return []
  }
}

function getLatestPartners() {
  try {
    const reportsDir = path.join(process.cwd(), 'docs', 'analytics-reporting', 'daily')
    const files = fs.readdirSync(reportsDir)
      .filter(f => f.startsWith('partners-') && f.endsWith('.json'))
      .sort()
      .reverse()

    if (files.length === 0) return []

    const latestFile = path.join(reportsDir, files[0])
    const data = JSON.parse(fs.readFileSync(latestFile, 'utf8'))

    return data.filter((r: any) => (r.linkText || '').startsWith('partner_'))
  } catch (error) {
    console.error('Error reading partners report:', error)
    return []
  }
}

function getHistoricalTrends(days: number = 30) {
  try {
    const reportsDir = path.join(process.cwd(), 'docs', 'analytics-reporting', 'daily')
    const files = fs.readdirSync(reportsDir)
      .filter(f => f.startsWith('summary-') && f.endsWith('.json'))
      .sort()
      .reverse()
      .slice(0, days)

    return files.map(file => {
      const filePath = path.join(reportsDir, file)
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
      return data[0]
    }).filter(Boolean)
  } catch (error) {
    console.error('Error reading historical data:', error)
    return []
  }
}

function getSystemStatus() {
  try {
    const summary = getLatestSummary()

    if (!summary) {
      return {
        status: 'critical',
        lastReport: null,
        dataAge: null,
        issues: ['No analytics data available']
      }
    }

    const reportTime = new Date(summary.endDate)
    const now = new Date()
    const dataAge = Math.floor((now.getTime() - reportTime.getTime()) / (1000 * 60 * 60 * 24))

    const issues: string[] = []

    if (summary.sessions < 50) {
      issues.push(`Low traffic: ${summary.sessions} sessions/day`)
    }

    if (summary.bounceRate > 0.7) {
      issues.push(`High bounce rate: ${(summary.bounceRate * 100).toFixed(1)}%`)
    }

    if ((summary.conversions?.phoneClicks || 0) < 5) {
      issues.push(`Low conversions: ${summary.conversions?.phoneClicks || 0} phone clicks`)
    }

    let status: 'healthy' | 'warning' | 'critical' = 'healthy'

    if (issues.length >= 2 || dataAge > 2) {
      status = 'critical'
    } else if (issues.length >= 1 || dataAge > 1) {
      status = 'warning'
    }

    return {
      status,
      lastReport: summary.endDate,
      dataAge,
      issues
    }
  } catch (error) {
    return {
      status: 'critical',
      lastReport: null,
      dataAge: null,
      issues: [`System error: ${error instanceof Error ? error.message : 'Unknown error'}`]
    }
  }
}

