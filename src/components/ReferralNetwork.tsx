import Image from 'next/image'
import type { ReferralPartner } from '@/data/referralPartners'
import { partnerHref } from '@/data/referralPartners'

/**
 * Renders a grid of trusted local referral partners, with optional featured
 * partners shown larger up top. Server-rendered, including a JSON-LD ItemList
 * so the recommendations are visible to search engines in the initial HTML.
 *
 * Pass `partners` already filtered for the context (e.g. a single county).
 */
export default function ReferralNetwork({
  title = 'Trusted Local Partners',
  subtitle = 'Other local pros we recommend across complementary trades. We do not take commissions; these are businesses we trust.',
  partners,
  areaServed,
  className = '',
}: {
  title?: string
  subtitle?: string
  partners: ReferralPartner[]
  /** e.g. "Sonoma County" — used for areaServed in schema */
  areaServed?: string
  className?: string
}) {
  if (!partners || partners.length === 0) return null

  const featured = partners.filter((p) => p.featured)
  const regular = partners.filter((p) => !p.featured)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: title,
    itemListElement: partners.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Organization',
        name: p.name,
        url: p.url,
        ...(p.logoSrc ? { image: `https://kellysappliancerepair.com${p.logoSrc}` } : {}),
        ...(areaServed ? { areaServed } : {}),
        description: p.description,
      },
    })),
  }

  return (
    <section className={`py-12 bg-gray-50 ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-700 mt-1 max-w-3xl">{subtitle}</p>
        </div>

        {/* Featured partners */}
        {featured.length > 0 && (
          <div className="grid gap-6 mb-8 md:grid-cols-2">
            {featured.map((p) => (
              <a
                key={p.name}
                href={partnerHref(p)}
                target="_blank"
                rel="noopener noreferrer nofollow"
                data-analytics-label={`referral_${slug(p.name)}`}
                className="group flex items-center gap-5 bg-white border-2 border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-green-300 transition"
              >
                {p.logoSrc ? (
                  <div className="flex-shrink-0 w-28 h-20 bg-white flex items-center justify-center">
                    <Image
                      src={p.logoSrc}
                      alt={`${p.name} logo`}
                      width={160}
                      height={80}
                      className="max-h-20 w-auto object-contain"
                    />
                  </div>
                ) : (
                  <InitialsBadge name={p.name} />
                )}
                <div>
                  <div className="text-xs uppercase tracking-wide text-green-700 font-semibold">
                    {p.category}
                  </div>
                  <div className="text-lg font-bold text-gray-900 group-hover:text-green-700">
                    {p.name}
                  </div>
                  <p className="text-sm text-gray-700 mt-1">{p.description}</p>
                  <PartnerMeta partner={p} />
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Regular partners */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regular.map((p) => (
            <a
              key={p.name}
              href={partnerHref(p)}
              target="_blank"
              rel="noopener noreferrer nofollow"
              data-analytics-label={`referral_${slug(p.name)}`}
              className="group flex flex-col bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-green-300 transition"
            >
              <div className="flex items-center gap-4 mb-3">
                {p.logoSrc ? (
                  <Image
                    src={p.logoSrc}
                    alt={`${p.name} logo`}
                    width={120}
                    height={60}
                    className="h-12 w-auto object-contain flex-shrink-0"
                  />
                ) : (
                  <InitialsBadge name={p.name} small />
                )}
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wide text-green-700 font-semibold">
                    {p.category}
                  </div>
                  <div className="text-base font-bold text-gray-900 group-hover:text-green-700 leading-tight">
                    {p.name}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 flex-1">{p.description}</p>
              <PartnerMeta partner={p} />
              <span className="mt-4 text-green-700 font-semibold text-sm">Visit website →</span>
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-600 mt-8">
          Run a local business that pairs well with appliance repair? We are always
          glad to recommend trusted trades.{' '}
          <a href="/contact" className="text-green-700 underline">
            Get in touch
          </a>{' '}
          to be considered for our referral network.
        </p>
      </div>
    </section>
  )
}

function PartnerMeta({ partner }: { partner: ReferralPartner }) {
  return (
    <div className="mt-2 space-y-0.5">
      {partner.phone && <div className="text-sm text-gray-600">{partner.phone}</div>}
      {partner.serviceAreas && partner.serviceAreas.length > 0 && (
        <div className="text-xs text-gray-500">Serves: {partner.serviceAreas.join(', ')}</div>
      )}
    </div>
  )
}

function InitialsBadge({ name, small = false }: { name: string; small?: boolean }) {
  const initials = getInitials(name)
  const size = small ? 'h-12 w-12 text-base' : 'w-20 h-20 text-2xl'
  return (
    <div
      className={`flex-shrink-0 ${size} rounded-full bg-green-100 text-green-700 font-bold flex items-center justify-center`}
      aria-hidden="true"
    >
      {initials}
    </div>
  )
}

function getInitials(name: string): string {
  const words = name.replace(/[^a-zA-Z0-9 &]/g, '').split(/\s+/).filter(Boolean)
  const letters = words.filter((w) => w !== '&' && w.toLowerCase() !== 'and')
  if (letters.length === 0) return '?'
  if (letters.length === 1) return letters[0].slice(0, 2).toUpperCase()
  return (letters[0][0] + letters[letters.length - 1][0]).toUpperCase()
}

function slug(s: string): string {
  return s.replace(/[^a-z0-9]+/gi, '-').toLowerCase().replace(/^-|-$/g, '')
}
