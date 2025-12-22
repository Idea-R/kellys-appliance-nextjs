import React from 'react';
import Image from 'next/image';
import { PhoneIcon, CheckCircleIcon, CalendarIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';
import ContentSection from '@/components/ContentSection';
import { BOOKING_CONFIG } from '@/lib/booking-constants';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';
import FAQSection from '@/components/FAQSection';
import { refrigeratorFaqs } from '@/data/faqs';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Refrigerator Repair Services - Expert Technicians',
  description: 'Find refrigerator repair near me and ice maker repair near me. Expert refrigerator repair services for residential clients. Factory authorized service with 90-day guarantee. Call (707) 664-9702',
};

const features = [
  'Cooling problems diagnosis and repair',
  'Electrical fault troubleshooting',
  'Temperature control issues',
  'Ice maker and water dispenser repair',
  'Door seal and gasket replacement',
  'Fan motor issues'
];

export default function RefrigeratorRepairPage() {
  const breadcrumbs = generateBreadcrumbs('/services/refrigerator-repair', metadata.title);

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Refrigerator Repair Services
              </h1>
              <p className="text-xl mb-8">
                Expert refrigerator repair services for residential clients. Our certified technicians specialize in diagnosing and fixing cooling problems and electrical faults.
              </p>
              <div className="space-y-3">
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
                    className="inline-flex items-center justify-center bg-white text-green-800 border-2 border-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                  >
                    <CalendarIcon className="h-5 w-5 mr-2" />
                    Request Appointment Online
                  </a>
                </div>
                <p className="text-sm text-gray-100 text-center">
                  {BOOKING_CONFIG.DISCLAIMERS.SHORT}
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/refrigerator-repair.webp"
                alt="Professional refrigerator repair service"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Refrigerator Repair
              </h2>
              <p className="text-gray-700 mb-6">
                With prompt service, transparent pricing, and a commitment to customer satisfaction, Kelly&apos;s Appliance Repair is your go-to choice for efficient and professional factory authorized refrigerator repairs.
              </p>
              <p className="text-gray-700 mb-8">
                We use high-quality parts for all replacements, ensuring durable and reliable repairs that keep your refrigerator running efficiently for years to come.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Common Refrigerator Issues We Fix:
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Our Refrigerator Repair Service?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full p-2 mr-4">
                    <CheckCircleIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Factory Authorized</h4>
                    <p className="text-gray-600">Certified repair services for all major refrigerator brands</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full p-2 mr-4">
                    <CheckCircleIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">90-Day Guarantee</h4>
                    <p className="text-gray-600">Money back guarantee on all completed repairs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full p-2 mr-4">
                    <CheckCircleIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Service Call Fee Applied</h4>
                    <p className="text-gray-600">Service Call Fee applies to Final repair!</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full p-2 mr-4">
                    <CheckCircleIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">50+ Years Experience</h4>
                    <p className="text-gray-600">Serving the Bay Area since 1975</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 space-y-8">
              <ContentSection title="About Our Refrigerator Repair Service">
                <p>
                  Kelly&apos;s Appliance Repair offers top-quality refrigerator repair services designed to address a wide range of issues, ensuring your appliance operates efficiently and reliably. Our team of experienced technicians is trained to handle various residential refrigerator models and brands. We pride ourselves on providing prompt, professional service with a focus on customer satisfaction.
                </p>
              </ContentSection>

              <ContentSection title="Diagnostic and Repair Process">
                <p>
                  When you contact Kelly&apos;s Appliance Repair for refrigerator service, our technicians start with a thorough diagnostic assessment to identify the root cause of the problem. Common issues we address include:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>
                    <strong>Temperature Fluctuations:</strong> Inconsistent cooling can lead to spoiled food and higher energy bills. Our technicians check and repair thermostats, compressors, and other components to restore optimal cooling.
                  </li>
                  <li>
                    <strong>Leaks and Water Damage:</strong> Water leaks can result from faulty door seals, clogged defrost drains, or damaged water lines. We inspect and fix these issues to prevent further damage.
                  </li>
                  <li>
                    <strong>Unusual Noises:</strong> Strange sounds often indicate problems with the fan, motor, or compressor. We diagnose and resolve these noises to ensure quiet operation.
                  </li>
                  <li>
                    <strong>Ice Maker Malfunctions:</strong> Whether your ice maker is not producing ice or the ice quality is poor, we troubleshoot and repair the system to ensure consistent ice production.
                  </li>
                </ul>
              </ContentSection>

              <ContentSection title="Parts and Replacement">
                <p>
                  We use high-quality parts for repairs, ensuring durability and compatibility with your refrigerator. If a part replacement is necessary, we source the components quickly to minimize downtime and inconvenience.
                </p>
              </ContentSection>

              <ContentSection title="Preventative Maintenance">
                <p>
                  In addition to repairs, we offer preventative maintenance services to extend the life of your refrigerator and prevent future breakdowns. Regular maintenance includes cleaning coils and inspecting door seals, which can enhance efficiency and reduce energy consumption.
                </p>
              </ContentSection>

              <ContentSection title="Customer Service Commitment">
                <p>
                  At Kelly&apos;s Appliance Repair, we understand the importance of a fully functioning refrigerator in your daily life. Our technicians are committed to delivering fast, reliable service, often offering same-day appointments. We provide transparent pricing with no hidden fees, so you know exactly what to expect.
                </p>
              </ContentSection>

              <ContentSection title="Satisfaction Guarantee">
                <p>
                  Customer satisfaction is our top priority. We stand by our work with a satisfaction guarantee, ensuring that you are happy with the service provided. Our technicians are courteous, professional, and dedicated to resolving your appliance issues efficiently.
                </p>
                <p className="mt-4">
                  Kelly&apos;s Appliance Repair is your trusted partner for refrigerator repair services, combining technical expertise with exceptional customer care. Whether you need a quick fix, routine maintenance, or emergency service, you can rely on us to keep your refrigerator running smoothly.
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
                  <CalendarIcon className="h-5 w-5 mr-2" />
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
                    <CalendarIcon className="h-5 w-5 mr-2" /> Request Appointment
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
              { name: 'Maytag', src: '/images/Maytag_Logo2014-Present.webp' },
              { name: 'KitchenAid', src: '/images/kitchenaid-logo-v2.webp' },
              { name: 'Bosch', src: '/images/bosch_logo_us_right.gif' },
              { name: 'Samsung', src: '/images/brand-samsung.svg' },
              { name: 'LG', src: '/images/brand-lg.svg' },
              { name: 'Sub-Zero', src: '/images/logo-subzero-on.gif' },
              { name: 'Wolf', src: '/images/logo-wolf-act.gif' },
              { name: 'Viking', src: '/images/brand-viking.svg' },
              { name: 'Dacor', src: '/images/dacor.webp' },
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
            Need Refrigerator Repair Service?
          </h2>
          <p className="text-xl mb-8">
            Call us today for fast, reliable refrigerator repair services
          </p>
          <div className="space-y-3">
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
                className="inline-flex items-center justify-center bg-white text-green-800 border-2 border-green-600 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-50 transition-colors"
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
            "serviceType": "Refrigerator Repair",
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
            "description": "Find refrigerator repair near me and ice maker repair near me. Professional refrigerator repair services with factory authorized technicians.",
            "areaServed": [
              "Santa Rosa, CA","Petaluma, CA","Rohnert Park, CA","Sonoma, CA","Sebastopol, CA","Windsor, CA","Marin County, CA","San Rafael, CA","Novato, CA","Napa, CA"
            ],
            "url": "https://kellysappliancerepair.com/services/refrigerator-repair"
          })
        }}
      />
      <FAQSection
        title="Refrigerator Repair FAQs"
        subtitle="Quick answers to common questions about service, pricing, and scheduling."
        faqs={refrigeratorFaqs}
      />
    </Layout>
  );
}
