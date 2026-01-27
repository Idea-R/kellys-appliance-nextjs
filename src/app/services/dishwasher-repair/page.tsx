import React from 'react';
import Image from 'next/image';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { SparklesIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';
import { BOOKING_CONFIG } from '@/lib/booking-constants';
import ServiceProblemCard from '@/components/ServiceProblemCard';
import ProcessTimeline from '@/components/ProcessTimeline';
import ServiceCallout from '@/components/ServiceCallout';
import FloatingBadge from '@/components/FloatingBadge';
import ServiceDetailSection from '@/components/ServiceDetailSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';
import FAQSection from '@/components/FAQSection';
import { dishwasherFaqs } from '@/data/faqs';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Dishwasher Repair Services - Professional Technicians',
  description: 'Find dishwasher repair near me. Experienced dishwasher repair services for residential clients. Water leaks, drainage problems, faulty motors repair. Call (707) 664-9702',
  alternates: {
    canonical: '/services/dishwasher-repair',
  },
};

const problems = [
  { 
    problem: 'Dishwasher Leaking', 
    description: 'Water pooling under or around your dishwasher? We diagnose and fix door seals, pump issues, and hose connections.' 
  },
  { 
    problem: "Won't Drain", 
    description: 'Standing water after a cycle usually means a clogged drain, faulty pump, or blocked filter that needs attention.' 
  },
  { 
    problem: 'Not Cleaning Properly', 
    description: 'Dishes coming out dirty? Could be spray arm problems, detergent dispenser issues, or water temperature concerns.' 
  },
  { 
    problem: "Won't Dispense Detergent", 
    description: 'Detergent dispenser stuck closed or not releasing? We repair or replace faulty mechanisms quickly.' 
  },
  { 
    problem: "Door Won't Latch", 
    description: 'Door not closing or staying shut? Broken latches, hinges, or door springs can be easily replaced.' 
  },
  { 
    problem: 'Strange Noises', 
    description: 'Grinding, humming, or rattling sounds often indicate worn bearings, loose spray arms, or pump issues.' 
  }
];

const repairProcess = [
  { number: 1, title: 'Diagnostic', description: 'Thorough inspection to identify the exact problem with your dishwasher' },
  { number: 2, title: 'Quote', description: 'Transparent flat-rate pricing before any work begins' },
  { number: 3, title: 'Repair', description: 'Expert repair using genuine OEM parts and proper tools' },
  { number: 4, title: 'Test', description: 'Complete testing to ensure everything works perfectly' }
];

export default function DishwasherRepairPage() {
  const breadcrumbs = generateBreadcrumbs('/services/dishwasher-repair', metadata.title);

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 to-green-600 text-white py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 opacity-10">
          <SparklesIcon className="h-32 w-32" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <SparklesIcon className="h-24 w-24" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Floating badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <FloatingBadge text="50+ Years Experience" variant="accent" />
            <FloatingBadge text="Factory Authorized" variant="primary" />
            <FloatingBadge text="90-Day Guarantee" variant="secondary" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 animate-fade-in-up">
                Dishwasher Repair Services
              </h1>
              <p className="text-xl mb-8 opacity-95 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Expert dishwasher repair when you need it most. Our certified technicians specialize in diagnosing and fixing water leaks, drainage problems, and all dishwasher issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover-scale"
                >
                  <PhoneIcon className="h-6 w-6 mr-2" />
                  Call {companyInfo.phone}
                </a>
                <a
                  href={BOOKING_CONFIG.BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover-scale"
                >
                  Schedule Online
                </a>
              </div>
            </div>
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur opacity-20"></div>
              <Image
                src="/images/dishwasher-repair.webp"
                alt="Professional dishwasher repair service"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl relative z-10 border-4 border-white/10"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Brands strip */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Some Brands We Service</h3>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-90">
            {[
              { name: 'Bosch', src: '/images/bosch_logo_us_right.gif' },
              { name: 'KitchenAid', src: '/images/kitchenaid-logo-v2.webp' },
              { name: 'GE', src: '/images/General_Electric_logo.webp' },
              { name: 'Whirlpool', src: '/images/Whirlpool_2016.webp' },
              { name: 'Maytag', src: '/images/Maytag_Logo2014-Present.webp' },
            ].map((b) => (
              <Image key={b.name} src={b.src} alt={b.name} width={140} height={48} className="h-10 md:h-12 w-auto grayscale hover:grayscale-0 transition" />
            ))}
          </div>
        </div>
      </section>
      {/* Common Problems - Interactive Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common Dishwasher Problems We Fix
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No matter what's wrong with your dishwasher, our expert technicians have seen it all and can fix it fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((item, index) => (
              <ServiceProblemCard
                key={index}
                problem={item.problem}
                description={item.description}
                index={index}
              />
            ))}
          </div>

          <ServiceCallout type="success" title="Why Choose Professional Repair?">
            <p>
              DIY dishwasher repairs can lead to water damage, electrical issues, or voided warranties. Our factory-authorized technicians use genuine OEM parts and have the expertise to diagnose problems accurately the first time.
            </p>
          </ServiceCallout>
        </div>
      </section>

      {/* Repair Process Timeline */}
      <ProcessTimeline steps={repairProcess} title="Our Dishwasher Repair Process" />

      {/* Expert Service Details - Clean React Components */}
      <ServiceDetailSection 
        title="Expert Dishwasher Repair in Sonoma, Marin and Napa County"
        intro="When your dishwasher isn't quite earning its keep, it's time to get the experts at Kelly's Appliance Repair on the case."
      >
        <p>
          Sure, you can wash your dishes by hand. But really, who wants to do that? Especially when you have a machine in your kitchen that's supposed to do it for you! Like with any appliance repair, our service technicians will diagnose the problem and provide solutions so you can let your dishwasher do the cleaning.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Professional Dishwasher Repair?</h3>
        <p>
          Dishwashers are complex appliances with intricate water systems, electrical components, and mechanical parts. What seems like a simple issue can often be a symptom of a larger problem. Our factory-authorized technicians have the training and diagnostic tools to:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">✓</span>
            <span>Accurately diagnose the root cause, not just the symptoms</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">✓</span>
            <span>Use genuine OEM parts that match your dishwasher's specifications</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">✓</span>
            <span>Prevent water damage from improper repairs</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">✓</span>
            <span>Maintain your manufacturer's warranty</span>
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Serving the Most Popular Brands</h3>
        <p>
          We've been in business since 1975, servicing the most popular dishwasher makes and models including Bosch, KitchenAid, GE, Whirlpool, and Maytag. Our technicians receive ongoing training to stay current with the latest dishwasher technology and repair techniques.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
          <p className="text-blue-900 font-semibold mb-2">Need help now?</p>
          <p className="text-blue-800">
            Call us today at <a href={`tel:${companyInfo.phone}`} className="font-bold underline">{companyInfo.phone}</a> and we'll get your dishwasher running like new again.
          </p>
        </div>
      </ServiceDetailSection>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Dishwasher Repair Service?
          </h2>
          <p className="text-xl mb-8">
            We use genuine, high-quality parts for all replacements, ensuring reliable and durable repairs.
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
            "serviceType": "Dishwasher Repair",
            "description": "Find dishwasher repair near me. Professional dishwasher repair services with factory authorized technicians.",
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
            "url": "https://kellysappliancerepair.com/services/dishwasher-repair"
          })
        }}
      />
      <FAQSection
        title="Dishwasher Repair FAQs"
        subtitle="Fast answers about leaks, draining issues, scheduling, and pricing."
        faqs={dishwasherFaqs}
      />
    </Layout>
  );
}
