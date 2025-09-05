import Link from 'next/link'
import Layout from '@/components/Layout'

export const metadata = {
  title: 'Get Ready to Schedule | Kelly\'s Appliance Center',
  description: 'Checklist of what to have ready before scheduling: model/serial, availability, issue description, and photos.',
}

export default function SchedulePrepPage() {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-3">Before You Book</h1>
          <p className="text-lg opacity-95 max-w-3xl">Have these details handy to speed up scheduling and diagnosis.</p>
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
          </div>

          <aside className="space-y-4">
            <a href="https://booking.rossware.com/schedule/4588" target="_blank" rel="noopener noreferrer" className="block text-center bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700">Book Appointment Online</a>
            <a href="tel:(707) 664-9702" className="block text-center bg-white text-green-800 px-6 py-4 rounded-lg font-semibold border hover:bg-gray-50">Call (707) 664-9702</a>
            <Link href="/resources/where-is-my-model-number" className="block text-center bg-white text-green-800 px-6 py-4 rounded-lg font-semibold border hover:bg-gray-50">Where is my model number?</Link>
          </aside>
        </div>
      </section>
    </Layout>
  )
}


