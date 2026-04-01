import CateringContent from './CateringContent'

export const metadata = {
  title: 'Catering Division | Kelly\'s Appliance Center',
  description: 'Kelly\'s Appliance Center is proud to announce our new Catering Division. Award-winning BBQ from the same team you trust to fix your appliances. Serving Sonoma & Marin Counties.',
  alternates: {
    canonical: '/catering',
  },
  openGraph: {
    title: 'Catering Division | Kelly\'s Appliance Center',
    description: 'Award-winning BBQ from the same team you trust to fix your appliances. Serving Sonoma & Marin Counties.',
    url: 'https://kellysappliancerepair.com/catering',
    siteName: 'Kelly\'s Appliance Center',
    images: [
      {
        url: '/images/catering/CateringVan.jpg',
        width: 1200,
        height: 630,
        alt: 'Kelly\'s Appliance Center Catering Van',
      },
    ],
    type: 'website',
  },
}

export default function CateringPage() {
  return <CateringContent />
}
