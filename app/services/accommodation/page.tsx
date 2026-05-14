"use client"

import { ArrowLeft, ArrowRight, Home, CheckCircle, MapPin, Shield, Building2, Users, Star, Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export default function AccommodationPage() {
  const { t, locale } = useLanguage()
  const service = t.services.items.accommodation

  const options = [
    { en: "University Dormitory", ar: "السكن الجامعي", icon: Building2 },
    { en: "Private Apartments", ar: "شقق خاصة", icon: Home },
    { en: "Shared Housing", ar: "السكن المشترك", icon: Users },
    { en: "Host Families", ar: "العائلات المضيفة", icon: Star },
  ]

  const process = [
    { icon: Shield, title: locale === "en" ? "Inspection" : "الفحص", desc: locale === "en" ? "We personally inspect every property" : "نفحص كل عقار شخصياً" },
    { icon: MapPin, title: locale === "en" ? "Negotiation" : "التفاوض", desc: locale === "en" ? "Get the best rates guaranteed" : "احصل على أفضل الأسعار مضمون" },
    { icon: CheckCircle, title: locale === "en" ? "Booking" : "الحجز", desc: locale === "en" ? "We handle all paperwork" : "نتولى كل الأوراق" },
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
              <Home className="h-10 w-10 text-amber-400" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-3">{service.title}</h1>
              <p className="text-xl text-slate-400 max-w-2xl">{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Options */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-white text-center">
            {locale === "en" ? "Your Housing Options" : "خيارات السكن لديك"}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {options.map((option, i) => (
              <div key={i} className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-8 hover:border-amber-500/30 hover:bg-slate-900/80 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <option.icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">{locale === "en" ? option.en : option.ar}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-slate-400">
                      <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-amber-400" />
                      </div>
                      {locale === "en" ? "Verified & inspected" : "معتمد ومفتش"}
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-400">
                      <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-amber-400" />
                      </div>
                      {locale === "en" ? "Near campus" : "قريب من الحرم"}
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-400">
                      <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-amber-400" />
                      </div>
                      {locale === "en" ? "Affordable rates" : "أسعار معقولة"}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-white text-center">
            {locale === "en" ? "Our Housing Process" : "عمليتنا في السكن"}
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {process.map((item, i) => (
              <div key={i} className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-8 hover:border-amber-500/30 hover:bg-slate-900/80 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              {locale === "en" ? "Standard Amenities" : "المرافق القياسية"}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {locale === "en" ? "All our housing options include these essentials" : "جميع خيارات السكن لدينا تشمل هذه الأساسيات"}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[
              { en: "Wi-Fi Internet", ar: "إنترنت Wi-Fi" },
              { en: "Furnished Rooms", ar: "غرف مفروشة" },
              { en: "24/7 Security", ar: "أمان 24/7" },
              { en: "Laundry Facilities", ar: "مرافق غسيل" },
              { en: "Study Areas", ar: "مناطق دراسة" },
              { en: "Kitchen Access", ar: "وصول للمطبخ" },
              { en: "Air Conditioning", ar: "تكييف" },
              { en: "Public Transport Nearby", ar: "مواصلات عامة قريبة" },
            ].map((amenity, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-all duration-300 group">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-white text-sm font-medium">{locale === "en" ? amenity.en : amenity.ar}</span>
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
              {locale === "en" ? "Find Your Perfect Home" : "اعثر على منزلك المثالي"}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {locale === "en" ? "Comfortable housing solutions for international students" : "حلول سكن مريحة للطلاب الدوليين"}
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
