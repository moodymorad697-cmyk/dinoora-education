"use client"

import { useLanguage } from "@/lib/language-context"
import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface BreadcrumbItem {
  label: string
  href: string
}

export function Breadcrumbs() {
  const { locale } = useLanguage()
  const pathname = usePathname()
  
  // Generate breadcrumbs based on current path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = pathname.split('/').filter(segment => segment !== '')
    const breadcrumbs: BreadcrumbItem[] = [
      {
        label: locale === "ar" ? "الرئيسية" : "Home",
        href: "/"
      }
    ]
    
    let currentPath = ""
    
    // Common page mappings
    const pageMappings: Record<string, { en: string; ar: string }> = {
      "about": { en: "About", ar: "عنا" },
      "blog": { en: "Blog", ar: "المدونة" },
      "contact": { en: "Contact", ar: "اتصل بنا" },
      "services": { en: "Services", ar: "الخدمات" },
      "pricing": { en: "Pricing", ar: "الأسعار" },
      "admission": { en: "Admission", ar: "القبول" },
      "visa": { en: "Visa", ar: "التأشيرة" },
      "accommodation": { en: "Accommodation", ar: "السكن" },
      "documents": { en: "Documents", ar: "الوثائق" },
      "airport": { en: "Airport Pickup", ar: "الاستقبال من المطار" },
      "followup": { en: "Follow-up", ar: "المتابعة" }
    }
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const isLast = index === pathSegments.length - 1
      
      // Check if it's a blog post slug
      if (pathSegments[0] === 'blog' && index > 0) {
        // Don't add blog post slugs to breadcrumbs (too long)
        return
      }
      
      const mapping = pageMappings[segment]
      if (mapping) {
        breadcrumbs.push({
          label: locale === "en" ? mapping.en : mapping.ar,
          href: isLast ? pathname : currentPath
        })
      }
    })
    
    return breadcrumbs
  }
  
  const breadcrumbs = generateBreadcrumbs()
  
  // Don't show breadcrumbs on home page
  if (pathname === '/') {
    return null
  }
  
  return (
    <nav className="py-4 border-b border-slate-800 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-2 text-sm overflow-x-auto">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index === 0 && <Home className="w-4 h-4 text-slate-500" />}
              {index > 0 && <ChevronRight className="w-4 h-4 text-slate-600" />}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-amber-400 font-medium">{item.label}</span>
              ) : (
                <Link 
                  href={item.href} 
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
