import Image from 'next/image'
import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import EmblaBrandCarousel from '@/components/EmblaBrandCarousel'
import TypewriterText from '@/components/TypewriterText'
import RevealOnScroll from '@/components/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Factory Authorized Appliance Repair Services | Kelly\'s Appliance Center',
  description: 'Factory authorized appliance repair for Maytag, Whirlpool, GE, KitchenAid, Bosch, Viking, and Dacor. Genuine parts, expert technicians, manufacturer guidelines.',
  keywords: ['factory authorized repair', 'certified appliance service', 'genuine parts', 'Maytag authorized', 'Whirlpool certified', 'GE factory trained', 'KitchenAid repair', 'Bosch service', 'Viking authorized', 'Dacor repair'],
}

export default function AuthorizedServicePage() {
  const authorizedBrands = [
    {
      name: 'Maytag',
      logo: '/images/logo_maytag.jpg',
      photo: '/images/dryer2.webp',
      title: 'Maytag Authorized Appliance Repair',
      description: 'Kelly\'s Appliance is proud to offer Maytag factory-authorized appliance repair services, delivering expert care for your trusted Maytag appliances. As an authorized service provider, we use genuine Maytag parts and follow the manufacturer\'s repair guidelines to ensure the best performance and longevity.',
      specialties: ['Washers & Dryers', 'Refrigerators', 'Ovens & Ranges', 'Dishwashers'],
      searchTerm: 'Maytag Authorized Repair Near Me'
    },
    {
      name: 'Whirlpool',
      logo: '/images/whirlpool_logo.gif',
      photo: '/images/refrigerator.webp',
      title: 'Authorized Whirlpool Appliance Repair',
      description: 'We proudly offers Whirlpool factory-authorized repair services to keep your Whirlpool appliances running like new! As an authorized service provider, we use genuine Whirlpool parts and follow manufacturer guidelines to deliver unbeatable performance and reliability.',
      specialties: ['Refrigerators', 'Washers & Dryers', 'Ovens & Ranges', 'Dishwashers'],
      searchTerm: 'Certified Whirlpool Appliance Repair'
    },
    {
      name: 'GE',
      logo: '/images/ge_olympic_logo_136.gif',
      photo: '/images/oven-repair.webp',
      title: 'GE Factory Trained Appliance Repair',
      description: 'Kelly\'s Appliance is your trusted source for GE factory trained appliance repair services! As a factory trained service provider, we bring expert care and precision to every repair, using genuine GE parts and adhering to manufacturer guidelines for optimal performance.',
      specialties: ['Refrigerators', 'Ovens & Ranges', 'Dishwashers', 'Washers & Dryers'],
      searchTerm: 'Factory Trained GE Appliance Repair'
    },
    {
      name: 'KitchenAid',
      logo: '/images/kad_logo2.gif',
      photo: '/images/dishwasher-repair2.webp',
      title: 'Authorized KitchenAid Repair',
      description: 'Kelly\'s Appliance is proud to offer KitchenAid factory-authorized appliance repair services for full-size residential appliances. We use genuine KitchenAid parts and follow manufacturer-approved repair processes for reliable performance.',
      specialties: ['Dishwashers', 'Refrigerators', 'Ovens & Ranges', 'Cooktops'],
      searchTerm: 'Certified KitchenAid Appliance Repair'
    },
    {
      name: 'Bosch',
      logo: '/images/bosch_logo_us_right.gif',
      photo: '/images/dishwasher-repair.webp',
      title: 'Bosch Factory Authorized Appliance Repair',
      description: 'Kelly\'s Appliance provides factory-authorized Bosch appliance repair services, ensuring your premium German-engineered appliances receive the expert care they deserve. Our certified technicians use genuine Bosch parts and follow strict manufacturer guidelines to maintain optimal performance.',
      specialties: ['Dishwashers', 'Refrigerators', 'Ovens & Ranges', 'Washers & Dryers'],
      searchTerm: 'Authorized Bosch Appliance Repair'
    },
    {
      name: 'Viking',
      logo: '/images/brand-viking.svg', // Correct Viking logo
      photo: '/images/services-side.jpg',
      title: 'Viking Factory Authorized Appliance Repair',
      description: 'As a Viking factory-authorized service provider, Kelly\'s Appliance delivers exceptional repair services for your premium Viking appliances. Our expertly trained technicians use genuine Viking parts and follow manufacturer specifications to ensure your professional-grade appliances perform at their peak.',
      specialties: ['Professional Ranges', 'Refrigerators', 'Dishwashers', 'Outdoor Grills'],
      searchTerm: 'Viking Authorized Appliance Repair'
    },
    {
      name: 'Dacor',
      logo: '/images/dacor.webp',
      photo: '/images/services-opt.webp',
      title: 'Factory Authorized Dacor Appliance Repair',
      description: 'Kelly\'s Appliance is proud to provide factory-authorized repair services for Dacor appliances, ensuring your appliances run like new. As an authorized service provider, we use genuine Dacor parts and follow manufacturer-approved repair methods, delivering reliable and lasting results.',
      specialties: ['Luxury Ranges', 'Built-in Refrigerators', 'Dishwashers', 'Wine Storage'],
      searchTerm: 'Factory Authorized Dacor Appliance Repair'
    }
  ]

  return (
    <Layout>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Factory Authorized Appliance Repair
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Certified repair service for leading appliance brands using genuine parts and manufacturer guidelines
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:(707) 664-9702"
                className="inline-flex items-center justify-center bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                📞 Call (707) 664-9702
              </a>
              <div className="flex items-center gap-3">
                <a
                  href="https://locallyownedandoperated.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Certified Local Business by Mainshare"
                >
                  <Image src="/images/CertifiedIcon.svg" alt="Certified Local Business by Mainshare" width={72} height={72} className="h-18 w-18" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Overview */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Authorized Repair Service</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Kelly's Appliance provides authorized appliance repair service for many manufacturers, ensuring top-quality care for your household appliances. As a certified service provider for leading appliance brands, we use genuine replacement parts and follow manufacturer guidelines to restore your appliances to peak performance. Our expert technicians are trained to diagnose and repair issues quickly, whether it's a malfunctioning refrigerator, oven, washer, dryer, or dishwasher.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
              Committed to excellent service and customer satisfaction, Kelly's Appliance delivers prompt, professional repairs tailored to your specific needs. When you choose us, you're choosing certified repair backed by industry expertise and factory authorization.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-16">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  ✓
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Genuine Parts Only</h3>
                <p className="text-sm text-gray-600">We use only manufacturer-approved genuine parts for lasting repairs</p>
              </div>
              <div>
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  🔧
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Factory Trained</h3>
                <p className="text-sm text-gray-600">Our technicians are certified and trained by appliance manufacturers</p>
              </div>
              <div>
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  🛡️
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Warranty Safe</h3>
                <p className="text-sm text-gray-600">Our authorized service maintains your appliance warranty coverage</p>
              </div>
            </div>
          </div>

          {/* Brand Carousels (Embla) */}
          <div className="mb-16 space-y-8">
            <EmblaBrandCarousel
              direction="left"
              brands={[
                { image: '/images/General_Electric_logo.webp', name: 'GE' },
                { image: '/images/Whirlpool_2016.webp', name: 'Whirlpool' },
                { image: '/images/Maytag_Logo2014-Present.webp', name: 'Maytag' },
                { image: '/images/kitchenaid-logo-v2.webp', name: 'KitchenAid' },
                { image: '/images/bosch_logo_us_right.gif', name: 'Bosch' },
                { image: '/images/jennair-logo1.jpg', name: 'JennAir' },
              ]}
            />
            <EmblaBrandCarousel
              direction="right"
              brands={[
                { image: '/images/kenmore_logo.gif', name: 'Kenmore' },
                { image: '/images/brand-samsung.svg', name: 'Samsung' },
                { image: '/images/brand-lg.svg', name: 'LG' },
                { image: '/images/siemens_logo.gif', name: 'Siemens' },
                { image: '/images/ise_logo.gif', name: 'InSinkErator' },
                { image: '/images/logo-wolf-act.gif', name: 'Wolf' },
                { image: '/images/logo-subzero-on.gif', name: 'Sub-Zero' },
                { image: '/images/brand-thermador.svg', name: 'Thermador' },
                { image: '/images/brand-viking.svg', name: 'Viking' },
                { image: '/images/dacor.webp', name: 'Dacor' },
              ]}
            />
          </div>

          {/* Authorized Brands */}
          <div className="space-y-16">
            {authorizedBrands.map((brand, index) => (
              <div key={brand.name} className={`grid lg:grid-cols-2 gap-12 items-center`}>
                <RevealOnScroll direction={index % 2 === 0 ? 'left' : 'right'} className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="bg-white p-8 rounded-lg shadow-sm border overflow-hidden">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} Authorized Service`}
                      width={200}
                      height={100}
                      className="h-16 w-auto mb-6 will-change-transform animate-fade-in-up"
                    />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4"><TypewriterText text={brand.title} /></h3>
                    <p className="text-gray-600 mb-6 leading-relaxed animate-fade-in-up" style={{ animationDelay: '120ms' }}>{brand.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Our {brand.name} Specialties:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {brand.specialties.map((specialty, idx) => (
                          <div key={specialty} className="flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: `${(idx+1)*90}ms` }}>
                            <span className="text-green-600">•</span>
                            <span className="text-sm text-gray-600">{specialty}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <p className="text-sm text-gray-500 mb-4">"{brand.searchTerm}"</p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href="tel:(707) 664-9702"
                          className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                        >
                          Call (707) 664-9702
                        </a>
                        <a
                          href="https://booking.rossware.com/schedule/4588"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                        >
                          Book Appointment
                        </a>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">We service full-size residential appliances only. No small appliances (mixers, toasters, vacuums, etc.).</p>
                  </div>
                </RevealOnScroll>
                <RevealOnScroll direction={index % 2 === 0 ? 'right' : 'left'} className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`aspect-square bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden`}>
                    <Image src={brand.photo} alt={`${brand.name} service`} width={600} height={600} className="object-cover w-full h-full" />
                  </div>
                </RevealOnScroll>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 bg-green-700 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Need Factory Authorized Repair?</h2>
            <p className="text-xl text-white/90 mb-8">
              Trust your appliances to certified technicians with genuine parts and warranty-safe service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(707) 664-9702"
                className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                📞 Call (707) 664-9702 Now
              </a>
              <a
                href="https://booking.rossware.com/schedule/4588"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Service Online
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  )
}