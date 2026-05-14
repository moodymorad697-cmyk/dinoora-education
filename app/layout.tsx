import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Cairo, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import '../styles/enhancements.css'
import { LanguageProvider } from '@/lib/language-context'
import { ThemeProvider } from '@/components/theme-provider'
import { FloatingActions } from '@/components/floating-actions'

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: '--font-display',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: '--font-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://dinoora.com'),
  title: {
    default: 'DINOORA - Your Gateway to Global Education',
    template: '%s | DINOORA Education',
  },
  description: 'Premium student recruitment and study abroad services for China, Malaysia, and Turkey. Expert admission, visa, and housing support for your international education journey.',
  keywords: ['education', 'study abroad', 'universities', 'admissions', 'student services', 'international education', 'China', 'Malaysia', 'Turkey', 'scholarships', 'visa assistance', 'student recruitment'],
  authors: [{ name: 'DINOORA Team' }],
  creator: 'DINOORA',
  publisher: 'DINOORA',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://dinoora.com',
    title: 'DINOORA - Your Gateway to Global Education',
    description: 'Premium student recruitment and study abroad services for China, Malaysia, and Turkey',
    siteName: 'DINOORA Education',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DINOORA Education - Study Abroad Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DINOORA - Your Gateway to Global Education',
    description: 'Premium student recruitment and study abroad services',
    images: ['/og-image.jpg'],
  },
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'DINOORA Education',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'DINOORA Education',
    description: 'Premium student recruitment and study abroad services for China, Malaysia, and Turkey',
    url: 'https://dinoora.com',
    logo: 'https://dinoora.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+8615587237864',
      contactType: 'customer service',
      availableLanguage: ['Arabic', 'English', 'Chinese']
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CN',
      addressLocality: 'Yiwu',
      addressRegion: 'Zhejiang Province'
    },
    sameAs: [
      'https://www.facebook.com/dinoora',
      'https://www.twitter.com/dinoora',
      'https://www.instagram.com/dinoora'
    ],
    offers: {
      '@type': 'Offer',
      category: 'Educational Services',
      name: 'Study Abroad Programs',
      description: 'Complete student recruitment and admission services'
    }
  }

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jakarta.variable} ${outfit.variable} ${cairo.variable} antialiased font-sans`} suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen bg-background">
              {children}
            </div>
            <FloatingActions />
          </LanguageProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
