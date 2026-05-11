"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { Menu, X, Globe, GraduationCap, Search, Phone, MessageCircle } from "lucide-react"

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
    { href: "#why-us", label: t.nav.whyUs, icon: "⭐" },
    { href: "#how-it-works", label: t.nav.howItWorks, icon: "📋" },
    { href: "/services", label: t.nav.services, icon: "🛠️" },
    { href: "/destinations", label: t.nav.destinations, icon: "🌍" },
    { href: "/quote", label: t.nav.getQuote || "Get Quote", icon: "💰", highlight: true },
    { href: "#testimonials", label: t.nav.testimonials, icon: "💬" },
  ]

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "ar" : "en")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "header-enhanced py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 hover:shadow-xl hover:shadow-primary/40">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-text">DINOORA</span>
              <span className="text-[10px] text-muted-foreground -mt-1 tracking-wider">EDUCATION</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-5 py-3 text-base font-semibold transition-all duration-300 rounded-lg group ${
                  item.highlight
                    ? "gold-gradient text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/25"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className={`text-sm ${item.highlight ? "opacity-100" : "opacity-70 group-hover:opacity-100"} transition-opacity`}>{item.icon}</span>
                  {item.label}
                </span>
                {!item.highlight && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search Bar */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-muted-foreground hover:text-foreground transition-all hover:bg-secondary/50 rounded-lg px-3 py-2 duration-300"
              >
                <Search className="w-5 h-5" />
              </Button>
              {isSearchOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-card border border-border rounded-xl shadow-lg p-4 z-50 animate-in slide-in-from-top-2">
                  <input
                    type="text"
                    placeholder={t.nav.searchPlaceholder || "Search services, destinations..."}
                    className="w-full px-4 py-2 bg-secondary/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                </div>
              )}
            </div>

            {/* Contact Buttons */}
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-muted-foreground hover:text-foreground transition-all hover:bg-secondary/50 rounded-lg px-3 py-2 duration-300"
              >
                <a href="tel:+8615587237864" aria-label="Call us">
                  <Phone className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-muted-foreground hover:text-foreground transition-all hover:bg-secondary/50 rounded-lg px-3 py-2 duration-300"
              >
                <a href="https://wa.me/8615587237864" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-base font-semibold transition-all hover:bg-secondary/50 rounded-lg px-4 py-2 duration-300"
            >
              <Globe className="w-5 h-5" />
              <span>{locale === "en" ? "AR" : "EN"}</span>
            </Button>

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
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-5 py-4 text-lg font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-300 ${dir === "rtl" ? "text-right" : "text-left"} flex items-center gap-3 group`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
                  {item.label}
                </Link>
              ))}

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
                    {t.nav.callUs || "Call Us"}
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
                    WhatsApp
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
  )
}
