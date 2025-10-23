import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { Section, Card, CardContent, CardHeader, Badge, CTA, MDXContent } from '@/components'
import { getProject, getAllProjectSlugs } from '@/lib/mdx'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProject(slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.hero],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      {/* Header */}
      <Section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {project.summary}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                {project.repo && (
                  <CTA href={project.repo} variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </CTA>
                )}
                {project.demo && (
                  <CTA href={project.demo} variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </CTA>
                )}
              </div>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold">Project Details</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Role</h4>
                    <p className="text-sm">{project.role}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Timeframe</h4>
                    <p className="text-sm">{project.timeframe}</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold">Tech Stack</h3>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold">Key Outcomes</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <span className="text-primary mr-2 mt-1">•</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Hero Image */}
      <Section className="py-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative aspect-video overflow-hidden rounded-lg border">
            <Image
              src={project.hero}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Section>

      {/* Project Content */}
      <Section className="py-16">
        <div className="mx-auto max-w-4xl">
          <MDXContent source={project.content} />
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-muted/50">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Interested in working together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let&apos;s discuss how I can help bring your project to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
            <CTA href="/contact" size="lg" showArrow>
              Get Started
            </CTA>
            <CTA href="/projects" variant="outline" size="lg">
              View More Projects
            </CTA>
          </div>
        </div>
      </Section>
    </>
  )
}
