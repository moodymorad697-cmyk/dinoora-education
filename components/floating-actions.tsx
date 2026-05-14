"use client"

import { useState, useEffect } from "react"
import { MessageCircle, Phone, ArrowUp, X, Sparkles, Calendar } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { motion, AnimatePresence } from "framer-motion"

export function FloatingActions() {
  const { locale } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const actions = [
    {
      icon: MessageCircle,
      label: locale === "en" ? "WhatsApp" : "واتساب",
      href: "https://wa.me/8615587237864",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500",
    },
    {
      icon: Phone,
      label: locale === "en" ? "Call Now" : "اتصل الآن",
      href: "tel:+8615587237864",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500",
    },
    {
      icon: Calendar,
      label: locale === "en" ? "Book Consultation" : "احجز استشارة",
      href: "#apply",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500",
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex flex-col gap-3"
          >
            {actions.map((action, index) => {
              const Icon = action.icon
              return (
                <motion.a
                  key={index}
                  href={action.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                  target={action.href.startsWith("http") ? "_blank" : undefined}
                  rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-3 group`}
                >
                  <span className="text-sm font-medium text-white bg-slate-900/80 px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {action.label}
                  </span>
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${action.color} flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </motion.a>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-slate-700 transition-colors shadow-lg"
          >
            <ArrowUp className="w-6 h-6 text-amber-400" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isOpen 
            ? "bg-slate-800 border border-slate-700" 
            : "bg-gradient-to-br from-amber-500 to-orange-500 shadow-amber-500/30"
        }`}
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <div className="relative">
            <Sparkles className="w-7 h-7 text-white" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          </div>
        )}
      </motion.button>
    </div>
  )
}
