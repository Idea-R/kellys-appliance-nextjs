import Image from 'next/image'
import Link from 'next/link'
// import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import VideoEmbedCard from '@/components/VideoEmbedCard'

export const metadata = {
  title: 'Diamond Certified',
  description: 'Diamond Certified profile and expert videos from Kelly’s Appliance Center.',
  alternates: {
    canonical: '/diamond-certified',
  },
}

export default function DiamondCertifiedPage() {
  const videos: Array<{ title: string; youtubeId: string; description?: string }> = [
    {
      title: 'Diamond Certified Video Profile',
      youtubeId: 'GOKwpttxafw',
      description: 'Kelly’s Appliance Center performs major household appliance repairs across Marin and Sonoma Counties, prioritizing fast, reliable service and fair pricing.',
    },
    {
      title: 'How to Clean Your Stove Top',
      youtubeId: 'buuadR74Vdg',
      description: 'Service Manager Dane Marcy demonstrates the correct way to clean a stovetop to protect finishes and extend longevity.',
    },
    {
      title: 'Diamond Certified Experts: 3 Ways to Maintain Your Refrigerator',
      youtubeId: 'YCWtsR1DLJs',
      description: 'Owner Mark Kelly shares three simple steps to extend the life and efficiency of your refrigerator.',
    },
    {
      title: 'Diamond Certified Experts: Dishwasher Maintenance Tips',
      youtubeId: 'Qe25IAfHeEE',
      description: 'Mark Kelly covers easy ways to keep your dishwasher efficient and reduce repairs.',
    },
  ]
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
          <div className="lg:col-span-2 space-y-10">
            {videos.map((v, idx) => (
              <VideoEmbedCard key={idx} title={v.title} youtubeId={v.youtubeId} description={v.description} />
            ))}
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


