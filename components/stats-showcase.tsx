"use client"

import { useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Users, GraduationCap, Globe, Award, TrendingUp, Clock } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface StatItemProps {
  icon: React.ElementType
  value: number
  suffix: string
  label: string
  color: string
  delay: number
}

function StatItem({ icon: Icon, value, suffix, label, color, delay }: StatItemProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="relative group"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
      <div className="relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all">
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${color} mb-4 shadow-lg`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div className="text-4xl md:text-5xl font-bold text-white mb-2">
          {count.toLocaleString()}{suffix}
        </div>
        <div className="text-slate-400 text-sm">{label}</div>
      </div>
    </motion.div>
  )
}

export function StatsShowcase() {
  const { locale } = useLanguage()

  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: "+",
      label: locale === "en" ? "Students Helped" : "طالب تم مساعدتهم",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: GraduationCap,
      value: 50,
      suffix: "+",
      label: locale === "en" ? "Prestigious Universities" : "جامعة مرموقة",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      value: 3,
      suffix: "",
      label: locale === "en" ? "Countries" : "دول",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Award,
      value: 98,
      suffix: "%",
      label: locale === "en" ? "Success Rate" : "نسبة النجاح",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      value: 5,
      suffix: "+",
      label: locale === "en" ? "Years Experience" : "سنوات خبرة",
      color: "from-rose-500 to-red-500",
    },
    {
      icon: Clock,
      value: 24,
      suffix: "/7",
      label: locale === "en" ? "Support Available" : "دعم متوفر",
      color: "from-indigo-500 to-violet-500",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {locale === "en" ? "Numbers That Speak" : "أرقام تتحدث"}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {locale === "en" 
              ? "Trusted by thousands of students worldwide. Our track record speaks for itself."
              : "موثق من آلاف الطلاب حول العالم. سجلنا يتحدث عن نفسه."
            }
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              color={stat.color}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-8"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800">
            <div className="flex">
              {[1,2,3,4,5].map((star) => (
                <svg key={star} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-slate-300">
              {locale === "en" ? "4.8/5 from 500+ reviews" : "4.8/5 من 500+ تقييم"}
            </span>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-slate-300">
              {locale === "en" ? "ISO 9001 Certified" : "معتمد ISO 9001"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
