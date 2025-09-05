import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import Layout from '@/components/Layout'

export const metadata: Metadata = {
  title: 'Diamond Certified | Kelly\'s Appliance Center',
  description: 'Learn why Kelly\'s Appliance Center is Diamond Certified. Watch expert videos and see highlights from our certification profile.',
}

export default function DiamondCertifiedPage() {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-3">Diamond Certified</h1>
          <p className="text-lg opacity-95 max-w-3xl">Independent ratings based on customer satisfaction and rigorous credentialing. View our profile and expert videos.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            {/* Video embeds */}
            <div className="aspect-video rounded-lg overflow-hidden shadow">
              <iframe
                src="https://www.youtube.com/embed/23n3UL6bexample?rel=0"
                title="Diamond Certified Experts: 3 Ways to Maintain Your Refrigerator"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow">
              <iframe
                src="https://www.youtube.com/embed/12abCDEFexample?rel=0"
                title="Diamond Certified Experts: 2 Dishwasher Maintenance Tips"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/images/diamond-certified-logo.png" alt="Diamond Certified" width={64} height={64} className="h-12 w-auto" />
                <div>
                  <div className="text-lg font-semibold">Diamond Certified Profile</div>
                  <div className="text-gray-600 text-sm">Verified customer satisfaction and credentials</div>
                </div>
              </div>
              <Link href="https://www.diamondcertified.org/report/kellys-appliance-center/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700 transition-colors">
                View Profile
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border">
              <h3 className="text-xl font-bold mb-3">Highlights</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>Highest in Quality and Helpful Expertise</li>
                <li>Rated by real customers in independent surveys</li>
                <li>Credentialed for insurance, license, and longevity</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  )
}


