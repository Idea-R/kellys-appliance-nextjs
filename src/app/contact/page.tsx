import React from 'react';
import { PhoneIcon, MapPinIcon, ClockIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Contact Kelly\'s Appliance Center - Book Appointment',
  description: 'Contact Kelly\'s Appliance Center for professional appliance repair services. Call (707) 664-9702 or visit us in Cotati, CA. Serving the Bay Area since 1975.',
};

export default function ContactPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl mb-8">
            Ready to schedule your appliance repair? Contact Kelly&apos;s Appliance Center today.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full p-3 mr-4">
                    <PhoneIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <a 
                      href={`tel:${companyInfo.phone}`}
                      className="text-green-600 hover:text-green-700 font-medium text-lg"
                    >
                      {companyInfo.phone}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Call for immediate service</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full p-3 mr-4">
                    <MapPinIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                    <div className="text-gray-700">
                      <p>{companyInfo.address.street}</p>
                      <p>{companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zip}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full p-3 mr-4">
                    <ClockIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-700">{companyInfo.hours}</p>
                    <p className="text-gray-600 text-sm mt-1">Emergency service available</p>
                  </div>
                </div>

                {companyInfo.email && (
                  <div className="flex items-start">
                    <div className="bg-green-600 text-white rounded-full p-3 mr-4">
                      <EnvelopeIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                      <a 
                        href={`mailto:${companyInfo.email}`}
                        className="text-green-600 hover:text-green-700 font-medium"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Service Areas
              </h2>
              <p className="text-gray-600 mb-6">
                We proudly serve the following areas in the Bay Area with professional appliance repair services:
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Sonoma County</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>Santa Rosa</li>
                    <li>Petaluma</li>
                    <li>Rohnert Park</li>
                    <li>Sonoma</li>
                    <li>Sebastopol</li>
                    <li>Windsor</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Marin County & Napa</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>Marin County</li>
                    <li>San Rafael</li>
                    <li>Novato</li>
                    <li>Napa</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Service Guarantee
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">90</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Day Money Back Guarantee</h3>
              <p className="text-gray-600">Complete satisfaction guaranteed on all repairs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Factory Authorized</h3>
              <p className="text-gray-600">Certified repair services for all major brands</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">$0</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Service Fee</h3>
              <p className="text-gray-600">No service fee on completed jobs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">50+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Years Experience</h3>
              <p className="text-gray-600">Serving the Bay Area since 1975</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Schedule Your Appliance Repair?
          </h2>
          <p className="text-xl mb-8">
            Call us today for fast, reliable, and affordable appliance repair services
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
    </Layout>
  );
}
