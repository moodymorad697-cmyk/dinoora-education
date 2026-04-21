"use client"

import { Shield, Zap, Users, Award, FileCheck, HeartHandshake } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function WhyChooseUs() {
  const { t } = useLanguage()
  
  const features = [
    {
      icon: FileCheck,
      title: t.whyChooseUs.features.directAdmission.title,
      description: t.whyChooseUs.features.directAdmission.description,
      gradient: "from-amber-500/20 to-orange-500/20",
    },
    {
      icon: Zap,
      title: t.whyChooseUs.features.fastProcessing.title,
      description: t.whyChooseUs.features.fastProcessing.description,
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: HeartHandshake,
      title: t.whyChooseUs.features.fullSupport.title,
      description: t.whyChooseUs.features.fullSupport.description,
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Award,
      title: t.whyChooseUs.features.globalNetwork.title,
      description: t.whyChooseUs.features.globalNetwork.description,
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
      icon: Shield,
      title: t.whyChooseUs.features.secureTrusted.title,
      description: t.whyChooseUs.features.secureTrusted.description,
      gradient: "from-rose-500/20 to-red-500/20",
    },
    {
      icon: Users,
      title: t.whyChooseUs.features.dedicatedAdvisors.title,
      description: t.whyChooseUs.features.dedicatedAdvisors.description,
      gradient: "from-indigo-500/20 to-violet-500/20",
    },
  ]

  return (
    <section id="why-us" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm font-medium text-primary">{t.whyChooseUs.label}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-6">
            <span className="text-foreground">{t.whyChooseUs.title.split(" ").slice(0, -2).join(" ")} </span>
            <span className="gradient-text">{t.whyChooseUs.title.split(" ").slice(-2).join(" ")}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.whyChooseUs.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card/50 hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/25">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-60">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">ISO 9001</div>
            <div className="text-xs text-muted-foreground">Certified</div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">ICEF</div>
            <div className="text-xs text-muted-foreground">Accredited</div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">CSC</div>
            <div className="text-xs text-muted-foreground">Partner</div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">A+</div>
            <div className="text-xs text-muted-foreground">Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}
