"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { MessageCircle, Send, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"

// Unified WhatsApp Button
export function WhatsAppButton({ 
  variant = "default",
  size = "default",
  className = "",
  showIcon = true,
  label
}: { 
  variant?: "default" | "outline" | "ghost" | "gold"
  size?: "default" | "sm" | "lg"
  className?: string
  showIcon?: boolean
  label?: string
}) {
  const { locale } = useLanguage()
  
  const defaultLabel = locale === "ar" ? "تواصل واتساب" : "Chat on WhatsApp"
  const whatsappNumber = "8615587237864"
  
  const baseStyles = "font-semibold transition-all duration-300"
  
  const variants = {
    default: "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white shadow-lg shadow-green-500/20 hover:shadow-green-500/30",
    outline: "border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
    ghost: "text-green-500 hover:bg-green-500/10",
    gold: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-lg shadow-amber-500/20"
  }
  
  return (
    <Button
      asChild
      size={size}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <a 
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        {showIcon && <MessageCircle className={`${size === "lg" ? "w-5 h-5" : size === "sm" ? "w-4 h-4" : "w-4 h-4"}`} />}
        {label || defaultLabel}
      </a>
    </Button>
  )
}

// Unified Apply Now Button
export function ApplyButton({ 
  variant = "gold",
  size = "default",
  className = "",
  showIcon = true,
  label,
  href = "#apply"
}: { 
  variant?: "default" | "outline" | "ghost" | "gold"
  size?: "default" | "sm" | "lg"
  className?: string
  showIcon?: boolean
  label?: string
  href?: string
}) {
  const { locale } = useLanguage()
  
  const defaultLabel = locale === "ar" ? "قدّم طلبك" : "Apply Now"
  
  const baseStyles = "font-bold transition-all duration-300 group"
  
  const variants = {
    default: "bg-primary hover:bg-primary/90 text-primary-foreground",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    ghost: "text-primary hover:bg-primary/10",
    gold: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30"
  }
  
  return (
    <Button
      asChild
      size={size}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <Link href={href} className="flex items-center gap-2">
        {showIcon && <Send className={`${size === "lg" ? "w-5 h-5" : size === "sm" ? "w-4 h-4" : "w-4 h-4"} group-hover:translate-x-1 transition-transform`} />}
        {label || defaultLabel}
        <ArrowRight className={`${size === "lg" ? "w-5 h-5" : size === "sm" ? "w-4 h-4" : "w-4 h-4"} group-hover:translate-x-1 transition-transform ${locale === "ar" ? "rotate-180" : ""}`} />
      </Link>
    </Button>
  )
}

// Unified Consultation Button
export function ConsultationButton({ 
  variant = "outline",
  size = "default",
  className = "",
  showIcon = true,
  label,
  href = "#apply"
}: { 
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  className?: string
  showIcon?: boolean
  label?: string
  href?: string
}) {
  const { locale } = useLanguage()
  
  const defaultLabel = locale === "ar" ? "احصل على استشارة" : "Get Consultation"
  
  const baseStyles = "font-semibold transition-all duration-300"
  
  const variants = {
    default: "bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20",
    outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    ghost: "text-blue-500 hover:bg-blue-500/10"
  }
  
  return (
    <Button
      asChild
      size={size}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <Link href={href} className="flex items-center gap-2">
        {showIcon && <Phone className={`${size === "lg" ? "w-5 h-5" : size === "sm" ? "w-4 h-4" : "w-4 h-4"}`} />}
        {label || defaultLabel}
      </Link>
    </Button>
  )
}

// CTA Group - Use this for consistent CTA sections
export function CTAGroup({ 
  className = "",
  showConsultation = true
}: { 
  className?: string
  showConsultation?: boolean
}) {
  const { locale } = useLanguage()
  
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <ApplyButton size="lg" />
      <WhatsAppButton variant="outline" size="lg" />
      {showConsultation && (
        <ConsultationButton variant="ghost" size="lg" />
      )}
    </div>
  )
}

// Floating CTA Bar - Alternative to contact-floating-bar
export function FloatingCTA() {
  const { locale } = useLanguage()
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="hidden sm:block">
          <p className="text-sm text-slate-400">
            {locale === "ar" ? "🎓 جاهز للدراسة في الخارج؟" : "🎓 Ready to study abroad?"}
          </p>
        </div>
        <div className="flex items-center gap-3 flex-1 sm:flex-initial justify-end">
          <WhatsAppButton variant="default" size="sm" className="flex-1 sm:flex-initial" />
          <ApplyButton variant="gold" size="sm" className="flex-1 sm:flex-initial" />
        </div>
      </div>
    </div>
  )
}
