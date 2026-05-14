"use client"

import { ArrowLeft, ArrowRight, Plane, CheckCircle, Clock, Shield, MapPin, Phone, Mail, MessageCircle, Star, Users, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export default function AirportPage() {
  const { t, locale } = useLanguage()
  const service = t.services.items.airport

  const features = [
    {
      icon: Star,
      title: locale === "en" ? "VIP Meet & Greet" : "استقبال VIP",
      desc: locale === "en" ? "Personal reception at the airport gate" : "استقبال شخصي عند بوابة المطار",
    },
    {
      icon: Shield,
      title: locale === "en" ? "Safe Transportation" : "نقل آمن",
      desc: locale === "en" ? "Comfortable vehicles to your accommodation" : "مركبات مريحة إلى سكنك",
    },
    {
      icon: Clock,
      title: locale === "en" ? "24/7 Support" : "دعم 24/7",
      desc: locale === "en" ? "Round-the-clock arrival assistance" : "مساعدة وصول على مدار الساعة",
    },
    {
      icon: MapPin,
      title: locale === "en" ? "Direct to Campus" : "مباشرة للحرم",
      desc: locale === "en" ? "Direct routes to university housing" : "طرق مباشرة إلى سكن الجامعة",
    },
  ]

  const services = [
    { en: "Airport Pickup", ar: "الاستقبال من المطار" },
    { en: "Luggage Assistance", ar: "المساعدة في الأمتعة" },
    { en: "SIM Card Setup", ar: "إعداد شريحة SIM" },
    { en: "Bank Account Opening", ar: "فتح حساب بنكي" },
    { en: "Campus Orientation", ar: "تعريف بالحرم الجامعي" },
    { en: "Emergency Contact Setup", ar: "إعداد جهات اتصال الطوارئ" },
  ]

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero - With Background Image */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=85"
            alt="Airport Background"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px]" />
        </div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors mb-8 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">{locale === "en" ? "Back to Services" : "العودة للخدمات"}</span>
          </Link>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-amber-300">
                  {locale === "en" ? "24/7 Arrival Support" : "دعم وصول 24/7"}
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">{service.title}</h1>
              <p className="text-xl text-slate-400 max-w-2xl mb-6">{service.description}</p>
              
              {/* Stats Preview */}
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-amber-400 font-bold">VIP</span>
                  <span className="text-slate-400 text-sm ml-2">{locale === "en" ? "Meet & Greet" : "استقبال شخصي"}</span>
                </div>
                <div className="px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-amber-400 font-bold">24/7</span>
                  <span className="text-slate-400 text-sm ml-2">{locale === "en" ? "Support" : "دعم"}</span>
                </div>
              </div>
            </div>
            
            {/* Airport Image Preview */}
            <div className="hidden lg:block relative w-80 h-56 rounded-2xl overflow-hidden border border-slate-700">
              <Image
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80"
                alt="Airport VIP"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
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
            {locale === "en" ? "Our VIP Services" : "خدمات VIP لدينا"}
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
            {locale === "en" ? "Complete Arrival Support" : "دعم وصول كامل"}
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
              {locale === "en" ? "Arrive with Confidence" : "صل بثقة"}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {locale === "en" ? "Let us welcome you to your new academic journey" : "دعنا نرحب بك في رحلتك الأكاديمية الجديدة"}
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
