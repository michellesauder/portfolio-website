import { siteConfig } from '@/lib/config'

export function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.twitter,
    ],
    jobTitle: 'Senior Full Stack Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Four Nine Digital',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vancouver',
      addressRegion: 'British Columbia',
      addressCountry: 'CA',
    },
    knowsAbout: [
      'AWS Cloud Architecture',
      'React Development',
      'Next.js',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'GraphQL',
      'Docker',
      'GitHub Actions',
      'Healthcare Technology',
      'Fintech Solutions',
      'IoT Development',
      'Microservices Architecture',
      'DevOps',
    ],
    alumniOf: [
      {
        '@type': 'Organization',
        name: 'Operto Guest Technologies',
      },
      {
        '@type': 'Organization',
        name: 'Scotiabank',
      },
    ],
  }
}

export function generateWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/projects?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateProjectStructuredData(project: {
  title: string
  description: string
  slug: string
  stack: string[]
  timeframe: string
  role: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: `${siteConfig.url}/projects/${project.slug}`,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    dateCreated: project.timeframe,
    keywords: project.stack.join(', '),
    about: {
      '@type': 'Thing',
      name: project.role,
    },
  }
}

