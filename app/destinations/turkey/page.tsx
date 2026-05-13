"use client"

import { ArrowLeft, Globe, Users, BookOpen, Award } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { ApplicationForm } from "@/components/application-form"
import { DynamicHeroImage } from "@/components/dynamic-hero-image"
import { DestinationEnrichment } from "@/components/destination-enrichment"
import { turkeyEnrichment } from "@/lib/destination-data"

const turkeyHeroImages = [
  "https://images.unsplash.com/photo-1531219572328-a0171b4448a3?w=1200&q=80",
  "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=80",
  "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
  "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&q=80",
]

export default function TurkeyPage() {
  const { t, locale } = useLanguage()
  const country = t.destinations.countries.turkey

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
              <DynamicHeroImage images={turkeyHeroImages} alt="Turkey" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-foreground text-center">
            {locale === "en" ? "Why Turkey?" : "لماذا تركيا؟"}
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
              {locale === "en" ? "Life in Turkey" : "الحياة في تركيا"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {locale === "en" ? "Experience the perfect blend of East and West with world-class education" : "استمتع بالمزيج المثالي بين الشرق والغرب مع التعليم عالمي المستوى"}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80",
                alt: "Istanbul University",
                title: locale === "en" ? "Historic Universities" : "الجامعات التاريخية",
                description: locale === "en" ? "Centuries-old institutions of excellence" : "مؤسسات التميز التي يعود تاريخها لقرون"
              },
              {
                src: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=600&q=80",
                alt: "Istanbul Bosphorus",
                title: locale === "en" ? "Strategic Location" : "الموقع الاستراتيجي",
                description: locale === "en" ? "Bridge between Europe and Asia" : "جسر بين أوروبا وآسيا"
              },
              {
                src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
                alt: "Turkish Students",
                title: locale === "en" ? "Vibrant Community" : "المجتمع النابض",
                description: locale === "en" ? "Welcoming and diverse student body" : "جسم طلابي مرحب ومتنوع"
              },
              {
                src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
                alt: "Turkish Landscapes",
                title: locale === "en" ? "Natural Wonders" : "العجائب الطبيعية",
                description: locale === "en" ? "From beaches to mountains" : "من الشواطئ إلى الجبال"
              },
              {
                src: "https://images.unsplash.com/photo-1585506942812-e72b29cef752?w=600&q=80",
                alt: "Modern Campus",
                title: locale === "en" ? "Modern Facilities" : "المرافق الحديثة",
                description: locale === "en" ? "State-of-the-art learning spaces" : "مساحات تعلم متطورة"
              },
              {
                src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
                alt: "Campus Activities",
                title: locale === "en" ? "Student Activities" : "أنشطة الطلاب",
                description: locale === "en" ? "Rich cultural and social events" : "أحداث ثقافية واجتماعية غنية"
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
      <DestinationEnrichment {...turkeyEnrichment} />

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            {locale === "en" ? "Ready to Study in Turkey?" : "هل أنت مستعد للدراسة في تركيا؟"}
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
