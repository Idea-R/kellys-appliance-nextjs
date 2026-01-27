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
  title: 'Appliance Repair Sonoma',
  description: 'Find local appliance repair near you in Sonoma, CA. Professional appliance repair services with factory authorized repairs for all major brands. Call (707) 664-9702.',
  alternates: {
    canonical: '/service-locations/sonoma',
  },
};

export default function SonomaPage() {
  const breadcrumbs = generateBreadcrumbs('/service-locations/sonoma', metadata.title);

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Appliance Repair in Sonoma</h1>
          <p className="text-xl mb-8">Professional appliance repair services in Sonoma, CA.</p>
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

      {/* Local Highlights + Eats */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Local Highlights</h2>
              <p className="text-gray-700">Centered around the historic Sonoma Plaza and mission, Sonoma offers a walkable destination of tasting rooms, cafes, and parks. From Springs to the Vineyards, we keep your home’s appliances in peak condition so entertaining stays effortless.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Top 3 Eats</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>The Girl &amp; The Fig</li>
                <li>LaSalette</li>
                <li>OSO Sonoma</li>
              </ul>
            </div>
            <div className="space-y-4">
              <NearbyCityLinks currentSlug="sonoma" />
              <RelatedServiceLinks />
            </div>
          </div>
        </div>
      </section>

      {/* Community Links */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Community Links</h3>
            <p className="text-gray-700">Visit the <a href="https://www.sonomachamber.org/" target="_blank" rel="noopener noreferrer" className="text-green-700 underline">Sonoma Valley Chamber of Commerce</a> for local business resources and events.</p>
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
                <div className="text-gray-900 text-sm">Trusted in Sonoma for decades</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Appliance Repair in Sonoma?</h2>
          <a href={`tel:${companyInfo.phone}`} className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-800 transition-colors">
            <PhoneIcon className="h-6 w-6 mr-2" />Call {companyInfo.phone} Now
          </a>
        </div>
      </section>
      <CityJsonLd city="Sonoma" slug="sonoma" />
    </Layout>
  );
}
