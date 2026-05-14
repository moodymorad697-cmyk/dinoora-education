"use client"

import { ArrowLeft, CheckCircle, Mail, MessageCircle, GraduationCap, FileText, Stamp, Home, ArrowRight, Plane, HeartHandshake } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

const serviceKeys = ["admission", "visa", "documents", "accommodation", "airport", "followup"] as const

const serviceIcons = {
  admission: GraduationCap,
  visa: FileText,
  documents: Stamp,
  accommodation: Home,
  airport: Plane,
  followup: HeartHandshake,
}

export default function ServicesPage() {
  const { t, dir, locale } = useLanguage()

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section - Dark Gold Theme */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]" />
        
        {/* Gold Accent Line */}
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
            <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6 text-white">
              {t.services.title}
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              {t.services.description}
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
            {serviceKeys.map((key) => {
              const service = t.services.items[key]
              const servicePath = key
              const IconComponent = serviceIcons[key]

              return (
                <div
                  key={key}
                  className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-8 hover:border-amber-500/30 hover:bg-slate-900/80 transition-all duration-500 overflow-hidden"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 text-amber-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <h2 className="relative text-2xl font-bold mb-4 text-white group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h2>
                  <p className="relative text-slate-400 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefits List */}
                  <ul className="relative space-y-3 mb-8">
                    {[
                      locale === "en" ? "Expert guidance" : "إرشادة خبراء",
                      locale === "en" ? "Fast processing" : "معالجة سريعة",
                      locale === "en" ? "Full support" : "دعم كامل",
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-amber-400" />
                        </div>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className="relative w-full bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-white border border-slate-700 hover:border-amber-500 transition-all duration-300 group/btn" 
                    asChild
                  >
                    <Link href={`/services/${servicePath}`} className="flex items-center justify-center gap-2">
                      {locale === "en" ? "Learn More" : "اعرف أكثر"}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark with Gold Accents */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent" />
        
        {/* Top Border */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              {locale === "en" ? "Ready to Get Started?" : "هل أنت مستعد للبدء؟"}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {locale === "en"
                ? "Contact us today for expert consultation with our specialists."
                : "تواصل معنا اليوم للحصول على استشارة خبراء مع متخصصينا."}
            </p>
          </div>

          {/* Contact Options Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl mx-auto mb-8">
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
