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
  title: 'Appliance Repair Santa Rosa - Kelly\'s Appliance Center',
  description: 'Find local appliance repair near you in Santa Rosa, CA. Professional appliance repair services with factory authorized repairs for all major brands. Call (707) 664-9702.',
  alternates: {
    canonical: 'https://kellysappliancerepair.com/service-locations/santa-rosa',
  },
};

const services = [
  { name: 'Refrigerator Repair', icon: '🧊' },
  { name: 'Oven Repair', icon: '🔥' },
  { name: 'Washer & Dryer Repair', icon: '🌊' },
  { name: 'Dishwasher Repair', icon: '🍽️' }
];

export default function SantaRosaPage() {
  const breadcrumbs = generateBreadcrumbs('/appliance-repair-santa-rosa', metadata.title);

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Appliance Repair in Santa Rosa
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Find local appliance repair near you in Santa Rosa, CA. Professional appliance repair services with factory authorized service and 90-day guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${companyInfo.phone}`}
                className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call {companyInfo.phone}
              </a>
              <a
                href="https://booking.rossware.com/schedule/4588"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-green-800 border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Highlights + Eats */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Local Highlights</h2>
              <p className="text-gray-700">From Courthouse Square to the Luther Burbank Center and the weekly farmers markets, Santa Rosa blends a vibrant downtown with easy access to wine country. Whether you're in Fountaingrove or Roseland, we're your local appliance repair experts serving Santa Rosa and surrounding areas. We keep your kitchen and laundry essentials running so you can enjoy more of Sonoma County.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Top 3 Eats</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>The Spinster Sisters</li>
                <li>Bird &amp; The Bottle</li>
                <li>Stark's Steak &amp; Seafood</li>
              </ul>
            </div>
            <div className="space-y-4">
              <NearbyCityLinks currentSlug="santa-rosa" />
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
            <p className="text-gray-700">Visit the <a href="https://www.santarosametrochamber.com/" target="_blank" rel="noopener noreferrer" className="text-green-700 underline">Santa Rosa Metro Chamber</a> for local business resources and events.</p>
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
                <div className="text-gray-600 text-sm">Certified repair using genuine parts</div>
              </div>
            </div>
            <div className="flex items-start">
              <ClockIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
              <div>
                <strong>Fast Response</strong>
                <div className="text-gray-600 text-sm">Prompt, reliable service</div>
              </div>
            </div>
            <div className="flex items-start">
              <MapPinIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
              <div>
                <strong>Local Experts</strong>
                <div className="text-gray-600 text-sm">Serving Santa Rosa since 1975</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Services in Santa Rosa
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  Professional repair services with factory authorized parts
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Appliance Repair Near You in Santa Rosa?
          </h2>
          <p className="text-xl mb-8">
            Find trusted local appliance repair services in Santa Rosa. Serving Santa Rosa and surrounding areas with professional appliance repair since 1975.
          </p>
          <a
            href={`tel:${companyInfo.phone}`}
            className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-800 transition-colors"
          >
            <PhoneIcon className="h-6 w-6 mr-2" />
            Call {companyInfo.phone} Now
          </a>
        </div>
      </section>
      <CityJsonLd city="Santa Rosa" slug="santa-rosa" />
    </Layout>
  );
}

