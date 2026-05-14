"use client"

import { ArrowLeft, ArrowRight, HeartHandshake, CheckCircle, Calendar, GraduationCap, AlertCircle, Briefcase, Users, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export default function FollowupPage() {
  const { t, locale } = useLanguage()
  const service = t.services.items.followup

  const features = [
    {
      icon: Calendar,
      title: locale === "en" ? "Monthly Check-ins" : "متابعة شهرية",
      desc: locale === "en" ? "Regular progress reviews and support" : "مراجعات دورية للتقدم والدعم",
    },
    {
      icon: GraduationCap,
      title: locale === "en" ? "Academic Guidance" : "إرشاد أكاديمي",
      desc: locale === "en" ? "Course selection and study strategies" : "اختيار المواد واستراتيجيات الدراسة",
    },
    {
      icon: AlertCircle,
      title: locale === "en" ? "Emergency Assistance" : "مساعدة طوارئ",
      desc: locale === "en" ? "24/7 support for urgent situations" : "دعم 24/7 للمواقف الطارئة",
    },
    {
      icon: Briefcase,
      title: locale === "en" ? "Career Advice" : "نصائح مهنية",
      desc: locale === "en" ? "Internship and job placement support" : "دعم التدريب والتوظيف",
    },
  ]

  const services = [
    { en: "Academic Counseling", ar: "استشارات أكاديمية" },
    { en: "Mental Health Support", ar: "دعم الصحة النفسية" },
    { en: "Legal Assistance", ar: "مساعدة قانونية" },
    { en: "Medical Referrals", ar: "إحالات طبية" },
    { en: "Cultural Integration", ar: "دمج ثقافي" },
    { en: "Language Support", ar: "دعم لغوي" },
  ]

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Header - Dark Gold Theme */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors mb-8 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">{locale === "en" ? "Back to Services" : "العودة للخدمات"}</span>
          </Link>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20">
              <HeartHandshake className="h-10 w-10 text-amber-400" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-3">{service.title}</h1>
              <p className="text-xl text-slate-400 max-w-2xl">{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-white text-center">
            {locale === "en" ? "Comprehensive Student Support" : "دعم الطلاب الشامل"}
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((item, i) => (
              <div key={i} className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-amber-500/30 hover:bg-slate-900/80 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-white text-center">
            {locale === "en" ? "We're Always Here for You" : "نحن دائماً هنا من أجلك"}
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-white font-medium">{locale === "en" ? item.en : item.ar}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              {locale === "en" ? "Your Success is Our Priority" : "نجاحك هو أولويتنا"}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {locale === "en" ? "Continuous support throughout your academic journey" : "دعم مستمر طوال رحلتك الأكاديمية"}
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
