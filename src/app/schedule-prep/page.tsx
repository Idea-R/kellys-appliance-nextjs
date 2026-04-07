import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import AppointmentForm from '@/components/AppointmentForm'
import { ShieldCheckIcon, ClockIcon, CheckBadgeIcon, StarIcon, PhoneIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/solid'

export const metadata = {
  title: 'Schedule Appliance Repair Service',
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
      {/* Compact Hero + Trust Bar — everything above fold */}
      <section className="bg-gradient-to-b from-green-800 to-green-700 text-white py-5 lg:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1">Get Your Appliance Fixed</h1>
            <p className="text-base opacity-90 max-w-2xl lg:max-w-none">Call for immediate scheduling or fill out the form below. We respond within 4 hours.</p>
          </div>
          {/* Trust signals — inline in hero */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-1 mt-3 text-xs sm:text-sm font-medium opacity-90">
            <span className="flex items-center gap-1">
              <ClockIcon className="h-3.5 w-3.5 text-green-300" />
              Since 1975
            </span>
            <span className="flex items-center gap-1">
              <CheckBadgeIcon className="h-3.5 w-3.5 text-green-300" />
              Diamond Certified
            </span>
            <span className="flex items-center gap-1">
              <StarIcon className="h-3.5 w-3.5 text-yellow-400" />
              4.8 Stars, 400+ Reviews
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheckIcon className="h-3.5 w-3.5 text-green-300" />
              90-Day Guarantee
            </span>
          </div>
        </div>
      </section>

      {/* Main Content — Form + CTAs */}
      <section className="py-6 lg:py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-start">

            {/* Left Column — Call / Text CTA */}
            <div className="lg:col-span-2 space-y-4">
              {/* Mobile: compact call banner */}
              <div className="lg:hidden bg-white rounded-xl shadow-lg border-2 border-green-600 p-4 text-center">
                <h2 className="text-lg font-bold text-gray-900 mb-1">Fastest: Call Us Now</h2>
                <a
                  href="tel:7076649702"
                  className="block bg-green-600 text-white px-5 py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors shadow-md"
                  data-analytics-label="schedule_call_cta"
                >
                  <PhoneIcon className="h-5 w-5 inline-block mr-2 -mt-0.5" />
                  (707) 664-9702
                </a>
                <p className="text-xs text-gray-500 mt-2">Mon&ndash;Fri 8:30am&ndash;4:30pm</p>
              </div>

              {/* Desktop: full call card */}
              <div className="hidden lg:block bg-white rounded-xl shadow-lg border-2 border-green-600 p-5 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                  <PhoneIcon className="h-6 w-6 text-green-700" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Fastest Option: Call Us</h2>
                <p className="text-gray-600 text-sm mb-3">Get immediate confirmation and our most current availability.</p>
                <a
                  href="tel:7076649702"
                  className="block bg-green-600 text-white px-6 py-3.5 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors shadow-md"
                  data-analytics-label="schedule_call_cta"
                >
                  Call (707) 664-9702
                </a>
                <p className="text-xs text-gray-500 mt-2">Mon&ndash;Fri 8:30am&ndash;4:30pm &bull; Emergency service available</p>
              </div>

              {/* Text option */}
              <div className="bg-white rounded-xl shadow p-4 lg:p-5 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full mb-2">
                  <ChatBubbleLeftIcon className="h-5 w-5 text-blue-700" />
                </div>
                <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-1">Prefer to Text?</h3>
                <p className="text-gray-600 text-sm mb-2">We&apos;ll get back to you quickly.</p>
                <a
                  href="sms:7076649702"
                  className="block bg-white text-blue-700 px-5 py-2.5 rounded-lg font-semibold border-2 border-blue-300 hover:bg-blue-50 transition-colors"
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
                  <div key={i} className="bg-white border rounded-lg p-3">
                    <div className="flex gap-0.5 mb-1">
                      {[...Array(5)].map((_, s) => (
                        <StarIcon key={s} className="h-3.5 w-3.5 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm italic">&ldquo;{t.quote}&rdquo;</p>
                    <p className="text-gray-500 text-xs mt-1 font-medium">- {t.author}, {t.source}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column — Appointment Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Request Service Online</h2>
                <p className="text-gray-600 text-sm mb-4">Fill out this quick form and we&apos;ll call you within 4 hours to confirm your appointment.</p>
                <AppointmentForm />
              </div>

              {/* Model number helper — below form */}
              <div className="mt-3 bg-gray-50 border rounded-lg p-3 text-center">
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
          <div className="lg:hidden mt-8 space-y-3">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide text-center">What Our Customers Say</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white border rounded-lg p-3">
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, s) => (
                      <StarIcon key={s} className="h-3.5 w-3.5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm italic">&ldquo;{t.quote}&rdquo;</p>
                  <p className="text-gray-500 text-xs mt-1 font-medium">- {t.author}, {t.source}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Kelly's — Conversion Support Section */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-6">Why 400+ Families Choose Kelly&apos;s</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                <ClockIcon className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">50+ Years, Same Family</h3>
              <p className="text-gray-600 text-sm">We&apos;ve been fixing appliances in Sonoma County since 1975. Three generations of the Kelly family have worked on your neighbors&apos; fridges, ovens, and washers.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                <ShieldCheckIcon className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">90-Day Money Back Guarantee</h3>
              <p className="text-gray-600 text-sm">If the same problem comes back within 90 days, we come back and fix it. No questions, no runaround, no extra charge.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                <CheckBadgeIcon className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Factory Authorized</h3>
              <p className="text-gray-600 text-sm">We&apos;re authorized to work on Whirlpool, KitchenAid, Maytag, GE, Viking, Dacor, and more. We use genuine OEM parts, not knockoffs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Strip */}
      <section className="py-6 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">We Service All Major Brands</p>
          <p className="text-sm text-gray-500">
            Whirlpool &bull; KitchenAid &bull; Maytag &bull; GE &bull; Samsung &bull; LG &bull; Viking &bull; Dacor &bull; Sub-Zero &bull; Bosch &bull; Miele &bull; Thermador &bull; Frigidaire &bull; Kenmore &bull; and more
          </p>
        </div>
      </section>

      {/* Service Area Reminder + Final CTA */}
      <section className="py-8 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold mb-2">Serving Sonoma, Marin &amp; Napa Counties</h2>
          <p className="text-green-100 text-sm mb-4">
            Santa Rosa &bull; Petaluma &bull; Rohnert Park &bull; Novato &bull; San Rafael &bull; Napa &bull; Sebastopol &bull; Windsor &bull; Healdsburg &bull; Mill Valley &bull; and 15+ more cities
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:7076649702"
              className="inline-flex items-center justify-center bg-white text-green-800 px-6 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors shadow-lg"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Call (707) 664-9702
            </a>
            <Link
              href="/service-locations"
              className="inline-flex items-center justify-center border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View All Service Areas
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
