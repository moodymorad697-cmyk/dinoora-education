"use client"

import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { 
  GraduationCap, 
  TrendingUp, 
  Shield, 
  Users,
  CheckCircle,
  Share2,
  Copy
} from "lucide-react"
import { useState } from "react"

export function SuccessStories() {
  const { locale } = useLanguage()
  
  const successStories = [
    {
      name: "Ahmed Al-Rashid",
      university: "Tsinghua University",
      program: "Computer Science",
      scholarship: locale === "ar" ? "منحة CSC كاملة" : "Full CSC Scholarship",
      story: {
        en: "DINOORA turned my dream into reality. Their team handled everything from university selection to visa processing with unbelievable professionalism. I got a full CSC scholarship and now I study at the #1 university in China!",
        ar: "حولت دينورا حلمي إلى واقع. تعامل فريقهم مع كل شيء من اختيار الجامعة إلى معالجة التأشيرة باحترافية لا تصدق. حصلت على منحة CSC كاملة والآن أدرس في الجامعة رقم 1 في الصين!"
      }
    },
    {
      name: "Fatima Hassan",
      university: "Peking University",
      program: "Medicine (MBBS)",
      scholarship: locale === "ar" ? "منحة الحكومة الصينية" : "Chinese Government Scholarship",
      story: {
        en: "As a medical student, choosing the right program was crucial. DINOORA consultants understood my goals and matched me with a WHO-recognized human medicine program. Their support didn't end at admission - they helped me settle in Beijing!",
        ar: "كطالبة طب، كان اختيار البرنامج المناسب أمراً حاسماً. فهم مستشارو دينورا أهدافي وطابقوني مع برنامج طب بشري معترف به من منظمة الصحة العالمية. دعمهم لم ينتهِ عند القبول - ساعدوني في الاستقرار في بكين!"
      }
    },
    {
      name: "Omar Yusuf",
      university: "Zhejiang University",
      program: "Engineering",
      scholarship: locale === "ar" ? "منحة إقليمية" : "Provincial Scholarship",
      story: {
        en: "From my first inquiry until my arrival in Hangzhou, DINOORA was with me every step of the way. Airport pickup, housing preparation, university registration - everything was seamless. They truly care about student success!",
        ar: "من استفساري الأول حتى وصولي إلى هانغتشو، كانت دينورا معي في كل خطوة. الاستقبال من المطار، إعداد السكن، والتسجيل الجامعي - كل شيء كان سلساً. إنهم يهتمون حقاً بنجاح الطلاب!"
      }
    }
  ]
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("https://dinoora.com/ref/DINOORA2025")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            {locale === "en" ? "Success Stories" : "قصص النجاح"}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {locale === "en" 
              ? "Students who achieved their dreams. Real stories from students who changed their future with DINOORA."
              : "طلاب حققوا أحلامهم. قصص حقيقية من طلاب غيروا مستقبلهم مع دينورا."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-white">{story.name}</h3>
                  <p className="text-sm text-primary">{story.scholarship}</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <p className="text-sm text-slate-400">
                  <span className="text-white font-medium">{story.university}</span> • {story.program}
                </p>
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                {locale === "en" ? story.story.en : story.story.ar}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SuccessStats() {
  const { locale } = useLanguage()
  
  const stats = [
    { 
      value: "500+", 
      label: locale === "ar" ? "طالب ناجح" : "Successful Students",
      icon: Users
    },
    { 
      value: "50+", 
      label: locale === "ar" ? "جامعة مرموقة" : "Prestigious Universities",
      icon: GraduationCap
    },
    { 
      value: "85%", 
      label: locale === "ar" ? "رضا العملاء" : "Client Satisfaction",
      icon: TrendingUp
    }
  ]
  
  return (
    <section className="py-16 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-slate-950 border border-slate-800"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function MoneyBackGuarantee() {
  const { locale } = useLanguage()
  
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            {locale === "en" ? "100% Money Back Guarantee" : "ضمان استرداد 100%"}
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            {locale === "en" 
              ? "Didn't get accepted? Get a full refund!"
              : "لم تحصل على قبول؟ استرد كامل المبلغ!"
            }
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {locale === "en"
              ? "We are confident in our services. If we fail to secure your university admission, we will refund 100% of our service fees. No questions asked."
              : "نحن واثقون من خدماتنا. إذا فشلنا في تأمين قبولك الجامعي، سنسترد 100% من رسوم الخدمة. بدون أسئلة."
            }
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white mb-1">
                  {locale === "en" ? "100% Admission Guarantee" : "ضمان قبول 100%"}
                </h3>
                <p className="text-sm text-slate-400">
                  {locale === "en" ? "If we don't get you accepted, full refund" : "إذا لم نحصل لك على قبول، استرداد كامل"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white mb-1">
                  {locale === "en" ? "Not applicable if" : "غير ساري إذا"}
                </h3>
                <p className="text-sm text-slate-400">
                  {locale === "en" ? "You withdraw after submitting application" : "انسحبت بعد تقديم الطلب"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white mb-1">
                  {locale === "en" ? "Processed within 30 days" : "معالجة خلال 30 يوم"}
                </h3>
                <p className="text-sm text-slate-400">
                  {locale === "en" ? "Refund within 30 days of request" : "استرداد خلال 30 يوم من الطلب"}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              {locale === "en" ? "How the refund works" : "كيف يعمل الاسترداد"}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: locale === "en" ? "Contact Support" : "تواصل مع الدعم",
                  desc: locale === "en" ? "Explain your situation via WhatsApp or email" : "اشرح موقفك عبر واتساب أو البريد"
                },
                {
                  step: "2",
                  title: locale === "en" ? "Review Request" : "مراجعة الطلب",
                  desc: locale === "en" ? "We review your case within 3-5 business days" : "نراجع حالتك خلال 3-5 أيام عمل"
                },
                {
                  step: "3",
                  title: locale === "en" ? "Get Refund" : "احصل على الاسترداد",
                  desc: locale === "en" ? "Full amount to your original payment method" : "المبلغ كاملاً إلى طريقة الدفع الأصلية"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">{item.step}</span>
                  </div>
                  <h4 className="font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-400 mb-4">
            {locale === "en" ? "Start risk-free" : "ابدأ بدون مخاطرة"}
          </p>
          <p className="text-sm text-slate-500">
            {locale === "en" ? "Secure payment • Instant support" : "دفع آمن • دعم فوري"}
          </p>
        </div>
      </div>
    </section>
  )
}

export function ReferralProgram() {
  const { locale } = useLanguage()
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("https://dinoora.com/ref/DINOORA2025")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4">
            <Share2 className="w-4 h-4" />
            {locale === "en" ? "Referral & Rewards Program" : "برنامج الإحالة والمكافآت"}
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            {locale === "en" 
              ? "Invite Friends, Earn Rewards"
              : "ادعُ أصدقاءك، اكسب مكافآت"
            }
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {locale === "en"
              ? "Share DINOORA with your friends and earn $100 for every successful signup. Your friends also get 10% discount!"
              : "شارك دينورا مع أصدقائك واكسب $100 لكل تسجيل ناجح. أصدقاؤك يحصلون أيضاً على خصم 10%!"
            }
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 text-center">
            <div className="text-2xl font-bold text-white mb-1">12</div>
            <div className="text-sm text-slate-400">
              {locale === "en" ? "Total Referrals" : "إجمالي الإحالات"}
            </div>
          </div>
          <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 text-center">
            <div className="text-2xl font-bold text-white mb-1">$1200</div>
            <div className="text-sm text-slate-400">
              {locale === "en" ? "Total Earnings" : "إجمالي الأرباح"}
            </div>
          </div>
          <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 text-center">
            <div className="text-2xl font-bold text-white mb-1">3</div>
            <div className="text-sm text-slate-400">
              {locale === "en" ? "Pending" : "قيد الانتظار"}
            </div>
          </div>
          <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 text-center">
            <div className="text-2xl font-bold text-white mb-1">$100</div>
            <div className="text-sm text-slate-400">
              {locale === "en" ? "Per Referral" : "لكل إحالة"}
            </div>
          </div>
        </div>

        <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 mb-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            {locale === "en" ? "Your Unique Referral Link" : "رابط الإحالة الخاص بك"}
          </h3>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="text"
              readOnly
              value="https://dinoora.com/ref/DINOORA2025"
              className="flex-1 px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white"
            />
            <button
              onClick={handleCopy}
              className="px-4 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? (locale === "en" ? "Copied!" : "تم النسخ!") : (locale === "en" ? "Copy" : "نسخ")}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-900 border border-slate-800">
            <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
            <div>
              <div className="font-bold text-white">
                {locale === "en" ? "$100 per referral" : "$100 لكل إحالة"}
              </div>
              <div className="text-sm text-slate-400">
                {locale === "en" ? "Earn for every friend who signs up" : "اكسب لكل صديق يسجل"}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-900 border border-slate-800">
            <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
            <div>
              <div className="font-bold text-white">
                {locale === "en" ? "Friends save 10%" : "أصدقاؤك يوفرون 10%"}
              </div>
              <div className="text-sm text-slate-400">
                {locale === "en" ? "They get instant discount on any service" : "يحصلون على خصم فوري على أي خدمة"}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-900 border border-slate-800">
            <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
            <div>
              <div className="font-bold text-white">
                {locale === "en" ? "No limit" : "بدون حد"}
              </div>
              <div className="text-sm text-slate-400">
                {locale === "en" ? "Refer unlimited friends, earn more" : "أحل أصدقاء بلا حدود واكسب أكثر"}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            {locale === "en" ? "How it works" : "كيف يعمل"}
          </h3>
          <p className="text-slate-400 text-center mb-6">
            {locale === "en" ? "Four simple steps to start earning" : "أربع خطوات بسيطة للبدء في الربح"}
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: locale === "en" ? "Get your code" : "احصل على الكود",
                desc: locale === "en" ? "Copy your unique referral link" : "انسخ رابط الإحالة الخاص بك"
              },
              {
                step: "2",
                title: locale === "en" ? "Share with friends" : "شارك مع الأصدقاء",
                desc: locale === "en" ? "Send via WhatsApp, email or social" : "أرسل عبر واتساب، البريد أو السوشيال"
              },
              {
                step: "3",
                title: locale === "en" ? "They sign up" : "يسجلون",
                desc: locale === "en" ? "Your friend applies using your code" : "صديقك يقدم باستخدام كودك"
              },
              {
                step: "4",
                title: locale === "en" ? "You earn!" : "تكسب!",
                desc: locale === "en" ? "Get $100 in your account" : "احصل على $100 في حسابك"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">{item.step}</span>
                </div>
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
