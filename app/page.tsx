import { AboutSection } from '@/components/sections/about-section'
import { JourneySection } from '@/components/sections/journey-section'
import { RecommendationsSection } from '@/components/sections/recommendations-section'
import { ContactSection } from '@/components/sections/contact-section'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/sections/hero-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Amit Kumar Das - Co-founder & CTO | AI Engineering Leader',
  description: 'Co-founder & CTO at Ratl.ai. AI-native systems architect specializing in intelligent automation, microservices, and engineering productivity.',
  alternates: {
    canonical: 'https://amitkumardas.com',
  },
}

export default function Home() {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      
      <Navigation />
      
      <main id="main-content" className="min-h-screen bg-background">
        {/* Hero Section */}
        <header role="banner">
          <HeroSection />
        </header>
        
        {/* Main Content Sections */}
        <article>
          <section id="about" aria-labelledby="about-heading">
            <AboutSection />
          </section>
          
          <section id="journey" aria-labelledby="journey-heading">
            <JourneySection />
          </section>
          
          <section id="recommendations" aria-labelledby="recommendations-heading">
            <RecommendationsSection />
          </section>
          
          <section id="contact" aria-labelledby="contact-heading">
            <ContactSection />
          </section>
        </article>
      </main>
    </>
  )
} 