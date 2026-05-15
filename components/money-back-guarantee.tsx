"use client"

import { Shield, CheckCircle, XCircle, RefreshCw, Award, Phone, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function MoneyBackGuarantee() {
  const { locale, dir } = useLanguage()

  const conditions = [
    {
      icon: CheckCircle,
      title: { en: "100% Acceptance Guarantee", ar: "ضمان قبول 100%" },
      desc: { en: "If we fail to get you accepted, full refund", ar: "إذا لم نحصل لك على قبول، استرداد كامل" },
      valid: true,
    },
    {
      icon: XCircle,
      title: { en: "Not Valid If", ar: "غير ساري إذا" },
      desc: { en: "You withdraw after application submission", ar: "انسحبت بعد تقديم الطلب" },
      valid: false,
    },
    {
      icon: CheckCircle,
      title: { en: "30-Day Processing", ar: "معالجة خلال 30 يوم" },
      desc: { en: "Refund processed within 30 days of request", ar: "استرداد خلال 30 يوم من الطلب" },
      valid: true,
    },
  ]

  const processSteps = [
    {
      icon: Phone,
      title: { en: "Contact Support", ar: "تواصل مع الدعم" },
      desc: { en: "Explain your situation via WhatsApp or email", ar: "اشرح موقفك عبر واتساب أو البريد" },
    },
    {
      icon: RefreshCw,
      title: { en: "Review Process", ar: "مراجعة الطلب" },
      desc: { en: "We review your case within 3-5 business days", ar: "نراجع حالتك خلال 3-5 أيام عمل" },
    },
    {
      icon: Award,
      title: { en: "Get Refunded", ar: "احصل على الاسترداد" },
      desc: { en: "Full amount returned to your original payment method", ar: "المبلغ كاملاً إلى طريقة الدفع الأصلية" },
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-emerald-950/10 to-slate-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-500/20 via-emerald-600/10 to-teal-500/20 border border-emerald-500/30 rounded-3xl p-8 md:p-12 mb-12"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Badge */}
            <div className="shrink-0">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-2xl shadow-emerald-500/30">
                  <Shield className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 font-bold text-lg">
                  100%
                </div>
                <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              >
                {locale === "en" 
                  ? "Money-Back Guarantee" 
                  : "ضمان استرداد الأموال"
                }
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-emerald-400 font-semibold mb-4"
              >
                {locale === "en" 
                  ? "No Acceptance? Get a Full Refund!" 
                  : "لم تحصل على قبول؟ استرد كامل المبلغ!"
                }
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-slate-300 text-lg max-w-2xl"
              >
                {locale === "en" 
                  ? "We're confident in our services. If we fail to secure your university acceptance, we'll refund 100% of your service fees. No questions asked."
                  : "نحن واثقون من خدماتنا. إذا فشلنا في تأمين قبولك الجامعي، سنسترد 100% من رسوم الخدمة. بدون أسئلة."
                }
              </motion.p>
            </div>

            {/* CTA */}
            <div className="shrink-0 flex flex-col gap-3">
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-6 text-lg shadow-lg shadow-emerald-500/30"
                asChild
              >
                <a href="https://wa.me/8615587237864">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {locale === "en" ? "Start Risk-Free" : "ابدأ بدون مخاطرة"}
                </a>
              </Button>
              <p className="text-xs text-slate-500 text-center">
                {locale === "en" ? "SSL Secure • Verified by 2500+ students • 5+ years experience" : "SSL آمن • موثق من 2500+ طالب • 5+ سنوات خبرة"}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {conditions.map((condition, index) => {
            const Icon = condition.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl border ${
                  condition.valid 
                    ? "bg-emerald-500/10 border-emerald-500/30" 
                    : "bg-slate-900 border-slate-800"
                }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  condition.valid ? "bg-emerald-500/20" : "bg-slate-800"
                }`}>
                  <Icon className={`w-7 h-7 ${condition.valid ? "text-emerald-400" : "text-slate-500"}`} />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${condition.valid ? "text-white" : "text-slate-400"}`}>
                  {condition.title[locale]}
                </h3>
                <p className="text-slate-400 text-sm">{condition.desc[locale]}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Refund Process */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {locale === "en" ? "How Refund Works" : "كيف يعمل الاسترداد"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-primary/50 transition-all">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute top-8 left-1/2 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-sm">
                      {index + 1}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{step.title[locale]}</h4>
                    <p className="text-sm text-slate-400">{step.desc[locale]}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-emerald-500/30 to-transparent" />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-slate-300">{locale === "en" ? "SSL Secure" : "SSL آمن"}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-slate-300">{locale === "en" ? "Trusted by 2000+ Students" : "موثوق من 2000+ طالب"}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-slate-300">{locale === "en" ? "5+ Years Experience" : "5+ سنوات خبرة"}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
