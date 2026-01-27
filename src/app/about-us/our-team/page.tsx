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
    image: '/images/mark-kelly.jpg',
    bio: 'Owner since 1990, joined the company in 1983. With over 40 years in the appliance repair industry, Mark has built Kelly\'s Appliance Center into one of the most trusted names in the Bay Area.',
    bioFull: 'Mark Kelly took over full ownership of the business in 1990, maintaining customer service as the number one priority. He joined the company in 1983. With over 40 years in the appliance repair industry, Mark has built Kelly\'s Appliance Center into one of the most trusted names in Sonoma, Marin, and Napa counties. His commitment to excellence and customer satisfaction has been the cornerstone of the company\'s success and longevity.',
    yearsExperience: 40,
    specialties: [
      'Business operations & customer service',
      'Factory authorized service programs',
      'Team leadership & training'
    ],
    certifications: [
      'Factory Authorized Service Provider',
      'Diamond Certified Business'
    ],
    quote: 'Customer service isn\'t just our priority—it\'s our foundation. Every decision we make starts with asking: "What\'s best for our customers?"',
    funFact: 'Started in the appliance business at age 18 and has never looked back!'
  },
  {
    name: 'Shane Spencer',
    role: 'Tech Service Manager',
    image: '/images/Shane-3.jpg',
    bio: 'Ten years with Kelly\'s Appliance, started as a technician and worked my way up to Tech Service Manager. I support our amazing customers and provide rapid technical support to field technicians.',
    bioFull: 'I\'ve been with Kelly\'s Appliance for ten years, started as a technician, and worked my way to a desk, talking to our wonderful customers and helping technicians with rapid support! I could never imagine working for anybody else! I wish I could say I come from a background of tinkering with machines, but that\'s not the case! I did have a great passion for computers though, building my own—I was the kid\'s friend\'s parents would go to fix their computer! I went to school for graphic design originally and decided to step away from my comfort zone! What do I like about Appliance repair? Everything varies from day to day in this line of work! New machines, new customers, new locations! The work is very rewarding. You get to be the hero, saving an oven just in time for the holiday! BONUS: your family all call you more often... even if it\'s just to help with a failing refrigerator!',
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
    name: 'Kendra Hoetger',
    role: 'Office Manager',
    image: '/images/Kendra-23-scaled.jpg',
    bio: 'Office manager handling appointments, billing, and customer communications.'
  },
  {
    name: 'Abby Jensen',
    role: 'Parts Coordinator/CSR',
    image: '/images/Abby-2-23-scaled.jpg',
    bio: 'Coordinating parts logistics and customer scheduling to ensure excellent service.'
  },
  {
    name: 'Laura Losh',
    role: 'Customer Service Representative',
    image: '/images/KellysLogo3.png',
    bio: 'Customer service representative dedicated to great scheduling and support.'
  },
  {
    name: 'Bianca Bonila',
    role: 'Lead Technician',
    image: '/images/Bianca-scaled.jpg',
    bio: 'Lead technician supporting complex diagnostics and service excellence.'
  },
  {
    name: 'Ricardo Ramos',
    role: 'Service Technician',
    image: '/images/Ricardo-1-23-scaled.jpg',
    bio: 'Dedicated service technician with experience in dishwasher and appliance diagnostics.'
  },
  {
    name: 'Joe Denning',
    role: 'Service Technician',
    image: '/images/Joe-23-scaled.jpg',
    bio: 'Skilled service technician with expertise in washer and dryer repair services.'
  },
  {
    name: 'Sean Foley',
    role: 'Service Technician',
    image: '/images/Sean-23-scaled.jpg',
    bio: 'Professional field technician serving customers throughout the Bay Area.'
  },
  {
    name: 'James Shawgo',
    role: 'Senior Service Technician',
    image: '/images/James5.jpg',
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
    name: 'Anthony Porter',
    role: 'Service Technician',
    image: '/images/Porter-1.png',
    bio: 'Experienced technician delivering reliable service across all major brands.'
  }
];

export default function OurTeamPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Our Team', href: '/about-us/our-team' },
  ];

  return (
    <Layout>
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
              href="https://booking.rossware.com/schedule/4588"
              target="_blank"
              rel="noopener noreferrer"
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
