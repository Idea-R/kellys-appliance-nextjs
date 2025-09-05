import Image from 'next/image'
import Layout from '@/components/Layout'

export const metadata = {
  title: 'Where Is My Model Number? | Kelly\'s Appliance Center',
  description: 'Find the model/serial number on your appliance: refrigerators, ovens/ranges, dishwashers, washers, and dryers.',
}

const guides = [
  { title: 'Refrigerator', tips: ['Inside fresh food compartment on side wall', 'Ceiling of the compartment', 'Behind lower crisper drawer', 'On door frame (when door is open)'], image: '/images/model-locations/refrigerator.png' },
  { title: 'Oven / Range', tips: ['Behind the door on frame', 'Under cooktop (raise top)', 'Bottom drawer frame', 'Back panel'], image: '/images/model-locations/range.png' },
  { title: 'Dishwasher', tips: ['Inside door on side wall', 'Door frame (when door is open)', 'Top edge of the door'], image: '/images/model-locations/dishwasher.png' },
  { title: 'Washer', tips: ['Back panel', 'Under lid/door frame', 'Inside door on front-loaders'], image: '/images/model-locations/washer.png' },
  { title: 'Dryer', tips: ['Door frame', 'Back panel', 'Inside door pocket'], image: '/images/model-locations/dryer.png' },
]

export default function ModelNumberGuidePage() {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-3">Where Is My Model Number?</h1>
          <p className="text-lg opacity-95 max-w-3xl">Use this guide to locate the model and serial number on your appliance.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((g) => (
            <div key={g.title} className="bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{g.title}</h2>
              <ul className="text-gray-700 mb-4 list-disc list-inside">
                {g.tips.map((t) => (<li key={t}>{t}</li>))}
              </ul>
              <div className="relative w-full h-40 bg-gray-100 rounded overflow-hidden">
                <Image src={g.image} alt={`${g.title} model number location`} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}


