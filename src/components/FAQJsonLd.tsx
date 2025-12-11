import { FAQJsonLdProps } from '@/types/faq'

export default function FAQJsonLd({ faqs }: FAQJsonLdProps) {
  // Validate that we have at least 2 FAQs (Google requirement)
  if (!faqs || faqs.length < 2) {
    console.warn('FAQJsonLd: At least 2 FAQs required for rich snippets')
    return null
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

