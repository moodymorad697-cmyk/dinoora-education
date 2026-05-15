"use client"

import { Mail, Phone, MessageCircle, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LazyVideoBackground } from "@/components/lazy/lazy-backgrounds"

export function ContactFloatingBar() {
  const { locale } = useLanguage()

  const phone = "+8615587237864"
  const email = "maomoody524@gmail.com"
  const whatsapp = "8615587237864"
  const addressChina = "Room 201, 2nd Floor, Building 2, No. 37, Getang Village, Jiangdong Street, Yiwu City, Zhejiang Province, China"
  const addressMalaysia = "Tower 5, SkyPark @CYBERJAYA, Level 4 - 07, Cyberjaya, Selangor, Malaysia"
  const mapsLinkChina = "https://maps.google.com/?q=Yiwu+City+Zhejiang+Province+China"
  const mapsLinkMalaysia = "https://maps.google.com/?q=SkyPark+Cyberjaya+Malaysia"

  const contactItems = [
    {
      icon: Phone,
      label: locale === "ar" ? "الهاتف" : "Phone",
      href: `tel:${phone.replace(/\s+/g, '')}`,
      value: phone,
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: Mail,
      label: locale === "ar" ? "البريد" : "Email",
      href: `mailto:${email}`,
      value: email,
      color: "from-red-600 to-red-400"
    },
    {
      icon: MessageCircle,
      label: locale === "ar" ? "واتساب" : "WhatsApp",
      href: `https://wa.me/${whatsapp}`,
      value: locale === "ar" ? "تواصل معنا" : "Chat with us",
      color: "from-green-600 to-green-400"
    },
    {
      icon: MapPin,
      label: locale === "ar" ? "الموقع" : "Location",
      href: mapsLinkChina,
      value: locale === "ar" ? "عنواننا" : "Our location",
      color: "from-purple-600 to-purple-400",
      isModal: true
    }
  ]

  return (
    <>
      {/* Enhanced Background with Video */}
      <div className="fixed bottom-0 left-0 right-0 z-30">
        <LazyVideoBackground
          videoSrc="/videos/contact-background.mp4"
          fallbackImageSrc="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80"
          opacity={0.3} // Increased visibility
          blur={1} // Less blur for more visibility
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/70 to-transparent" />
        
        {/* Additional animated elements */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/30 rounded-full blur-[60px] animate-pulse" />
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-accent/30 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-card/95 via-card/90 to-card/95 backdrop-blur-2xl border-t-4 border-primary/70 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.3)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center sm:justify-start gap-8 sm:gap-14 h-24 sm:h-28 overflow-x-auto py-3">
            {contactItems.map((item, index) => (
              item.isModal ? (
                <div key={index} className="group relative flex-shrink-0">
                  <a
                    href={mapsLinkChina}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex flex-col items-center justify-center w-20 h-20 rounded-2xl transition-all duration-300 overflow-hidden"
                    title={item.label}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className="relative flex flex-col items-center gap-1.5 z-10 group-hover:scale-110 transition-transform duration-300">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary-foreground/30 group-hover:to-primary-foreground/20 transition-all duration-300">
                        <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <span className="text-[10px] font-bold text-foreground group-hover:text-primary-foreground transition-colors duration-300 text-center leading-tight">{item.label}</span>
                    </div>
                  </a>

                  <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-96 bg-gradient-to-br from-card to-card/95 border-2 border-primary/50 rounded-2xl p-6 shadow-2xl shadow-primary/50 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
                    <div className="space-y-4">
                      <div className="text-center pb-4 border-b-2 border-primary/30">
                        <h3 className="font-bold text-lg gradient-text">{locale === "ar" ? "تواصل معنا" : "Contact Us"}</h3>
                      </div>

                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 text-white flex-shrink-0">
                            <Phone className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-bold text-muted-foreground">{locale === "ar" ? "الهاتف" : "Phone"}</p>
                            <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-sm font-bold text-primary hover:text-primary/80 transition-colors">{phone}</a>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-red-400 text-white flex-shrink-0">
                            <Mail className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-bold text-muted-foreground">{locale === "ar" ? "البريد" : "Email"}</p>
                            <a href={`mailto:${email}`} className="text-sm font-bold text-primary hover:text-primary/80 transition-colors break-all">{email}</a>
                          </div>
                        </div>

                        {/* China Office */}
                        <div className="flex gap-3 rounded-lg bg-primary/5 p-3 border border-primary/20">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 text-white flex-shrink-0">
                            <MapPin className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-bold text-muted-foreground">{locale === "ar" ? "🇨🇳 المكتب الصيني" : "🇨🇳 China Office"}</p>
                            <p className="text-xs text-foreground leading-relaxed font-medium mb-2">{addressChina}</p>
                            <a href={mapsLinkChina} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:text-primary/80 font-semibold inline-block hover:underline">
                              {locale === "ar" ? "📍 افتح في Google Maps" : "📍 Open in Google Maps"}
                            </a>
                          </div>
                        </div>

                        {/* Malaysia Office */}
                        <div className="flex gap-3 rounded-lg bg-emerald-500/5 p-3 border border-emerald-500/20">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-400 text-white flex-shrink-0">
                            <MapPin className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-bold text-muted-foreground">{locale === "ar" ? "🇲🇾 المكتب الماليزي" : "🇲🇾 Malaysia Office"}</p>
                            <p className="text-xs text-foreground leading-relaxed font-medium mb-2">{addressMalaysia}</p>
                            <a href={mapsLinkMalaysia} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:text-primary/80 font-semibold inline-block hover:underline">
                              {locale === "ar" ? "📍 افتح في Google Maps" : "📍 Open in Google Maps"}
                            </a>
                          </div>
                        </div>

                        <div className="flex gap-3 border-t-2 border-primary/30 pt-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-green-400 text-white flex-shrink-0">
                            <MessageCircle className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-bold text-muted-foreground">{locale === "ar" ? "واتساب" : "WhatsApp"}</p>
                            <p className="text-xs font-bold text-primary">{locale === "ar" ? "تواصل معنا مباشرة" : "Direct messaging"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-col items-center justify-center w-20 h-20 rounded-2xl transition-all duration-300 overflow-hidden group flex-shrink-0"
                  title={item.label}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative flex flex-col items-center gap-1.5 z-10 group-hover:scale-110 transition-transform duration-300">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary-foreground/30 group-hover:to-primary-foreground/20 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <span className="text-[10px] font-bold text-foreground group-hover:text-primary-foreground transition-colors duration-300 text-center leading-tight">{item.label}</span>
                  </div>
                </a>
              )
            ))}
          </div>
        </div>
      </div>

      <div className="h-24 sm:h-28" />
    </>
  )
}
