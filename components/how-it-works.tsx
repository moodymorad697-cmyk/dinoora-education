"use client"

import { Send, Search, FileText, CheckCircle, Stamp, Plane } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HowItWorks() {
  const { t, dir } = useLanguage()
  
  const steps = [
    { icon: Send, key: "submit" as const },
    { icon: Search, key: "match" as const },
    { icon: FileText, key: "apply" as const },
    { icon: CheckCircle, key: "acceptance" as const },
    { icon: Stamp, key: "visa" as const },
    { icon: Plane, key: "travel" as const },
  ]

  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm font-medium text-primary">{t.howItWorks.label}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-6">
            <span className="text-foreground">{t.howItWorks.title.split(" ").slice(0, -1).join(" ")} </span>
            <span className="gradient-text">{t.howItWorks.title.split(" ").slice(-1)}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.howItWorks.description}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="absolute top-16 left-[16%] right-[16%] hidden lg:block">
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => {
              const data = t.howItWorks.steps[step.key]
              return (
                <div key={index} className="relative group">
                  <div className="flex flex-col items-center text-center">
                    {/* Step Number & Icon */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center group-hover:bg-primary/10 transition-all duration-500 group-hover:scale-105">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full gold-gradient text-primary-foreground text-sm font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-3">{data.title}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-xs">{data.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Timeline Visual for Mobile */}
        <div className="mt-12 lg:hidden">
          <div className="flex justify-center">
            <div className="flex items-center gap-2">
              {steps.map((_, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  {index < steps.length - 1 && (
                    <div className="w-8 h-0.5 bg-primary/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
