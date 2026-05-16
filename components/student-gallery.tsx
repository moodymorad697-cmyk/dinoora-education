"use client"

import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { GraduationCap, MapPin, Quote } from "lucide-react"

const studentStories = [
  {
    name: "Ahmed Al-Rashid",
    university: "Tsinghua University",
    country: "china",
    program: "Computer Science",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    quote: {
      en: "DINOORA helped me achieve my dream of studying at Tsinghua University. The scholarship application process was seamless!",
      ar: "ساعدتني دينورا على تحقيق حلمي بالدراسة في جامعة تسينغهوا. عملية التقديم للمنحة كانت سلسة!"
    }
  },
  {
    name: "Fatima Hassan",
    university: "Peking University",
    country: "china",
    program: "Medicine",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    quote: {
      en: "From Yiwu to Beijing, DINOORA supported me every step of the way. Now I'm studying medicine at one of China's top universities.",
      ar: "من ييوو إلى بكين، دعمتني دينورا في كل خطوة. الآن أدرس الطب في إحدى أفضل جامعات الصين."
    }
  },
  {
    name: "Omar Yusuf",
    university: "University of Malaya",
    country: "malaysia",
    program: "Engineering",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    quote: {
      en: "The EMGS visa process was so easy with DINOORA's help. I'm now pursuing my engineering degree in Malaysia.",
      ar: "عملية تأشيرة EMGS كانت سهلة جداً بمساعدة دينورا. الآن أسعى للحصول على درجة الهندسة في ماليزيا."
    }
  },
  {
    name: "Sarah Ahmed",
    university: "Taylor's University",
    country: "malaysia",
    program: "Business",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    quote: {
      en: "DINOORA's team helped me find the perfect university for my business studies. The accommodation assistance was invaluable!",
      ar: "ساعدني فريق دينورا في العثور على الجامعة المثالية لدراستي في الأعمال. مساعدة السكن كانت لا تقدر بثمن!"
    }
  },
  {
    name: "Mustafa Yilmaz",
    university: "Boğaziçi University",
    country: "turkey",
    program: "Engineering",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    quote: {
      en: "Türkiye Bursları scholarship application was complex, but DINOORA made it simple. I'm now studying in Istanbul!",
      ar: "طلب منحة Türkiye Bursları كان معقداً، لكن دينورا جعلته بسيطاً. الآن أدرس في إسطنبول!"
    }
  },
  {
    name: "Layla Mohamed",
    university: "Istanbul University",
    country: "turkey",
    program: "Medicine",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    quote: {
      en: "From pre-admission to visa processing, DINOORA handled everything. I'm living my dream of becoming a doctor.",
      ar: "من القبول المبدئي إلى معالجة التأشيرة، تعاملت دينورا مع كل شيء. أعيش حلمي بأن أصبح طبيبة."
    }
  }
]

export function StudentGallery() {
  const { locale } = useLanguage()

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
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              {locale === "en" ? "Student Success Stories" : "قصص نجاح الطلاب"}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {locale === "en" 
              ? "Real Students, Real Success" 
              : "طلاب حقيقيون، نجاح حقيقي"
            }
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {locale === "en"
              ? "See how students from around the world achieved their educational dreams with DINOORA"
              : "شاهد كيف حقق الطلاب من جميع أنحاء العالم أحلامهم التعليمية مع دينورا"
            }
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentStories.map((student, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-primary/50 transition-all"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                
                {/* Country Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${countryColors[student.country]} text-white`}>
                    {countryIcons[student.country]} {student.university}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{student.name}</h3>
                    <p className="text-sm text-slate-400">{student.program}</p>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative p-4 rounded-xl bg-slate-950/50 border border-slate-700">
                  <Quote className="absolute top-2 right-2 w-4 h-4 text-primary/30" />
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {locale === "en" ? student.quote.en : student.quote.ar}
                  </p>
                </div>

                {/* University Info */}
                <div className="flex items-center gap-2 mt-4 text-sm text-slate-400">
                  <MapPin className="w-4 h-4" />
                  <span>{student.university}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-6">
            {locale === "en"
              ? "Want to be our next success story?"
              : "تريد أن تكون قصة نجاحنا القادمة؟"
            }
          </p>
          <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-amber-500 text-white font-medium hover:opacity-90 transition-opacity">
            {locale === "en" ? "Start Your Journey" : "ابدأ رحلتك"}
          </button>
        </div>
      </div>
    </section>
  )
}
