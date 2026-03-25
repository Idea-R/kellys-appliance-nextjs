'use client'

import Image from 'next/image'
import Link from 'next/link'
import { PhoneIcon, CalendarDaysIcon, WrenchScrewdriverIcon, StarIcon } from '@heroicons/react/24/solid'
import { getCompanyInfo } from '@/lib/content'
import { pushEvent } from '@/lib/track-event'
import { useEffect } from 'react'

const companyInfo = getCompanyInfo()

const googleReviewUrl = 'https://maps.app.goo.gl/x9Uop8o7DNMfSufj9'

export default function GoPage() {
  useEffect(() => {
    pushEvent('qr_scan', {
      page_path: '/go',
      referrer: document.referrer || 'direct',
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 via-green-700 to-green-600 flex flex-col">
      {/* Header */}
      <header className="pt-8 pb-4 px-4 text-center">
        <Link href="/" data-analytics-label="go_logo" className="inline-block bg-white/95 rounded-xl px-5 py-3 shadow-lg">
          <Image
            src="/images/kellys-appliance-logo.webp"
            alt="Kelly's Appliance Center"
            width={200}
            height={60}
            className="mx-auto h-12 w-auto"
            priority
          />
        </Link>
        <p className="text-green-100 text-sm mt-2 tracking-wide">Appliance Repair Since 1975</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center px-4 pb-8 max-w-md mx-auto w-full">
        {/* Welcome */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome!</h1>
          <p className="text-green-100 text-base">
            How can we help you today?
          </p>
        </div>

        {/* CTA Cards */}
        <div className="flex flex-col gap-4">
          {/* Schedule Appointment */}
          <Link
            href="/schedule-prep"
            data-analytics-label="go_schedule"
            className="group flex items-center gap-4 bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
              <CalendarDaysIcon className="h-7 w-7 text-green-700" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-bold text-gray-900">Schedule a Repair</h2>
              <p className="text-sm text-gray-500">Book an appointment online</p>
            </div>
            <svg className="h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>

          {/* Request Parts */}
          <Link
            href="/services/parts"
            data-analytics-label="go_parts"
            className="group flex items-center gap-4 bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
              <WrenchScrewdriverIcon className="h-7 w-7 text-blue-700" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-bold text-gray-900">Request a Part</h2>
              <p className="text-sm text-gray-500">Order appliance parts</p>
            </div>
            <svg className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>

          {/* Leave a Review */}
          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-label="go_review"
            className="group flex items-center gap-4 bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex-shrink-0 w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
              <StarIcon className="h-7 w-7 text-yellow-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-bold text-gray-900">Leave a Review</h2>
              <p className="text-sm text-gray-500">Tell us how we did</p>
            </div>
            <svg className="h-5 w-5 text-gray-400 group-hover:text-yellow-600 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </div>

        {/* Call CTA */}
        <div className="mt-6">
          <a
            href={`tel:${companyInfo.phone}`}
            data-analytics-label="go_call"
            className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm text-white border border-white/30 rounded-2xl p-4 hover:bg-white/25 transition-all active:scale-[0.98]"
          >
            <PhoneIcon className="h-5 w-5" />
            <span className="font-semibold">Call Us: {companyInfo.phone}</span>
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
