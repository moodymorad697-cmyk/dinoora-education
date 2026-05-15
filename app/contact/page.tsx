"use client"

import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Send,
  Building2,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { WhatsAppButton } from "@/components/unified-cta"
import { useState } from "react"

const offices = [
  {
    country: { en: "China Office", ar: "المكتب الصيني" },
    flag: "🇨🇳",
    address: "Room 201, 2nd Floor, Building 2, No. 37, Getang Village, Jiangdong Street, Yiwu City, Zhejiang Province, China",
    phone: "+86 155 8723 7864",
    email: "maomoody524@gmail.com",
    hours: { en: "9:00 AM - 6:00 PM (GMT+8)", ar: "9:00 ص - 6:00 م (توقيت الصين)" },
    mapsLink: "https://maps.google.com/?q=Yiwu+City+Zhejiang+Province+China",
    color: "from-amber-500 to-orange-500"
  },
  {
    country: { en: "Malaysia Office", ar: "المكتب الماليزي" },
    flag: "🇲🇾",
    address: "Tower 5, SkyPark @CYBERJAYA, Level 4 - 07, Cyberjaya, Selangor, Malaysia",
    phone: "+86 155 8723 7864",
    email: "maomoody524@gmail.com",
    hours: { en: "9:00 AM - 6:00 PM (GMT+8)", ar: "9:00 ص - 6:00 م (توقيت ماليزيا)" },
    mapsLink: "https://maps.google.com/?q=SkyPark+Cyberjaya+Malaysia",
    color: "from-emerald-500 to-teal-500"
  }
]

const contactMethods = [
  {
    icon: MessageCircle,
    title: { en: "WhatsApp", ar: "واتساب" },
    desc: { en: "Fastest response", ar: "أسرع رد" },
    value: "+86 155 8723 7864",
    link: "https://wa.me/8615587237864",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Mail,
    title: { en: "Email", ar: "البريد" },
    desc: { en: "Detailed inquiries", ar: "استفسارات تفصيلية" },
    value: "maomoody524@gmail.com",
    link: "mailto:maomoody524@gmail.com",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Phone,
    title: { en: "Phone", ar: "الهاتف" },
    desc: { en: "During business hours", ar: "خلال ساعات العمل" },
    value: "+86 155 8723 7864",
    link: "tel:+8615587237864",
    color: "from-purple-500 to-pink-500"
  }
]

const faqs = [
  {
    q: { en: "How quickly do you respond?", ar: "كم سرعة ردكم؟" },
    a: { en: "WhatsApp: within 1-2 hours during business hours. Email: within 24 hours. For urgent matters, please call.", ar: "واتساب: خلال 1-2 ساعة في ساعات العمل. البريد: خلال 24 ساعة. للمسائل العاجلة، يرجى الاتصال." }
  },
  {
    q: { en: "Do you offer free consultations?", ar: "هل تقدمون استشارات مجانية؟" },
    a: { en: "Yes! Your first consultation is completely free. We'll assess your profile and recommend the best path forward.", ar: "نعم! استشارتك الأولى مجانية بالكامل. سنقوم بتقييم ملفك ونقترح أفضل طريق للمضي قدماً." }
  },
  {
    q: { en: "Can I visit your offices?", ar: "هل يمكنني زيارة مكاتبكم؟" },
    a: { en: "Absolutely! We welcome visits during business hours. Please schedule an appointment in advance via WhatsApp.", ar: "بالتأكيد! نرحب بالزيارات خلال ساعات العمل. يرجى تحديد موعد مسبقاً عبر واتساب." }
  },
  {
    q: { en: "What languages do you support?", ar: "ما اللغات التي تدعمونها؟" },
    a: { en: "Arabic, English, Chinese, and Turkish. Our team speaks your language!", ar: "العربية، الإنجليزية، الصينية، والتركية. فريقنا يتحدث لغتك!" }
  }
]

