import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';
import ContentSection from '@/components/ContentSection';
import { BOOKING_CONFIG } from '@/lib/booking-constants';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';
import FAQSection from '@/components/FAQSection';
import { dryerFaqs } from '@/data/faqs';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Dryer Repair Services Near Me - Expert Technicians',
  description: 'Find dryer repair near me. Professional dryer repair services for residential clients. Expert diagnosis of heating issues, vent problems, and mechanical faults. Call (707) 664-9702',
  alternates: {
    canonical: '/services/dryer-repair',
  },
};

export default function DryerRepairPage() {
  const breadcrumbs = generateBreadcrumbs('/services/dryer-repair', metadata.title);

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Dryer Repair Services Near Me
              </h1>
              <p className="text-xl mb-8">
                Professional dryer repair services for residential clients. Our certified technicians specialize in diagnosing and fixing heating problems, vent issues, and mechanical faults for all major dryer brands.
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
                  href={BOOKING_CONFIG.BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Request Appointment Online
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/dryer1.webp"
                alt="Professional dryer repair service"
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
              Expert Dryer Repair Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our skilled technicians are experienced in diagnosing and fixing temperature irregularities, vent blockages, and mechanical issues. We service both gas and electric dryers from all major brands.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircleIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Heating Issues</h3>
              <p className="text-gray-600">Expert diagnosis and repair of heating problems, faulty heating elements, and thermal fuses</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircleIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vent & Airflow</h3>
              <p className="text-gray-600">Professional vent cleaning and repair to restore proper airflow and prevent fire hazards</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircleIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mechanical Repairs</h3>
              <p className="text-gray-600">Replacement and repair of belts, drum rollers, bearings, and other mechanical components</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 space-y-8">
              <ContentSection title="Professional Dryer Repair in Sonoma, Marin, and Napa Counties">
                <p>
                  When your dryer isn&apos;t working properly, it can disrupt your daily routine and create frustration. Whether it&apos;s taking too long to dry clothes, not heating properly, or making strange noises, Kelly&apos;s Appliance Repair has the expertise to diagnose and fix the problem quickly.
                </p>
                <p className="mt-4">
                  Our factory-authorized technicians are trained to repair both gas and electric dryers from all major brands including Whirlpool, Maytag, GE, Samsung, LG, and more. We serve residential clients throughout Sonoma County, Marin County, and Napa County.
                </p>
              </ContentSection>

              <ContentSection title="Common Dryer Problems We Fix">
                <p>Is your dryer experiencing any of these issues?</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Dryer taking too long to dry clothes</li>
                  <li>Dryer not heating up</li>
                  <li>Dryer won&apos;t turn on</li>
                  <li>Dryer not tumbling clothes</li>
                  <li>Dryer making strange noises (squealing, grinding, thumping)</li>
                  <li>Dryer overheating or shutting off prematurely</li>
                  <li>Dryer vent blockage or poor airflow</li>
                  <li>Lint buildup or clogged filters</li>
                </ul>
              </ContentSection>

              <ContentSection title="Why Choose Kelly&apos;s for Dryer Repair">
                <p>
                  With over 50 years of experience serving the Bay Area, Kelly&apos;s Appliance Repair has built a reputation for reliable, professional service. Our technicians use genuine OEM parts and follow manufacturer guidelines to ensure your dryer is repaired correctly the first time.
                </p>
                <p className="mt-4">
                  We offer flexible scheduling including same-day appointments when available, transparent pricing with no hidden fees, and a 90-day money back guarantee on all completed repairs. Your satisfaction is our top priority.
                </p>
              </ContentSection>

              <ContentSection title="Service Areas">
                <p>
                  We provide dryer repair services throughout Sonoma County (including Santa Rosa, Petaluma, Rohnert Park, Sonoma, Sebastopol, Windsor, and more), Marin County (including San Rafael, Novato, Mill Valley, and surrounding areas), and Napa County (including Napa and surrounding communities).
                </p>
                <p className="mt-4">
                  <Link href="/service-locations" className="text-green-600 hover:text-green-700 font-medium">View all service locations →</Link>
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
                  href={BOOKING_CONFIG.BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-green-800 border-2 border-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Request Appointment
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
                  <a href={BOOKING_CONFIG.BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-green-800 px-4 py-2 rounded font-semibold hover:bg-gray-100">
                    Request Appointment
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
            Need Dryer Repair Service?
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
              href={BOOKING_CONFIG.BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Appointment Online
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
            "serviceType": "Dryer Repair",
            "description": "Find dryer repair near me. Professional dryer repair services with factory authorized technicians for all major brands.",
            "provider": {
              "@type": "LocalBusiness",
              "name": companyInfo.name,
              "telephone": companyInfo.phone,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": companyInfo.address.street,
                "addressLocality": companyInfo.address.city,
                "addressRegion": companyInfo.address.state,
                "postalCode": companyInfo.address.zip
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "38.327",
                "longitude": "-122.707"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "38.327",
                  "longitude": "-122.707"
                },
                "geoRadius": {
                  "@type": "Distance",
                  "value": "50",
                  "unitCode": "MI"
                }
              }
            },
            "areaServed": [
              "Santa Rosa, CA","Petaluma, CA","Rohnert Park, CA","Sonoma, CA","Sebastopol, CA","Windsor, CA","Marin County, CA","San Rafael, CA","Novato, CA","Napa, CA"
            ],
            "url": "https://kellysappliancerepair.com/services/dryer-repair"
          })
        }}
      />
      <FAQSection
        title="Dryer Repair FAQs"
        subtitle="Common questions about dryer repairs, costs, and scheduling."
        faqs={dryerFaqs}
      />
    </Layout>
  );
}
