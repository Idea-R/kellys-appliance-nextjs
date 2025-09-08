"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { MapPinIcon } from '@heroicons/react/24/solid'

const Modal = dynamic(() => import('@/components/Modal'), { ssr: false })

export type LatLngMarker = { name: string; slug: string; lat: number; lng: number }
export type MapBounds = { north: number; south: number; west: number; east: number }

function positionFromLatLng(bounds: MapBounds, lat: number, lng: number) {
  const left = ((lng - bounds.west) / (bounds.east - bounds.west)) * 100
  const top = ((bounds.north - lat) / (bounds.north - bounds.south)) * 100
  return { top, left }
}

type Props = {
  markers: LatLngMarker[]
  bounds: MapBounds
  mapImageSrc?: string
  phone?: string
}

export default function ServiceAreaMap({ markers, bounds, mapImageSrc = '/images/service-area.jpg', phone }: Props) {
  const [active, setActive] = React.useState<LatLngMarker | null>(null)

  return (
    <>
      <div className="relative w-full h-[420px] rounded-lg shadow-lg overflow-hidden">
        <Image
          src={mapImageSrc}
          alt="Service area map showing Sonoma, Marin, and Napa counties"
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        {markers.map((m) => {
          const pos = positionFromLatLng(bounds, m.lat, m.lng)
          return (
            <button
              key={m.slug}
              aria-label={`View ${m.name} services`}
              className="group absolute"
              style={{ top: `${pos.top}%`, left: `${pos.left}%`, transform: 'translate(-50%, -100%)' }}
              onClick={() => setActive(m)}
            >
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/90 text-gray-900 text-xs px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {m.name}
              </span>
              <MapPinIcon className="h-6 w-6 text-red-600 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform" />
            </button>
          )
        })}
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} title={active?.name ?? ''}>
        <p className="text-gray-700 mb-4">Quick actions for {active?.name}.</p>
        <div className="flex gap-3">
          {active && (
            <Link href={`/service-locations/${active.slug}`} className="inline-flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700">Open City Page</Link>
          )}
          {phone && (
            <a href={`tel:${phone}`} className="inline-flex items-center justify-center bg-white text-green-800 px-4 py-2 rounded-md font-semibold border border-green-200 hover:bg-green-50">Call {phone}</a>
          )}
        </div>
      </Modal>
    </>
  )
}


