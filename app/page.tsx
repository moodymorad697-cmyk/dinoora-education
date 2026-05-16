import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyChooseUs } from "@/components/why-choose-us"
import { HowItWorks } from "@/components/how-it-works"
import { ProcessTimeline } from "@/components/process-timeline"
import { Services } from "@/components/services"
import { Destinations } from "@/components/destinations"
import { Programs } from "@/components/programs"
import { Universities } from "@/components/universities"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { EnhancedApplicationForm } from "@/components/enhanced-application-form"
import { Footer } from "@/components/footer"
import { TrustBadges, TrustStats, Certifications, Guarantees, SocialProof } from "@/components/trust-signals"
import { StatsShowcase } from "@/components/stats-showcase"
import { SuccessStories, SuccessStats, MoneyBackGuarantee, ReferralProgram } from "@/components/success-stories"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Core Sections */}
      <Hero />
      <TrustBadges />
      <WhyChooseUs />
      <TrustStats />
      
      {/* Process & Services */}
      <HowItWorks />
      <ProcessTimeline />
      <Services />
      
      {/* Destinations & Programs */}
      <Destinations />
      <Programs />
      <Universities />
      
      {/* Trust Building */}
      <Certifications />
      <SuccessStories />
      <SuccessStats />
      <Testimonials />
      <MoneyBackGuarantee />
      <ReferralProgram />
      <Guarantees />
      <SocialProof />
      
      {/* Information */}
      <FAQ />
      
      {/* Final CTA - Only one application form at the end */}
      <EnhancedApplicationForm />
      
      <Footer />
    </main>
  )
}
