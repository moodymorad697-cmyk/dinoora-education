"use client"

import { ArrowLeft, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

const destinations = ["china", "malaysia", "turkey"] as const

export default function DestinationsPage() {
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
            {t.destinations.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {t.destinations.description}
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {destinations.map((key) => {
              const country = t.destinations.countries[key as keyof typeof t.destinations.countries]
              const images: Record<typeof key, string> = {
                china: "https://images.unsplash.com/photo-1498855926480-d98e83099315?w=500&q=80",
                malaysia: "https://images.unsplash.com/photo-1579720643554-f4c1b8e8e6a7?w=500&q=80",
                turkey: "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=500&q=80",
              }

              return (
                <Link
                  key={key}
                  href={`/destinations/${key}`}
                  className="group rounded-3xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/30 hover:bg-card/50 hover:shadow-2xl"
                >
                  {/* Background Image */}
                  <div className="relative h-48 mb-6 -mx-8 -mt-8 rounded-b-3xl overflow-hidden">
                    <Image
                      src={images[key]}
                      alt={country.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">{country.name}</h2>
                    <p className="text-sm text-primary mb-4 italic">{country.tagline}</p>
                    <p className="text-muted-foreground text-sm mb-6 line-clamp-3">{country.description}</p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="rounded-lg bg-secondary/50 p-2 text-center">
                        <div className="font-bold text-foreground">{country.stats.universities}</div>
                        <div className="text-muted-foreground">{locale === "en" ? "Universities" : "جامعات"}</div>
                      </div>
                      <div className="rounded-lg bg-secondary/50 p-2 text-center">
                        <div className="font-bold text-foreground">{country.stats.programs}</div>
                        <div className="text-muted-foreground">{locale === "en" ? "Programs" : "برامج"}</div>
                      </div>
                      <div className="rounded-lg bg-secondary/50 p-2 text-center">
                        <div className="font-bold text-primary text-xs">{locale === "en" ? "Funded" : "ممول"}</div>
                        <div className="text-muted-foreground text-xs">{locale === "en" ? "Scholarships" : "منح"}</div>
                      </div>
                    </div>
                  </div>
                </Link>
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
            {locale === "en" ? "Choose Your Destination" : "اختر وجهتك"}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {locale === "en"
              ? "Each destination offers unique advantages. Click above to explore programs and opportunities."
              : "كل وجهة توفر مزايا فريدة. اضغط أعلاه لاستكشاف البرامج والفرص."}
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
