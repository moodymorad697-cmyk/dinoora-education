"use client"

import { useLanguage } from "@/lib/language-context"
import { MessageSquare, FileText, GraduationCap, ShieldCheck, Plane, Clock, Sparkles, CheckCircle2 } from "lucide-react"

export function ProcessTimeline() {
  const { t, dir, locale } = useLanguage()

  const steps = [
    {
      number: 1,
      Icon: MessageSquare,
      title: t.processTimeline.step1Title,
      description: t.processTimeline.step1Desc,
      duration: t.processTimeline.step1Duration,
      gradient: "from-amber-500 via-orange-500 to-yellow-500",
      glow: "amber",
      bgColor: "amber",
    },
    {
      number: 2,
      Icon: FileText,
      title: t.processTimeline.step2Title,
      description: t.processTimeline.step2Desc,
      duration: t.processTimeline.step2Duration,
      gradient: "from-blue-500 via-cyan-500 to-sky-500",
      glow: "blue",
      bgColor: "blue",
    },
    {
      number: 3,
      Icon: GraduationCap,
      title: t.processTimeline.step3Title,
      description: t.processTimeline.step3Desc,
      duration: t.processTimeline.step3Duration,
      gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
      glow: "purple",
      bgColor: "purple",
    },
    {
      number: 4,
      Icon: ShieldCheck,
      title: t.processTimeline.step4Title,
      description: t.processTimeline.step4Desc,
      duration: t.processTimeline.step4Duration,
      gradient: "from-emerald-500 via-teal-500 to-green-500",
      glow: "emerald",
      bgColor: "emerald",
    },
    {
      number: 5,
      Icon: Plane,
      title: t.processTimeline.step5Title,
      description: t.processTimeline.step5Desc,
      duration: t.processTimeline.step5Duration,
      gradient: "from-rose-500 via-pink-500 to-red-500",
      glow: "rose",
      bgColor: "rose",
    },
  ]

  const isRTL = dir === "rtl"

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Premium Multi-Layer Background */}
      <div className="absolute inset-0">
        {/* Deep base */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/40 to-slate-950" />

        {/* Aurora effect */}
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 20% 0%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 100%, rgba(236, 72, 153, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 50% 50%, rgba(212, 168, 83, 0.08) 0%, transparent 60%)
          `,
        }} />

        {/* Floating orbs */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1.5s" }} />

        {/* Subtle dotted pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />

        {/* Fade edges */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">
              {t.processTimeline.badge}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-foreground leading-tight">
            {t.processTimeline.title}
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            {t.processTimeline.description}
          </p>
        </div>

        {/* Premium Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center gradient line - desktop */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px hidden md:block">
            <div className="h-full w-px bg-gradient-to-b from-amber-500/0 via-purple-500/60 to-rose-500/0" />
            <div className="absolute inset-0 w-px bg-gradient-to-b from-amber-500/0 via-purple-500/30 to-rose-500/0 blur-sm" />
          </div>

          {/* Left line - mobile */}
          <div className="absolute top-0 bottom-0 left-7 w-px md:hidden bg-gradient-to-b from-amber-500/40 via-purple-500/40 to-rose-500/40" />

          {steps.map((step, index) => {
            const isEven = index % 2 === 0
            const Icon = step.Icon
            return (
              <div key={index} className="relative mb-12 last:mb-0">
                <div className={`md:grid md:grid-cols-2 md:gap-12 items-center ${isEven ? "" : "md:[direction:rtl]"}`}>
                  {/* Step Card */}
                  <div className={`relative pl-20 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left md:[direction:ltr]"} ${isRTL ? "text-right" : ""}`}>
                    <div className="group relative rounded-3xl card-glow lift-gold backdrop-blur-xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 p-7 transition-all duration-500">
                      {/* Decorative gradient blob */}
                      <div className={`absolute -top-12 ${isEven ? "-right-12" : "-left-12"} w-32 h-32 bg-gradient-to-br ${step.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-700`} />

                      {/* Header row */}
                      <div className={`flex items-center gap-3 mb-4 ${isEven && !isRTL ? "md:flex-row-reverse md:justify-start" : ""}`}>
                        {/* Duration badge */}
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${step.gradient} bg-opacity-10 border border-white/20 text-white text-xs font-bold shadow-lg`}>
                          <Clock className="w-3 h-3" />
                          {step.duration}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      {/* Bottom accent line */}
                      <div className={`mt-5 h-1 w-16 rounded-full bg-gradient-to-r ${step.gradient} opacity-70 ${isEven && !isRTL ? "md:ml-auto" : ""}`} />
                    </div>
                  </div>

                  {/* Empty slot for layout symmetry */}
                  <div className="hidden md:block" />
                </div>

                {/* Center Icon Circle (absolute) */}
                <div className={`absolute top-7 left-7 md:left-1/2 md:-translate-x-1/2 z-20`}>
                  <div className="relative">
                    {/* Outer glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-full blur-xl opacity-50 scale-110`} />
                    {/* Icon container */}
                    <div className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl ring-4 ring-background`}>
                      <Icon className="w-6 h-6 text-white" strokeWidth={2.3} />
                    </div>
                    {/* Number badge */}
                    <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">{step.number}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Premium Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20 max-w-4xl mx-auto">
          <div className="group relative rounded-2xl card-glow lift-gold p-6 text-center bg-gradient-to-br from-amber-500/5 to-transparent border border-amber-500/20">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 mb-3 shadow-lg">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-1">12-16</div>
            <p className="text-sm text-muted-foreground font-medium">{t.processTimeline.weeksTotal}</p>
          </div>

          <div className="group relative rounded-2xl card-glow lift-emerald p-6 text-center bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-3 shadow-lg">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-1">100%</div>
            <p className="text-sm text-muted-foreground font-medium">{t.processTimeline.fullSupport}</p>
          </div>

          <div className="group relative rounded-2xl card-glow lift-blue p-6 text-center bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/20">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-3 shadow-lg">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">Zero</div>
            <p className="text-sm text-muted-foreground font-medium">{t.processTimeline.noHiddenFees}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
