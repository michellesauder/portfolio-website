import Image from 'next/image'

interface LogoCloudProps {
  title?: string
  logos: Array<{
    name: string
    src: string
    alt: string
  }>
}

export function LogoCloud({ title = "Trusted by", logos }: LogoCloudProps) {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h3 className="text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-8">
          {title}
        </h3>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
