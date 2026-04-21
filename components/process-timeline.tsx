"use client"

import { useLanguage } from "@/lib/language-context"
import { CheckCircle2, Clock, FileText, Plane, Home, FileCheck } from "lucide-react"

export function ProcessTimeline() {
  const { t, dir } = useLanguage()

  const steps = [
    {
      number: 1,
      icon: FileText,
      titleEn: "Consultation & Planning",
      titleAr: "الاستشارة والتخطيط",
      descriptionEn: "We understand your goals and create a personalized education plan",
      descriptionAr: "نفهم أهدافك ونضع خطة تعليم مخصصة لك",
      duration: "1-2 weeks",
      emoji: "📋"
    },
    {
      number: 2,
      icon: FileCheck,
      titleEn: "Document Preparation",
      titleAr: "تحضير المستندات",
      descriptionEn: "Gather and organize all required documents for university application",
      descriptionAr: "جمع وتنظيم جميع المستندات المطلوبة",
      duration: "2-3 weeks",
      emoji: "📄"
    },
    {
      number: 3,
      icon: CheckCircle2,
      titleEn: "University Application",
      titleAr: "التقديم للجامعة",
      descriptionEn: "Submit applications to your preferred universities with our guidance",
      descriptionAr: "تقديم الطلبات للجامعات المفضلة بمساعدتنا",
      duration: "2-4 weeks",
      emoji: "🎓"
    },
    {
      number: 4,
      icon: CheckCircle2,
      titleEn: "Visa Processing",
      titleAr: "معالجة التأشيرة",
      descriptionEn: "Complete visa application with full support and interview preparation",
      descriptionAr: "استكمال طلب التأشيرة مع الدعم الكامل",
      duration: "3-6 weeks",
      emoji: "🛂"
    },
    {
      number: 5,
      icon: Home,
      titleEn: "Accommodation & Travel",
      titleAr: "السكن والسفر",
      descriptionEn: "Arrange housing and help you prepare for your journey abroad",
      descriptionAr: "ترتيب السكن والتحضير للسفر",
      duration: "1-2 weeks",
      emoji: "🏠"
    }
  ]

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute left-0 top-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm font-medium text-primary">⏱️ عملية سهلة وسريعة</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Your Journey in 5 Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground">
            We guide you through every step of the process, making your dream of studying abroad a reality
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
                        {dir === "rtl" ? step.titleAr : step.titleEn}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold flex-shrink-0">
                      <Clock className="w-4 h-4" />
                      {step.duration}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {dir === "rtl" ? step.descriptionAr : step.descriptionEn}
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
            <p className="text-sm text-muted-foreground">Weeks Total</p>
          </div>
          <div className="glass rounded-2xl p-6 text-center border border-border/40 hover:border-primary/50 transition-all">
            <div className="text-4xl font-bold gradient-text mb-2">100%</div>
            <p className="text-sm text-muted-foreground">Support</p>
          </div>
          <div className="glass rounded-2xl p-6 text-center border border-border/40 hover:border-primary/50 transition-all">
            <div className="text-4xl font-bold gradient-text mb-2">Zero</div>
            <p className="text-sm text-muted-foreground">Hidden Fees</p>
          </div>
        </div>
      </div>
    </section>
  )
}
