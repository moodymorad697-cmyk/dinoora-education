"use client"

import { ArrowLeft, Globe, Users, BookOpen, Award, Sparkles, MapPin, Heart, Zap, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { ApplicationForm } from "@/components/application-form"
import { DestinationEnrichment } from "@/components/destination-enrichment"
import { malaysiaEnrichment } from "@/lib/destination-data"

export default function MalaysiaPage() {
  const { t, locale } = useLanguage()
  const country = t.destinations.countries.malaysia

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section with Background Image */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1597211833712-5e41faa202ea?w=1600&q=85"
            alt="Malaysia Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/80" />
          {/* Gold glow effects */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/destinations" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>{locale === "en" ? "Back to Destinations" : "العودة للوجهات"}</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-4 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-amber-300">{locale === "en" ? "Popular Destination" : "وجهة شائعة"}</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-white">{country.name}</h1>
              <p className="text-xl text-amber-400 mb-6 italic font-medium">{country.tagline}</p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">{country.description}</p>
              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-8 py-6 text-lg" asChild>
                <Link href="#apply">
                  {locale === "en" ? "Start Your Application" : "ابدأ طلبك الآن"}
                </Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden border border-slate-800/50 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80"
                alt="Malaysia"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights - Dark Gold Theme */}
      <section className="relative py-24 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-white text-center">
            {locale === "en" ? "Why Malaysia?" : "لماذا ماليزيا؟"}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {country.highlights.map((highlight: string, i: number) => (
              <div key={i} className="group flex gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-amber-500/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <p className="font-semibold text-white group-hover:text-amber-400 transition-colors">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery - Dark Gold Theme */}
      <section className="relative py-24 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              {locale === "en" ? "Life in Malaysia" : "الحياة في ماليزيا"}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {locale === "en" ? "Discover the multicultural paradise and excellent education system" : "اكتشف الجنة متعددة الثقافات ونظام التعليم الممتاز"}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?w=600&q=80",
                alt: "Kuala Lumpur Skyline",
                title: locale === "en" ? "Kuala Lumpur" : "كوالالمبور",
                description: locale === "en" ? "Modern capital city" : "العاصمة الحديثة"
              },
              {
                src: "https://images.unsplash.com/photo-1586380303210-8a2b6d25d5e4?w=600&q=80",
                alt: "Petronas Towers",
                title: locale === "en" ? "Petronas Towers" : "أبراج بتروناس",
                description: locale === "en" ? "Iconic twin towers of Kuala Lumpur" : "أبراج التوأم الشهيرة في كوالالمبور"
              },
              {
                src: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&q=80",
                alt: "Batu Caves",
                title: locale === "en" ? "Batu Caves" : "كهف باتو",
                description: locale === "en" ? "Famous Hindu temple and caves" : "معبد هندوسي وكهوف مشهورة"
              },
              {
                src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=600&q=80",
                alt: "University of Malaya",
                title: locale === "en" ? "Top Universities" : "أفضل الجامعات",
                description: locale === "en" ? "World-class education" : "تعليم عالمي المستوى"
              },
              {
                src: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=600&q=80",
                alt: "Malaysian Culture",
                title: locale === "en" ? "Malay Culture" : "الثقافة الماليزية",
                description: locale === "en" ? "Rich multicultural heritage" : "تراث متعدد الثقافات غني"
              },
              {
                src: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=600&q=80",
                alt: "Tropical Beaches",
                title: locale === "en" ? "Tropical Paradise" : "الجنة الاستوائية",
                description: locale === "en" ? "Beautiful beaches and islands" : "شواطئ وجزر جميلة"
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

      {/* CTA - Dark Gold Theme */}
      <section className="relative py-24 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            {locale === "en" ? "Ready to Study in Malaysia?" : "هل أنت مستعد للدراسة في ماليزيا؟"}
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            {locale === "en" ? "Join thousands of international students in Malaysia's top universities" : "انضم لآلاف الطلاب الدوليين في أفضل جامعات ماليزيا"}
          </p>
          <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-10 py-6 text-lg shadow-lg shadow-amber-500/25" asChild>
            <Link href="#apply">
              {locale === "en" ? "Start Your Application" : "ابدأ طلبك الآن"}
            </Link>
          </Button>
        </div>
      </section>

      {/* Application Form */}
      <ApplicationForm />
    </main>
  )
}
