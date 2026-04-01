'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { FireIcon, TruckIcon, StarIcon, PhoneIcon, ClockIcon, TrophyIcon, XMarkIcon } from '@heroicons/react/24/solid'

const menuItems = [
  {
    name: 'The Service Call',
    description: 'Slow-smoked St. Louis ribs, 12-hour brisket, pulled pork, mac & cheese, cornbread, coleslaw, and baked beans. Everything you need, one visit.',
    serves: '20-50 guests',
    price: 'From $35/person',
    image: '/images/catering/BrisketCloseup.jpg',
    backstory: 'Just like a real service call, we show up on time, get the job done right, and leave you wondering why you didn\'t call sooner. This package started when Mark catered his first neighborhood block party in 2019. He brought everything in the service van and smoked it all on-site. The neighbors still talk about it.',
    funFact: 'The coleslaw recipe is Bob Kelly\'s. He brought it to every company potluck from 1975 until he retired. Mark swore he\'d never change it, and he hasn\'t.',
  },
  {
    name: 'The Diagnostic Plate',
    description: 'A little bit of everything so you can figure out what you like. Smoked tri-tip, pulled pork, two ribs, garlic bread, potato salad, and grilled veggies.',
    serves: '10-30 guests',
    price: 'From $28/person',
    image: '/images/catering/SmokerSetup.jpg',
    backstory: 'Named after the first step in every repair: you gotta figure out what you\'re working with. This plate lets you sample a little of everything before you commit. Perfect for people who can\'t make up their minds. We don\'t judge. We\'ve all been there staring into a fridge full of food saying there\'s nothing to eat.',
    funFact: 'The tri-tip gets a dry rub made with 11 spices. Mark won\'t tell anyone what they are. He says it\'s "proprietary information," same as what he tells customers about their warranty terms.',
  },
  {
    name: 'The Full Replacement',
    description: 'When a repair won\'t cut it, you go all in. A whole heritage hog, slow-roasted over oak for 18 hours with all the fixings. Enough leftovers to fill your fridge. Which, by the way, we can also fix.',
    serves: '75-150 guests',
    price: 'Market price',
    image: '/images/catering/menu-full-replacement.jpg',
    backstory: 'Sometimes you look at a broken appliance and you know: it\'s time for a full replacement. Same thing with catering. If you\'re feeding more than 75 people, stop messing around with trays and platters. Get the whole hog. We source heritage breeds from Sonoma County farms and smoke them over local oak for 18 hours straight. Someone on the crew stays up all night tending the fire.',
    funFact: 'The 18-hour cook time is the same amount of time it once took Mark to track down a discontinued compressor for a 1987 Sub-Zero. He found it. He always finds it.',
  },
  {
    name: 'Mark\'s Competition Brisket Box',
    description: 'The same brisket that won at the Chili & Rib Cookoff. Sliced and chopped, with house rub, pickles, onions, white bread, and two signature sauces.',
    serves: '8-12 guests',
    price: '$250',
    image: '/images/catering/BrisketCloseup.jpg',
    backstory: 'This is the one. The exact brisket Mark brought to the Rohnert Park Chili & Rib Cookoff. Same rub, same wood, same technique. He preps it at 4am, wraps it in butcher paper at the stall, and pulls it when it hits 203 degrees internal. No shortcuts. The two sauces are a Carolina-style vinegar mop and a thick Kansas City sweet. Both made from scratch.',
    funFact: 'Mark tests brisket tenderness by feel, the same way he checks if a dryer belt has the right tension. "If you need a thermometer, you\'re not paying attention," he says. He\'s wrong about the thermometer. He uses one. But it sounds cool.',
  },
]

const merchItems = [
  {
    name: 'The Pitmaster Apron',
    image: '/images/catering/TechBBQBackground.jpg',
    label: 'Coming Soon',
    backstory: 'Heavy-duty canvas, the same green as the Kelly\'s polo. Adjustable neck strap because Mark is 6\'2" and Shane is not. Front pocket fits a meat thermometer and a multimeter, depending on whether you\'re smoking ribs or diagnosing a range. Every apron is hand-stamped with the Kelly\'s Appliance logo. We\'re not saying it makes food taste better, but we\'re not NOT saying that.',
  },
  {
    name: 'The Repair Kit (BBQ Edition)',
    image: '/images/catering/merch-spatula.jpg',
    label: 'Coming Soon',
    backstory: 'A full set of BBQ tools with dark green handles that match the Kelly\'s brand. Spatula, tongs, and a meat fork. The spatula has "Kelly\'s Appliance" laser-engraved on the blade. Designed by the same crew that can take apart your dishwasher blindfolded. If you can fix a refrigerator, you can definitely flip a burger.',
  },
  {
    name: 'Mark\'s Signature Sauce',
    image: '/images/catering/merch-sauce.jpg',
    label: 'Coming Soon',
    backstory: 'Two bottles. One Original, one Hot. The Original recipe came together over a decade of competition cooking. Mark kept adjusting it after every cookoff until one day he said, "That\'s it. Don\'t touch it." The Hot version happened when Shane accidentally doubled the cayenne. Turns out it was better that way. Both are made in small batches right here in Sonoma County.',
  },
]

