import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';
import { Playfair_Display } from 'next/font/google';

const companyInfo = getCompanyInfo();
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] });

export const metadata = {
  title: 'Our Team - Kelly\'s Appliance Center',
  description: 'Meet the experienced team at Kelly\'s Appliance Center. Our skilled technicians and friendly staff are here to help with all your appliance repair needs.',
};

const teamMembers = [
  {
    name: 'Mark Kelly',
    role: 'Owner',
    image: '/images/mark-kelly.jpg',
    bio: 'Mark Kelly took over full ownership of the business in 1990, maintaining customer service as the number one priority. He joined the company in 1983.'
  },
  {
    name: 'Shane Spencer',
    role: 'Tech Service Manager',
    image: '/images/Shane-23-scaled.jpg',
    bio: 'Experienced leader and technician specializing in all major appliance brands and models.'
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
    image: '/images/laura.jpg',
    bio: 'Customer service representative dedicated to great scheduling and support.'
  },
  {
    name: 'Bianca Bonila',
    role: 'Lead Technician',
    image: '/images/Bianca-scaled.jpg',
    bio: 'Lead technician supporting complex diagnostics and service excellence.'
  },
  {
    name: 'Ricardo',
    role: 'Service Technician',
    image: '/images/Ricardo-1-23-scaled.jpg',
    bio: 'Dedicated service technician with experience in dishwasher and appliance diagnostics.'
  },
  {
    name: 'Joe',
    role: 'Service Technician',
    image: '/images/Joe-23-scaled.jpg',
    bio: 'Skilled service technician with expertise in washer and dryer repair services.'
  },
  {
    name: 'Sean',
    role: 'Field Technician',
    image: '/images/Sean-23-scaled.jpg',
    bio: 'Professional field technician serving customers throughout the Bay Area.'
  },
  {
    name: 'James Shwago',
    role: 'Service Technician',
    image: '/images/james.jpg',
    bio: 'Professional service technician focused on timely, high-quality repairs.'
  },
  {
    name: 'Anthony Porter',
    role: 'Service Technician',
    image: '/images/anthony.jpg',
    bio: 'Experienced technician delivering reliable service across all major brands.'
  }
];

export default function OurTeamPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/about-us" className="text-green-200 hover:text-white mb-4 inline-block">
              ← Back to About Us
            </Link>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative w-full h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top rounded-none"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 text-center">
                    <div className={`${playfair.className} text-white text-2xl leading-none`}>{member.name.split(' ')[0]}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
              Book Online
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
