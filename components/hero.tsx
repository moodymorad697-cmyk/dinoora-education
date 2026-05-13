"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { config } from "@/lib/config"
import { ArrowRight, MessageCircle, GraduationCap, Building2, Trophy, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { LazyParticleSystem } from "@/components/lazy/lazy-3d"
import { LazyVideoBackground } from "@/components/lazy/lazy-backgrounds"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { motion } from "framer-motion"

export function Hero() {
  const { t, dir } = useLanguage()

  const stats = [
    { Icon: GraduationCap, value: config.stats.studentsPlaced, label: t.hero.studentsPlaced, gradient: "from-amber-500 to-orange-500" },
    { Icon: Building2, value: config.stats.partnerUniversities, label: t.hero.partnerUniversities, gradient: "from-blue-500 to-cyan-500" },
    { Icon: Trophy, value: config.stats.successRate, label: t.hero.successRate, gradient: "from-emerald-500 to-teal-500" },
    { Icon: Clock, value: config.stats.yearsExperience, label: t.hero.yearsExperience, gradient: "from-purple-500 to-pink-500" },
  ]

  const whatsappUrl = `https://wa.me/${config.contact.whatsapp.replace(/[^\d]/g, '')}?text=Hi%20DINOORA%2C%20I'm%20interested%20in%20studying%20abroad`

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Premium Multi-Layer Background */}
      <div className="absolute inset-0 z-0">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=85')",
          }}
        />

        {/* Deep gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-indigo-950/85 to-purple-950/95" />

        {/* Aurora mesh gradients */}
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 50% at 20% 30%, rgba(212, 168, 83, 0.20) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 80% 70%, rgba(99, 102, 241, 0.20) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 50% 100%, rgba(168, 85, 247, 0.15) 0%, transparent 60%)
          `
        }} />

        {/* Bottom fade to background */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/60 to-transparent" />

        {/* Subtle noise texture via dotted grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Floating Animated Orbs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-amber-500/15 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-purple-500/15 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/8 rounded-full blur-[200px]" />

      <div className="container relative z-10 px-4 py-20 md:py-32 mx-auto max-w-7xl">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge with Trust Badges */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-foreground/90">{t.hero.badge}</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-foreground">{t.hero.title}</span>
            <br />
            <motion.span 
              className="gradient-text inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {t.hero.titleHighlight}
            </motion.span>
            <br />
            <span className="text-foreground">{t.hero.titleEnd}</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {t.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="gold-gradient text-primary-foreground hover:opacity-90 transition-all duration-300 px-8 py-6 text-lg font-semibold shadow-lg shadow-primary/25 w-full sm:w-auto hover:shadow-xl hover:shadow-primary/40"
                asChild
              >
                <Link href="#apply">
                  {t.hero.applyNow}
                  <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${dir === "rtl" ? "mr-2 rotate-180" : "ml-2"}`} />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-border/50 hover:bg-secondary/50 px-8 py-6 text-lg w-full sm:w-auto transition-all duration-300"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className={`w-5 h-5 ${dir === "rtl" ? "ml-2" : "mr-2"}`} />
                  {t.hero.chatWhatsApp}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Premium Stats Grid */}
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
                  className="group relative rounded-2xl card-glow lift-gold backdrop-blur-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 p-6 transition-all duration-500 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  {/* Decorative gradient blob */}
                  <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-25 transition-opacity duration-700`} />

                  <div className="relative">
                    {/* Icon */}
                    <div className="relative inline-flex mb-4">
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
                      <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}>
                        <Icon className="w-6 h-6 text-white" strokeWidth={2.2} />
                      </div>
                    </div>

                    {/* Value */}
                    <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base font-medium text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1">
          <motion.div 
            className="w-1.5 h-3 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
