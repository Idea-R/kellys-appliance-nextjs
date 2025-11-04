import React from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';
import NearbyCityLinks from '@/components/NearbyCityLinks';
import RelatedServiceLinks from '@/components/RelatedServiceLinks';
import CityJsonLd from '@/components/CityJsonLd';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: "Appliance Repair Bodega Bay - Kelly's Appliance Center",
  description: 'Find local appliance repair near you in Bodega Bay, CA. Professional appliance repair services with factory authorized repairs for major brands. Call (707) 664-9702.',
};

export default function BodegaBayPage() {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Appliance Repair in Bodega Bay</h1>
          <p className="text-xl mb-8">Trusted, factory-authorized appliance repair on the Sonoma Coast.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${companyInfo.phone}`} className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              <PhoneIcon className="h-5 w-5 mr-2" />Call {companyInfo.phone}
            </a>
            <a href="https://booking.rossware.com/schedule/4588" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Request Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Local Highlights + Related */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Local Highlights</h2>
              <p className="text-gray-700">Harbor views, fresh seafood, and coastal trails make Bodega Bay a classic Sonoma Coast destination.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Top 3 Eats</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Fisherman's Cove</li>
                <li>Spud Point Crab Co.</li>
                <li>Terrapin Creek</li>
              </ul>
            </div>
            <div className="space-y-4">
              <NearbyCityLinks currentSlug="bodega-bay" />
              <RelatedServiceLinks />
            </div>
          </div>
        </div>
      </section>
      <CityJsonLd city="Bodega Bay" slug="bodega-bay" />
    </Layout>
  );
}


