import FAQJsonLd from '@/components/FAQJsonLd'
import type { FAQ } from '@/types/faq'

type Props = {
  title?: string
  subtitle?: string
  faqs: FAQ[]
  id?: string
}

export default function FAQSection({ title = 'Frequently Asked Questions', subtitle, faqs, id = 'faqs' }: Props) {
  if (!faqs || faqs.length === 0) return null

  const shouldEmitJsonLd = faqs.length >= 2

  return (
    <section id={id} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          {subtitle ? <p className="mt-2 text-gray-700">{subtitle}</p> : null}
        </div>

        <div className="mt-8 space-y-3">
          {faqs.map((faq, idx) => (
            <details
              key={`${faq.question}-${idx}`}
              className="group bg-white rounded-lg border border-gray-200 shadow-sm"
            >
              <summary className="cursor-pointer select-none px-6 py-4 font-semibold text-gray-900 list-none">
                <span className="flex items-start justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="text-gray-400 group-open:text-green-700 transition-colors" aria-hidden="true">
                    +
                  </span>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-700">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Emit FAQPage JSON-LD only when FAQs are visible on-page */}
      {shouldEmitJsonLd ? <FAQJsonLd faqs={faqs} /> : null}
    </section>
  )
}


