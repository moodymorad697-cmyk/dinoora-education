"use client"

import { useLanguage } from "@/lib/language-context"
import { DollarSign, Home, Utensils, Bus, Wifi, GraduationCap, Calendar, CheckCircle2, Quote, Star, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export interface CityInfo {
  name: { en: string; ar: string }
  description: { en: string; ar: string }
  highlight: { en: string; ar: string }
}

export interface UniversityInfo {
  name: string
  ranking: string
  city: { en: string; ar: string }
  programs: { en: string; ar: string }
}

export interface CostItem {
  label: { en: string; ar: string }
  amount: string
  icon: "rent" | "food" | "transport" | "internet" | "tuition"
}

export interface VisaStep {
  title: { en: string; ar: string }
  description: { en: string; ar: string }
  duration: { en: string; ar: string }
}

export interface Testimonial {
  name: string
  university: { en: string; ar: string }
  program: { en: string; ar: string }
  quote: { en: string; ar: string }
  rating: number
}

export interface DestinationEnrichmentProps {
  countryName: { en: string; ar: string }
  topCities: CityInfo[]
  topUniversities: UniversityInfo[]
  livingCosts: CostItem[]
  visaSteps: VisaStep[]
  testimonial: Testimonial
}

const iconMap = {
  rent: Home,
  food: Utensils,
  transport: Bus,
  internet: Wifi,
  tuition: GraduationCap,
}

export function DestinationEnrichment({
  countryName,
  topCities,
  topUniversities,
  livingCosts,
  visaSteps,
  testimonial,
}: DestinationEnrichmentProps) {
  const { locale } = useLanguage()
  const isAr = locale === "ar"

  return (
    <>
      {/* Top Cities to Study */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {isAr ? "أفضل المدن الطلابية" : "Top Student Cities"}
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {isAr ? `ادرس في أبرز مدن ${countryName.ar}` : `Study in ${countryName.en}'s Best Cities`}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isAr
                ? "اكتشف المدن التي تجمع بين الجامعات المرموقة والحياة الطلابية النابضة"
                : "Discover cities that combine prestigious universities with vibrant student life"}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {topCities.map((city, i) => (
              <div
                key={i}
                className="group rounded-2xl card-glow lift-gold p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{isAr ? city.name.ar : city.name.en}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {isAr ? city.description.ar : city.description.en}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                  <Star className="w-3 h-3 fill-primary" />
                  {isAr ? city.highlight.ar : city.highlight.en}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="relative py-20 overflow-hidden bg-card/20">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
              <GraduationCap className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium text-amber-500">
                {isAr ? "أفضل الجامعات" : "Top Universities"}
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {isAr ? "جامعات مرموقة عالمياً" : "Globally Renowned Universities"}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {topUniversities.map((uni, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 rounded-2xl card-glow lift-gold p-6"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl gold-gradient flex items-center justify-center font-bold text-primary-foreground text-lg">
                  #{i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground text-lg mb-1">{uni.name}</h3>
                  <p className="text-sm text-primary mb-2">{uni.ranking}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {isAr ? uni.city.ar : uni.city.en}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GraduationCap className="w-3 h-3" /> {isAr ? uni.programs.ar : uni.programs.en}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Living Costs */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
              <DollarSign className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-medium text-emerald-500">
                {isAr ? "تكاليف المعيشة" : "Cost of Living"}
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {isAr ? "تكاليف معقولة للطلاب الدوليين" : "Affordable for International Students"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isAr ? "متوسط التكاليف الشهرية للطالب" : "Average monthly expenses per student"}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto">
            {livingCosts.map((cost, i) => {
              const Icon = iconMap[cost.icon]
              return (
                <div
                  key={i}
                  className="rounded-2xl card-accent-emerald lift-emerald p-6 text-center transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {isAr ? cost.label.ar : cost.label.en}
                  </p>
                  <p className="text-2xl font-bold text-foreground">{cost.amount}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Visa Process Timeline */}
      <section className="relative py-20 overflow-hidden bg-card/20">
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-500">
                {isAr ? "إجراءات التأشيرة" : "Visa Process"}
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {isAr ? "خطوات الحصول على التأشيرة" : "Visa Application Steps"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isAr ? "نتولى كل التفاصيل نيابةً عنك" : "We handle every detail for you"}
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-primary to-emerald-500 hidden md:block" />

            <div className="space-y-6">
              {visaSteps.map((step, i) => (
                <div
                  key={i}
                  className="relative flex gap-6 group"
                >
                  <div className="flex-shrink-0 relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-primary flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>
                  <div className="flex-1 rounded-2xl card-accent-blue lift-blue p-6 transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h3 className="font-bold text-foreground text-lg">{isAr ? step.title.ar : step.title.en}</h3>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full self-start md:self-auto">
                        <Clock className="w-3 h-3" />
                        {isAr ? step.duration.ar : step.duration.en}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {isAr ? step.description.ar : step.description.en}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonial */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border/50 bg-card/50 backdrop-blur-xl p-8 md:p-12 shadow-2xl">
            <Quote className="w-12 h-12 text-primary mb-6 opacity-50" />

            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
              {isAr ? testimonial.quote.ar : testimonial.quote.en}
            </p>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center text-primary-foreground font-bold text-xl">
                {testimonial.name.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {isAr ? testimonial.program.ar : testimonial.program.en} · {isAr ? testimonial.university.ar : testimonial.university.en}
                </p>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-accent p-8 md:p-12 text-center shadow-2xl">
            <CheckCircle2 className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              {isAr
                ? `جاهز للانطلاق إلى ${countryName.ar}؟`
                : `Ready to Start Your Journey to ${countryName.en}?`}
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              {isAr
                ? "احصل على استشارة مجانية من خبرائنا. لا رسوم خفية، ولا التزامات."
                : "Get a free consultation from our experts. No hidden fees, no obligations."}
            </p>
            <Button size="lg" variant="secondary" className="font-semibold" asChild>
              <Link href="#apply">
                {isAr ? "احصل على استشارة مجانية" : "Get Free Consultation"}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
