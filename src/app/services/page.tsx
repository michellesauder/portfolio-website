import { Section, Card, CardContent, CardHeader, CTA } from '@/components'

export const metadata = {
  title: 'Services',
  description: 'Comprehensive solutions for modern businesses: Cloud Architecture, Backend & APIs, AI Integrations, and DevOps & Observability.',
}

const services = [
  {
    title: 'AWS Cloud Architecture',
    description: 'Design and implement scalable, secure AWS infrastructure using CDK, ECS, Lambda, and modern cloud patterns.',
    scope: [
      'AWS CDK (TypeScript) Infrastructure as Code',
      'ECS Fargate containerized microservices',
      'Lambda serverless functions and EventBridge',
      'Aurora PostgreSQL and DynamoDB databases',
      'CloudFront CDN and WAF security',
      'Cognito authentication and authorization'
    ],
    deliverables: [
      'CDK infrastructure deployment scripts',
      'Scalable microservices architecture',
      'Security and compliance implementation',
      'Cost optimization and monitoring setup',
      'CI/CD pipeline with GitHub Actions',
      'Disaster recovery and backup procedures'
    ],
    outcomes: [
      '99.9% uptime with automated scaling',
      'Sub-300ms response times',
      'Zero-downtime deployments',
      'HIPAA-compliant security measures'
    ],
    icon: '☁️'
  },
  {
    title: 'Backend & APIs',
    description: 'Build high-performance APIs and microservices that power your applications.',
    scope: [
      'RESTful and GraphQL API design',
      'Microservices architecture',
      'Database design and optimization',
      'Authentication and authorization',
      'API documentation and testing',
      'Performance monitoring and optimization'
    ],
    deliverables: [
      'API specification and documentation',
      'Backend service implementation',
      'Database schema and migrations',
      'Authentication system setup',
      'API testing suite',
      'Performance monitoring dashboard'
    ],
    outcomes: [
      'Sub-second API response times',
      'Horizontal scaling capabilities',
      'Comprehensive API documentation',
      'Automated testing and deployment'
    ],
    icon: '⚡'
  },
  {
    title: 'AI Integrations',
    description: 'Integrate machine learning and AI capabilities into your existing systems.',
    scope: [
      'Machine learning model development',
      'AI API integrations (OpenAI, Anthropic)',
      'Data pipeline and preprocessing',
      'Model deployment and monitoring',
      'Custom AI solution development',
      'AI ethics and compliance'
    ],
    deliverables: [
      'AI integration architecture',
      'Machine learning models',
      'Data processing pipelines',
      'API endpoints for AI services',
      'Model monitoring and retraining',
      'AI ethics guidelines and documentation'
    ],
    outcomes: [
      '95% accuracy in AI predictions',
      'Real-time AI processing capabilities',
      'Automated model retraining',
      'Comprehensive AI monitoring'
    ],
    icon: '🤖'
  },
  {
    title: 'DevOps & Observability',
    description: 'Streamline your development workflow with robust CI/CD pipelines and monitoring.',
    scope: [
      'CI/CD pipeline setup and optimization',
      'Container orchestration (Kubernetes, Docker)',
      'Infrastructure monitoring and alerting',
      'Log aggregation and analysis',
      'Security scanning and compliance',
      'Performance optimization and tuning'
    ],
    deliverables: [
      'CI/CD pipeline configuration',
      'Container orchestration setup',
      'Monitoring and alerting systems',
      'Log management solution',
      'Security scanning automation',
      'Performance optimization recommendations'
    ],
    outcomes: [
      '80% faster deployment cycles',
      '99.9% system reliability',
      'Automated security scanning',
      'Real-time performance monitoring'
    ],
    icon: '🔧'
  }
]

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <Section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center px-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Comprehensive solutions for modern businesses
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <Card key={index} hover className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold mb-3">Scope</h4>
                    <ul className="space-y-1">
                      {service.scope.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-3">Deliverables</h4>
                    <ul className="space-y-1">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-3">Expected Outcomes</h4>
                    <ul className="space-y-1">
                      {service.outcomes.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-muted/50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              How I Work
            </h2>
            <p className="text-lg text-muted-foreground">
              A proven process that delivers results
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Discovery</h3>
              <p className="text-sm text-muted-foreground">
                Understanding your business goals, technical requirements, and constraints
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Planning</h3>
              <p className="text-sm text-muted-foreground">
                Creating detailed architecture plans and implementation roadmaps
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Implementation</h3>
              <p className="text-sm text-muted-foreground">
                Building and deploying solutions with regular progress updates
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4">
                <span className="font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Optimization</h3>
              <p className="text-sm text-muted-foreground">
                Monitoring performance and continuously improving the solution
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-16">
        <div className="mx-auto max-w-4xl text-center px-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let&apos;s discuss your project and how I can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
            <CTA href="/contact" size="lg" showArrow>
              Book a Call
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
