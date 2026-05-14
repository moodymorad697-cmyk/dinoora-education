"use client"

import { ArrowLeft, ArrowRight, GraduationCap, CheckCircle, Zap, Users, Target, Phone, Mail, MessageCircle, Award, Clock, Globe, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { ApplicationForm } from "@/components/application-form"

export default function AdmissionPage() {
  const { t, dir, locale } = useLanguage()
  const service = t.services.items.admission

  const steps = [
    {
      en: "Initial Consultation",
      ar: "الاستشارة الأولية",
      desc: {
        en: "Share your academic profile and career goals. We assess your profile and recommend matching universities.",
        ar: "شارك ملفك الأكاديمي وأهدافك الوظيفية. نقيّم ملفك ونوصي بجامعات متطابقة.",
      },
    },
    {
      en: "Program Selection",
      ar: "اختيار البرنامج",
      desc: {
        en: "Choose from our curated list of 500+ programs. Our experts guide you through each option.",
        ar: "اختر من قائمتنا المختارة بعناية من أكثر من 500 برنامج. يرشدك خبراؤنا عبر كل خيار.",
      },
    },
    {
      en: "Application Submission",
      ar: "تقديم الطلب",
      desc: {
        en: "We prepare and submit your application with complete documentation.",
        ar: "نُعد ونقدم طلبك مع وثائق شاملة.",
      },
    },
    {
      en: "Acceptance & Enrollment",
      ar: "القبول والتسجيل",
      desc: {
        en: "Receive your acceptance letter and complete the enrollment process.",
        ar: "استلم خطاب القبول وأكمل عملية التسجيل.",
      },
    },
  ]

  const features = [
    {
      icon: Globe,
      title: locale === "en" ? "500+ Universities" : "500+ جامعة",
      desc: locale === "en" ? "Direct partnerships with top Chinese institutions" : "شراكات مباشرة مع أفضل المؤسسات الصينية",
    },
    {
      icon: Award,
      title: locale === "en" ? "Priority Processing" : "معالجة ذات أولوية",
      desc: locale === "en" ? "Fast-track applications with direct communication" : "طلبات سريعة مع تواصل مباشر",
    },
    {
      icon: Clock,
      title: locale === "en" ? "2-3 Weeks" : "2-3 أسابيع",
      desc: locale === "en" ? "Average acceptance response time" : "متوسط وقت استجابة القبول",
    },
    {
      icon: CheckCircle,
      title: locale === "en" ? "100% Success Rate" : "100% نسبة النجاح",
      desc: locale === "en" ? "Guaranteed acceptance or money back" : "قبول مضمون أو استرداد المال",
    },
  ]

  const universities = [
    { 
      name: "Tsinghua University", 
      rank: "#1 Asia", 
      location: "Beijing",
      image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80"
    },
    { 
      name: "Peking University", 
      rank: "#2 Asia", 
      location: "Beijing",
      image: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?w=600&q=80"
    },
    { 
      name: "Fudan University", 
      rank: "#3 Asia", 
      location: "Shanghai",
      image: "https://images.unsplash.com/photo-1592288557716-c4c744e1760c?w=600&q=80"
    },
    { 
      name: "Zhejiang University", 
      rank: "#4 Asia", 
      location: "Hangzhou",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&q=80"
    },
  ]

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?w=400&q=80", alt: "Student Campus" },
    { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80", alt: "Study Group" },
    { src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&q=80", alt: "Graduation" },
  ]

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero - With Background Image */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=1600&q=85"
            alt="University Campus"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]" />
        </div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors mb-8 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">{locale === "en" ? "Back to Services" : "العودة للخدمات"}</span>
          </Link>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-amber-300">
                  {locale === "en" ? "Priority Admission" : "قبول ذو أولوية"}
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">{service.title}</h1>
              <p className="text-xl text-slate-400 max-w-2xl mb-6">{service.description}</p>
              
              {/* Stats Preview */}
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-amber-400 font-bold">500+</span>
                  <span className="text-slate-400 text-sm ml-2">{locale === "en" ? "Universities" : "جامعة"}</span>
                </div>
                <div className="px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800">
                  <span className="text-amber-400 font-bold">100%</span>
                  <span className="text-slate-400 text-sm ml-2">{locale === "en" ? "Success Rate" : "نسبة النجاح"}</span>
                </div>
              </div>
            </div>
            
            {/* Gallery Preview */}
            <div className="hidden lg:flex gap-2">
              {galleryImages.map((img, i) => (
                <div key={i} className="relative w-24 h-32 rounded-xl overflow-hidden border border-slate-700 hover:border-amber-500/50 transition-colors">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-white text-center">
            {locale === "en" ? "Why Choose Our Admission Service?" : "لماذا تختار خدمة القبول لدينا؟"}
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((item, i) => (
              <div key={i} className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-amber-500/30 hover:bg-slate-900/80 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white text-center">
            {locale === "en" ? "Partner Universities" : "الجامعات الشريكة"}
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            {locale === "en" 
              ? "Direct partnerships with China's top universities for priority admission"
              : "شراكات مباشرة مع أفضل الجامعات الصينية للقبول ذي الأولوية"}
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {universities.map((uni, i) => (
              <div key={i} className="group rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-all duration-300 overflow-hidden">
                {/* University Image */}
                <div className="relative h-32 overflow-hidden">
                  <Image 
                    src={uni.image} 
                    alt={uni.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                  <div className="absolute top-2 left-2 px-2 py-1 rounded bg-amber-500/20 backdrop-blur-sm border border-amber-500/30">
                    <span className="text-amber-300 text-xs font-bold">{uni.rank}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-bold mb-1 group-hover:text-amber-400 transition-colors">{uni.name}</h3>
                  <div className="flex items-center gap-1 text-slate-400 text-sm">
                    <Globe className="w-3 h-3" />
                    {uni.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-white text-center">
            {locale === "en" ? "Our 4-Step Process" : "عمليتنا في 4 خطوات"}
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 font-bold text-xl mb-6 shadow-lg shadow-amber-500/20">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{locale === "en" ? step.en : step.ar}</h3>
                <p className="text-slate-400 leading-relaxed">{locale === "en" ? step.desc.en : step.desc.ar}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              {locale === "en" ? "Scholarship Opportunities" : "فرص المنح الدراسية"}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {locale === "en" 
                ? "Full and partial scholarships available for qualified students"
                : "منح كاملة وجزئية متاحة للطلاب المؤهلين"}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { 
                title: locale === "en" ? "CSC Scholarship" : "منح CSC", 
                desc: locale === "en" ? "Full tuition + monthly stipend + accommodation" : "رسوم كاملة + مخصص شهري + سكن",
                badge: locale === "en" ? "Most Popular" : "الأكثر شيوعاً"
              },
              { 
                title: locale === "en" ? "University Scholarships" : "منح الجامعات", 
                desc: locale === "en" ? "Partial to full tuition coverage" : "تغطية جزئية إلى كاملة للرسوم",
                badge: locale === "en" ? "Multiple Options" : "خيارات متعددة"
              },
              { 
                title: locale === "en" ? "Belt & Road Initiative" : "مبادرة الحزام والطريق", 
                desc: locale === "en" ? "Special scholarships for partner countries" : "منح خاصة لدول الشراكة",
                badge: locale === "en" ? "Exclusive" : "حصري"
              },
            ].map((item, i) => (
              <div key={i} className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-8 hover:border-amber-500/30 transition-all duration-500">
                <div className="absolute top-4 right-4 text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  {item.badge}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              {locale === "en" ? "Popular Programs" : "التخصصات الشائعة"}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { en: "Medicine (MBBS)", ar: "الطب (MBBS)" },
              { en: "Engineering (All Fields)", ar: "الهندسة (جميع التخصصات)" },
              { en: "Business Administration", ar: "إدارة الأعمال" },
              { en: "Computer Science & AI", ar: "علوم الحاسوب والذكاء الاصطناعي" },
              { en: "International Trade", ar: "التجارة الدولية" },
              { en: "Chinese Language", ar: "اللغة الصينية" },
            ].map((program, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-white font-medium">{locale === "en" ? program.en : program.ar}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              {locale === "en" ? "Ready for Your Dream University?" : "مستعد لجامعة أحلامك؟"}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {locale === "en"
                ? "Start your journey to top Chinese universities today"
                : "ابدأ رحلتك إلى أفضل الجامعات الصينية اليوم"}
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl mx-auto mb-8">
            {/* WhatsApp China */}
            <a href="https://wa.me/8615587237864" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 hover:bg-slate-900 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-400">{locale === "en" ? "WhatsApp" : "واتساب"}</div>
                <div className="text-white font-medium">+86 15587237864</div>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:info@dinoora.com" className="group flex items-center gap-4 p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 hover:bg-slate-900 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-400">{locale === "en" ? "Email" : "البريد"}</div>
                <div className="text-white font-medium">info@dinoora.com</div>
              </div>
            </a>
          </div>

          <div className="text-center">
            <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-10 py-7 text-lg shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-300" asChild>
              <Link href="#apply" className="flex items-center gap-2">
                {t.services.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <div className="bg-slate-950">
        <ApplicationForm />
      </div>
    </main>
  )
}
