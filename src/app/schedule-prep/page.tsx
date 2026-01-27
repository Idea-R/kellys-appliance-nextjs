import Link from 'next/link'
import Layout from '@/components/Layout'

export const metadata = {
  title: 'Before Requesting an Appointment',
  description: 'Checklist of what to have ready before requesting an appointment: model/serial, availability, issue description, and photos.',
  alternates: {
    canonical: '/schedule-prep',
  },
}

export default function SchedulePrepPage() {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-3">Before You Request an Appointment</h1>
          <p className="text-lg opacity-95 max-w-3xl">Have these details handy to speed up your appointment request and diagnosis.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Scheduling Checklist</h2>
              <ul className="space-y-3 text-gray-800">
                <li>• Model and Serial Number (see <Link href="/resources/where-is-my-model-number" className="text-green-700 underline">Where is my model number?</Link>)</li>
                <li>• Appliance Type and Brand</li>
                <li>• Clear Issue Description (symptoms, noises, leaks, error codes)</li>
                <li>• Photos or short video if available (helps us pre-diagnose)</li>
                <li>• Address and Gate/Access Info (if any)</li>
                <li>• Preferred Availability (2–3 windows that work for you)</li>
                <li>• Purchase Date/Warranty Status if known</li>
              </ul>
            </div>

            <div className="bg-gray-50 border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pro Tip</h3>
              <p className="text-gray-700">Snapping a photo of the rating plate (with model/serial) saves time and avoids typos.</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">📋 About Online Appointment Requests</h3>
              <p className="text-gray-700 mb-3">
                Online appointments are <strong>requests</strong> that require confirmation. We'll confirm your appointment within 4 hours during business hours or the next business day.
              </p>
              <p className="text-gray-700">
                <strong>Need immediate confirmation?</strong> Call us at (707) 664-9702 for guaranteed scheduling and our most up-to-date availability.
              </p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="bg-green-50 border-2 border-green-600 rounded-lg p-4 text-center">
              <p className="text-sm font-semibold text-green-900 mb-2">⚡ IMMEDIATE CONFIRMATION</p>
              <a href="tel:(707) 664-9702" className="block text-center bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 mb-2">Call (707) 664-9702</a>
              <p className="text-xs text-gray-700">Immediate confirmation & current availability</p>
            </div>
            <a href="https://booking.rossware.com/schedule/4588" target="_blank" rel="noopener noreferrer" className="block text-center bg-white text-green-800 px-6 py-4 rounded-lg font-semibold border-2 border-green-600 hover:bg-green-50">
              Request Appointment Online
            </a>
            <p className="text-xs text-center text-gray-600">Online requests confirmed within 4 hours (business hours)</p>
            <Link href="/resources/where-is-my-model-number" className="block text-center bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold border hover:bg-gray-50">Where is my model number?</Link>
          </aside>
        </div>
      </section>
    </Layout>
  )
}


