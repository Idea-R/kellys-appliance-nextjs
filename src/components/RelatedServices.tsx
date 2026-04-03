import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export interface RelatedService {
  title: string;
  href: string;
  description: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
  modelNumberLink?: boolean;
  authorizedServiceLink?: boolean;
}

export default function RelatedServices({ services, modelNumberLink = true, authorizedServiceLink = true }: RelatedServicesProps) {
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-green-300 transition-all group"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{service.description}</p>
              <span className="inline-flex items-center text-green-600 text-sm font-medium group-hover:text-green-700">
                Learn more <ArrowRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
        {(modelNumberLink || authorizedServiceLink) && (
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-600">
            {modelNumberLink && (
              <p>
                Need help finding your model number?{' '}
                <Link href="/resources/where-is-my-model-number" className="text-green-600 hover:text-green-700 font-medium underline">
                  Check our model number guide
                </Link>
              </p>
            )}
            {authorizedServiceLink && (
              <p>
                We&apos;re{' '}
                <Link href="/authorized-service" className="text-green-600 hover:text-green-700 font-medium underline">
                  factory authorized
                </Link>
                {' '}for all major brands.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
