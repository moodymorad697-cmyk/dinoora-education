"use client"

import { GraduationCap, Stamp, FileStack, Home, Plane, HeartHandshake, ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function Services() {
  const { t, dir, locale } = useLanguage()

  const services = [
    {
      Icon: GraduationCap,
      key: "admission" as const,
      features: locale === "en" ? ["500+ Universities", "Priority Application", "Full Guidance"] : ["500+ جامعة", "تطبيق ذو أولوية", "إرشاد كامل"],
    },
    {
      Icon: Stamp,
      key: "visa" as const,
      features: locale === "en" ? ["98% Success Rate", "Document Prep", "Interview Coaching"] : ["98% نسبة نجاح", "إعداد الوثائق", "تدريب المقابلة"],
    },
    {
      Icon: FileStack,
      key: "documents" as const,
      features: locale === "en" ? ["Translation", "Notarization", "Attestation"] : ["ترجمة", "توثيق", "تصديق"],
    },
    {
      Icon: Home,
      key: "accommodation" as const,
      features: locale === "en" ? ["Verified Housing", "Near Campus", "Best Rates"] : ["سكن معتمد", "قرب الحرم", "أفضل الأسعار"],
    },
    {
      Icon: Plane,
      key: "airport" as const,
      features: locale === "en" ? ["VIP Pickup", "24/7 Support", "Safe Transfer"] : ["استقبال VIP", "دعم 24/7", "نقل آمن"],
    },
    {
      Icon: HeartHandshake,
      key: "followup" as const,
      features: locale === "en" ? ["Monthly Check-ins", "Academic Help", "Career Advice"] : ["متابعة شهرية", "مساعدة أكاديمية", "نصائح مهنية"],
    },
  ]

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden bg-slate-950">
      {/* Dark Gold Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
        
        {/* Gold aurora */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse 60% 40% at 50% 0%, rgba(251, 191, 36, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 80% 100%, rgba(245, 158, 11, 0.06) 0%, transparent 50%)
          `
        }} />

        {/* Gold accent lines */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-300 tracking-wider uppercase">
              {locale === "en" ? "Premium Services" : "خدمات متميزة"}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 leading-tight">
            <span className="text-white">{locale === "en" ? "Complete Support for Your " : "دعم كامل لـ"}</span>
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              {locale === "en" ? "Academic Journey" : "رحلتك الأكاديمية"}
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            {locale === "en" 
              ? "From admission to graduation, we handle everything so you can focus on your studies"
              : "من القبول حتى التخرج، نتولى كل شيء حتى تتمكن من التركيز على دراستك"
            }
          </p>
        </div>

        {/* Services Grid - Dark Gold Theme */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const data = t.services.items[service.key]
            const Icon = service.Icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/services/${service.key}`}
                  className="group relative rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/30 p-7 transition-all duration-500 overflow-hidden block h-full"
                >
                  {/* Gold glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-amber-400" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                      {data.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm mb-4">
                      {data.description}
                    </p>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Learn More */}
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 group-hover:text-amber-300 transition-all duration-300">
                      <span>{t.services.learnMore}</span>
                      <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${dir === "rtl" ? "rotate-180" : ""}`} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-10 py-6 text-lg shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-300"
            asChild
          >
            <Link href="/services">
              {locale === "en" ? "View All Services" : "عرض جميع الخدمات"}
              <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "mr-2" : "ml-2"}`} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
