import CTA from '@/components/CTA'

type Props = {
  cityName: string
}

export default function BottomCTA({ cityName }: Props) {
  return (
    <section className="py-16 bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Appliance Repair in {cityName}?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Serving {cityName} and surrounding areas with professional, factory-authorized appliance repair since 1975.
        </p>
        <CTA
          className="flex flex-col sm:flex-row gap-4 justify-center"
          disclaimerVariant="medium"
          callLabel="bottom_cta_call"
          bookLabel="bottom_cta_book"
          disclaimerClassName="text-sm text-green-100 text-center mt-4"
        />
      </div>
    </section>
  )
}
