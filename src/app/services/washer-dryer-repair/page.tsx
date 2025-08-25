import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Washer & Dryer Repair Services - Expert Technicians',
  description: 'Professional washer and dryer repair services. Expert diagnosis of drum problems, electrical faults, and water leaks. Call (707) 664-9702',
};

export default function WasherDryerRepairPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Washer & Dryer Repair
              </h1>
              <p className="text-xl mb-8">
                At Kelly&apos;s Appliance Repair, we take pride in providing top-notch washer repair and dryer repair services for our valued residential and commercial clients.
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
                src="/images/dryer1.webp"
                alt="Professional washer and dryer repair service"
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Expert Washer & Dryer Repair
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified technicians are well-versed in diagnosing and resolving issues such as drum problems, electrical faults, and water leaks. We ensure your appliances run smoothly by using high-quality, genuine replacement parts.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Washer or Dryer Repair?
          </h2>
          <p className="text-xl mb-8">
            With a focus on prompt service, transparent pricing, and exceptional customer satisfaction, we strive to minimize your downtime and inconvenience.
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
