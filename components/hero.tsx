"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight, MessageCircle, GraduationCap, Building2, Trophy, Users, Sparkles, Globe2 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
  const { t, dir, locale } = useLanguage()

  const stats = [
    { Icon: GraduationCap, value: "2,500+", label: locale === "en" ? "Students Placed" : "طالب تم توظيفهم" },
    { Icon: Building2, value: "500+", label: locale === "en" ? "Partner Universities" : "جامعات شريكة" },
    { Icon: Trophy, value: "98%", label: locale === "en" ? "Success Rate" : "نسبة النجاح" },
    { Icon: Users, value: "24/7", label: locale === "en" ? "Multilingual Support" : "دعم متعدد اللغات" },
  ]

  // Multilingual support features
  const languageSupport = {
    title: locale === "en" ? "Native Speakers in Your Language" : "مستشارون ناطقون بلغتك",
    description: locale === "en" 
      ? "Arabic, Chinese & English native speakers who understand your culture and needs. Support available 24/7 throughout your journey."
      : "مستشارون ناطقون بالعربية والصينية والإنجليزية يفهمون ثقافتك واحتياجاتك. دعم على مدار الساعة طوال رحلتك."
  }

  const whatsappUrl = `https://wa.me/8615587237864?text=${locale === "en" ? "Hi%20DINOORA" : "%D9%85%D8%B1%D8%AD%D8%A8%D8%A7"}`

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Premium Dark Gold Background */}
      <div className="absolute inset-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        
        {/* Gold radial gradients - layered for depth */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(251, 191, 36, 0.15) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse 50% 50% at 20% 80%, rgba(251, 191, 36, 0.08) 0%, transparent 50%)
          `
        }} />
        
        {/* Animated gold glow */}
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/20 rounded-full blur-[120px]"
          animate={{ 
            opacity: [0.2, 0.3, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Secondary glow */}
        <motion.div 
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[150px]"
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(rgba(251, 191, 36, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 191, 36, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />

        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 py-20 md:py-28 mx-auto max-w-7xl">
        <div className="max-w-5xl mx-auto text-center">
          {/* Premium Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-300">
              {locale === "en" ? "Your Gateway to World-Class Education" : "بوابتك للتعليم العالمي"}
            </span>
          </motion.div>

          {/* Main Heading - Dark Gold Theme */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-white">{locale === "en" ? "Study at" : "ادرس في"}</span>
            <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              {locale === "en" ? "Top Global Universities" : "أفضل الجامعات العالمية"}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {locale === "en" 
              ? "Complete support from admission to graduation in China, Malaysia & Turkey"
              : "دعم كامل من القبول حتى التخرج في الصين وماليزيا وتركيا"
            }
          </motion.p>

          {/* Language Support Badge */}
          <motion.div 
            className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/30 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.65 }}
          >
            <Globe2 className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-semibold text-amber-300">
              {locale === "en" ? "We speak:" : "نتحدث:"}
            </span>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-bold">🇸🇦 العربية</span>
              <span className="px-2 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-bold">🇨🇳 中文</span>
              <span className="px-2 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-bold">🇬🇧 English</span>
            </div>
          </motion.div>

          {/* Feature Pills */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {[
              locale === "en" ? "✓ Free Consultation" : "✓ استشارة مجانية",
              locale === "en" ? "✓ Scholarship Guidance" : "✓ إرشاد المنح",
              locale === "en" ? "✓ Visa Support" : "✓ دعم التأشيرة",
              locale === "en" ? "✓ Multilingual Team" : "✓ فريق متعدد اللغات",
            ].map((item, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm">
                {item}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons - Gold Theme */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-10 py-7 text-lg shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300"
                asChild
              >
                <Link href="#apply">
                  {locale === "en" ? "Start Your Application" : "ابدأ طلبك"}
                  <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "mr-2" : "ml-2"}`} />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-500/50 bg-slate-900/50 text-amber-400 hover:bg-amber-500/10 hover:text-amber-300 px-8 py-7 text-lg transition-all duration-300"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className={`w-5 h-5 ${dir === "rtl" ? "ml-2" : "mr-2"}`} />
                  {locale === "en" ? "Chat on WhatsApp" : "تحدث على واتساب"}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Grid - Dark Gold Theme */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.Icon
              return (
                <motion.div
                  key={index}
                  className="group relative rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/30 p-6 transition-all duration-500 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  {/* Amber glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  <div className="relative">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>

                    {/* Value */}
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Multilingual Support Section */}
          <motion.div 
            className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-amber-500/10 border border-amber-500/20 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                <Globe2 className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {locale === "en" ? "Native Language Support" : "دعم باللغة الأم"}
                </h3>
                <p className="text-slate-400 text-sm">
                  {locale === "en" 
                    ? "Our team includes native Arabic, Chinese & English speakers who understand your culture. Get support 24/7 in your preferred language throughout your academic journey."
                    : "فريقنا يضم ناطقين أصليين بالعربية والصينية والإنجليزية يفهمون ثقافتك. احصل على دعم 24/7 بلغتك المفضلة طوال رحلتك الأكاديمية."
                  }
                </p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <span className="px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">🇸🇦 العربية</span>
                <span className="px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">🇨🇳 中文</span>
                <span className="px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">🇬🇧 English</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-amber-500/30 rounded-full flex items-start justify-center p-1">
          <motion.div 
            className="w-1.5 h-3 bg-amber-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
