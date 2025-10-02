'use client'

import { useState } from 'react'
import Layout from '@/components/Layout'
import { ChevronDownIcon, ChevronUpIcon, CameraIcon, DocumentTextIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { getCompanyInfo } from '@/lib/content'

const companyInfo = getCompanyInfo()

export default function ModelNumberGuidePage() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  const appliances = [
    {
      id: 'refrigerator',
      title: '📱 Refrigerators',
      sections: [
        {
          subtitle: 'Standard Top-Freezer Models',
          locations: [
            'Inside fresh food compartment - Upper left or right side wall (most common)',
            'Behind or under crisper drawers',
            'On the ceiling of fresh food compartment',
          ]
        },
        {
          subtitle: 'French Door & Side-by-Side Models',
          locations: [
            'Inside fresh food compartment - Upper right side wall (most common)',
            'Behind crisper drawers',
            'Under crisper drawers',
            'On door frame/gasket edge',
          ]
        },
        {
          subtitle: 'Additional Locations',
          locations: [
            'Behind the toe kick/grille at bottom (remove screws)',
            'Back exterior wall (requires moving unit)',
            'Inside freezer section on side wall',
          ]
        },
      ],
      brandNotes: 'Samsung: Lower left exterior + inside right wall above top shelf | LG: Older models on right side, newer on left | Sub-Zero: Inside door near top hinge | GE: Bottom floor or behind crisper drawers',
    },
    {
      id: 'range',
      title: '🍳 Ranges & Ovens',
      sections: [
        {
          subtitle: 'Freestanding Ranges',
          locations: [
            'Behind oven door - Front frame at lower left edge (most common)',
            'Storage drawer area - Remove drawer, look on frame',
            'Under cooktop - Lift cooktop on electric models',
            '⭐ Standard ranges: Metal tag behind control panel that can be turned up',
          ]
        },
        {
          subtitle: 'Wall Ovens',
          locations: [
            'Inside oven on front frame at lower-left edge (door open)',
            'Behind control panel (some models)',
            'On left side trim when door open',
          ]
        },
        {
          subtitle: 'Professional Ranges (Wolf, Viking, Thermador)',
          locations: [
            'Wolf: Bottom of control panel at far right | Under left-hand burner pan (R-Series)',
            'Viking: Remove left rear burner bowl, look with flashlight | Open oven door frame',
            'Thermador: Behind oven door on lower frame',
            'BlueStar: Inside oven on left door frame',
          ]
        },
      ],
      brandNotes: 'Professional ranges often require lifting burner pans or removing parts. Always use caution when accessing.',
    },
    {
      id: 'dishwasher',
      title: '🍽️ Dishwashers',
      sections: [
        {
          subtitle: 'Most Common Locations',
          locations: [
            'Door edge - Left or right side of door frame (most common)',
            'Inside door - Along interior side/top',
            'Right side of tub - Inside on right wall',
            'Top of door opening - On tub frame',
            'Under control panel - Beneath controls',
          ]
        },
      ],
      brandNotes: 'Bosch/Siemens: Left door side (E-Nr) | Miele: Door frame (starts with letter) | LG: Right door or under control panel | Cove: Inside left side',
    },
    {
      id: 'washer',
      title: '👕 Washing Machines',
      sections: [
        {
          subtitle: 'Front-Load Washers',
          locations: [
            'Inside door pocket - On rim around door gasket (most common)',
            'Door frame - Visible when door fully open',
            'Behind door - On wash compartment face',
            'Exterior sides - Near bottom',
          ]
        },
        {
          subtitle: 'Top-Load Washers',
          locations: [
            'Under the lid - On back of tub opening (most common)',
            'Under the lid - On frame near back',
            'Inside lid - Sticker on underside',
            'Back exterior - Rear panel',
          ]
        },
      ],
      brandNotes: 'Whirlpool front-load: Inside door pocket | Samsung/LG: Front door or back panel',
    },
    {
      id: 'dryer',
      title: '🌀 Dryers',
      sections: [
        {
          subtitle: 'All Dryer Types',
          locations: [
            'Door opening area - Top edge or front frame (most common)',
            'Inside door frame - On rim when open',
            'Behind door - On panel around drum opening',
            'Rear panel - Back of unit',
            'Side panels - Left or right exterior',
          ]
        },
      ],
      brandNotes: 'LG/Samsung: Front panel or rear | Whirlpool/Maytag: Door opening rim or behind door',
    },
    {
      id: 'microwave',
      title: '📡 Microwaves',
      sections: [
        {
          subtitle: 'Countertop & Over-the-Range',
          locations: [
            'Left interior wall - Inside microwave (most common)',
            'Right interior wall - Some models',
            'Under the vent - Remove vent cover below controls (OTR)',
            'Behind door - Door frame area',
            'Bottom exterior - Underside near back (OTR)',
          ]
        },
      ],
      brandNotes: 'Most brands place tag on left interior wall. OTR models may have tag under vent cover.',
    },
    {
      id: 'cooktop',
      title: '🔥 Cooktops',
      sections: [
        {
          subtitle: 'Built-In Cooktops',
          locations: [
            'Underneath the cooktop - Requires lifting unit or access from below',
            'On underside of burner box',
            'Side or back edge of unit',
          ]
        },
      ],
      brandNotes: 'May require partial removal from countertop. Professional brands often have unique locations.',
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Where Is My Model Number?</h1>
          <p className="text-xl opacity-95 max-w-3xl mb-6">
            A complete guide to finding model and serial numbers on all residential appliances
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm">Essential for repairs</span>
            <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm">Parts ordering</span>
            <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm">Warranty service</span>
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-12 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">💡 Quick Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-600">
              <CameraIcon className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Take a Photo</h3>
              <p className="text-gray-600 text-sm">
                <strong>Can&apos;t find the model number?</strong> Take a clear photo of the entire appliance and any visible labels. 
                This helps our technicians identify your model and prepare for service!
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-600">
              <DocumentTextIcon className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Check Paperwork</h3>
              <p className="text-gray-600 text-sm">
                Look for your <strong>user manual or purchase receipt</strong> - they often list the model number. 
                Many people keep these in a kitchen drawer or file.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-purple-600">
              <PhoneIcon className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
              <p className="text-gray-600 text-sm">
                Call us at <a href={`tel:${companyInfo.phone}`} className="text-green-600 font-semibold hover:underline">{companyInfo.phone}</a> and 
                we&apos;ll walk you through finding it for your specific appliance brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Expandable Sections */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-gray-600 text-lg">
              Click on any appliance type below for detailed location instructions
            </p>
          </div>

          <div className="space-y-4">
            {appliances.map((appliance) => (
              <div key={appliance.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <button
                  onClick={() => toggleSection(appliance.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h2 className="text-xl font-bold text-gray-900">{appliance.title}</h2>
                  {openSection === appliance.id ? (
                    <ChevronUpIcon className="h-6 w-6 text-green-600" />
                  ) : (
                    <ChevronDownIcon className="h-6 w-6 text-gray-400" />
                  )}
                </button>

                {openSection === appliance.id && (
                  <div className="px-6 pb-6 space-y-6">
                    {appliance.sections.map((section, idx) => (
                      <div key={idx}>
                        <h3 className="font-semibold text-gray-900 mb-3 text-lg">{section.subtitle}</h3>
                        <ul className="space-y-2">
                          {section.locations.map((location, locIdx) => (
                            <li key={locIdx} className="flex items-start">
                              <span className="text-green-600 mr-2 mt-1">✓</span>
                              <span className="text-gray-700">{location}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {appliance.brandNotes && (
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                        <p className="text-sm font-semibold text-blue-900 mb-1">Brand-Specific Notes:</p>
                        <p className="text-sm text-blue-800">{appliance.brandNotes}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Record Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📝 What to Record</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">1.</span>
                <div>
                  <strong className="text-gray-900">Complete Model Number</strong>
                  <p className="text-gray-600 text-sm">All letters and numbers (e.g., LAT1000AAE, WRF555SDFZ)</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">2.</span>
                <div>
                  <strong className="text-gray-900">Complete Serial Number</strong>
                  <p className="text-gray-600 text-sm">Usually starts with letters followed by numbers</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">3.</span>
                <div>
                  <strong className="text-gray-900">Brand/Manufacturer Name</strong>
                  <p className="text-gray-600 text-sm">Whirlpool, GE, Samsung, LG, Wolf, Sub-Zero, etc.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">4.</span>
                <div>
                  <strong className="text-gray-900">Take a Clear Photo</strong>
                  <p className="text-gray-600 text-sm">Photo of entire tag with flash for best reference</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="py-12 bg-yellow-50 border-t border-b border-yellow-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">⚠️ Safety First</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-700"><strong>Electrical Appliances:</strong> Disconnect power before accessing any parts</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-700"><strong>Gas Appliances:</strong> Turn off gas before moving units</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-700"><strong>Under Warranty?</strong> Don&apos;t disassemble - contact manufacturer first</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-700"><strong>Heavy Appliances:</strong> Use proper lifting techniques or get help</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Can&apos;t Find It?</h2>
          <p className="text-xl mb-8 opacity-95">
            Our parts department can help you locate your model number and get what you need
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              Call {companyInfo.phone}
            </a>
            <Link
              href="/services/parts"
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-800 transition-colors border-2 border-white"
            >
              Order Parts →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}


