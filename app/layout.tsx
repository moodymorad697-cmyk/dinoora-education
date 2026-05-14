import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Cairo, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import '../styles/enhancements.css'
import { LanguageProvider } from '@/lib/language-context'
import { ThemeProvider } from '@/components/theme-provider'
import { FloatingActions } from '@/components/floating-actions'
import { 
  OrganizationSchema, 
  WebsiteSchema, 
  LocalBusinessSchema 
} from '@/components/structured-data'

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
    default: 'DINOORA Education - Study Abroad in China, Malaysia & Turkey | University Admission & Scholarships',
    template: '%s | DINOORA Education - Study Abroad Experts',
  },
  description: 'Study abroad with DINOORA Education. Expert admission services for universities in China, Malaysia & Turkey. CSC scholarships, MBBS programs, engineering degrees. 2,500+ students placed. 98% acceptance rate. 24/7 support.',
  keywords: [
    'study abroad',
    'study in China',
    'study in Malaysia', 
    'study in Turkey',
    'CSC scholarship',
    'MBBS in China',
    'university admission',
    'international students',
    'engineering in China',
    'medicine in China',
    'scholarships for international students',
    'student visa assistance',
    'education consultancy',
    'university application',
    'study abroad agency',
    'Chinese Government Scholarship',
    'low tuition universities',
    'affordable study abroad',
    'student recruitment',
    'education services'
  ],
  authors: [{ name: 'DINOORA Education Team', url: 'https://dinoora.com' }],
  creator: 'DINOORA Education',
  publisher: 'DINOORA Education',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    alternateLocale: ['en_US', 'zh_CN'],
    url: 'https://dinoora.com',
    siteName: 'DINOORA Education',
    title: 'DINOORA Education - Study Abroad in China, Malaysia & Turkey',
    description: 'Expert university admission services. CSC scholarships, MBBS programs, engineering degrees. 2,500+ students placed. 98% success rate.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DINOORA Education - Study Abroad Services for China, Malaysia, Turkey',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dinoora',
    creator: '@dinoora',
    title: 'DINOORA Education - Study Abroad in China, Malaysia & Turkey',
    description: 'Expert admission services. 2,500+ students placed. 98% success rate.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://dinoora.com',
    languages: {
      'en': 'https://dinoora.com/en',
      'ar': 'https://dinoora.com/ar',
      'zh': 'https://dinoora.com/zh',
    },
  },
  category: 'Education',
  classification: 'Educational Services',
  referrer: 'origin-when-cross-origin',
  generator: 'Next.js 15',
  applicationName: 'DINOORA Education',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'DINOORA Education',
    startupImage: [
      {
        url: '/apple-splash-2048-2732.jpg',
        media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)',
      },
    ],
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)', sizes: '32x32' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#f59e0b' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || '',
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION || '',
    other: {
      me: ['admin@dinoora.com'],
    },
  },
  other: {
    'msapplication-TileColor': '#f59e0b',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#0f172a',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'DINOORA Education',
    'mobile-web-app-capable': 'yes',
    'format-detection': 'telephone=yes',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  colorScheme: 'dark light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
        <LocalBusinessSchema />
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
