"use client"

import { ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

const serviceKeys = ["admission", "visa", "documents", "accommodation"] as const

export default function ServicesPage() {
  const { t, dir, locale } = useLanguage()

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>{locale === "en" ? "Back Home" : "العودة للرئيسية"}</span>
          </Link>

          <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6 text-foreground">
            {t.services.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {t.services.description}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {serviceKeys.map((key) => {
              const service = t.services.items[key]
              const servicePath = key

              return (
                <div
                  key={key}
                  className="group rounded-3xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 hover:shadow-2xl transition-all duration-300"
                >
                  <h2 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  {/* Benefits List */}
                  <ul className="space-y-3 mb-8">
                    {[
                      locale === "en" ? "Expert guidance" : "إرشادة خبراء",
                      locale === "en" ? "Fast processing" : "معالجة سريعة",
                      locale === "en" ? "100% support" : "دعم كامل",
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Button className="gold-gradient text-primary-foreground w-full" asChild>
                    <Link href={`/services/${servicePath}`}>
                      {locale === "en" ? "Learn More" : "اعرف أكثر"}
                    </Link>
                  </Button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            {locale === "en" ? "Ready to Get Started?" : "هل أنت مستعد للبدء؟"}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {locale === "en"
              ? "Contact us today for expert consultation with our specialists."
              : "تواصل معنا اليوم للحصول على استشارة خبراء مع متخصصينا."}
          </p>
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
