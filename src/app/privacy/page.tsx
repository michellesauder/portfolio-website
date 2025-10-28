import { Section } from '@/components'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Michelle Sauder\'s portfolio website.',
}

export default function PrivacyPage() {
  return (
    <>
      <Section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2>Information We Collect</h2>
            <p>
              This website may collect information you provide directly, such as when you:
            </p>
            <ul>
              <li>Fill out the contact form</li>
              <li>Subscribe to updates</li>
              <li>Communicate with us</li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Respond to your inquiries</li>
              <li>Provide customer support</li>
              <li>Improve our website and services</li>
            </ul>
            
            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
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




