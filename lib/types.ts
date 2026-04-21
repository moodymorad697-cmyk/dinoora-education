/**
 * Type Definitions
 * Core types for the DINOORA Education Platform
 */

export type Locale = 'en' | 'ar'

export interface NavItem {
  href: string
  label: string
}

export interface Stat {
  icon: React.ComponentType<{ className?: string }>
  value: string
  label: string
}

export interface University {
  id: string
  name: string
  country: string
  logo: string
  description: string
  programs: number
}

export interface Program {
  id: string
  name: string
  level: 'Bachelor' | 'Master' | 'PhD'
  duration: string
  tuition: string
}

export interface Testimonial {
  id: string
  name: string
  image: string
  university: string
  country: string
  quote: string
  rating: number
}

export interface Service {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  benefits: string[]
}

export interface ApplicationForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  educationLevel: string
  desiredCountry: string
  message?: string
}

export interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
  dir: 'ltr' | 'rtl'
}

export interface Translations {
  nav: {
    whyUs: string
    howItWorks: string
    services: string
    destinations: string
    programs: string
    testimonials: string
    applyNow: string
  }
  hero: {
    badge: string
    title: string
    titleHighlight: string
    titleEnd: string
    description: string
    applyNow: string
    chatWhatsApp: string
    studentsPlaced: string
    partnerUniversities: string
    successRate: string
    yearsExperience: string
  }
  [key: string]: any
}
