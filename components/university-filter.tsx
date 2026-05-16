"use client"

import { useLanguage } from "@/lib/language-context"
import { useState } from "react"
import { Search, Filter, GraduationCap, DollarSign, MapPin, Star } from "lucide-react"

interface University {
  id: string
  name: { en: string; ar: string }
  country: "china" | "malaysia" | "turkey"
  rank: number
  tuition: { min: number; max: number }
  programs: string[]
  language: "english" | "chinese" | "turkish" | "malay"
  scholarship: boolean
}

const universities: University[] = [
  {
    id: "tsinghua",
    name: { en: "Tsinghua University", ar: "جامعة تسينغهوا" },
    country: "china",
    rank: 1,
    tuition: { min: 3000, max: 5000 },
    programs: ["Engineering", "Computer Science", "Business"],
    language: "english",
    scholarship: true
  },
  {
    id: "peking",
    name: { en: "Peking University", ar: "جامعة بكين" },
    country: "china",
    rank: 2,
    tuition: { min: 3000, max: 5000 },
    programs: ["Medicine", "Law", "Economics"],
    language: "english",
    scholarship: true
  },
  {
    id: "zhejiang",
    name: { en: "Zhejiang University", ar: "جامعة تشجيانغ" },
    country: "china",
    rank: 3,
    tuition: { min: 2500, max: 4500 },
    programs: ["Engineering", "Agriculture", "Medicine"],
    language: "english",
    scholarship: true
  },
  {
    id: "malaya",
    name: { en: "University of Malaya", ar: "جامعة مالايا" },
    country: "malaysia",
    rank: 1,
    tuition: { min: 2000, max: 4000 },
    programs: ["Engineering", "Business", "Medicine"],
    language: "english",
    scholarship: true
  },
  {
    id: "taylors",
    name: { en: "Taylor's University", ar: "جامعة تايلورز" },
    country: "malaysia",
    rank: 2,
    tuition: { min: 3000, max: 6000 },
    programs: ["Business", "Hospitality", "Design"],
    language: "english",
    scholarship: false
  },
  {
    id: "bogazici",
    name: { en: "Boğaziçi University", ar: "جامعة بوزازيتشي" },
    country: "turkey",
    rank: 1,
    tuition: { min: 1000, max: 3000 },
    programs: ["Engineering", "Social Sciences", "Arts"],
    language: "english",
    scholarship: true
  },
  {
    id: "istanbul",
    name: { en: "Istanbul University", ar: "جامعة إسطنبول" },
    country: "turkey",
    rank: 2,
    tuition: { min: 800, max: 2500 },
    programs: ["Medicine", "Law", "Engineering"],
    language: "turkish",
    scholarship: true
  }
]

