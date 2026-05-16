"use client"

import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { 
  Users, 
  GraduationCap, 
  Building2, 
  Globe, 
  Shield,
  Clock,
  TrendingUp,
  Heart,
  MapPin,
  Phone,
  Mail,
  Home,
  MessageCircle,
  Target,
  Award,
  CheckCircle
} from "lucide-react"
import { WhatsAppButton, ApplyButton } from "@/components/unified-cta"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  {
    name: "Ahmed Hassan",
    role: { en: "Founder & CEO", ar: "المؤسس والرئيس التنفيذي" },
    bio: { 
      en: "Education consultant with 8+ years experience in international student services",
      ar: "مستشار تعليمي بخبرة 8+ سنوات في خدمات الطلاب الدوليين"
    },
    image: "/team/ahmed.jpg",
    linkedin: "#"
  },
  {
    name: "Dr. Sarah Chen",
    role: { en: "China Operations Director", ar: "مديرة العمليات في الصين" },
    bio: {
      en: "PhD from Tsinghua University, expert in Chinese education system",
      ar: "دكتوراه من جامعة تسينغهوا، خبيرة في النظام التعليمي الصيني"
    },
    image: "/team/sarah.jpg",
    linkedin: "#"
  },
  {
    name: "Fatima Abdullah",
    role: { en: "Malaysia Office Manager", ar: "مديرة مكتب ماليزيا" },
    bio: {
      en: "EMGS certified consultant with extensive Malaysian university network",
      ar: "مستشارة معتمدة من EMGS مع شبكة واسعة من الجامعات الماليزية"
    },
    image: "/team/fatima.jpg",
    linkedin: "#"
  },
  {
    name: "Mustafa Yilmaz",
    role: { en: "Turkey Specialist", ar: "أخصائي تركيا" },
    bio: {
      en: "Former YTB scholar, expert in Türkiye Bursları applications",
      ar: "باحث سابق في YTB، خبير في تطبيقات Türkiye Bursları"
    },
    image: "/team/mustafa.jpg",
    linkedin: "#"
  }
]

const stats = [
  { value: "3+", label: { en: "Years Experience", ar: "سنوات خبرة" }, icon: Clock },
  { value: "500+", label: { en: "Students Helped", ar: "طالب تم مساعدتهم" }, icon: Users },
  { value: "85%", label: { en: "Client Satisfaction", ar: "رضا العملاء" }, icon: TrendingUp },
  { value: "3", label: { en: "Countries", ar: "دول" }, icon: Globe },
  { value: "50+", label: { en: "Prestigious Universities", ar: "جامعة مرموقة" }, icon: GraduationCap },
  { value: "24/7", label: { en: "Support", ar: "دعم" }, icon: Shield },
]

const values = [
  {
    icon: Heart,
    title: { en: "Student-First Approach", ar: "نهج يضع الطالب أولاً" },
    desc: { 
      en: "Every decision we make puts students' success and wellbeing first",
      ar: "كل قرار نتخذه يضع نجاح ورفاهية الطلاب في المقام الأول"
    }
  },
  {
    icon: Shield,
    title: { en: "Transparency", ar: "الشفافية" },
    desc: {
      en: "Clear pricing, honest advice, no hidden fees or false promises",
      ar: "أسعار واضحة، نصيحة صادقة، بدون رسوم خفية أو وعود كاذبة"
    }
  },
  {
    icon: Target,
    title: { en: "Excellence", ar: "التميز" },
    desc: {
      en: "We strive for the highest standards in everything we do",
      ar: "نسعى لأعلى المعايير في كل ما نقوم به"
    }
  },
  {
    icon: Award,
    title: { en: "Integrity", ar: "النزاهة" },
    desc: {
      en: "Honest, ethical practices that build trust with students and partners",
      ar: "ممارسات نزيهة وأخلاقية تبني الثقة مع الطلاب والشركاء"
    }
  }
]

