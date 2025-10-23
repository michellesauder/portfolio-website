import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Section, ContactForm, Card, CardContent } from '@/components'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch to discuss your project and how I can help bring your ideas to life.',
}

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    description: 'michelle.g.sauder@gmail.com',
    href: 'mailto:michelle.g.sauder@gmail.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    description: '403.617.1346',
    href: 'tel:+14036171346'
  },
  {
    icon: MapPin,
    title: 'Location',
    description: 'Vancouver, B.C.',
    href: '#'
  },
  {
    icon: Clock,
    title: 'Response Time',
    description: 'Within 24 hours',
    href: '#'
  }
]

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <Section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center px-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Ready to build something amazing? Let&apos;s discuss your project and how I can help.
          </p>
        </div>
      </Section>

      {/* Contact Form and Info */}
      <Section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-8 lg:gap-12 xl:grid-cols-2">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  I&apos;m always excited to hear about new projects and opportunities. 
                  Whether you have a specific project in mind or just want to chat about 
                  technology, feel free to reach out.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{info.title}</h3>
                          <a 
                            href={info.href}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {info.description}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold mb-2">What to expect:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    Response within 24 hours
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    Free initial consultation
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    Detailed project proposal
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    Transparent pricing and timeline
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-muted/50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about working with me
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">What&apos;s your typical project timeline?</h3>
                <p className="text-muted-foreground">
                  Project timelines vary based on complexity, but most projects range from 2-6 months. 
                  I provide detailed timelines during our initial consultation and keep you updated 
                  throughout the development process.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Do you work with startups or only enterprise clients?</h3>
                <p className="text-muted-foreground">
                  I work with clients of all sizes, from early-stage startups to large enterprises. 
                  I believe great solutions can come from any size organization, and I adapt my 
                  approach to fit your specific needs and constraints.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">What technologies do you specialize in?</h3>
                <p className="text-muted-foreground">
                  I specialize in cloud architecture (AWS, GCP, Azure), backend development (Node.js, Python, Go), 
                  AI integrations, and DevOps. I stay current with the latest technologies and can recommend 
                  the best stack for your specific project.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Do you provide ongoing support after project completion?</h3>
                <p className="text-muted-foreground">
                  Yes! I offer ongoing support and maintenance packages to ensure your solution continues 
                  to perform optimally. This includes monitoring, updates, security patches, and feature 
                  enhancements as your business grows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}
