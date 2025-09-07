import { MapPinIcon, CheckCircleIcon, ClockIcon, PhoneIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Image from 'next/image'
import AutoAnimate from '@/components/AutoAnimate'
import React from 'react'
import MapQuickModal from '@/components/MapQuickModal'
import { getCompanyInfo } from '@/lib/content'
import Layout from '@/components/Layout'

export const metadata = {
  title: "Service Locations | Kelly's Appliance Center",
  description: 'Cities and areas we serve across Sonoma, Marin, and Napa counties.',
};

const company = getCompanyInfo()

const serviceLocations = [
  { name: 'Santa Rosa', slug: 'santa-rosa', highlights: ['Downtown', 'Roseland', 'Fountaingrove'] },
  { name: 'Petaluma', slug: 'petaluma', highlights: ['Historic Downtown', 'East', 'West'] },
  { name: 'Rohnert Park', slug: 'rohnert-park', highlights: ['SSU', 'Expressway Corridor'] },
  { name: 'Sonoma', slug: 'sonoma', highlights: ['Plaza', 'Springs', 'Vineyards'] },
  { name: 'Sebastopol', slug: 'sebastopol', highlights: ['Downtown', 'Apple Hill'] },
  { name: 'Bodega Bay', slug: 'bodega-bay', highlights: ['Harbor', 'Coastal Trails'] },
  { name: 'Windsor', slug: 'windsor', highlights: ['Town Green', 'Foothill Park'] },
  { name: 'Napa', slug: 'napa', highlights: ['Downtown', 'Browns Valley', 'Carneros'] },
  // Marin cities
  { name: 'San Rafael', slug: 'san-rafael', highlights: ['Downtown', 'Terra Linda'] },
  { name: 'Novato', slug: 'novato', highlights: ['Old Town', 'Hamilton'] },
  { name: 'Mill Valley', slug: 'mill-valley', highlights: ['Downtown', 'Tamalpais Valley'] },
  { name: 'Larkspur', slug: 'larkspur', highlights: ['Downtown', 'Greenbrae'] },
  { name: 'Corte Madera', slug: 'corte-madera', highlights: ['The Village', 'Madera Gardens'] },
  { name: 'Tiburon', slug: 'tiburon', highlights: ['Downtown', 'Belvedere'] },
  { name: 'Sausalito', slug: 'sausalito', highlights: ['Waterfront', 'New Town'] },
  // (deduped) San Rafael and Novato already listed above
]

type LatLngMarker = { name: string; slug: string; lat: number; lng: number }

// Bounding box for the static map image at /images/service-area.jpg
// Adjust if the background image changes.
const mapBounds = {
  north: 38.80, // ~Healdsburg/Calistoga
  south: 37.80, // ~Sausalito/Mill Valley
  west: -123.35, // ~coast west of Jenner
  east: -122.15, // ~east of Napa
}

const serviceAreaMarkers: LatLngMarker[] = [
  { name: 'Windsor', slug: 'windsor', lat: 38.547, lng: -122.816 },
  { name: 'Santa Rosa', slug: 'santa-rosa', lat: 38.440, lng: -122.714 },
  { name: 'Sebastopol', slug: 'sebastopol', lat: 38.402, lng: -122.823 },
  { name: 'Rohnert Park', slug: 'rohnert-park', lat: 38.339, lng: -122.701 },
  { name: 'Sonoma', slug: 'sonoma', lat: 38.291, lng: -122.458 },
  { name: 'Petaluma', slug: 'petaluma', lat: 38.232, lng: -122.636 },
  { name: 'Novato', slug: 'novato', lat: 38.106, lng: -122.569 },
  { name: 'San Rafael', slug: 'san-rafael', lat: 37.973, lng: -122.531 },
  { name: 'Napa', slug: 'napa', lat: 38.297, lng: -122.286 },
  { name: 'Mill Valley', slug: 'mill-valley', lat: 37.906, lng: -122.545 },
  { name: 'Larkspur', slug: 'larkspur', lat: 37.936, lng: -122.535 },
  { name: 'Corte Madera', slug: 'corte-madera', lat: 37.925, lng: -122.516 },
  { name: 'Tiburon', slug: 'tiburon', lat: 37.873, lng: -122.456 },
  { name: 'Sausalito', slug: 'sausalito', lat: 37.859, lng: -122.485 },
  { name: 'Bodega Bay', slug: 'bodega-bay', lat: 38.333, lng: -123.048 },
]

function positionFromLatLng(lat: number, lng: number) {
  const left = ((lng - mapBounds.west) / (mapBounds.east - mapBounds.west)) * 100
  const top = ((mapBounds.north - lat) / (mapBounds.north - mapBounds.south)) * 100
  return { top, left }
}

export default function ServiceLocationsPage() {
  return (
    <Layout>
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-green-800 via-green-700 to-green-600 text-white py-16">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Service Areas</h1>
            <p className="text-lg lg:text-xl opacity-95 mb-8">Serving Sonoma, Marin, and Napa since 1975</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${company.phone}`}
                className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
              >
                <PhoneIcon className="h-6 w-6 mr-2" />
                Call {company.phone}
              </a>
              <a
                href="https://booking.rossware.com/schedule/4588"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by County */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Browse by County</h2>
            <p className="text-gray-600">Jump to a county to see all covered cities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/service-locations/sonoma-county" className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-green-300 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Sonoma County</h3>
              <p className="text-sm text-gray-700">Santa Rosa, Petaluma, Rohnert Park, Sonoma, Sebastopol, Windsor…</p>
            </Link>
            <Link href="/service-locations/marin-county" className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-green-300 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Marin County</h3>
              <p className="text-sm text-gray-700">San Rafael, Novato, Mill Valley, Sausalito, Tiburon, Corte Madera…</p>
            </Link>
            <Link href="/service-locations/napa-county" className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-green-300 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Napa County</h3>
              <p className="text-sm text-gray-700">Napa and nearby communities.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Cities & Areas We Serve</h2>
            <p className="text-gray-600">Select a location to view details and schedule service</p>
          </div>
          <AutoAnimate className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceLocations.map((loc) => (
              <div key={loc.slug} className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-3">
                  <MapPinIcon className="h-7 w-7 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{loc.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {loc.highlights.map((h) => (
                    <span key={h} className="inline-block bg-green-50 text-green-800 text-xs px-2 py-1 rounded-full">{h}</span>
                  ))}
                </div>
                <Link
                  href={`/service-locations/${loc.slug}`}
                  className="inline-flex items-center justify-center w-full bg-green-600 text-white px-4 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
                >
                  View {loc.name} Services
                </Link>
              </div>
            ))}
          </AutoAnimate>
        </div>
      </section>

      {/* Coverage Map + Reasons */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Kelly's Appliance Center?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                <div>
                  <strong>Factory Authorized</strong>
                  <div className="text-gray-600">Certified repair for major brands using genuine parts</div>
                </div>
              </li>
              <li className="flex items-start">
                <ClockIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                <div>
                  <strong>Fast Response</strong>
                  <div className="text-gray-600">Same-day or next-day service across our coverage area</div>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                <div>
                  <strong>50+ Years</strong>
                  <div className="text-gray-600">Trusted Bay Area service since 1975</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99154.73935582353!2d-122.8697!3d38.5816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808442c56db4e3a5%3A0x3cfe9df7b8bf0eed!2sKelly&#39;s%20Appliance%20Center!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Coverage Map (Static with markers) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Coverage Overview</h3>
          <p className="text-gray-600 mb-6">Hover markers to see city names. Click to open each location page.</p>
          <div className="relative w-full h-[420px] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/service-area.jpg"
              alt="Service area map showing Sonoma, Marin, and Napa counties"
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
            {serviceAreaMarkers.map((m) => {
              const pos = positionFromLatLng(m.lat, m.lng)
              return (
              <Link
                key={m.slug}
                href={`/service-locations/${m.slug}`}
                aria-label={`View ${m.name} services`}
                className="group absolute"
                style={{ top: `${pos.top}%`, left: `${pos.left}%`, transform: 'translate(-50%, -100%)' }}
              >
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/90 text-gray-900 text-xs px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {m.name}
                </span>
                <MapPinIcon className="h-6 w-6 text-red-600 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform" />
              </Link>
              )
            })}
          </div>
        </div>
      </section>

      <MapQuickModal phone={company.phone} />

      {/* CTA */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Need Service in Your Area?</h2>
          <p className="text-lg mb-8 opacity-95">Call us or book online in seconds</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${company.phone}`}
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-800 transition-colors"
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              Call {company.phone}
            </a>
            <a
              href="https://booking.rossware.com/schedule/4588"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Online Now
            </a>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  )
}

export const dynamic = 'force-static'