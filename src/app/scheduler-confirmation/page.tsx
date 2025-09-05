import React from 'react';
import Link from 'next/link';
import { CheckCircleIcon, PhoneIcon, ClockIcon, HomeIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Scheduler Confirmation | Kelly\'s Appliance Center',
  description: 'Your appointment request has been received. We will contact you shortly to confirm your appliance repair appointment.',
};

export default function SchedulerConfirmationPage() {
  return (
    <Layout>
      {/* Confirmation Section */}
      <section className="py-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Success Icon */}
            <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
              <CheckCircleIcon className="w-16 h-16 text-green-600" />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Appointment Request Received!
            </h1>

            {/* Confirmation Message */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 mb-8">
              <p className="text-xl text-gray-700 mb-6">
                Thank you for choosing Kelly's Appliance Center. Your appointment is currently pending confirmation. We will contact you shortly to provide further details and finalize the scheduling.
              </p>

              {/* What Happens Next */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-green-800 mb-4">
                  What Happens Next?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                  <div className="flex items-start">
                    <PhoneIcon className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-green-800">We'll Call You</h3>
                      <p className="text-green-700 text-sm">Our scheduling team will contact you within 2 hours to confirm your appointment details.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ClockIcon className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-green-800">Schedule Confirmed</h3>
                      <p className="text-green-700 text-sm">We'll provide you with a specific time window for your technician's arrival.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <HomeIcon className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-green-800">Expert Service</h3>
                      <p className="text-green-700 text-sm">Our certified technician will arrive with the tools and expertise to fix your appliance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Need to Make Changes?
                </h3>
                <p className="text-gray-700 mb-4">
                  If you need to modify or cancel your appointment, please call us directly.
                </p>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call {companyInfo.phone}
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Emergency Repairs?
                </h3>
                <p className="text-gray-700 mb-4">
                  For urgent appliance repairs that can't wait, call us immediately for same-day service availability.
                </p>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Emergency Service
                </a>
              </div>
            </div>

            {/* Company Information */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Kelly's Appliance Center
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-center">
                      <PhoneIcon className="h-5 w-5 text-green-600 mr-2" />
                      <a href={`tel:${companyInfo.phone}`} className="hover:text-green-600">
                        {companyInfo.phone}
                      </a>
                    </div>
                    <div className="flex items-start">
                      <HomeIcon className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <div>
                        <div>{companyInfo.address.street}</div>
                        <div>{companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zip}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-5 w-5 text-green-600 mr-2" />
                      <span>{companyInfo.hours}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                      50+ Years of Experience
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                      Factory Authorized Service
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                      90 Day Money Back Guarantee
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                      Same Day Service Available
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Return to Home
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                View Our Services
              </Link>
              <Link
                href="/about-us"
                className="inline-flex items-center justify-center border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
