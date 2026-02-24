import CTA from '@/components/CTA'

type Props = {
  heading?: string
  subtitle?: string
}

export default function MidPageCTA({
  heading = 'Ready to Get Your Appliance Fixed?',
  subtitle = 'Call for same-day scheduling or request an appointment online.',
}: Props) {
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{heading}</h2>
          <p className="text-gray-700 mb-6">{subtitle}</p>
          <CTA
            className="flex flex-col sm:flex-row gap-4 justify-center"
            disclaimerVariant="short"
            callLabel="mid_cta_call"
            bookLabel="mid_cta_book"
          />
        </div>
      </div>
    </section>
  )
}
