import Image from 'next/image'
import { Card, CardContent, CardHeader } from './card'

interface ArchitectureDiagramProps {
  image: string
  alt: string
  legend: Array<{
    label: string
    description: string
  }>
  title?: string
}

export function ArchitectureDiagram({
  image,
  alt,
  legend,
  title = "Architecture Overview",
}: ArchitectureDiagramProps) {
  return (
    <Card className="my-8">
      <CardHeader>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="relative overflow-hidden rounded-lg border">
          <Image
            src={image}
            alt={alt}
            width={800}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {legend.map((item, index) => (
            <div key={index} className="space-y-1">
              <h4 className="font-medium text-sm">{item.label}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


