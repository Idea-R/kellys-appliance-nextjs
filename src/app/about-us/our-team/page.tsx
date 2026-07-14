import React from 'react';
import Image from 'next/image';
import { PhoneIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getCompanyInfo } from '@/lib/content';
import TeamGrid, { TeamMember } from './TeamGrid'

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Our Team',
  description: 'Meet the experienced team at Kelly\'s Appliance Center. Our skilled technicians and friendly staff are here to help with all your appliance repair needs.',
  alternates: {
    canonical: '/about-us/our-team',
  },
};

const teamMembers: TeamMember[] = [
  {
    name: 'Mark Kelly',
    role: 'Owner',
    image: '/images/team/Markz.jpg',
    bio: 'Owner. Master of difficult diagnoses and complex repairs. Lifelong community member with deep local roots.',
    bioFull: 'Mark thrives on the technical side of the work. After four decades on the job, the harder the diagnosis, the better. He\'ll dig into a complex repair that\'s stumped someone else, and the "aha!" moment when he figures it out is what keeps him coming back. Customers leave with a working appliance. That\'s the win.\n\nHe\'s also lived in the community for 63 years, so a lot of the people he services aren\'t strangers. They\'re neighbors, families he\'s known for decades. He takes that personally.\n\nOutside of the shop, Mark\'s five grandsons run the show. He calls them the love of his life.',
    yearsExperience: 42,
    yearsOfService: 42,
    specialties: [
      'Difficult diagnoses & complex repairs',
      'Decades of hands-on technical experience',
      'Business operations & customer service',
      'Team leadership & training',
      'Factory authorized service programs'
    ],
    certifications: [
      'Factory Authorized Service Provider',
      'Diamond Certified Business'
    ],
    quote: 'Customer service isn\'t just our priority, it\'s our foundation. Every decision we make starts with asking: "What\'s best for our customers?"',
    funFact: '63 years in the community. Five grandsons run the show at home.'
  },
  {
    name: 'Kendra Hoetger',
    role: 'General Manager',
    image: '/images/Kendra-23-scaled.jpg',
    bio: 'General Manager. Started as a part-time CSR and quickly moved up the ladder into management. Oversees daily operations, administrative functions, and customer service.',
    bioFull: 'Kendra Hoetger is the General Manager of Kelly\'s Appliance Center. She has a decade of industry experience, starting as a part-time CSR and quickly moving up the ladder into management. She oversees the company\'s daily operations, administrative functions, and customer service departments.\n\nThroughout her tenure, Kendra has been instrumental in scaling the company\'s service capabilities while maintaining its 50-year reputation for community-focused reliability. She is recognized for her expertise in operational leadership and her commitment to professional excellence in the local business community.',
    yearsExperience: 10,
    yearsOfService: 10,
    specialties: [
      'Daily operations management',
      'Customer service leadership',
      'Office administration',
      'Scheduling & dispatch coordination'
    ]
  },
  {
    name: 'Shane Spencer',
    role: 'Operations and Growth Manager',
    image: '/images/team/Shanez.jpg',
    bio: 'Ten years with Kelly\'s Appliance, started as a technician and worked my way up to Tech Service Manager. I support our amazing customers and provide rapid technical support to field technicians.',
    bioFull: 'I\'ve been with Kelly\'s Appliance for ten years, started as a technician, and worked my way to a desk, talking to our wonderful customers and helping technicians with rapid support! I could never imagine working for anybody else! I wish I could say I come from a background of tinkering with machines, but that\'s not the case! I did have a great passion for computers though, building my own. I was the kid\'s friend\'s parents would go to fix their computer! I went to school for graphic design originally and decided to step away from my comfort zone! What do I like about Appliance repair? Everything varies from day to day in this line of work! New machines, new customers, new locations! The work is very rewarding. You get to be the hero, saving an oven just in time for the holiday! BONUS: your family all call you more often... even if it\'s just to help with a failing refrigerator!',
    yearsExperience: 10,
    yearsOfService: 10,
    specialties: [
      'Premium residential appliances (Sub-Zero, Wolf, DCS, Fisher & Paykel, KitchenAid)',
      'Component-based control board repair',
      'Wiring schematics & troubleshooting best practices',
      'Electric ovens & dryers (240V systems)',
      'Refrigeration & thermodynamics'
    ],
    certifications: [
      'Appliantology Master Samurai Tech'
    ],
    quotes: [
      'Honesty above all else, this is my community and I intend to offer the best service possible here for years to come!',
      '"I look forward to not seeing you again soon!" - Myself',
      '"The future\'s So Bright, I gotta wear shades!" - Pat MacDonald'
    ],
    favoriteAppliance: 'Electric ovens/dryers - 240V makes the journey much more fun! Tech-wise: refrigerators - thermodynamics is crazy cool... get it!?',
    funFact: 'Playing D&D for 20+ years, owned by 5 cats, builds websites & software for fun, and welcomes our AI overlords!'
  },
  {
    name: 'James Shawgo',
    role: 'Service Manager',
    image: '/images/team/James.jpg',
    bio: 'Senior appliance repair technician with 10+ years in appliance repair and 25+ years in field service. EPA certified, experienced across major and premium brands, and a Viking Authorized Servicer since 2017.',
    bioFull: 'I am a senior appliance repair technician with over 10 years of experience in the appliance repair industry and more than 25 years in the field service industry overall. My background includes residential and commercial diagnostics and repair, management experience, and specialized service on commercial ice makers and bar and restaurant beverage equipment.\n\nI am EPA certified and have extensive experience servicing a wide range of brands, including Amana, Maytag, Whirlpool, KitchenAid, JennAir, LG, Samsung, GE, Bosch, Thermador, Fisher & Paykel, Viking, Wolf, Sub-Zero, Dynasty, and Jade. Over the past eight years, my work has focused primarily on high-end and premium appliances. I have been a Viking Authorized Servicer since 2017.\n\nI service nearly all major household appliances, including refrigerators, ice makers, washers, dryers, dishwashers, ranges, wall ovens, cooktops, microwaves, trash compactors, garbage disposals, and hot water dispensers.\n\nI take pride in providing honest, reliable service backed by decades of hands-on experience.',
    // Badge should reflect appliance-repair experience (not total field-service years)
    yearsExperience: 10,
    specialties: [
      'Residential and commercial diagnostics & repair',
      'High-end & premium appliances (8+ years focus)',
      'Commercial ice makers and bar/restaurant beverage equipment',
      'Refrigeration and ice maker systems',
      'Broad multi-brand experience (major + premium)'
    ],
    certifications: [
      'EPA Certified',
      'Viking Authorized Servicer (since 2017)'
    ],
    quote: 'I take pride in providing honest, reliable service backed by decades of hands-on experience.'
  },
  {
    name: 'Abby Jensen',
    role: 'Parts Coordinator/CSR',
    image: '/images/Abby-2-23-scaled.jpg',
    bio: 'Parts and Customer Service. The detail person who tracks down the right parts and keeps repairs moving.',
    bioFull: 'Abby handles the nitty-gritty work on the Parts and Customer Service team: parts lookups, ordering, the small details that make sure a repair actually moves forward. Tracking down the right part for a 12-year-old fridge is more detective work than people realize, and that\'s the part she likes.\n\nOff the clock she\'s usually deep in a suspenseful mystery novel or trying out something new in the kitchen.',
    yearsOfService: 8,
    specialties: [
      'Parts lookup and identification',
      'Order management',
      'Customer service & scheduling',
      'Cross-team coordination with field technicians'
    ],
    funFact: 'Off the clock: suspenseful mystery novels and experimenting in the kitchen.'
  },
  {
    name: 'Amanda Carlson',
    role: 'Customer Service Representative',
    image: '/images/team/Amanda.jpg',
    bio: 'Customer Service Representative. The first voice when you call, the first reply in your inbox. Likes the puzzle of figuring out what someone needs and getting it sorted.',
    bioFull: 'Amanda is usually the first voice you hear when you call Kelly\'s, and the first reply you get when you reach out by email. She joined the team this spring and got up to speed quickly. She\'s the kind of person who actually likes the puzzle of figuring out what a customer needs and walking them through what comes next.\n\nWhether someone is confused about which part their fridge takes, trying to find a window that works for a tenant, or just hunting for a straight answer, Amanda takes the time to listen and sort it out. She\'d rather spend an extra minute making sure a customer leaves the call satisfied than rush through to the next one.\n\nOff the clock, Amanda is deep in world-building and strategy games. Same brain she brings to work: pay attention to the details, solve the puzzle, get the outcome you want.',
    specialties: [
      'First-line customer support (phone and email)',
      'Scheduling and intake',
      'Walking customers through repair options',
      'Cross-team handoff to techs and the parts desk'
    ],
    funFact: 'Off the clock: world-building and strategy games.'
  },
  {
    name: 'Phil Cockle',
    role: 'Service Technician',
    image: '/images/team/Philz.jpg',
    bio: ''
  },
  {
    name: 'Bianca Bonilla',
    role: 'Service Technician',
    image: '/images/team/Biancaz.jpg',
    bio: ''
  },
  {
    name: 'Ricardo Ramos',
    role: 'Service Technician',
    image: '/images/team/Ricardo.jpg',
    bio: ''
  },
  {
    name: 'Joe Denning',
    role: 'Service Technician',
    image: '/images/team/Joe.jpg',
    bio: 'Works on everything from older classics to the newest complex systems. Factory training with Whirlpool, Viking, and Bosch.',
    bioFull: 'Joe works on the full range of appliances we see, from the older classic designs to the newer complex systems that take more time to figure out.\n\nHe goes to manufacturer training regularly. Whirlpool, Viking, Bosch. Keeps him current on the latest tech and warranty requirements. The favorite part of the job for him is solving the frustrating problems. The ones where the customer has been dealing with a broken appliance for days and just wants it fixed. Walking out leaving someone with a functioning home is the win. He also likes that no two days look alike at this job. New people, new houses, new problems.\n\nWhen he\'s not on a service call, Joe\'s at the gym, playing sports, or hanging out with friends.',
    yearsExperience: 6,
    yearsOfService: 6,
    specialties: [
      'Full spectrum of appliance repair (classic to modern)',
      'Whirlpool factory training',
      'Viking factory training',
      'Bosch factory training',
      'Modern complex appliance systems'
    ],
    funFact: 'Off the clock: gym, sports, and time with friends.'
  },
  {
    name: 'Sean Foley',
    role: 'Service Technician',
    image: '/images/team/Sean.jpeg',
    bio: ''
  },
  {
    name: 'Anthony Porter',
    role: 'Service Technician',
    image: '/images/team/Porter.jpeg',
    bio: ''
  },
  {
    name: 'Ismael Góngora',
    role: 'Service Technician',
    image: '/images/team/Ismael.jpg',
    bio: 'Service technician with solid technical know-how and a customer-first approach. Takes the time to explain what\'s actually wrong before he fixes it.',
    bioFull: 'Ismael brings a careful approach to every service call. He\'ll spend the time to explain what\'s actually wrong, walk a customer through their options, and get to the right fix. No rushed jobs, no talking past people.\n\nHe\'s a trusted resource for both customers and the rest of the team. Solid technical knowledge paired with a real willingness to help, whether that\'s digging into a tricky diagnosis or giving someone practical advice on their appliance. People know what they\'re getting when Ismael\'s the one on the call.\n\nOutside of work, he stays active and involved in his community. He\'s built his approach to the job on the idea that strong relationships matter, and that shows up in how he treats every customer.',
    specialties: [
      'Diagnostic technical knowledge',
      'Customer communication and education',
      'Walking customers through repair options',
      'Team collaboration and support'
    ]
  },
  {
    name: 'Liam Melendez',
    role: 'Service Technician',
    image: '/images/team/Liam.jpg',
    bio: ''
  }
];

