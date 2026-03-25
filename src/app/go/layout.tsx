import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Kelly's Appliance Center — Quick Links",
  description:
    'Schedule a repair, request a part, or leave a review for Kelly\'s Appliance Center in Cotati, CA.',
  alternates: {
    canonical: '/go',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function GoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
