"use client"
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { counties } from '@/lib/locations'

export default function MobileNavDrawer() {
  const [open, setOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement | null>(null)

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
      {/* Edge tab trigger */}
      <button
        aria-label="Open navigation"
        aria-controls="mobile-drawer"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="fixed left-0 top-1/2 -translate-y-1/2 md:hidden z-[55] bg-green-600 text-white px-3 py-2 rounded-r-lg shadow-lg font-semibold"
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
        className={`fixed left-0 top-0 h-full w-[85%] max-w-xs bg-white z-[61] md:hidden transition-transform duration-300 ease-out shadow-2xl overflow-y-auto ${open ? 'translate-x-0' : '-translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        id="mobile-drawer"
      >
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <span className="font-bold text-gray-900">Navigation</span>
          <button onClick={() => setOpen(false)} className="rounded px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200" data-analytics-label="drawer_close">Close</button>
        </div>

        <nav className="p-4 space-y-4">
          <ul className="space-y-2 text-gray-800">
            <li>
              <Link href="/" className="block px-2 py-2 rounded hover:bg-gray-100" data-analytics-label="drawer_home">Home</Link>
            </li>
            <li>
              <Link href="/services" className="block px-2 py-2 rounded hover:bg-gray-100" data-analytics-label="drawer_services">Services</Link>
              <ul className="mt-1 ml-3 space-y-1 text-sm">
                <li><Link href="/services/refrigerator-repair" className="block px-2 py-1 rounded hover:bg-gray-100" data-analytics-label="drawer_services_refrigerator">Refrigerator Repair</Link></li>
                <li><Link href="/services/oven-repair" className="block px-2 py-1 rounded hover:bg-gray-100" data-analytics-label="drawer_services_oven">Oven Repair</Link></li>
                <li><Link href="/services/washer-dryer-repair" className="block px-2 py-1 rounded hover:bg-gray-100" data-analytics-label="drawer_services_washer_dryer">Washer & Dryer Repair</Link></li>
                <li><Link href="/services/dishwasher-repair" className="block px-2 py-1 rounded hover:bg-gray-100" data-analytics-label="drawer_services_dishwasher">Dishwasher Repair</Link></li>
                <li><Link href="/services/virtual" className="block px-2 py-1 rounded hover:bg-gray-100" data-analytics-label="drawer_services_virtual">Virtual Service Call</Link></li>
              </ul>
            </li>
            <li>
              <Link href="/service-locations" className="block px-2 py-2 rounded hover:bg-gray-100" data-analytics-label="drawer_service_areas">Service Areas</Link>
              <ul className="mt-1 ml-3 space-y-1 text-sm">
                {Object.values(counties).map((c) => (
                  <li key={c.slug}><Link href={`/service-locations/${c.slug}`} className="block px-2 py-1 rounded hover:bg-gray-100" data-analytics-label={`drawer_county_${c.slug}`}>{c.name}</Link></li>
                ))}
              </ul>
            </li>
            <li><Link href="/about-us" className="block px-2 py-2 rounded hover:bg-gray-100" data-analytics-label="drawer_about">About Us</Link></li>
            <li><Link href="/pricing" className="block px-2 py-2 rounded hover:bg-gray-100" data-analytics-label="drawer_pricing">Pricing</Link></li>
            <li><Link href="/resources" className="block px-2 py-2 rounded hover:bg-gray-100" data-analytics-label="drawer_resources">Resources</Link></li>
            <li><Link href="/contact" className="block px-2 py-2 rounded hover:bg-gray-100" data-analytics-label="drawer_contact">Contact</Link></li>
            <li><Link href="/diamond-certified" className="block px-2 py-2 rounded hover:bg-gray-100" data-analytics-label="drawer_diamond">Diamond Certified</Link></li>
          </ul>
        </nav>
      </aside>
    </>
  )
}


