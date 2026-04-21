"use client"

import { ArrowLeft, Globe, BookOpen, Award, Zap, TrendingUp, DollarSign, Map, Heart, Shield, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { ApplicationForm } from "@/components/application-form"

export default function ChinaPage() {
  const { t, locale } = useLanguage()
  const country = t.destinations.countries.china

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80"
            alt="China Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/destinations" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>{locale === "en" ? "Back to Destinations" : "العودة للوجهات"}</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4 border border-primary/30">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">{locale === "en" ? "Featured Destination" : "الوجهة المميزة"}</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-foreground">{country.name}</h1>
              <p className="text-xl text-primary mb-6 italic font-medium">{country.tagline}</p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{country.description}</p>
              <Button className="gold-gradient text-primary-foreground px-8 py-6 text-lg" asChild>
                <Link href="#apply">
                  {locale === "en" ? "Start Your Application" : "ابدأ طلبك الآن"}
                </Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1498855926480-d98e83099315?w=800&q=80"
                alt="China"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="relative py-16 overflow-hidden bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {(country as any).facts?.map((fact: any, i: number) => (
              <div key={i} className="text-center p-4 rounded-xl border border-border/50 bg-gradient-to-br from-card/50 to-card/30">
                <div className="text-3xl mb-2">{fact.icon}</div>
                <p className="text-xs md:text-sm font-semibold text-foreground">{fact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why China */}
      {(country as any).whyChina && (
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                {(country as any).whyChina.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {locale === "en" ? "Discover why thousands of students choose China" : "اكتشف لماذا يختار الآلاف من الطلاب الصين"}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {(country as any).whyChina.reasons?.map((reason: any, i: number) => (
                <div key={i} className="rounded-2xl border border-border/50 bg-gradient-to-br from-card/50 to-card/30 p-8 hover:border-primary/50 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Advantages */}
      {(country as any).advantages && (
        <section className="relative py-24 overflow-hidden bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                {locale === "en" ? "Why Students Choose Us" : "لماذا يختار الطلاب الدراسة بنا"}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {(country as any).advantages.map((advantage: string, i: number) => {
                const icons = [DollarSign, Globe, Zap, Heart, TrendingUp, Shield, Award, Map]
                const IconComponent = icons[i % icons.length]
                return (
                  <div key={i} className="flex gap-4 rounded-2xl border border-border/50 bg-card/40 p-6 hover:bg-card/60 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-semibold text-foreground leading-relaxed">{advantage}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Statistics */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-foreground text-center">
            {locale === "en" ? "By The Numbers" : "بالأرقام"}
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Globe, label: locale === "en" ? "Universities" : "جامعات", value: country.stats.universities },
              { icon: BookOpen, label: locale === "en" ? "Programs" : "برامج", value: country.stats.programs },
              { icon: Award, label: locale === "en" ? "Scholarships" : "منح", value: country.stats.scholarships },
            ].map((stat, i) => (
              <div key={i} className="rounded-2xl border border-border/50 bg-card/30 p-8 text-center">
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
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
              {locale === "en" ? "Life in China" : "الحياة في الصين"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {locale === "en" ? "Experience the vibrant student life and stunning landscapes of China" : "استمتع بالحياة الطلابية النابضة بالحياة والمناظر الطبيعية الخلابة في الصين"}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=600&q=80",
                alt: "Tsinghua University Campus",
                title: locale === "en" ? "Top Universities" : "أفضل الجامعات",
                description: locale === "en" ? "World-class education facilities" : "مرافق تعليمية عالمية المستوى"
              },
              {
                src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
                alt: "Beijing Cityscape",
                title: locale === "en" ? "Modern Cities" : "مدن حديثة",
                description: locale === "en" ? "Blend of tradition and innovation" : "مزيج من التقاليد والابتكار"
              },
              {
                src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
                alt: "Chinese Students Studying",
                title: locale === "en" ? "Student Community" : "المجتمع الطلابي",
                description: locale === "en" ? "Diverse international student body" : "جسم طلابي دولي متنوع"
              },
              {
                src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
                alt: "Shanghai Skyline",
                title: locale === "en" ? "Cultural Experience" : "التجربة الثقافية",
                description: locale === "en" ? "Rich history and modern culture" : "تاريخ غني وثقافة حديثة"
              },
              {
                src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80",
                alt: "University Library",
                title: locale === "en" ? "Research Facilities" : "مرافق البحث",
                description: locale === "en" ? "State-of-the-art research centers" : "مراكز بحث متطورة"
              },
              {
                src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
                alt: "Campus Life",
                title: locale === "en" ? "Campus Activities" : "أنشطة الحرم الجامعي",
                description: locale === "en" ? "Vibrant student life and events" : "حياة طلابية نابضة بالحياة"
              }
            ].map((image, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
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

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-12 border border-border/50">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              {locale === "en" ? "Ready to Start Your Journey?" : "هل أنت مستعد لبدء رحلتك؟"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {locale === "en"
                ? "Join thousands of successful students studying in China with DINNOORA's expert guidance."
                : "انضم إلى الآلاف من الطلاب الناجحين يدرسون في الصين مع توجيه دينورا الخبراء."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gold-gradient text-primary-foreground px-8 py-6 text-lg" asChild>
                <Link href="#apply">
                  {locale === "en" ? "Start Your Application" : "ابدأ الآن"}
                </Link>
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg" asChild>
                <Link href="/">
                  {locale === "en" ? "Learn More" : "اعرف المزيد"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <ApplicationForm />
    </main>
  )
}
