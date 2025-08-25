import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';

const companyInfo = getCompanyInfo();

const services = [
  {
    title: 'Refrigerator Repair',
    description: 'Expert refrigerator repair services for residential and commercial clients. Our certified technicians specialize in diagnosing and fixing cooling problems, faulty compressors, and electrical faults.',
    image: '/images/refrigerator-repair.webp',
    href: '/services/refrigerator-repair'
  },
  {
    title: 'Oven Repair', 
    description: 'Professional oven repair services for both residential and commercial clients. Our skilled technicians are experienced in diagnosing and fixing temperature irregularities and faulty heating elements.',
    image: '/images/oven-repair.webp',
    href: '/services/oven-repair'
  },
  {
    title: 'Washer & Dryer Repair',
    description: 'Top-notch washer and dryer repair services. Our certified technicians are well-versed in diagnosing and resolving drum problems, electrical faults, and water leaks.',
    image: '/images/dryer1.webp', 
    href: '/services/washer-dryer-repair'
  },
  {
    title: 'Dishwasher Repair',
    description: 'Experienced dishwasher repair services for residential and commercial clients. We specialize in fixing water leaks, drainage problems, faulty motors, and malfunctioning controls.',
    image: '/images/dishwasher-repair.webp',
    href: '/services/dishwasher-repair'
  }
];

const guarantees = [
  '90 Day Money Back Guarantee',
  'Factory Authorized Repair Services', 
  'No Service Fee On Completed Jobs',
  '50+ Years in Business!'
];

const brandLogos = [
  { name: 'GE', image: '/images/General_Electric_logo.webp' },
  { name: 'Whirlpool', image: '/images/Whirlpool_2016.webp' },
  { name: 'Maytag', image: '/images/Maytag_Logo2014-Present.webp' },
  { name: 'KitchenAid', image: '/images/kitchenaid-logo-v2.webp' },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 via-green-700 to-green-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Appliance Repair Since 1975
              </h1>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" />
                    <span className="text-lg">{guarantee}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-700 transition-colors"
                >
                  <PhoneIcon className="h-6 w-6 mr-2" />
                  Call {companyInfo.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors"
                >
                  Book Appointment Now!
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/appliance-repair-technician.webp"
                alt="Kelly&apos;s Appliance Repair Technician"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Appliance Repair Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have been providing appliance repair services in the Bay Area since 1975 and with that much experience, you know you can count on us. With a team of skilled technicians and years of experience, we specialize in repairing a wide range of appliances.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Kelly&apos;s Appliance Center?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">50+ Years Experience:</strong>
                    <span className="text-gray-600 ml-1">Serving the Bay Area since 1975 with proven expertise</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Factory Authorized:</strong>
                    <span className="text-gray-600 ml-1">Certified repair services for all major appliance brands</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Money Back Guarantee:</strong>
                    <span className="text-gray-600 ml-1">90-day guarantee on all completed repairs</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">No Service Fee:</strong>
                    <span className="text-gray-600 ml-1">No service fee charged on completed jobs</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/images/kelly-appliance-team.webp"
                alt="Kelly&apos;s Appliance Center Team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Expert repair services for all your home appliances
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Factory Authorized Service For:
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {brandLogos.map((brand, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={150}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Need Appliance Repair Service?
          </h2>
          <p className="text-xl mb-8">
            Call us today for fast, reliable, and affordable appliance repair services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-700 transition-colors"
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              Call {companyInfo.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Appointment Online
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}