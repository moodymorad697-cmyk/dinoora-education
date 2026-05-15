"use client"

import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { 
  Check, 
  X, 
  GraduationCap, 
  Building2, 
  Globe,
  Shield,
  Clock,
  MessageCircle,
  FileText,
  Plane,
  Home
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/unified-cta"

const packages = [
  {
    name: { en: "Free Consultation", ar: "استشارة مجانية" },
    price: { en: "Free", ar: "مجاناً" },
    description: { 
      en: "Get started with expert advice",
      ar: "ابدأ بنصيحة الخبراء"
    },
    icon: MessageCircle,
    features: {
      included: [
        { en: "Initial assessment of your profile", ar: "تقييم أولي لملفك" },
        { en: "General information about programs", ar: "معلومات عامة عن البرامج" },
        { en: "Basic guidance on requirements", ar: "إرشادات أساسية حول المتطلبات" },
        { en: "Newsletter subscription", ar: "الاشتراك في النشرة البريدية" },
      ],
      excluded: [
        { en: "Document preparation", ar: "إعداد الوثائق" },
        { en: "University applications", ar: "تقديمات الجامعات" },
        { en: "Visa support", ar: "دعم التأشيرة" },
        { en: "Follow-up services", ar: "خدمات المتابعة" },
      ]
    },
    cta: { en: "Get Started", ar: "ابدأ الآن" },
    popular: false
  },
  {
    name: { en: "Standard Package", ar: "الباقة القياسية" },
    price: { en: "$199", ar: "199$" },
    originalPrice: { en: "$299", ar: "299$" },
    description: { 
      en: "Complete support for single country",
      ar: "دعم كامل لدولة واحدة"
    },
    icon: GraduationCap,
    features: {
      included: [
        { en: "Everything in Free Consultation", ar: "كل ما في الاستشارة المجانية" },
        { en: "Profile evaluation & optimization", ar: "تقييم وتحسين الملف" },
        { en: "5 university recommendations", ar: "5 توصيات جامعية" },
        { en: "Document review & formatting", ar: "مراجعة وتنسيق الوثائق" },
        { en: "Application submission (5 universities)", ar: "تقديم الطلبات (5 جامعات)" },
        { en: "WhatsApp & Email support", ar: "دعم عبر الواتساب والبريد" },
        { en: "Application tracking", ar: "تتبع الطلبات" },
        { en: "Scholarship guidance", ar: "إرشادات المنح الدراسية" },
        { en: "Pre-departure briefing", ar: "جلسة تعريفية قبل السفر" },
      ],
      excluded: [
        { en: "Guaranteed acceptance", ar: "ضمان القبول" },
        { en: "Visa application support", ar: "دعم تقديم التأشيرة" },
        { en: "Airport pickup", ar: "استقبال المطار" },
        { en: "Accommodation booking", ar: "حجز السكن" },
      ]
    },
    cta: { en: "Choose Standard", ar: "اختر القياسية" },
    popular: true
  },
  {
    name: { en: "Premium Package", ar: "الباقة الممتازة" },
    price: { en: "$399", ar: "399$" },
    originalPrice: { en: "$599", ar: "599$" },
    description: { 
      en: "Comprehensive support with visa & guarantees",
      ar: "دعم شامل مع التأشيرة والضمانات"
    },
    icon: Building2,
    features: {
      included: [
        { en: "Everything in Standard Package", ar: "كل ما في الباقة القياسية" },
        { en: "8 university recommendations", ar: "8 توصيات جامعية" },
        { en: "Application submission (8 universities)", ar: "تقديم الطلبات (8 جامعات)" },
        { en: "Personal statement writing", ar: "كتابة بيان شخصي" },
        { en: "Recommendation letter guidance", ar: "إرشادات خطابات التوصية" },
        { en: "Interview preparation & mock interviews", ar: "تحضير ومقابلات تجريبية" },
        { en: "Complete visa application support", ar: "دعم كامل لتقديم التأشيرة" },
        { en: "Document translation (up to 10 pages)", ar: "ترجمة وثائق (حتى 10 صفحات)" },
        { en: "Accommodation search & booking help", ar: "مساعدة البحث والحجز للسكن" },
        { en: "Scholarship applications (2 universities)", ar: "تقديم منح (جامعتين)" },
        { en: "Priority WhatsApp support (response in 2 hours)", ar: "دعم واتساب أولوي (رد في ساعتين)" },
        { en: "95% acceptance guarantee*", ar: "ضمان قبول 95%*" },
      ],
      excluded: [
        { en: "Airport pickup & city tour", ar: "استقبال المطار وجولة في المدينة" },
        { en: "SIM card & bank account setup", ar: "إعداد شرائح وبطاقة بنكية" },
      ]
    },
    cta: { en: "Choose Premium", ar: "اختر الممتازة" },
    popular: false
  },
  {
    name: { en: "VIP Package", ar: "الباقة VIP" },
    price: { en: "$699", ar: "699$" },
    originalPrice: { en: "$999", ar: "999$" },
    description: { 
      en: "Complete care from start to settlement",
      ar: "رعاية كاملة من البداية حتى الاستقرار"
    },
    icon: Globe,
    features: {
      included: [
        { en: "Everything in Premium Package", ar: "كل ما في الباقة الممتازة" },
        { en: "Unlimited university applications", ar: "تقديمات جامعية غير محدودة" },
        { en: "Multi-country applications (up to 3)", ar: "تقديمات لعدة دول (حتى 3)" },
        { en: "Dedicated personal consultant", ar: "مستشار شخصي مخصص" },
        { en: "24/7 WhatsApp & phone support", ar: "دعم واتساب وهاتف 24/7" },
        { en: "Airport pickup + city orientation tour", ar: "استقبال المطار + جولة توعية" },
        { en: "Guaranteed accommodation booking", ar: "حجز مضمون للسكن" },
        { en: "SIM card + local bank account setup", ar: "إعداد شريحة + حساب بنكي محلي" },
        { en: "University registration accompaniment", ar: "مرافقة تسجيل الجامعة" },
        { en: "Medical insurance arrangement", ar: "ترتيب التأمين الطبي" },
        { en: "Part-time job search assistance", ar: "مساعدة البحث عن عمل جزئي" },
        { en: "2-year follow-up support", ar: "دعم متابعة لمدة سنتين" },
        { en: "Document translation (unlimited)", ar: "ترجمة وثائق (غير محدودة)" },
        { en: "98% acceptance guarantee*", ar: "ضمان قبول 98%*" },
        { en: "Money-back guarantee if not accepted**", ar: "ضمان استرداد إذا لم يُقبل**" },
      ],
      excluded: []
    },
    cta: { en: "Choose VIP", ar: "اختر VIP" },
    popular: false
  }
]

const addOns = [
  {
    name: { en: "Document Translation", ar: "ترجمة الوثائق" },
    price: { en: "$50/page", ar: "50$/صفحة" },
    icon: FileText
  },
  {
    name: { en: "Additional University", ar: "جامعة إضافية" },
    price: { en: "$100 each", ar: "100$ لكل" },
    icon: GraduationCap
  },
  {
    name: { en: "Scholarship Application", ar: "تقديم منحة دراسية" },
    price: { en: "$200 each", ar: "200$ لكل" },
    icon: Shield
  },
  {
    name: { en: "Express Processing", ar: "معالجة سريعة" },
    price: { en: "$150", ar: "150$" },
    icon: Clock
  },
  {
    name: { en: "Airport Pickup", ar: "استقبال المطار" },
    price: { en: "$100", ar: "100$" },
    icon: Plane
  },
  {
    name: { en: "Accommodation Search", ar: "بحث سكن" },
    price: { en: "$150", ar: "150$" },
    icon: Home
  }
]

export default function PricingPage() {
  const { locale } = useLanguage()

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {locale === "en" ? "Transparent Pricing" : "أسعار شفافة"}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {locale === "en" ? (
                <>Simple, Transparent <span className="text-amber-400">Pricing</span></>
              ) : (
                <>أسعار <span className="text-amber-400">بسيطة وشفافة</span></>
              )}
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              {locale === "en" 
                ? "Choose the package that fits your needs. No hidden fees, no surprises."
                : "اختر الباقة التي تناسب احتياجاتك. بدون رسوم خفية، بدون مفاجآت."
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl border ${
                  pkg.popular 
                    ? 'border-amber-500/50 bg-gradient-to-b from-amber-500/10 to-slate-900' 
                    : 'border-slate-800 bg-slate-900/50'
                } p-6 flex flex-col`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-amber-500 text-slate-950 text-xs font-bold rounded-full">
                      {locale === "en" ? "Most Popular" : "الأكثر طلباً"}
                    </span>
                  </div>
                )}
                
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <pkg.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {locale === "en" ? pkg.name.en : pkg.name.ar}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {locale === "en" ? pkg.description.en : pkg.description.ar}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white">
                      {locale === "en" ? pkg.price.en : pkg.price.ar}
                    </span>
                    {pkg.originalPrice && (
                      <span className="text-sm text-slate-500 line-through">
                        {locale === "en" ? pkg.originalPrice.en : pkg.originalPrice.ar}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex-1 space-y-4 mb-6">
                  <div>
                    <p className="text-sm font-medium text-emerald-400 mb-2">
                      {locale === "en" ? "Included:" : "المشمول:"}
                    </p>
                    <ul className="space-y-2">
                      {pkg.features.included.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{locale === "en" ? feature.en : feature.ar}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.features.excluded.length > 0 && (
                    <div>
                      <p className="text-sm font-medium text-slate-500 mb-2">
                        {locale === "en" ? "Not included:" : "غير مشمول:"}
                      </p>
                      <ul className="space-y-2">
                        {pkg.features.excluded.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                            <X className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                            <span>{locale === "en" ? feature.en : feature.ar}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <Button 
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950' 
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                  asChild
                >
                  <a href="#apply">
                    {locale === "en" ? pkg.cta.en : pkg.cta.ar}
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              {locale === "en" ? "Additional Services" : "خدمات إضافية"}
            </h2>
            <p className="text-slate-400">
              {locale === "en" ? "Customize your package with these add-ons" : "خصص باقتك مع هذه الإضافات"}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <addon.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-white">
                    {locale === "en" ? addon.name.en : addon.name.ar}
                  </h4>
                  <p className="text-sm text-amber-400">
                    {locale === "en" ? addon.price.en : addon.price.ar}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-slate-900 border border-emerald-500/20 p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              {locale === "en" ? "Our Guarantees" : "ضماناتنا"}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <Check className="w-6 h-6 text-emerald-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1">
                    {locale === "en" ? "100% Acceptance Guarantee*" : "ضمان قبول 100%*"}
                  </h4>
                  <p className="text-sm text-slate-400">
                    {locale === "en" 
                      ? "For Premium & VIP packages: If you don't get accepted, we refund 50% of fees"
                      : "للباقات الممتازة وVIP: إذا لم تحصل على قبول، نسترد 50% من الرسوم"
                    }
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Check className="w-6 h-6 text-emerald-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1">
                    {locale === "en" ? "Money-Back Guarantee**" : "ضمان استرداد المال**"}
                  </h4>
                  <p className="text-sm text-slate-400">
                    {locale === "en"
                      ? "For VIP package: Full refund if services don't meet agreed standards"
                      : "لباقة VIP: استرداد كامل إذا لم تلبِ الخدمات المعايير المتفق عليها"
                    }
                  </p>
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-6 text-center">
              {locale === "en" 
                ? "*Terms and conditions apply. See our terms page for details. **Valid for VIP package only."
                : "*تطبق الشروط والأحكام. راجع صفحة الشروط للتفاصيل. **ساري لباقة VIP فقط."
              }
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            {locale === "en" ? "Pricing FAQ" : "الأسئلة الشائعة عن الأسعار"}
          </h2>
          <div className="space-y-4">
            {[
              {
                q: { en: "Are there any hidden fees?", ar: "هل هناك رسوم خفية؟" },
                a: { en: "No. The price you see is the price you pay. Government fees (visa, university application fees) are separate and clearly communicated.", ar: "لا. السعر الذي تراه هو السعر الذي تدفعه. الرسوم الحكومية (تأشيرة، رسوم تقديم الجامعة) منفصلة ويتم توضيحها بوضوح." }
              },
              {
                q: { en: "Can I upgrade my package later?", ar: "هل يمكنني ترقية الباقة لاحقاً؟" },
                a: { en: "Yes! You can upgrade anytime by paying the difference. We'll credit what you've already paid towards the new package.", ar: "نعم! يمكنك الترقية في أي وقت بدفع الفرق. سنخصم ما دفعته بالفعل من سعر الباقة الجديدة." }
              },
              {
                q: { en: "What payment methods do you accept?", ar: "ما هي طرق الدفع المتاحة؟" },
                a: { en: "We accept bank transfers, PayPal, Wise, and major credit cards. Installment plans available for Premium and VIP packages.", ar: "نقبل التحويلات البنكية، PayPal، Wise، وبطاقات الائتمان الرئيسية. خطط تقسيط متاحة للباقات الممتازة وVIP." }
              },
              {
                q: { en: "Is there a refund policy?", ar: "هل هناك سياسة استرداد؟" },
                a: { en: "Yes. Full refund within 7 days if we haven't started work. Partial refund based on work completed after that. See terms for details.", ar: "نعم. استرداد كامل خلال 7 أيام إذا لم نبدأ العمل. استرداد جزئي بناءً على العمل المنجز بعد ذلك. راجع الشروط للتفاصيل." }
              }
            ].map((faq, index) => (
              <div key={index} className="p-4 rounded-lg bg-slate-950 border border-slate-800">
                <h4 className="font-bold text-white mb-2">{locale === "en" ? faq.q.en : faq.q.ar}</h4>
                <p className="text-sm text-slate-400">{locale === "en" ? faq.a.en : faq.a.ar}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {locale === "en" ? "Questions? Let's Talk" : "لديك أسئلة؟ دعنا نتحدث"}
          </h2>
          <p className="text-slate-400 mb-8">
            {locale === "en" ? "Contact us for a free consultation to find the best package for you." : "تواصل معنا للحصول على استشارة مجانية لإيجاد أفضل باقة تناسبك."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <WhatsAppButton size="lg" />
            <Button variant="outline" size="lg" asChild className="border-slate-700">
              <a href="mailto:maomoody524@gmail.com">
                <MessageCircle className="w-5 h-5 mr-2" />
                {locale === "en" ? "Email Us" : "راسلنا"}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
