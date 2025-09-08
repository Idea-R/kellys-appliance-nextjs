import React from 'react'
import Layout from '@/components/Layout'
import { getCompanyInfo } from '@/lib/content'

const companyInfo = getCompanyInfo()

export const metadata = {
  title: "Virtual Service Call | Kelly's Appliance Center",
  description: 'Book a 15-minute video call with a senior service technician for $40. Quick troubleshooting, parts verification, and next steps.',
}

export default function VirtualServicePage() {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Virtual Service Call</h1>
          <p className="text-xl mb-6">$40 for a 15-minute video call with a senior technician</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${companyInfo.phone}`} className="btn-fill inline-flex items-center justify-center px-8 py-4 rounded-lg text-xl font-semibold">Call {companyInfo.phone}</a>
            <a href="https://booking.rossware.com/schedule/4588" target="_blank" rel="noopener noreferrer" className="btn-fill alt inline-flex items-center justify-center px-8 py-4 rounded-lg text-xl font-semibold">Book Now</a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What you get</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Live troubleshooting and DIY guidance</li>
                <li>Model/serial lookup and part verification</li>
                <li>Recommendation: quick fix vs. onsite repair vs. replace</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How to prepare</h3>
              <ol className="list-decimal pl-5 text-gray-700 space-y-1">
                <li>Have your model/serial number ready if available</li>
                <li>Ensure good lighting and a stable camera view</li>
                <li>Be near the appliance if safe to operate</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">When a virtual call is perfect</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200"><strong className="text-gray-900">Intermittent issues</strong><p className="text-gray-700 mt-2">Help capture symptoms and narrow down causes.</p></div>
            <div className="bg-white rounded-xl p-6 border border-gray-200"><strong className="text-gray-900">Before we roll a truck</strong><p className="text-gray-700 mt-2">Verify parts or simple resets to save time and cost.</p></div>
            <div className="bg-white rounded-xl p-6 border border-gray-200"><strong className="text-gray-900">DIY friendly fixes</strong><p className="text-gray-700 mt-2">Get quick guidance on safe, simple checks.</p></div>
          </div>
          <div className="text-center mt-8">
            <a href="https://booking.rossware.com/schedule/4588" target="_blank" rel="noopener noreferrer" className="btn-fill inline-flex items-center justify-center px-8 py-4 rounded-lg text-xl font-semibold">Book Virtual Call</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}


