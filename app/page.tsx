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
import { CTA } from "@/components/cta"
import { ApplicationForm } from "@/components/application-form"
import { Footer } from "@/components/footer"
import { ProgressTracker } from "@/components/progress-tracker"
import { ReferralSystem } from "@/components/referral-system"
import { MoneyBackGuarantee } from "@/components/money-back-guarantee"
import { StatsShowcase } from "@/components/stats-showcase"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhyChooseUs />
      <StatsShowcase />
      <ProgressTracker currentStep={3} />
      <HowItWorks />
      <ProcessTimeline />
      <Services />
      <Destinations />
      <Programs />
      <Universities />
      <Testimonials />
      <MoneyBackGuarantee />
      <ReferralSystem />
      <FAQ />
      <CTA />
      <ApplicationForm />
      <Footer />
    </main>
  )
}
