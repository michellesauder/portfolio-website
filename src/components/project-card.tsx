import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardHeader } from './card'
import { Badge } from './badge'
import { CTA } from './cta'
import { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hover className="h-full" data-testid="project-card">
      <CardHeader>
        <div className="aspect-video relative overflow-hidden rounded-md mb-4">
          <Image
            src={project.hero}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-muted-foreground text-sm">{project.summary}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {(project.role || project.timeframe) && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              {project.role && <span>{project.role}</span>}
              {project.timeframe && <span>{project.timeframe}</span>}
            </div>
          </div>
        )}

        <div className="space-y-2">
          <h4 className="text-sm font-medium">Tech Stack</h4>
          <div className="flex flex-wrap gap-1">
            {project.stack.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.stack.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.stack.length - 4} more
              </Badge>
            )}
          </div>
        </div>

        {project.outcomes && project.outcomes.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Key Outcomes</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {project.outcomes.slice(0, 2).map((outcome, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex items-center justify-between pt-4">
          <CTA href={`/projects/${project.slug}`} variant="outline" size="sm">
            View Details
          </CTA>
          <div className="flex space-x-2">
            {project.repo && (
              <Link
                href={project.repo}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="View repository"
              >
                <Github className="h-4 w-4" />
              </Link>
            )}
            {project.demo && (
              <Link
                href={project.demo}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="View demo"
              >
                <ExternalLink className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

