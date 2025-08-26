import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, MapPinIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Appliance Repair Santa Rosa - Kelly\'s Appliance Center',
  description: 'Professional appliance repair services in Santa Rosa, CA. Factory authorized repairs for all major brands. Call (707) 664-9702 for same-day service.',
};

const services = [
  { name: 'Refrigerator Repair', icon: '🧊' },
  { name: 'Oven Repair', icon: '🔥' },
  { name: 'Washer & Dryer Repair', icon: '🌊' },
  { name: 'Dishwasher Repair', icon: '🍽️' }
];

const serviceAreas = [
  'Downtown Santa Rosa',
  'Northwest Santa Rosa', 
  'Southwest Santa Rosa',
  'Bennett Valley',
  'Rincon Valley',
  'Fountaingrove',
  'Montgomery Village'
];

export default function SantaRosaPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Appliance Repair in Santa Rosa
              </h1>
              <p className="text-xl mb-8">
                Professional appliance repair services in Santa Rosa, CA. Factory authorized service with 90-day guarantee. Serving all of Santa Rosa and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call {companyInfo.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Schedule Service
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/images/santa-rosa-appliance-repair.jpg"
                alt="Santa Rosa Appliance Repair Service"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
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
            <p className="text-xl text-gray-600">
              Expert repair services for all your home appliances
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Professional repair services with factory authorized parts
                </p>
                <Link
                  href={`/services/${service.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                  className="text-green-600 font-medium hover:text-green-700"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Santa Rosa Service Areas
              </h2>
              <p className="text-gray-600 mb-6">
                We provide appliance repair services throughout Santa Rosa and surrounding neighborhoods. Our experienced technicians are familiar with all areas of the city.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                  <ClockIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900">
                    Same-Day Service Available
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">90-day parts & labor warranty</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">No service fee on completed repairs</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Factory authorized service</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Upfront pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Santa Rosa Chooses Kelly&apos;s
            </h2>
            <p className="text-xl text-gray-600">
              Over 40 years serving the Santa Rosa community
            </p>
          </div>
          
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-700">
            <p>
              Kelly&apos;s Appliance Center has been proudly serving Santa Rosa residents since 1987. As a locally owned and operated business, we understand the unique needs of Santa Rosa homeowners. Our technicians are familiar with the common appliance issues in our area and have the expertise to fix them quickly and efficiently.
            </p>
            <p>
              From the historic downtown area to the newer developments in Bennett Valley and Fountaingrove, we&apos;ve been helping Santa Rosa families keep their appliances running smoothly. Whether you need a quick dishwasher repair or a complex refrigerator diagnosis, our team has the experience and tools to get the job done right.
            </p>
            <p>
              We service all major appliance brands including GE, Whirlpool, Maytag, KitchenAid, LG, Samsung, and more. Our trucks are fully stocked with common replacement parts, allowing us to complete most repairs on the first visit.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Appliance Repair in Santa Rosa?
          </h2>
          <p className="text-xl mb-8">
            Call Kelly&apos;s Appliance Center today for fast, reliable service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-800 transition-colors"
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              Call {companyInfo.phone} Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Online
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
