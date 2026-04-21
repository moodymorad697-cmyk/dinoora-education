"use client"

import { ArrowLeft, Stamp, CheckCircle, Zap, Shield, Clock } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { ApplicationForm } from "@/components/application-form"

export default function VisaPage() {
  const { t, locale } = useLanguage()
  const service = t.services.items.visa

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
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-500/10 text-blue-400">
              <Stamp className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">{service.title}</h1>
              <p className="text-lg text-muted-foreground mt-2">{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {[
              { value: "98%", label: locale === "en" ? "Success Rate" : "نسبة النجاح" },
              { value: "2-3", label: locale === "en" ? "Weeks Processing" : "أسابيع المعالجة" },
              { value: "100%", label: locale === "en" ? "Document Support" : "دعم الوثائق" },
            ].map((stat, i) => (
              <div key={i} className="rounded-2xl border border-border/50 bg-card/30 p-8 text-center backdrop-blur-sm">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="relative py-24 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
            {locale === "en" ? "What We Handle" : "ما نتولاه"}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Shield,
                title: locale === "en" ? "Document Preparation" : "إعداد الوثائق",
                items: [
                  locale === "en" ? "Complete checklist" : "قائمة كاملة",
                  locale === "en" ? "Translation & notarization" : "الترجمة والتوثيق",
                  locale === "en" ? "Ministry attestation" : "تصديق الوزارة",
                ],
              },
              {
                icon: Clock,
                title: locale === "en" ? "Interview Coaching" : "تدريب المقابلة",
                items: [
                  locale === "en" ? "Mock interview sessions" : "جلسات مقابلة تجريبية",
                  locale === "en" ? "Q&A preparation" : "تحضير الأسئلة",
                  locale === "en" ? "Confidence building" : "بناء الثقة",
                ],
              },
            ].map((section, i) => (
              <div key={i} className="rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm">
                <section.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
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
            {locale === "en" ? "Let's Get Your Visa Approved" : "دعنا نحصل على موافقة تأشيرتك"}
          </h2>
          <Button className="gold-gradient text-primary-foreground px-8 py-6 text-lg" asChild>
            <Link href="#apply">
              {t.services.cta}
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
