"use client"

import { ArrowLeft, ArrowRight, GraduationCap, CheckCircle, Zap, Users, Target, Phone, Mail, MessageCircle, Award, Clock, Globe } from "lucide-react"
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

  const features = [
    {
      icon: Globe,
      title: locale === "en" ? "500+ Universities" : "500+ جامعة",
      desc: locale === "en" ? "Direct partnerships with top Chinese institutions" : "شراكات مباشرة مع أفضل المؤسسات الصينية",
    },
    {
      icon: Award,
      title: locale === "en" ? "Priority Processing" : "معالجة ذات أولوية",
      desc: locale === "en" ? "Fast-track applications with direct communication" : "طلبات سريعة مع تواصل مباشر",
    },
    {
      icon: Clock,
      title: locale === "en" ? "2-3 Weeks" : "2-3 أسابيع",
      desc: locale === "en" ? "Average acceptance response time" : "متوسط وقت استجابة القبول",
    },
    {
      icon: CheckCircle,
      title: locale === "en" ? "100% Success Rate" : "100% نسبة النجاح",
      desc: locale === "en" ? "Guaranteed acceptance or money back" : "قبول مضمون أو استرداد المال",
    },
  ]

  const universities = [
    { name: "Tsinghua University", rank: "#1 Asia", location: "Beijing" },
    { name: "Peking University", rank: "#2 Asia", location: "Beijing" },
    { name: "Fudan University", rank: "#3 Asia", location: "Shanghai" },
    { name: "Zhejiang University", rank: "#4 Asia", location: "Hangzhou" },
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
              <GraduationCap className="h-10 w-10 text-amber-400" />
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
            {locale === "en" ? "Why Choose Our Admission Service?" : "لماذا تختار خدمة القبول لدينا؟"}
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

      {/* Top Universities */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white text-center">
            {locale === "en" ? "Partner Universities" : "الجامعات الشريكة"}
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            {locale === "en" 
              ? "Direct partnerships with China's top universities for priority admission"
              : "شراكات مباشرة مع أفضل الجامعات الصينية للقبول ذي الأولوية"}
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {universities.map((uni, i) => (
              <div key={i} className="group p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-all duration-300">
                <div className="text-amber-400 text-sm font-bold mb-2">{uni.rank}</div>
                <h3 className="text-white font-bold mb-1">{uni.name}</h3>
                <p className="text-slate-400 text-sm">{uni.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-white text-center">
            {locale === "en" ? "Our 4-Step Process" : "عمليتنا في 4 خطوات"}
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 font-bold text-xl mb-6 shadow-lg shadow-amber-500/20">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{locale === "en" ? step.en : step.ar}</h3>
                <p className="text-slate-400 leading-relaxed">{locale === "en" ? step.desc.en : step.desc.ar}</p>
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
              {locale === "en" ? "Ready for Your Dream University?" : "مستعد لجامعة أحلامك؟"}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {locale === "en"
                ? "Start your journey to top Chinese universities today"
                : "ابدأ رحلتك إلى أفضل الجامعات الصينية اليوم"}
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid gap-4 sm:grid-cols-3 mb-8">
            <a href="tel:+971503456789" className="group flex items-center gap-4 p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 hover:bg-slate-900 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-400">{locale === "en" ? "Phone" : "الهاتف"}</div>
                <div className="text-white font-medium">+971 50 345 6789</div>
              </div>
            </a>

            <a href="mailto:info@dinoora.com" className="group flex items-center gap-4 p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 hover:bg-slate-900 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-400">{locale === "en" ? "Email" : "البريد"}</div>
                <div className="text-white font-medium">info@dinoora.com</div>
              </div>
            </a>

            <a href="https://wa.me/971503456789" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 hover:bg-slate-900 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-400">{locale === "en" ? "WhatsApp" : "واتساب"}</div>
                <div className="text-white font-medium">+971 50 345 6789</div>
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

      {/* Application Form */}
      <div className="bg-slate-950">
        <ApplicationForm />
      </div>
    </main>
  )
}
