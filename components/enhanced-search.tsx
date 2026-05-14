"use client"

import { useState, useRef, useEffect } from "react"
import { Search, X, Sparkles, TrendingUp, ArrowRight, GraduationCap, MapPin, Briefcase, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

interface EnhancedSearchProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const searchData = {
  services: [
    { id: "admission", title: { en: "University Admission", ar: "القبول الجامعي" }, icon: GraduationCap, href: "/services/admission", desc: { en: "Priority applications to 500+ universities", ar: "طلبات ذات أولوية لـ 500+ جامعة" } },
    { id: "visa", title: { en: "Visa Processing", ar: "معالجة التأشيرة" }, icon: Briefcase, href: "/services/visa", desc: { en: "98% success rate guarantee", ar: "ضمان نسبة نجاح 98%" } },
    { id: "documents", title: { en: "Document Services", ar: "خدمات الوثائق" }, icon: Zap, href: "/services/documents", desc: { en: "Translation & attestation", ar: "ترجمة وتصديق" } },
    { id: "accommodation", title: { en: "Accommodation", ar: "السكن" }, icon: MapPin, href: "/services/accommodation", desc: { en: "Verified housing near campus", ar: "سكن معتمد قرب الحرم" } },
    { id: "airport", title: { en: "VIP Airport", ar: "VIP المطار" }, icon: Star, href: "/services/airport", desc: { en: "24/7 arrival support", ar: "دعم وصول 24/7" } },
  ],
  destinations: [
    { id: "china", title: { en: "Study in China", ar: "الدراسة في الصين" }, icon: MapPin, href: "/destinations/china", desc: { en: "World-class education", ar: "تعليم عالمي المستوى" } },
    { id: "malaysia", title: { en: "Study in Malaysia", ar: "الدراسة في ماليزيا" }, icon: MapPin, href: "/destinations/malaysia", desc: { en: "Affordable quality education", ar: "تعليم ممتاز بأسعار معقولة" } },
    { id: "turkey", title: { en: "Study in Turkey", ar: "الدراسة في تركيا" }, icon: MapPin, href: "/destinations/turkey", desc: { en: "Rich cultural experience", ar: "تجربة ثقافية غنية" } },
  ],
  popular: [
    { id: "scholarship", title: { en: "CSC Scholarship 2025", ar: "منحة CSC 2025" }, icon: Sparkles, href: "#programs", desc: { en: "Full government scholarship", ar: "منحة حكومية كاملة" } },
    { id: "medicine", title: { en: "MBBS Programs", ar: "برامج الطب" }, icon: TrendingUp, href: "#programs", desc: { en: "Study medicine in China", ar: "دراسة الطب في الصين" } },
    { id: "engineering", title: { en: "Engineering Programs", ar: "برامج الهندسة" }, icon: Zap, href: "#programs", desc: { en: "Top engineering universities", ar: "أفضل جامعات الهندسة" } },
  ]
}

export function EnhancedSearch({ isOpen, setIsOpen }: EnhancedSearchProps) {
  const { locale, dir } = useLanguage()
  const [query, setQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<"all" | "services" | "destinations" | "popular">("all")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [setIsOpen])

  const allResults = [
    ...searchData.services.map(item => ({ ...item, category: "services" as const })),
    ...searchData.destinations.map(item => ({ ...item, category: "destinations" as const })),
    ...searchData.popular.map(item => ({ ...item, category: "popular" as const })),
  ]

  const filteredResults = query.length > 0
    ? allResults.filter(item => 
        item.title[locale].toLowerCase().includes(query.toLowerCase()) ||
        item.desc[locale].toLowerCase().includes(query.toLowerCase())
      )
    : activeCategory === "all" ? allResults.slice(0, 6) : allResults.filter(item => item.category === activeCategory)

  const getCategoryLabel = (cat: string) => {
    const labels = {
      all: { en: "All Results", ar: "جميع النتائج" },
      services: { en: "Services", ar: "الخدمات" },
      destinations: { en: "Destinations", ar: "الوجهات" },
      popular: { en: "Popular", ar: "الأكثر زيارة" },
    }
    return labels[cat as keyof typeof labels]?.[locale] || labels.all[locale]
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="text-muted-foreground hover:text-foreground transition-all hover:bg-secondary/50 rounded-lg px-3 py-2 duration-300"
      >
        <Search className="w-5 h-5" />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Search Modal */}
          <div className={`fixed top-20 ${dir === "rtl" ? "right-4 md:right-20" : "left-4 md:left-20"} right-auto w-[calc(100%-2rem)] md:w-[600px] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-50 overflow-hidden animate-in slide-in-from-top-4`}>
            {/* Header */}
            <div className="p-4 border-b border-slate-800">
              <div className="relative">
                <Search className={`absolute ${dir === "rtl" ? "right-4" : "left-4"} top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400`} />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={locale === "en" ? "Search universities, services, programs..." : "ابحث في الجامعات، الخدمات، البرامج..."}
                  className={`w-full ${dir === "rtl" ? "pr-12 pl-12" : "pl-12 pr-12"} py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-white placeholder:text-slate-500`}
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className={`absolute ${dir === "rtl" ? "left-4" : "right-4"} top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white transition-colors`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="px-4 py-2 border-b border-slate-800">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {["all", "services", "destinations", "popular"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setActiveCategory(cat as typeof activeCategory); setQuery(""); }}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      activeCategory === cat
                        ? "bg-amber-500 text-slate-950"
                        : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
                    }`}
                  >
                    {getCategoryLabel(cat)}
                  </button>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="max-h-[400px] overflow-y-auto">
              {filteredResults.length === 0 ? (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-800 flex items-center justify-center">
                    <Search className="w-8 h-8 text-slate-500" />
                  </div>
                  <p className="text-slate-400">
                    {locale === "en" ? "No results found. Try different keywords." : "لا توجد نتائج. جرب كلمات مفتاحية مختلفة."}
                  </p>
                </div>
              ) : (
                <div className="p-2">
                  {filteredResults.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-800 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-amber-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-white group-hover:text-amber-400 transition-colors">
                              {item.title[locale]}
                            </h4>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                              {getCategoryLabel(item.category)}
                            </span>
                          </div>
                          <p className="text-sm text-slate-400">{item.desc[locale]}</p>
                        </div>
                        <ArrowRight className={`w-5 h-5 text-slate-500 group-hover:text-amber-400 transition-all ${dir === "rtl" ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} />
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-slate-800 bg-slate-900/50">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{locale === "en" ? "Press ESC to close" : "اضغط ESC للإغلاق"}</span>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>{locale === "en" ? "Smart Search by Dinoora" : "البحث الذكي من دينورا"}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
