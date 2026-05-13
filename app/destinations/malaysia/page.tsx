"use client"

import { ArrowLeft, Globe, Users, BookOpen, Award } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { ApplicationForm } from "@/components/application-form"
import { DynamicHeroImage } from "@/components/dynamic-hero-image"
import { DestinationEnrichment } from "@/components/destination-enrichment"
import { malaysiaEnrichment } from "@/lib/destination-data"

const malaysiaHeroImages = [
  "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?w=1200&q=80",
  "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1200&q=80",
  "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=80",
  "https://images.unsplash.com/photo-1530577197743-7adf14294584?w=1200&q=80",
]

export default function MalaysiaPage() {
  const { t, locale } = useLanguage()
  const country = t.destinations.countries.malaysia

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/destinations" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>{locale === "en" ? "Back to Destinations" : "العودة للوجهات"}</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-foreground">{country.name}</h1>
              <p className="text-xl text-primary mb-6 italic">{country.tagline}</p>
              <p className="text-lg text-muted-foreground mb-8">{country.description}</p>
            </div>
            <div className="relative h-96">
              <DynamicHeroImage images={malaysiaHeroImages} alt="Malaysia" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
            {locale === "en" ? "Why Malaysia?" : "لماذا ماليزيا؟"}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {country.highlights.map((highlight: string, i: number) => (
              <div key={i} className="flex gap-4 rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm">
                <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              {locale === "en" ? "Life in Malaysia" : "الحياة في ماليزيا"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {locale === "en" ? "Discover the multicultural paradise and excellent education system" : "اكتشف الجنة متعددة الثقافات ونظام التعليم الممتاز"}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80",
                alt: "University of Malaya",
                title: locale === "en" ? "Premier Universities" : "الجامعات المتميزة",
                description: locale === "en" ? "Internationally recognized institutions" : "مؤسسات معترف بها دولياً"
              },
              {
                src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
                alt: "Kuala Lumpur City",
                title: locale === "en" ? "Modern Metropolis" : "المدينة الحديثة",
                description: locale === "en" ? "Dynamic business and cultural hub" : "مركز أعمال وثقافي ديناميكي"
              },
              {
                src: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=600&q=80",
                alt: "Malaysian Students",
                title: locale === "en" ? "Diverse Community" : "المجتمع المتنوع",
                description: locale === "en" ? "Multicultural student environment" : "بيئة طلابية متعددة الثقافات"
              },
              {
                src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
                alt: "Malaysian Nature",
                title: locale === "en" ? "Natural Beauty" : "الجمال الطبيعي",
                description: locale === "en" ? "Tropical paradise and beaches" : "الجنة الاستوائية والشواطئ"
              },
              {
                src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80",
                alt: "University Campus",
                title: locale === "en" ? "Campus Facilities" : "مرافق الحرم الجامعي",
                description: locale === "en" ? "Modern learning environments" : "بيئات تعلم حديثة"
              },
              {
                src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80",
                alt: "Cultural Heritage",
                title: locale === "en" ? "Cultural Heritage" : "التراث الثقافي",
                description: locale === "en" ? "Rich Malay, Chinese, and Indian cultures" : "ثقافات الملايو والصينيين والهنود الغنية"
              }
            ].map((image, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rich Content: Cities, Universities, Costs, Visa, Testimonial */}
      <DestinationEnrichment {...malaysiaEnrichment} />

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            {locale === "en" ? "Ready to Study in Malaysia?" : "هل أنت مستعد للدراسة في ماليزيا؟"}
          </h2>
          <Button className="gold-gradient text-primary-foreground px-8 py-6 text-lg" asChild>
            <Link href="#apply">
              {t.services.cta}
            </Link>
          </Button>
        </div>
      </section>

      {/* Application Form */}
      <ApplicationForm />
    </main>
  )
}
