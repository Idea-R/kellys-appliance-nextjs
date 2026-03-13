import Link from 'next/link'
import Layout from '@/components/Layout'
import RefNumberDisplay from '@/components/RefNumberDisplay'
import { CheckCircleIcon, PhoneIcon, ClockIcon, MagnifyingGlassIcon, TruckIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: "Parts Request Received | Kelly's Appliance Center",
  description: "Your parts request has been received. We'll follow up within 1 business day with pricing and availability.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function PartsConfirmationPage() {
  return (
    <Layout>
      {/* Green success header */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
            <CheckCircleIcon className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">We Got Your Parts Request!</h1>
          <p className="text-lg opacity-95 max-w-2xl mx-auto">
            We&apos;ll look up your part and call you back within 1 business day with pricing and availability.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Reference number */}
          <RefNumberDisplay />

          {/* Need it sooner? */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <ClockIcon className="h-8 w-8 text-blue-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-blue-900">Need it sooner?</p>
              <p className="text-blue-800 text-sm">
                Call us directly at{' '}
                <a href="tel:7076649702" className="font-bold underline">(707) 664-9702</a>{' '}
                and we can look it up while you&apos;re on the phone.
              </p>
            </div>
          </div>

          {/* What Happens Next */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                <div className="mx-auto w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <MagnifyingGlassIcon className="w-7 h-7 text-green-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">1. We Look It Up</h3>
                <p className="text-gray-600 text-sm">
                  Our team identifies the exact OEM part for your make and model.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                <div className="mx-auto w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <PhoneIcon className="w-7 h-7 text-green-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">2. We Call You</h3>
                <p className="text-gray-600 text-sm">
                  We confirm the part number, pricing, availability, and estimated delivery time.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                <div className="mx-auto w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <TruckIcon className="w-7 h-7 text-green-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">3. Pick Up or Ship</h3>
                <p className="text-gray-600 text-sm">
                  Get your part at our Cotati shop or have it shipped directly to you.
                </p>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="tel:7076649702"
              className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call (707) 664-9702
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-white text-green-700 border-2 border-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
