"use client"

import { useLanguage } from "@/lib/language-context"
import { CheckCircle2, Clock, FileText, Plane, Home, FileCheck } from "lucide-react"
import { AnimatedBackground } from "@/components/ui/animated-background"

export function ProcessTimeline() {
  const { t, dir, locale } = useLanguage()

  const steps = [
    {
      number: 1,
      icon: FileText,
      title: t.processTimeline.step1Title,
      description: t.processTimeline.step1Desc,
      duration: t.processTimeline.step1Duration,
      emoji: "📋"
    },
    {
      number: 2,
      icon: FileCheck,
      title: t.processTimeline.step2Title,
      description: t.processTimeline.step2Desc,
      duration: t.processTimeline.step2Duration,
      emoji: "📄"
    },
    {
      number: 3,
      icon: CheckCircle2,
      title: t.processTimeline.step3Title,
      description: t.processTimeline.step3Desc,
      duration: t.processTimeline.step3Duration,
      emoji: "🎓"
    },
    {
      number: 4,
      icon: CheckCircle2,
      title: t.processTimeline.step4Title,
      description: t.processTimeline.step4Desc,
      duration: t.processTimeline.step4Duration,
      emoji: "🛂"
    },
    {
      number: 5,
      icon: Home,
      title: t.processTimeline.step5Title,
      description: t.processTimeline.step5Desc,
      duration: t.processTimeline.step5Duration,
      emoji: "🏠"
    }
  ]

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0">
        {/* Professional Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1920&q=90')",
          }}
        />
        
        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/85 via-purple-900/75 to-fuchsia-900/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
        
        {/* Elegant Mesh Gradient */}
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: `
            radial-gradient(circle at 30% 35%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 70% 65%, rgba(217, 70, 239, 0.3) 0%, transparent 50%)
          `
        }} />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm font-medium text-primary">
              {t.processTimeline.badge}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            {t.processTimeline.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.processTimeline.description}
          </p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-6 md:left-1/2 top-20 w-1 h-12 bg-gradient-to-b from-primary to-primary/20 md:h-full md:w-1 md:top-0" />
              )}

              {/* Step Card */}
              <div className={`relative flex gap-6 md:gap-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Circle Badge */}
                <div className="flex-shrink-0 z-20">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg font-bold text-white shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 glass rounded-2xl p-8 border border-border/40 hover:border-primary/50 transition-all group md:w-1/2 ${index % 2 === 0 ? "md:mr-1/2 md:ml-0" : "md:ml-1/2 md:mr-0"}`}>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="text-3xl mb-2 group-hover:scale-125 transition-transform">{step.emoji}</div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold flex-shrink-0">
                      <Clock className="w-4 h-4" />
                      {step.duration}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-4 mt-20 max-w-2xl mx-auto">
          <div className="glass rounded-2xl p-6 text-center border border-border/40 hover:border-primary/50 transition-all">
            <div className="text-4xl font-bold gradient-text mb-2">12-16</div>
            <p className="text-sm text-muted-foreground">{t.processTimeline.weeksTotal}</p>
          </div>
          <div className="glass rounded-2xl p-6 text-center border border-border/40 hover:border-primary/50 transition-all">
            <div className="text-4xl font-bold gradient-text mb-2">100%</div>
            <p className="text-sm text-muted-foreground">{t.processTimeline.fullSupport}</p>
          </div>
          <div className="glass rounded-2xl p-6 text-center border border-border/40 hover:border-primary/50 transition-all">
            <div className="text-4xl font-bold gradient-text mb-2">Zero</div>
            <p className="text-sm text-muted-foreground">{t.processTimeline.noHiddenFees}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
