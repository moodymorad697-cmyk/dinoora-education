"use client"

import { ArrowLeft, GraduationCap, CheckCircle, Zap, Users, Target } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { ApplicationForm } from "@/components/application-form"

export default function AdmissionPage() {
  const { t, dir, locale } = useLanguage()
  const service = t.services.items.admission

  const steps = [
    {
      en: "Initial Consultation",
      ar: "الاستشارة الأولية",
      desc: {
        en: "Share your academic profile and career goals. We assess your profile and recommend matching universities.",
        ar: "شارك ملفك الأكاديمي وأهدافك الوظيفية. نقيّم ملفك ونوصي بجامعات متطابقة.",
      },
    },
    {
      en: "Program Selection",
      ar: "اختيار البرنامج",
      desc: {
        en: "Choose from our curated list of 500+ programs. Our experts guide you through each option.",
        ar: "اختر من قائمتنا المختارة بعناية من أكثر من 500 برنامج. يرشدك خبراؤنا عبر كل خيار.",
      },
    },
    {
      en: "Application Submission",
      ar: "تقديم الطلب",
      desc: {
        en: "We prepare and submit your application with complete documentation.",
        ar: "نُعد ونقدم طلبك مع وثائق شاملة.",
      },
    },
    {
      en: "Acceptance & Enrollment",
      ar: "القبول والتسجيل",
      desc: {
        en: "Receive your acceptance letter and complete the enrollment process.",
        ar: "استلم خطاب القبول وأكمل عملية التسجيل.",
      },
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>{locale === "en" ? "Back to Services" : "العودة للخدمات"}</span>
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-500/10 text-amber-400">
              <GraduationCap className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">{service.title}</h1>
              <p className="text-lg text-muted-foreground mt-2">{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
            {locale === "en" ? "Why Choose Our Admission Service?" : "لماذا اختيار خدمة القبول لدينا؟"}
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Zap, title: locale === "en" ? "Fast Processing" : "معالجة سريعة", desc: locale === "en" ? "2-3 weeks average" : "متوسط 2-3 أسابيع" },
              { icon: Target, title: locale === "en" ? "Personalized Match" : "مطابقة مخصصة", desc: locale === "en" ? "Perfect university fit" : "تطابق جامعي مثالي" },
              { icon: Users, title: locale === "en" ? "Expert Team" : "فريق خبير", desc: locale === "en" ? "500+ university network" : "شبكة 500+ جامعة" },
              { icon: CheckCircle, title: locale === "en" ? "100% Success" : "نجاح كامل", desc: locale === "en" ? "Acceptance guaranteed" : "قبول مضمون" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
            {locale === "en" ? "Our Process" : "عمليتنا"}
          </h2>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && <div className="w-1 h-16 bg-primary/20 mt-4" />}
                </div>
                <div className="pb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{locale === "en" ? step.en : step.ar}</h3>
                  <p className="text-muted-foreground">{locale === "en" ? step.desc.en : step.desc.ar}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            {locale === "en" ? "Ready for Your Dream University?" : "مستعد لجامعة أحلامك؟"}
          </h2>
          <Button className="gold-gradient text-primary-foreground px-8 py-6 text-lg" asChild>
            <Link href="#apply">
              {t.services.cta}
            </Link>
          </Button>
        </div>
      </section>

      {/* Application Form */}
      <ApplicationForm />
    </main>
  )
}
