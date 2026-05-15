"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { EnhancedSearch } from "./enhanced-search"
import {
  Menu, X, Globe, GraduationCap, Search, Phone, MessageCircle,
  Star, ListChecks, Briefcase, MapPin, BookOpen, Building2, Quote,
  Mail, Clock, Sparkles, TrendingUp, Award, ArrowRight, Target,
  Users, DollarSign, HeadphonesIcon, Newspaper,
} from "lucide-react"

export function Header() {
  const { t, locale, setLocale, dir } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: locale === "ar" ? "الرئيسية" : "Home", Icon: Star, highlight: true },
    { href: "#services", label: t.nav.services, Icon: Briefcase, highlight: false },
    { href: "/destinations/china", label: locale === "ar" ? "الصين" : "China", Icon: Globe, highlight: false },
    { href: "/destinations/malaysia", label: locale === "ar" ? "ماليزيا" : "Malaysia", Icon: MapPin, highlight: false },
    { href: "/destinations/turkey", label: locale === "ar" ? "تركيا" : "Turkey", Icon: Building2, highlight: false },
    { href: "/blog", label: locale === "ar" ? "المدونة" : "Blog", Icon: Newspaper, highlight: false },
    { href: "/about", label: locale === "ar" ? "عنّا" : "About", Icon: Users, highlight: false },
    { href: "/contact", label: locale === "ar" ? "تواصل" : "Contact", Icon: HeadphonesIcon, highlight: false },
  ]

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "ar" : "en")
  }

  return (
    <>
      {/* Top Info Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 border-b border-white/5 transition-all duration-500 ${isScrolled ? "h-0 overflow-hidden opacity-0" : "h-9 opacity-100"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full text-xs">
            <div className="flex items-center gap-5 text-white/70">
              <a href="tel:+8615587237864" className="hidden sm:inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors">
                <Phone className="w-3 h-3" />
                <span className="font-medium">China: +86 15587237864</span>
              </a>
              <a href="tel:+60174110146" className="hidden sm:inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors">
                <Phone className="w-3 h-3" />
                <span className="font-medium">Malaysia: +60 174110146</span>
              </a>
              <a href="mailto:info@dinoora.com" className="hidden md:inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors">
                <Mail className="w-3 h-3" />
                <span>info@dinoora.com</span>
              </a>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-emerald-400" />
                <span className="text-white/60">{locale === "ar" ? "متاحون 24/7" : "Available 24/7"}</span>
              </span>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <span className="hidden sm:inline-flex items-center gap-1.5">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>{locale === "ar" ? "موثوق من مئات الطلاب" : "Trusted by Hundreds of Students"}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 bg-slate-950 border-b border-slate-800 ${
        isScrolled
          ? "top-0 py-4 shadow-2xl shadow-black/20"
          : "top-9 py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Logo - Full visibility and better prominence */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0 order-2 lg:order-1">
            <div className="relative w-56 h-16 md:w-64 md:h-20 group-hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-amber-500/20 to-primary/10 rounded-lg p-3 border border-amber-500/30 flex items-center justify-center">
              <img
                src="/images/logo.png"
                alt="DINOORA Education"
                className="w-full h-full object-contain"
                style={{ filter: 'brightness(1.2) contrast(1.1)' }}
              />
            </div>
          </Link>

          {/* Desktop Navigation - Left Side */}
          <nav className="hidden lg:flex items-center gap-1 flex-shrink-0 order-1">
            {navItems.map((item) => {
              const Icon = item.Icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-3 py-2 text-sm font-semibold tracking-wide transition-all duration-300 rounded-lg group text-muted-foreground hover:text-foreground hover:bg-secondary/40 whitespace-nowrap"
                >
                  <span className="flex items-center gap-1.5">
                    <Icon className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:text-primary transition-all flex-shrink-0" />
                    <span className="whitespace-nowrap">{item.label}</span>
                  </span>
                  <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-amber-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </Link>
              )
            })}
          </nav>

          {/* Right Side Actions - Order 3 */}
          <div className="hidden lg:flex items-center gap-3 order-3">
            {/* Enhanced Search Bar */}
            <EnhancedSearch isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />

            {/* Language Toggle - More Visible */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-muted-foreground hover:text-primary text-sm font-bold transition-all hover:bg-primary/10 rounded-lg px-3 py-2 duration-300 border border-transparent hover:border-primary/30"
            >
              <Globe className="w-5 h-5 text-primary" />
              <span className="uppercase">{locale === "en" ? "AR" : "EN"}</span>
            </Button>

            {/* Contact Buttons - Compact */}
            <div className="hidden xl:flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-muted-foreground hover:text-foreground transition-all hover:bg-secondary/50 rounded-lg h-9 w-9"
              >
                <a href="tel:+8615587237864" aria-label="Call China">
                  <Phone className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-muted-foreground hover:text-foreground transition-all hover:bg-secondary/50 rounded-lg h-9 w-9"
              >
                <a href="tel:+60174110146" aria-label="Call Malaysia">
                  <Phone className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-muted-foreground hover:text-foreground transition-all hover:bg-secondary/50 rounded-lg h-9 w-9"
              >
                <a href="https://wa.me/8615587237864" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp China">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-muted-foreground hover:text-foreground transition-all hover:bg-secondary/50 rounded-lg h-9 w-9"
              >
                <a href="https://wa.me/60174110146" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Malaysia">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </Button>
            </div>

            <Button
              className="gold-gradient text-primary-foreground font-bold px-6 py-2.5 hover:scale-105 transition-transform duration-300"
              asChild
            >
              <Link href="#apply">{t.nav.applyNow}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/50 animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-2 mt-4">
              {navItems.map((item) => {
                const Icon = item.Icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-5 py-4 text-base font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-300 ${dir === "rtl" ? "text-right" : "text-left"} flex items-center gap-3 group`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    {item.label}
                  </Link>
                )
              })}

              {/* Mobile Contact Buttons */}
              <div className="flex gap-3 mt-4 px-5">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="flex-1"
                >
                  <a href="tel:+8615587237864" onClick={() => setIsMobileMenuOpen(false)}>
                    <Phone className="w-4 h-4 mr-2" />
                    China: +86 15587237864
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="flex-1"
                >
                  <a href="https://wa.me/8615587237864" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp (China)
                  </a>
                </Button>
              </div>

              <Button
                className="mt-6 gold-gradient text-primary-foreground font-bold text-base py-3 mx-5 hover:scale-105 transition-transform"
                onClick={() => setIsMobileMenuOpen(false)}
                asChild
              >
                <Link href="#apply">{t.nav.applyNow}</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
    </>
  )
}
