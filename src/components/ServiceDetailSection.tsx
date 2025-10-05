import React from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { getCompanyInfo } from '@/lib/content';

const companyInfo = getCompanyInfo();

interface ServiceDetailSectionProps {
  title: string;
  intro: string;
  children: React.ReactNode;
}

export default function ServiceDetailSection({ title, intro, children }: ServiceDetailSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Main Content */}
          <article className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8 space-y-6">
            <header>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{intro}</p>
            </header>
            
            <div className="prose prose-lg max-w-none">
              {children}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Why Kelly's */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-1 h-6 bg-green-600 mr-3"></span>
                Why Kelly's?
              </h3>
              <ul className="space-y-3">
                {[
                  'Factory Authorized Service',
                  'Genuine OEM Parts Only',
                  '90-Day Money Back Guarantee',
                  '50+ Years in Business'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-green-700 to-green-600 text-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all">
              <h4 className="text-lg font-bold mb-3">Ready to Schedule?</h4>
              <p className="text-sm mb-4 opacity-90">Get your appliance fixed by certified technicians</p>
              <div className="flex flex-col gap-3">
                <a 
                  href={`tel:${companyInfo.phone}`} 
                  className="inline-flex items-center justify-center bg-white text-green-800 px-4 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" /> 
                  Call {companyInfo.phone}
                </a>
                <a 
                  href="https://booking.rossware.com/schedule/4588" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center bg-green-800 text-white px-4 py-3 rounded-lg font-bold hover:bg-green-900 transition-colors"
                >
                  Book Online
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
