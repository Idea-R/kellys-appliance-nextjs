import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';

export const metadata = {
  title: "Appliance Parts | OEM Parts Hotline (MPC)",
  description:
    'Order OEM appliance parts with expert help. Call the MyPartsCenter hotline 800-371-3882 for water filters, air filters, dryer belts, hoses, venting, and more.',
  alternates: {
    canonical: '/services/parts',
  },
};

const mpcHotline = '800-371-3882';

const popularParts: Array<{ name: string; blurb: string }> = [
  { name: 'Refrigerator Water Filters', blurb: 'OEM filters for clean, safe drinking water' },
  { name: 'Fridge Air Filters', blurb: 'Helps reduce odors and keep air fresh' },
  { name: 'Dryer Vent Hose', blurb: 'UL-listed venting to maintain airflow and safety' },
  { name: 'Dryer Belt', blurb: 'OEM belts for proper drum drive and long life' },
  { name: 'Washer Hoses', blurb: 'Stainless braided or OEM replacements' },
  { name: 'Dishwasher Drain Hose', blurb: 'Correct diameter and length for your model' },
  { name: 'Range Igniter', blurb: 'Genuine parts for reliable ignition' },
  { name: 'Ice Maker Kits', blurb: 'OEM kits for compatible refrigerator models' },
];

export default function PartsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Appliance Parts</h1>
              <p className="text-lg opacity-95 mb-6">
                OEM parts with expert guidance. Our MyPartsCenter hotline connects you directly with parts specialists who verify the right part for your exact model.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${mpcHotline}`}
                  className="inline-flex items-center justify-center bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  aria-label={`Call MyPartsCenter hotline at ${mpcHotline}`}
                >
                  Call {mpcHotline}
                </a>
                <Link
                  href="#popular"
                  className="inline-flex items-center justify-center bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
                >
                  Browse Popular Parts
                </Link>
              </div>
              <p className="text-sm mt-4 text-white/90">
                Hotline hours: Mon–Sat. Agents can upsell related items and maximize quarterly rebates while ensuring OEM quality.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-3">How It Works</h2>
              <ol className="list-decimal list-inside space-y-2 text-white/95">
                <li>Find your model number (see Resources → Model Number Guide).</li>
                <li>Call <span className="font-semibold">{mpcHotline}</span> and describe symptoms or the part needed.</li>
                <li>Specialist confirms compatibility and places your order.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Popular DIY Parts */}
      <section id="popular" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular DIY Parts</h2>
            <p className="text-gray-600">Fast-moving items homeowners request most</p>
          </div>

          <div
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2"
            role="region"
            aria-label="Popular parts carousel"
          >
            {popularParts.map((item, idx) => (
              <div
                key={idx}
                className="min-w-[240px] snap-start bg-white rounded-xl shadow p-5 border border-gray-100 flex flex-col"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{item.blurb}</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={`tel:${mpcHotline}`}
                    className="inline-flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700 transition-colors"
                    aria-label={`Call to order ${item.name}`}
                  >
                    Call to Order
                  </a>
                  <Link
                    href="#why-oem"
                    className="inline-flex items-center justify-center px-4 py-2 rounded font-semibold text-green-700 hover:text-green-800"
                  >
                    Why OEM?
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why OEM / Benefits */}
      <section id="why-oem" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Order Through Our MPC Hotline?</h2>
              <ul className="space-y-3 text-gray-700">
                <li>OEM parts matched to your exact model — fewer returns, correct fit.</li>
                <li>Expert verification of symptoms to ensure you get the right part the first time.</li>
                <li>Advice on related accessories (water lines, clamps, fittings) to complete the job.</li>
                <li>Quarterly rebate program that supports our local service business.</li>
              </ul>
            </div>
            <aside className="bg-green-50 rounded-xl p-6 border border-green-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Need Help Finding Your Model Number?</h3>
              <p className="text-gray-700 mb-4">Use our quick guide to locate model/serial tags.</p>
              <Link
                href="/resources/where-is-my-model-number"
                className="inline-flex items-center justify-center bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                View Model Number Guide
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-3">Ready to Order Parts?</h2>
          <p className="text-lg mb-6">Call our MyPartsCenter hotline for fast, accurate ordering.</p>
          <a
            href={`tel:${mpcHotline}`}
            className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            aria-label={`Call MyPartsCenter hotline at ${mpcHotline}`}
          >
            Call {mpcHotline}
          </a>
        </div>
      </section>
    </Layout>
  );
}


