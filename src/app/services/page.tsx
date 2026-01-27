import React from 'react';
export const metadata = {
  title: "Services",
  description: 'Overview of appliance repair services we provide across major brands.',
  alternates: {
    canonical: '/services',
  },
};
import Image from 'next/image';
import Link from 'next/link';
import { WrenchScrewdriverIcon, PhoneIcon, CheckCircleIcon, CalendarIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';
import { BOOKING_CONFIG } from '@/lib/booking-constants';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';

const companyInfo = getCompanyInfo();

const services = [
  {
    title: 'Refrigerator Repair',
    description: 'Expert refrigerator repair services for residential clients. Our certified technicians specialize in diagnosing and fixing cooling problems and electrical faults.',
    image: '/images/refrigerator-repair.webp',
    href: '/services/refrigerator-repair',
    features: ['Cooling System Repair', 'Ice Maker Repair', 'Temperature Control Issues', 'Door Seal Replacement']
  },
  {
    title: 'Oven Repair', 
    description: 'Professional oven repair services for residential clients. Our skilled technicians are experienced in diagnosing and fixing temperature irregularities and faulty heating elements.',
    image: '/images/oven-repair.webp',
    href: '/services/oven-repair',
    features: ['Heating Element Replacement', 'Temperature Calibration', 'Door Seal Repair', 'Control Panel Issues']
  },
  {
    title: 'Washer & Dryer Repair',
    description: 'Top-notch washer and dryer repair services. Our certified technicians are well-versed in diagnosing and resolving drum problems, electrical faults, and water leaks.',
    image: '/images/dryer1.webp', 
    href: '/services/washer-dryer-repair',
    features: ['Drum Replacement', 'Water Leak Repair', 'Electrical Issues', 'Spin Cycle Problems']
  },
  {
    title: 'Dryer Repair',
    description: 'Professional dryer repair services. Expert diagnosis of heating issues, vent problems, and mechanical faults. Fast, reliable service for all major brands.',
    image: '/images/dryer1.webp',
    href: '/services/dryer-repair',
    features: ['Heating Element Repair', 'Vent Cleaning', 'Belt Replacement', 'Thermal Fuse Repair']
  },
  {
    title: 'Dishwasher Repair',
    description: 'Experienced dishwasher repair services for residential clients. We specialize in fixing water leaks, drainage problems, faulty motors, and malfunctioning controls.',
    image: '/images/dishwasher-repair.webp',
    href: '/services/dishwasher-repair',
    features: ['Water Leak Repair', 'Drainage Issues', 'Motor Replacement', 'Control Panel Repair']
  }
];

const guarantees = [
  '90 Day Money Back Guarantee',
  'Factory Authorized for Many Major Brands',
  'Service Call Applies Toward Labor',
  '50+ Years in Business!'
];

export default function ServicesPage() {
  const breadcrumbs = generateBreadcrumbs('/services', metadata.title);

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 via-green-700 to-green-600 text-white py-16">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Our Appliance Repair Services
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Professional appliance repair services for all major home appliances. Factory authorized repairs with genuine parts and expert technicians since 1975.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-center justify-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-sm lg:text-base">{guarantee}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-xl font-semibold btn-fill"
                >
                  <PhoneIcon className="h-6 w-6 mr-2" />
                  Call {companyInfo.phone}
                </a>
                <a
                  href={BOOKING_CONFIG.BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-xl font-semibold btn-fill alt border-2 border-white"
                >
                  <CalendarIcon className="h-6 w-6 mr-2" />
                  Request Appointment Online
                </a>
              </div>
              <p className="text-center text-white/90 text-sm px-4">
                {BOOKING_CONFIG.DISCLAIMERS.MEDIUM}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Service Calls Promo */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Virtual Service Calls</h2>
              <p className="text-lg text-gray-700 mb-4">$40 for a 15-minute video call with a senior technician</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Remote troubleshooting and DIY guidance</li>
                <li>Pre-verify symptoms and parts before a visit</li>
                <li>Decide if an onsite repair is worthwhile</li>
              </ul>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href={`tel:${companyInfo.phone}`} className="btn-fill inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold">Call {companyInfo.phone}</a>
                <a href={BOOKING_CONFIG.BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-fill alt inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold">Request Virtual Call</a>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What to Expect</h3>
              <p className="text-gray-700">Share a short video of the issue, model number if available, and basic symptoms. We\'ll guide you live and let you know next steps.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Expert Repair Services
            </h2>
            <p className="text-xl text-gray-600">
              We repair all major appliance brands with factory authorized parts and certified technicians
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service) => (
              <div 
                key={service.href} 
                className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl hover-scale transition-all duration-300 animate-fade-in-up flex"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 grow">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <div className="flex items-center mb-4">
                      <WrenchScrewdriverIcon className="h-8 w-8 text-green-600 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Services Include:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-auto pt-2">
                      <Link
                        href={service.href}
                        className="inline-flex items-center justify-center w-full px-4 py-3 rounded-lg font-semibold btn-fill"
                      >
                        Learn More About {service.title}
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counties We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Counties We Serve</h2>
            <p className="text-lg text-gray-700">Explore services and cities by county.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/service-locations/sonoma-county" className="block rounded-xl border border-gray-200 bg-white p-6 hover:border-green-300 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sonoma County</h3>
              <p className="text-gray-700">Santa Rosa, Petaluma, Rohnert Park, Windsor, Sonoma, Sebastopol, Healdsburg...</p>
            </Link>
            <Link href="/service-locations/marin-county" className="block rounded-xl border border-gray-200 bg-white p-6 hover:border-green-300 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Marin County</h3>
              <p className="text-gray-700">San Rafael, Novato, Mill Valley, Sausalito, Tiburon, Corte Madera...</p>
            </Link>
            <Link href="/service-locations/napa-county" className="block rounded-xl border border-gray-200 bg-white p-6 hover:border-green-300 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Napa County</h3>
              <p className="text-gray-700">Napa and surrounding communities.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Factory Authorized Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Factory Authorized Service
            </h2>
            <p className="text-xl text-gray-600">
              We're factory authorized to service many major appliance brands
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Factory Authorized Service?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Genuine Parts:</strong>
                    <span className="text-gray-600 ml-1">We use only manufacturer-approved parts for all repairs</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Certified Technicians:</strong>
                    <span className="text-gray-600 ml-1">Our team is factory trained and certified</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Warranty Preservation:</strong>
                    <span className="text-gray-600 ml-1">Factory authorized repairs protect your warranty</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Latest Training:</strong>
                    <span className="text-gray-600 ml-1">We stay current with all manufacturer updates</span>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link
                  href="/authorized-service"
                  className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors btn-animate"
                >
                  View Factory Authorized Services
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/kelly-appliance-team.webp"
                alt="Kelly's Appliance Center Certified Technicians"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Request Your Repair Appointment?
          </h2>
          <p className="text-xl mb-8">
            Our certified technicians are ready to help with your appliance repair needs
          </p>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${companyInfo.phone}`}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-xl font-semibold btn-fill"
              >
                <PhoneIcon className="h-6 w-6 mr-2" />
                Call {companyInfo.phone}
              </a>
              <a
                href={BOOKING_CONFIG.BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-xl font-semibold btn-fill alt border-2 border-white"
              >
                <CalendarIcon className="h-6 w-6 mr-2" />
                Request Appointment Online
              </a>
            </div>
            <p className="text-center text-white/90 text-sm px-4">
              {BOOKING_CONFIG.DISCLAIMERS.MEDIUM}
            </p>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Appliance Repair Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": companyInfo.name,
              "telephone": companyInfo.phone
            },
            "areaServed": [
              "Santa Rosa, CA","Petaluma, CA","Rohnert Park, CA","Sonoma, CA","Sebastopol, CA","Windsor, CA","Marin County, CA","San Rafael, CA","Novato, CA","Napa, CA"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Appliance Repair",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Refrigerator Repair" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Oven Repair" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Washer & Dryer Repair" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dishwasher Repair" }}
              ]
            },
            "url": "https://kellysappliancerepair.com/services"
          })
        }}
      />
    </Layout>
  );
}
