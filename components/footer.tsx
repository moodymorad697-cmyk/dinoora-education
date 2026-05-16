"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, MessageCircle, GraduationCap, Instagram, Facebook, Music, Send, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useState } from "react"

export function Footer() {
  const { t, locale } = useLanguage()
  const [email, setEmail] = useState("")
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [newsletterMessage, setNewsletterMessage] = useState("")

  const handleNewsletterSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes("@")) {
      setNewsletterStatus("error")
      setNewsletterMessage(locale === "en" ? "Please enter a valid email address" : "يرجى إدخال عنوان بريد إلكتروني صحيح")
      setTimeout(() => setNewsletterStatus("idle"), 3000)
      return
    }

    setNewsletterStatus("loading")
    
    try {
      // محاكاة طلب API
      await new Promise(resolve => setTimeout(resolve, 1000))
      setNewsletterStatus("success")
      setNewsletterMessage(locale === "en" ? "Thank you for subscribing!" : "شكراً لك على الاشتراك!")
      setEmail("")
      setTimeout(() => setNewsletterStatus("idle"), 3000)
    } catch (error) {
      setNewsletterStatus("error")
      setNewsletterMessage(locale === "en" ? "Something went wrong. Please try again." : "حدث خطأ. يرجى المحاولة مرة أخرى.")
      setTimeout(() => setNewsletterStatus("idle"), 3000)
    }
  }
  
  const quickLinks = [
    { href: "#why-us", label: t.nav.whyUs },
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "/services", label: t.nav.services },
    { href: "#programs", label: t.nav.programs },
    { href: "#testimonials", label: t.nav.testimonials },
  ]

  const destinations = [
    { href: "/destinations/china", label: `${t.footer.studyIn} ${t.destinations.countries.china.name}` },
    { href: "/destinations/malaysia", label: `${t.footer.studyIn} ${t.destinations.countries.malaysia.name}` },
    { href: "/destinations/turkey", label: `${t.footer.studyIn} ${t.destinations.countries.turkey.name}` },
  ]

  const services = [
    { href: "/services/admission", label: t.services.items.admission.title },
    { href: "/services/visa", label: t.services.items.visa.title },
    { href: "/services/accommodation", label: t.services.items.accommodation.title },
    { href: "/services/documents", label: t.services.items.documents.title },
  ]

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/dinoora_education?igsh=YndmNTRubWYwbW80&utm_source=qr",
      label: "Instagram"
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/17mLtvZn95/?mibextid=wwXIfr",
      label: "Facebook"
    },
    {
      icon: Music,
      href: "https://www.tiktok.com/@kingmorad0?is_from_webapp=1&sender_device=pc",
      label: "TikTok"
    },
  ]

  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      {/* Premium Multi-Layer Background */}
      <div className="absolute inset-0">
        {/* Deep base */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />

        {/* Top accent line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        {/* Mesh gradients */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `
            radial-gradient(ellipse 60% 40% at 0% 0%, rgba(212, 168, 83, 0.10) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 100% 0%, rgba(99, 102, 241, 0.10) 0%, transparent 50%),
            radial-gradient(ellipse 80% 40% at 50% 100%, rgba(168, 85, 247, 0.08) 0%, transparent 60%)
          `
        }} />

        {/* Floating orb */}
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px]" />

        {/* Dotted pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-56 h-20 md:w-72 md:h-28 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/logo.png"
                  alt="DINOORA Education"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground tracking-wider">{t.footer.tagline}</span>
              </div>
            </Link>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-md font-medium">
              {t.footer.description}
            </p>

            {/* Certifications */}
            <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full glass border border-border/40">
              <span className="text-sm font-semibold text-primary">{t.footer.certifications}</span>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-13 w-13 items-center justify-center rounded-xl bg-secondary/50 border border-border/50 text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-primary" />
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-all duration-300 font-medium"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations & Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-primary" />
              {t.footer.destinations}
            </h3>
            <ul className="space-y-3 mb-8">
              {destinations.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-all duration-300 font-medium"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-primary" />
              {t.footer.servicesTitle}
            </h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-all duration-300 font-medium"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Premium Cards */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-primary" />
              {t.footer.contactUs}
            </h3>
            <ul className="space-y-3">
              {/* China Office */}
              <li className="group rounded-xl bg-white/[0.03] border border-white/5 p-4 hover:bg-white/[0.05] hover:border-amber-500/30 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-primary font-semibold mb-1">{locale === "ar" ? "🇨🇳 الصين" : "🇨🇳 China"}</p>
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {locale === "ar" ? (
                        <>الغرفة 201، الطابق الثاني، المبنى 2<br />رقم 37، قرية جيتانج، شارع جيانج دونج<br />مدينة ييوو، مقاطعة تشجيانج</>
                      ) : (
                        <>Room 201, 2nd Floor, Building 2<br />No. 37, Getang Village, Jiangdong St.<br />Yiwu City, Zhejiang Province</>
                      )}
                    </span>
                  </div>
                </div>
              </li>
              
              {/* Malaysia Office */}
              <li className="group rounded-xl bg-white/[0.03] border border-white/5 p-4 hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-emerald-400 font-semibold mb-1">{locale === "ar" ? "🇲🇾 ماليزيا" : "🇲🇾 Malaysia"}</p>
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {locale === "ar" ? (
                        <>Tower 5, SkyPark @CYBERJAYA<br />المستوى 4 - 07<br />سايبرجايا، سيلانجور</>
                      ) : (
                        <>Tower 5, SkyPark @CYBERJAYA<br />Level 4 - 07<br />Cyberjaya, Selangor</>
                      )}
                    </span>
                  </div>
                </div>
              </li>
              <li className="group">
                <a href="tel:+8615587237864" className="flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/5 p-4 hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-300" dir="ltr">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">China</span>
                    <span className="text-foreground text-sm font-semibold group-hover:text-blue-400 transition-colors">+86 15587237864</span>
                  </div>
                </a>
              </li>
              <li className="group">
                <a href="tel:+60174110146" className="flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/5 p-4 hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all duration-300" dir="ltr">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">Malaysia</span>
                    <span className="text-foreground text-sm font-semibold group-hover:text-emerald-400 transition-colors">+60 174110146</span>
                  </div>
                </a>
              </li>
              <li className="group">
                <a href="mailto:info@dinoora.com" className="flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/5 p-4 hover:bg-white/[0.05] hover:border-purple-500/30 transition-all duration-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-foreground text-sm font-semibold group-hover:text-purple-400 transition-colors">info@dinoora.com</span>
                </a>
              </li>
              <li className="group">
                <a href="https://wa.me/8615587237864" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/20 p-4 hover:from-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30 shrink-0">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <span className="text-foreground text-sm font-bold group-hover:text-emerald-400 transition-colors">
                    {t.footer.whatsappSupport}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Study Quick Actions */}
        <div className="mt-16 pt-12 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary tracking-wider uppercase">
                {locale === "ar" ? "ابدأ رحلتك الدراسية الآن" : "Start Your Study Journey Now"}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              {locale === "ar" ? "خطوتك القادمة على بعد نقرة واحدة" : "Your Next Step Is Just One Click Away"}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {locale === "ar"
                ? "اختر ما يناسبك واحصل على رد فوري من فريق دينورا"
                : "Choose what suits you and get an instant response from the Dinoora team"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {/* Free Consultation */}
            <a
              href="https://wa.me/8615587237864?text=Hi%20Dinoora%2C%20I%20would%20like%20a%20free%20consultation%20about%20studying%20abroad"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl card-glow lift-emerald p-6 text-center bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/20 transition-all duration-500"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-3 shadow-lg shadow-emerald-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-2">
                {locale === "ar" ? "استشارة مجانية" : "Free Consultation"}
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                {locale === "ar" ? "تحدث مع خبير عبر واتساب" : "Talk to an expert via WhatsApp"}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400">
                {locale === "ar" ? "ابدأ المحادثة" : "Start Chat"}
                <ArrowRight className={`w-3 h-3 ${locale === "ar" ? "rotate-180" : ""} group-hover:translate-x-1 transition-transform`} />
              </span>
            </a>

            {/* Explore Destinations */}
            <Link
              href="/destinations"
              className="group relative rounded-2xl card-glow lift-gold p-6 text-center bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20 transition-all duration-500"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 mb-3 shadow-lg shadow-amber-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-2">
                {locale === "ar" ? "استكشاف الوجهات" : "Explore Destinations"}
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                {locale === "ar" ? "اكتشف وجهات الدراسة المتاحة" : "Discover available study destinations"}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400">
                {locale === "ar" ? "عرض الوجهات" : "View Destinations"}
                <ArrowRight className={`w-3 h-3 ${locale === "ar" ? "rotate-180" : ""} group-hover:translate-x-1 transition-transform`} />
              </span>
            </Link>

            {/* Apply Now */}
            <Link
              href="#apply"
              className="group relative rounded-2xl card-glow lift-blue p-6 text-center bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20 transition-all duration-500"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-3 shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-foreground mb-2">
                {locale === "ar" ? "قدّم طلبك الآن" : "Apply Now"}
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                {locale === "ar" ? "املأ نموذج التسجيل بسرعة" : "Fill the registration form quickly"}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400">
                {locale === "ar" ? "ابدأ التقديم" : "Start Application"}
                <ArrowRight className={`w-3 h-3 ${locale === "ar" ? "rotate-180" : ""} group-hover:translate-x-1 transition-transform`} />
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-12 border-t border-border/50 flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-base text-muted-foreground font-medium">
            &copy; {new Date().getFullYear()} DINOORA. {t.footer.copyright}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="#" className="text-base text-muted-foreground hover:text-primary transition-colors font-medium">
              {t.footer.privacyPolicy}
            </Link>
            <Link href="#" className="text-base text-muted-foreground hover:text-primary transition-colors font-medium">
              {t.footer.termsOfService}
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <ArrowRight className="w-4 h-4 rotate-[-90deg]" />
              {t.footer.backToTop || "Back to Top"}
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
