"use client"

import { ArrowLeft, ArrowRight, Stamp, CheckCircle, Zap, Shield, Clock, FileCheck, Users, Phone, Mail, MessageCircle, Globe, Award } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export default function VisaPage() {
  const { t, locale } = useLanguage()
  const service = t.services.items.visa

  const stats = [
    { value: "98%", label: locale === "en" ? "Success Rate" : "نسبة النجاح", desc: locale === "en" ? "Visa approval guaranteed" : "ضمان موافقة التأشيرة" },
    { value: "2-3", label: locale === "en" ? "Weeks Processing" : "أسابيع المعالجة", desc: locale === "en" ? "Fast processing time" : "وقت معالجة سريع" },
    { value: "100%", label: locale === "en" ? "Document Support" : "دعم الوثائق", desc: locale === "en" ? "Complete documentation help" : "مساعدة في الوثائق الكاملة" },
  ]

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

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              {locale === "en" ? "Let's Get Your Visa Approved" : "دعنا نحصل على موافقة تأشيرتك"}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {locale === "en" ? "98% success rate - Your visa journey starts here" : "98% نسبة نجاح - رحلة تأشيرتك تبدأ هنا"}
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl mx-auto mb-8">
            {/* WhatsApp China */}
            <a href="https://wa.me/8615587237864" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 hover:bg-slate-900 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-400">{locale === "en" ? "WhatsApp" : "واتساب"}</div>
                <div className="text-white font-medium">+86 15587237864</div>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:info@dinoora.com" className="group flex items-center gap-4 p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 hover:bg-slate-900 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-400">{locale === "en" ? "Email" : "البريد"}</div>
                <div className="text-white font-medium">info@dinoora.com</div>
              </div>
            </a>
          </div>

          <div className="text-center">
            <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-10 py-7 text-lg shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-300" asChild>
              <Link href="#apply" className="flex items-center gap-2">
                {t.services.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
