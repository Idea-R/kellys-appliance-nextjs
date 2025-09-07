import React from 'react';
import { PhoneIcon, MapPinIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';
import Link from 'next/link';
import ChamberLink from '@/components/ChamberLink';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: "Appliance Repair Sonoma County - Kelly's Appliance Center",
  description: 'Professional appliance repair services in Sonoma County, CA. Factory authorized repairs for major brands. Call (707) 664-9702.',
};

const sonomaCities: { name: string; slug: string }[] = [
  { name: 'Santa Rosa', slug: 'santa-rosa' },
  { name: 'Petaluma', slug: 'petaluma' },
  { name: 'Rohnert Park', slug: 'rohnert-park' },
  { name: 'Cotati', slug: 'cotati' },
  { name: 'Sebastopol', slug: 'sebastopol' },
  { name: 'Sonoma', slug: 'sonoma' },
  { name: 'Windsor', slug: 'windsor' },
  { name: 'Healdsburg', slug: 'healdsburg' },
  { name: 'Forestville', slug: 'forestville' },
  { name: 'Guerneville', slug: 'guerneville' },
  { name: 'Glen Ellen', slug: 'glen-ellen' },
  { name: 'Bodega Bay', slug: 'bodega-bay' },
  { name: 'Dillon Beach', slug: 'dillon-beach' },
];

export default function SonomaCountyPage() {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Appliance Repair in Sonoma County</h1>
          <p className="text-xl mb-8">Trusted, factory-authorized appliance repair across Sonoma County.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${companyInfo.phone}`} className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              <PhoneIcon className="h-5 w-5 mr-2" />Call {companyInfo.phone}
            </a>
            <a href="https://booking.rossware.com/schedule/4588" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      {/* City Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cities We Serve in Sonoma County</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sonomaCities.map(({ name, slug }) => (
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
                <div className="text-gray-700 text-sm">Same-day or next-day service</div>
              </div>
            </div>
            <div className="flex items-start">
              <MapPinIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
              <div>
                <strong className="text-gray-900">Local Experts</strong>
                <div className="text-gray-700 text-sm">Trusted in Sonoma County for decades</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Resources */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Local Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <ChamberLink name="Santa Rosa Metro Chamber" url="https://www.santarosametrochamber.com/" />
            <ChamberLink name="Petaluma Chamber of Commerce" url="https://www.petalumachamber.com/" />
            <ChamberLink name="Rohnert Park Chamber of Commerce" url="https://www.rohnertparkchamber.org/" />
            <ChamberLink name="Sebastopol Chamber of Commerce" url="https://www.sebastopol.org/" />
            <ChamberLink name="Windsor Chamber of Commerce" url="https://www.windsorchamber.com/" />
            <ChamberLink name="Healdsburg Chamber of Commerce" url="https://www.healdsburg.com/" />
            <ChamberLink name="Sonoma Valley Chamber of Commerce" url="https://www.sonomachamber.org/" />
            <ChamberLink name="Bodega Bay Chamber of Commerce" url="https://www.bodegabayca.org/" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Appliance Repair in Sonoma County?</h2>
          <a href={`tel:${companyInfo.phone}`} className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-800 transition-colors">
            <PhoneIcon className="h-6 w-6 mr-2" />Call {companyInfo.phone} Now
          </a>
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
              "telephone": companyInfo.phone,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": companyInfo.address.city,
                "addressRegion": companyInfo.address.state,
                "postalCode": companyInfo.address.zip
              }
            },
            "areaServed": sonomaCities.map(c => `${c.name}, CA`),
            "url": "https://kellysappliancerepair.com/service-locations/sonoma-county"
          })
        }}
      />
    </Layout>
  );
}


