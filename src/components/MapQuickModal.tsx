"use client";

import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Modal = dynamic(() => import('@/components/Modal'), { ssr: false })

type Props = { phone?: string }

export default function MapQuickModal({ phone }: Props) {
  const [open, setOpen] = React.useState(false)
  const [activeCity] = React.useState<{ name: string; slug: string }>({ name: 'Santa Rosa', slug: 'santa-rosa' })

  return (
    <>
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setOpen(true)}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:border-green-300 hover:bg-green-50"
          >
            Quick view example
          </button>
        </div>
      </section>

      <Modal open={open} onClose={() => setOpen(false)} title={activeCity.name}>
        <p className="text-gray-700 mb-4">View services, book, or explore community links for {activeCity.name}.</p>
        <div className="flex gap-3">
          <Link href={`/service-locations/${activeCity.slug}`} className="inline-flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700">Open City Page</Link>
          {phone && (
            <a href={`tel:${phone}`} className="inline-flex items-center justify-center bg-white text-green-800 px-4 py-2 rounded-md font-semibold border border-green-200 hover:bg-green-50">Call {phone}</a>
          )}
        </div>
      </Modal>
    </>
  )
}


