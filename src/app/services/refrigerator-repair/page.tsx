import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Refrigerator Repair Services - Expert Technicians',
  description: 'Expert refrigerator repair services for residential and commercial clients. Factory authorized service with 90-day guarantee. Call (707) 664-9702',
};

const features = [
  'Cooling problems diagnosis and repair',
  'Faulty compressor replacement',
  'Electrical fault troubleshooting',
  'Temperature control issues',
  'Ice maker and water dispenser repair',
  'Door seal and gasket replacement'
];

export default function RefrigeratorRepairPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Refrigerator Repair Services
              </h1>
              <p className="text-xl mb-8">
                Expert refrigerator repair services for residential and commercial clients. Our certified technicians specialize in diagnosing and fixing cooling problems, faulty compressors, and electrical faults.
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
            <div className="relative">
              <Image
                src="/images/refrigerator-repair.webp"
                alt="Professional refrigerator repair service"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Refrigerator Repair
              </h2>
              <p className="text-gray-600 mb-6">
                With prompt service, transparent pricing, and a commitment to customer satisfaction, Kelly&apos;s Appliance Repair is your go-to choice for efficient and professional factory authorized refrigerator repairs.
              </p>
              <p className="text-gray-600 mb-8">
                We use high-quality parts for all replacements, ensuring durable and reliable repairs that keep your refrigerator running efficiently for years to come.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Common Refrigerator Issues We Fix:
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Our Refrigerator Repair Service?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full p-2 mr-4">
                    <CheckCircleIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Factory Authorized</h4>
                    <p className="text-gray-600">Certified repair services for all major refrigerator brands</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full p-2 mr-4">
                    <CheckCircleIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">90-Day Guarantee</h4>
                    <p className="text-gray-600">Money back guarantee on all completed repairs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full p-2 mr-4">
                    <CheckCircleIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">No Service Fee</h4>
                    <p className="text-gray-600">No service fee charged on completed jobs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full p-2 mr-4">
                    <CheckCircleIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">50+ Years Experience</h4>
                    <p className="text-gray-600">Serving the Bay Area since 1975</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Refrigerator Repair Service?
          </h2>
          <p className="text-xl mb-8">
            Call us today for fast, reliable refrigerator repair services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-800 transition-colors"
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              Call {companyInfo.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Service Online
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