export default function AboutPage() {
  const { locale } = useLanguage()

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
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
              {locale === "en" ? "About DINOORA" : "عن دينورا"}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {locale === "en" ? (
                <>Your Trusted Partner in <span className="text-amber-400">Global Education</span></>
              ) : (
                <>شريكك الموثوق في <span className="text-amber-400">التعليم العالمي</span></>
              )}
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              {locale === "en" 
                ? "We bridge the gap between ambitious students and world-class universities in China, Malaysia, and Turkey. Since 2019, we've helped thousands achieve their educational dreams."
                : "نسد الفجوة بين الطلاب الطموحين والجامعات العالمية في الصين وماليزيا وتركيا. منذ 2019، ساعدنا آلاف الطلاب في تحقيق أحلامهم التعليمية."
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 rounded-xl bg-slate-900/50 border border-slate-800"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{locale === "en" ? stat.label.en : stat.label.ar}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                {locale === "en" ? "Our Story" : "قصتنا"}
              </h2>
              <div className="space-y-4 text-slate-400">
                <p>
                  {locale === "en" 
                    ? "Founded in 2019 in Yiwu, China, DINOORA began with a simple mission: to help Arab students access quality education abroad. What started as a small consultancy has grown into a trusted international education partner."
                    : "تأسست دينورا في 2019 في ييوو، الصين، بمهمة بسيطة: مساعدة الطلاب العرب على الوصول إلى التعليم النوعي في الخارج. ما بدأ كمكتب استشارات صغير نما ليصبح شريكاً دولياً موثوقاً في التعليم."
                  }
                </p>
                <p>
                  {locale === "en"
                    ? "Today, we operate from two international offices - China and Malaysia - serving students from over 3 countries. Our team speaks Arabic, English, Chinese, and Turkish, ensuring seamless communication throughout your journey."
                    : "اليوم، نعمل من مكتبين دوليين في الصين وماليزيا، ونخدم الطلاب من 3 دول. يتحدث فريقنا العربية والإنجليزية والصينية والتركية، مما يضمن تواصلاً سلساً طوال رحلتك."
                  }
                </p>
                <p>
                  {locale === "en"
                    ? "We've built strong partnerships with 50+ prestigious universities and maintained an 85% client satisfaction rate. Our commitment to excellence has made us the preferred choice for hundreds of families seeking quality education in China and Malaysia."
                    : "بنينا شراكات قوية مع أكثر من 50 جامعة مرموقة وحافظنا على معدل رضا العملاء 85%. التزامنا بالتميز جعلنا الخيار المفضل لمئات العائلات التي تسعى للحصول على تعليم نوعي في الصين وماليزيا."
                  }
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {locale === "en" ? "Our Core Values" : "قيمنا الجوهرية"}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {locale === "en" 
                ? "The principles that guide every decision we make"
                : "المبادئ التي توجه كل قرار نتخذه"
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">{locale === "en" ? value.title.en : value.title.ar}</h3>
                  <p className="text-slate-400 text-sm">
                    {locale === "en" ? value.desc.en : value.desc.ar}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {locale === "en" ? "Why Choose DINOORA?" : "لماذا تختار دينورا؟"}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {locale === "en"
                ? "We combine deep local expertise with global reach to deliver exceptional results"
                : "نجمع بين الخبرة المحلية العميقة والوصول العالمي لتقديم نتائج استثنائية"
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: GraduationCap,
                title: { en: "Expert Guidance", ar: "إرشاد خبير" },
                desc: { en: "Years of experience in China & Malaysia admissions", ar: "سنوات من الخبرة في القبول الجامعي في الصين وماليزيا" }
              },
              {
                icon: Globe,
                title: { en: "Global Network", ar: "شبكة عالمية" },
                desc: { en: "Direct partnerships with 50+ prestigious universities", ar: "شراكات مباشرة مع أكثر من 50 جامعة مرموقة" }
              },
              {
                icon: Shield,
                title: { en: "Trusted Service", ar: "خدمة موثوقة" },
                desc: { en: "85% client satisfaction rate", ar: "معدل رضا العملاء 85%" }
              },
              {
                icon: MessageCircle,
                title: { en: "24/7 Support", ar: "دعم على مدار الساعة" },
                desc: { en: "WhatsApp support in Arabic, Chinese & English", ar: "دعم واتساب بالعربية والصينية والإنجليزية" }
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-white mb-2">{locale === "en" ? item.title.en : item.title.ar}</h3>
                <p className="text-slate-400 text-sm">{locale === "en" ? item.desc.en : item.desc.ar}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus on China & Malaysia */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {locale === "en" ? "Our Focus: China & Malaysia" : "تركيزنا: الصين وماليزيا"}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {locale === "en"
                ? "Specialized expertise in two of Asia's leading education destinations"
                : "خبرة متخصصة في وجهتين رائدتين للتعليم في آسيا"
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* China */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-slate-950 border border-slate-800"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🇨🇳</span>
                <h3 className="text-2xl font-bold text-white">{locale === "en" ? "China" : "الصين"}</h3>
              </div>
              <div className="space-y-4 text-slate-400">
                <p>
                  {locale === "en"
                    ? "China offers world-class universities with affordable tuition and generous government scholarships. Our China office in Yiwu provides direct access to universities and scholarship programs."
                    : "تقدم الصين جامعات عالمية المستوى مع رسوم دراسية ميسورة ومنح حكومية سخية. مكتبنا في ييوو يوفر وصولاً مباشراً للجامعات وبرامج المنح."
                  }
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{locale === "en" ? "CSC Government Scholarships" : "منح حكومية CSC"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{locale === "en" ? "Top-ranked universities like Peking & Tsinghua" : "جامعات مرموقة مثل بكين وتسينغهوا"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{locale === "en" ? "Affordable living costs" : "تكاليف معيشة ميسورة"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{locale === "en" ? "Safe and welcoming environment" : "بيئة آمنة ومرحبة"}</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Malaysia */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-slate-950 border border-slate-800"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">🇲🇾</span>
                <h3 className="text-2xl font-bold text-white">{locale === "en" ? "Malaysia" : "ماليزيا"}</h3>
              </div>
              <div className="space-y-4 text-slate-400">
                <p>
                  {locale === "en"
                    ? "Malaysia is a multicultural hub with excellent universities and a straightforward visa process. Our Malaysia office in Kuala Lumpur ensures smooth transitions for international students."
                    : "ماليزيا مركز متعدد الثقافات بجامعات ممتازة وعملية تأشيرة مباشرة. مكتبنا في كوالالمبور يضمن انتقالاً سلساً للطلاب الدوليين."
                  }
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{locale === "en" ? "EMGS streamlined visa process" : "عملية تأشيرة مبسطة عبر EMGS"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{locale === "en" ? "Top universities like University of Malaya" : "جامعات مرموقة مثل جامعة مالايا"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{locale === "en" ? "English-taught programs" : "برامج باللغة الإنجليزية"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{locale === "en" ? "Halal food and Muslim-friendly environment" : "طعام حلال وبيئة مسلمة"}</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits of Studying Abroad */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {locale === "en" ? "Why Study Abroad?" : "لماذا الدراسة في الخارج؟"}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {locale === "en"
                ? "Transform your future with international education"
                : "غيّر مستقبلك بالتعليم الدولي"
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: { en: "Global Perspective", ar: "منظور عالمي" },
                desc: { en: "Develop cross-cultural understanding and global mindset", ar: "تطوير الفهم بين الثقافات والعقلية العالمية" }
              },
              {
                icon: TrendingUp,
                title: { en: "Career Opportunities", ar: "فرص مهنية" },
                desc: { en: "Enhance your resume with international experience", ar: "عزز سيرتك الذاتية بخبرة دولية" }
              },
              {
                icon: Users,
                title: { en: "Network Building", ar: "بناء شبكة علاقات" },
                desc: { en: "Connect with students and professionals from around the world", ar: "تواصل مع الطلاب والمحترفين من جميع أنحاء العالم" }
              },
              {
                icon: GraduationCap,
                title: { en: "Quality Education", ar: "تعليم نوعي" },
                desc: { en: "Access world-class universities and cutting-edge programs", ar: "الوصول إلى جامعات عالمية وبرامج متقدمة" }
              },
              {
                icon: Shield,
                title: { en: "Personal Growth", ar: "نمو شخصي" },
                desc: { en: "Build independence, confidence, and adaptability", ar: "بناء الاستقلالية والثقة والمرونة" }
              },
              {
                icon: Heart,
                title: { en: "Life Experience", ar: "تجربة حياة" },
                desc: { en: "Create unforgettable memories and lifelong friendships", ar: "اصنع ذكريات لا تُنسى وصداقات تدوم مدى الحياة" }
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-white mb-2">{locale === "en" ? benefit.title.en : benefit.title.ar}</h3>
                <p className="text-slate-400 text-sm">{locale === "en" ? benefit.desc.en : benefit.desc.ar}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {locale === "en" ? "Our Journey" : "رحلتنا"}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {locale === "en"
                ? "From humble beginnings to becoming a trusted education partner"
                : "من البدايات المتواضعة إلى أن نصبح شريكاً تعليمياً موثوقاً"
              }
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "2019",
                  title: { en: "Founded in Yiwu, China", ar: "التأسيس في ييوو، الصين" },
                  desc: { en: "Started with a simple mission: help Arab students access quality education", ar: "بدأنا بمهمة بسيطة: مساعدة الطلاب العرب على الوصول إلى تعليم نوعي" }
                },
                {
                  year: "2020",
                  title: { en: "First CSC Scholarship Success", ar: "أول نجاح في منحة CSC" },
                  desc: { en: "Helped first student secure full CSC scholarship to Tsinghua University", ar: "ساعدنا أول طالب على الحصول على منحة CSC كاملة لجامعة تسينغهوا" }
                },
                {
                  year: "2021",
                  title: { en: "Expanded to Malaysia", ar: "التوسع إلى ماليزيا" },
                  desc: { en: "Opened Malaysia office to serve students seeking education in Southeast Asia", ar: "فتحنا مكتب ماليزيا لخدمة الطلاب الباحثين عن التعليم في جنوب شرق آسيا" }
                },
                {
                  year: "2022",
                  title: { en: "500+ Students Served", ar: "خدمة أكثر من 500 طالب" },
                  desc: { en: "Reached milestone of helping hundreds of students achieve their dreams", ar: "وصلنا إلى علامة مساعدة مئات الطلاب على تحقيق أحلامهم" }
                },
                {
                  year: "2023",
                  title: { en: "Turkey Partnership", ar: "شراكة تركيا" },
                  desc: { en: "Added Turkey to our service portfolio with Türkiye Bursları expertise", ar: "أضفنا تركيا إلى محفظة خدماتنا بخبرة في Türkiye Bursları" }
                },
                {
                  year: "2024",
                  title: { en: "Continuing Excellence", ar: "الاستمرار في التميز" },
                  desc: { en: "Maintaining 85% client satisfaction rate while expanding our university network", ar: "الحفاظ على معدل رضا العملاء 85% مع توسيع شبكة جامعاتنا" }
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center">
                      {milestone.year}
                    </div>
                    {index < 5 && <div className="w-0.5 h-full bg-slate-700 mt-2" />}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-bold text-white mb-2">{locale === "en" ? milestone.title.en : milestone.title.ar}</h3>
                    <p className="text-slate-400">{locale === "en" ? milestone.desc.en : milestone.desc.ar}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {locale === "en" ? "Frequently Asked Questions" : "الأسئلة الشائعة"}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {locale === "en"
                ? "Answers to common questions about studying abroad"
                : "إجابات على الأسئلة الشائعة حول الدراسة في الخارج"
              }
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: { en: "What documents do I need to apply?", ar: "ما هي الوثائق التي أحتاجها للتقديم؟" },
                answer: { en: "Required documents include passport, academic transcripts, certificates, language test scores (IELTS/TOEFL/HSK), recommendation letters, and a personal statement.", ar: "الوثائق المطلوبة تشمل جواز السفر، كشوف الدرجات، الشهادات، نتائج اختبارات اللغة (IELTS/TOEFL/HSK)، خطابات التوصية، والبيان الشخصي." }
              },
              {
                question: { en: "How long does the application process take?", ar: "كم يستغرق عملية التقديم؟" },
                answer: { en: "Application processing typically takes 4-8 weeks depending on the university and program. We recommend applying at least 3 months before the start date.", ar: "معالجة الطلب تستغرق عادة 4-8 أسابيع حسب الجامعة والبرنامج. ننصح بالتقديم قبل 3 أشهر على الأقل من تاريخ البدء." }
              },
              {
                question: { en: "Do you help with scholarships?", ar: "هل تساعدون في المنح الدراسية؟" },
                answer: { en: "Yes! We specialize in helping students secure scholarships including CSC, Türkiye Bursları, and university-specific scholarships. Our success rate is 85%.", ar: "نعم! نتخصص في مساعدة الطلاب على الحصول على منح بما في ذلك CSC، Türkiye Bursları، والمنح الخاصة بالجامعات. معدل نجاحنا 85%." }
              },
              {
                question: { en: "What if my application is rejected?", ar: "ماذا إذا تم رفض طلبي؟" },
                answer: { en: "We offer a 100% money-back guarantee. If we fail to secure your admission, we will refund your service fees in full.", ar: "نقدم ضمان استرداد 100%. إذا فشلنا في تأمين قبولك، سنسترد رسوم خدمتك بالكامل." }
              },
              {
                question: { en: "Do you provide accommodation assistance?", ar: "هل تقدمون مساعدة في السكن؟" },
                answer: { en: "Yes, we help students find safe and affordable accommodation near their universities. We can also assist with airport pickup and initial settlement.", ar: "نعم، نساعد الطلاب في العثور على سكن آمن وميسور بالقرب من جامعاتهم. يمكننا أيضاً المساعدة في الاستقبال من المطار والتسوية الأولية." }
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-slate-900 border border-slate-800"
              >
                <h3 className="font-bold text-white mb-2">{locale === "en" ? faq.question.en : faq.question.ar}</h3>
                <p className="text-slate-400">{locale === "en" ? faq.answer.en : faq.answer.ar}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Offices */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {locale === "en" ? "Our Offices" : "مكاتبنا"}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {locale === "en"
                ? "Visit us at our international locations"
                : "زورنا في مواقعنا الدولية"
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* China Office */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-slate-950 border border-slate-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🇨🇳</span>
                <h3 className="text-xl font-bold text-white">{locale === "en" ? "China Office" : "المكتب الصيني"}</h3>
              </div>
              <div className="space-y-3 text-slate-400">
                <p className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Room 201, 2nd Floor, Building 2, No. 37, Getang Village, Jiangdong Street, Yiwu City, Zhejiang Province, China</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span>+86 155 8723 7864</span>
                </p>
              </div>
            </motion.div>
            
            {/* Malaysia Office */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-slate-950 border border-slate-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🇲🇾</span>
                <h3 className="text-xl font-bold text-white">{locale === "en" ? "Malaysia Office" : "المكتب الماليزي"}</h3>
              </div>
              <div className="space-y-3 text-slate-400">
                <p className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Tower 5, SkyPark @CYBERJAYA, Level 4 - 07, Cyberjaya, Selangor, Malaysia</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>+86 155 8723 7864</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {locale === "en" ? "Our Certifications" : "شهاداتنا"}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {locale === "en"
                ? "Trusted partner for international education"
                : "شريك موثوق للتعليم الدولي"
              }
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {locale === "en" ? "Ready to Start Your Journey?" : "مستعد لبدء رحلتك؟"}
          </h2>
          <p className="text-slate-400 mb-8">
            {locale === "en"
              ? "Let us help you achieve your educational dreams. Contact us today for a free consultation."
              : "دعنا نساعدك في تحقيق أحلامك التعليمية. تواصل معنا اليوم للحصول على استشارة مجانية."
            }
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <ApplyButton size="lg" />
            <WhatsAppButton variant="outline" size="lg" />
          </div>
        </div>
      </section>
    </main>
  )
}
