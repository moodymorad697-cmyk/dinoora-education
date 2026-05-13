"use client"

import { Send, Search, FileText, CheckCircle, Stamp, Plane, Sparkles, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HowItWorks() {
  const { t, dir } = useLanguage()

  const steps = [
    { icon: Send, key: "submit" as const, color: "from-amber-500 to-orange-500", glow: "amber" },
    { icon: Search, key: "match" as const, color: "from-blue-500 to-cyan-500", glow: "blue" },
    { icon: FileText, key: "apply" as const, color: "from-purple-500 to-pink-500", glow: "purple" },
    { icon: CheckCircle, key: "acceptance" as const, color: "from-emerald-500 to-teal-500", glow: "emerald" },
    { icon: Stamp, key: "visa" as const, color: "from-rose-500 to-red-500", glow: "rose" },
    { icon: Plane, key: "travel" as const, color: "from-indigo-500 to-violet-500", glow: "indigo" },
  ]

  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Premium Layered Background */}
      <div className="absolute inset-0">
        {/* Deep base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/80 to-slate-950" />

        {/* Animated mesh gradients */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `
            radial-gradient(circle at 15% 30%, rgba(212, 168, 83, 0.18) 0%, transparent 40%),
            radial-gradient(circle at 85% 70%, rgba(99, 102, 241, 0.18) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.10) 0%, transparent 60%)
          `
        }} />

        {/* Floating orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />

        {/* Diagonal grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />

        {/* Top/Bottom fade */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">{t.howItWorks.label}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 leading-tight">
            <span className="text-foreground">{t.howItWorks.title.split(" ").slice(0, -1).join(" ")} </span>
            <span className="gradient-text">{t.howItWorks.title.split(" ").slice(-1)}</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            {t.howItWorks.description}
          </p>
        </div>

        {/* Steps - Premium Cards */}
        <div className="relative">
          {/* Connecting flow line for desktop */}
          <svg className="absolute top-12 left-[8%] right-[8%] hidden lg:block w-[84%] h-2 z-0" viewBox="0 0 100 2" preserveAspectRatio="none">
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(212,168,83,0)" />
                <stop offset="20%" stopColor="rgba(212,168,83,0.5)" />
                <stop offset="50%" stopColor="rgba(99,102,241,0.5)" />
                <stop offset="80%" stopColor="rgba(212,168,83,0.5)" />
                <stop offset="100%" stopColor="rgba(212,168,83,0)" />
              </linearGradient>
            </defs>
            <line x1="0" y1="1" x2="100" y2="1" stroke="url(#flowGradient)" strokeWidth="0.3" strokeDasharray="0.5 0.5" />
          </svg>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 relative z-10">
            {steps.map((step, index) => {
              const data = t.howItWorks.steps[step.key]
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Card */}
                  <div className="relative h-full rounded-3xl overflow-hidden card-glow lift-gold backdrop-blur-xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 p-7 transition-all duration-500">
                    {/* Step number badge */}
                    <div className="absolute top-5 right-5 inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-amber-600 text-primary-foreground font-bold text-sm shadow-lg shadow-primary/30">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Icon with colorful glow */}
                    <div className="relative mb-6 inline-flex">
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <Icon className="h-7 w-7 text-white" strokeWidth={2.2} />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {data.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-[15px]">
                      {data.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                      <span>{dir === "rtl" ? "الخطوة التالية" : "Next Step"}</span>
                      <ArrowRight className={`w-3 h-3 ${dir === "rtl" ? "rotate-180" : ""}`} />
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-transparent rounded-full blur-2xl transition-all duration-700" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom decoration: progress dots */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
            {steps.map((_, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${steps[index].color} shadow-md`} />
                {index < steps.length - 1 && (
                  <div className="w-6 h-px bg-gradient-to-r from-white/30 to-white/10 mx-1" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
