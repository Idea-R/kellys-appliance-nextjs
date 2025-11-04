// GA4 Analytics Data Library
// Provides functions for accessing and processing analytics data

import fs from 'fs'
import path from 'path'

export interface AnalyticsSummary {
  startDate: string
  endDate: string
  sessions: number
  users: number
  events: number
  pageViews: number
  bounceRate: number
  avgSessionDuration: number
  pagesPerSession: number
  conversions?: ConversionData
}

export interface TopPage {
  pagePath: string
  pageViews: number
  uniquePageViews: number
  avgTimeOnPage: number
  bounceRate: number
}

export interface ConversionData {
  phoneClicks: number
  bookingClicks: number
  contactViews: number
  serviceAreaViews: number
}

export interface AnalyticsEvent {
  eventName: string
  [key: string]: unknown
}

// Get latest summary report
export function getLatestSummary(): AnalyticsSummary | null {
  try {
    const reportsDir = path.join(process.cwd(), 'docs', 'analytics-reporting', 'daily')
    const files = fs.readdirSync(reportsDir)
      .filter(f => f.startsWith('summary-') && f.endsWith('.json'))
      .sort()
      .reverse()

    if (files.length === 0) return null

    const latestFile = path.join(reportsDir, files[0])
    const data = JSON.parse(fs.readFileSync(latestFile, 'utf8'))
    return data[0] // Reports are returned as arrays
  } catch (error) {
    console.error('Error reading summary report:', error)
    return null
  }
}

// Get events data
export function getLatestEvents(eventType?: string): AnalyticsEvent[] {
  try {
    const reportsDir = path.join(process.cwd(), 'docs', 'analytics-reporting', 'daily')
    const files = fs.readdirSync(reportsDir)
      .filter(f => f.startsWith('events-') && f.endsWith('.json'))
      .sort()
      .reverse()

    if (files.length === 0) return []

    const latestFile = path.join(reportsDir, files[0])
    const data = JSON.parse(fs.readFileSync(latestFile, 'utf8')) as AnalyticsEvent[]

    if (eventType) {
      return data.filter((event: AnalyticsEvent) => event.eventName === eventType)
    }

    return data
  } catch (error) {
    console.error('Error reading events report:', error)
    return []
  }
}

// Get historical data for trends
export function getHistoricalData(days: number = 30): AnalyticsSummary[] {
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

// Calculate trends and insights
export function calculateTrends(data: AnalyticsSummary[]): {
  sessionsTrend: number
  usersTrend: number
  conversionTrend: number
  insights: string[]
} {
  if (data.length < 2) {
    return {
      sessionsTrend: 0,
      usersTrend: 0,
      conversionTrend: 0,
      insights: ['Insufficient data for trend analysis']
    }
  }

  const latest = data[0]
  const previous = data[1]

  const sessionsTrend = ((latest.sessions - previous.sessions) / previous.sessions) * 100
  const usersTrend = ((latest.users - previous.users) / previous.users) * 100

  // Calculate conversion rate (phone clicks / sessions)
  const latestConversionRate = latest.sessions > 0 ? (latest.conversions?.phoneClicks || 0) / latest.sessions : 0
  const previousConversionRate = previous.sessions > 0 ? (previous.conversions?.phoneClicks || 0) / previous.sessions : 0
  const conversionTrend = previousConversionRate > 0 ?
    ((latestConversionRate - previousConversionRate) / previousConversionRate) * 100 : 0

  const insights: string[] = []

  if (Math.abs(sessionsTrend) > 10) {
    insights.push(`Traffic ${sessionsTrend > 0 ? 'increased' : 'decreased'} by ${Math.abs(sessionsTrend).toFixed(1)}%`)
  }

  if (latest.sessions < 50) {
    insights.push('Traffic is below healthy threshold (50 sessions/day)')
  }

  if (latest.bounceRate > 0.7) {
    insights.push('High bounce rate indicates engagement issues')
  }

  if (conversionTrend > 20) {
    insights.push('Conversion rate improving significantly')
  }

  return {
    sessionsTrend: Math.round(sessionsTrend * 100) / 100,
    usersTrend: Math.round(usersTrend * 100) / 100,
    conversionTrend: Math.round(conversionTrend * 100) / 100,
    insights
  }
}

// Get real-time status
export function getSystemStatus(): {
  status: 'healthy' | 'warning' | 'critical'
  lastReport: string | null
  dataAge: number | null
  issues: string[]
} {
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
    const dataAge = Math.floor((now.getTime() - reportTime.getTime()) / (1000 * 60 * 60 * 24)) // days

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

