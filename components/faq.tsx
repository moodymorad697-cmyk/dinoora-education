"use client"

import { useLanguage } from "@/lib/language-context"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimatedBackground } from "@/components/ui/animated-background"

export function FAQ() {
  const { t, dir, locale } = useLanguage()

  const faqs = [
    {
      titleEn: "What are the eligibility requirements?",
      titleAr: "ما هي متطلبات الأهلية؟",
      contentEn: "You need a high school diploma or equivalent, a good academic record, and basic English language skills. Some universities may have additional requirements.",
      contentAr: "تحتاج إلى شهادة الثانوية العامة أو ما يعادلها وسجل أكاديمي جيد ومهارات لغة إنجليزية أساسية.",
      icon: "📋"
    },
    {
      titleEn: "How much does the complete service cost?",
      titleAr: "كم تكلفة الخدمة الكاملة؟",
      contentEn: "Our service fees are transparent and competitive. We charge a one-time service fee that covers all our support services. Contact us for detailed pricing based on your destination and program.",
      contentAr: "رسوم خدماتنا شفافة وتنافسية. نحصل على رسوم خدمة لمرة واحدة تغطي جميع خدمات الدعم. تواصل معنا للحصول على تفاصيل التسعير حسب وجهتك والبرنامج.",
      icon: "💰"
    },
    {
      titleEn: "How long does the entire process take?",
      titleAr: "كم من الوقت تستغرق العملية برمتها؟",
      contentEn: "The average timeline is 12-16 weeks from initial consultation to arrival at the university. This varies based on your requirements.",
      contentAr: "يستغرق المتوسط 12-16 أسبوع من الاستشارة الأولية إلى الوصول للجامعة.",
      icon: "⏱️"
    },
    {
      titleEn: "Can you guarantee university admission?",
      titleAr: "هل تضمن القبول في الجامعة؟",
      contentEn: "We have strong partnerships with universities and a 95%+ acceptance rate. However, admission depends on your qualifications and the university's requirements.",
      contentAr: "لدينا شراكات قوية وحوالي 95%+ معدل قبول. لكن القبول يعتمد على مؤهلاتك.",
      icon: "✅"
    },
    {
      titleEn: "What countries can I study in?",
      titleAr: "ما الدول التي يمكنني الدراسة فيها؟",
      contentEn: "We specialize in China, Malaysia, and Turkey. These countries offer affordable quality education with easy admission processes.",
      contentAr: "نتخصص في الصين وماليزيا وتركيا. تقدم هذه الدول تعليم عالي الجودة برسوم معقولة.",
      icon: "🌍"
    },
    {
      titleEn: "Do you provide visa support?",
      titleAr: "هل تقدمون دعم التأشيرة؟",
      contentEn: "Yes! We provide complete visa application support, document preparation, and interview coaching. Our success rate is 98%+.",
      contentAr: "نعم! نقدم دعم كامل لتطبيق التأشيرة والتحضير للمقابلة. معدل النجاح لدينا 98%+.",
      icon: "🛂"
    },
    {
      titleEn: "Can I work while studying?",
      titleAr: "هل يمكنني العمل أثناء الدراسة؟",
      contentEn: "Yes, international students are usually allowed to work part-time (15-20 hours per week) during studies and full-time during holidays.",
      contentAr: "نعم، عادة يُسمح للطلاب الدوليين بالعمل بدوام جزئي خلال فترة الدراسة.",
      icon: "💼"
    },
    {
      titleEn: "What scholarship opportunities are available?",
      titleAr: "ما فرص المنح الدراسية المتاحة؟",
      contentEn: "Many of our partner universities offer scholarships up to 100% tuition coverage. We help you apply for all available scholarships.",
      contentAr: "تقدم العديد من جامعاتنا منح دراسية تغطي حتى 100% من الرسوم.",
      icon: "🎓"
    },
  ]

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0">
        {/* Professional Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=90')",
          }}
        />
        
        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/85 via-blue-900/75 to-indigo-900/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
        
        {/* Elegant Mesh Gradient */}
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 40%, rgba(14, 165, 233, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 60%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)
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

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm font-medium text-primary">{t.faq.label}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            {t.faq.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.faq.description}
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border/50 hover:border-primary/50 transition-colors">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary transition-colors py-6">
                <div className="flex items-center gap-4 text-left">
                  <span className="text-2xl">{faq.icon}</span>
                  <span>{dir === "rtl" ? faq.titleAr : faq.titleEn}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                {dir === "rtl" ? faq.contentAr : faq.contentEn}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Still Have Questions */}
        <div className="mt-16 glass rounded-3xl p-10 border border-border/40 text-center">
          <h3 className="text-2xl font-bold mb-3 text-foreground">{t.faq.stillQuestions}</h3>
          <p className="text-muted-foreground mb-6">
            {t.faq.stillQuestionsDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/8615587237864"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors"
            >
              💬 {t.faq.chatWhatsApp}
            </a>
            <a
              href="tel:+8615587237864"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary/10 font-semibold transition-colors"
            >
              📞 {t.faq.callUs}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
