import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Service Area In Sonoma and Marin County | Kelly\'s Appliance Center',
  description: 'Kelly\'s Appliance service area covers all of Sonoma and Marin County. Call today for all your appliance repair needs',
};

const sonomaCountyCities = [
  'Santa Rosa',
  'Petaluma', 
  'Rohnert Park',
  'Sonoma',
  'Windsor',
  'Healdsburg',
  'Sebastopol',
  'Cotati'
];

const marinCountyCities = [
  'San Rafael',
  'Novato',
  'Tiburon',
  'Sausalito',
  'Mill Valley',
  'San Anselmo',
  'Fairfax',
  'Corte Madera',
  'Larkspur',
  'Ross'
];

export default function ServiceAreaPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Service Area
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Kelly's Appliance Center proudly serves all of Sonoma County and Marin County with professional appliance repair services. With 50+ years of experience, we're your trusted local appliance repair experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${companyInfo.phone}`}
                className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-700 transition-colors"
              >
                <PhoneIcon className="h-6 w-6 mr-2" />
                Call {companyInfo.phone}
              </a>
              <a
                href="https://booking.rossware.com/schedule/4588"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                <CalendarIcon className="h-6 w-6 mr-2" />
                Request Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Sonoma County */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Appliance Repair Sonoma County
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Kelly's Appliance Repair proudly serves all of Sonoma County including:
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {sonomaCountyCities.map((city) => (
                  <li key={city} className="flex items-center text-gray-700">
                    <MapPinIcon className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <Link 
                      href={`/service-locations/${city.toLowerCase().replace(' ', '-')}`}
                      className="hover:text-green-600 transition-colors"
                    >
                      {city}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
            <div>
              <Image
                src="/images/fridge-stacked-oven.webp"
                alt="Refrigerator and stacked oven"
                width={800}
                height={620}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Separator */}
          <div className="flex items-center justify-center my-16">
            <div className="flex-grow border-t border-gray-300"></div>
            <div className="flex-shrink-0 px-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414-1.414L9 5.586 7.707 4.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L9 5.586z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Marin County */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Appliance Repair Marin County
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Kelly's Appliance Repair proudly serves all of Marin County including:
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {marinCountyCities.map((city) => (
                  <li key={city} className="flex items-center text-gray-700">
                    <MapPinIcon className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <Link 
                      href={`/service-locations/${city.toLowerCase().replace(' ', '-')}`}
                      className="hover:text-green-600 transition-colors"
                    >
                      {city}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <a
                  href="https://booking.rossware.com/schedule/4588"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  Request Appointment
                </a>
              </div>
            </div>
            <div className="lg:order-1">
              <Image
                src="/images/modern-kitchen.webp"
                alt="Modern kitchen with appliances"
                width={800}
                height={533}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Kelly's Appliance Center?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving Sonoma and Marin County for over 50 years with professional, reliable appliance repair services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">50+ Years Experience</h3>
              <p className="text-gray-600">Trusted by Bay Area families since 1975</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Factory Authorized</h3>
              <p className="text-gray-600">Certified technicians for all major brands</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">90 Day Guarantee</h3>
              <p className="text-gray-600">Money back guarantee on all repairs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Same Day Service</h3>
              <p className="text-gray-600">Fast, reliable repairs when you need them</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Schedule Your Appliance Repair?
          </h2>
          <p className="text-xl mb-8">
            Serving Sonoma County and Marin County with professional appliance repair services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-800 transition-colors"
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              Call {companyInfo.phone}
            </a>
            <a
              href="https://booking.rossware.com/schedule/4588"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              <CalendarIcon className="h-6 w-6 mr-2" />
              Request Appointment Online
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
