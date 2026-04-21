import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Noto_Sans_Arabic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import '../styles/enhancements.css'
import { LanguageProvider } from '@/lib/language-context'
import { ThemeProvider } from '@/components/theme-provider'
import { ContactFloatingBar } from '@/components/contact-floating-bar'

const geist = Inter({ subsets: ["latin"] });
const geistMono = JetBrains_Mono({ subsets: ["latin"] });
const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-noto-arabic'
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://dinoora.com'),
  title: {
    default: 'DINOORA - Your Gateway to Global Education',
    template: '%s | DINOORA Education',
  },
  description: 'Premium student recruitment and study abroad services for China, Malaysia, and Turkey. Expert admission, visa, and housing support for your international education journey.',
  keywords: ['education', 'study abroad', 'universities', 'admissions', 'student services', 'international education', 'China', 'Malaysia', 'Turkey'],
  authors: [{ name: 'DINOORA Team' }],
  creator: 'DINOORA',
  publisher: 'DINOORA',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dinoora.com',
    title: 'DINOORA - Your Gateway to Global Education',
    description: 'Premium student recruitment and study abroad services',
    siteName: 'DINOORA Education',
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
    title: 'DINNOORA Education',
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={`${geist.className} ${notoSansArabic.variable} antialiased font-sans`} suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>
            <main className="min-h-screen bg-background">
              {children}
            </main>
            <ContactFloatingBar />
          </LanguageProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
