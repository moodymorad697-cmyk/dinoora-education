"use client"

import { Shield, Zap, Users, Award, FileCheck, HeartHandshake, Sparkles, BadgeCheck } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function WhyChooseUs() {
  const { t } = useLanguage()

  const features = [
    {
      Icon: FileCheck,
      title: t.whyChooseUs.features.directAdmission.title,
      description: t.whyChooseUs.features.directAdmission.description,
      gradient: "from-amber-500 to-orange-500",
      ringColor: "ring-amber-500/30",
      shadowColor: "shadow-amber-500/20",
    },
    {
      Icon: Zap,
      title: t.whyChooseUs.features.fastProcessing.title,
      description: t.whyChooseUs.features.fastProcessing.description,
      gradient: "from-blue-500 to-cyan-500",
      ringColor: "ring-blue-500/30",
      shadowColor: "shadow-blue-500/20",
    },
    {
      Icon: HeartHandshake,
      title: t.whyChooseUs.features.fullSupport.title,
      description: t.whyChooseUs.features.fullSupport.description,
      gradient: "from-purple-500 to-pink-500",
      ringColor: "ring-purple-500/30",
      shadowColor: "shadow-purple-500/20",
    },
    {
      Icon: Award,
      title: t.whyChooseUs.features.globalNetwork.title,
      description: t.whyChooseUs.features.globalNetwork.description,
      gradient: "from-emerald-500 to-teal-500",
      ringColor: "ring-emerald-500/30",
      shadowColor: "shadow-emerald-500/20",
    },
    {
      Icon: Shield,
      title: t.whyChooseUs.features.secureTrusted.title,
      description: t.whyChooseUs.features.secureTrusted.description,
      gradient: "from-rose-500 to-red-500",
      ringColor: "ring-rose-500/30",
      shadowColor: "shadow-rose-500/20",
    },
    {
      Icon: Users,
      title: t.whyChooseUs.features.dedicatedAdvisors.title,
      description: t.whyChooseUs.features.dedicatedAdvisors.description,
      gradient: "from-indigo-500 to-violet-500",
      ringColor: "ring-indigo-500/30",
      shadowColor: "shadow-indigo-500/20",
    },
  ]

  const badges = [
    { label: "ISO 9001", sub: "Certified", color: "from-blue-500 to-cyan-500" },
    { label: "ICEF", sub: "Accredited", color: "from-purple-500 to-pink-500" },
    { label: "CSC", sub: "Partner", color: "from-amber-500 to-orange-500" },
    { label: "A+", sub: "Rating", color: "from-emerald-500 to-teal-500" },
  ]

  return (
    <section id="why-us" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Premium Multi-Layer Background */}
      <div className="absolute inset-0">
        {/* Deep base */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/40 to-slate-950" />

        {/* Aurora gradients */}
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 50% at 0% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 100% 100%, rgba(168, 85, 247, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 50% 50%, rgba(212, 168, 83, 0.08) 0%, transparent 60%)
          `
        }} />

        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />

        {/* Hexagonal pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(60deg, rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(-60deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 70px'
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
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">{t.whyChooseUs.label}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 leading-tight">
            <span className="text-foreground">{t.whyChooseUs.title.split(" ").slice(0, -2).join(" ")} </span>
            <span className="gradient-text">{t.whyChooseUs.title.split(" ").slice(-2).join(" ")}</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            {t.whyChooseUs.description}
          </p>
        </div>

        {/* Premium Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.Icon
            return (
              <div
                key={index}
                className="group relative rounded-3xl card-glow lift-gold backdrop-blur-xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 p-7 transition-all duration-500 overflow-hidden"
              >
                {/* Decorative gradient blob */}
                <div className={`absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-25 transition-opacity duration-700`} />

                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon with glow */}
                  <div className="relative inline-flex mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
                    <div className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-xl ${feature.shadowColor} group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 ring-1 ${feature.ringColor}`}>
                      <Icon className="h-7 w-7 text-white" strokeWidth={2.2} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                    {feature.description}
                  </p>

                  {/* Bottom accent */}
                  <div className={`mt-5 h-1 w-12 rounded-full bg-gradient-to-r ${feature.gradient} opacity-60 group-hover:w-20 transition-all duration-500`} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Premium Trust Badges */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <BadgeCheck className="w-4 h-4 text-primary" />
              <span className="font-semibold tracking-wider uppercase">
                {t.whyChooseUs.label === "تميز دينورا" ? "اعتمادات وشراكات رسمية" : "Official Accreditations & Partnerships"}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {badges.map((badge, i) => (
              <div
                key={i}
                className="group relative rounded-2xl card-glow lift-gold p-5 text-center bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 transition-all duration-500"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />

                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${badge.color} mb-3 shadow-lg`}>
                    <BadgeCheck className="w-5 h-5 text-white" />
                  </div>
                  <div className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${badge.color} bg-clip-text text-transparent`}>
                    {badge.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">
                    {badge.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
