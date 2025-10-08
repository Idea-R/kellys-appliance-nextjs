import React from 'react'
import { PhoneIcon, CalendarIcon } from '@heroicons/react/24/solid'
import { getCompanyInfo } from '@/lib/content'
import { BOOKING_CONFIG } from '@/lib/booking-constants'

type Props = {
  phone?: string
  bookingUrl?: string
  className?: string
  showDisclaimer?: boolean
  disclaimerVariant?: 'full' | 'medium' | 'short'
}

export default function CTA({ 
  phone, 
  bookingUrl, 
  className,
  showDisclaimer = true,
  disclaimerVariant = 'medium'
}: Props) {
  const company = getCompanyInfo()
  const tel = phone || company.phone
  const booking = bookingUrl || BOOKING_CONFIG.BOOKING_URL

  const disclaimerText = {
    full: BOOKING_CONFIG.DISCLAIMERS.FULL,
    medium: BOOKING_CONFIG.DISCLAIMERS.MEDIUM,
    short: BOOKING_CONFIG.DISCLAIMERS.SHORT,
  }[disclaimerVariant]

  return (
    <div className="space-y-3">
      <div className={className || 'flex flex-col sm:flex-row gap-4'}>
        <a
          href={`tel:${tel}`}
          className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          <PhoneIcon className="h-5 w-5 mr-2" />
          Call {tel}
        </a>
        <a
          href={booking}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-white text-green-800 border-2 border-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
        >
          <CalendarIcon className="h-5 w-5 mr-2" />
          Request Appointment Online
        </a>
      </div>
      {showDisclaimer && (
        <p className="text-sm text-gray-600 text-center sm:text-left">
          {disclaimerText}
        </p>
      )}
    </div>
  )
}


