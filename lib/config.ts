/**
 * Application Configuration
 * Centralized configuration for the DINNOORA Education Platform
 */

export const config = {
  site: {
    name: 'DINOORA Education',
    shortName: 'DINOORA',
    description: 'Premium student recruitment and study abroad services',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://dinnoora.com',
    author: 'DINNOORA Team',
    ogImage: '/og-image.png',
  },

  contact: {
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+8615587237864',
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'maomoody524@gmail.com',
    phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || '+8615587237864',
    address: 'Yiwu City, Zhejiang Province, China',
  },

  social: {
    twitter: 'https://twitter.com/dinoora',
    linkedin: 'https://linkedin.com/company/dinoora',
    facebook: 'https://facebook.com/dinoora',
    instagram: 'https://instagram.com/dinoora',
  },

  features: {
    analytics: process.env.NODE_ENV === 'production',
    maintenance: process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true',
  },

  locales: {
    default: 'en',
    supported: ['en', 'ar'],
  },

  destinations: [
    { code: 'CN', name: 'China', flag: '🇨🇳' },
    { code: 'MY', name: 'Malaysia', flag: '🇲🇾' },
    { code: 'TR', name: 'Turkey', flag: '🇹🇷' },
  ],

  stats: {
    studentsPlaced: '500+',
    partnerUniversities: '50+',
    successRate: '95%',
    yearsExperience: '5+',
  },
} as const

export type Config = typeof config