export default function ContactPage() {
  const { locale } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    }, 3000)
  }

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
              {locale === "en" ? "Get in Touch" : "تواصل معنا"}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {locale === "en" ? (
                <>We're Here to <span className="text-amber-400">Help</span></>
              ) : (
                <>نحن هنا <span className="text-amber-400">للمساعدة</span></>
              )}
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              {locale === "en" 
                ? "Have questions? We'd love to hear from you. Reach out through any channel below."
                : "لديك أسئلة؟ نود أن نسمع منك. تواصل عبر أي قناة أدناه."
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <a 
                  href={method.link}
                  target={method.link.startsWith("http") ? "_blank" : undefined}
                  rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block h-full"
                >
                  <div className="h-full p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-primary/50 transition-all group">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {locale === "en" ? method.title.en : method.title.ar}
                    </h3>
                    <p className="text-sm text-slate-400 mb-3">
                      {locale === "en" ? method.desc.en : method.desc.ar}
                    </p>
                    <p className="text-primary font-medium">{method.value}</p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {locale === "en" ? "Our Offices" : "مكاتبنا"}
            </h2>
            <p className="text-slate-400">
              {locale === "en" ? "Visit us or send us a message" : "زورنا أو أرسل لنا رسالة"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{office.flag}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {locale === "en" ? office.country.en : office.country.ar}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                    <p className="text-slate-300 text-sm">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-slate-500 shrink-0" />
                    <p className="text-slate-300 text-sm">{office.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-slate-500 shrink-0" />
                    <p className="text-slate-300 text-sm">{office.email}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-slate-500 shrink-0" />
                    <p className="text-slate-300 text-sm">
                      {locale === "en" ? office.hours.en : office.hours.ar}
                    </p>
                  </div>
                </div>

                <a
                  href={office.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80"
                >
                  <MapPin className="w-4 h-4" />
                  {locale === "en" ? "View on Google Maps" : "عرض على Google Maps"}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                {locale === "en" ? "Send us a Message" : "أرسل لنا رسالة"}
              </h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center"
                >
                  <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">
                    {locale === "en" ? "Message Sent!" : "تم إرسال الرسالة!"}
                  </h3>
                  <p className="text-slate-400">
                    {locale === "en" 
                      ? "We'll get back to you within 24 hours."
                      : "سنرد عليك خلال 24 ساعة."
                    }
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-slate-300">
                      {locale === "en" ? "Full Name" : "الاسم الكامل"}
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-slate-900 border-slate-700 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-slate-300">
                      {locale === "en" ? "Email" : "البريد"}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-slate-900 border-slate-700 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-slate-300">
                      {locale === "en" ? "Phone/WhatsApp" : "الهاتف/واتساب"}
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-slate-900 border-slate-700 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-slate-300">
                      {locale === "en" ? "Subject" : "الموضوع"}
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="bg-slate-900 border-slate-700 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-slate-300">
                      {locale === "en" ? "Message" : "الرسالة"}
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className="bg-slate-900 border-slate-700 text-white"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>{locale === "en" ? "Sending..." : "جاري الإرسال..."}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {locale === "en" ? "Send Message" : "إرسال الرسالة"}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Quick FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                {locale === "en" ? "Quick Answers" : "إجابات سريعة"}
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                    <h4 className="font-bold text-white mb-2">
                      {locale === "en" ? faq.q.en : faq.q.ar}
                    </h4>
                    <p className="text-sm text-slate-400">
                      {locale === "en" ? faq.a.en : faq.a.ar}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-emerald-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">
                      {locale === "en" ? "Free Consultation" : "استشارة مجانية"}
                    </h4>
                    <p className="text-sm text-slate-400">
                      {locale === "en" 
                        ? "Your first consultation is always free!"
                        : "استشارتك الأولى دائماً مجانية!"
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {locale === "en" ? "Prefer WhatsApp?" : "تفضل واتساب؟"}
          </h2>
          <p className="text-slate-400 mb-8">
            {locale === "en" 
              ? "Get instant responses on WhatsApp. We're online 24/7!"
              : "احصل على ردود فورية على واتساب. نحن متواجدون 24/7!"
            }
          </p>
          <WhatsAppButton size="lg" />
        </div>
      </section>
    </main>
  )
}
