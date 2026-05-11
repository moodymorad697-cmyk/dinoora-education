"use client"

import { useLanguage } from "@/lib/language-context"
import { LazyImageSlideshow } from "@/components/lazy/lazy-backgrounds"

const universities = [
  { name: "Tsinghua University", country: "China", ranking: "Top 20 World" },
  { name: "Peking University", country: "China", ranking: "Top 20 World" },
  { name: "Shanghai Jiao Tong", country: "China", ranking: "Top 50 World" },
  { name: "Zhejiang University", country: "China", ranking: "Top 50 World" },
  { name: "University of Malaya", country: "Malaysia", ranking: "Top 100 World" },
  { name: "Universiti Putra Malaysia", country: "Malaysia", ranking: "Top 150 World" },
  { name: "Taylor's University", country: "Malaysia", ranking: "Top 300 World" },
  { name: "Bogazici University", country: "Turkey", ranking: "Top 200 World" },
  { name: "Middle East Technical", country: "Turkey", ranking: "Top 300 World" },
  { name: "Istanbul Technical", country: "Turkey", ranking: "Top 400 World" },
  { name: "Koc University", country: "Turkey", ranking: "Top 500 World" },
  { name: "Fudan University", country: "China", ranking: "Top 50 World" },
]

export function Universities() {
  const { t } = useLanguage()
  
  // University campus images for slideshow
  const campusImages = [
    "https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80", // Modern university campus
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80", // University library
    "https://images.unsplash.com/photo-1561049935-a6cb5fc0c1c2?w=1920&q=80", // University building
    "https://images.unsplash.com/photo-1546411323-49b0f44fc6f9?w=1920&q=80", // Campus walkway
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80", // University architecture
  ]
  
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Enhanced Background with Campus Slideshow */}
      <div className="absolute inset-0">
        {/* Professional Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=90')",
          }}
        />
        
        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/85 via-teal-900/75 to-cyan-900/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
        
        {/* Elegant Mesh Gradient */}
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: `
            radial-gradient(circle at 30% 35%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 70% 65%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)
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
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">{t.universities.label}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            {t.universities.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t.universities.description}
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {universities.map((uni) => (
            <div
              key={uni.name}
              className="group rounded-xl border border-border bg-card/50 p-5 transition-all duration-300 hover:border-primary/50 hover:bg-card"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-lg font-bold text-primary">
                {uni.name.charAt(0)}
              </div>
              <h3 className="mt-3 font-semibold text-foreground line-clamp-1">{uni.name}</h3>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{uni.country}</span>
                <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
                  {uni.ranking}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            {t.universities.moreUniversities}
          </p>
        </div>
      </div>
    </section>
  )
}
