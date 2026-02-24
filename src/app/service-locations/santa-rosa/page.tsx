import React from 'react'
import Layout from '@/components/Layout'
import Breadcrumbs from '@/components/Breadcrumbs'
import { generateBreadcrumbs } from '@/lib/breadcrumbs'
import CTA from '@/components/CTA'
import ServicesGrid from '@/components/ServicesGrid'
import MidPageCTA from '@/components/MidPageCTA'
import WhyChooseUs from '@/components/WhyChooseUs'
import BottomCTA from '@/components/BottomCTA'
import NearbyCityLinks from '@/components/NearbyCityLinks'
import RelatedServiceLinks from '@/components/RelatedServiceLinks'
import CityJsonLd from '@/components/CityJsonLd'
import { getCityContent } from '@/data/cityContent'

const city = getCityContent('santa-rosa')

export const metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: `/service-locations/${city.slug}` },
}

export default function SantaRosaPage() {
  const breadcrumbs = generateBreadcrumbs(`/service-locations/${city.slug}`, city.metaTitle)

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Hero */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Appliance Repair in {city.name}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{city.heroSubtitle}</p>
          <CTA
            className="flex flex-col sm:flex-row gap-4 justify-center"
            disclaimerVariant="short"
            callLabel="hero_cta_call"
            bookLabel="hero_cta_book"
            disclaimerClassName="text-sm text-green-100 text-center mt-1"
          />
        </div>
      </section>

      {/* 2. Why [City] Residents Trust Kelly's */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{city.trustHeading}</h2>
          <div className="prose prose-gray max-w-none space-y-4">
            {city.trustContent.map((p, i) => (
              <p key={i} className="text-gray-700">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <ServicesGrid cityName={city.name} />

      {/* 4. Mid-Page CTA */}
      <MidPageCTA heading={city.midCtaHeading} />

      {/* 5. Local Highlights + Top Eats + Nearby/Related */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Local Highlights</h2>
              <p className="text-gray-700">{city.localHighlights}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Top 3 Eats</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {city.topEats.map((eat) => (
                  <li key={eat}>{eat}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <NearbyCityLinks currentSlug={city.slug} />
              <RelatedServiceLinks />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Common Appliance Issues */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{city.issuesHeading}</h2>
          <div className="prose prose-gray max-w-none space-y-4">
            {city.issuesContent.map((p, i) => (
              <p key={i} className="text-gray-700">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us */}
      <WhyChooseUs localExpertsText={city.localExpertsText} />

      {/* 8. Community Links */}
      {city.communityLink && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Community Links</h3>
              <p className="text-gray-700">
                Visit the{' '}
                <a
                  href={city.communityLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-label="community_link"
                  className="text-green-700 underline"
                >
                  {city.communityLink.label}
                </a>{' '}
                for local business resources and events.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 9. Bottom CTA */}
      <BottomCTA cityName={city.name} />

      <CityJsonLd city={city.name} slug={city.slug} />
    </Layout>
  )
}
