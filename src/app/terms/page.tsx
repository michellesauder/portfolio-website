import { Section } from '@/components'

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Michelle Sauder\'s portfolio website.',
}

export default function TermsPage() {
  return (
    <>
      <Section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            
            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only.
            </p>
            
            <h2>Disclaimer</h2>
            <p>
              The materials on this website are provided on an 'as is' basis. Michelle Sauder makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            
            <h2>Limitations</h2>
            <p>
              In no event shall Michelle Sauder or her suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
            </p>
            
            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:michelle.g.sauder@gmail.com" className="text-primary hover:underline">
                michelle.g.sauder@gmail.com
              </a>
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}




