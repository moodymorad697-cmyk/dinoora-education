"use client"

import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { MapPin, Award, ArrowUpRight } from "lucide-react"

const universities = [
  { name: "Tsinghua University", country: "China", ranking: "Top 20 World", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=80", flag: "🇨🇳" },
  { name: "Peking University", country: "China", ranking: "Top 20 World", image: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?w=400&q=80", flag: "🇨🇳" },
  { name: "Fudan University", country: "China", ranking: "Top 50 World", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80", flag: "🇨🇳" },
  { name: "Shanghai Jiao Tong", country: "China", ranking: "Top 50 World", image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&q=80", flag: "🇨🇳" },
  { name: "Zhejiang University", country: "China", ranking: "Top 50 World", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&q=80", flag: "🇨🇳" },
  { name: "University of Malaya", country: "Malaysia", ranking: "Top 100 World", image: "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?w=400&q=80", flag: "🇲🇾" },
  { name: "Universiti Putra Malaysia", country: "Malaysia", ranking: "Top 150 World", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&q=80", flag: "🇲🇾" },
  { name: "Taylor's University", country: "Malaysia", ranking: "Top 300 World", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&q=80", flag: "🇲🇾" },
  { name: "Bogazici University", country: "Turkey", ranking: "Top 200 World", image: "https://images.unsplash.com/photo-1531219572328-a0171b4448a3?w=400&q=80", flag: "🇹🇷" },
  { name: "Middle East Technical", country: "Turkey", ranking: "Top 300 World", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80", flag: "🇹🇷" },
  { name: "Koc University", country: "Turkey", ranking: "Top 500 World", image: "https://images.unsplash.com/photo-1542744093-f92436d4567b?w=400&q=80", flag: "🇹🇷" },
  { name: "Istanbul Technical", country: "Turkey", ranking: "Top 400 World", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80", flag: "🇹🇷" },
]

export function Universities() {
  const { t, locale } = useLanguage()
  
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/50 via-slate-900/50 to-cyan-900/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px]" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-semibold text-primary">{t.universities.label}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            {locale === "en" ? "Partner Universities" : "الجامعات الشريكة"}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {locale === "en" 
              ? "500+ World-Class Universities. From Tsinghua to Peking University, access China's most prestigious institutions."
              : "500+ جامعة عالمية المستوى. من تسينغهوا إلى جامعة بكين، احصل على قبول في أفضل الجامعات."
            }
          </p>
        </motion.div>

        {/* Universities Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {universities.map((uni, index) => (
            <motion.div
              key={uni.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card/50 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Image */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src={uni.image}
                  alt={uni.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute top-2 right-2 text-2xl">{uni.flag}</div>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground line-clamp-1">{uni.name}</h3>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span>{uni.country}</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                    <Award className="w-3 h-3 text-amber-400" />
                    <span className="text-amber-400 font-medium">{uni.ranking}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Universities CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 border border-slate-800">
            <span className="text-slate-400">
              {locale === "en" ? "And 488+ more elite universities across China, Malaysia, and Turkey" : "و488+ جامعة أخرى متميزة في الصين وماليزيا وتركيا"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
