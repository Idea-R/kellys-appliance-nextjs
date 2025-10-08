import React from 'react';
import { PhoneIcon, MapPinIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';
import NearbyCityLinks from '@/components/NearbyCityLinks';
import RelatedServiceLinks from '@/components/RelatedServiceLinks';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Appliance Repair Petaluma - Kelly\'s Appliance Center',
  description: 'Professional appliance repair services in Petaluma, CA. Factory authorized repairs for all major brands. Call (707) 664-9702 .',
};

const services = [
  { name: 'Refrigerator Repair', icon: '🧊' },
  { name: 'Oven Repair', icon: '🔥' },
  { name: 'Washer & Dryer Repair', icon: '🌊' },
  { name: 'Dishwasher Repair', icon: '🍽️' }
];

export default function PetalumaPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Appliance Repair in Petaluma
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Professional appliance repair services in Petaluma, CA. Factory authorized service with 90-day guarantee.
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
                className="inline-flex items-center justify-center bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
              <p className="text-gray-700">Historic Downtown Petaluma, riverfront walks, and classic Victorian neighborhoods define the city’s charm. We support homes from the East Side to West Side with fast, factory-authorized appliance repair—so dinner at home or a day at the river never misses a beat.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Top 3 Eats</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Risibisi</li>
                <li>Cucina Paradiso</li>
                <li>The Shuckery</li>
              </ul>
            </div>
            <div className="space-y-4">
              <NearbyCityLinks currentSlug="petaluma" />
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
            <p className="text-gray-700">Visit the <a href="https://www.petalumachamber.com/" target="_blank" rel="noopener noreferrer" className="text-green-700 underline">Petaluma Chamber of Commerce</a> for local business resources and events.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Services in Petaluma
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
            Need Appliance Repair in Petaluma?
          </h2>
          <p className="text-xl mb-8">
            Serving Petaluma with professional appliance repair services since 1975
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
                <div className="text-gray-600 text-sm">Trusted in Petaluma for decades</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}