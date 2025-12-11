import React from 'react';
import { PhoneIcon, MapPinIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';
import NearbyCityLinks from '@/components/NearbyCityLinks';
import RelatedServiceLinks from '@/components/RelatedServiceLinks';
import CityJsonLd from '@/components/CityJsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Appliance Repair Sebastopol - Kelly\'s Appliance Center',
  description: 'Find local appliance repair near you in Sebastopol, CA. Professional appliance repair services with factory authorized repairs for all major brands. Call (707) 664-9702.',
  alternates: {
    canonical: 'https://kellysappliancerepair.com/service-locations/sebastopol',
  },
};

export default function SebastopolPage() {
  const breadcrumbs = generateBreadcrumbs('/appliance-repair-sebastopol', metadata.title);

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Appliance Repair in Sebastopol</h1>
          <p className="text-xl mb-8">Professional appliance repair services in Sebastopol, CA.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${companyInfo.phone}`} className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              <PhoneIcon className="h-5 w-5 mr-2" />Call {companyInfo.phone}
            </a>
            <a href="/schedule-prep" className="inline-flex items-center justify-center bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Request Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Local Highlights */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Local Highlights</h2>
              <p className="text-gray-700">
                Don't miss <strong>The Barlow</strong> — a walkable outdoor market district with breweries,
                eateries, and artisan shops that showcases Sebastopol's farm-to-table culture.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Top 3 Eats</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Ramen Gaijin</li>
                <li>K&L Bistro</li>
                <li>Handline</li>
              </ul>
            </div>
            <div className="space-y-4">
              <NearbyCityLinks currentSlug="sebastopol" />
              <RelatedServiceLinks />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
              <div>
                <strong>Factory Authorized</strong>
                <div className="text-gray-900 text-sm">Certified repair using genuine parts</div>
              </div>
            </div>
            <div className="flex items-start">
              <ClockIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
              <div>
                <strong>Fast Response</strong>
                <div className="text-gray-900 text-sm">Prompt, reliable service</div>
              </div>
            </div>
            <div className="flex items-start">
              <MapPinIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
              <div>
                <strong>Local Experts</strong>
                <div className="text-gray-900 text-sm">Trusted in Sebastopol for decades</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Appliance Repair in Sebastopol?</h2>
          <a href={`tel:${companyInfo.phone}`} className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-800 transition-colors">
            <PhoneIcon className="h-6 w-6 mr-2" />Call {companyInfo.phone} Now
          </a>
        </div>
      </section>
      <CityJsonLd city="Sebastopol" slug="sebastopol" />
    </Layout>
  );
}

