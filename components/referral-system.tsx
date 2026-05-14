"use client"

import { useState } from "react"
import { Gift, Users, Share2, Copy, CheckCircle, ArrowRight, Sparkles, Wallet, Clock } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ReferralSystem() {
  const { locale, dir } = useLanguage()
  const [copied, setCopied] = useState(false)
  const [referralCode] = useState("DINOORA2025")
  const [stats] = useState({
    totalReferrals: 12,
    totalEarnings: 1200,
    pendingReferrals: 3,
  })

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://dinoora.com/ref/${referralCode}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const benefits = [
    {
      icon: Gift,
      title: { en: "$100 Per Referral", ar: "$100 لكل إحالة" },
      desc: { en: "Earn $100 for every friend who enrolls", ar: "اكسب $100 لكل صديق يسجل" },
    },
    {
      icon: Users,
      title: { en: "Your Friends Save 10%", ar: "أصدقاؤك يوفرون 10%" },
      desc: { en: "They get instant discount on any service", ar: "يحصلون على خصم فوري على أي خدمة" },
    },
    {
      icon: Wallet,
      title: { en: "No Limit", ar: "بدون حد" },
      desc: { en: "Refer unlimited friends and earn more", ar: "أحل أصدقاء بلا حدود واكسب أكثر" },
    },
  ]

  const howItWorks = [
    {
      step: 1,
      title: { en: "Get Your Code", ar: "احصل على الكود" },
      desc: { en: "Copy your unique referral link", ar: "انسخ رابط الإحالة الخاص بك" },
    },
    {
      step: 2,
      title: { en: "Share With Friends", ar: "شارك مع الأصدقاء" },
      desc: { en: "Send via WhatsApp, email, or social media", ar: "أرسل عبر واتساب، البريد أو السوشيال" },
    },
    {
      step: 3,
      title: { en: "They Enroll", ar: "يسجلون" },
      desc: { en: "Your friend applies using your code", ar: "صديقك يقدم باستخدام كودك" },
    },
    {
      step: 4,
      title: { en: "You Earn!", ar: "تكسب!" },
      desc: { en: "Get $100 credited to your account", ar: "احصل على $100 في حسابك" },
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-amber-500/20 border border-emerald-500/30 mb-4"
          >
            <Gift className="w-4 h-4 text-emerald-400" />
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-white">
              {locale === "en" ? "Refer & Earn Program" : "برنامج الإحالة والمكافآت"}
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-white mb-4"
          >
            {locale === "en" ? "Invite Friends, Earn Rewards" : "ادعُ أصدقاءك، اكسب مكافآت"}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            {locale === "en" 
              ? "Share Dinoora with your friends and earn $100 for each successful enrollment. Your friends also get 10% off!"
              : "شارك دينورا مع أصدقائك واكسب $100 لكل تسجيل ناجح. أصدقاؤك يحصلون أيضاً على خصم 10%!"
            }
          </motion.p>
        </div>

        {/* Stats Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto"
        >
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stats.totalReferrals}</div>
            <div className="text-sm text-slate-400">{locale === "en" ? "Total Referrals" : "إجمالي الإحالات"}</div>
          </div>
          
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-amber-500/20 flex items-center justify-center">
              <Wallet className="w-6 h-6 text-amber-400" />
            </div>
            <div className="text-3xl font-bold text-amber-400 mb-1">${stats.totalEarnings}</div>
            <div className="text-sm text-slate-400">{locale === "en" ? "Total Earnings" : "إجمالي الأرباح"}</div>
          </div>
          
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stats.pendingReferrals}</div>
            <div className="text-sm text-slate-400">{locale === "en" ? "Pending" : "قيد الانتظار"}</div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
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
                className="group bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 rounded-2xl p-6 transition-all duration-300 hover:bg-slate-900"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title[locale]}</h3>
                <p className="text-slate-400">{benefit.desc[locale]}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Referral Link Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-emerald-500/10 border border-amber-500/30 rounded-2xl p-6 md:p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 w-full">
              <label className="text-sm text-slate-400 mb-2 block">
                {locale === "en" ? "Your Referral Link" : "رابط الإحالة الخاص بك"}
              </label>
              <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3">
                <input
                  type="text"
                  value={`https://dinoora.com/ref/${referralCode}`}
                  readOnly
                  className="flex-1 bg-transparent text-white text-sm outline-none"
                />
                <Button
                  onClick={handleCopy}
                  size="sm"
                  className={`shrink-0 ${copied ? "bg-emerald-500" : "bg-amber-500"} hover:opacity-90`}
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-1" />
                      {locale === "en" ? "Copied!" : "تم النسخ!"}
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-1" />
                      {locale === "en" ? "Copy" : "نسخ"}
                    </>
                  )}
                </Button>
              </div>
            </div>
            
            <div className="flex gap-2 shrink-0">
              <Button
                variant="outline"
                size="sm"
                className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
                onClick={() => window.open(`https://wa.me/?text=Join%20me%20at%20Dinoora%20and%20get%2010%25%20off!%20https://dinoora.com/ref/${referralCode}`, '_blank')}
              >
                <Share2 className="w-4 h-4 mr-1" />
                WhatsApp
              </Button>
            </div>
          </div>
        </motion.div>

        {/* How It Works */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">
            {locale === "en" ? "How It Works" : "كيف يعمل"}
          </h3>
          <p className="text-slate-400">
            {locale === "en" ? "Four simple steps to start earning" : "أربع خطوات بسيطة للبدء في الربح"}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {howItWorks.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 text-center h-full">
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-bold">
                  {step.step}
                </div>
                <h4 className="font-semibold text-white mb-1">{step.title[locale]}</h4>
                <p className="text-xs text-slate-400">{step.desc[locale]}</p>
              </div>
              {index < howItWorks.length - 1 && (
                <ArrowRight className={`absolute top-1/2 ${dir === "rtl" ? "-left-2" : "-right-2"} -translate-y-1/2 w-4 h-4 text-slate-600 hidden md:block ${dir === "rtl" ? "rotate-180" : ""}`} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
