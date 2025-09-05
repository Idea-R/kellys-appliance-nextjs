import React from 'react';
import Link from 'next/link';
import { PhoneIcon, CheckCircleIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Pricing - Kelly\'s Appliance Center',
  description: 'Transparent pricing for appliance repair services. No service fee on completed jobs. 90-day guarantee on all repairs. Call (707) 664-9702 for estimate.',
};

const services = [
  {
    name: 'Refrigerator Repair',
    description: 'Complete diagnostic and repair for all refrigerator brands',
    features: ['Temperature control issues', 'Compressor problems', 'Ice maker repair', 'Door seal replacement']
  },
  {
    name: 'Oven/Range Repair',
    description: 'Professional oven and range repair services',
    features: ['Heating element replacement', 'Temperature calibration', 'Control panel repair', 'Gas line service']
  },
  {
    name: 'Washer & Dryer Repair',
    description: 'Expert laundry appliance repair and maintenance',
    features: ['Drum replacement', 'Belt and motor repair', 'Water pump issues', 'Lint system cleaning']
  },
  {
    name: 'Dishwasher Repair',
    description: 'Complete dishwasher diagnostic and repair',
    features: ['Water pump repair', 'Spray arm replacement', 'Door seal service', 'Control board fixes']
  }
];

const guarantees = [
  {
    icon: <ShieldCheckIcon className="h-8 w-8" />,
    title: '90-Day Guarantee',
    description: 'All repairs backed by our comprehensive 90-day warranty'
  },
  {
    icon: <CheckCircleIcon className="h-8 w-8" />,
    title: 'No Service Fee',
    description: 'No service charge when you complete the repair with us'
  },
  {
    icon: <CheckCircleIcon className="h-8 w-8" />,
    title: 'Factory Authorized',
    description: 'Genuine parts and manufacturer-approved repairs'
  },
  {
    icon: <CheckCircleIcon className="h-8 w-8" />,
    title: 'Upfront Pricing',
    description: 'Clear estimates before any work begins'
  }
];

export default function PricingPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Fair, honest pricing with no hidden fees. Get a free estimate today!
            </p>
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-700 transition-colors"
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              Call {companyInfo.phone} for Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Pricing Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Kelly&apos;s Appliance Center, we believe in transparent, fair pricing. You&apos;ll know exactly what you&apos;re paying for before any work begins.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {guarantee.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {guarantee.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Areas
            </h2>
            <p className="text-xl text-gray-600">
              Professional repair services for all major appliance types
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href={`/services/${service.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/\//g, '-')}`}
                    className="text-green-600 font-semibold hover:text-green-700"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Our Pricing Works
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Free Estimate
                </h3>
                <p className="text-gray-600">
                  We provide a detailed estimate before starting any work
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Transparent Costs
                </h3>
                <p className="text-gray-600">
                  All labor and parts costs are clearly itemized
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No Hidden Fees
                </h3>
                <p className="text-gray-600">
                  What we quote is what you pay - no surprises
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-yellow-500 text-yellow-900 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold">90</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              90-Day Money Back Guarantee
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We stand behind our work. If you&apos;re not completely satisfied with our repair, we&apos;ll make it right or refund your money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${companyInfo.phone}`}
                className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-800 transition-colors"
              >
                <PhoneIcon className="h-6 w-6 mr-2" />
                Get Your Free Estimate
              </a>
              <a
                href="https://booking.rossware.com/schedule/4588"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Service
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
