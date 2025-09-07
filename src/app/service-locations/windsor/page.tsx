import React from 'react';
import { PhoneIcon, MapPinIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Appliance Repair Windsor - Kelly\'s Appliance Center',
  description: 'Professional appliance repair services in Windsor, CA. Factory authorized repairs for all major brands. Call (707) 664-9702.',
};

export default function WindsorPage() {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Appliance Repair in Windsor</h1>
          <p className="text-xl mb-8">Professional appliance repair services in Windsor, CA.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${companyInfo.phone}`} className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              <PhoneIcon className="h-5 w-5 mr-2" />Call {companyInfo.phone}
            </a>
            <a href="https://booking.rossware.com/schedule/4588" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book Appointment
            </a>
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
                <div className="text-gray-600 text-sm">Same-day or next-day service</div>
              </div>
            </div>
            <div className="flex items-start">
              <MapPinIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
              <div>
                <strong>Local Experts</strong>
                <div className="text-gray-600 text-sm">Trusted in Windsor for decades</div>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Community Links</h3>
            <p className="text-gray-700 mb-2">Kelly's is a proud member of the <a href="https://www.windsorchamber.com/" className="text-green-700 underline" target="_blank" rel="noopener noreferrer">Windsor Chamber of Commerce</a>.</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Appliance Repair in Windsor?</h2>
          <a href={`tel:${companyInfo.phone}`} className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-800 transition-colors">
            <PhoneIcon className="h-6 w-6 mr-2" />Call {companyInfo.phone} Now
          </a>
        </div>
      </section>
    </Layout>
  );
}
