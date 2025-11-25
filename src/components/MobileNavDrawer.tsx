"use client"
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { counties, CountyKey } from '@/lib/locations'
import { ChevronDown } from 'lucide-react'

export default function MobileNavDrawer() {
  const [open, setOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement | null>(null)
  const [expandedCounties, setExpandedCounties] = useState<Record<string, boolean>>({})

  const toggleCounty = (countyKey: string, e: React.MouseEvent) => {
    e.stopPropagation() // Prevent closing the drawer
    setExpandedCounties(prev => ({
      ...prev,
      [countyKey]: !prev[countyKey]
    }))
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (open) {
      drawerRef.current?.focus()
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [open])

  // Tracking: emit open/close events to dataLayer
  useEffect(() => {
    const dl = (window as unknown as { dataLayer?: Array<Record<string, unknown>> }).dataLayer
    dl?.push({ event: open ? 'menu_open' : 'menu_close', menu: 'mobile_drawer' })
  }, [open])

  return (
    <>
      {/* Edge tab trigger - Top left, quarter way down */}
      <button
        aria-label="Open navigation"
        aria-controls="mobile-drawer"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="fixed left-0 top-[25vh] md:hidden z-[55] bg-green-700 text-white px-4 py-3 rounded-r-lg shadow-xl font-semibold border-2 border-white/20 hover:bg-green-800 transition-colors"
      >
        Menu
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      {/* Drawer */}
      <aside
        ref={drawerRef}
        tabIndex={-1}
        className={`fixed left-0 top-0 h-full w-auto min-w-[240px] max-w-[min(320px,50vw)] bg-gradient-to-br from-gray-50 to-white z-[61] md:hidden motion-safe:transition-transform motion-safe:duration-300 ease-out shadow-2xl overflow-y-auto ${open ? 'translate-x-0' : '-translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        id="mobile-drawer"
      >
        <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between bg-green-600 text-white">
          <span className="font-bold text-lg">Navigation</span>
          <button onClick={() => setOpen(false)} className="rounded px-3 py-1 text-sm bg-white/20 hover:bg-white/30 backdrop-blur-sm motion-safe:transition-colors" data-analytics-label="drawer_close">Close</button>
        </div>

        <nav className="p-3 space-y-1" onClick={(e) => {
          // Close drawer when clicking any link
          if ((e.target as HTMLElement).tagName === 'A') {
            setOpen(false)
          }
        }}>
          <ul className="space-y-0.5 text-gray-800">
            <li>
              <Link href="/" className="block px-3 py-2 rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors font-medium" data-analytics-label="drawer_home">Home</Link>
            </li>
            <li>
              <div className="px-3 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">Services</div>
              <ul className="ml-2 space-y-0.5 text-sm">
                <li><Link href="/services" className="block px-3 py-1.5 rounded hover:bg-green-50 hover:text-green-700 transition-colors font-medium" data-analytics-label="drawer_services_all">All Services</Link></li>
                <li><Link href="/services/refrigerator-repair" className="block px-3 py-1.5 rounded hover:bg-green-50 hover:text-green-700 transition-colors" data-analytics-label="drawer_services_refrigerator">Refrigerator Repair</Link></li>
                <li><Link href="/services/oven-repair" className="block px-3 py-1.5 rounded hover:bg-green-50 hover:text-green-700 transition-colors" data-analytics-label="drawer_services_oven">Oven Repair</Link></li>
                <li><Link href="/services/washer-dryer-repair" className="block px-3 py-1.5 rounded hover:bg-green-50 hover:text-green-700 transition-colors" data-analytics-label="drawer_services_washer_dryer">Washer & Dryer Repair</Link></li>
                <li><Link href="/services/dishwasher-repair" className="block px-3 py-1.5 rounded hover:bg-green-50 hover:text-green-700 transition-colors" data-analytics-label="drawer_services_dishwasher">Dishwasher Repair</Link></li>
                <li><Link href="/services/parts" className="block px-3 py-1.5 rounded hover:bg-green-50 hover:text-green-700 transition-colors" data-analytics-label="drawer_services_parts">Appliance Parts</Link></li>
                <li><Link href="/services/virtual" className="block px-3 py-1.5 rounded hover:bg-green-50 hover:text-green-700 transition-colors" data-analytics-label="drawer_services_virtual">Virtual Service Call</Link></li>
                <li><Link href="/authorized-service" className="block px-3 py-1.5 rounded hover:bg-green-50 hover:text-green-700 transition-colors" data-analytics-label="drawer_services_authorized">Authorized Service</Link></li>
              </ul>
            </li>
            <li>
              <div className="px-3 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide mt-2">Service Areas</div>
              <ul className="ml-2 space-y-0.5 text-sm">
                <li><Link href="/service-locations" className="block px-3 py-1.5 rounded hover:bg-green-50 hover:text-green-700 transition-colors font-medium" data-analytics-label="drawer_service_areas_all">All Service Areas</Link></li>
                {(Object.keys(counties) as CountyKey[]).map((countyKey) => {
                  const county = counties[countyKey]
                  const isExpanded = expandedCounties[countyKey]
                  return (
                    <li key={county.slug}>
                      <div className="flex items-center">
                        <Link 
                          href={`/service-locations/${county.slug}`} 
                          className="flex-1 block px-3 py-1.5 rounded-l hover:bg-green-50 hover:text-green-700 transition-colors" 
                          data-analytics-label={`drawer_county_${county.slug}`}
                        >
                          {county.name}
                        </Link>
                        <button
                          onClick={(e) => toggleCounty(countyKey, e)}
                          className="px-2 py-1.5 rounded-r hover:bg-green-50 hover:text-green-700 transition-colors"
                          aria-expanded={isExpanded}
                          aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${county.name} cities`}
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      {/* Expandable city list */}
                      <ul 
                        className={`ml-4 mt-1 space-y-0.5 overflow-hidden transition-all duration-200 ${
                          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        {county.cities.map((city) => (
                          <li key={city.slug}>
                            <Link 
                              href={`/service-locations/${city.slug}`} 
                              className="block px-3 py-1 text-xs text-gray-600 rounded hover:bg-green-50 hover:text-green-700 transition-colors" 
                              data-analytics-label={`drawer_city_${city.slug}`}
                            >
                              {city.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )
                })}
              </ul>
            </li>
            <li className="pt-2 border-t border-gray-200 mt-2">
              <div className="px-3 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">About</div>
              <ul className="ml-2 space-y-0.5 text-sm">
                <li><Link href="/about-us" className="block px-3 py-1.5 rounded hover:bg-green-50 hover:text-green-700 transition-colors" data-analytics-label="drawer_about">About Us</Link></li>
                <li><Link href="/about-us/our-team" className="block px-3 py-1.5 rounded hover:bg-green-50 hover:text-green-700 transition-colors" data-analytics-label="drawer_about_team">Our Team</Link></li>
              </ul>
            </li>
            <li><Link href="/pricing" className="block px-3 py-2 rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors font-medium" data-analytics-label="drawer_pricing">Pricing</Link></li>
            <li>
              <div className="px-3 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide mt-2">Resources</div>
              <ul className="ml-2 space-y-0.5 text-sm">
                <li><Link href="/resources" className="block px-3 py-1.5 rounded hover:bg-green-50 hover:text-green-700 transition-colors font-medium" data-analytics-label="drawer_resources_all">All Resources</Link></li>
                <li><Link href="/blog" className="block px-3 py-1.5 rounded hover:bg-green-50 hover:text-green-700 transition-colors" data-analytics-label="drawer_blog">Blog</Link></li>
                <li><Link href="/referrals" className="block px-3 py-1.5 rounded hover:bg-green-50 hover:text-green-700 transition-colors" data-analytics-label="drawer_referrals">Referrals</Link></li>
                <li><Link href="/resources/referrals" className="block px-3 py-1.5 rounded hover:bg-green-50 hover:text-green-700 transition-colors" data-analytics-label="drawer_partner_referrals">Partner Referrals</Link></li>
                <li><Link href="/resources/where-is-my-model-number" className="block px-3 py-1.5 rounded hover:bg-green-50 hover:text-green-700 transition-colors" data-analytics-label="drawer_model_number">Model Number Guide</Link></li>
              </ul>
            </li>
            <li className="pt-2 border-t border-gray-200 mt-2">
              <Link href="/contact" className="block px-3 py-2 rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors font-medium" data-analytics-label="drawer_contact">Contact</Link>
            </li>
            <li><Link href="/diamond-certified" className="block px-3 py-2 rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors font-medium" data-analytics-label="drawer_diamond">Diamond Certified</Link></li>
          </ul>
        </nav>
      </aside>
    </>
  )
}


