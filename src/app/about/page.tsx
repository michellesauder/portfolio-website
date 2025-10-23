import Image from 'next/image'
import { Section, Card, CardContent, CTA, ExperienceTimeline } from '@/components'

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

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Four Nine Digital',
    period: 'March 2022 - September 2025',
    description: 'Drove full-stack development and AWS infrastructure for high-impact client projects, including GotCare (national healthcare platform) and Amazon/Twitch IVS (interactive streaming demos). Operated across React, GraphQL, and cloud ecosystems, bridging architecture with performance and mentoring engineers across teams.',
    achievements: [
      'Architected and deployed AWS environments using CDK (ECS Fargate, Aurora PostgreSQL, Cognito, Lambda, EventBridge, WAF, S3, CloudFront) to deliver secure, scalable platforms.',
      'Integrated Salesforce APIs, GraphQL, and Supabase to support hybrid data ownership and multi-tenant system design.',
      'Developed React / Next.js applications with advanced animations (GSAP, Framer Motion) and WCAG-compliant accessibility.',
      'Implemented CI/CD pipelines via GitHub Actions for automated testing, deployment, and rollback management.',
      'Built real-time streaming experiences (<300 ms latency) using Amazon IVS SDK and Next.js for developer enablement and demos.',
      'Authored documentation and mentored peers on infrastructure standards, cloud patterns, and deployment workflows.',
      'Drove alignment between engineering, product, and leadership—strengthening platform reliability and customer-focused delivery.'
    ],
    technologies: ['AWS', 'CDK', 'ECS Fargate', 'Aurora PostgreSQL', 'Cognito', 'Lambda', 'EventBridge', 'React', 'Next.js', 'GraphQL', 'TypeScript', 'GitHub Actions', 'Amazon IVS', 'GSAP', 'Framer Motion']
  },
  {
    title: 'Software Developer',
    company: 'Operto Guest Technologies',
    period: 'August 2019 - July 2021',
    description: 'Contributed to Operto\'s hospitality SaaS platform, building high-performance React interfaces and real-time IoT integrations that connected guests, hotels, and smart devices to deliver seamless digital experiences.',
    achievements: [
      'Developed and optimized React-based web and mobile interfaces, enhancing usability, accessibility, and performance across connected properties.',
      'Integrated IoT device controls (locks, thermostats, sensors) into real-time workflows, improving reliability and guest satisfaction.',
      'Collaborated with product, firmware, and QA teams to deliver stable, customer-driven releases and maintain a culture of open communication.',
      'Improved efficiency through automation tooling and front-end performance optimizations.',
      'Strengthened expertise in front-end architecture and IoT-driven systems, laying the foundation for later cloud-scale engineering leadership.'
    ],
    technologies: ['React', 'JavaScript', 'IoT Integration', 'Real-time Systems', 'Mobile Development', 'Performance Optimization', 'Team Collaboration']
  },
  {
    title: 'Financial Advisor',
    company: 'Scotiabank',
    period: 'May 2015 - August 2019',
    description: 'Delivered client-focused financial strategies for a $50M+ portfolio, strengthening communication, collaboration, and long-term planning skills—foundations for customer-centric engineering leadership.',
    achievements: [
      'Managed a $50M+ portfolio with focus on client relationship building and strategic financial planning.',
      'Recognized with the "Best of the Best" Award (2018) for excellence in performance, integrity, and teamwork.',
      'Developed strong communication and collaboration skills that translate to effective engineering leadership.',
      'Built foundation in customer-centric approaches and long-term strategic thinking.'
    ],
    technologies: ['Financial Planning', 'Client Relations', 'Portfolio Management', 'Team Leadership', 'Strategic Planning']
  }
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
                  I&apos;m a Software Developer with 6+ years of experience 
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
          
          <ExperienceTimeline experiences={experiences} />
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
