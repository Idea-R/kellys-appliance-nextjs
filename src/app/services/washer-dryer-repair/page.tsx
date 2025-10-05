import React from 'react';
import Image from 'next/image';
import { PhoneIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';
import ContentSection from '@/components/ContentSection';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Washer & Dryer Repair Services - Expert Technicians',
  description: 'Professional washer and dryer repair services. Expert diagnosis of drum problems, electrical faults, and water leaks. Call (707) 664-9702',
};

export default function WasherDryerRepairPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Washer & Dryer Repair
              </h1>
              <p className="text-xl mb-8">
                At Kelly&apos;s Appliance Repair, we take pride in providing top-notch washer repair and dryer repair services for our valued residential clients.
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
                src="/images/dryer1.webp"
                alt="Professional washer and dryer repair service"
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
              Expert Washer & Dryer Repair
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our certified technicians are well-versed in diagnosing and resolving issues such as drum problems, electrical faults, and water leaks. We ensure your appliances run smoothly by using high-quality, genuine replacement parts.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 space-y-8">
              <ContentSection title="Skilled Washer/Dryer Repair in Sonoma County & Novato">
                <p>
                  Washing machines and clothes dryers are marvels of modern technology. Think about what your washing machine does with a big heavy load of wet clothes. It takes a lot of energy to spin, twist and agitate your clothing and linens to get them sparkling clean. The same goes for your electric or gas clothes dryer.
                </p>
                <p className="mt-4">
                  With such a demanding job, it&apos;s no wonder that these workhorse appliances need some occasional repair or maintenance. Whether it&apos;s a top load or front load washing machine, gas or electric clothes dryer, our guys know how to get to the root of problem quickly and get you up and running.
                </p>
              </ContentSection>

              <ContentSection title="Common Washing Machine Problems We Fix">
                <p>Are you having any of these problems with your washing machine?</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Washing machine has unusual shaking and wobbling</li>
                  <li>Washing machine leaks water</li>
                  <li>Washing machine smells bad</li>
                  <li>Water won&apos;t drain from the washing machine</li>
                  <li>Detergent or bleach not dispensing</li>
                  <li>Washing machine making unusual noise</li>
                </ul>
              </ContentSection>

              <ContentSection title="Common Clothes Dryer Problems We Fix">
                <p>Is your clothes dryer not quite getting it done?</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Clothes dryer won&apos;t turn on</li>
                  <li>Clothes dryer takes too long to dry</li>
                  <li>Clothes dryer not tumbling clothes</li>
                  <li>Clothes dryer not heating</li>
                  <li>Clothes dryer making strange noises</li>
                </ul>
              </ContentSection>

              <ContentSection title="Expert Diagnosis and Repair">
                <p>
                  For these symptoms or any other problems with your washer or dryer, turn to the pros at Kelly&apos;s Appliance Repair. We&apos;ll diagnose the problem, provide options to fix the issue and get you going again in no time!
                </p>
                <p className="mt-4">
                  Our certified technicians are well-versed in diagnosing and resolving issues such as drum problems, electrical faults, and water leaks. We ensure your appliances run smoothly by using high-quality, genuine replacement parts.
                </p>
              </ContentSection>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
                  className="inline-flex items-center justify-center bg-white text-green-800 border-2 border-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Book Appointment
                </a>
              </div>
            </div>
            
            <aside className="space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-bold mb-2">Why Kelly&apos;s</h3>
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
              { name: 'Whirlpool', src: '/images/Whirlpool_2016.webp' },
              { name: 'Maytag', src: '/images/Maytag_Logo2014-Present.webp' },
              { name: 'GE', src: '/images/General_Electric_logo.webp' },
              { name: 'LG', src: '/images/brand-lg.svg' },
              { name: 'Samsung', src: '/images/brand-samsung.svg' },
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
            Need Washer or Dryer Repair?
          </h2>
          <p className="text-xl mb-8">
            With a focus on prompt service, transparent pricing, and exceptional customer satisfaction, we strive to minimize your downtime and inconvenience.
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
            "serviceType": "Washer and Dryer Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": companyInfo.name,
              "telephone": companyInfo.phone
            },
            "areaServed": [
              "Santa Rosa, CA","Petaluma, CA","Rohnert Park, CA","Sonoma, CA","Sebastopol, CA","Windsor, CA","Marin County, CA","San Rafael, CA","Novato, CA","Napa, CA"
            ],
            "url": "https://kellysappliancerepair.com/services/washer-dryer-repair"
          })
        }}
      />
    </Layout>
  );
}
