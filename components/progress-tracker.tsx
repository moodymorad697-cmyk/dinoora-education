"use client"

import { CheckCircle, Clock, FileText, GraduationCap, Plane, Home, Phone, Award } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

interface ProgressTrackerProps {
  currentStep: number
}

export function ProgressTracker({ currentStep = 2 }: ProgressTrackerProps) {
  const { locale, dir } = useLanguage()

  const steps = [
    {
      id: 1,
      icon: Phone,
      title: { en: "Initial Consultation", ar: "الاستشارة الأولية" },
      desc: { en: "Profile assessment", ar: "تقييم الملف" },
    },
    {
      id: 2,
      icon: GraduationCap,
      title: { en: "University Selection", ar: "اختيار الجامعة" },
      desc: { en: "Program matching", ar: "مطابقة البرنامج" },
    },
    {
      id: 3,
      icon: FileText,
      title: { en: "Document Preparation", ar: "إعداد الوثائق" },
      desc: { en: "Translation & attestation", ar: "ترجمة وتصديق" },
    },
    {
      id: 4,
      icon: Award,
      title: { en: "Application Submission", ar: "تقديم الطلب" },
      desc: { en: "Sent to university", ar: "إرسال للجامعة" },
    },
    {
      id: 5,
      icon: Clock,
      title: { en: "Waiting for Acceptance", ar: "انتظار القبول" },
      desc: { en: "2-4 weeks processing", ar: "معالجة 2-4 أسابيع" },
    },
    {
      id: 6,
      icon: Plane,
      title: { en: "Visa Processing", ar: "معالجة التأشيرة" },
      desc: { en: "Embassy submission", ar: "تقديم للسفارة" },
    },
    {
      id: 7,
      icon: Home,
      title: { en: "Arrival & Accommodation", ar: "الوصول والسكن" },
      desc: { en: "Airport pickup + housing", ar: "استقبال + سكن" },
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-4">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-300">
              {locale === "en" ? "Your Journey With Dinoora" : "رحلتك مع دينورا"}
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {locale === "en" ? "Track Your Progress" : "تتبع تقدمك"}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {locale === "en" 
              ? "From consultation to graduation, we guide you through every step of your study abroad journey"
              : "من الاستشارة حتى التخرج، نرشدك في كل خطوة من رحلة دراستك في الخارج"
            }
          </p>
        </div>

        {/* Progress Steps - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-slate-800 rounded-full">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full transition-all duration-1000"
                style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {/* Steps */}
            <div className="relative flex justify-between">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isCompleted = index < currentStep - 1
                const isCurrent = index === currentStep - 1
                const isPending = index >= currentStep

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Icon Circle */}
                    <div className={`relative w-24 h-24 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 ${
                      isCompleted 
                        ? "bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/30" 
                        : isCurrent
                        ? "bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-500/30 scale-110 ring-4 ring-amber-500/20"
                        : "bg-slate-800 border border-slate-700"
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="w-10 h-10 text-white" />
                      ) : (
                        <Icon className={`w-10 h-10 ${isCurrent ? "text-white" : "text-slate-500"}`} />
                      )}
                      
                      {/* Pulse effect for current step */}
                      {isCurrent && (
                        <div className="absolute inset-0 rounded-2xl bg-amber-500 animate-ping opacity-20" />
                      )}
                    </div>

                    {/* Step Number */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-2 ${
                      isCompleted || isCurrent
                        ? "bg-amber-500 text-slate-950"
                        : "bg-slate-800 text-slate-500 border border-slate-700"
                    }`}>
                      {step.id}
                    </div>

                    {/* Title */}
                    <h4 className={`font-semibold text-sm mb-1 ${
                      isCompleted || isCurrent ? "text-white" : "text-slate-500"
                    }`}>
                      {step.title[locale]}
                    </h4>

                    {/* Description */}
                    <p className={`text-xs ${
                      isCurrent ? "text-amber-400" : "text-slate-600"
                    }`}>
                      {step.desc[locale]}
                    </p>

                    {/* Current Step Badge */}
                    {isCurrent && (
                      <div className="mt-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40">
                        <span className="text-xs font-semibold text-amber-400">
                          {locale === "en" ? "You are here" : "أنت هنا"}
                        </span>
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Progress Steps - Mobile */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isCompleted = index < currentStep - 1
            const isCurrent = index === currentStep - 1

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: dir === "rtl" ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-4 p-4 rounded-xl ${
                  isCurrent 
                    ? "bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-500/30" 
                    : isCompleted
                    ? "bg-emerald-500/10 border border-emerald-500/20"
                    : "bg-slate-900 border border-slate-800"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  isCompleted 
                    ? "bg-emerald-500" 
                    : isCurrent
                    ? "bg-amber-500"
                    : "bg-slate-800"
                }`}>
                  {isCompleted ? (
                    <CheckCircle className="w-6 h-6 text-white" />
                  ) : (
                    <Icon className={`w-6 h-6 ${isCurrent ? "text-white" : "text-slate-500"}`} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className={`font-semibold ${isCurrent ? "text-white" : isCompleted ? "text-white" : "text-slate-400"}`}>
                      {step.title[locale]}
                    </h4>
                    {isCurrent && (
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-xs">
                        {locale === "en" ? "Current" : "الحالي"}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500">{step.desc[locale]}</p>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  isCompleted || isCurrent
                    ? "bg-amber-500 text-slate-950"
                    : "bg-slate-800 text-slate-500"
                }`}>
                  {step.id}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
