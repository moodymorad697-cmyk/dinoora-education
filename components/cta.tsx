"use client"

import { ArrowRight, MessageCircle, Check, Sparkles, Shield, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function CTA() {
  const { t, dir, locale } = useLanguage()

  const benefits = [
    { icon: Sparkles, label: t.cta.benefits.consultation },
    { icon: Shield, label: t.cta.benefits.noFees },
    { icon: Clock, label: t.cta.benefits.support },
    { icon: Award, label: t.cta.benefits.guarantee },
  ]
  
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative overflow-hidden rounded-[2.5rem] p-1">
          {/* Gradient Border */}
          <div className="absolute inset-0 gold-gradient opacity-50 blur-sm" />
          
          <div className="relative rounded-[2.25rem] bg-card/95 backdrop-blur-xl p-8 sm:p-12 lg:p-20 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
            <div className="absolute inset-0 grid-pattern opacity-20" />
            
            <div className="relative z-10">
              {/* Badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {locale === "ar" ? "ابدأ رحلتك مجاناً" : "Start Your Journey Free"}
                  </span>
                </div>
              </div>
              
              {/* Heading */}
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-6">
                  <span className="text-foreground">{t.cta.title.split(" ").slice(0, -1).join(" ")} </span>
                  <span className="gradient-text">{t.cta.title.split(" ").slice(-1)}</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.cta.description}
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto gold-gradient text-primary-foreground hover:opacity-90 text-base px-8 py-6 rounded-xl font-semibold shadow-lg shadow-primary/25 group"
                  asChild
                >
                  <Link href="#apply">
                    {t.cta.applyNow}
                    <ArrowRight className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${dir === "rtl" ? "mr-2 rotate-180 group-hover:-translate-x-1" : "ml-2"}`} />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-border/50 text-foreground hover:bg-secondary/50 text-base px-8 py-6 rounded-xl"
                  asChild
                >
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className={`h-5 w-5 ${dir === "rtl" ? "ml-2" : "mr-2"}`} />
                    {t.cta.whatsapp}
                  </a>
                </Button>
              </div>

              {/* Benefits */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{benefit.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
