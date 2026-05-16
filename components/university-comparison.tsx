"use client"

import { useLanguage } from "@/lib/language-context"
import { useState } from "react"
import { GraduationCap, DollarSign, MapPin, Award, Users, CheckCircle, X } from "lucide-react"

const universities = [
  {
    id: "tsinghua",
    name: { en: "Tsinghua University", ar: "جامعة تسينغهوا" },
    country: "china",
    rank: 1,
    tuition: { min: 3000, max: 5000 },
    language: "english",
    programs: ["Engineering", "Computer Science", "Business", "Medicine"],
    scholarship: true,
    students: 50000,
    acceptanceRate: 5,
    location: "Beijing, China"
  },
  {
    id: "peking",
    name: { en: "Peking University", ar: "جامعة بكين" },
    country: "china",
    rank: 2,
    tuition: { min: 3000, max: 5000 },
    language: "english",
    programs: ["Medicine", "Law", "Economics", "Arts"],
    scholarship: true,
    students: 45000,
    acceptanceRate: 6,
    location: "Beijing, China"
  },
  {
    id: "malaya",
    name: { en: "University of Malaya", ar: "جامعة مالايا" },
    country: "malaysia",
    rank: 1,
    tuition: { min: 2000, max: 4000 },
    language: "english",
    programs: ["Engineering", "Business", "Medicine", "Science"],
    scholarship: true,
    students: 30000,
    acceptanceRate: 15,
    location: "Kuala Lumpur, Malaysia"
  },
  {
    id: "bogazici",
    name: { en: "Boğaziçi University", ar: "جامعة بوزازيتشي" },
    country: "turkey",
    rank: 1,
    tuition: { min: 1000, max: 3000 },
    language: "english",
    programs: ["Engineering", "Social Sciences", "Arts", "Business"],
    scholarship: true,
    students: 25000,
    acceptanceRate: 20,
    location: "Istanbul, Turkey"
  }
]

