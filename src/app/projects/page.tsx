import { Section, ProjectCard, Badge } from '@/components'
import { getAllProjects } from '@/lib/mdx'
import { Search, Filter } from 'lucide-react'

export const metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of scalable end-to-end solutions with backend depth and AI integrations.',
}

export default async function ProjectsPage() {
  const projects = await getAllProjects()
  
  // Get all unique technologies for filtering
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.stack))
  ).sort()

  return (
    <>
      {/* Header */}
      <Section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center px-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Projects
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            End-to-end solutions that scale from startup to enterprise
          </p>
        </div>
      </Section>

      {/* Search and Filter */}
      <Section className="py-8 border-t">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Filter by technology:</span>
              <div className="flex flex-wrap gap-2">
                {allTechnologies.slice(0, 6).map((tech) => (
                  <Badge key={tech} variant="outline" className="cursor-pointer hover:bg-accent">
                    {tech}
                  </Badge>
                ))}
                {allTechnologies.length > 6 && (
                  <Badge variant="outline" className="cursor-pointer hover:bg-accent">
                    +{allTechnologies.length - 6} more
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Grid */}
      <Section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 items-stretch">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          
          {projects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found.</p>
            </div>
          )}
        </div>
      </Section>
    </>
  )
}
