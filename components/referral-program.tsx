"use client"

import { useLanguage } from "@/lib/language-context"
import { 
  Gift, 
  Copy, 
  Share2, 
  CheckCircle, 
  Users, 
  DollarSign, 
  Clock,
  MessageCircle,
  Link as LinkIcon,
  ArrowRight,
  Trophy,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"

export function ReferralProgram() {
  const { locale, dir } = useLanguage()
  const [copied, setCopied] = useState(false)

  const referralLink = "https://dinoora.com/ref/DINOORA2025"

  const handleCopy = async () => {
    await navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const stats = [
    {
      icon: Users,
      value: "12",
      label: locale === "ar" ? "إجمالي الإحالات" : "Total Referrals",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: DollarSign,
      value: "$1200",
      label: locale === "ar" ? "إجمالي الأرباح" : "Total Earnings",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Clock,
      value: "3",
      label: locale === "ar" ? "قيد الانتظار" : "Pending",
      color: "from-amber-500 to-orange-500"
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: locale === "ar" ? "$100 لكل إحالة" : "$100 per referral",
      desc: locale === "ar" ? "اكسب $100 لكل صديق يسجل" : "Earn $100 for every friend who signs up"
    },
    {
      icon: Gift,
      title: locale === "ar" ? "أصدقاؤك يوفرون 10%" : "Your friends save 10%",
      desc: locale === "ar" ? "يحصلون على خصم فوري على أي خدمة" : "They get instant discount on any service"
    },
    {
      icon: Trophy,
      title: locale === "ar" ? "بدون حد" : "No limit",
      desc: locale === "ar" ? "أحل أصدقاء بلا حدود واكسب أكثر" : "Refer unlimited friends and earn more"
    }
  ]

  const steps = [
    {
      icon: Copy,
      title: locale === "ar" ? "احصل على الكود" : "Get Your Code",
      desc: locale === "ar" ? "انسخ رابط الإحالة الخاص بك" : "Copy your unique referral link"
    },
    {
      icon: Share2,
      title: locale === "ar" ? "شارك مع الأصدقاء" : "Share with Friends",
      desc: locale === "ar" ? "أرسل عبر واتساب، البريد أو السوشيال" : "Send via WhatsApp, email or social media"
    },
    {
      icon: Users,
      title: locale === "ar" ? "يسجلون" : "They Sign Up",
      desc: locale === "ar" ? "صديقك يقدم باستخدام كودك" : "Your friend applies using your code"
    },
    {
      icon: Zap,
      title: locale === "ar" ? "تكسب!" : "You Earn!",
      desc: locale === "ar" ? "احصل على $100 في حسابك" : "Get $100 in your account"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/10 to-slate-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6"
          >
            <Gift className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-400">
              {locale === "ar" ? "برنامج الإحالة والمكافآت" : "Referral & Rewards Program"}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            {locale === "ar" 
              ? "ادعُ أصدقاءك، اكسب مكافآت" 
              : "Invite Friends, Earn Rewards"
            }
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            {locale === "ar" 
              ? "شارك دينورا مع أصدقائك واكسب $100 لكل تسجيل ناجح. أصدقاؤك يحصلون أيضاً على خصم 10%!"
              : "Share Dinoora with your friends and earn $100 for every successful signup. Your friends also get 10% off!"
            }
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 text-center group hover:border-amber-500/30 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Referral Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-amber-500/20 via-amber-600/10 to-orange-500/20 border border-amber-500/30"
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 w-full">
              <label className="text-sm font-semibold text-amber-400 mb-2 block">
                {locale === "ar" ? "رابط الإحالة الخاص بك" : "Your Referral Link"}
              </label>
              <div className="flex gap-2">
                <div className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 font-mono text-sm text-slate-300 flex items-center gap-2">
                  <LinkIcon className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">{referralLink}</span>
                </div>
                <Button
                  onClick={handleCopy}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {locale === "ar" ? "تم النسخ" : "Copied"}
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      {locale === "ar" ? "نسخ" : "Copy"}
                    </>
                  )}
                </Button>
                <Button
                  asChild
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6"
                >
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`Check out Dinoora Education - your gateway to studying abroad! Use my referral link: ${referralLink}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-400">{benefit.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {locale === "ar" ? "كيف يعمل" : "How It Works"}
          </h3>
          <p className="text-slate-400 text-center mb-8">
            {locale === "ar" 
              ? "أربع خطوات بسيطة للبدء في الربح" 
              : "Four simple steps to start earning"
            }
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => {
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
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-4 shadow-lg shadow-amber-500/30">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute top-8 left-1/2 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-sm">
                      {index + 1}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-sm text-slate-400">{step.desc}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-amber-500/30 to-transparent" />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold px-8 py-6 text-lg shadow-lg shadow-amber-500/30"
          >
            {locale === "ar" ? "ابدأ في الربح الآن" : "Start Earning Now"}
            <ArrowRight className={`w-5 h-5 ml-2 ${dir === "rtl" ? "rotate-180" : ""}`} />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
