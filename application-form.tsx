"use client"

import { useState } from "react"
import { Send, CheckCircle, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useLanguage } from "@/lib/language-context"

const countries = [
  "Afghanistan", "Albania", "Algeria", "Angola", "Argentina", "Azerbaijan",
  "Bahrain", "Bangladesh", "Benin", "Botswana", "Brazil", "Burkina Faso",
  "Cameroon", "Chad", "Colombia", "Comoros", "Congo", "Djibouti", "Egypt",
  "Ethiopia", "Gambia", "Ghana", "Guinea", "India", "Indonesia", "Iraq",
  "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Lebanon",
  "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Morocco",
  "Mozambique", "Nepal", "Niger", "Nigeria", "Oman", "Pakistan", "Palestine",
  "Philippines", "Qatar", "Rwanda", "Saudi Arabia", "Senegal", "Sierra Leone",
  "Somalia", "South Africa", "Sri Lanka", "Sudan", "Syria", "Tanzania",
  "Thailand", "Togo", "Tunisia", "Turkmenistan", "Uganda", "UAE", "Uzbekistan",
  "Vietnam", "Yemen", "Zambia", "Zimbabwe", "Other"
]

const majors = [
  "Computer Science", "Software Engineering", "Artificial Intelligence",
  "Medicine (MBBS)", "Pharmacy", "Nursing", "Public Health",
  "Civil Engineering", "Mechanical Engineering", "Electrical Engineering",
  "Business Administration", "Finance", "Marketing", "International Business",
  "Architecture", "Law", "International Relations", "Economics",
  "Data Science", "Cybersecurity", "Biotechnology", "Chemistry",
  "Physics", "Mathematics", "Environmental Science", "Other"
]

const destinations = ["China", "Malaysia", "Turkey"]

export function ApplicationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { t, dir, locale } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="apply" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-3xl border border-primary/20 bg-card/50 backdrop-blur-xl p-10 sm:p-14 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full gold-gradient shadow-lg shadow-primary/25">
              <CheckCircle className="h-10 w-10 text-primary-foreground" />
            </div>
            <h2 className="mt-8 text-3xl font-bold gradient-text">{t.applicationForm.success.title}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-md mx-auto">
              {t.applicationForm.success.description}
            </p>
            <Button
              className="mt-8 gold-gradient text-primary-foreground hover:opacity-90 px-8 py-6 text-lg font-semibold"
              onClick={() => setIsSubmitted(false)}
            >
              {t.applicationForm.success.submitAnother}
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="apply" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Column - Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t.applicationForm.label}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-6">
              <span className="text-foreground">{t.applicationForm.title.split(" ").slice(0, -1).join(" ")} </span>
              <span className="gradient-text">{t.applicationForm.title.split(" ").slice(-1)}</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              {t.applicationForm.description}
            </p>
            
            {/* Benefits */}
            <div className="space-y-5">
              {[
                t.applicationForm.benefits.consultation,
                t.applicationForm.benefits.recommendations,
                t.applicationForm.benefits.costs,
                t.applicationForm.benefits.response,
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            {/* Gradient Border Effect */}
            <div className="absolute -inset-1 gold-gradient rounded-[2rem] opacity-20 blur-sm" />
            
            <div className="relative rounded-3xl border border-border/50 bg-card/80 backdrop-blur-xl p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">{t.applicationForm.form.fullName}</Label>
                  <Input
                    id="name"
                    placeholder={t.applicationForm.form.fullNamePlaceholder}
                    required
                    className="bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground h-12 rounded-xl focus:border-primary"
                    dir={dir}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-foreground font-medium">{t.applicationForm.form.country}</Label>
                    <Select required>
                      <SelectTrigger className="bg-secondary/50 border-border/50 text-foreground h-12 rounded-xl">
                        <SelectValue placeholder={t.applicationForm.form.countryPlaceholder} />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        {countries.map((country) => (
                          <SelectItem key={country} value={country.toLowerCase().replace(/\s+/g, "-")}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="destination" className="text-foreground font-medium">{t.applicationForm.form.destination}</Label>
                    <Select required>
                      <SelectTrigger className="bg-secondary/50 border-border/50 text-foreground h-12 rounded-xl">
                        <SelectValue placeholder={t.applicationForm.form.destinationPlaceholder} />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        {destinations.map((dest) => (
                          <SelectItem key={dest} value={dest.toLowerCase()}>
                            {dest}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="major" className="text-foreground font-medium">{t.applicationForm.form.major}</Label>
                  <Select required>
                    <SelectTrigger className="bg-secondary/50 border-border/50 text-foreground h-12 rounded-xl">
                      <SelectValue placeholder={t.applicationForm.form.majorPlaceholder} />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      {majors.map((major) => (
                        <SelectItem key={major} value={major.toLowerCase().replace(/\s+/g, "-")}>
                          {major}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-foreground font-medium">{t.applicationForm.form.whatsapp}</Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder={t.applicationForm.form.whatsappPlaceholder}
                    required
                    className="bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground h-12 rounded-xl focus:border-primary"
                    dir="ltr"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gold-gradient text-primary-foreground hover:opacity-90 py-6 text-lg rounded-xl font-semibold shadow-lg shadow-primary/25 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className={`animate-spin h-5 w-5 ${dir === "rtl" ? "ml-3" : "-ml-1 mr-3"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t.applicationForm.form.submitting}
                    </>
                  ) : (
                    <>
                      {t.applicationForm.form.submit}
                      <ArrowRight className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${dir === "rtl" ? "mr-2 rotate-180 group-hover:-translate-x-1" : "ml-2"}`} />
                    </>
                  )}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  {t.applicationForm.form.agreement}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
