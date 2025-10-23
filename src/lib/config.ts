import { SiteConfig } from './types'

export const siteConfig: SiteConfig = {
  name: 'Michelle Sauder',
  description: 'Senior Full Stack Engineer with 6+ years of experience architecting secure, scalable systems across healthcare, fintech, and IoT. Expert in AWS (ECS, Lambda, CDK) and modern JavaScript frameworks (React, Next.js, NestJS).',
  url: 'https://michellesauder.dev',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/michellesauder',
    github: 'https://github.com/michellesauder',
    linkedin: 'https://linkedin.com/in/michelle-sauder-072a8468',
  },
}

export const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Services',
    href: '/services',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
] as const

