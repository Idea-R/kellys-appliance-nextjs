import React from 'react'
import { PhoneIcon } from '@heroicons/react/24/solid'
import { getCompanyInfo } from '@/lib/content'

type Props = {
  phone?: string
  bookingUrl?: string
  className?: string
}

export default function CTA({ phone, bookingUrl, className }: Props) {
  const company = getCompanyInfo()
  const tel = phone || company.phone
  const booking = bookingUrl || 'https://booking.rossware.com/schedule/4588'

  return (
    <div className={className || 'mt-6 flex flex-col sm:flex-row gap-4'}>
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
        className="inline-flex items-center justify-center bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        Schedule Service
      </a>
    </div>
  )
}


