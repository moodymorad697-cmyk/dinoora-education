"use client"

import { ArrowLeft, CheckCircle, Mail, MessageCircle, GraduationCap, FileText, Stamp, Home, ArrowRight, Plane, HeartHandshake, Sparkles, Users, Shield, Clock, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

const services = [
  {
    key: "admission" as const,
    Icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
    features: {
      en: ["500+ University Partnerships", "Priority Application Processing", "Program Selection Guidance", "Direct University Contact"],
      ar: ["500+ شراكة جامعية", "معالجة طلبات ذات أولوية", "إرشاد اختيار البرنامج", "تواصل مباشر مع الجامعات"]
    }
  },
  {
    key: "visa" as const,
    Icon: FileText,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
    features: {
      en: ["98% Success Rate Guaranteed", "Complete Document Preparation", "Embassy Appointment Booking", "Interview Coaching Included"],
      ar: ["98% نسبة نجاح مضمونة", "إعداد كامل للوثائق", "حجز مواعيد السفارة", "تدريب على المقابلة"]
    }
  },
  {
    key: "documents" as const,
    Icon: Stamp,
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=600&q=80",
    features: {
      en: ["Professional Translation", "Official Notarization", "Embassy Attestation", "Fast Document Delivery"],
      ar: ["ترجمة احترافية", "توثيق رسمي", "تصديق السفارة", "توصيل سريع للوثائق"]
    }
  },
  {
    key: "accommodation" as const,
    Icon: Home,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
    features: {
      en: ["Verified Safe Housing", "Near Campus Locations", "Best Price Negotiation", "Virtual Room Tours"],
      ar: ["سكن آمن معتمد", "مواقع قريبة من الحرم", "أفضل تفاوض للأسعار", "جولات افتراضية للغرف"]
    }
  },
  {
    key: "airport" as const,
    Icon: Plane,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
    features: {
      en: ["Personal VIP Meet & Greet", "Comfortable Private Transfer", "24/7 Arrival Support", "Direct to Your Accommodation"],
      ar: ["استقبال VIP شخصي", "نقل خاص مريح", "دعم وصول 24/7", "توصيل مباشر للسكن"]
    }
  },
  {
    key: "followup" as const,
    Icon: HeartHandshake,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    features: {
      en: ["Monthly Progress Check-ins", "Academic Success Coaching", "Emergency Assistance", "Career Development Advice"],
      ar: ["متابعة تقدم شهرية", "تدريب على النجاح الأكاديمي", "مساعدة طوارئ", "نصائح تطوير مهني"]
    }
  }
]

export default function ServicesPage() {
  const { t, dir, locale } = useLanguage()

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section - Premium Dark Gold with Background Image */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=85"
            alt="Services Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
        </div>
        
        {/* Gold Glow Effects */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[150px]" />
        
        {/* Gold Accent Lines */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">{locale === "en" ? "Back Home" : "العودة للرئيسية"}</span>
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-300">
                {locale === "en" ? "6 Comprehensive Services" : "6 خدمات شاملة"}
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6 text-white">
              {locale === "en" ? "Everything You Need to" : "كل ما تحتاجه"}
              <span className="block bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                {locale === "en" ? "Succeed" : "للنجاح"}
              </span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              {locale === "en" 
                ? "Comprehensive end-to-end services designed for ambitious students who want the best. From admission to graduation, we've got you covered."
                : "خدمات شاملة من البداية إلى النهاية مصممة للطلاب الطموحين الذين يريدون الأفضل. من القبول حتى التخرج، نحن نغطي كل شيء."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Premium Cards */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((serviceItem) => {
              const service = t.services.items[serviceItem.key]
              const IconComponent = serviceItem.Icon
              const features = locale === "en" ? serviceItem.features.en : serviceItem.features.ar

              return (
                <div
                  key={serviceItem.key}
                  className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden hover:border-amber-500/30 hover:bg-slate-900/80 transition-all duration-500"
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={serviceItem.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/30 to-amber-600/20 border border-amber-500/40 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-amber-400" />
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                    
                    {/* Content */}
                    <h2 className="relative text-2xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h2>
                    <p className="relative text-slate-400 mb-6 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Benefits List - Unique per service */}
                    <ul className="relative space-y-2 mb-6">
                      {features.slice(0, 3).map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                          <div className="w-4 h-4 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-2.5 h-2.5 text-amber-400" />
                          </div>
                          <span className="text-xs">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button 
                      className="relative w-full bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-white border border-slate-700 hover:border-amber-500 transition-all duration-300 group/btn text-sm py-2 h-auto" 
                      asChild
                    >
                      <Link href={`/services/${serviceItem.key}`} className="flex items-center justify-center gap-2">
                        {locale === "en" ? "Learn More" : "اعرف أكثر"}
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Dark Gold */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent" />
        
        {/* Top Border */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
              <Star className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-300">
                {locale === "en" ? "Start Your Journey Today" : "ابدأ رحلتك اليوم"}
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              {locale === "en" ? "Ready to Get Started?" : "هل أنت مستعد للبدء؟"}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {locale === "en"
                ? "Contact us today for expert consultation with our multilingual specialists."
                : "تواصل معنا اليوم للحصول على استشارة خبراء من متخصصينا المتعددي اللغات."}
            </p>
          </div>

          {/* Contact Options Grid */}
          <div className="grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto mb-10">
            {/* WhatsApp China */}
            <a 
              href="https://wa.me/8615587237864"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 hover:bg-slate-900 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-400">{locale === "en" ? "WhatsApp" : "واتساب"}</div>
                <div className="text-white font-medium">+86 15587237864</div>
              </div>
            </a>

            {/* Email */}
            <a 
              href="mailto:info@dinoora.com"
              className="group flex items-center gap-4 p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 hover:bg-slate-900 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-400">{locale === "en" ? "Email" : "البريد"}</div>
                <div className="text-white font-medium">info@dinoora.com</div>
              </div>
            </a>
          </div>

          {/* Main CTA Button */}
          <div className="text-center">
            <Button 
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-10 py-7 text-lg shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-300" 
              asChild
            >
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
