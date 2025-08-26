import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Authorized Service for Maytag, Whirlpool, GE, Bosch, KitchenAid - Kelly\'s Appliance Center',
  description: 'Get factory authorized service for Maytag, GE, Whirlpool, Bosch, Kitchenaid, Gaggenau, Amana, Jennair, Thermador, Insinkerator and more',
};

export default function AuthorizedServicePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Factory Authorized Appliance Repair
              </h1>
              <p className="text-xl mb-8">
                Kelly&apos;s Appliance provides authorized appliance repair service for many manufacturers, ensuring top-quality care for your household appliances. As a certified service provider for leading appliance brands, we use genuine replacement parts and follow manufacturer guidelines to restore your appliances to peak performance.
              </p>
              <p className="text-lg mb-8 italic text-green-200">
                &quot;Authorized Appliance Repair Near Me&quot;
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call {companyInfo.phone}
                </a>
                <a
                  href="https://booking.rossware.com/schedule/4588"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Book Appointment
                </a>
              </div>
            </div>
            <div>
              <Image
                src="/images/services-side.jpg"
                alt="Appliance Service"
                width={500}
                height={750}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Authorized Brands Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Factory Authorized For Leading Brands
            </h2>
            <p className="text-xl text-gray-600">
              We provide certified repair services using genuine parts and manufacturer guidelines
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            <div className="text-center">
              <Image
                src="/images/Maytag_Logo2014-Present.webp"
                alt="Maytag Factory Authorized"
                width={150}
                height={85}
                className="mx-auto mb-2"
              />
              <p className="text-sm text-gray-600">Factory Authorized</p>
            </div>
            <div className="text-center">
              <Image
                src="/images/Whirlpool_2016.webp"
                alt="Whirlpool Factory Authorized"
                width={150}
                height={50}
                className="mx-auto mb-2"
              />
              <p className="text-sm text-gray-600">Factory Authorized</p>
            </div>
            <div className="text-center">
              <Image
                src="/images/General_Electric_logo.webp"
                alt="GE Factory Trained"
                width={100}
                height={100}
                className="mx-auto mb-2"
              />
              <p className="text-sm text-gray-600">Factory Trained</p>
            </div>
            <div className="text-center">
              <Image
                src="/images/kitchenaid-logo-v2.webp"
                alt="KitchenAid Authorized"
                width={150}
                height={15}
                className="mx-auto mb-2"
              />
              <p className="text-sm text-gray-600">Authorized Service</p>
            </div>
            <div className="text-center">
              <Image
                src="/images/dacor.webp"
                alt="Dacor Factory Authorized"
                width={100}
                height={100}
                className="mx-auto mb-2"
              />
              <p className="text-sm text-gray-600">Factory Authorized</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Factory Authorized Service?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <CheckCircleIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Genuine Parts</h3>
              <p className="text-gray-600">
                We use only genuine manufacturer parts to ensure optimal performance and longevity
              </p>
            </div>
            <div className="text-center">
              <CheckCircleIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Factory Training</h3>
              <p className="text-gray-600">
                Our technicians receive factory training and certification from leading manufacturers
              </p>
            </div>
            <div className="text-center">
              <CheckCircleIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Warranty Protection</h3>
              <p className="text-gray-600">
                Factory authorized repairs protect your manufacturer warranty and our work is guaranteed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Factory Authorized Service?
          </h2>
          <p className="text-xl mb-8">
            Trust Kelly&apos;s Appliance Center for certified repair services on all major appliance brands
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
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-100 transition-colors"
            >
              Book Appointment Online
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
