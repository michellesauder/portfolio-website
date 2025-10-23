import { Section, CTA, ProjectCard, LogoCloud } from '@/components'
import { getAllProjects } from '@/lib/mdx'
import { siteConfig } from '@/lib/config'

export default async function Home() {
  const projects = await getAllProjects()
  const featuredProjects = projects.slice(0, 3)

  const logos = [
    { name: 'AWS', src: '/images/logos/aws.svg', alt: 'AWS' },
    { name: 'Google Cloud', src: '/images/logos/google-cloud.svg', alt: 'Google Cloud' },
    { name: 'Microsoft', src: '/images/logos/microsoft.svg', alt: 'Microsoft' },
    { name: 'Stripe', src: '/images/logos/stripe.svg', alt: 'Stripe' },
    { name: 'Shopify', src: '/images/logos/shopify.svg', alt: 'Shopify' },
    { name: 'Vercel', src: '/images/logos/vercel.svg', alt: 'Vercel' },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center px-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            {siteConfig.description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
            <CTA href="/contact" size="lg" showArrow>
              Book a call
            </CTA>
            <CTA href="/projects" variant="outline" size="lg">
              View Projects
            </CTA>
          </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section className="bg-muted/50">
        <div className="mx-auto max-w-4xl text-center px-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            End-to-end solutions that scale from startup to enterprise
          </p>
        </div>
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <CTA href="/projects" variant="outline">
              View All Projects
            </CTA>
          </div>
        </div>
      </Section>

      {/* Services Teaser */}
      <Section>
        <div className="mx-auto max-w-4xl text-center px-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive solutions for modern businesses
          </p>
        </div>
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold">☁️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Cloud Architecture</h3>
              <p className="text-sm text-muted-foreground">
                Scalable, secure cloud infrastructure design and implementation
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Backend & APIs</h3>
              <p className="text-sm text-muted-foreground">
                High-performance APIs and microservices architecture
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold">🤖</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Integrations</h3>
              <p className="text-sm text-muted-foreground">
                Machine learning and AI-powered feature development
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-bold">🔧</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">DevOps & Observability</h3>
              <p className="text-sm text-muted-foreground">
                CI/CD pipelines, monitoring, and infrastructure automation
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <CTA href="/services" variant="outline">
              Learn More
            </CTA>
          </div>
        </div>
      </Section>

      {/* Logo Cloud */}
      <LogoCloud logos={logos} />

      {/* CTA Section */}
      <Section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl text-center px-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to build something amazing?
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Let&apos;s discuss your project and how I can help you achieve your goals.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
            <CTA href="/contact" variant="secondary" size="lg" showArrow>
              Get Started
            </CTA>
            <CTA href="mailto:michelle.g.sauder@gmail.com" variant="ghost" size="lg">
              Email Me
            </CTA>
          </div>
        </div>
      </Section>
    </>
  )
}
