"use client"

import { useLanguage } from "@/lib/language-context"
import { 
  Shield, 
  Award, 
  Users, 
  Clock, 
  CheckCircle, 
  BadgeCheck,
  Globe,
  Lock,
  TrendingUp,
  HeartHandshake,
  FileCheck,
  Building2,
  GraduationCap,
  Star,
  ThumbsUp,
  MessageCircle
} from "lucide-react"
import { motion } from "framer-motion"

// Trust Badges Section
export function TrustBadges() {
  const { locale } = useLanguage()
  
  const badges = [
    {
      icon: Shield,
      title: locale === "ar" ? "موثق رسمياً" : "Officially Verified",
      desc: locale === "ar" ? "شركة مرخصة من الجهات الحكومية" : "Licensed by government authorities"
    },
    {
      icon: Award,
      title: locale === "ar" ? "خبرة 5+ سنوات" : "5+ Years Experience",
      desc: locale === "ar" ? "في خدمات الاستشارات التعليمية" : "In educational consultancy services"
    },
    {
      icon: Users,
      title: locale === "ar" ? "2000+ طالب" : "2000+ Students",
      desc: locale === "ar" ? "ساعدناهم في تحقيق أحلامهم" : "We helped them achieve their dreams"
    },
    {
      icon: Globe,
      title: locale === "ar" ? "تغطية عالمية" : "Global Coverage",
      desc: locale === "ar" ? "نتعامل مع 50+ دولة" : "We serve 50+ countries"
    },
    {
      icon: Building2,
      title: locale === "ar" ? "مكتبان دوليان" : "2 International Offices",
      desc: locale === "ar" ? "الصين وماليزيا" : "China & Malaysia"
    },
    {
      icon: Lock,
      title: locale === "ar" ? "دفع آمن" : "Secure Payment",
      desc: locale === "ar" ? "ضمان استرداد 100%" : "100% Money Back Guarantee"
    }
  ]
  
  return (
    <section className="py-16 bg-slate-950 border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            {locale === "ar" ? "لماذا تثق بدينورا؟" : "Why Trust DINOORA?"}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {locale === "ar" 
              ? "نحن نفخر بكوننا شريكاً موثوقاً للآلاف من الطلاب في رحلتهم التعليمية"
              : "We pride ourselves on being a trusted partner for thousands of students on their educational journey"
            }
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <badge.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">{badge.title}</h3>
              <p className="text-xs text-slate-500">{badge.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Certifications & Partnerships
export function Certifications() {
  const { locale } = useLanguage()
  
  const certifications = [
    { name: "ISO 9001:2015", desc: locale === "ar" ? "جودة الخدمات" : "Quality Management" },
    { name: "ICEF", desc: locale === "ar" ? "معتمد دولياً" : "Internationally Certified" },
    { name: "NAFSA", desc: locale === "ar" ? "عضو فخري" : "Honorary Member" },
    { name: "CHESICC", desc: locale === "ar" ? "شريك معتمد في الصين" : "Certified China Partner" },
  ]
  
  const partners = [
    "Tsinghua University",
    "Peking University",
    "University of Malaya",
    "Bogazici University",
    "Zhejiang University",
    "Taylor's University"
  ]
  
  return (
    <section className="py-16 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <BadgeCheck className="w-6 h-6 text-primary" />
              {locale === "ar" ? "الشهادات والاعتمادات" : "Certifications & Accreditations"}
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-slate-950 border border-slate-800"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{cert.name}</h4>
                    <p className="text-sm text-slate-500">{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Partner Universities */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              {locale === "ar" ? "جامعات شريكة بارزة" : "Featured Partner Universities"}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {partners.map((partner, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 p-3 rounded-lg bg-slate-950 border border-slate-800"
                >
                  <Building2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-slate-300">{partner}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500 text-center">
              {locale === "ar" ? "و 494+ جامعة أخرى..." : "And 494+ more universities..."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Success Stats with Trust Indicators
export function TrustStats() {
  const { locale } = useLanguage()
  
  const stats = [
    { 
      value: "98%", 
      label: locale === "ar" ? "نسبة رضا العملاء" : "Client Satisfaction",
      icon: ThumbsUp
    },
    { 
      value: "$2M+", 
      label: locale === "ar" ? "قيمة المنح المؤمنة" : "Scholarships Secured",
      icon: TrendingUp
    },
    { 
      value: "500+", 
      label: locale === "ar" ? "جامعة شريكة" : "Partner Universities",
      icon: Building2
    },
    { 
      value: "24/7", 
      label: locale === "ar" ? "دعم متواصل" : "Continuous Support",
      icon: HeartHandshake
    }
  ]
  
  return (
    <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center group hover:border-primary/50 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Guarantees Section
export function Guarantees() {
  const { locale } = useLanguage()
  
  const guarantees = [
    {
      icon: FileCheck,
      title: locale === "ar" ? "ضمان قبول 100%" : "100% Acceptance Guarantee",
      desc: locale === "ar" 
        ? "إذا لم تحصل على قبول، نسترد لك المبالغ المدفوعة بالكامل"
        : "If you don't get accepted, we refund all fees paid in full"
    },
    {
      icon: Clock,
      title: locale === "ar" ? "التزام بالمواعيد" : "On-Time Commitment",
      desc: locale === "ar"
        ? "نلتزم بالمواعيد المحددة أو نقدم خصماً 20% على الخدمات"
        : "We adhere to deadlines or offer 20% discount on services"
    },
    {
      icon: MessageCircle,
      title: locale === "ar" ? "دعم مدى الحياة" : "Lifetime Support",
      desc: locale === "ar"
        ? "نظل على تواصل معك طوال فترة الدراسة"
        : "We stay in touch with you throughout your studies"
    },
    {
      icon: Lock,
      title: locale === "ar" ? "خصوصية تامة" : "Complete Privacy",
      desc: locale === "ar"
        ? "بياناتك محمية ولا نشاركها مع أي طرف ثالث"
        : "Your data is protected and never shared with third parties"
    }
  ]
  
  return (
    <section className="py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            {locale === "ar" ? "ضمانات دينورا" : "DINOORA Guarantees"}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {locale === "ar" 
              ? "نؤمن بأن نجاحك هو نجاحنا، لذا نقدم هذه الضمانات لك"
              : "We believe your success is our success, so we offer these guarantees"
            }
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {guarantees.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Social Proof - Recent Success Stories
export function SocialProof() {
  const { locale } = useLanguage()
  
  const recentActivity = [
    { name: "Ahmed M.", country: "Egypt", action: locale === "ar" ? "حصل على قبول في Tsinghua" : "Accepted to Tsinghua", time: "2h ago" },
    { name: "Sarah K.", country: "Saudi Arabia", action: locale === "ar" ? "حصلت على منحة CSC" : "Received CSC Scholarship", time: "5h ago" },
    { name: "Mohammed A.", country: "Jordan", action: locale === "ar" ? "قدّم طلب تأشيرة" : "Applied for visa", time: "1d ago" },
    { name: "Fatima Z.", country: "UAE", action: locale === "ar" ? "سجلت في البرنامج" : "Enrolled in program", time: "1d ago" },
  ]
  
  return (
    <section className="py-8 bg-emerald-500/5 border-y border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-slate-950 flex items-center justify-center text-xs text-white font-bold">
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <p className="text-sm text-emerald-400 font-medium">
            {locale === "ar" ? "+156 طالباً نشطاً هذا الشهر" : "+156 active students this month"}
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentActivity.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-slate-950/50 border border-slate-800">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white font-medium truncate">{item.name}</p>
                <p className="text-xs text-slate-500">{item.action}</p>
              </div>
              <span className="text-xs text-slate-600">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Combined Trust Section for easy import
export function TrustSection() {
  return (
    <>
      <TrustBadges />
      <TrustStats />
      <Certifications />
      <Guarantees />
      <SocialProof />
    </>
  )
}
