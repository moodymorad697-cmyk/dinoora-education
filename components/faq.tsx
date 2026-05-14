"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, ChevronDown, HelpCircle, MessageCircle, Phone, Sparkles } from "lucide-react"

const categories = [
  { id: "all", labelEn: "All Questions", labelAr: "جميع الأسئلة", icon: "🔍" },
  { id: "admission", labelEn: "Admission", labelAr: "القبول", icon: "🎓" },
  { id: "visa", labelEn: "Visa", labelAr: "التأشيرة", icon: "🛂" },
  { id: "fees", labelEn: "Fees", labelAr: "الرسوم", icon: "💰" },
  { id: "life", labelEn: "Student Life", labelAr: "حياة الطالب", icon: "🌍" },
]

const faqs = [
  {
    id: 1,
    category: "admission",
    question: { en: "What are the eligibility requirements?", ar: "ما هي متطلبات الأهلية؟" },
    answer: { 
      en: "You need a high school diploma or equivalent, a good academic record, and basic English skills. Some programs may require additional tests.", 
      ar: "تحتاج شهادة الثانوية أو ما يعادلها، معدل جيد، وإنجليزية أساسية. بعض البرامج تتطلب اختبارات إضافية."
    },
    icon: "📋"
  },
  {
    id: 2,
    category: "fees",
    question: { en: "How much does the complete service cost?", ar: "كم تكلفة الخدمة الكاملة؟" },
    answer: { 
      en: "Our service fees start from $500 and vary by destination. We offer transparent pricing with no hidden fees. Contact us for a custom quote.", 
      ar: "تبدأ من $500 وتختلف حسب الوجهة. تسعير شفاف بدون رسوم خفية. تواصل معنا للعرض المناسب."
    },
    icon: "💰"
  },
  {
    id: 3,
    category: "admission",
    question: { en: "How long does the process take?", ar: "كم تستغرق العملية؟" },
    answer: { 
      en: "12-16 weeks from consultation to arrival. Visa processing takes 2-3 weeks after acceptance.", 
      ar: "12-16 أسبوع من الاستشارة للوصول. التأشيرة تستغرق 2-3 أسابيع بعد القبول."
    },
    icon: "⏱️"
  },
  {
    id: 4,
    category: "admission",
    question: { en: "Do you guarantee admission?", ar: "هل تضمن القبول؟" },
    answer: { 
      en: "95%+ acceptance rate with our partner universities. If not accepted, get 100% money-back guarantee.", 
      ar: "95%+ نسبة قبول مع جامعاتنا. إذا لم تقبل، استرداد 100% من المبلغ."
    },
    icon: "✅"
  },
  {
    id: 5,
    category: "visa",
    question: { en: "Do you provide visa support?", ar: "هل تقدمون دعم التأشيرة؟" },
    answer: { 
      en: "Complete visa support with 98% success rate. We handle documents, appointments, and interview coaching.", 
      ar: "دعم كامل للتأشيرة بنسبة نجاح 98%. نتولى الوثائق والمواعيد وتدريب المقابلة."
    },
    icon: "🛂"
  },
  {
    id: 6,
    category: "life",
    question: { en: "What countries can I study in?", ar: "ما الدول المتاحة؟" },
    answer: { 
      en: "China, Malaysia, and Turkey. All offer affordable quality education with scholarships available.", 
      ar: "الصين، ماليزيا، وتركيا. جميعها تقدم تعليماً ممتازاً بأسعار معقولة مع منح متاحة."
    },
    icon: "🌍"
  },
  {
    id: 7,
    category: "life",
    question: { en: "Can I work while studying?", ar: "هل يمكنني العمل أثناء الدراسة؟" },
    answer: { 
      en: "Yes! Part-time work allowed (15-20 hrs/week) during studies, full-time during holidays.", 
      ar: "نعم! العمل الجزئي مسموح (15-20 ساعة/أسبوع) خلال الدراسة، دوام كامل في العطل."
    },
    icon: "💼"
  },
  {
    id: 8,
    category: "fees",
    question: { en: "What scholarships are available?", ar: "ما المنح المتاحة؟" },
    answer: { 
      en: "CSC Government Scholarship (full coverage), university merit scholarships (up to 100%), and country-specific grants.", 
      ar: "منحة CSC الحكومية (تغطية كاملة)، منح الجامعات (حتى 100%)، ومنح خاصة بكل دولة."
    },
    icon: "🎓"
  },
]

export function FAQ() {
  const { locale } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [openItem, setOpenItem] = useState<number | null>(null)

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory
    const matchesSearch = faq.question[locale].toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer[locale].toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="py-20 lg:py-28 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-4">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-300">
              {locale === "en" ? "Quick Answers" : "إجابات سريعة"}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {locale === "en" ? "Frequently Asked Questions" : "الأسئلة الشائعة"}
          </h2>
          <p className="text-slate-400">
            {locale === "en" ? "Find answers quickly or contact us" : "ابحث عن إجابات سريعة أو تواصل معنا"}
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-xl mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={locale === "en" ? "Search your question..." : "ابحث عن سؤالك..."}
              className="w-full pl-12 pr-10 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-amber-500 text-slate-950"
                  : "bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700"
              }`}
            >
              <span className="mr-1">{cat.icon}</span>
              {locale === "en" ? cat.labelEn : cat.labelAr}
            </button>
          ))}
        </motion.div>

        {/* FAQ Grid - Two Columns on Desktop */}
        <div className="grid md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <button
                  onClick={() => setOpenItem(openItem === faq.id ? null : faq.id)}
                  className={`w-full text-left p-5 rounded-xl transition-all ${
                    openItem === faq.id
                      ? "bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-500/30"
                      : "bg-slate-900/50 border border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0 ${
                      openItem === faq.id ? "bg-amber-500/20" : "bg-slate-800"
                    }`}>
                      {faq.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold mb-1 ${openItem === faq.id ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                        {faq.question[locale]}
                      </h3>
                      <AnimatePresence>
                        {openItem === faq.id && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-slate-400 text-sm mt-2 leading-relaxed"
                          >
                            {faq.answer[locale]}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-500 shrink-0 transition-transform ${
                      openItem === faq.id ? "rotate-180" : ""
                    }`} />
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredFaqs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-900 flex items-center justify-center">
              <Search className="w-8 h-8 text-slate-500" />
            </div>
            <p className="text-slate-400 mb-4">
              {locale === "en" ? "No questions found" : "لم يتم العثور على أسئلة"}
            </p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
              className="text-amber-400 hover:text-amber-300 font-medium"
            >
              {locale === "en" ? "Clear filters" : "مسح الفلاتر"}
            </button>
          </motion.div>
        )}

        {/* Contact CTA - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-emerald-500/10 border border-amber-500/20 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">
                {locale === "en" ? "Still have questions?" : "لا تزال لديك أسئلة؟"}
              </h3>
              <p className="text-sm text-slate-400">
                {locale === "en" ? "Get instant answers from our team" : "احصل على إجابات فورية من فريقنا"}
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href="https://wa.me/8615587237864"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              {locale === "en" ? "WhatsApp" : "واتساب"}
            </a>
            <a
              href="tel:+8615587237864"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              {locale === "en" ? "Call" : "اتصال"}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
