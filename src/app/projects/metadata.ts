import { Metadata } from 'next'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of end-to-end scalable solutions across healthcare, fintech, and IoT. Featured projects include GotCare Healthcare Platform, Amazon/Twitch IVS streaming demos, and Operto Hospitality SaaS.',
  openGraph: {
    title: 'Projects | Michelle Sauder',
    description: 'Explore my portfolio of end-to-end scalable solutions across healthcare, fintech, and IoT.',
    type: 'website',
  },
  twitter: {
    title: 'Projects | Michelle Sauder',
    description: 'Explore my portfolio of end-to-end scalable solutions across healthcare, fintech, and IoT.',
  },
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
}

