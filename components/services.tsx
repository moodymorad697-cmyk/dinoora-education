"use client"

import Image from "next/image"
import { GraduationCap, Stamp, FileStack, Home, Car, UserCheck, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LazyFloatingIcons } from "@/components/lazy/lazy-3d"

export function Services() {
  const { t, dir } = useLanguage()

  const services = [
    {
      icon: GraduationCap,
      key: "admission" as const,
      gradient: "from-amber-500/20 to-orange-500/20",
      iconBg: "bg-amber-500/10 text-amber-400 group-hover:bg-amber-500",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&q=80", // University Admission
    },
    {
      icon: Stamp,
      key: "visa" as const,
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500",
      image: "https://images.unsplash.com/photo-1483389127117-b6a2102724ae?w=500&q=80", // Visa/Passport
    },
    {
      icon: FileStack,
      key: "documents" as const,
      gradient: "from-emerald-500/20 to-teal-500/20",
      iconBg: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500",
      image: "https://images.unsplash.com/photo-1450880014744-d98d85957e38?w=500&q=80", // Documents
    },
    {
      icon: Home,
      key: "accommodation" as const,
      gradient: "from-purple-500/20 to-violet-500/20",
      iconBg: "bg-purple-500/10 text-purple-400 group-hover:bg-purple-500",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80", // Accommodation/Home
    },
    {
      icon: Car,
      key: "airport" as const,
      gradient: "from-rose-500/20 to-red-500/20",
      iconBg: "bg-rose-500/10 text-rose-400 group-hover:bg-rose-500",
      image: "https://images.unsplash.com/photo-1462620808062-c1e12eaf20c1?w=500&q=80", // Airport/Travel
    },
    {
      icon: UserCheck,
      key: "followup" as const,
      gradient: "from-indigo-500/20 to-violet-500/20",
      iconBg: "bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80", // Support/Follow-up
    },
  ]

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0">
        {/* Professional Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=90')",
          }}
        />
        
        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/85 via-purple-900/75 to-pink-900/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
        
        {/* Elegant Mesh Gradient */}
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 35%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 65%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)
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
            <span className="text-base font-semibold text-primary">{t.services.label}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-8">
            <span className="text-foreground">{t.services.title.split(" ").slice(0, -1).join(" ")} </span>
            <span className="gradient-text">{t.services.title.split(" ").slice(-1)}</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
            {t.services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const data = t.services.items[service.key]
            return (
              <div
                key={index}
                className="group relative rounded-3xl border border-border/40 bg-card/40 p-10 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:bg-card/60 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
              >
                {/* Background Image (very subtle) */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className="object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                  />
                </div>

                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${service.iconBg} transition-all duration-300 group-hover:text-white group-hover:scale-125 group-hover:shadow-xl`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-8 text-2xl font-bold text-foreground">{data.title}</h3>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{data.description}</p>
                  
                  {/* Learn More Link */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary hover:bg-transparent group/btn" asChild>
                      <Link href={`/services/${service.key}`}>
                        <span className="text-sm font-medium">{t.services.learnMore}</span>
                        <ArrowRight className={`w-4 h-4 transition-transform group-hover/btn:translate-x-1 ${dir === "rtl" ? "mr-2 rotate-180 group-hover/btn:-translate-x-1" : "ml-2"}`} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <Button className="gold-gradient text-primary-foreground hover:opacity-90 px-10 py-8 text-xl font-semibold shadow-lg shadow-primary/30" asChild>
            <Link href="#apply">
              {t.services.cta}
              <ArrowRight className={`w-6 h-6 ${dir === "rtl" ? "mr-3 rotate-180" : "ml-3"}`} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
