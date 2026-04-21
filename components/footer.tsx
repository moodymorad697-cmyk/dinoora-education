"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, MessageCircle, GraduationCap, Instagram, Facebook, Music, Youtube, Send, ArrowRight } from "lucide-react"
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
      href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com",
      label: "Instagram"
    },
    {
      icon: Facebook,
      href: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com",
      label: "Facebook"
    },
    {
      icon: Music,
      href: process.env.NEXT_PUBLIC_TIKTOK_URL || "https://tiktok.com",
      label: "TikTok"
    },
    {
      icon: Youtube,
      href: "https://youtube.com/@dinoora",
      label: "YouTube"
    },
  ]

  return (
    <footer className="relative border-t border-border/50 bg-card/30 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold gradient-text">DINOORA</span>
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
            <h3 className="text-lg font-bold uppercase tracking-wider text-foreground mb-8">{t.footer.quickLinks}</h3>
            <ul className="space-y-5">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-base hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations & Services */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider text-foreground mb-8">{t.footer.destinations}</h3>
            <ul className="space-y-5 mb-10">
              {destinations.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-base hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-bold uppercase tracking-wider text-foreground mb-8">{t.footer.servicesTitle}</h3>
            <ul className="space-y-5">
              {services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-base hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider text-foreground mb-8">{t.footer.contactUs}</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl gold-gradient text-primary-foreground shrink-0 mt-1">
                  <MapPin className="h-6 w-6" />
                </div>
                <span className="text-muted-foreground text-base leading-relaxed font-medium">
                  {locale === "ar" ? (
                    <>الغرفة 201، الطابق الثاني، المبنى 2<br />رقم 37، قرية جيتانج، شارع جيانج دونج<br />مدينة ييوو، مدينة جينهوا، مقاطعة تشجيانج</>
                  ) : (
                    <>Room 201, 2nd Floor, Building 2<br />No. 37, Getang Village, Jiangdong Street<br />Yiwu City, Jinhua City, Zhejiang Province</>
                  )}
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl gold-gradient text-primary-foreground shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <a href="tel:+8615587237864" className="text-muted-foreground hover:text-primary text-base font-medium" dir="ltr">
                  +86 15587237864
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl gold-gradient text-primary-foreground shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <a href="mailto:maomoody524@gmail.com" className="text-muted-foreground hover:text-primary text-base font-medium break-all">
                  maomoody524@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl gold-gradient text-primary-foreground shrink-0">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <a href="https://wa.me/8615587237864" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary text-base font-bold">
                  {t.footer.whatsappSupport}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-12 border-t border-border/50">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t.footer.newsletterTitle || "Stay Updated with Latest Opportunities"}
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t.footer.newsletterDescription || "Get the latest scholarship opportunities, university updates, and study abroad tips delivered to your inbox."}
            </p>
            <form onSubmit={handleNewsletterSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.footer.emailPlaceholder || "Enter your email address"}
                className="flex-1 px-4 py-3 bg-secondary/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                disabled={newsletterStatus === "loading"}
              />
              <Button 
                type="submit"
                className="gold-gradient text-primary-foreground font-bold px-6 py-3 hover:scale-105 transition-transform flex items-center gap-2 disabled:opacity-50"
                disabled={newsletterStatus === "loading"}
              >
                <Send className="w-4 h-4" />
                {newsletterStatus === "loading" ? "..." : (t.footer.subscribe || "Subscribe")}
              </Button>
            </form>
            {newsletterStatus !== "idle" && (
              <div className={`mt-4 p-3 rounded-lg text-sm font-medium ${
                newsletterStatus === "success" 
                  ? "bg-green-500/20 text-green-600 border border-green-500/30" 
                  : "bg-red-500/20 text-red-600 border border-red-500/30"
              }`}>
                {newsletterMessage}
              </div>
            )}
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
