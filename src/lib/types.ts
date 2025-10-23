export interface Project {
  title: string
  slug: string
  summary: string
  role: string
  timeframe: string
  stack: string[]
  outcomes: string[]
  hero: string
  repo?: string
  demo?: string
  content: string
}

export interface Service {
  title: string
  description: string
  scope: string[]
  deliverables: string[]
  outcomes: string[]
  icon: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface NavItem {
  title: string
  href: string
  disabled?: boolean
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
    linkedin: string
  }
}
