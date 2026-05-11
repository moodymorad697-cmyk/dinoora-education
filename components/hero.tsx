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
    { icon: GraduationCap, value: config.stats.studentsPlaced, label: t.hero.studentsPlaced, emoji: "🎓" },
    { icon: Building2, value: config.stats.partnerUniversities, label: t.hero.partnerUniversities, emoji: "🏢" },
    { icon: Trophy, value: config.stats.successRate, label: t.hero.successRate, emoji: "🏆" },
    { icon: Clock, value: config.stats.yearsExperience, label: t.hero.yearsExperience, emoji: "⏱️" },
  ]

  const whatsappUrl = `https://wa.me/${config.contact.whatsapp.replace(/[^\d]/g, '')}?text=Hi%20DINNOORA%2C%20I'm%20interested%20in%20studying%20abroad`

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Professional Background with High-Quality Image */}
      <div className="absolute inset-0 z-0">
        {/* Professional Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&q=95')",
          }}
        />
        
        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/70 to-violet-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/50" />
        
        {/* Elegant Mesh Gradient */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)
          `
        }} />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Elegant Floating Orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

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

          {/* Stats Grid with Emojis */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-8 text-center hover:bg-secondary/40 transition-all duration-300 group border border-border/40 hover:shadow-lg hover:shadow-primary/10"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <motion.div 
                  className="text-5xl mb-3"
                  whileHover={{ scale: 1.3, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.emoji}
                </motion.div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-base md:text-lg font-medium text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
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
