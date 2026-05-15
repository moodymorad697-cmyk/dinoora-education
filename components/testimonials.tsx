"use client"

import { Star, Quote } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    country: "Saudi Arabia",
    university: "Tsinghua University",
    program: "Computer Science",
    image: "/images/student-1.jpg",
    content: {
      en: "DINOORA transformed my dream into reality. Their team handled everything from university selection to visa processing with incredible professionalism. I received a full CSC scholarship and now studying at China's #1 university!",
      ar: "حولت دينورا حلمي إلى واقع. تعامل فريقهم مع كل شيء من اختيار الجامعة إلى معالجة التأشيرة باحترافية لا تصدق. حصلت على منحة CSC كاملة والآن أدرس في الجامعة رقم 1 في الصين!"
    },
    rating: 5,
    scholarship: "Full CSC Scholarship",
  },
  {
    name: "Fatima Hassan",
    country: "Egypt",
    university: "Peking University",
    program: "Medicine (MBBS)",
    image: "/images/student-2.jpg",
    content: {
      en: "As a medical student, choosing the right program was crucial. DINOORA's advisors understood my goals and matched me with a WHO-recognized MBBS program. Their support didn't end at admission - they helped me settle in Beijing!",
      ar: "كطالبة طب، كان اختيار البرنامج المناسب أمراً حاسماً. فهم مستشارو دينورا أهدافي وطابقوني مع برنامج طب بشري معترف به من منظمة الصحة العالمية. دعمهم لم ينتهِ عند القبول - ساعدوني في الاستقرار في بكين!"
    },
    rating: 5,
    scholarship: "Chinese Government Scholarship",
  },
  {
    name: "Omar Yusuf",
    country: "Somalia",
    university: "Zhejiang University",
    program: "Engineering",
    image: "/images/student-3.jpg",
    content: {
      en: "From my first inquiry to landing in Hangzhou, DINOORA was with me every step. The airport pickup, accommodation setup, and university registration - everything was seamless. They truly care about student success!",
      ar: "من استفساري الأول حتى وصولي إلى هانغتشو، كانت دينورا معي في كل خطوة. الاستقبال من المطار، إعداد السكن، والتسجيل الجامعي - كل شيء كان سلساً. إنهم يهتمون حقاً بنجاح الطلاب!"
    },
    rating: 5,
    scholarship: "Provincial Scholarship",
  },
]

export function Testimonials() {
  const { t, locale } = useLanguage()
  
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0">
        {/* Professional Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=90')",
          }}
        />
        
        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-lime-900/85 via-green-900/75 to-emerald-900/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
        
        {/* Elegant Mesh Gradient */}
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: `
            radial-gradient(circle at 30% 35%, rgba(132, 204, 22, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 70% 65%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)
          `
        }} />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm font-medium text-primary">{t.testimonials.label}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-6">
            <span className="text-foreground">{t.testimonials.title.split(" ").slice(0, -1).join(" ")} </span>
            <span className="gradient-text">{t.testimonials.title.split(" ").slice(-1)}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.testimonials.description}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card/50 hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Quote Icon */}
              <Quote className="h-10 w-10 text-primary/20 mb-4" />
              
              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {testimonial.content[locale as "en" | "ar"]}
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Scholarship Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-xs font-medium text-primary">{testimonial.scholarship}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.university}</p>
                  <p className="text-xs text-primary">{testimonial.program}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "2,000+", label: locale === "ar" ? "طلب منحة" : "Scholarship Applications" },
            { value: "$2M+", label: locale === "ar" ? "منح تم تأمينها" : "Scholarships Secured" },
            { value: "98%", label: locale === "ar" ? "نسبة القبول" : "Acceptance Rate" },
            { value: "500+", label: locale === "ar" ? "جامعة شريكة" : "Partner Universities" },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-4 rounded-2xl bg-card/30 border border-border/50"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
