import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import Layout from '@/components/Layout'

export const metadata: Metadata = {
  title: 'Referrals & Trusted Partners',
  description: 'Trusted local partners for home services: contractors, HVAC, plumbing, electricians, landscaping, cleaning, mechanics, and appliance installation.',
  alternates: {
    canonical: '/referrals',
  },
}

const categories = [
  { name: 'Contractor' },
  { name: 'HVAC' },
  { name: 'Plumbing' },
  { name: 'Electrician' },
  { name: 'Landscaping' },
  { name: 'Cleaning Services' },
  { name: 'Mechanic' },
]

export default function ReferralsPage() {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-3">Referrals & Trusted Partners</h1>
          <p className="text-lg opacity-95 max-w-3xl">Local services we trust and recommend. We do not receive commissions; these are provided for your convenience.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.map((c) => (
                  <div key={c.name} className="border rounded-lg p-5 bg-white shadow-sm">
                    <div className="text-lg font-semibold mb-2">{c.name}</div>
                    <div className="text-gray-600 text-sm">Partner coming soon. If you\'d like to be listed here, contact us.</div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="bg-gray-50 border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Appliance Installation & Delivery</h3>
              <div className="flex items-center gap-4 mb-4">
                <Image src="/images/k2_logo_recolor.png" alt="K2 Appliance" width={120} height={60} className="h-12 w-auto" />
                <div>
                  <div className="font-semibold">K2 Appliance</div>
                  <div className="text-gray-600 text-sm">Professional appliance installation, delivery, and pick-up</div>
                </div>
              </div>
              <Link href="https://k2appliance.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700 transition-colors">
                Visit k2appliance.com
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  )
}


