// Simple Design Preview Page - No additional dependencies needed
import Image from 'next/image'
import Link from 'next/link'

// Mock company info for examples
const mockCompanyInfo = {
  name: "Kelly's Appliance Center",
  phone: "(707) 664-9702",
  address: {
    street: "466 Primero Ct. Suite H",
    city: "Cotati",
    state: "CA",
    zip: "94931"
  }
}

// Simplified Clean Footer Preview
function CleanFooterPreview() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/images/kellys-appliance-logo.webp"
              alt="Kelly's Appliance Center"
              width={180}
              height={60}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-gray-400 mb-4">
              Serving the Bay Area since 1975
            </p>
            <a
              href={`tel:${mockCompanyInfo.phone}`}
              className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
            >
              📞 <span className="font-medium">{mockCompanyInfo.phone}</span>
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services/refrigerator-repair" className="hover:text-white transition-colors">Refrigerator</Link></li>
              <li><Link href="/services/oven-repair" className="hover:text-white transition-colors">Oven</Link></li>
              <li><Link href="/services/washer-dryer-repair" className="hover:text-white transition-colors">Washer/Dryer</Link></li>
              <li><Link href="/services/dishwasher-repair" className="hover:text-white transition-colors">Dishwasher</Link></li>
            </ul>
          </div>

          {/* Service Areas - Consolidated */}
          <div>
            <h3 className="font-semibold mb-4">Service Areas</h3>
            <p className="text-sm text-gray-400 mb-2">Proudly serving:</p>
            <ul className="space-y-1 text-sm text-gray-400">
              <li><Link href="/service-locations/sonoma-county" className="hover:text-white transition-colors">Sonoma County</Link></li>
              <li><Link href="/service-locations/marin-county" className="hover:text-white transition-colors">Marin County</Link></li>
              <li><Link href="/service-locations/napa-county" className="hover:text-white transition-colors">Napa County</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://booking.rossware.com/schedule/4588" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Larger Certifications - Key Improvement */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-center text-white text-lg font-semibold mb-6">Our Memberships & Certifications</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow">
              <Image
                src="/images/diamond-cert-opt.jpg"
                alt="Diamond Certified"
                width={160}
                height={80}
                className="h-16 w-auto"
              />
            </div>
            <div className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow">
              <Image
                src="/images/rp-chamber-logo.webp"
                alt="Rohnert Park Chamber"
                width={160}
                height={80}
                className="h-16 w-auto"
              />
            </div>
            <div className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow">
              <Image
                src="/images/windsor-chamber-logo.webp"
                alt="Windsor Chamber"
                width={160}
                height={80}
                className="h-16 w-auto"
              />
            </div>
            <div className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow">
              <Image
                src="/images/Novato-Chamber.webp"
                alt="Novato Chamber"
                width={160}
                height={80}
                className="h-16 w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
          <p>&copy; 2025 {mockCompanyInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Simplified Modern Footer Preview
function ModernFooterPreview() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Interactive-style Map Preview */}
          <div className="relative">
            <div className="bg-gray-800 rounded-2xl p-8 group hover:bg-gray-700 transition-colors">
              <h3 className="text-2xl font-bold mb-4">Service Areas</h3>
              <div className="aspect-video bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-4xl">🗺️</div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="bg-gray-700 px-3 py-2 rounded-lg text-center hover:bg-green-600 transition-colors cursor-pointer">
                  Sonoma County
                </div>
                <div className="bg-gray-700 px-3 py-2 rounded-lg text-center hover:bg-green-600 transition-colors cursor-pointer">
                  Marin County
                </div>
                <div className="bg-gray-700 px-3 py-2 rounded-lg text-center hover:bg-green-600 transition-colors cursor-pointer">
                  Napa County
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="mt-6 bg-green-600 rounded-2xl p-6">
              <h4 className="font-bold mb-4">Quick Contact</h4>
              <div className="space-y-3">
                <a
                  href={`tel:${mockCompanyInfo.phone}`}
                  className="flex items-center gap-3 hover:translate-x-1 transition-transform"
                >
                  📞 <span className="font-medium">{mockCompanyInfo.phone}</span>
                </a>
                <div className="flex items-center gap-3 hover:translate-x-1 transition-transform cursor-pointer">
                  💬 <span>Live Chat</span>
                </div>
                <a
                  href="https://booking.rossware.com/schedule/4588"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:translate-x-1 transition-transform"
                >
                  📅 <span>Book Online</span>
                </a>
              </div>
            </div>
          </div>

          {/* Expandable-style Services */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Services</h3>
            <div className="space-y-2">
              {[
                { icon: '❄️', name: 'Refrigerator Repair', desc: 'Expert repair with 90-day guarantee' },
                { icon: '🔥', name: 'Oven Repair', desc: 'Same-day service available' },
                { icon: '🌊', name: 'Washer/Dryer Repair', desc: 'All brands serviced' },
                { icon: '🍽️', name: 'Dishwasher Repair', desc: 'Professional technicians' },
              ].map((service) => (
                <div
                  key={service.name}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{service.icon}</span>
                    <span className="font-medium text-lg">{service.name}</span>
                  </div>
                  <p className="text-sm text-gray-400 ml-11">{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Image
                src="/images/kellys-appliance-logo.webp"
                alt="Kelly's Appliance Center"
                width={200}
                height={60}
                className="h-12 w-auto mx-auto mb-2"
              />
              <p className="text-sm text-gray-400">Serving the Bay Area since 1975</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Showcase with hover effects */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-center text-xl font-bold mb-8">Trusted & Certified</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {[
              { src: '/images/diamond-cert-opt.jpg', alt: 'Diamond Certified', detail: 'Rated Highest in Quality' },
              { src: '/images/rp-chamber-logo.webp', alt: 'Rohnert Park Chamber', detail: 'Member Since 1985' },
              { src: '/images/windsor-chamber-logo.webp', alt: 'Windsor Chamber', detail: 'Active Business Member' },
              { src: '/images/Novato-Chamber.webp', alt: 'Novato Chamber', detail: 'Community Partner' },
            ].map((cert) => (
              <div
                key={cert.alt}
                className="bg-white rounded-xl p-5 shadow-lg hover:scale-110 hover:-translate-y-2 transition-all group relative"
              >
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  width={180}
                  height={90}
                  className="h-20 w-auto"
                />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {cert.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black/50 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; 2025 {mockCompanyInfo.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Brand showcase preview
function BrandShowcasePreview() {
  const brands = [
    { name: 'Whirlpool', logo: '/images/whirlpool_logo.gif' },
    { name: 'GE', logo: '/images/ge_olympic_logo_136.gif' },
    { name: 'Maytag', logo: '/images/logo_maytag.jpg' },
    { name: 'KitchenAid', logo: '/images/kad_logo2.gif' },
    { name: 'Bosch', logo: '/images/bosch_logo_us_right.gif' },
    { name: 'JennAir', logo: '/images/jennair_logo.gif' },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Factory Authorized Service
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're certified to repair all major appliance brands with genuine parts
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} Authorized Service`}
                width={120}
                height={60}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function DesignPreviewPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Kelly's Appliance - Design Direction Preview</h1>
          <p className="text-gray-600 mt-2">Compare the two design approaches below (simplified version - no additional dependencies)</p>
        </div>
      </div>

      {/* Key Issues Fixed */}
      <div className="bg-yellow-50 border border-yellow-200 mx-4 mt-4 rounded-lg p-4">
        <h2 className="font-semibold text-yellow-800 mb-2">✅ Issues Being Addressed:</h2>
        <ul className="text-sm text-yellow-700 grid md:grid-cols-2 gap-1">
          <li>• Chamber logos 2x larger</li>
          <li>• Service areas consolidated by county</li>
          <li>• Reduced footer clutter</li>
          <li>• Better hover effects</li>
          <li>• More brand logos displayed</li>
          <li>• Improved visual hierarchy</li>
        </ul>
      </div>

      {/* Direction 1: Clean Professional */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h2 className="text-3xl font-bold text-green-800 mb-2">Direction 1: Clean Professional</h2>
            <p className="text-green-700 mb-4">Emphasizes trust and expertise through clean design with larger certifications.</p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✅ Faster Loading</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✅ Better SEO</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">✅ Heritage-Focused</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">⏱️ 2-3 weeks</span>
            </div>
          </div>
        </div>

        {/* Clean Brand Showcase */}
        <div className="mb-8">
          <div className="max-w-7xl mx-auto px-4 mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Brand Showcase - Clean Grid</h3>
          </div>
          <BrandShowcasePreview />
        </div>

        {/* Clean Footer */}
        <div className="mb-12">
          <div className="max-w-7xl mx-auto px-4 mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Footer Design - Clean Professional</h3>
          </div>
          <CleanFooterPreview />
        </div>
      </section>

      {/* Divider */}
      <div className="bg-gray-300 h-px mx-4 my-8"></div>

      {/* Direction 2: Modern Interactive */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-3xl font-bold text-blue-800 mb-2">Direction 2: Modern Interactive</h2>
            <p className="text-blue-700 mb-4">Creates engaging experience with interactive elements and rich hover effects.</p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">✅ High Engagement</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">✅ Modern Appeal</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">✅ Interactive</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">⏱️ 3-4 weeks</span>
            </div>
          </div>
        </div>

        {/* Modern Footer */}
        <div className="mb-12">
          <div className="max-w-7xl mx-auto px-4 mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Footer Design - Modern Interactive</h3>
          </div>
          <ModernFooterPreview />
        </div>
      </section>

      {/* Comparison & Next Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Next Steps</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border border-green-200 rounded-lg p-6 bg-green-50">
              <h3 className="text-xl font-bold text-green-800 mb-4">Recommended: Direction 1</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>✅ Aligns with 50-year heritage</li>
                <li>✅ Faster implementation</li>
                <li>✅ Better Core Web Vitals</li>
                <li>✅ Professional trust factor</li>
                <li>✅ Easier to maintain</li>
              </ul>
            </div>
            
            <div className="border border-blue-200 rounded-lg p-6 bg-blue-50">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Alternative: Direction 2</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>✅ Modern, innovative feel</li>
                <li>✅ Higher user engagement</li>
                <li>✅ Memorable experience</li>
                <li>✅ Stands out from competitors</li>
                <li>⚠️ Requires more dependencies</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Ready to Choose?</h4>
            <p className="text-gray-700 mb-4">
              Both directions address your current issues. Direction 1 is recommended for faster implementation 
              while maintaining your established reputation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium">
                Choose Direction 1: Clean Professional
              </div>
              <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
                Choose Direction 2: Modern Interactive
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
