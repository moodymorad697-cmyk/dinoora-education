"use client"

import { useLanguage } from "@/lib/language-context"

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
  
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
