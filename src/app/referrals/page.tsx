import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import Breadcrumbs from '@/components/Breadcrumbs'
import { generateBreadcrumbs } from '@/lib/breadcrumbs'
import ReferralNetwork from '@/components/ReferralNetwork'
import { referralPartners } from '@/data/referralPartners'

export const metadata: Metadata = {
  title: 'Referrals & Trusted Partners',
  description:
    'Local businesses Kelly\'s Appliance Center trusts and recommends across Sonoma, Marin, and Napa counties: appliance installation, plumbing, HVAC, electrical, landscaping, dryer vent cleaning, and backup power.',
  alternates: {
    canonical: '/referrals',
  },
}

export default function ReferralsPage() {
  const breadcrumbs = generateBreadcrumbs('/referrals', metadata.title as string)

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-3">Referrals &amp; Trusted Partners</h1>
          <p className="text-lg opacity-95 max-w-3xl">
            Local pros we trust and recommend across Sonoma, Marin, and Napa counties.
            We do not take commissions on these referrals. They are simply businesses
            we are glad to stand behind when an appliance repair is not the whole job.
          </p>
        </div>
      </section>

      <ReferralNetwork
        title="Our Referral Network"
        subtitle="Complementary trades we recommend to Kelly's customers across the North Bay."
        areaServed="Sonoma, Marin & Napa Counties"
        partners={referralPartners}
        className="bg-white"
      />
    </Layout>
  )
}
