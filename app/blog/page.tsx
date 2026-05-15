"use client"

import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowRight,
  GraduationCap,
  Building2,
  Globe,
  Search
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { WhatsAppButton } from "@/components/unified-cta"
import Link from "next/link"
import { useState } from "react"

const blogPosts = [
  {
    slug: "csc-scholarship-complete-guide",
    title: { 
      en: "CSC Scholarship: Complete Guide 2024-2025", 
      ar: "المنحة الحكومية الصينية CSC: الدليل الشامل 2024-2025" 
    },
    excerpt: {
      en: "Complete guide to obtaining the Chinese Government Scholarship - requirements, steps, tips, and common mistakes. Read this before applying!",
      ar: "دليل كامل للحصول على منحة CSC الصينية - الشروط، الخطوات، النصائح، والأخطاء الشائعة. اقرأ هذا قبل التقديم!"
    },
    country: "china",
    countryName: { en: "China", ar: "الصين" },
    category: "scholarships",
    categoryName: { en: "Scholarships", ar: "منح دراسية" },
    readingTime: 15,
    date: "2024-05-15",
    featured: true,
    image: "/blog/csc-scholarship.jpg",
    icon: GraduationCap
  },
  {
    slug: "emgs-guide",
    title: { 
      en: "EMGS: Complete Guide to Malaysia Student Visa 2024", 
      ar: "EMGS: الدليل الكامل للتأشيرة الدراسية الماليزية 2024" 
    },
    excerpt: {
      en: "Detailed explanation of EMGS system - from registration to receiving visa. Track your application progress and know all requirements.",
      ar: "شرح مفصل لنظام EMGS - من التسجيل حتى استلام التأشيرة. تابع نسبة تقدم طلبك واعرف كل المتطلبات."
    },
    country: "malaysia",
    countryName: { en: "Malaysia", ar: "ماليزيا" },
    category: "visa",
    categoryName: { en: "Visa", ar: "تأشيرة" },
    readingTime: 12,
    date: "2024-05-15",
    featured: true,
    image: "/blog/emgs-guide.jpg",
    icon: Building2
  },
  {
    slug: "turkiye-burslari-guide",
    title: { 
      en: "Türkiye Bursları: Complete Scholarship Guide 2024", 
      ar: "منحة تركيا Bursları: الدليل الشامل للحصول على المنحة 2024" 
    },
    excerpt: {
      en: "Complete guide to the Turkish Government Scholarship Türkiye Bursları - requirements, application steps, success tips, and critical mistakes to avoid.",
      ar: "دليل كامل لمنحة الحكومة التركية Türkiye Bursları - الشروط، خطوات التقديم، نصائح النجاح، وأهم الأخطاء التي يجب تجنبها."
    },
    country: "turkey",
    countryName: { en: "Turkey", ar: "تركيا" },
    category: "scholarships",
    categoryName: { en: "Scholarships", ar: "منح دراسية" },
    readingTime: 18,
    date: "2024-05-15",
    featured: true,
    image: "/blog/turkiye-burslari.jpg",
    icon: Globe
  },
  {
    slug: "beijing-student-guide",
    title: { 
      en: "Complete Guide to Student Life in Beijing 2024-2025", 
      ar: "الدليل الشامل للحياة الطلابية في بكين 2024-2025" 
    },
    excerpt: {
      en: "Everything you need to know about studying and living in Beijing - universities, accommodation, food, transportation, and top tips for international students.",
      ar: "كل ما تحتاج معرفته عن الدراسة والعيش في بكين - الجامعات، السكن، الطعام، المواصلات، وأفضل النصائح للطلاب الدوليين."
    },
    country: "china",
    countryName: { en: "China", ar: "الصين" },
    category: "living",
    categoryName: { en: "Student Life", ar: "حياة الطلاب" },
    readingTime: 15,
    date: "2024-01-15",
    featured: true,
    image: "/blog/beijing.jpg",
    icon: GraduationCap
  },
  {
    slug: "kuala-lumpur-student-guide",
    title: { 
      en: "Complete Guide to Student Life in Kuala Lumpur 2024-2025", 
      ar: "الدليل الشامل للحياة الطلابية في كوالالمبور 2024-2025" 
    },
    excerpt: {
      en: "Comprehensive guide to studying in KL - top universities, affordable living, halal food, transportation, and student activities.",
      ar: "دليل شامل للدراسة في كوالالمبور - أفضل الجامعات، معيشة ميسورة، طعام حلال، مواصلات، وأنشطة الطلاب."
    },
    country: "malaysia",
    countryName: { en: "Malaysia", ar: "ماليزيا" },
    category: "living",
    categoryName: { en: "Student Life", ar: "حياة الطلاب" },
    readingTime: 18,
    date: "2024-01-20",
    featured: true,
    image: "/blog/kuala-lumpur.jpg",
    icon: Building2
  },
  {
    slug: "istanbul-student-guide",
    title: { 
      en: "Complete Guide to Student Life in Istanbul 2024-2025", 
      ar: "الدليل الشامل للحياة الطلابية في إسطنبول 2024-2025" 
    },
    excerpt: {
      en: "Discover Istanbul's universities, affordable living, rich culture, halal food, and everything international students need to know.",
      ar: "اكتشف جامعات إسطنبول، المعيشة الميسورة، الثقافة الغنية، الطعام الحلال، وكل ما يحتاجه الطلاب الدوليين معرفته."
    },
    country: "turkey",
    countryName: { en: "Turkey", ar: "تركيا" },
    category: "living",
    categoryName: { en: "Student Life", ar: "حياة الطلاب" },
    readingTime: 20,
    date: "2024-01-25",
    featured: true,
    image: "/blog/istanbul.jpg",
    icon: Globe
  }
]

