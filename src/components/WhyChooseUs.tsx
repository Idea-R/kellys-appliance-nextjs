import { CheckCircleIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/solid'

type Props = {
  localExpertsText?: string
}

export default function WhyChooseUs({
  localExpertsText = 'Serving the Bay Area since 1975',
}: Props) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-start">
            <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5 shrink-0" />
            <div>
              <strong>Factory Authorized</strong>
              <div className="text-gray-600 text-sm">
                Certified repair using genuine OEM parts
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <ClockIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5 shrink-0" />
            <div>
              <strong>Fast Response</strong>
              <div className="text-gray-600 text-sm">
                Prompt, reliable service with a 90-day guarantee
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <MapPinIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5 shrink-0" />
            <div>
              <strong>Local Experts</strong>
              <div className="text-gray-600 text-sm">{localExpertsText}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
