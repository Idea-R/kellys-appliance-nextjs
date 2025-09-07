import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { getCompanyInfo } from '@/lib/content';

interface LayoutProps {
  children: React.ReactNode;
}

const companyInfo = getCompanyInfo();

type NavChild = { name: string; href: string }
type NavItem = { name: string; href: string; external?: boolean; children?: NavChild[] }

const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/authorized-service',
    children: [
      { name: 'Refrigerator Repair', href: '/services/refrigerator-repair' },
      { name: 'Oven Repair', href: '/services/oven-repair' },
      { name: 'Washer & Dryer Repair', href: '/services/washer-dryer-repair' },
      { name: 'Dishwasher Repair', href: '/services/dishwasher-repair' },
    ]
  },
  { 
    name: 'Service Areas', 
    href: '/service-locations',
    children: [
      { name: 'Santa Rosa', href: '/service-locations/santa-rosa' },
      { name: 'Petaluma', href: '/service-locations/petaluma' },
      { name: 'Rohnert Park', href: '/service-locations/rohnert-park' },
      { name: 'Sonoma', href: '/service-locations/sonoma' },
      { name: 'Sebastopol', href: '/service-locations/sebastopol' },
      { name: 'Windsor', href: '/service-locations/windsor' },
      { name: 'Cotati', href: '/service-locations/cotati' },
      { name: 'Healdsburg', href: '/service-locations/healdsburg' },
      { name: 'Forestville', href: '/service-locations/forestville' },
      { name: 'Guerneville', href: '/service-locations/guerneville' },
      { name: 'Glen Ellen', href: '/service-locations/glen-ellen' },
      { name: 'Bodega Bay', href: '/service-locations/bodega-bay' },
      { name: 'Napa', href: '/service-locations/napa' },
      { name: 'San Rafael', href: '/service-locations/san-rafael' },
      { name: 'Novato', href: '/service-locations/novato' },
      { name: 'Mill Valley', href: '/service-locations/mill-valley' },
      { name: 'Sausalito', href: '/service-locations/sausalito' },
      { name: 'Tiburon', href: '/service-locations/tiburon' },
      { name: 'Corte Madera', href: '/service-locations/corte-madera' },
      { name: 'Dillon Beach', href: '/service-locations/dillon-beach' },
    ]
  },
  { 
    name: 'About Us', 
    href: '/about-us',
    children: [
      { name: 'Our Team', href: '/about-us/our-team' },
    ]
  },
  { name: 'Pricing', href: '/pricing' },
  { 
    name: 'Resources',
    href: '/resources',
    children: [
      { name: 'Blog', href: '/blog' },
      { name: 'Referrals', href: '/referrals' },
      { name: 'Partner Referrals', href: '/resources/referrals' },
      { name: 'Diamond Certified', href: '/diamond-certified' },
      { name: 'Model Number Guide', href: '/resources/where-is-my-model-number' },
    ]
  },
  { name: 'Contact', href: '/contact' },
];

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-lg">
          {/* Top Bar */}
          <div className="bg-green-700 text-white py-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <PhoneIcon className="h-4 w-4 mr-1" />
                    <a href={`tel:${companyInfo.phone}`} className="hover:text-blue-200" data-analytics-label="topbar_call">
                      {companyInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-4 w-4 mr-1" />
                    <span>{companyInfo.address.city}, {companyInfo.address.state}</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>{companyInfo.hours}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-semibold">{companyInfo.guarantee}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/kellys-appliance-logo.webp"
                    alt={companyInfo.name}
                    width={200}
                    height={60}
                    className="h-12 w-auto"
                  />
                </Link>
              </div>
              
              <nav className="hidden md:flex space-x-8">
                {navigation.map((item) => (
                  <div key={item.name} className="relative group">
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium"
                        data-analytics-label={`nav_${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium"
                        data-analytics-label={`nav_${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.name}
                      </Link>
                    )}
                    {item.children && (
                      <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="flex items-center space-x-4">
                <Link
                  href="/schedule-prep"
                  className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
                  data-analytics-label="header_book"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="page-transition">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1">
                <Image
                  src="/images/kellys-appliance-logo.webp"
                  alt={companyInfo.name}
                  width={200}
                  height={60}
                  className="h-12 w-auto mb-4"
                />
                <p className="text-gray-300 mb-4">
                  Professional appliance repair services in the Bay Area since 1975.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <PhoneIcon className="h-4 w-4 mr-2" />
                    <a href={`tel:${companyInfo.phone}`} className="hover:text-blue-400">
                      {companyInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-start">
                    <MapPinIcon className="h-4 w-4 mr-2 mt-0.5" />
                    <div>
                      <div>{companyInfo.address.street}</div>
                      <div>{companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zip}</div>
                    </div>
                  </div>
                </div>
                {/* Locally Owned & Operated badge under address */}
                <div className="mt-4">
                  <a href="https://locallyownedandoperated.org/" target="_blank" rel="noopener noreferrer" aria-label="Locally Owned & Operated">
                    <Image src="/images/CertifiedBanner.svg" alt="Certified Local Business" width={200} height={34} style={{ height: 'auto' }} />
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/services/refrigerator-repair" className="text-gray-300 hover:text-green-400">Refrigerator Repair</Link></li>
                  <li><Link href="/services/oven-repair" className="text-gray-300 hover:text-green-400">Oven Repair</Link></li>
                  <li><Link href="/services/washer-dryer-repair" className="text-gray-300 hover:text-green-400">Washer & Dryer Repair</Link></li>
                  <li><Link href="/services/dishwasher-repair" className="text-gray-300 hover:text-green-400">Dishwasher Repair</Link></li>
                </ul>
              </div>

              {/* Service Areas */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/service-locations/sonoma-county" className="text-gray-300 hover:text-green-400">Sonoma County</Link></li>
                  <li><Link href="/service-locations/marin-county" className="text-gray-300 hover:text-green-400">Marin County</Link></li>
                  <li><Link href="/service-locations/napa-county" className="text-gray-300 hover:text-green-400">Napa County</Link></li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about-us" className="text-gray-300 hover:text-green-400">About Us</Link></li>
                  <li><Link href="/about-us/our-team" className="text-gray-300 hover:text-green-400">Our Team</Link></li>
                  <li><Link href="/pricing" className="text-gray-300 hover:text-green-400">Pricing</Link></li>
                  <li><Link href="/referrals" className="text-gray-300 hover:text-green-400">Referrals</Link></li>
                  <li><Link href="/blog" className="text-gray-300 hover:text-green-400">Blog</Link></li>
                  <li><Link href="/contact" className="text-gray-300 hover:text-green-400">Contact</Link></li>
                  <li><Link href="/privacy-policy" className="text-gray-300 hover:text-green-400">Privacy Policy</Link></li>
                </ul>
                <div className="flex items-center gap-3 mt-6">
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-80" data-analytics-label="footer_social_facebook">
                    <Image src="/images/icon-facebook.svg" alt="Facebook" width={28} height={28} />
                  </a>
                  <a href="https://www.yelp.com/biz/kellys-appliance-center-rohnert-park" target="_blank" rel="noopener noreferrer" aria-label="Yelp" className="hover:opacity-80" data-analytics-label="footer_social_yelp">
                    <Image src="/images/yelp-trans.png" alt="Yelp" width={28} height={28} />
                  </a>
                  <a href="https://www.diamondcertified.org/" target="_blank" rel="noopener noreferrer" aria-label="Diamond Certified" className="hover:opacity-80" data-analytics-label="footer_social_diamond">
                    <Image src="/images/diamond-certified-logo.png" alt="Diamond Certified" width={28} height={28} />
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80" data-analytics-label="footer_social_instagram">
                    <Image src="/images/icon-instagram.svg" alt="Instagram" width={28} height={28} />
                  </a>
                  <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="hover:opacity-80" data-analytics-label="footer_social_x">
                    <Image src="/images/icon-twitter-x.svg" alt="Twitter X" width={28} height={28} />
                  </a>
                </div>
              </div>
            </div>

            {/* Memberships and Certifications */}
            <div className="border-t border-gray-800 mt-8 pt-8">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold mb-4 text-white">Our Memberships & Certifications</h3>
                <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
                  <a href="https://www.diamondcertified.org/report/kellys-appliance-center/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-md p-3">
                    <Image src="/images/diamond-cert-opt.jpg" alt="Diamond Certified" width={180} height={80} className="h-16 w-auto" />
                  </a>
                  <a href="https://rpchamber.org/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-md p-3">
                    <Image src="/images/rp-chamber-logo.webp" alt="Rohnert Park Chamber of Commerce" width={180} height={80} className="h-16 w-auto" />
                  </a>
                  <a href="https://www.windsorchamber.com/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-md p-3">
                    <Image src="/images/windsor-chamber-logo.webp" alt="Windsor Chamber of Commerce" width={180} height={80} className="h-16 w-auto" />
                  </a>
                  <a href="https://www.novatochamber.com/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-md p-3">
                    <Image src="/images/Novato-Chamber.webp" alt="Novato Chamber of Commerce" width={180} height={80} className="h-16 w-auto" />
                  </a>
                </div>
              </div>
              <div className="text-center text-sm text-gray-400">
                <p>&copy; 2025 {companyInfo.name}. All rights reserved.</p>
                <p className="mt-2">
                  <Link href="/privacy-policy" className="hover:text-green-400 transition-colors">Privacy Policy</Link>
                  {' • '}
                  <a href={`tel:${companyInfo.phone}`} className="hover:text-green-400 transition-colors" data-analytics-label="footer_call">{companyInfo.phone}</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
    </div>
  );
}
