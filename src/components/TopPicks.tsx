// no Link used; keep component lean

export interface TopPickItem {
  name: string
  url?: string
  location?: string
  quote?: string
  person?: string
  role?: string
  mapsUrl?: string
}

export default function TopPicks({
  title = "Kelly's Top Picks",
  intro = "Here are some of Kelly's favorite places to grab a bite!",
  items,
}: {
  title?: string
  intro?: string
  items: TopPickItem[]
}) {
  const extractDomain = (u?: string) => {
    try {
      if (!u) return ''
      const { hostname } = new URL(u)
      return hostname
    } catch {
      return ''
    }
  }

  const faviconFor = (u?: string, size: number = 32) => {
    const domain = extractDomain(u)
    if (!domain) return ''
    return `https://www.google.com/s2/favicons?sz=${size}&domain_url=${encodeURIComponent('https://' + domain)}`
  }

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-700 mt-1">{intro}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {items.map((item, idx) => (
            <article key={idx} className={`bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow tilt-card ${idx===0 ? 'tilt-left' : idx===1 ? 'tilt-none' : 'tilt-right'}`}>
              <div className="flex items-start gap-3">
                {item.url && (
                  <img src={faviconFor(item.url, 40)} alt="" width={40} height={40} className="rounded" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="nofollow noopener noreferrer" className="link-underline">
                        {item.name}
                      </a>
                    ) : (
                      item.name
                    )}
                  </h3>
                  {item.location && <div className="text-sm text-gray-600">{item.location}</div>}
                </div>
              </div>
              {item.quote && (
                <p className="mt-4 text-gray-800 italic">“{item.quote}”</p>
              )}
              {(item.person || item.role) && (
                <div className="mt-3 text-sm text-gray-600">
                  {(item.person || 'Kelly\'s Team')}{item.role ? `, ${item.role}` : ''}
                </div>
              )}
              {(item.url || item.mapsUrl) && (
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  {item.url && (
                    <a href={item.url} target="_blank" rel="nofollow noopener noreferrer" className="btn-fill alt w-full text-center">
                      Website
                    </a>
                  )}
                  {item.mapsUrl && (
                    <a href={item.mapsUrl} target="_blank" rel="nofollow noopener noreferrer" className="btn-fill alt w-full text-center">
                      Google Maps
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


