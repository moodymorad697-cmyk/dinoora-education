"use client"

import { GraduationCap, Stamp, FileStack, Home, Car, UserCheck, ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Services() {
  const { t, dir } = useLanguage()

  const services = [
    {
      Icon: GraduationCap,
      key: "admission" as const,
      gradient: "from-amber-500 to-orange-500",
      ringColor: "ring-amber-500/30",
      shadowColor: "shadow-amber-500/20",
    },
    {
      Icon: Stamp,
      key: "visa" as const,
      gradient: "from-blue-500 to-cyan-500",
      ringColor: "ring-blue-500/30",
      shadowColor: "shadow-blue-500/20",
    },
    {
      Icon: FileStack,
      key: "documents" as const,
      gradient: "from-emerald-500 to-teal-500",
      ringColor: "ring-emerald-500/30",
      shadowColor: "shadow-emerald-500/20",
    },
    {
      Icon: Home,
      key: "accommodation" as const,
      gradient: "from-purple-500 to-pink-500",
      ringColor: "ring-purple-500/30",
      shadowColor: "shadow-purple-500/20",
    },
    {
      Icon: Car,
      key: "airport" as const,
      gradient: "from-rose-500 to-red-500",
      ringColor: "ring-rose-500/30",
      shadowColor: "shadow-rose-500/20",
    },
    {
      Icon: UserCheck,
      key: "followup" as const,
      gradient: "from-indigo-500 to-violet-500",
      ringColor: "ring-indigo-500/30",
      shadowColor: "shadow-indigo-500/20",
    },
  ]

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Premium Multi-Layer Background */}
      <div className="absolute inset-0">
        {/* Deep base */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/40 to-slate-950" />

        {/* Aurora effect */}
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 50% at 30% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 70% 100%, rgba(236, 72, 153, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 50% 50%, rgba(212, 168, 83, 0.08) 0%, transparent 60%)
          `
        }} />

        {/* Floating orbs */}
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-pink-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />

        {/* Diagonal grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />

        {/* Fade edges */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">{t.services.label}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 leading-tight">
            <span className="text-foreground">{t.services.title.split(" ").slice(0, -1).join(" ")} </span>
            <span className="gradient-text">{t.services.title.split(" ").slice(-1)}</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            {t.services.description}
          </p>
        </div>

        {/* Premium Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const data = t.services.items[service.key]
            const Icon = service.Icon
            return (
              <Link
                key={index}
                href={`/services/${service.key}`}
                className="group relative rounded-3xl card-glow lift-gold backdrop-blur-xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 p-7 transition-all duration-500 overflow-hidden block"
              >
                {/* Decorative gradient blob */}
                <div className={`absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-25 transition-opacity duration-700`} />

                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon with glow */}
                  <div className="relative inline-flex mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
                    <div className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-xl ${service.shadowColor} group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 ring-1 ${service.ringColor}`}>
                      <Icon className="h-7 w-7 text-white" strokeWidth={2.2} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {data.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px] mb-5">
                    {data.description}
                  </p>

                  {/* Learn More */}
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                    <span>{t.services.learnMore}</span>
                    <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
                  </div>

                  {/* Bottom accent */}
                  <div className={`mt-5 h-1 w-12 rounded-full bg-gradient-to-r ${service.gradient} opacity-60 group-hover:w-20 transition-all duration-500`} />
                </div>
              </Link>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <Button
            className="gold-gradient text-primary-foreground hover:opacity-90 px-10 py-7 text-lg font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all hover:scale-105"
            asChild
          >
            <Link href="#apply">
              {t.services.cta}
              <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "mr-3 rotate-180" : "ml-3"}`} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
