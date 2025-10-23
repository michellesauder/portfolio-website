import Image from 'next/image'
import { Section, Card, CardContent, CTA } from '@/components'

export const metadata = {
  title: 'About',
  description: 'Learn about my background, philosophy, and approach to building scalable end-to-end solutions.',
}

const values = [
  {
    title: 'Customer-Centric',
    description: 'Building solutions that prioritize user experience and business value.',
    icon: '🎯'
  },
  {
    title: 'Collaboration',
    description: 'Fostering team growth through mentorship and knowledge sharing.',
    icon: '🤝'
  },
  {
    title: 'Innovation',
    description: 'Applying AI and modern technologies to accelerate development.',
    icon: '🚀'
  }
]

const skills = [
  'AWS (ECS, Lambda, Aurora, S3, CloudFront, Cognito, WAF)',
  'CDK (TypeScript), Docker, GitHub Actions, IaC',
  'Node.js, NestJS, GraphQL, REST APIs, PostgreSQL',
  'React, Next.js, TypeScript, Tailwind CSS',
  'Supabase, Redis, Prisma, Authentication (JWT, Cognito)',
  'Jest, Playwright, Cypress, CI/CD, Microservices',
  'Salesforce Integration, Event-Driven Design',
  'GSAP, Framer Motion, WCAG Accessibility'
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <Section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                About Me
              </h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  I&apos;m a Senior Full Stack Engineer with 6+ years of experience 
                  architecting secure, scalable systems across healthcare, fintech, and IoT. 
                  Currently at Four Nine Digital, I drive full-stack development and AWS 
                  infrastructure for high-impact client projects including GotCare (national 
                  healthcare platform) and Amazon/Twitch IVS interactive streaming demos.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  My expertise spans AWS (ECS, Lambda, CDK), modern JavaScript frameworks 
                  (React, Next.js, NestJS), and I&apos;m passionate about applying AI to 
                  engineering workflows to accelerate innovation and deliver lasting value. 
                  I&apos;m known for building customer-centric solutions, iterating quickly 
                  across design and infrastructure, and fostering collaboration across teams.
                </p>
                <p className="text-lg text-muted-foreground">
                  Previously, I contributed to Operto&apos;s hospitality SaaS platform, 
                  building high-performance React interfaces and real-time IoT integrations. 
                  My journey began in financial services at Scotiabank, where I managed a 
                  $50M+ portfolio and earned the &quot;Best of the Best&quot; Award for 
                  excellence in performance and teamwork.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="aspect-square w-80 rounded-2xl bg-muted overflow-hidden">
                  <Image
                    src="/images/about/headshot.jpg"
                    alt="Michelle Sauder"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl">💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section className="bg-muted/50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              My Philosophy
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide my approach to development
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-3xl">{value.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section>
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              Technologies and methodologies I work with
            </p>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Experience Timeline */}
      <Section className="bg-muted/50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Experience Timeline
            </h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in my career
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-4 w-4 rounded-full bg-primary mt-2"></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Senior Solutions Architect</h3>
                <p className="text-sm text-muted-foreground mb-2">TechCorp • 2022 - Present</p>
                <p className="text-sm">
                  Leading cloud architecture initiatives for enterprise clients, 
                  implementing microservices patterns, and building AI-powered solutions.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-4 w-4 rounded-full bg-primary mt-2"></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Full-Stack Developer</h3>
                <p className="text-sm text-muted-foreground mb-2">StartupXYZ • 2020 - 2022</p>
                <p className="text-sm">
                  Built scalable web applications from scratch, implemented CI/CD pipelines, 
                  and integrated third-party APIs and AI services.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-4 w-4 rounded-full bg-primary mt-2"></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Backend Developer</h3>
                <p className="text-sm text-muted-foreground mb-2">DataFlow Inc • 2018 - 2020</p>
                <p className="text-sm">
                  Developed high-performance APIs and data processing systems, 
                  optimized database queries, and implemented monitoring solutions.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-4 w-4 rounded-full bg-primary mt-2"></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Software Engineer</h3>
                <p className="text-sm text-muted-foreground mb-2">WebSolutions • 2016 - 2018</p>
                <p className="text-sm">
                  Started my career building web applications, learning best practices, 
                  and contributing to open-source projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            I&apos;m always excited to take on new challenges and help bring innovative ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
            <CTA href="/contact" size="lg" showArrow>
              Get in Touch
            </CTA>
            <CTA href="/projects" variant="outline" size="lg">
              View My Work
            </CTA>
          </div>
        </div>
      </Section>
    </>
  )
}
