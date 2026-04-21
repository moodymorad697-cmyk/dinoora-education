"use client"

import { ArrowLeft, FileStack, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { ApplicationForm } from "@/components/application-form"

export default function DocumentsPage() {
  const { t, locale } = useLanguage()
  const service = t.services.items.documents

  const docs = [
    { en: "Transcripts & Certificates", ar: "السجلات والشهادات" },
    { en: "Passport Copies", ar: "نسخ جواز السفر" },
    { en: "Medical Reports", ar: "التقارير الطبية" },
    { en: "Bank Statements", ar: "كشوف الحسابات البنكية" },
    { en: "Recommendation Letters", ar: "خطابات التوصية" },
    { en: "Personal Statements", ar: "البيانات الشخصية" },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>{locale === "en" ? "Back to Services" : "العودة للخدمات"}</span>
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-400">
              <FileStack className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">{service.title}</h1>
              <p className="text-lg text-muted-foreground mt-2">{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents We Handle */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
            {locale === "en" ? "Complete Document Services" : "خدمات الوثائق الشاملة"}
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {docs.map((doc, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-border/50 bg-card/30 p-4 backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{locale === "en" ? doc.en : doc.ar}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: locale === "en" ? "Translation" : "الترجمة",
                items: [
                  locale === "en" ? "English to Chinese" : "إنجليزي إلى صيني",
                  locale === "en" ? "Arabic to English" : "عربي إلى إنجليزي",
                  locale === "en" ? "Certified translators" : "مترجمون معتمدون",
                ],
              },
              {
                title: locale === "en" ? "Verification" : "التحقق",
                items: [
                  locale === "en" ? "Embassy attestation" : "تصديق السفارة",
                  locale === "en" ? "Ministry processing" : "معالجة الوزارة",
                  locale === "en" ? "Express services" : "خدمات سريعة",
                ],
              },
            ].map((section, i) => (
              <div key={i} className="rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            {locale === "en" ? "Let Us Handle Your Documents" : "دعنا نتولى وثائقك"}
          </h2>
          <Button className="gold-gradient text-primary-foreground px-8 py-6 text-lg" asChild>
            <Link href="#apply">
              {t.services.cta}
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
