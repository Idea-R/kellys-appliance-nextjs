import { MapPinIcon, CheckCircleIcon, ClockIcon, PhoneIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import AutoAnimate from '@/components/AutoAnimate'
import React from 'react'
import ServiceAreaMapCircles from '@/components/ServiceAreaMapCircles'
import { getCompanyInfo } from '@/lib/content'
import Layout from '@/components/Layout'
import Breadcrumbs from '@/components/Breadcrumbs'
import { generateBreadcrumbs } from '@/lib/breadcrumbs'

export const metadata = {
  title: "Service Locations",
  description: 'Cities and areas we serve across Sonoma, Marin, and Napa counties.',
  alternates: {
    canonical: '/service-locations',
  },
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

// Legacy code - retained for reference but no longer used after switching to ServiceAreaMap positioning
// import type { LatLngMarker as MapMarker, MapBounds } from '@/components/ServiceAreaMap'

// Bounding box for the static map image at /images/service-area.jpg
// Updated to cover actual service area: Bodega Bay to Guerneville, Healdsburg, Santa Rosa, Sonoma, Napa, Petaluma, Marin (Sausalito, Mill Valley, Novato)
// const mapBounds: MapBounds = {
//   north: 38.65, // ~Healdsburg
//   south: 37.85, // ~Sausalito/Mill Valley
//   west: -123.10, // ~coast west of Bodega Bay
//   east: -122.25, // ~east of Napa
// }

// Standardize markers from the centralized county/city registry and a coordinate map
// const cityCoords: Record<string, { lat: number; lng: number }> = {
//   // Sonoma
//   'santa-rosa': { lat: 38.440, lng: -122.714 },
//   'petaluma': { lat: 38.232, lng: -122.636 },
//   'rohnert-park': { lat: 38.339, lng: -122.701 },
//   'cotati': { lat: 38.327, lng: -122.707 },
//   'sebastopol': { lat: 38.402, lng: -122.823 },
//   'sonoma': { lat: 38.291, lng: -122.458 },
//   'windsor': { lat: 38.547, lng: -122.816 },
//   'healdsburg': { lat: 38.610, lng: -122.869 },
//   'forestville': { lat: 38.473, lng: -122.891 },
//   'guerneville': { lat: 38.501, lng: -123.006 },
//   'glen-ellen': { lat: 38.364, lng: -122.524 },
//   'bodega-bay': { lat: 38.333, lng: -123.048 },
//   'dillon-beach': { lat: 38.246, lng: -122.963 },
//   // Marin
//   'san-rafael': { lat: 37.973, lng: -122.531 },
//   'novato': { lat: 38.106, lng: -122.569 },
//   'mill-valley': { lat: 37.906, lng: -122.545 },
//   'sausalito': { lat: 37.859, lng: -122.485 },
//   'tiburon': { lat: 37.873, lng: -122.456 },
//   'corte-madera': { lat: 37.925, lng: -122.516 },
//   'larkspur': { lat: 37.936, lng: -122.535 },
//   // Napa
//   'napa': { lat: 38.297, lng: -122.286 },
// }

// const serviceAreaMarkers: MapMarker[] = Object.values(counties)
//   .flatMap((c) => c.cities)
//   .map((city) => ({
//     name: city.name,
//     slug: city.slug,
//     lat: cityCoords[city.slug]?.lat ?? 0,
//     lng: cityCoords[city.slug]?.lng ?? 0,
//   }))
//   .filter((m) => m.lat !== 0 && m.lng !== 0)

export default function ServiceLocationsPage() {
  const breadcrumbs = generateBreadcrumbs('/service-locations', metadata.title);

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />
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
                href="/schedule-prep"
                className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request Appointment
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
      <section className="py-16 bg-gray-50" style={{ minHeight: '500px' }}>
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
                  <div className="text-gray-600">Prompt, reliable service across our coverage area</div>
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
          <div className="space-y-4">
            {/* Google Business Profile Cards - Similar to K2 implementation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Write a Review Card */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="mb-3 p-3 bg-green-600 rounded-full inline-flex">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Google Reviews</h4>
                <p className="text-sm text-gray-700 mb-4">
                  Share your experience
                </p>
                <a
                  href="https://maps.app.goo.gl/x9Uop8o7DNMfSufj9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm w-full"
                >
                  Write a Review
                </a>
              </div>

              {/* View Business Profile Card */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="mb-3 p-3 bg-blue-600 rounded-full inline-flex">
                  <MapPinIcon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Business Profile</h4>
                <p className="text-sm text-gray-700 mb-4">
                  View hours & info
                </p>
                <a
                  href="https://www.google.com/search?q=Kelly%27s+Appliance+Center+Cotati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm w-full"
                >
                  View on Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Map (interactive with service area circles) */}
      <section className="py-16" style={{ minHeight: '600px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Service Area</h3>
          <p className="text-gray-600 mb-6 text-center">Green circles show our service coverage areas across Sonoma County, Marin County, and Napa County</p>
          <div style={{ minHeight: '500px' }}>
            <ServiceAreaMapCircles 
              className="w-full h-[500px]"
              showOfficeMarker={true}
            />
          </div>
        </div>
      </section>

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
              href="/schedule-prep"
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