const categories = [
  { id: "all", name: { en: "All Articles", ar: "جميع المقالات" } },
  { id: "scholarships", name: { en: "Scholarships", ar: "منح دراسية" } },
  { id: "visa", name: { en: "Visa & Immigration", ar: "تأشيرة وهجرة" } },
  { id: "universities", name: { en: "Universities", ar: "جامعات" } },
  { id: "living", name: { en: "Student Life", ar: "حياة الطلاب" } },
]

const countries = [
  { id: "all", name: { en: "All Countries", ar: "جميع الدول" }, flag: "🌍" },
  { id: "china", name: { en: "China", ar: "الصين" }, flag: "🇨🇳" },
  { id: "malaysia", name: { en: "Malaysia", ar: "ماليزيا" }, flag: "🇲🇾" },
  { id: "turkey", name: { en: "Turkey", ar: "تركيا" }, flag: "🇹🇷" },
]

export default function BlogPage() {
  const { locale } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedCountry, setSelectedCountry] = useState("all")

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title[locale].toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt[locale].toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    const matchesCountry = selectedCountry === "all" || post.country === selectedCountry
    return matchesSearch && matchesCategory && matchesCountry
  })

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 inline mr-2" />
              {locale === "en" ? "Student Resources" : "موارد الطلاب"}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {locale === "en" ? (
                <>Study Abroad <span className="text-amber-400">Guide</span></>
              ) : (
                <>دليل <span className="text-amber-400">الدراسة في الخارج</span></>
              )}
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              {locale === "en" 
                ? "Comprehensive guides, tips, and resources for studying in China, Malaysia, and Turkey."
                : "أدلة شاملة، نصائح، وموارد للدراسة في الصين وماليزيا وتركيا."
              }
            </p>
          </motion.div>

          {/* Search & Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder={locale === "en" ? "Search articles..." : "البحث في المقالات..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 bg-slate-900/50 border-slate-700 text-white text-lg"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {/* Country Filter */}
              <div className="flex flex-wrap gap-2">
                {countries.map((country) => (
                  <button
                    key={country.id}
                    onClick={() => setSelectedCountry(country.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCountry === country.id
                        ? 'bg-primary text-white'
                        : 'bg-slate-900/50 text-slate-400 hover:text-white border border-slate-700'
                    }`}
                  >
                    <span className="mr-1">{country.flag}</span>
                    {locale === "en" ? country.name.en : country.name.ar}
                  </button>
                ))}
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-slate-900/50 text-slate-400 hover:text-white border border-slate-700'
                    }`}
                  >
                    {locale === "en" ? category.name.en : category.name.ar}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      {filteredPosts.filter(p => p.featured).length > 0 && (
        <section className="py-16 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
              {locale === "en" ? "Featured Guides" : "أدلة مميزة"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {filteredPosts.filter(p => p.featured).map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <div className="h-full bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-primary/50 transition-all group-hover:shadow-lg group-hover:shadow-primary/10">
                      {/* Image Placeholder */}
                      <div className="aspect-video bg-slate-800 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-amber-500/20" />
                        <post.icon className="w-16 h-16 text-slate-600 relative z-10 group-hover:scale-110 transition-transform" />
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-slate-950/80 text-white text-xs rounded-full">
                            {post.countryName[locale]}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readingTime} {locale === "en" ? "min read" : "دقيقة قراءة"}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors line-clamp-2">
                          {post.title[locale]}
                        </h3>
                        
                        <p className="text-slate-400 text-sm line-clamp-3 mb-4">
                          {post.excerpt[locale]}
                        </p>
                        
                        <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                          {locale === "en" ? "Read Guide" : "اقرأ الدليل"}
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">
            {locale === "en" ? "All Articles" : "جميع المقالات"}
            <span className="ml-3 text-sm font-normal text-slate-500">
              ({filteredPosts.length})
            </span>
          </h2>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                {locale === "en" ? "No articles found" : "لم يتم العثور على مقالات"}
              </h3>
              <p className="text-slate-400">
                {locale === "en" ? "Try adjusting your search or filters" : "حاول تعديل البحث أو الفلاتر"}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <div className="h-full bg-slate-900/30 border border-slate-800 rounded-xl overflow-hidden hover:border-primary/30 transition-all">
                      <div className="aspect-video bg-slate-800 flex items-center justify-center relative">
                        <post.icon className="w-12 h-12 text-slate-600 group-hover:text-primary transition-colors" />
                        <div className="absolute top-3 right-3">
                          <span className="px-2 py-1 bg-slate-950/80 text-white text-xs rounded-full">
                            {post.countryName[locale]}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-5">
                        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded">
                            {post.categoryName[locale]}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readingTime} {locale === "en" ? "min" : "دقيقة"}
                          </span>
                        </div>
                        
                        <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors line-clamp-2">
                          {post.title[locale]}
                        </h3>
                        
                        <p className="text-slate-400 text-sm line-clamp-2">
                          {post.excerpt[locale]}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {locale === "en" ? "Need Personalized Guidance?" : "تحتاج إرشادات مخصصة؟"}
          </h2>
          <p className="text-slate-400 mb-8">
            {locale === "en" 
              ? "Our experts are ready to help you choose the right path for your education."
              : "خبراؤنا مستعدون لمساعدتك في اختيار المسار الصحيح لتعليمك."
            }
          </p>
          <WhatsAppButton size="lg" />
        </div>
      </section>
    </main>
  )
}
