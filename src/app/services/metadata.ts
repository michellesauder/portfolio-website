import { Metadata } from 'next'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive full-stack development services including AWS Cloud Architecture, Backend & APIs, AI Integrations, and DevOps & Observability. Expert in React, Next.js, TypeScript, and modern cloud technologies.',
  openGraph: {
    title: 'Services | Michelle Sauder',
    description: 'Comprehensive full-stack development services including AWS Cloud Architecture, Backend & APIs, AI Integrations, and DevOps & Observability.',
    type: 'website',
  },
  twitter: {
    title: 'Services | Michelle Sauder',
    description: 'Comprehensive full-stack development services including AWS Cloud Architecture, Backend & APIs, AI Integrations, and DevOps & Observability.',
  },
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
}