export function UniversityFilter() {
  const { locale } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCountry, setSelectedCountry] = useState<string>("all")
  const [selectedProgram, setSelectedProgram] = useState<string>("all")
  const [maxTuition, setMaxTuition] = useState<string>("all")
  const [scholarshipOnly, setScholarshipOnly] = useState(false)

  const countries = [
    { value: "all", label: { en: "All Countries", ar: "جميع الدول" } },
    { value: "china", label: { en: "China", ar: "الصين" } },
    { value: "malaysia", label: { en: "Malaysia", ar: "ماليزيا" } },
    { value: "turkey", label: { en: "Turkey", ar: "تركيا" } }
  ]

  const programs = [
    { value: "all", label: { en: "All Programs", ar: "جميع البرامج" } },
    { value: "Engineering", label: { en: "Engineering", ar: "الهندسة" } },
    { value: "Computer Science", label: { en: "Computer Science", ar: "علوم الحاسوب" } },
    { value: "Medicine", label: { en: "Medicine", ar: "الطب" } },
    { value: "Business", label: { en: "Business", ar: "الأعمال" } },
    { value: "Law", label: { en: "Law", ar: "القانون" } }
  ]

  const tuitionRanges = [
    { value: "all", label: { en: "Any", ar: "أي" } },
    { value: "2000", label: { en: "Under $2,000", ar: "أقل من $2,000" } },
    { value: "4000", label: { en: "Under $4,000", ar: "أقل من $4,000" } },
    { value: "6000", label: { en: "Under $6,000", ar: "أقل من $6,000" } }
  ]

  const filteredUniversities = universities.filter(univ => {
    const matchesSearch = univ.name[locale].toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCountry = selectedCountry === "all" || univ.country === selectedCountry
    const matchesProgram = selectedProgram === "all" || univ.programs.includes(selectedProgram)
    const matchesTuition = maxTuition === "all" || univ.tuition.max <= parseInt(maxTuition)
    const matchesScholarship = !scholarshipOnly || univ.scholarship

    return matchesSearch && matchesCountry && matchesProgram && matchesTuition && matchesScholarship
  })

  const countryColors = {
    china: "from-red-600 to-red-400",
    malaysia: "from-emerald-600 to-emerald-400",
    turkey: "from-cyan-600 to-cyan-400"
  }

  const countryIcons = {
    china: "🇨🇳",
    malaysia: "🇲🇾",
    turkey: "🇹🇷"
  }

  return (
    <div className="w-full">
      {/* Search & Filter Header */}
      <div className="mb-8 p-6 rounded-xl bg-slate-900/50 border border-slate-800">
        <div className="flex items-center gap-3 mb-6">
          <Filter className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-bold text-white">
            {locale === "en" ? "Filter Universities" : "تصفية الجامعات"}
          </h3>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder={locale === "en" ? "Search universities..." : "البحث عن الجامعات..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder:text-slate-500 focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        {/* Filter Grid */}
        <div className="grid md:grid-cols-4 gap-4">
          {/* Country Filter */}
          <div>
            <label className="block text-sm text-slate-400 mb-2">
              {locale === "en" ? "Country" : "الدولة"}
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-primary focus:outline-none transition-colors"
            >
              {countries.map(country => (
                <option key={country.value} value={country.value}>
                  {locale === "en" ? country.label.en : country.label.ar}
                </option>
              ))}
            </select>
          </div>

          {/* Program Filter */}
          <div>
            <label className="block text-sm text-slate-400 mb-2">
              {locale === "en" ? "Program" : "البرنامج"}
            </label>
            <select
              value={selectedProgram}
              onChange={(e) => setSelectedProgram(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-primary focus:outline-none transition-colors"
            >
              {programs.map(program => (
                <option key={program.value} value={program.value}>
                  {locale === "en" ? program.label.en : program.label.ar}
                </option>
              ))}
            </select>
          </div>

          {/* Tuition Filter */}
          <div>
            <label className="block text-sm text-slate-400 mb-2">
              {locale === "en" ? "Max Tuition" : "أقصى رسوم"}
            </label>
            <select
              value={maxTuition}
              onChange={(e) => setMaxTuition(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white focus:border-primary focus:outline-none transition-colors"
            >
              {tuitionRanges.map(range => (
                <option key={range.value} value={range.value}>
                  {locale === "en" ? range.label.en : range.label.ar}
                </option>
              ))}
            </select>
          </div>

          {/* Scholarship Toggle */}
          <div className="flex items-center gap-3 pt-6">
            <input
              type="checkbox"
              id="scholarship"
              checked={scholarshipOnly}
              onChange={(e) => setScholarshipOnly(e.target.checked)}
              className="w-5 h-5 rounded border-slate-700 bg-slate-950 text-primary focus:ring-primary focus:outline-none"
            />
            <label htmlFor="scholarship" className="text-sm text-slate-400">
              {locale === "en" ? "Scholarship Only" : "منح فقط"}
            </label>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-slate-400">
            {locale === "en" 
              ? `${filteredUniversities.length} universities found`
              : `${filteredUniversities.length} جامعة موجودة`
            }
          </p>
        </div>

        {filteredUniversities.length === 0 ? (
          <div className="text-center py-12">
            <GraduationCap className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              {locale === "en" ? "No universities found" : "لم يتم العثور على جامعات"}
            </h3>
            <p className="text-slate-400">
              {locale === "en" ? "Try adjusting your filters" : "حاول تعديل الفلاتر"}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUniversities.map((univ) => (
              <div
                key={univ.id}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-primary/50 transition-all"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{countryIcons[univ.country]}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${countryColors[univ.country]} text-white`}>
                        #{univ.rank}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white">{univ.name[locale]}</h4>
                  </div>
                  {univ.scholarship && (
                    <div className="px-2 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
                      <span className="text-xs font-medium text-amber-400">
                        {locale === "en" ? "Scholarship" : "منحة"}
                      </span>
                    </div>
                  )}
                </div>

                {/* Programs */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {univ.programs.slice(0, 3).map((program) => (
                    <span
                      key={program}
                      className="px-2 py-1 rounded-full text-xs bg-slate-950 border border-slate-700 text-slate-300"
                    >
                      {program}
                    </span>
                  ))}
                </div>

                {/* Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <DollarSign className="w-4 h-4" />
                    <span>
                      ${univ.tuition.min} - ${univ.tuition.max}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <MapPin className="w-4 h-4" />
                    <span className="capitalize">{univ.language}</span>
                  </div>
                </div>

                {/* Action */}
                <button className="w-full py-2 rounded-lg bg-gradient-to-r from-primary to-amber-500 text-white font-medium hover:opacity-90 transition-opacity">
                  {locale === "en" ? "View Details" : "عرض التفاصيل"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
