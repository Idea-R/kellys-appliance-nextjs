'use client'

import Image from 'next/image'
import Link from 'next/link'
import { PhoneIcon, CalendarDaysIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid'
import { getCompanyInfo } from '@/lib/content'
import { pushEvent, pushAdsConversion } from '@/lib/track-event'
import { useEffect } from 'react'

const companyInfo = getCompanyInfo()
const googleReviewUrl = 'https://maps.app.goo.gl/x9Uop8o7DNMfSufj9'
const gadsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? ''

/** Google "G" logo icon for the review CTA */
function GoogleGIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.44 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

/** Track a CTA click with both GA4 event and Google Ads conversion */
function trackCtaClick(label: string) {
  pushEvent('go_cta_click', {
    cta_label: label,
    page_path: '/go',
  })
  // Fire Google Ads conversion for high-value actions
  if (gadsId && (label === 'call' || label === 'schedule')) {
    pushAdsConversion(`${gadsId}/1L-TCPmLzY8cEK303L0o`, 200.0)
  }
}

export default function GoPage() {
  useEffect(() => {
    pushEvent('qr_scan', {
      page_path: '/go',
      referrer: document.referrer || 'direct',
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 via-green-700 to-green-600 flex flex-col -mb-20 lg:mb-0">
      {/* Header */}
      <header className="pt-8 pb-3 px-4 text-center">
        <Link href="/" data-analytics-label="go_logo" className="inline-block bg-white rounded-full px-6 py-2.5 shadow-md">
          <Image
            src="/images/kellys-appliance-logo.webp"
            alt="Kelly's Appliance Center"
            width={180}
            height={54}
            className="mx-auto h-10 w-auto"
            priority
          />
        </Link>
        <p className="text-green-100 text-sm mt-2 font-medium tracking-wide">
          Service with Pride Since 1975
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center px-4 pb-6 max-w-md mx-auto w-full">
        {/* Headline */}
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-white mb-1">Need Appliance Help?</h1>
        </div>

        {/* Trust Bar */}
        <div className="flex items-center justify-center gap-2 text-green-100 text-sm mb-6">
          <span className="text-yellow-300">&#9733; 4.8</span>
          <span className="text-green-300/50">&#8226;</span>
          <span>500+ Reviews</span>
          <span className="text-green-300/50">&#8226;</span>
          <span>Diamond Certified</span>
        </div>

        {/* Primary CTA — Call */}
        <a
          href={`tel:${companyInfo.phone}`}
          data-analytics-label="go_call"
          onClick={() => trackCtaClick('call')}
          className="flex items-center justify-center gap-3 bg-white text-green-800 rounded-2xl p-5 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all active:scale-[0.98] mb-4"
        >
          <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <PhoneIcon className="h-6 w-6 text-green-700" />
          </div>
          <div className="text-left">
            <div className="text-lg font-bold">Call Us Now</div>
            <div className="text-sm text-gray-500">{companyInfo.phone} &middot; Free Estimates</div>
          </div>
        </a>

        {/* Secondary CTA — Schedule */}
        <Link
          href="/schedule-prep"
          data-analytics-label="go_schedule"
          onClick={() => trackCtaClick('schedule')}
          className="group flex items-center gap-4 bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] mb-4"
        >
          <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
            <CalendarDaysIcon className="h-6 w-6 text-green-700" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-bold text-gray-900">Schedule My Repair</h2>
            <p className="text-sm text-gray-500">Book online &middot; Next-day available</p>
          </div>
          <svg className="h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </Link>

        {/* Tertiary — Parts & Review row */}
        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/services/parts"
            data-analytics-label="go_parts"
            onClick={() => trackCtaClick('parts')}
            className="group flex flex-col items-center gap-2 bg-white/90 rounded-2xl p-4 shadow-md hover:shadow-lg hover:bg-white transition-all active:scale-[0.98] text-center"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <WrenchScrewdriverIcon className="h-5 w-5 text-blue-700" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">Request a Part</div>
              <div className="text-xs text-gray-500">Order parts</div>
            </div>
          </Link>

          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-label="go_review"
            onClick={() => trackCtaClick('review')}
            className="group flex flex-col items-center gap-2 bg-white/90 rounded-2xl p-4 shadow-md hover:shadow-lg hover:bg-white transition-all active:scale-[0.98] text-center"
          >
            <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-gray-100 transition-colors">
              <GoogleGIcon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">Leave a Review</div>
              <div className="text-xs text-gray-500">Rate us on Google</div>
            </div>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="pb-6 px-4 text-center">
        <Link
          href="/"
          data-analytics-label="go_visit_site"
          className="text-green-200 hover:text-white text-sm underline underline-offset-2 transition-colors"
        >
          Visit our full website
        </Link>
        <p className="text-green-300/60 text-xs mt-2">
          {companyInfo.address.city}, {companyInfo.address.state} &bull; {companyInfo.hours}
        </p>
      </footer>
    </div>
  )
}
