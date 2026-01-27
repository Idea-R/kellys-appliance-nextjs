import React from 'react';
import { PhoneIcon, MapPinIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Layout from '@/components/Layout';
import ChamberLink from '@/components/ChamberLink';
import TopPicks from '@/components/TopPicks';
import ReferralsGrid from '@/components/ReferralsGrid';
import { getCompanyInfo } from '@/lib/content';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Appliance Repair Marin County',
  description: 'Professional appliance repair services in Marin County, CA. Factory authorized repairs for all major brands. Call (707) 664-9702.',
  alternates: {
    canonical: '/service-locations/marin-county',
  },
};

export default function MarinCountyPage() {
  const breadcrumbs = generateBreadcrumbs('/service-locations/marin-county', metadata.title);

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Appliance Repair in Marin County</h1>
          <p className="text-xl mb-8">Professional appliance repair services in Marin County, CA.</p>
          <a href={`tel:${companyInfo.phone}`} className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            <PhoneIcon className="h-5 w-5 mr-2" />Call {companyInfo.phone}
          </a>
        </div>
      </section>

      {/* Local Highlights */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Local Highlights</h2>
          <p className="text-gray-700">From Mount Tam’s trails to coastal towns and ferry hubs, Marin blends outdoor life with charming downtowns. We provide fast, warranty-safe repairs across the county so home routines stay smooth between hikes and commutes.</p>
        </div>
      </section>

      {/* Kelly's Top Picks */}
      <TopPicks
        title="Kelly's Top 3 Eats in Marin County"
        intro="A few favorites when we're on the road in Marin."
        items={[
          { name: "Sol Food", url: "https://www.solfoodrestaurant.com/", mapsUrl: "https://maps.google.com/?q=Sol+Food+San+Rafael", location: "San Rafael", person: "Team", role: "Field Crew", quote: "Plantains and pollo al horno hit the spot after a long route." },
          { name: "Marin Joe's", url: "https://marinjoesrestaurant.com/", mapsUrl: "https://maps.google.com/?q=Marin+Joe's+Corte+Madera", location: "Corte Madera", person: "Kelly", role: "Owner", quote: "Classic steakhouse vibes and comfort." },
          { name: "Sam's Anchor Cafe", url: "https://samscafe.com/", mapsUrl: "https://maps.google.com/?q=Sam's+Anchor+Cafe+Tiburon", location: "Tiburon", person: "Joe", role: "Tech", quote: "Views for days, seafood done right." },
        ]}
      />

      {/* Cities Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cities We Serve in Marin County</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'San Rafael', slug: 'san-rafael' },
              { name: 'Novato', slug: 'novato' },
              { name: 'Mill Valley', slug: 'mill-valley' },
              { name: 'Sausalito', slug: 'sausalito' },
              { name: 'Tiburon', slug: 'tiburon' },
              { name: 'Corte Madera', slug: 'corte-madera' },
            ].map(({ name, slug }) => (
              <Link key={slug} href={`/service-locations/${slug}`} className="block border border-gray-200 rounded-md p-4 hover:shadow-md hover:border-green-300 transition bg-white">
                <div className="flex items-center">
                  <MapPinIcon className="w-5 h-5 text-green-600 mr-2" />
                  <span className="font-medium text-gray-900">{name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
              <div>
                <strong className="text-gray-900">Factory Authorized</strong>
                <div className="text-gray-700 text-sm">Certified repair using genuine parts</div>
              </div>
            </div>
            <div className="flex items-start">
              <ClockIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
              <div>
                <strong className="text-gray-900">Fast Response</strong>
                <div className="text-gray-700 text-sm">Prompt, reliable service</div>
              </div>
            </div>
            <div className="flex items-start">
              <MapPinIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
              <div>
                <strong className="text-gray-900">Local Experts</strong>
                <div className="text-gray-700 text-sm">Trusted in Marin County for decades</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Appliance Repair in Marin County?</h2>
          <a href={`tel:${companyInfo.phone}`} className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-800 transition-colors">
            <PhoneIcon className="h-6 w-6 mr-2" />Call {companyInfo.phone} Now
          </a>
        </div>
      </section>

      {/* County Referrals */}
      <ReferralsGrid
        title="Marin County Referrals"
        subtitle="Our trusted local recommendations across Marin."
        items={[
          { label: 'Appliance Sales' },
          { label: 'Appliance Installation' },
          { label: 'HVAC' },
          { label: 'Electrician' },
          { label: 'Plumbing' },
          { label: 'Contractor' },
          { label: 'Landscape' },
          { label: 'Cleaning' },
          { label: 'Auto Mechanic' },
          { label: 'Pool Service' },
        ]}
      />

      {/* Local Resources */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Local Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <ChamberLink name="San Rafael Chamber of Commerce" url="https://www.srchamber.com/" />
            <ChamberLink name="Novato Chamber of Commerce" url="https://www.novatochamber.com/" />
            <ChamberLink name="Mill Valley Chamber of Commerce" url="https://www.millvalley.org/" />
            <ChamberLink name="Sausalito Chamber of Commerce" url="https://www.sausalito.org/" />
            <ChamberLink name="Larkspur Chamber of Commerce" url="http://larkspurchamber.org/" />
            <ChamberLink name="Corte Madera Chamber of Commerce" url="http://www.cortemadera.org/" />
            <ChamberLink name="Tiburon Chamber of Commerce" url="https://www.tiburonchamber.org/" />
          </div>
        </div>
      </section>
      {/* County SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Appliance repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": companyInfo.name,
              "telephone": companyInfo.phone
            },
            "areaServed": ["San Rafael, CA", "Novato, CA", "Mill Valley, CA", "Sausalito, CA", "Tiburon, CA", "Corte Madera, CA"],
            "url": "https://kellysappliancerepair.com/service-locations/marin-county"
          })
        }}
      />
    </Layout>
  );
}
