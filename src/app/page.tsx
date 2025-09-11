import React from 'react';
import GoogleReviews from '@/components/GoogleReviews'
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';
// import AutoAnimate from '@/components/AutoAnimate'
import EmblaBrandCarousel from '@/components/EmblaBrandCarousel'

const companyInfo = getCompanyInfo();

const services = [
  {
    title: 'Refrigerator Repair',
    description: 'Expert refrigerator repair services for residential clients. Our certified technicians specialize in diagnosing and fixing cooling problems, faulty compressors, and electrical faults.',
    image: '/images/refrigerator-repair.webp',
    href: '/services/refrigerator-repair'
  },
  {
    title: 'Oven Repair', 
    description: 'Professional oven repair services for residential clients. Our skilled technicians are experienced in diagnosing and fixing temperature irregularities and faulty heating elements.',
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
    description: 'Experienced dishwasher repair services for residential clients. We specialize in fixing water leaks, drainage problems, faulty motors, and malfunctioning controls.',
    image: '/images/dishwasher-repair.webp',
    href: '/services/dishwasher-repair'
  }
];

// const guarantees = [
//   '90 Day Money Back Guarantee',
//   'Factory Authorized Repair Services', 
//   'No Service Fee On Completed Jobs',
//   '50+ Years in Business!'
// ];

const brandLogos = [
  { name: 'GE', image: '/images/General_Electric_logo.webp' },
  { name: 'Whirlpool', image: '/images/Whirlpool_2016.webp' },
  { name: 'Maytag', image: '/images/Maytag_Logo2014-Present.webp' },
  { name: 'KitchenAid', image: '/images/kitchenaid-logo-v2.webp' },
  { name: 'Bosch', image: '/images/bosch_logo_us_right.gif' },
  { name: 'JennAir', image: '/images/jennair-logo1.jpg' },
  { name: 'Amana', image: '/images/logo_main.gif' },
  { name: 'Kenmore', image: '/images/kenmore_logo.gif' },
  { name: 'Samsung', image: '/images/brand-samsung.svg' },
  { name: 'LG', image: '/images/brand-lg.svg' },
  { name: 'Siemens', image: '/images/siemens_logo.gif' },
  { name: 'InSinkErator', image: '/images/ise_logo.gif' },
  { name: 'Sub-Zero', image: '/images/logo-subzero-on.gif' },
  { name: 'Wolf', image: '/images/logo-wolf-act.gif' },
  { name: 'Thermador', image: '/images/brand-thermador.svg' },
  { name: 'Viking', image: '/images/brand-viking.svg' },
  { name: 'Gaggenau', image: '/images/GG-logo-black-RGB.jpg' },
  { name: 'Dacor', image: '/images/dacor.webp' },
];

