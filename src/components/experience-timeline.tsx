import { Card, CardContent, CardHeader } from './card'
import { Badge } from './badge'

interface Experience {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
}

interface ExperienceTimelineProps {
  experiences: Experience[]
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <Card key={index} className="relative">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-lg text-primary font-medium">{exp.company}</p>
              </div>
              <Badge variant="outline" className="w-fit">
                {exp.period}
              </Badge>
            </div>
            <p className="text-muted-foreground mt-2">{exp.description}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Key Achievements:</h4>
              <ul className="space-y-1">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