const testimonials = [
  {
    quote: 'Mark showed up to fix my oven and ended up smoking a brisket in my backyard. Best service call ever.',
    author: 'Definitely A Real Customer',
  },
  {
    quote: 'I called for a refrigerator repair and left with a catering contract for my daughter\'s wedding. 10/10.',
    author: 'A Very Satisfied Client',
  },
  {
    quote: 'The tri-tip was so good I forgot my dishwasher was broken.',
    author: 'Someone In Petaluma',
  },
]

type ModalItem = { name: string; image: string; backstory: string; funFact?: string; description?: string; price?: string; serves?: string; label?: string }

function Modal({ item, onClose }: { item: ModalItem; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={item.name}>
      <button className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-label="Close backdrop" />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto overscroll-contain">
        <div className="sticky top-0 z-10">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-black/50 text-white rounded-full p-1.5 hover:bg-black/70 transition-colors z-20"
            aria-label="Close"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
        <Image
          src={item.image}
          alt={item.name}
          width={600}
          height={300}
          className="w-full h-48 sm:h-56 object-cover rounded-t-2xl"
          sizes="600px"
        />
        <div className="p-6 pb-16">
          <h3 className="text-2xl font-extrabold text-gray-900 mb-1">{item.name}</h3>
          {item.price && (
            <div className="flex gap-3 mb-3 text-sm text-gray-500">
              <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">{item.price}</span>
              {item.serves && <span>Serves {item.serves}</span>}
            </div>
          )}
          {item.label && (
            <span className="inline-block bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold text-sm mb-3">{item.label}</span>
          )}
          {item.description && <p className="text-gray-600 mb-4">{item.description}</p>}
          <div className="border-t pt-4">
            <h4 className="font-bold text-gray-900 mb-2">The Backstory</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{item.backstory}</p>
          </div>
          {item.funFact && (
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="font-bold text-amber-800 text-sm mb-1">Kelly Family Lore</h4>
              <p className="text-amber-900 text-sm">{item.funFact}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function CateringContent() {
  const [selectedItem, setSelectedItem] = useState<ModalItem | null>(null)

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-amber-900 via-amber-800 to-orange-900 text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6 animate-pulse">
              <FireIcon className="h-4 w-4" />
              NEW FOR 2026
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
              Kelly&apos;s Appliance
              <span className="block text-amber-300">Catering Division</span>
            </h1>
            <p className="text-xl sm:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
              We&apos;ve been fixing your appliances since 1975. Now we&apos;re cooking on them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7076649702"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-colors shadow-lg"
              >
                <PhoneIcon className="h-5 w-5" />
                Book Your Event
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                View The Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                From Fixing Ovens to<br />Firing Up Smokers
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  For over 50 years, Kelly&apos;s Appliance Center has been Sonoma County&apos;s most trusted name in appliance repair. What most people don&apos;t know is that owner <strong>Mark Kelly</strong> has been competing in BBQ competitions for years, including the <strong>Rohnert Park Chili &amp; Rib Cookoff</strong> put on by the Rohnert Park Chamber of Commerce.
                </p>
                <p>
                  After decades of repairing ovens, ranges, and grills for North Bay families, Mark figured out something. <em>He knew more about cooking equipment than anyone in the county.</em> Combine that with an obsession for low-and-slow smoking, competition rubs, and post-oak fire management, and you&apos;ve got yourself a pitmaster.
                </p>
                <p>
                  Now Mark and the Kelly&apos;s crew are taking everything they know about appliances and putting it to work in a whole new way: <strong>full-service BBQ catering</strong> for events across Sonoma and Marin counties.
                </p>
                <p className="text-amber-700 font-semibold">
                  Same green polo. Same trusted team. Way more smoke.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/catering/MarkBBQ.jpg"
                  alt="Mark Kelly, owner of Kelly's Appliance Center, at his competition smoker"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-amber-500 text-black px-4 py-2 rounded-lg font-bold text-sm shadow-lg rotate-[-3deg]">
                Award-Winning Pitmaster
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Van */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">The Catering Fleet</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We put custom-built mobile smokers in our service vans. Yes, the chimney is real. And yes, we&apos;re smoking brisket on the way to your event.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-2xl max-w-4xl mx-auto">
            <Image
              src="/images/catering/CateringVan.jpg"
              alt="Kelly's Appliance Catering Division van with built-in smoker"
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-10 text-sm font-medium">
            <span className="flex items-center gap-2">
              <TruckIcon className="h-5 w-5 text-amber-400" />
              Mobile Smoker Fleet
            </span>
            <span className="flex items-center gap-2">
              <ClockIcon className="h-5 w-5 text-amber-400" />
              12-18 Hour Smoke Times
            </span>
            <span className="flex items-center gap-2">
              <FireIcon className="h-5 w-5 text-amber-400" />
              100% Sonoma County Oak
            </span>
            <span className="flex items-center gap-2">
              <StarIcon className="h-5 w-5 text-amber-400" />
              Diamond Certified Flavor
            </span>
          </div>
        </div>
      </section>

      {/* Competition History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              <TrophyIcon className="h-4 w-4" />
              COMPETITION PROVEN
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Award-Winning BBQ</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From the Rohnert Park Chili &amp; Rib Cookoff to backyard throwdowns across the North Bay, Mark and the Kelly&apos;s crew have been at this for years.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/catering/TechBBQBackground.jpg"
                alt="Kelly's Appliance team at the Rohnert Park Chili and Rib Cookoff"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="p-4 bg-gray-50">
                <h3 className="font-bold text-gray-900">Rohnert Park Chili &amp; Rib Cookoff</h3>
                <p className="text-sm text-gray-500">Sponsored by the RP Chamber of Commerce</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/catering/BrisketCloseup.jpg"
                alt="Competition-style brisket with perfect smoke ring"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="p-4 bg-gray-50">
                <h3 className="font-bold text-gray-900">Competition-Style Brisket</h3>
                <p className="text-sm text-gray-500">12 hours over post oak, hand-rubbed</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/catering/SmokerSetup.jpg"
                alt="Kelly's Appliance mobile smoker setup at an outdoor event"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="p-4 bg-gray-50">
                <h3 className="font-bold text-gray-900">Event Catering Setup</h3>
                <p className="text-sm text-gray-500">We handle setup, service, and cleanup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">The Menu</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every package includes setup, service, and cleanup. We know a thing or two about showing up on time and leaving your place spotless.
            </p>
            <p className="text-sm text-amber-700 font-medium mt-2">Click any item for the full story.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setSelectedItem(item)}
                className="bg-white rounded-xl shadow-md border border-amber-200 overflow-hidden hover:shadow-lg hover:border-amber-400 transition-all text-left group cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap ml-4">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <p className="text-sm text-gray-500 font-medium">Serves {item.serves}</p>
                  <p className="text-xs text-amber-600 font-semibold mt-2 group-hover:text-amber-700">Tap for the backstory &rarr;</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-10">What People Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <StarIcon key={s} className="h-5 w-5 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-3">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-gray-500 text-sm font-medium">&mdash; {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merch Teaser */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Gear Up</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Official Kelly&apos;s Appliance Catering Division merch. Because if you&apos;re going to smoke meat, you might as well look good doing it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {merchItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setSelectedItem(item)}
                className="bg-white rounded-xl shadow-md overflow-hidden text-center group cursor-pointer hover:shadow-lg hover:ring-2 hover:ring-amber-300 transition-all"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="text-xs text-amber-600 font-semibold mt-1 group-hover:text-amber-700">Tap for details &rarr;</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Ready to Book?</h2>
          <p className="text-xl opacity-90 mb-8">
            Backyard party, company event, wedding reception. We&apos;ll bring the smoke. Literally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7076649702"
              className="inline-flex items-center justify-center gap-2 bg-white text-amber-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors shadow-lg"
            >
              <PhoneIcon className="h-5 w-5" />
              Call (707) 664-9702
            </a>
            <Link
              href="/schedule-prep"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              Or Book A Repair Instead
            </Link>
          </div>
          <p className="mt-6 text-amber-200 text-sm">
            Serving Sonoma County, Marin County &amp; Napa County &bull; Since 1975 (appliances) &bull; Since 2026 (brisket)
          </p>
        </div>
      </section>

      {/* April Fools reveal */}
      <section className="py-8 bg-gray-900 text-center">
        <p className="text-gray-500 text-sm">
          Happy April Fools&apos; Day from the Kelly&apos;s Appliance team! We&apos;re sticking to what we do best: fixing your appliances.
          <br />
          <span className="text-gray-600">But seriously, Mark really can smoke a mean brisket.</span>
        </p>
      </section>

      {/* Modal */}
      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </Layout>
  )
}
