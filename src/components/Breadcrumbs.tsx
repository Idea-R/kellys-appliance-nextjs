import React from 'react';
import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const baseUrl = 'https://kellysappliancerepair.com';

  // Avoid rendering a "secondary nav" for top-level pages (e.g. "Home > Authorized Service").
  // Keep breadcrumbs for nested pages where they add real navigational value (e.g. "Home > Service Locations > Santa Rosa").
  if (!items || items.length <= 1) {
    return null;
  }
  
  // Build structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const isLast = index === items.length - 1;
      const entry: Record<string, unknown> = {
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
      };
      // Per schema.org spec, the last item (current page) should NOT have an "item" URL
      if (!isLast) {
        entry.item = `${baseUrl}${item.href}`;
      }
      return entry;
    }),
  };

  return (
    <>
      {/* Breadcrumb Navigation — visually hidden, SEO + accessibility preserved */}
      <nav className="sr-only" aria-label="Breadcrumb">
        <ol>
          {items.map((item, index) => (
            <li key={item.href}>
              {index === items.length - 1 ? (
                <span>{item.label}</span>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}

