"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Building2, BookOpen, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { LazyRotatingGlobe } from "@/components/lazy/lazy-3d"

export function Destinations() {
  const { t, dir } = useLanguage()

  const destinations = [
    {
      key: "china" as const,
      image: "/images/china-campus.jpg",
      featured: true,
    },
    {
      key: "malaysia" as const,
      image: "/images/malaysia-campus.jpg",
      featured: false,
    },
    {
      key: "turkey" as const,
      image: "/images/turkey-campus.jpg",
      featured: false,
    },
  ]

  return (
    <section id="destinations" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0">
        {/* Professional Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=90')",
          }}
        />
        
        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/85 via-blue-900/75 to-indigo-900/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
        
        {/* Elegant Mesh Gradient */}
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 40%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 60%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)
          `
        }} />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm font-medium text-primary">{t.destinations.label}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            <span className="text-foreground">{t.destinations.title.split(" ").slice(0, -1).join(" ")} </span>
            <span className="gradient-text">{t.destinations.title.split(" ").slice(-1)}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.destinations.description}
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Destination (China) */}
          <div className="lg:row-span-2">
            {destinations.filter(d => d.featured).map((dest) => {
              const country = t.destinations.countries[dest.key]
              return (
                <div
                  key={dest.key}
                  className="h-full rounded-3xl overflow-hidden relative group"
                >
                  {/* Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={dest.image}
                      alt={country.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-8 min-h-[600px]">
                    {/* Featured Badge */}
                    <div className={`absolute top-6 ${dir === "rtl" ? "right-6" : "left-6"}`}>
                      <div className="gold-gradient px-4 py-2 rounded-full flex items-center gap-2">
                        <Star className="w-4 h-4 text-primary-foreground" />
                        <span className="text-sm font-semibold text-primary-foreground">{t.destinations.featured}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-4xl font-bold mb-2 gradient-text">{country.name}</h3>
                      <p className="text-lg text-primary/80 font-medium mb-4">{country.tagline}</p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {country.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {country.highlights.map((highlight: string, i: number) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="glass rounded-xl p-4 text-center">
                          <Building2 className="w-5 h-5 text-primary mx-auto mb-2" />
                          <div className="text-xl font-bold text-foreground">{country.stats.universities}</div>
                          <div className="text-xs text-muted-foreground">{t.destinations.universities}</div>
                        </div>
                        <div className="glass rounded-xl p-4 text-center">
                          <BookOpen className="w-5 h-5 text-primary mx-auto mb-2" />
                          <div className="text-xl font-bold text-foreground">{country.stats.programs}</div>
                          <div className="text-xs text-muted-foreground">Programs</div>
                        </div>
                        <div className="glass rounded-xl p-4 text-center">
                          <Award className="w-5 h-5 text-primary mx-auto mb-2" />
                          <div className="text-xs font-bold text-foreground leading-tight">{country.stats.scholarships}</div>
                        </div>
                      </div>

                      <Button className="gold-gradient text-primary-foreground w-full hover:opacity-90" asChild>
                        <Link href={`/destinations/${dest.key}`}>
                          {t.destinations.explore} {country.name}
                          <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "mr-2 rotate-180" : "ml-2"}`} />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Other Destinations */}
          <div className="flex flex-col gap-8">
            {destinations.filter(d => !d.featured).map((dest) => {
              const country = t.destinations.countries[dest.key]
              return (
                <div
                  key={dest.key}
                  className="rounded-3xl overflow-hidden relative group"
                >
                  {/* Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={dest.image}
                      alt={country.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative p-6 min-h-[280px] flex flex-col justify-end">
                    <h3 className="text-2xl font-bold mb-1 text-foreground">{country.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{country.tagline}</p>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {country.description}
                    </p>

                    {/* Quick Stats */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground font-medium">{country.stats.universities}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground font-medium">{country.stats.programs}</span>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full border-border/50 hover:bg-secondary/50" asChild>
                      <Link href={`/destinations/${dest.key}`}>
                        {t.destinations.explore}
                        <ArrowRight className={`w-4 h-4 ${dir === "rtl" ? "mr-2 rotate-180" : "ml-2"}`} />
                      </Link>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
