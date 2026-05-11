"use client"

import Image from "next/image"
import { Cpu, Stethoscope, BarChart3, Brain, Building2, Palette, Clock, Globe, Award } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { AnimatedBackground } from "@/components/ui/animated-background"

export function Programs() {
  const { t, locale } = useLanguage()

  const programs = [
    {
      icon: Cpu,
      key: "engineering" as const,
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80", // Engineering
    },
    {
      icon: Stethoscope,
      key: "medicine" as const,
      gradient: "from-red-500/20 to-rose-500/20",
      iconBg: "bg-red-500/10 text-red-400 group-hover:bg-red-500",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80", // Medicine
    },
    {
      icon: BarChart3,
      key: "business" as const,
      gradient: "from-emerald-500/20 to-teal-500/20",
      iconBg: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80", // Business
    },
    {
      icon: Brain,
      key: "it" as const,
      gradient: "from-purple-500/20 to-violet-500/20",
      iconBg: "bg-purple-500/10 text-purple-400 group-hover:bg-purple-500",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80", // IT/Tech
    },
    {
      icon: Building2,
      key: "architecture" as const,
      gradient: "from-amber-500/20 to-orange-500/20",
      iconBg: "bg-amber-500/10 text-amber-400 group-hover:bg-amber-500",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&q=80", // Architecture
    },
    {
      icon: Palette,
      key: "arts" as const,
      gradient: "from-pink-500/20 to-fuchsia-500/20",
      iconBg: "bg-pink-500/10 text-pink-400 group-hover:bg-pink-500",
      image: "https://images.unsplash.com/photo-1549887534-f55a8f08a8f7?w=500&q=80", // Arts
    },
  ]

  return (
    <section id="programs" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0">
        {/* Professional Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=90')",
          }}
        />
        
        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/85 via-pink-900/75 to-fuchsia-900/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
        
        {/* Elegant Mesh Gradient */}
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 40%, rgba(244, 63, 94, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 60%, rgba(217, 70, 239, 0.3) 0%, transparent 50%)
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
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm font-medium text-primary">{t.programs.label}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-6">
            <span className="text-foreground">{t.programs.title.split(" ").slice(0, -2).join(" ")} </span>
            <span className="gradient-text">{t.programs.title.split(" ").slice(-2).join(" ")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.programs.description}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => {
            const data = t.programs.items[program.key]
            return (
              <div
                key={program.key}
                className="group relative rounded-3xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card/50 hover:shadow-2xl hover:shadow-primary/5 overflow-hidden"
              >
                {/* Background Image (very subtle) */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <Image
                    src={program.image}
                    alt=""
                    fill
                    className="object-cover opacity-10 group-hover:opacity-15 transition-opacity duration-500"
                  />
                </div>

                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${program.iconBg} transition-all duration-300 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg`}>
                      <program.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{data.title}</h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{data.description}</p>
                  
                  {/* Stats */}
                  <div className="flex flex-wrap gap-4 mb-6 text-xs">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      <span>{data.stats.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Globe className="w-3.5 h-3.5 text-primary" />
                      <span>{data.stats.language}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Award className="w-3.5 h-3.5 text-primary" />
                      <span>{data.stats.scholarship}</span>
                    </div>
                  </div>
                  
                  {/* Courses */}
                  <div className="flex flex-wrap gap-2">
                    {data.courses.map((course: string) => (
                      <span
                        key={course}
                        className="rounded-full bg-secondary/50 border border-border/50 px-3 py-1 text-xs text-foreground"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
