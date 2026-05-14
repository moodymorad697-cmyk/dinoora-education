"use client"

import { ArrowLeft, ArrowRight, Stamp, CheckCircle, Zap, Shield, Clock, FileCheck, Users, Phone, Mail, MessageCircle, Globe, Award } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export default function VisaPage() {
  const { t, locale } = useLanguage()
  const service = t.services.items.visa

  const stats = [
    { value: "98%", label: locale === "en" ? "Success Rate" : "نسبة النجاح", desc: locale === "en" ? "Visa approval guaranteed" : 

  const features = [
    {
      icon: Shield,
      title: locale === "en" ? "Document Preparation" : "إعداد الوثائق",
      desc: locale === "en" ? "Complete checklist, translation & notarization" : "قائمة كاملة، ترجمة وتوثيق",
    },
    {
      icon: Users,
      title: locale === "en" ? "Interview Coaching" : "تدريب المقابلة",
      desc: locale === "en" ? "Mock sessions & confidence building" : "جلسات تجريبية وبناء الثقة",
    },
    {
      icon: Clock,
      title: locale === "en" ? "Fast Processing" : "معالجة سريعة",
      desc: locale === "en" ? "2-3 weeks average processing time" : "متوسط 2-3 أسابيع معالجة",
    },
    {
      icon: Award,
      title: locale === "en" ? "Embassy Guidance" : "إرشاد السفارة",
      desc: locale === "en" ? "Direct communication with embassies" : "تواصل مباشر مع السفارات",
    },
  ]

  const steps = [
    { en: "Document Review", ar: "مراجعة الوثائق" },
    { en: "Application Preparation", ar: "إعداد الطلب" },
    { en: "Embassy Submission", ar: "تقديم للسفارة" },
    { en: "Visa Collection", ar: "استلام التأشيرة" },
  ]

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Header - Dark Gold Theme */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors mb-8 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">{locale === "en" ? "Back to Services" : "العودة للخدمات"}</span>
          </Link>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20">
              <Stamp className="h-10 w-10 text-amber-400" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-3">{service.title}</h1>
              <p className="text-xl text-slate-400 max-w-2xl">{service.description}</p>
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
