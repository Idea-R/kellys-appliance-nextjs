import React from 'react';
import Image from 'next/image';
import { PhoneIcon, CheckCircleIcon, CalendarIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';
import ContentSection from '@/components/ContentSection';
import { BOOKING_CONFIG } from '@/lib/booking-constants';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Oven Repair Services - Professional Technicians',
  description: 'Find oven repair near me, range repair near me, wall oven repair, cooktop repair, and vent hood repair. Professional oven and range repair services for residential clients. Expert diagnosis and repair of temperature issues, heating elements, and controls. Call (707) 664-9702',
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
                Oven, Range, Wall Oven, Cooktop & Vent Hood Repair
              </h1>
              <p className="text-xl mb-8">
                Professional oven repair, range repair, wall oven repair, cooktop repair, and vent hood repair services. Our skilled technicians are experienced in diagnosing and fixing temperature irregularities, faulty heating elements, and malfunctioning controls for all cooking appliances.
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
              Expert Oven, Range, Wall Oven, Cooktop & Vent Hood Repair
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We offer prompt service for all cooking appliances including ovens, ranges, wall ovens, cooktops, and vent hoods. Transparent pricing, quick response times, and a strong commitment to customer satisfaction.
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

      {/* Detailed Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 space-y-8">
              <ContentSection title="About Our Oven, Range, Wall Oven, Cooktop & Vent Hood Repair Service">
                <p>
                  Kelly&apos;s Appliance Repair provides expert repair services for all cooking appliances including ovens, ranges, wall ovens, cooktops, and vent hoods. Our team of experienced technicians is well-versed in handling various brands and models, from traditional gas and electric ovens to modern convection ovens, built-in wall ovens, induction cooktops, and range vent hoods.
                </p>
              </ContentSection>

              <ContentSection title="Comprehensive Diagnostic Process">
                <p>
                  We begin with a thorough diagnostic assessment to accurately identify the issue. Common problems we address include:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>
                    <strong>Temperature Inconsistencies:</strong> We check and calibrate thermostats, heating elements, and sensors to ensure your oven heats evenly and maintains the correct temperature.
                  </li>
                  <li>
                    <strong>Electrical Issues:</strong> Faulty wiring, blown fuses, or malfunctioning control boards are inspected and repaired to restore proper operation.
                  </li>
                  <li>
                    <strong>Ignition Problems:</strong> For gas ovens, we troubleshoot and fix issues with the igniter, gas valve, or pilot light to ensure safe and reliable ignition.
                  </li>
                  <li>
                    <strong>Door Malfunctions:</strong> We repair or replace faulty door seals, hinges, and springs to ensure the oven door closes properly and retains heat effectively.
                  </li>
                  <li>
                    <strong>Control Panel Issues:</strong> We diagnose and repair unresponsive or malfunctioning control panels, buttons, and display screens to ensure ease of use.
                  </li>
                </ul>
              </ContentSection>

              <ContentSection title="Quality Parts and Repairs">
                <p>
                  Kelly&apos;s Appliance Repair uses only high-quality, OEM (Original Equipment Manufacturer) parts for all repairs, ensuring durability and compatibility with your oven. Our goal is to restore your appliance to optimal working condition quickly and efficiently.
                </p>
              </ContentSection>

              <ContentSection title="Preventative Maintenance">
                <p>
                  In addition to repairs, we offer preventative maintenance services to help extend the life of your oven and prevent future breakdowns. Regular maintenance includes cleaning and inspecting key components, checking gas lines (for gas ovens), and ensuring all electrical connections are secure.
                </p>
              </ContentSection>

              <ContentSection title="Commitment to Customer Service">
                <p>
                  We understand the inconvenience a malfunctioning oven can cause in your daily life. That&apos;s why our technicians are committed to providing fast, reliable service. We offer flexible scheduling, including same-day appointments when available, and transparent pricing with no hidden fees.
                </p>
              </ContentSection>

              <ContentSection title="Satisfaction Guarantee">
                <p>
                  Customer satisfaction is our top priority. We stand behind our work with a satisfaction guarantee, ensuring you are happy with the service provided. Our technicians are courteous, professional, and dedicated to resolving your appliance issues effectively.
                </p>
                <p className="mt-4">
                  Kelly&apos;s Appliance Repair is your trusted partner for oven repair services, combining technical expertise with exceptional customer care. Whether you need a quick fix, routine maintenance, or emergency repair, you can rely on us to keep your oven in top working condition.
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
            Need Professional Oven, Range, Wall Oven, Cooktop or Vent Hood Repair?
          </h2>
          <p className="text-xl mb-8">
            Using genuine, high-quality parts for all repairs, we ensure your cooking appliances operate safely and efficiently.
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
              Request Appointment Online Online
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
            "serviceType": "Oven, Range, Wall Oven, Cooktop & Vent Hood Repair",
            "description": "Find oven repair near me, range repair near me, wall oven repair, cooktop repair, and vent hood repair. Professional oven and range repair services with factory authorized technicians.",
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
            "url": "https://kellysappliancerepair.com/services/oven-repair"
          })
        }}
      />
    </Layout>
  );
}
