import { BreadcrumbItem } from '@/components/Breadcrumbs';
import { counties } from './locations';

/**
 * Generate breadcrumbs based on URL pathname
 * Returns array of breadcrumb items for use with Breadcrumbs component
 */
export function generateBreadcrumbs(pathname: string, pageTitle?: string | null | { toString(): string }): BreadcrumbItem[] {
  // Convert pageTitle to string if it's not already
  const titleString = pageTitle ? String(pageTitle) : undefined;
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' }
  ];

  // Remove leading/trailing slashes and split
  const segments = pathname.replace(/^\/|\/$/g, '').split('/').filter(Boolean);

  if (segments.length === 0) {
    // Homepage - no breadcrumbs needed, but return Home only
    return [{ label: 'Home', href: '/' }];
  }

  let currentPath = '';

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === segments.length - 1;

    // Skip homepage segment
    if (segment === '') return;

    // Service pages
    if (segment === 'services') {
      breadcrumbs.push({ label: 'Services', href: '/services' });
      return;
    }

    if (segments[0] === 'services' && segments.length > 1 && isLast) {
      // Individual service page
      const serviceLabels: Record<string, string> = {
        'refrigerator-repair': 'Refrigerator Repair',
        'oven-repair': 'Oven Repair',
        'dishwasher-repair': 'Dishwasher Repair',
        'washer-dryer-repair': 'Washer & Dryer Repair',
        'parts': 'Parts',
        'virtual': 'Virtual Service'
      };
      const label = serviceLabels[segment] || formatLabel(segment);
      breadcrumbs.push({ label, href: currentPath });
      return;
    }

    // Service locations
    if (segment === 'service-locations') {
      breadcrumbs.push({ label: 'Service Locations', href: '/service-locations' });
      return;
    }

    if (segments[0] === 'service-locations' && segments.length > 1 && isLast) {
      // Individual location page
      let label = titleString 
        ? titleString.replace('Appliance Repair ', '').replace(' - Kelly\'s Appliance Center', '')
        : null;
      
      // Try to find city/county name from locations data
      if (!label) {
        // Check if it's a county
        for (const county of Object.values(counties)) {
          if (county.slug === segment) {
            label = county.name;
            break;
          }
        }
        // Check if it's a city
        if (!label) {
          for (const county of Object.values(counties)) {
            const city = county.cities.find(c => c.slug === segment);
            if (city) {
              label = city.name;
              break;
            }
          }
        }
        // Fallback to formatted segment
        if (!label) {
          label = formatLabel(segment);
        }
      }
      breadcrumbs.push({ label, href: currentPath });
      return;
    }

    // Appliance repair pages (old WordPress URLs)
    if (segments[0]?.startsWith('appliance-repair-')) {
      const citySlug = segments[0].replace('appliance-repair-', '');
      breadcrumbs.push({ label: 'Service Locations', href: '/service-locations' });
      if (isLast) {
        let label = titleString 
          ? titleString.replace('Appliance Repair ', '').replace(' - Kelly\'s Appliance Center', '')
          : null;
        
        // Try to find city name from locations data
        if (!label) {
          for (const county of Object.values(counties)) {
            const city = county.cities.find(c => c.slug === citySlug);
            if (city) {
              label = city.name;
              break;
            }
          }
          // Special case for marin-county
          if (!label && citySlug === 'marin-county') {
            label = 'Marin County';
          }
          // Fallback to formatted segment
          if (!label) {
            label = formatLabel(citySlug);
          }
        }
        breadcrumbs.push({ label, href: currentPath });
      }
      return;
    }

    // Blog
    if (segment === 'blog') {
      breadcrumbs.push({ label: 'Blog', href: '/blog' });
      return;
    }

    if (segments[0] === 'blog' && segments.length > 1 && isLast) {
      // Individual blog post
      const label = titleString || formatLabel(segment);
      breadcrumbs.push({ label, href: currentPath });
      return;
    }

    // About Us
    if (segment === 'about-us') {
      breadcrumbs.push({ label: 'About Us', href: '/about-us' });
      return;
    }

    if (segments[0] === 'about-us' && segments.length > 1 && isLast) {
      // About Us subpages
      const subpageLabels: Record<string, string> = {
        'our-team': 'Our Team'
      };
      const label = subpageLabels[segment] || formatLabel(segment);
      breadcrumbs.push({ label, href: currentPath });
      return;
    }

    // Resources
    if (segment === 'resources') {
      breadcrumbs.push({ label: 'Resources', href: '/resources' });
      return;
    }

    if (segments[0] === 'resources' && segments.length > 1 && isLast) {
      // Resource subpages
      const subpageLabels: Record<string, string> = {
        'where-is-my-model-number': 'Where Is My Model Number?',
        'referrals': 'Referrals'
      };
      const label = subpageLabels[segment] || formatLabel(segment);
      breadcrumbs.push({ label, href: currentPath });
      return;
    }

    // Other main pages
    const mainPageLabels: Record<string, string> = {
      'contact': 'Contact',
      'pricing': 'Pricing',
      'authorized-service': 'Authorized Service',
      'schedule-prep': 'Schedule Prep',
      'scheduler-confirmation': 'Scheduler Confirmation',
      'privacy-policy': 'Privacy Policy',
      'diamond-certified': 'Diamond Certified',
      'referrals': 'Referrals'
    };

    if (mainPageLabels[segment] && isLast) {
      breadcrumbs.push({ label: mainPageLabels[segment], href: currentPath });
      return;
    }

    // Fallback: format segment as label
    if (isLast) {
      const label = titleString || formatLabel(segment);
      breadcrumbs.push({ label, href: currentPath });
    }
  });

  return breadcrumbs;
}

/**
 * Format URL segment into readable label
 * Converts kebab-case to Title Case
 */
function formatLabel(segment: string): string {
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

