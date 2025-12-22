import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import { getCompanyInfo } from '@/lib/content'
import Breadcrumbs from '@/components/Breadcrumbs'
import { generateBreadcrumbs } from '@/lib/breadcrumbs'
import ModelNumberGuideClient from './ModelNumberGuideClient'
import { appliances } from './modelNumberData'

const companyInfo = getCompanyInfo()

export const metadata: Metadata = {
  title: 'How to Find Appliance Model Numbers | Complete Guide',
  description:
    "Find your appliance model number fast with our step-by-step guide. Covers refrigerators, ovens, washers, dryers, dishwashers, microwaves, and cooktops. Call (707) 664-9702 for help.",
  alternates: {
    canonical: '/resources/where-is-my-model-number',
  },
}

function buildHowToGraph() {
  const baseUrl = 'https://kellysappliancerepair.com'
  return appliances.map((a) => ({
    '@type': 'HowTo',
    name: `How to Find Your ${a.title} Model Number`,
    description: `Step-by-step locations to check on ${a.title.toLowerCase()} to find the model/serial tag.`,
    step: a.sections.flatMap((s) =>
      s.locations.map((loc) => ({
        '@type': 'HowToStep',
        name: `Check: ${s.subtitle}`,
        text: loc,
      }))
    ),
    tool: [{ '@type': 'HowToTool', name: 'Flashlight (optional)' }],
    supply: [{ '@type': 'HowToSupply', name: 'Phone camera (optional)' }],
    url: `${baseUrl}/resources/where-is-my-model-number#appliance-${a.id}`,
  }))
}

function buildFaqSchema() {
  return {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "What if I can't find my model number?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Call us at ${companyInfo.phone} and we’ll walk you through finding it for your specific appliance. You can also check your receipt or user manual.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Why do you need my model number for repairs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Your model number helps us identify the correct parts and procedures for your exact appliance, saving time and avoiding delays.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the serial number important too?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The serial number is often needed to determine manufacture date, warranty status, and compatible parts revisions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I take the appliance apart to find the tag?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "No. Avoid disassembly, especially for appliances under warranty. If you can't find it, call us and we’ll guide you safely.",
        },
      },
    ],
  }
}

export default function ModelNumberGuidePage() {
  const breadcrumbs = generateBreadcrumbs('/resources/where-is-my-model-number', metadata.title)

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [...buildHowToGraph(), buildFaqSchema()],
  }

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />
      <ModelNumberGuideClient companyInfo={companyInfo} appliances={appliances} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </Layout>
  )
}


