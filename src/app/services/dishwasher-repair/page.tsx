import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Dishwasher Repair Services - Professional Technicians',
  description: 'Experienced dishwasher repair services for residential and commercial clients. Water leaks, drainage problems, faulty motors repair. Call (707) 664-9702',
};

export default function DishwasherRepairPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Dishwasher Repair Services
              </h1>
              <p className="text-xl mb-8">
                Experienced dishwasher repair services for residential and commercial clients. Our certified technicians specialize in diagnosing and fixing issues such as water leaks, drainage problems, faulty motors, and malfunctioning controls.
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
                src="/images/dishwasher-repair.webp"
                alt="Professional dishwasher repair service"
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
              Professional Dishwasher Repair
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With prompt service, transparent pricing, and a strong commitment to customer satisfaction, Kelly&apos;s Appliance Repair is your trusted choice for efficient and professional dishwasher repairs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Dishwasher Repair Service?
          </h2>
          <p className="text-xl mb-8">
            We use genuine, high-quality parts for all replacements, ensuring reliable and durable repairs.
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