export default function OurTeamPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Our Team', href: '/about-us/our-team' },
  ];

  // Person structured data (E-E-A-T): ties each credentialed team member to the
  // business entity so search engines can see real expertise behind the content.
  const slugify = (n: string) =>
    n.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const teamPersonJsonLd = {
    '@context': 'https://schema.org',
    '@graph': teamMembers
      .filter((m) => m.bio || m.bioFull)
      .map((m) => ({
        '@type': 'Person',
        '@id': `https://kellysappliancerepair.com/about-us/our-team#${slugify(m.name)}`,
        name: m.name,
        jobTitle: m.role,
        worksFor: { '@id': 'https://kellysappliancerepair.com/#business' },
        url: 'https://kellysappliancerepair.com/about-us/our-team',
        ...(m.image ? { image: `https://kellysappliancerepair.com${m.image}` } : {}),
        ...(m.bioFull || m.bio ? { description: m.bioFull || m.bio } : {}),
        ...(m.specialties?.length ? { knowsAbout: m.specialties } : {}),
        ...(m.certifications?.length
          ? { hasCredential: m.certifications.map((c) => ({ '@type': 'EducationalOccupationalCredential', name: c })) }
          : {}),
      })),
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamPersonJsonLd) }}
      />
      <Breadcrumbs items={breadcrumbs} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Our experienced team of technicians and staff are dedicated to providing exceptional appliance repair services
            </p>
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Image
              src="/images/all-employees-23-scaled.jpg"
              alt="Kelly&apos;s Appliance Center Full Team"
              width={1200}
              height={800}
              className="rounded-lg shadow-xl mx-auto"
            />
            <p className="text-gray-600 mt-4">
              The complete Kelly&apos;s Appliance Center team - ready to serve you!
            </p>
          </div>
        </div>
      </section>

      {/* Individual Team Members */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600">
              Get to know the professionals who keep your appliances running smoothly
            </p>
          </div>
          
          <TeamGrid members={teamMembers} />
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide our work every day
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer First</h3>
              <p className="text-gray-600">
                Every decision we make puts our customers&apos; needs and satisfaction first
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Service</h3>
              <p className="text-gray-600">
                We use only genuine parts and provide factory-authorized repair services
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Honest Pricing</h3>
              <p className="text-gray-600">
                Transparent, fair pricing with no hidden fees or service charges on completed jobs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl mb-8">
            Contact Kelly&apos;s Appliance Center today and experience our exceptional service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-800 transition-colors"
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              Call {companyInfo.phone}
            </a>
            <a
              href="/schedule-prep"
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Appointment
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
