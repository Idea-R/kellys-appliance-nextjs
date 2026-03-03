import Link from 'next/link'
import Layout from '@/components/Layout'
import RefNumberDisplay from '@/components/RefNumberDisplay'
import { CheckCircleIcon, PhoneIcon, ClockIcon, CameraIcon, WrenchScrewdriverIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'

export const metadata = {
  title: 'Request Received | Kelly\u2019s Appliance Center',
  description: 'Your appointment request has been received. Here\u2019s what to have ready for your technician visit: model/serial numbers, photos, and access details.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function SchedulerConfirmationPage() {
  return (
    <Layout>
      {/* Green success header */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
            <CheckCircleIcon className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">We Got Your Request!</h1>
          <p className="text-lg opacity-95 max-w-2xl mx-auto">
            We&apos;ll call you within 4 hours (business hours) to confirm your appointment. In the meantime, here&apos;s how to prepare.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Reference number */}
          <RefNumberDisplay />

          {/* Confirmation callout */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <ClockIcon className="h-8 w-8 text-blue-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-blue-900">Need immediate confirmation?</p>
              <p className="text-blue-800 text-sm">
                Can&apos;t wait? Call us at{' '}
                <a href="tel:7076649702" className="font-bold underline">(707) 664-9702</a>{' '}
                for guaranteed scheduling and our most current availability.
              </p>
            </div>
          </div>

          {/* Prep Checklist — the key content moved from old schedule-prep */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Ready for Your Visit</h2>
            <p className="text-gray-600 mb-6">Having these details ready helps our technician diagnose the problem faster and may save you time and money.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3 p-4 bg-gray-50 rounded-lg">
                <WrenchScrewdriverIcon className="h-6 w-6 text-green-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Model &amp; Serial Number</h3>
                  <p className="text-gray-600 text-sm">Usually on a label inside the door or on the back of the appliance.{' '}
                    <Link href="/resources/where-is-my-model-number" className="text-green-700 underline">Find yours</Link>
                  </p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-gray-50 rounded-lg">
                <CameraIcon className="h-6 w-6 text-green-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Photos or Video</h3>
                  <p className="text-gray-600 text-sm">Snap a photo of the rating plate, any error codes, leaks, or visible damage.</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-gray-50 rounded-lg">
                <svg className="h-6 w-6 text-green-700 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Address &amp; Access Info</h3>
                  <p className="text-gray-600 text-sm">Gate codes, parking instructions, or anything our tech needs to reach your appliance.</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-gray-50 rounded-lg">
                <ShieldCheckIcon className="h-6 w-6 text-green-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Warranty Info</h3>
                  <p className="text-gray-600 text-sm">Purchase date and warranty status, if known. We&apos;re authorized by most major brands.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-900 text-sm">
                <strong>Pro Tip:</strong> Snapping a photo of the rating plate (with model/serial number) saves time and avoids typos. Text it to us at{' '}
                <a href="sms:7076649702" className="font-semibold underline">(707) 664-9702</a>{' '}
                and include your reference number so we can match it to your request.
              </p>
            </div>
          </div>

          {/* What to Expect */}
          <div className="bg-white rounded-xl shadow p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect from Kelly&apos;s</h2>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Confirmation Call</h4>
                  <p className="text-gray-600 text-sm">We confirm your appointment and give you a service window. Our tech calls about 30 minutes before arrival so you&apos;re not waiting around.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Professional Diagnosis</h4>
                  <p className="text-gray-600 text-sm">A uniformed, factory-authorized technician arrives, diagnoses the issue, and explains the problem in plain English before any work begins.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Flat-Rate Quote, No Surprises</h4>
                  <p className="text-gray-600 text-sm">You get a flat-rate price from the national price guide before we start. The service call fee ($149-$169) is applied toward labor if you proceed.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-bold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Genuine Parts, Guaranteed Work</h4>
                  <p className="text-gray-600 text-sm">We use OEM parts and back every repair with a 90-day money-back guarantee. If it fails again, we return at no charge.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="tel:7076649702"
              className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors shadow"
            >
              <PhoneIcon className="h-5 w-5" />
              Call (707) 664-9702
            </a>
            <Link
              href="/"
              className="flex items-center justify-center gap-2 bg-white text-gray-700 px-6 py-4 rounded-xl font-semibold border hover:bg-gray-50 transition-colors"
            >
              Return to Home
            </Link>
          </div>

          {/* Mini testimonial strip */}
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-3 font-medium uppercase tracking-wide">Trusted by Your Neighbors</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { quote: 'I trust Kelly\u2019s 110% to be fair.', author: 'David R.' },
                { quote: 'Always on time, very professional.', author: 'Michelle P.' },
              ].map((t, i) => (
                <div key={i} className="bg-white border rounded-lg px-4 py-3 max-w-xs">
                  <div className="flex gap-0.5 mb-1 justify-center">
                    {[...Array(5)].map((_, s) => (
                      <StarIcon key={s} className="h-3.5 w-3.5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm italic">&ldquo;{t.quote}&rdquo;</p>
                  <p className="text-gray-500 text-xs mt-1">- {t.author}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </Layout>
  )
}
