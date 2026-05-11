"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useLanguage } from "@/lib/language-context"
import {
  Calculator,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Mail,
  Phone,
  Sparkles,
  Clock,
  Shield,
  Award,
  Send,
  ChevronDown,
  ChevronUp,
  Package,
  Ship,
  Plane,
  Truck,
  Globe2,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function QuotePage() {
  const { t, dir, locale } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    company: "",
    serviceType: "",
    destination: "",
    shippingMethod: "",
    productDescription: "",
    estimatedQuantity: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const messageText = `📋 *${locale === "ar" ? "طلب عرض سعر جديد" : "New Quote Request"}*

👤 *${locale === "ar" ? "الاسم" : "Name"}:* ${formData.name}
🏢 *${locale === "ar" ? "الشركة" : "Company"}:* ${formData.company}
📧 *${locale === "ar" ? "البريد" : "Email"}:* ${formData.email}
📱 *${locale === "ar" ? "الهاتف" : "Phone"}:* ${formData.phone}
💬 *WhatsApp:* ${formData.whatsapp}

📦 *${locale === "ar" ? "الخدمة" : "Service"}:* ${formData.serviceType}
🌍 *${locale === "ar" ? "الوجهة" : "Destination"}:* ${formData.destination}
🚢 *${locale === "ar" ? "الشحن" : "Shipping"}:* ${formData.shippingMethod}
📊 *${locale === "ar" ? "الكمية" : "Quantity"}:* ${formData.estimatedQuantity}

📝 *${locale === "ar" ? "وصف المنتجات" : "Product Description"}:*
${formData.productDescription}

💭 *${locale === "ar" ? "ملاحظات" : "Notes"}:*
${formData.message}

---
DINOORA`

    const userWhatsapp = "8615587237864"
    const whatsappUrl = `https://wa.me/${userWhatsapp}?text=${encodeURIComponent(messageText)}`
    window.open(whatsappUrl, "_blank")

    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const serviceTypes = [
    { id: "sourcing", en: "Product Sourcing", ar: "توريد المنتجات" },
    { id: "shipping", en: "Shipping & Logistics", ar: "الشحن واللوجستيات" },
    { id: "warehousing", en: "Warehousing", ar: "التخزين" },
    { id: "inspection", en: "Quality Inspection", ar: "فحص الجودة" },
    { id: "customs", en: "Customs Clearance", ar: "التخليص الجمركي" },
    { id: "full", en: "Full Service Package", ar: "باقة الخدمة الكاملة" },
  ]

  const destinationList = [
    { id: "saudi", en: "Saudi Arabia", ar: "السعودية" },
    { id: "uae", en: "UAE", ar: "الإمارات" },
    { id: "egypt", en: "Egypt", ar: "مصر" },
    { id: "kuwait", en: "Kuwait", ar: "الكويت" },
    { id: "qatar", en: "Qatar", ar: "قطر" },
    { id: "bahrain", en: "Bahrain", ar: "البحرين" },
    { id: "oman", en: "Oman", ar: "عمان" },
    { id: "jordan", en: "Jordan", ar: "الأردن" },
    { id: "iraq", en: "Iraq", ar: "العراق" },
    { id: "other", en: "Other", ar: "أخرى" },
  ]

  const shippingMethodList = [
    { id: "sea", en: "Sea Freight", ar: "الشحن البحري", time: "25-40 days" },
    { id: "air", en: "Air Freight", ar: "الشحن الجوي", time: "3-7 days" },
    { id: "land", en: "Land Transport", ar: "النقل البري", time: "15-25 days" },
  ]

  const faqs = [
    {
      q: t.quote.faq.q1,
      a: t.quote.faq.a1,
    },
    {
      q: t.quote.faq.q2,
      a: t.quote.faq.a2,
    },
    {
      q: t.quote.faq.q3,
      a: t.quote.faq.a3,
    },
    {
      q: t.quote.faq.q4,
      a: t.quote.faq.a4,
    },
  ]

  const features = [
    { icon: Clock, text: t.quote.features.response },
    { icon: Shield, text: t.quote.features.noFees },
    { icon: Award, text: t.quote.features.bestPrices },
    { icon: Sparkles, text: t.quote.features.support },
  ]

  const benefits = t.quote.benefits

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-3xl border border-primary/20 bg-card/50 backdrop-blur-xl p-10 sm:p-14 text-center"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full gold-gradient shadow-lg shadow-primary/25">
                <CheckCircle className="h-10 w-10 text-primary-foreground" />
              </div>
              <h2 className="mt-8 text-3xl font-bold gradient-text">
                {t.quote.success.title}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-md mx-auto">
                {t.quote.success.description}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="gold-gradient text-primary-foreground hover:opacity-90 px-8 py-6 text-lg font-semibold"
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({
                      name: "", email: "", phone: "", whatsapp: "", company: "",
                      serviceType: "", destination: "", shippingMethod: "",
                      productDescription: "", estimatedQuantity: "", message: "",
                    })
                  }}
                >
                  {t.quote.success.anotherRequest}
                </Button>
                <a
                  href="https://wa.me/8615587237864"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-border/50 text-foreground hover:bg-secondary/50 px-8 py-6 text-lg"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    {t.quote.success.chatWhatsApp}
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=90')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/85 to-purple-900/90" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Calculator className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {t.quote.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6"
            >
              <span className="text-foreground">
                {locale === "ar" ? "اطلب " : "Request Your "}
              </span>
              <span className="gradient-text">
                {locale === "ar" ? "عرض سعر مفصل" : "Detailed Quote"}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {t.quote.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-8 border-y border-border/50 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 justify-center"
              >
                <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium text-foreground">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-start">
            {/* Left Column - Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    {t.quote.whyChoose}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.quote.whyDescription}
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-4">
                  {benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Contact Info Cards */}
                <div className="space-y-4 pt-4">
                  <h3 className="text-lg font-semibold">
                    {t.quote.contactTitle}
                  </h3>
                  
                  <a
                    href="https://wa.me/8615587237864"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">WhatsApp</p>
                      <p className="text-sm text-muted-foreground" dir="ltr">+86 155 8723 7864</p>
                    </div>
                  </a>

                  <a
                    href="mailto:maomoody524@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {locale === "ar" ? "البريد الإلكتروني" : "Email"}
                      </p>
                      <p className="text-sm text-muted-foreground" dir="ltr">maomoody524@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+8615587237864"
                    className="flex items-center gap-4 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {locale === "ar" ? "هاتف" : "Phone"}
                      </p>
                      <p className="text-sm text-muted-foreground" dir="ltr">+86 155 8723 7864</p>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative"
              >
                {/* Gradient Border */}
                <div className="absolute -inset-1 gold-gradient rounded-[2rem] opacity-20 blur-sm" />

                <div className="relative rounded-3xl border border-border/50 bg-card/80 backdrop-blur-xl p-8 lg:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Info */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-foreground font-medium">
                          {locale === "ar" ? "الاسم الكامل *" : "Full Name *"}
                        </Label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder={locale === "ar" ? "أدخل اسمك" : "Enter your name"}
                          className="bg-secondary/50 border-border/50 h-12 rounded-xl"
                          dir={dir}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-foreground font-medium">
                          {locale === "ar" ? "اسم الشركة" : "Company Name"}
                        </Label>
                        <Input
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder={locale === "ar" ? "اسم الشركة (اختياري)" : "Company name (optional)"}
                          className="bg-secondary/50 border-border/50 h-12 rounded-xl"
                          dir={dir}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-foreground font-medium">
                          {locale === "ar" ? "البريد الإلكتروني *" : "Email *"}
                        </Label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="email@example.com"
                          className="bg-secondary/50 border-border/50 h-12 rounded-xl"
                          dir="ltr"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-foreground font-medium">
                          {locale === "ar" ? "رقم الهاتف *" : "Phone Number *"}
                        </Label>
                        <Input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+XXX XXX XXX XXXX"
                          className="bg-secondary/50 border-border/50 h-12 rounded-xl"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-foreground font-medium">
                        {locale === "ar" ? "رقم واتساب" : "WhatsApp Number"}
                      </Label>
                      <Input
                        type="tel"
                        value={formData.whatsapp}
                        onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                        placeholder="+XXX XXX XXX XXXX"
                        className="bg-secondary/50 border-border/50 h-12 rounded-xl"
                        dir="ltr"
                      />
                    </div>

                    {/* Service Info */}
                    <div className="pt-4 border-t border-border/50">
                      <h3 className="text-lg font-semibold mb-4">
                        {locale === "ar" ? "تفاصيل الخدمة المطلوبة" : "Service Details"}
                      </h3>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label className="text-foreground font-medium">
                            {t.quote.form.serviceType} *
                          </Label>
                          <Select
                            required
                            value={formData.serviceType}
                            onValueChange={(value) => handleInputChange("serviceType", value)}
                          >
                            <SelectTrigger className="bg-secondary/50 border-border/50 h-12 rounded-xl">
                              <SelectValue placeholder={locale === "ar" ? "اختر الخدمة" : "Select service"} />
                            </SelectTrigger>
                            <SelectContent>
                              {serviceTypes.map((service) => (
                                <SelectItem key={service.id} value={service.id}>
                                  {locale === "ar" ? service.ar : service.en}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-foreground font-medium">
                            {t.quote.form.destination} *
                          </Label>
                          <Select
                            required
                            value={formData.destination}
                            onValueChange={(value) => handleInputChange("destination", value)}
                          >
                            <SelectTrigger className="bg-secondary/50 border-border/50 h-12 rounded-xl">
                              <SelectValue placeholder={locale === "ar" ? "اختر الوجهة" : "Select destination"} />
                            </SelectTrigger>
                            <SelectContent>
                              {destinationList.map((dest) => (
                                <SelectItem key={dest.id} value={dest.id}>
                                  {locale === "ar" ? dest.ar : dest.en}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6 mt-6">
                        <div className="space-y-2">
                          <Label className="text-foreground font-medium">
                            {t.quote.form.shippingMethod}
                          </Label>
                          <Select
                            value={formData.shippingMethod}
                            onValueChange={(value) => handleInputChange("shippingMethod", value)}
                          >
                            <SelectTrigger className="bg-secondary/50 border-border/50 h-12 rounded-xl">
                              <SelectValue placeholder={locale === "ar" ? "اختر طريقة الشحن" : "Select shipping method"} />
                            </SelectTrigger>
                            <SelectContent>
                              {shippingMethodList.map((method) => (
                                <SelectItem key={method.id} value={method.id}>
                                  {locale === "ar" ? method.ar : method.en} ({method.time})
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-foreground font-medium">
                            {t.quote.form.quantity}
                          </Label>
                          <Input
                            value={formData.estimatedQuantity}
                            onChange={(e) => handleInputChange("estimatedQuantity", e.target.value)}
                            placeholder={locale === "ar" ? "مثال: 1000 قطعة أو 5 طن" : "e.g., 1000 pieces or 5 tons"}
                            className="bg-secondary/50 border-border/50 h-12 rounded-xl"
                            dir={dir}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Product Description */}
                    <div className="space-y-2">
                      <Label className="text-foreground font-medium">
                        {t.quote.form.productDescription} *
                      </Label>
                      <Textarea
                        required
                        value={formData.productDescription}
                        onChange={(e) => handleInputChange("productDescription", e.target.value)}
                        placeholder={
                          locale === "ar"
                            ? "صف المنتجات التي تريد شحنها، الأبعاد، الوزن، وأي متطلبات خاصة..."
                            : "Describe the products you want to ship, dimensions, weight, and any special requirements..."
                        }
                        className="bg-secondary/50 border-border/50 min-h-[120px] rounded-xl resize-none"
                        dir={dir}
                      />
                    </div>

                    {/* Additional Message */}
                    <div className="space-y-2">
                      <Label className="text-foreground font-medium">
                        {t.quote.form.additionalNotes}
                      </Label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder={
                          locale === "ar"
                            ? "أي متطلبات خاصة أو أسئلة إضافية..."
                            : "Any special requirements or additional questions..."
                        }
                        className="bg-secondary/50 border-border/50 min-h-[80px] rounded-xl resize-none"
                        dir={dir}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gold-gradient text-primary-foreground hover:opacity-90 py-6 text-lg rounded-xl font-semibold shadow-lg shadow-primary/25 group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 mr-3"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          {t.quote.form.submitting}
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          {t.quote.form.submit}
                          <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                      {t.quote.form.agreement}
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Methods Visual Section */}
      <section className="py-16 border-y border-border/50 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold">
              {locale === "ar" ? "طرق الشحن المتاحة" : "Available Shipping Methods"}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Ship, title: locale === "ar" ? "الشحن البحري" : "Sea Freight", time: "25-40 days", desc: locale === "ar" ? "الأكثر اقتصاداً للشحنات الكبيرة" : "Most economical for large shipments", color: "from-blue-500/20 to-cyan-500/20" },
              { icon: Plane, title: locale === "ar" ? "الشحن الجوي" : "Air Freight", time: "3-7 days", desc: locale === "ar" ? "الأسرع للشحنات العاجلة" : "Fastest for urgent shipments", color: "from-purple-500/20 to-pink-500/20" },
              { icon: Truck, title: locale === "ar" ? "النقل البري" : "Land Transport", time: "15-25 days", desc: locale === "ar" ? "خيار متوازن بين السرعة والتكلفة" : "Balanced option between speed and cost", color: "from-amber-500/20 to-orange-500/20" },
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="rounded-2xl border border-border/50 bg-card/50 p-6 hover:border-primary/50 transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{method.title}</h3>
                <p className="text-sm text-primary font-semibold mb-2">{method.time}</p>
                <p className="text-sm text-muted-foreground">{method.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 border-t border-border/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t.quote.faq.title}
            </h2>
            <p className="text-muted-foreground">
              {t.quote.faq.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-border/50 bg-card/50 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-foreground">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-muted-foreground">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
