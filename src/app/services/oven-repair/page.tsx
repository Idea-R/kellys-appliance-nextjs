import React from 'react';
import Image from 'next/image';
import { PhoneIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';
import ovenContent from '@/content/pages/77-oven-repair.json';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Oven Repair Services - Professional Technicians',
  description: 'Professional oven repair services for residential clients. Expert diagnosis and repair of temperature issues, heating elements, and controls. Call (707) 664-9702',
};

export default function OvenRepairPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Oven Repair Services
              </h1>
              <p className="text-xl mb-8">
                Professional oven repair services for residential clients. Our skilled technicians are experienced in diagnosing and fixing temperature irregularities, faulty heating elements, and malfunctioning controls.
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
                  Schedule Service
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/oven-repair.webp"
                alt="Professional oven repair service"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Expert Oven Repair Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We offer prompt service, transparent pricing, and a strong commitment to customer satisfaction. Serving a wide area, we prioritize quick response times to reduce downtime.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircleIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Temperature Issues</h3>
              <p className="text-gray-600">Expert diagnosis and repair of temperature irregularities and control problems</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircleIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Heating Elements</h3>
              <p className="text-gray-600">Replacement and repair of faulty heating elements for optimal performance</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircleIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Control Systems</h3>
              <p className="text-gray-600">Professional repair of malfunctioning controls and electronic systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Original Content (enhanced) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 bg-white rounded-xl shadow p-6 wp-legacy-content">
              <div dangerouslySetInnerHTML={{ __html: ovenContent.content }} />
            </div>
            <aside className="space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-bold mb-2">Why Kelly's</h3>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>Factory Authorized Service</li>
                  <li>Genuine Parts Only</li>
                  <li>90-Day Money Back Guarantee</li>
                  <li>50+ Years in Business</li>
                </ul>
              </div>
              <div className="bg-green-700 text-white rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">Ready to Schedule?</h4>
                <div className="flex flex-col gap-3">
                  <a href={`tel:${companyInfo.phone}`} className="inline-flex items-center justify-center bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded font-semibold">
                    <PhoneIcon className="h-5 w-5 mr-2" /> Call {companyInfo.phone}
                  </a>
                  <a href="https://booking.rossware.com/schedule/4588" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-green-800 px-4 py-2 rounded font-semibold hover:bg-gray-100">
                    Book Appointment
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Brands strip */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Some Brands We Service</h3>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-90">
            {[
              { name: 'GE', src: '/images/General_Electric_logo.webp' },
              { name: 'Whirlpool', src: '/images/Whirlpool_2016.webp' },
              { name: 'KitchenAid', src: '/images/kitchenaid-logo-v2.webp' },
              { name: 'Thermador', src: '/images/brand-thermador.svg' },
              { name: 'Viking', src: '/images/brand-viking.svg' },
              { name: 'Wolf', src: '/images/logo-wolf-act.gif' },
            ].map((b) => (
              <Image key={b.name} src={b.src} alt={b.name} width={140} height={48} className="h-10 md:h-12 w-auto grayscale hover:grayscale-0 transition" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Professional Oven Repair?
          </h2>
          <p className="text-xl mb-8">
            Using genuine, high-quality parts for all repairs, we ensure your oven operates safely and efficiently.
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
              Schedule Service Online
            </a>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Oven Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": companyInfo.name,
              "telephone": companyInfo.phone
            },
            "areaServed": [
              "Santa Rosa, CA","Petaluma, CA","Rohnert Park, CA","Sonoma, CA","Sebastopol, CA","Windsor, CA","Marin County, CA","San Rafael, CA","Novato, CA","Napa, CA"
            ],
            "url": "https://kellysappliancerepair.com/services/oven-repair"
          })
        }}
      />
    </Layout>
  );
}
