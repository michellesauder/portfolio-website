import { Metadata } from 'next'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? siteConfig.url : 'http://localhost:3000'),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Senior Full Stack Engineer',
    'AWS Cloud Architecture',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Healthcare Technology',
    'Fintech Solutions',
    'IoT Development',
    'Microservices Architecture',
    'DevOps Engineer',
    'Software Engineer Vancouver',
    'Full Stack Developer Canada'
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@michellesauder',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your actual verification code
  },
  alternates: {
    canonical: siteConfig.url,
  },
}