// Split logos into two rows for carousel effect
const topRowLogos = brandLogos.slice(0, Math.ceil(brandLogos.length / 2));
const bottomRowLogos = brandLogos.slice(Math.ceil(brandLogos.length / 2));

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative text-white py-24">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/47805405_ml.jpg"
              alt="Modern kitchen background"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          {/* Removed overlay for clean, uncluttered hero */}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-center text-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-2 text-shadow-soft text-green-700">Kelly&apos;s Appliance</h1>
              <p className="text-2xl lg:text-3xl text-green-700 mb-6 text-shadow-soft">Appliance Repair Since 1975</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={`tel:${companyInfo.phone}`}
                  data-analytics-label="hero_call"
                  className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-xl text-xl font-semibold hover:bg-green-700 transition-colors shadow-lg ring-1 ring-white/10"
                >
                  <PhoneIcon className="h-6 w-6 mr-2" />
                  Call {companyInfo.phone}
                </a>
                <div className="flex items-center gap-4 px-0">
                  <a
                    href="https://locallyownedandoperated.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                    aria-label="Certified Local Business by Mainshare"
                    data-analytics-label="hero_certified_icon"
                  >
                    <Image src="/images/CertifiedIcon.svg" alt="Certified Local Business by Mainshare" width={96} height={96} className="h-24 w-auto" />
                  </a>
                </div>
              </div>
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

      {/* Google Reviews (single block) */}
      <GoogleReviews />

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
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover-scale transition-all duration-300 animate-fade-in-up flex flex-col">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-2">
                  <Link
                    href={service.href}
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors btn-animate w-full text-center"
                  >
                    Learn More
                  </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners Section */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Factory Authorized Service For:
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Locally Owned & Operated
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                50+ Years in Business
              </span>
            </div>
          </div>
          
          {/* Embla Carousels with mask fade */}
          <div className="mb-8">
            <EmblaBrandCarousel brands={topRowLogos} direction="left" />
          </div>
          <EmblaBrandCarousel brands={bottomRowLogos} direction="right" />

          {/* Diamond Certified Logo */}
          <div className="text-center mt-12">
            <Image
              src="/images/diamond-certified-logo.png"
              alt="Diamond Certified"
              width={120}
              height={120}
              className="mx-auto h-20 w-auto"
            />
            <p className="text-sm text-gray-600 mt-2">Diamond Certified Service</p>
          </div>
        </div>
      </section>

      {/* Google Reviews Section (removed duplicate; kept single component above) */}

      {/* Service Area Map Section with diagonally clipped scenic background */}
      <section className="relative py-16 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true" style={{ zIndex: 0, pointerEvents: 'none' }}>
          <div className="flex h-full w-full">
            {[
              { src: '/images/Scenic/Vineyard.png', label: 'Napa Vineyards' },
              { src: '/images/Scenic/City.png', label: 'City' },
              { src: '/images/Scenic/Forest.png', label: 'Forest' },
              { src: '/images/Scenic/Coastal.png', label: 'Rocky Coast' },
            ].map((p, idx, arr) => {
              const isLast = idx === arr.length - 1
              const clipPath = isLast
                ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' // rectangle for last tile
                : 'polygon(0% 0%, 100% 0%, 86% 100%, 0% 100%)' // diagonal on right only
              return (
                <div
                  key={idx}
                  className="relative h-full overflow-hidden shrink-0"
                  style={{
                    clipPath,
                    width: 'calc(25% + 8vw)',
                    marginLeft: idx > 0 ? '-8vw' : 0,
                    zIndex: arr.length - idx,
                  }}
                >
                  <Image src={p.src} alt={p.label} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority={idx === 0} />
                </div>
              )
            })}
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ WebkitTextStroke: '0.6px rgba(0,0,0,0.35)', textShadow: '0 2px 8px rgba(0,0,0,0.55)' }}>
              Our Service Area
            </h2>
            <p className="text-xl text-white/95" style={{ WebkitTextStroke: '0.4px rgba(0,0,0,0.35)', textShadow: '0 2px 6px rgba(0,0,0,0.55)' }}>
              Serving Sonoma County, Marin County, and Napa County
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6" style={{ WebkitTextStroke: '0.5px rgba(0,0,0,0.3)', textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}>Cities We Serve:</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  'Santa Rosa','Petaluma','Rohnert Park','Cotati','Sebastopol','Sonoma','Windsor','Healdsburg','Forestville','Guerneville','Glen Ellen','Bodega Bay','Novato','San Rafael','Mill Valley','Sausalito','Tiburon','Corte Madera','Napa','Dillon Beach'
                ].map((city) => (
                  <span key={city} className="px-3 py-1 rounded-xl bg-white/85 backdrop-blur-md text-gray-900 text-sm font-medium shadow ring-1 ring-white/40">
                    {city}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99154.73935582353!2d-122.8697!3d38.5816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808442c56db4e3a5%3A0x3cfe9df7b8bf0eed!2sKelly&#39;s%20Appliance%20Center!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                title="Map: Kelly's Appliance Center location"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
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
            Need Appliance Repair Service?
          </h2>
          <p className="text-xl mb-8">
            Call us today for fast, reliable, and affordable appliance repair services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-700 transition-colors btn-animate"
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              Call {companyInfo.phone}
            </a>
            <a
              href="https://booking.rossware.com/schedule/4588"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors btn-animate"
            >
              Book Appointment Online
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}