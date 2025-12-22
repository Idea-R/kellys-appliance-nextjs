import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Breadcrumbs from '@/components/Breadcrumbs'
import { generateBreadcrumbs } from '@/lib/breadcrumbs'

export const metadata = {
  title: 'Referrals & Trusted Partners',
  description: 'Local businesses we recommend. Appliance installation, vent cleaning, plumbing & HVAC.',
}

type Partner = {
  name: string
  url: string
  description: string
  phone?: string
  logoSrc?: string
  utm?: string
}

const partners: Partner[] = [
  {
    name: 'K2 Appliance Installation',
    url: 'https://k2appliance.com/',
    description: 'Professional appliance installation, delivery, and haul-away. Streamlined coordination with our service team.',
    phone: '(510) 225-5831',
    logoSrc: '/images/k2_logo_recolor.png',
    utm: 'ref=kellys-referrals'
  },
  {
    name: 'Dryer Vent Wizard',
    url: 'http://dryerventwizard.com/dryer-vent-cleaning',
    description: 'Residential dryer vent cleaning and repairs to improve safety and efficiency. See service details and request scheduling.',
    utm: 'ref=kellys-referrals'
  },
  {
    name: 'Prado\'s Plumbing, Heating and Air',
    url: 'https://pradosplumbinghvac.com/',
    description: 'Trusted local pros for plumbing and HVAC. Repairs, maintenance, and installs with quality workmanship.',
    utm: 'ref=kellys-referrals'
  },
]

export default function ReferralsPage() {
  const breadcrumbs = generateBreadcrumbs('/resources/referrals', metadata.title);

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-3">Referrals & Trusted Partners</h1>
          <p className="text-lg opacity-95 max-w-3xl">Local businesses we trust and recommend. Click-throughs are tracked for quality and relationship insights.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((p) => {
            const href = p.utm ? `${p.url}${p.url.includes('?') ? '&' : '?'}${p.utm}` : p.url
            return (
              <Link key={p.name} href={href} target="_blank" rel="noopener noreferrer" className="group block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden" data-analytics-label={`partner_${p.name.replace(/[^a-z0-9]+/gi,'-').toLowerCase()}`} aria-label={`Visit ${p.name}`}>
                <div className="relative h-40 bg-gray-50 flex items-center justify-center">
                  {p.logoSrc ? (
                    <Image src={p.logoSrc} alt={p.name} width={200} height={80} className="h-16 w-auto object-contain" />
                  ) : (
                    <div className="text-center px-6">
                      <div className="text-lg font-semibold text-gray-900">{p.name}</div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="text-xl font-bold text-gray-900 mb-1">{p.name}</div>
                  <p className="text-gray-700 mb-3">{p.description}</p>
                  {p.phone && <div className="text-sm text-gray-600">{p.phone}</div>}
                  <div className="mt-4 text-green-700 font-semibold">Visit website →</div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}


