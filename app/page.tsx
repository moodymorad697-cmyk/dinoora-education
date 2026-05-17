import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyChooseUs } from "@/components/why-choose-us"
import { HowItWorks } from "@/components/how-it-works"
import { Services } from "@/components/services"
import { Destinations } from "@/components/destinations"
import { Programs } from "@/components/programs"
import { Universities } from "@/components/universities"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { EnhancedApplicationForm } from "@/components/enhanced-application-form"
import { Footer } from "@/components/footer"
import { TrustStats, Certifications } from "@/components/trust-signals"
import { MoneyBackGuarantee, ReferralProgram } from "@/components/success-stories"
import { SectionDivider } from "@/components/section-divider"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Core Sections */}
      <Hero />
      <WhyChooseUs />
      <TrustStats />
      <SectionDivider />
      
      {/* Process & Services */}
      <HowItWorks />
      <SectionDivider />
      <Services />
      <SectionDivider />
      
      {/* Destinations & Programs */}
      <Destinations />
      <SectionDivider />
      <Programs />
      <Universities />
      
      {/* Trust Building */}
      <Certifications />
      <Testimonials />
      <MoneyBackGuarantee />
      <ReferralProgram />
      
      {/* Information */}
      <FAQ />
      
      {/* Final CTA - Only one application form at the end */}
      <EnhancedApplicationForm />
      
      <Footer />
    </main>
  )
}
