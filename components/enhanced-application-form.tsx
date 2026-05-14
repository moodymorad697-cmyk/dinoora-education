"use client"

import { useState } from "react"
import { CheckCircle, Sparkles, ArrowRight, MessageCircle, Clock, Award, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

const countries = [
  "Afghanistan", "Albania", "Algeria", "Angola", "Argentina", "Azerbaijan",
  "Bahrain", "Bangladesh", "Benin", "Botswana", "Brazil", "Burkina Faso",
  "Cameroon", "Chad", "Colombia", "Comoros", "Congo", "Djibouti", "Egypt",
  "Ethiopia", "Gambia", "Ghana", "Guinea", "India", "Indonesia", "Iraq",
  "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Lebanon",
  "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Morocco",
  "Mozambique", "Nepal", "Niger", "Nigeria", "Oman", "Pakistan", "Palestine",
  "Philippines", "Qatar", "Rwanda", "Saudi Arabia", "Senegal", "Sierra Leone",
  "Somalia", "South Africa", "Sri Lanka", "Sudan", "Syria", "Tanzania",
  "Thailand", "Togo", "Tunisia", "Turkmenistan", "Uganda", "UAE", "Uzbekistan",
  "Vietnam", "Yemen", "Zambia", "Zimbabwe", "Other"
]

const majors = [
  "Computer Science", "Software Engineering", "Artificial Intelligence",
  "Medicine (MBBS)", "Pharmacy", "Nursing", "Public Health",
  "Civil Engineering", "Mechanical Engineering", "Electrical Engineering",
  "Business Administration", "Finance", "Marketing", "International Business",
  "Architecture", "Law", "International Relations", "Economics",
  "Data Science", "Cybersecurity", "Biotechnology", "Chemistry",
  "Physics", "Mathematics", "Environmental Science", "Other"
]

const destinations = ["China", "Malaysia", "Turkey"]

const benefits = [
  { icon: MessageCircle, text: { en: "Expert Consultation", ar: "استشارة خبراء" } },
  { icon: Shield, text: { en: "No Hidden Fees", ar: "بدون رسوم خفية" } },
  { icon: Clock, text: { en: "24/7 WhatsApp Support", ar: "دعم واتساب 24/7" } },
  { icon: Award, text: { en: "Acceptance Guarantee", ar: "ضمان القبول" } },
]

export function EnhancedApplicationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    country: "",
    destination: "",
    major: "",
    whatsapp: "",
  })
  const { dir, locale } = useLanguage()

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const messageText = `📋 *New Application*

👤 *Full Name:* ${formData.fullName}
🌍 *Country:* ${formData.country}
✈️ *Destination:* ${formData.destination}
📚 *Major:* ${formData.major}
📱 *WhatsApp:* ${formData.whatsapp}

Thank you for applying to DINOORA Education!`

    const userWhatsapp = process.env.NEXT_PUBLIC_USER_WHATSAPP?.replace(/\s+/g, "") || "8615587237864"
    const whatsappUrl = `https://wa.me/${userWhatsapp}?text=${encodeURIComponent(messageText)}`
    
    window.open(whatsappUrl, "_blank")
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="apply" className="py-24 lg:py-32 relative overflow-hidden">
        {/* Success Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=90')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-emerald-950/95" />
        </div>
        
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl border border-emerald-500/30 bg-slate-900/80 backdrop-blur-xl p-10 sm:p-14 text-center shadow-2xl shadow-emerald-500/10"
          >
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/30">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <h2 className="mt-8 text-3xl font-bold text-white">
              {locale === "en" ? "Application Submitted!" : "تم تقديم الطلب!"}
            </h2>
            <p className="mt-4 text-slate-400 leading-relaxed max-w-md mx-auto">
              {locale === "en" 
                ? "Our team will contact you within 24 hours to discuss your options."
                : "سيتواصل فريقنا معك خلال 24 ساعة لمناقشة خياراتك."
              }
            </p>
            <Button
              className="mt-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 px-8 py-6 text-lg font-bold rounded-xl"
              onClick={() => setIsSubmitted(false)}
            >
              {locale === "en" ? "Submit Another" : "تقديم طلب آخر"}
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="apply" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Modern Dark Gold Background */}
      <div className="absolute inset-0 bg-slate-950">
        {/* Abstract gradient shapes */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
          <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[80px]" />
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        {/* Top gradient line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-300">
              {locale === "en" ? "Start Your Journey Free" : "ابدأ رحلتك مجاناً"}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            {locale === "en" ? "Your Dream University " : "جامعة أحلامك "}
            <span className="text-amber-400">{locale === "en" ? "Awaits" : "في انتظارك"}</span>
          </h2>
          <p className="text-lg text-slate-400">
            {locale === "en" 
              ? "Join hundreds of students who trusted DINOORA to guide them to success."
              : "انضم لمئات الطلاب الذين وثقوا بدينورا لإرشادهم نحو النجاح."
            }
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-start">
          {/* Left Column - Info (3 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Benefits Cards */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <span className="text-sm font-medium text-slate-300">{benefit.text[locale]}</span>
                  </motion.div>
                )
              })}
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">
                {locale === "en" ? "Application Process" : "عملية التقديم"}
              </h3>
              {[
                { en: "One-on-one consultation with education experts", ar: "استشارة فردية مع خبراء التعليم" },
                { en: "Personalized university shortlist based on your profile", ar: "قائمة جامعات مخصصة بناءً على ملفك" },
                { en: "Complete cost breakdown and scholarship opportunities", ar: "تفصيل كامل للتكاليف وفرص المنح" },
                { en: "Guaranteed response within 24 hours", ar: "رد مضمون خلال 24 ساعة" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-slate-400">{item[locale]}</span>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30">
              <p className="text-sm text-slate-400 mb-2">
                {locale === "en" ? "Need quick answers?" : "تحتاج إجابات سريعة؟"}
              </p>
              <a 
                href="https://wa.me/8615587237864"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp: +86 155 8723 7864
              </a>
            </div>
          </motion.div>

          {/* Right Column - Form (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="relative">
              {/* Animated border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 rounded-3xl opacity-30 blur animate-pulse" />
              
              <div className="relative rounded-3xl border border-slate-700 bg-slate-900/90 backdrop-blur-xl p-8 lg:p-10 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {locale === "en" ? "Begin Your Journey Today" : "ابدأ رحلتك اليوم"}
                </h3>
                <p className="text-slate-400 text-sm mb-8">
                  {locale === "en" 
                    ? "Complete this form and receive a personalized university recommendation within 24 hours."
                    : "أكمل هذا النموذج واحصل على توصية جامعية مخصصة خلال 24 ساعة."
                  }
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-300 font-medium text-sm">
                      {locale === "en" ? "Enter your full name as on passport" : "أدخل اسمك الكامل كما في جواز السفر"}
                    </Label>
                    <Input
                      id="name"
                      placeholder={locale === "en" ? "Full Name" : "الاسم الكامل"}
                      required
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 h-12 rounded-xl focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50"
                      dir={dir}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="country" className="text-slate-300 font-medium text-sm">
                        {locale === "en" ? "Select your country" : "اختر دولتك"}
                      </Label>
                      <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)} required>
                        <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white h-12 rounded-xl">
                          <SelectValue placeholder={locale === "en" ? "Country" : "الدولة"} />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 border-slate-700 max-h-60">
                          {countries.map((country) => (
                            <SelectItem key={country} value={country} className="text-white hover:bg-slate-800">
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="destination" className="text-slate-300 font-medium text-sm">
                        {locale === "en" ? "Where do you want to study?" : "أين تريد أن تدرس؟"}
                      </Label>
                      <Select value={formData.destination} onValueChange={(value) => handleInputChange("destination", value)} required>
                        <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white h-12 rounded-xl">
                          <SelectValue placeholder={locale === "en" ? "Destination" : "الوجهة"} />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 border-slate-700">
                          {destinations.map((dest) => (
                            <SelectItem key={dest} value={dest} className="text-white hover:bg-slate-800">
                              {dest}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="major" className="text-slate-300 font-medium text-sm">
                      {locale === "en" ? "What do you want to study?" : "ماذا تريد أن تدرس؟"}
                    </Label>
                    <Select value={formData.major} onValueChange={(value) => handleInputChange("major", value)} required>
                      <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white h-12 rounded-xl">
                        <SelectValue placeholder={locale === "en" ? "Select Major" : "اختر التخصص"} />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-slate-700 max-h-60">
                        {majors.map((major) => (
                          <SelectItem key={major} value={major} className="text-white hover:bg-slate-800">
                            {major}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp" className="text-slate-300 font-medium text-sm">WhatsApp</Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      placeholder="+XXX XXX XXX XXXX"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 h-12 rounded-xl focus:border-amber-500/50"
                      dir="ltr"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 py-6 text-lg font-bold rounded-xl shadow-lg shadow-amber-500/20 group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className={`animate-spin h-5 w-5 ${dir === "rtl" ? "ml-3" : "mr-3"}`} fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        {locale === "en" ? "Submitting..." : "جاري التقديم..."}
                      </>
                    ) : (
                      <>
                        {locale === "en" ? "Get Expert Consultation" : "احصل على استشارة خبراء"}
                        <ArrowRight className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${dir === "rtl" ? "mr-2 rotate-180" : "ml-2"}`} />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-slate-500">
                    {locale === "en" 
                      ? "By submitting, you agree to receive information about study opportunities. Your data is protected."
                      : "بإرسالك للنموذج، توافق على تلقي معلومات عن فرص الدراسة. بياناتك محمية."
                    }
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
