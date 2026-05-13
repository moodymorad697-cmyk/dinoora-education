"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { translations, Locale, Translations } from "./translations"

type LanguageContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
  dir: "ltr" | "rtl"
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  useEffect(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem("dinoora-locale") as Locale | null
    if (saved && (saved === "en" || saved === "ar")) {
      setLocale(saved)
    }
  }, [])

  useEffect(() => {
    // Save preference to localStorage
    localStorage.setItem("dinoora-locale", locale)
    // Update document attributes
    document.documentElement.lang = locale
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr"
  }, [locale])

  const value: LanguageContextType = {
    locale,
    setLocale,
    t: translations[locale] as Translations,
    dir: locale === "ar" ? "rtl" : "ltr",
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
