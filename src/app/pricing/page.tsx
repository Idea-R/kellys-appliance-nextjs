import React from 'react';
import Link from 'next/link';
import { PhoneIcon, CheckCircleIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Pricing',
  description: 'Transparent appliance repair pricing. Service call $149-$169 applies toward labor if you proceed. Additional appliance +$75. 90-day money-back guarantee.',
  alternates: {
    canonical: '/pricing',
  },
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
    title: '90-Day Money Back Guarantee',
    description: "If we fix it and it fails again within 90 days, we'll return to diagnose at no charge. If it's not worth further repair, we refund the repair cost less the regular service charge."
  },
  {
    icon: <CheckCircleIcon className="h-8 w-8" />,
    title: 'Service Call Applies Toward Labor',
    description: 'Your diagnostic fee is credited toward labor when you approve the repair.'
  },
  {
    icon: <CheckCircleIcon className="h-8 w-8" />,
    title: 'Factory Authorized',
    description: 'Genuine parts and manufacturer-approved repairs'
  },
  {
    icon: <CheckCircleIcon className="h-8 w-8" />,
    title: 'Upfront Pricing',
    description: 'Flat-rate pricing from the MASPG flat-rate guide'
  }
];

export default function PricingPage() {
  const breadcrumbs = generateBreadcrumbs('/pricing', metadata.title);

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Fair, honest pricing with no hidden fees.
            </p>
            <a
              href={`tel:${companyInfo.phone}`}
              className="btn-fill btn-animate hero inline-flex items-center justify-center px-8 py-4 rounded-lg text-xl font-semibold"
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              Questions about pricing? Call {companyInfo.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Details (moved just below hero) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Service Call & Flat-Rate Pricing
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">$</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Call Fee</h3>
                <p className="text-gray-700">$149 – $169 to travel to your location and diagnose the problem. The technician explains the reason for the needed repair and quotes a flat price from the Major Appliance Service National Price Guide (MASPG).</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">→</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Applied to Labor</h3>
                <p className="text-gray-700">If you decide to proceed with the repair, the entire service call fee is applied toward the labor.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">+A</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Additional Appliance</h3>
                <p className="text-gray-700">+$75 for each additional appliance diagnosed during the same visit.</p>
              </div>
            </div>

            <div className="mt-8 text-sm text-gray-700">
              <p><strong>Emergency / Weekend Calls:</strong> Subject to availability. Additional charges may apply. Please call for details.</p>
            </div>
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
              What We Repair
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
                    aria-label={`Learn more about ${service.name}`}
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Service Calls */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Virtual Service Calls</h2>
            <p className="text-gray-700 text-lg">$40 for a 15-minute video call with a senior service technician</p>
          </div>
          <div className="mx-auto max-w-3xl bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <ul className="text-gray-700 list-disc pl-5 space-y-2">
              <li>Quick remote troubleshooting and DIY guidance</li>
              <li>Verify symptoms and parts before an in-person visit</li>
              <li>Decide if an onsite repair is worthwhile</li>
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`tel:${companyInfo.phone}`} className="btn-fill inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold">Call {companyInfo.phone}</a>
              <a href="/schedule-prep" className="btn-fill alt inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold">Book Virtual Call</a>
            </div>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-400 to-amber-500 ring-4 ring-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.35)] flex items-center justify-center">
              <div
                className="pointer-events-none absolute inset-1 rounded-full bg-gradient-to-t from-amber-500/20 via-white/10 to-white/40"
                aria-hidden="true"
              />
              <div className="relative text-center text-yellow-950">
                <div className="text-2xl font-extrabold leading-none tracking-tight drop-shadow-[0_1px_0_rgba(255,255,255,0.35)]">
                  90
                </div>
                <div className="mt-1 text-[10px] font-semibold tracking-[0.22em] opacity-80">DAYS</div>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              90-Day Money Back Guarantee
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              If we fix your appliance and it breaks down again during the 90 day period following our repair, we will return for free to determine the problem. If the machine is not worth spending any additional money on, we&apos;ll give you back the original repair cost, less the regular service charge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${companyInfo.phone}`}
                className="btn-fill btn-animate hero inline-flex items-center justify-center px-8 py-4 rounded-lg text-xl font-semibold"
              >
                <PhoneIcon className="h-6 w-6 mr-2" />
                Questions about pricing? Call us
              </a>
              <a
                href="/schedule-prep"
                className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Request Appointment
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
