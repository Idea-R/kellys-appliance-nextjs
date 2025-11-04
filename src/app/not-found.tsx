import Link from 'next/link'
import Layout from '@/components/Layout'
import { PhoneIcon } from '@heroicons/react/24/solid'

export const metadata = {
  title: 'Page Not Found - Kelly\'s Appliance Center',
  description: 'The page you\'re looking for doesn\'t exist. Find what you need with our helpful links.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFoundPage() {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-2xl mb-2">Page Not Found</p>
          <p className="text-lg opacity-90">The page you're looking for doesn't exist or has been moved.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Looking for something? Try these links:
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Link 
                href="/" 
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-green-600 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Home</h3>
                <p className="text-gray-600">Return to our homepage</p>
              </Link>

              <Link 
                href="/services" 
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-green-600 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Services</h3>
                <p className="text-gray-600">View all repair services</p>
              </Link>

              <Link 
                href="/service-locations" 
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-green-600 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Areas</h3>
                <p className="text-gray-600">Find your location</p>
              </Link>

              <Link 
                href="/contact" 
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-green-600 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600">Get in touch with our team</p>
              </Link>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Immediate Help?</h3>
              <p className="text-gray-700 mb-4">
                If you're trying to find information about our services or schedule a repair, 
                give us a call and we'll help you right away.
              </p>
              <a
                href="tel:7076649702"
                className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call (707) 664-9702
              </a>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
              <p>If you believe this is an error, please <Link href="/contact" className="text-green-600 hover:underline">contact us</Link> and let us know.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
