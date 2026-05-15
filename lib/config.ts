/**
 * Application Configuration
 * Centralized configuration for the DINOORA Education Platform
 */

export const config = {
  site: {
    name: 'DINOORA Education',
    shortName: 'DINOORA',
    description: 'Premium student recruitment and study abroad services',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://dinoora.com',
    author: 'DINOORA Team',
    ogImage: '/og-image.png',
  },

  contact: {
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+8615587237864',
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'maomoody524@gmail.com',
    phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || '+8615587237864',
    addresses: {
      china: {
        office: 'Room 201, 2nd Floor, Building 2, No. 37',
        area: 'Getang Village, Jiangdong Street',
        city: 'Yiwu City, Jinhua City',
        province: 'Zhejiang Province',
        country: 'China',
        mapsLink: 'https://maps.google.com/?q=Yiwu+City+Zhejiang+Province+China',
      },
      malaysia: {
        office: 'Tower 5, SkyPark @CYBERJAYA',
        level: 'Level 4 - 07',
        city: 'Cyberjaya',
        state: 'Selangor',
        country: 'Malaysia',
        mapsLink: 'https://maps.google.com/?q=SkyPark+Cyberjaya+Malaysia',
      },
    },
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
    default: 'ar',
    supported: ['ar', 'en'],
  },

  destinations: [
    { code: 'CN', name: 'China', flag: '🇨🇳' },
    { code: 'MY', name: 'Malaysia', flag: '🇲🇾' },
    { code: 'TR', name: 'Turkey', flag: '🇹🇷' },
  ],

  stats: {
    scholarshipApplications: '2000+',
    partnerUniversities: '500+',
    successRate: '98%',
    yearsExperience: '5+',
  },
} as const

export type Config = typeof config
