import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import AnimatedExclamation from '@/components/AnimatedExclamation'
import AppointmentForm from '@/components/AppointmentForm'
import { ShieldCheckIcon, ClockIcon, CheckBadgeIcon, StarIcon, PhoneIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/solid'

export const metadata = {
  title: 'Schedule Appliance Repair | Kelly\u2019s Appliance Center',
  description: 'Request appliance repair service in Sonoma, Marin & Napa counties. Call for immediate scheduling or fill out our quick form. Diamond Certified, 90-day guarantee.',
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
      {/* Hero — punchy, conversion-focused */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            <div className="lg:flex-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">Get Your Appliance Fixed</h1>
              <p className="text-lg opacity-95 max-w-2xl">Call us for immediate scheduling or fill out the quick form below. We&apos;ll get back to you within 4 hours.</p>
            </div>
            <div className="hidden lg:flex lg:flex-shrink-0 lg:items-center lg:justify-center">
              <AnimatedExclamation />
            </div>
          </div>
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

      {/* Main Content — Two Paths */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

            {/* Left Column — Call / Text CTA */}
            <div className="lg:col-span-2 space-y-6">
              {/* Fastest option — Call */}
              <div className="bg-white rounded-xl shadow-lg border-2 border-green-600 p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4">
                  <PhoneIcon className="h-7 w-7 text-green-700" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Fastest Option: Call Us</h2>
                <p className="text-gray-600 text-sm mb-4">Get immediate confirmation and our most current availability.</p>
                <a
                  href="tel:7076649702"
                  className="block bg-green-600 text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors shadow-md"
                  data-analytics-label="schedule_call_cta"
                >
                  Call (707) 664-9702
                </a>
                <p className="text-xs text-gray-500 mt-3">Mon&ndash;Fri 8am&ndash;5pm &bull; Emergency service available</p>
              </div>

              {/* Text option */}
              <div className="bg-white rounded-xl shadow p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                  <ChatBubbleLeftIcon className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Don&apos;t Want to Call?</h3>
                <p className="text-gray-600 text-sm mb-3">Shoot us a text at our work number&mdash;we&apos;ll get back to you quickly.</p>
                <a
                  href="sms:7076649702"
                  className="block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold border-2 border-blue-300 hover:bg-blue-50 transition-colors"
                  data-analytics-label="schedule_text_cta"
                >
                  Text (707) 664-9702
                </a>
              </div>

              {/* Van image — desktop only */}
              <div className="hidden lg:block overflow-hidden rounded-xl shadow-md">
                <Image
                  src="/images/SonomaVan2.jpg"
                  alt="Kelly's Appliance service vans ready for dispatch in Sonoma County"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                  sizes="400px"
                />
              </div>

              {/* Desktop testimonials */}
              <div className="hidden lg:block space-y-3">
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
            </div>

            {/* Right Column — Appointment Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Request Service Online</h2>
                <p className="text-gray-600 text-sm mb-6">Fill out this quick form and we&apos;ll call you within 4 hours (business hours) to confirm your appointment.</p>
                <AppointmentForm />
              </div>

              {/* Model number helper — below form */}
              <div className="mt-4 bg-gray-50 border rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600">
                  Not sure where to find your model number?{' '}
                  <Link href="/resources/where-is-my-model-number" className="text-green-700 font-semibold underline">
                    Check our guide
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Mobile testimonials — below both columns */}
          <div className="lg:hidden mt-10 space-y-3">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide text-center">What Our Customers Say</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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
          </div>
        </div>
      </section>
    </Layout>
  )
}
