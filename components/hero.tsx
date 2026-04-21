"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { config } from "@/lib/config"
import { ArrowRight, MessageCircle, GraduationCap, Building2, Trophy, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Students celebrating graduation"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
        <div className="absolute inset-0 grid-pattern" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-glow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[150px] animate-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container relative z-10 px-4 py-20 md:py-32 mx-auto max-w-7xl">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge with Trust Badges */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-foreground/90">{t.hero.badge}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-balance">
            <span className="text-foreground">{t.hero.title}</span>
            <br />
            <span className="gradient-text">{t.hero.titleHighlight}</span>
            <br />
            <span className="text-foreground">{t.hero.titleEnd}</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="gold-gradient text-primary-foreground hover:opacity-90 transition-all duration-300 px-8 py-6 text-lg font-semibold shadow-lg shadow-primary/25 w-full sm:w-auto hover:shadow-xl hover:shadow-primary/40 hover:scale-105"
              asChild
            >
              <Link href="#apply">
                {t.hero.applyNow}
                <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${dir === "rtl" ? "mr-2 rotate-180" : "ml-2"}`} />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border/50 hover:bg-secondary/50 px-8 py-6 text-lg w-full sm:w-auto transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className={`w-5 h-5 ${dir === "rtl" ? "ml-2" : "mr-2"}`} />
                {t.hero.chatWhatsApp}
              </a>
            </Button>
          </div>

          {/* Stats Grid with Emojis */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 text-center hover:bg-secondary/40 transition-all duration-300 group border border-border/40 hover:shadow-lg hover:shadow-primary/10 hover:scale-105"
              >
                <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">{stat.emoji}</div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-base md:text-lg font-medium text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
