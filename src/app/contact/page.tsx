import React from 'react';
import { PhoneIcon, MapPinIcon, ClockIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';
import ContactForm from '@/components/ContactForm'
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Contact - Request Appointment',
  description: 'Contact Kelly\'s Appliance Center for professional appliance repair services. Call (707) 664-9702 or visit us in Cotati, CA. Serving the Bay Area since 1975.',
};

export default function ContactPage() {
  const breadcrumbs = generateBreadcrumbs('/contact', metadata.title);

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />
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

      {/* Contact Information + Message Form */}
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

            {/* Message Form + Storefront */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us A Message</h2>
              <ContactForm />

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Our Location</h3>
                <div className="rounded-lg shadow-md overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3130.123456789!2d-122.7123456!3d38.3456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8084a1234567890%3A0x1234567890abcdef!2s466%20Primero%20Ct%20Suite%20H%2C%20Cotati%2C%20CA%2094931!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kelly's Appliance Center Location"
                  ></iframe>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Located in Cotati, CA - Easy access from Highway 101
                </p>
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
                <span className="text-xl font-bold">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Call Fee</h3>
              <p className="text-gray-600">Service call fee applies to final repair</p>
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
