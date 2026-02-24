"use client"
import { useEffect, useState } from 'react'
import { PhoneIcon, CalendarIcon } from '@heroicons/react/24/solid'
import { getCompanyInfo } from '@/lib/content'
import { BOOKING_CONFIG } from '@/lib/booking-constants'

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!mounted) return null

  const company = getCompanyInfo()
  const tel = company.phone

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[45] md:hidden bg-white border-t border-gray-200 shadow-[0_-2px_8px_rgba(0,0,0,0.1)] px-4 py-3 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex gap-3 pr-20">
        <a
          href={`tel:${tel}`}
          data-analytics-label="sticky_cta_call"
          className="flex-1 inline-flex items-center justify-center bg-green-600 text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-green-700 transition-colors"
        >
          <PhoneIcon className="h-4 w-4 mr-1.5" />
          Call Now
        </a>
        <a
          href={BOOKING_CONFIG.BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics-label="sticky_cta_book"
          className="flex-1 inline-flex items-center justify-center bg-white text-green-800 border-2 border-green-600 px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-green-50 transition-colors"
        >
          <CalendarIcon className="h-4 w-4 mr-1.5" />
          Book
        </a>
      </div>
    </div>
  )
}
