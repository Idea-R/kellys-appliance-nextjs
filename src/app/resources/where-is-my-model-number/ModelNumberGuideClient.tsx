'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import { ChevronDownIcon, ChevronUpIcon, CameraIcon, DocumentTextIcon, PhoneIcon } from '@heroicons/react/24/outline'
import type { ApplianceGuide } from './modelNumberData'

type CompanyInfo = {
  phone: string
}

type Props = {
  companyInfo: CompanyInfo
  appliances: ApplianceGuide[]
}

export default function ModelNumberGuideClient({ companyInfo, appliances }: Props) {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const applianceNav = useMemo(
    () =>
      appliances.map((a) => ({
        id: a.id,
        label: a.title,
      })),
    [appliances]
  )

  const onJump = (id: string) => {
    setOpenSection(id)
    requestAnimationFrame(() => {
      document.getElementById(`appliance-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-3">How to Find Your Appliance Model Number</h1>
          <p className="text-xl opacity-95 max-w-3xl mb-6">
            A complete guide to finding model and serial numbers on major household appliances
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm">Essential for repairs</span>
            <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm">Parts ordering</span>
            <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm">Warranty service</span>
          </div>
        </div>
      </section>

      {/* Jump links */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Jump to appliance type</h2>
          <div className="flex flex-wrap gap-2">
            {applianceNav.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={() => onJump(a.id)}
                className="px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-800 hover:border-green-300 hover:bg-green-50 transition text-sm font-medium"
                aria-label={`Jump to ${a.label} model number locations`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-12 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-600" role="listitem">
              <CameraIcon className="h-8 w-8 text-green-600 mb-3" aria-hidden="true" />
              <h3 className="font-semibold text-gray-900 mb-2">Take a Photo</h3>
              <p className="text-gray-600 text-sm">
                <strong>Can&apos;t find the model number?</strong> Take a clear photo of the entire appliance and any visible labels.
                This helps our technicians identify your model and prepare for service.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-600" role="listitem">
              <DocumentTextIcon className="h-8 w-8 text-blue-600 mb-3" aria-hidden="true" />
              <h3 className="font-semibold text-gray-900 mb-2">Check Paperwork</h3>
              <p className="text-gray-600 text-sm">
                Look for your <strong>user manual or purchase receipt</strong> — they often list the model number.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-purple-600" role="listitem">
              <PhoneIcon className="h-8 w-8 text-purple-600 mb-3" aria-hidden="true" />
              <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
              <p className="text-gray-600 text-sm">
                Call us at{' '}
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-green-700 font-semibold hover:underline"
                  aria-label={`Call ${companyInfo.phone} for help finding your model number`}
                >
                  {companyInfo.phone}
                </a>{' '}
                and we&apos;ll walk you through finding it for your specific appliance brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Expandable Sections */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-gray-600 text-lg">Select an appliance type for detailed location instructions.</p>
          </div>

          <div className="space-y-4">
            {appliances.map((appliance) => {
              const isOpen = openSection === appliance.id
              const triggerId = `appliance-${appliance.id}-trigger`
              const panelId = `appliance-${appliance.id}-panel`
              return (
                <div
                  key={appliance.id}
                  id={`appliance-${appliance.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 scroll-mt-28"
                >
                  <button
                    type="button"
                    onClick={() => setOpenSection(isOpen ? null : appliance.id)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    id={triggerId}
                  >
                    <span className="text-xl font-bold text-gray-900">{appliance.title}</span>
                    {isOpen ? (
                      <ChevronUpIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                    ) : (
                      <ChevronDownIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                    )}
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    hidden={!isOpen}
                    className="px-6 pb-6 space-y-6"
                  >
                    {appliance.sections.map((section, idx) => (
                      <div key={idx}>
                        <h3 className="font-semibold text-gray-900 mb-3 text-lg">{section.subtitle}</h3>
                        <ul className="space-y-2">
                          {section.locations.map((location, locIdx) => (
                            <li key={locIdx} className="flex items-start">
                              <span className="text-green-600 mr-2 mt-1" aria-hidden="true">
                                ✓
                              </span>
                              <span className="text-gray-700">{location}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {appliance.brandNotes && (
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                        <p className="text-sm font-semibold text-blue-900 mb-1">Brand-specific notes</p>
                        <p className="text-sm text-blue-800">{appliance.brandNotes}</p>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What to Record Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What to record</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">1.</span>
                <div>
                  <strong className="text-gray-900">Complete Model Number</strong>
                  <p className="text-gray-600 text-sm">All letters and numbers (e.g., LAT1000AAE, WRF555SDFZ)</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">2.</span>
                <div>
                  <strong className="text-gray-900">Complete Serial Number</strong>
                  <p className="text-gray-600 text-sm">Usually starts with letters followed by numbers</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">3.</span>
                <div>
                  <strong className="text-gray-900">Brand/Manufacturer Name</strong>
                  <p className="text-gray-600 text-sm">Whirlpool, GE, Samsung, LG, Wolf, Sub-Zero, etc.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">4.</span>
                <div>
                  <strong className="text-gray-900">Take a Clear Photo</strong>
                  <p className="text-gray-600 text-sm">Photo of the entire tag with flash for best reference</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Related services / internal links */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Now that you have your model number</h2>
          <p className="text-gray-700 mb-6">
            We can verify parts, prepare for the visit, and get your repair moving faster.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/services/refrigerator-repair" className="rounded-xl border border-gray-200 p-5 hover:border-green-300 hover:shadow-sm transition">
              <div className="font-semibold text-gray-900">Refrigerator Repair</div>
              <div className="text-sm text-gray-700">Cooling issues, ice makers, compressors, leaks</div>
            </Link>
            <Link href="/services/oven-repair" className="rounded-xl border border-gray-200 p-5 hover:border-green-300 hover:shadow-sm transition">
              <div className="font-semibold text-gray-900">Oven & Range Repair</div>
              <div className="text-sm text-gray-700">Heating, ignition, temperature, control boards</div>
            </Link>
            <Link href="/services/washer-dryer-repair" className="rounded-xl border border-gray-200 p-5 hover:border-green-300 hover:shadow-sm transition">
              <div className="font-semibold text-gray-900">Washer & Dryer Repair</div>
              <div className="text-sm text-gray-700">Leaks, no spin, long dry times, noise</div>
            </Link>
            <Link href="/services/dishwasher-repair" className="rounded-xl border border-gray-200 p-5 hover:border-green-300 hover:shadow-sm transition">
              <div className="font-semibold text-gray-900">Dishwasher Repair</div>
              <div className="text-sm text-gray-700">Drain issues, leaks, error codes</div>
            </Link>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/services/parts" className="btn-fill inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold">
              Order Parts
            </Link>
            <Link href="/contact" className="btn-fill alt inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold">
              Request Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="py-12 bg-yellow-50 border-t border-b border-yellow-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Safety first</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Electrical appliances:</strong> Disconnect power before accessing any parts
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Gas appliances:</strong> Turn off gas before moving units
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Under warranty?</strong> Don&apos;t disassemble — contact manufacturer first
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Heavy appliances:</strong> Use proper lifting techniques or get help
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still can&apos;t find it?</h2>
          <p className="text-xl mb-8 opacity-95">
            Call us and we&apos;ll help you locate your model number and get what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              Call {companyInfo.phone}
            </a>
            <Link
              href="/services/parts"
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-800 transition-colors border-2 border-white"
            >
              Order Parts →
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-t border-gray-200 p-3 pb-[calc(12px+env(safe-area-inset-bottom))]">
        <a
          href={`tel:${companyInfo.phone}`}
          className="w-full inline-flex items-center justify-center bg-green-600 text-white px-4 py-3 rounded-lg font-semibold"
          aria-label={`Call ${companyInfo.phone}`}
        >
          <PhoneIcon className="h-5 w-5 mr-2" />
          Call {companyInfo.phone}
        </a>
      </div>
    </>
  )
}


