import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import { ShieldCheckIcon, ClockIcon, CheckBadgeIcon, StarIcon } from '@heroicons/react/24/solid'

export const metadata = {
  title: 'Before Requesting an Appointment',
  description: 'Checklist of what to have ready before requesting an appointment: model/serial, availability, issue description, and photos. Trusted since 1975 with a 90-day money-back guarantee.',
  alternates: {
    canonical: '/schedule-prep',
  },
}

const testimonials = [
  {
    quote: 'I trust Kelly\u2019s Appliance Center 110% to be fair.',
    author: 'David R.',
    source: 'Diamond Certified Survey',
  },
  {
    quote: 'Always on time, very professional, positive, and upfront.',
    author: 'Michelle P.',
    source: 'Diamond Certified Survey',
  },
  {
    quote: 'Very professional, trustworthy, respectful of our home, polite, and did good work.',
    author: 'Jan M.',
    source: 'Diamond Certified Survey',
  },
]

export default function SchedulePrepPage() {
  return (
    <Layout>
      {/* Hero — attention-grabbing "wait" feel */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 rounded-full mb-6 shadow-lg">
            <span className="text-4xl font-extrabold text-yellow-900" aria-hidden="true">!</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-3">Before You Request an Appointment</h1>
          <p className="text-lg opacity-95 max-w-2xl mx-auto">Have these details handy to speed up your request and help us diagnose the problem faster.</p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-green-900 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium">
            <span className="flex items-center gap-1.5">
              <ClockIcon className="h-4 w-4 text-green-300" />
              Serving Sonoma, Marin &amp; Napa Since 1975
            </span>
            <span className="flex items-center gap-1.5">
              <CheckBadgeIcon className="h-4 w-4 text-green-300" />
              Diamond Certified &mdash; Highest in Quality
            </span>
            <span className="flex items-center gap-1.5">
              <StarIcon className="h-4 w-4 text-yellow-400" />
              4.88 out of 5 Stars (158 Reviews)
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheckIcon className="h-4 w-4 text-green-300" />
              90-Day Money-Back Guarantee
            </span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Scheduling Checklist</h2>
              <ul className="space-y-3 text-gray-800">
                <li>• Model and Serial Number (see <Link href="/resources/where-is-my-model-number" className="text-green-700 underline">Where is my model number?</Link>)</li>
                <li>• Appliance Type and Brand</li>
                <li>• Clear Issue Description (symptoms, noises, leaks, error codes)</li>
                <li>• Photos or short video if available (helps us pre-diagnose)</li>
                <li>• Address and Gate/Access Info (if any)</li>
                <li>• Preferred Availability (2&ndash;3 windows that work for you)</li>
                <li>• Purchase Date/Warranty Status if known</li>
              </ul>
            </div>

            <div className="bg-gray-50 border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pro Tip</h3>
              <p className="text-gray-700">Snapping a photo of the rating plate (with model/serial) saves time and avoids typos.</p>
            </div>

            {/* What to Expect */}
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Expect from Kelly&apos;s</h2>
              <p className="text-gray-600 mb-5">Here&apos;s what happens after you schedule:</p>
              <div className="space-y-4">
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
                    <h4 className="font-semibold text-gray-900">Flat-Rate Quote &mdash; No Surprises</h4>
                    <p className="text-gray-600 text-sm">You get a flat-rate price from the national price guide before we start. The service call fee ($149&ndash;$169) is applied toward labor if you proceed.</p>
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

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">About Online Appointment Requests</h3>
              <p className="text-gray-700 mb-3">
                Online appointments are <strong>requests</strong> that require confirmation. We&apos;ll confirm your appointment within 4 hours during business hours or the next business day.
              </p>
              <p className="text-gray-700">
                <strong>Need immediate confirmation?</strong> Call us at (707) 664-9702 for guaranteed scheduling and our most up-to-date availability.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="bg-green-50 border-2 border-green-600 rounded-lg p-4 text-center">
              <p className="text-sm font-semibold text-green-900 mb-2">&#9889; IMMEDIATE CONFIRMATION</p>
              <a href="tel:7076649702" className="block text-center bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 mb-2" data-analytics-label="schedule_prep_call">Call (707) 664-9702</a>
              <p className="text-xs text-gray-700">Immediate confirmation &amp; current availability</p>
            </div>
            <a href="https://booking.rossware.com/schedule/4588" target="_blank" rel="noopener noreferrer" className="block text-center bg-white text-green-800 px-6 py-4 rounded-lg font-semibold border-2 border-green-600 hover:bg-green-50" data-analytics-label="schedule_prep_book">
              Request Appointment Online
            </a>
            <p className="text-xs text-center text-gray-600">Online requests confirmed within 4 hours (business hours)</p>
            <Link href="/resources/where-is-my-model-number" className="block text-center bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold border hover:bg-gray-50" data-analytics-label="schedule_prep_model_number">Where is my model number?</Link>

            {/* Van image */}
            <div className="mt-4 overflow-hidden rounded-lg shadow-md">
              <Image
                src="/images/SonomaVan2.jpg"
                alt="Kelly's Appliance service vans ready for dispatch in Sonoma County"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>

            {/* Testimonials */}
            <div className="mt-2 space-y-3">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide text-center">What Our Customers Say</h3>
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white border rounded-lg p-4">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, s) => (
                      <StarIcon key={s} className="h-4 w-4 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm italic">&ldquo;{t.quote}&rdquo;</p>
                  <p className="text-gray-500 text-xs mt-2 font-medium">&mdash; {t.author}, {t.source}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  )
}
