import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import PartsRequestForm from '@/components/PartsRequestForm'
import {
  PhoneIcon,
  MagnifyingGlassIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  ClockIcon,
  MapPinIcon,
  CheckIcon,
} from '@heroicons/react/24/outline'

export const metadata = {
  title: "Appliance Parts | Kelly's Appliance Center — Cotati, CA",
  description:
    "Need an appliance part? Kelly's sources OEM parts for every major brand. Call (707) 664-9702 or submit a request online — we'll call you back with pricing and availability.",
  alternates: {
    canonical: '/services/parts',
  },
}

const kellysPhone = '7076649702'
const kellysPhoneDisplay = '(707) 664-9702'

const popularParts: Array<{ name: string; blurb: string }> = [
  { name: 'Refrigerator Water Filters', blurb: 'OEM filters for clean, safe drinking water' },
  { name: 'Fridge Air Filters', blurb: 'Helps reduce odors and keep air fresh' },
  { name: 'Dryer Vent Hose', blurb: 'UL-listed venting to maintain airflow and safety' },
  { name: 'Dryer Belt', blurb: 'OEM belts for proper drum drive and long life' },
  { name: 'Washer Hoses', blurb: 'Stainless braided or OEM replacements' },
  { name: 'Dishwasher Drain Hose', blurb: 'Correct diameter and length for your model' },
  { name: 'Range Igniter', blurb: 'Genuine parts for reliable ignition' },
  { name: 'Ice Maker Kits', blurb: 'OEM kits for compatible refrigerator models' },
]

export default function PartsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-green-200 font-semibold mb-2 text-sm uppercase tracking-wide">
                Sonoma County&apos;s Appliance Parts Source
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Appliance Parts — Sourced&nbsp;Locally
              </h1>
              <p className="text-lg opacity-95 mb-6">
                Over 50 years of parts expertise. We source genuine OEM parts for every major brand
                and verify compatibility before you buy — so you get the right part the first time.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${kellysPhone}`}
                  className="inline-flex items-center justify-center bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Call {kellysPhoneDisplay}
                </a>
                <Link
                  href="#parts-form"
                  className="inline-flex items-center justify-center bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors border border-white/20"
                >
                  Request a Part Online
                </Link>
              </div>
            </div>

            {/* How It Works — hero sidebar */}
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-semibold">Find Your Model Number</p>
                    <p className="text-sm text-white/85">
                      Check the label inside the door or on the back.{' '}
                      <Link href="/resources/where-is-my-model-number" className="underline text-white hover:text-green-200">
                        Need help?
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-semibold">Call Us or Fill Out the Form</p>
                    <p className="text-sm text-white/85">
                      Tell us the part you need — we&apos;ll verify compatibility with your exact model.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-semibold">We Source &amp; Call You Back</p>
                    <p className="text-sm text-white/85">
                      We confirm the part, pricing, and lead time — then you pick up or we ship.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular DIY Parts */}
      <section id="popular" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular DIY Parts</h2>
            <p className="text-gray-600">Fast-moving items homeowners request most</p>
          </div>

          <div
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2"
            role="region"
            aria-label="Popular parts carousel"
          >
            {popularParts.map((item, idx) => (
              <div
                key={idx}
                className="min-w-[260px] snap-start bg-white rounded-xl shadow p-5 border border-gray-100 flex flex-col"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{item.blurb}</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={`tel:${kellysPhone}`}
                    className="inline-flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700 transition-colors text-sm"
                    aria-label={`Call to order ${item.name}`}
                  >
                    <PhoneIcon className="w-4 h-4 mr-1.5" />
                    Call Us
                  </a>
                  <Link
                    href="#parts-form"
                    className="inline-flex items-center justify-center px-4 py-2 rounded font-semibold text-green-700 hover:text-green-800 text-sm border border-green-200 hover:border-green-300 transition-colors"
                  >
                    Request This Part
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parts Request Form + Benefits sidebar */}
      <section id="parts-form" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Request a Part</h2>
            <p className="text-gray-600">
              Fill out the form and we&apos;ll call you back within 1 business day with pricing and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form — takes 2 columns on large screens */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
              <PartsRequestForm />
            </div>

            {/* Benefits sidebar */}
            <div className="space-y-5">
              <div className="bg-green-50 rounded-xl border border-green-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Kelly&apos;s for Parts?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ShieldCheckIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Genuine OEM Parts</p>
                      <p className="text-gray-600 text-sm">Matched to your exact model — no guessing.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <WrenchScrewdriverIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">50+ Years Expertise</p>
                      <p className="text-gray-600 text-sm">We know appliances — we can help you find the right fix.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <TruckIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Pick Up or Ship</p>
                      <p className="text-gray-600 text-sm">Grab it at our Cotati shop or have it shipped to your door.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ClockIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Fast Turnaround</p>
                      <p className="text-gray-600 text-sm">We call you back within 1 business day with pricing.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPinIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Locally Owned</p>
                      <p className="text-gray-600 text-sm">Serving Sonoma County from our Cotati shop since 1974.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Phone CTA card */}
              <div className="bg-blue-50 rounded-xl border border-blue-200 p-6 text-center">
                <PhoneIcon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="font-bold text-gray-900 mb-1">Prefer to Call?</p>
                <p className="text-gray-600 text-sm mb-3">
                  We can look up your part while you&apos;re on the phone.
                </p>
                <a
                  href={`tel:${kellysPhone}`}
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full"
                >
                  {kellysPhoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why OEM Parts */}
      <section id="why-oem" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why OEM Parts Matter</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Exact fit guaranteed</strong> — OEM parts are made for your specific model. No shimming, trimming, or hoping it works.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Manufacturer warranty safe</strong> — Generic parts can void your appliance warranty. OEM keeps it intact.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Longer lifespan</strong> — Built to the same spec as the original. One repair, done right.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Expert verification</strong> — We cross-reference your model number to confirm compatibility before ordering.
                  </span>
                </li>
              </ul>
            </div>
            <aside className="bg-green-50 rounded-xl p-6 border border-green-100">
              <MagnifyingGlassIcon className="w-10 h-10 text-green-600 mb-3" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Need Help Finding Your Model Number?
              </h3>
              <p className="text-gray-700 mb-4">
                Use our quick guide to locate the model and serial tags on your appliance.
              </p>
              <Link
                href="/resources/where-is-my-model-number"
                className="inline-flex items-center justify-center bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                View Model Number Guide
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-3">Ready to Order a Part?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Call us directly or submit a request online — we&apos;ll get back to you with pricing, availability, and lead time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${kellysPhone}`}
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call {kellysPhoneDisplay}
            </a>
            <Link
              href="#parts-form"
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-800 transition-colors border border-white/30"
            >
              Request a Part Online
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
