import React from 'react';
import Image from 'next/image';
import { GlobeAltIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export type PartnerCardProps = {
  /** Full display name, e.g. "Dr. Bing Gu" */
  name: string;
  /** Role + company line, e.g. "Founder, California Sunlight Corporation" */
  subtitle?: string;
  /** One or two sentence description */
  blurb?: string;
  /** Optional headshot or logo path under /public. Falls back to an initials avatar. */
  imageSrc?: string;
  imageAlt?: string;
  /** Outbound links */
  website?: string;
  websiteLabel?: string;
  linkedin?: string;
  email?: string;
  phone?: string;
  /** Small label across the top of the card */
  label?: string;
};

function getInitials(name: string): string {
  return name
    .replace(/^(dr|mr|mrs|ms|prof)\.?\s+/i, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => (w[0] ? w[0].toUpperCase() : ''))
    .join('');
}

export default function PartnerCard({
  name,
  subtitle,
  blurb,
  imageSrc,
  imageAlt,
  website,
  websiteLabel,
  linkedin,
  email,
  phone,
  label = "Recommended by Kelly's",
}: PartnerCardProps) {
  return (
    <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      <div className="bg-green-700 text-white text-xs font-semibold uppercase tracking-wide px-5 py-2">
        {label}
      </div>
      <div className="p-6 flex flex-col sm:flex-row gap-5 items-center sm:items-start">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || name}
            width={88}
            height={88}
            className="rounded-full object-cover shrink-0 ring-2 ring-green-100"
          />
        ) : (
          <div className="w-[88px] h-[88px] rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold shrink-0">
            {getInitials(name)}
          </div>
        )}

        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          {subtitle && <p className="text-green-700 font-medium text-sm mt-0.5">{subtitle}</p>}
          {blurb && <p className="text-gray-600 text-sm mt-3 leading-relaxed">{blurb}</p>}

          <div className="flex flex-wrap gap-3 mt-4 justify-center sm:justify-start">
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-label="partner_website"
                className="inline-flex items-center gap-1.5 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
              >
                <GlobeAltIcon className="h-4 w-4" />
                {websiteLabel || 'Visit Website'}
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics-label="partner_linkedin"
                className="inline-flex items-center gap-1.5 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                data-analytics-label="partner_email"
                className="inline-flex items-center gap-1.5 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors"
              >
                <EnvelopeIcon className="h-4 w-4" />
                Email
              </a>
            )}
            {phone && (
              <a
                href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                data-analytics-label="partner_phone"
                className="inline-flex items-center gap-1.5 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors"
              >
                <PhoneIcon className="h-4 w-4" />
                Call
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