export function UniversityComparison() {
  const { locale } = useLanguage()
  const [selectedUnis, setSelectedUnis] = useState<string[]>([])
  const maxSelection = 3

  const toggleSelection = (uniId: string) => {
    if (selectedUnis.includes(uniId)) {
      setSelectedUnis(selectedUnis.filter(id => id !== uniId))
    } else if (selectedUnis.length < maxSelection) {
      setSelectedUnis([...selectedUnis, uniId])
    }
  }

  const selectedUniversities = universities.filter(uni => selectedUnis.includes(uni.id))

  const countryColors: Record<string, string> = {
    china: "from-red-600 to-red-400",
    malaysia: "from-emerald-600 to-emerald-400",
    turkey: "from-cyan-600 to-cyan-400"
  }

  const countryIcons: Record<string, string> = {
    china: "🇨🇳",
    malaysia: "🇲🇾",
    turkey: "🇹🇷"
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          {locale === "en" ? "Compare Universities" : "مقارنة الجامعات"}
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          {locale === "en"
            ? `Select up to ${maxSelection} universities to compare their features side by side`
            : `حدد حتى ${maxSelection} جامعات لمقارنة ميزاتها جنبًا إلى جنب`
          }
        </p>
      </div>

      {/* University Selection */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {universities.map((uni) => (
          <button
            key={uni.id}
            onClick={() => toggleSelection(uni.id)}
            disabled={!selectedUnis.includes(uni.id) && selectedUnis.length >= maxSelection}
            className={`p-4 rounded-xl border transition-all ${
              selectedUnis.includes(uni.id)
                ? `border-primary bg-gradient-to-r ${countryColors[uni.country]} bg-opacity-10`
                : "border-slate-800 bg-slate-900/50 hover:border-slate-700"
            } ${!selectedUnis.includes(uni.id) && selectedUnis.length >= maxSelection ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{countryIcons[uni.country]}</span>
              <span className={`text-sm font-medium ${selectedUnis.includes(uni.id) ? "text-white" : "text-slate-300"}`}>
                #{uni.rank}
              </span>
            </div>
            <h3 className={`font-medium ${selectedUnis.includes(uni.id) ? "text-white" : "text-slate-400"}`}>
              {uni.name[locale]}
            </h3>
          </button>
        ))}
      </div>

      {/* Comparison Table */}
      {selectedUniversities.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left p-4 text-slate-400 font-medium">
                  {locale === "en" ? "Feature" : "الميزة"}
                </th>
                {selectedUniversities.map((uni) => (
                  <th key={uni.id} className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{countryIcons[uni.country]}</span>
                      <span className={`text-lg font-bold bg-gradient-to-r ${countryColors[uni.country]} bg-clip-text text-transparent`}>
                        {uni.name[locale]}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-800">
                <td className="p-4 text-slate-400">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    {locale === "en" ? "Ranking" : "الترتيب"}
                  </div>
                </td>
                {selectedUniversities.map((uni) => (
                  <td key={uni.id} className="p-4 text-white font-medium">
                    #{uni.rank} {locale === "en" ? "in" : "في"} {uni.country}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-slate-800">
                <td className="p-4 text-slate-400">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    {locale === "en" ? "Tuition/Year" : "الرسوم/سنة"}
                  </div>
                </td>
                {selectedUniversities.map((uni) => (
                  <td key={uni.id} className="p-4 text-white">
                    ${uni.tuition.min} - ${uni.tuition.max}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-slate-800">
                <td className="p-4 text-slate-400">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    {locale === "en" ? "Language" : "اللغة"}
                  </div>
                </td>
                {selectedUniversities.map((uni) => (
                  <td key={uni.id} className="p-4 text-white capitalize">
                    {uni.language}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-slate-800">
                <td className="p-4 text-slate-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {locale === "en" ? "Location" : "الموقع"}
                  </div>
                </td>
                {selectedUniversities.map((uni) => (
                  <td key={uni.id} className="p-4 text-white">
                    {uni.location}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-slate-800">
                <td className="p-4 text-slate-400">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {locale === "en" ? "Students" : "الطلاب"}
                  </div>
                </td>
                {selectedUniversities.map((uni) => (
                  <td key={uni.id} className="p-4 text-white">
                    {(uni.students / 1000).toFixed(0)}K
                  </td>
                ))}
              </tr>
              <tr className="border-b border-slate-800">
                <td className="p-4 text-slate-400">
                  {locale === "en" ? "Acceptance Rate" : "نسبة القبول"}
                </td>
                {selectedUniversities.map((uni) => (
                  <td key={uni.id} className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${countryColors[uni.country]}`}
                          style={{ width: `${uni.acceptanceRate * 5}%` }}
                        />
                      </div>
                      <span className="text-white font-medium">{uni.acceptanceRate}%</span>
                    </div>
                  </td>
                ))}
              </tr>
              <tr className="border-b border-slate-800">
                <td className="p-4 text-slate-400">
                  {locale === "en" ? "Scholarship" : "منحة"}
                </td>
                {selectedUniversities.map((uni) => (
                  <td key={uni.id} className="p-4">
                    {uni.scholarship ? (
                      <div className="flex items-center gap-2 text-emerald-400">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-medium">{locale === "en" ? "Available" : "متاحة"}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-slate-500">
                        <X className="w-5 h-5" />
                        <span>{locale === "en" ? "Not Available" : "غير متاحة"}</span>
                      </div>
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 text-slate-400">
                  {locale === "en" ? "Programs" : "البرامج"}
                </td>
                {selectedUniversities.map((uni) => (
                  <td key={uni.id} className="p-4">
                    <div className="flex flex-wrap gap-2">
                      {uni.programs.map((program) => (
                        <span
                          key={program}
                          className="px-2 py-1 rounded-full text-xs bg-slate-950 border border-slate-700 text-slate-300"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-12">
          <GraduationCap className="w-16 h-16 text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">
            {locale === "en" ? "Select universities to compare" : "حدد الجامعات للمقارنة"}
          </h3>
          <p className="text-slate-400">
            {locale === "en" 
              ? `Choose up to ${maxSelection} universities from the list above`
              : `اختر حتى ${maxSelection} جامعات من القائمة أعلاه`
            }
          </p>
        </div>
      )}

      {/* Clear Selection */}
      {selectedUniversities.length > 0 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setSelectedUnis([])}
            className="px-6 py-2 rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
          >
            {locale === "en" ? "Clear Selection" : "مسح التحديد"}
          </button>
        </div>
      )}
    </div>
  )
}
