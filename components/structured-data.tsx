"use client"

import Script from "next/script"

// Organization Schema
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "DINOORA Education",
    "alternateName": "DINOORA",
    "url": "https://dinoora.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://dinoora.com/logo.png",
      "width": 512,
      "height": 512
    },
    "description": "Premium student recruitment and study abroad services for China, Malaysia, and Turkey. Expert admission, visa, and housing support.",
    "foundingDate": "2019",
    "sameAs": [
      "https://www.facebook.com/share/17mLtvZn95/?mibextid=wwXIfr",
      "https://www.instagram.com/dinoora_education?igsh=YndmNTRubWYwbW80&utm_source=qr",
      "https://www.tiktok.com/@kingmorad0?is_from_webapp=1&sender_device=pc"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-155-8723-7864",
      "contactType": "customer service",
      "availableLanguage": ["English", "Arabic", "Chinese"],
      "areaServed": ["SA", "AE", "EG", "JO", "IQ", "PS", "QA", "KW", "OM", "BH", "YE", "LY", "TN", "DZ", "MA", "SD", "MR", "SO", "DJ", "ET", "KE", "TZ", "UG", "RW", "BI", "MW", "ZM", "ZW", "BW", "NA", "MZ", "MG", "MU", "SC", "KM", "NG", "GH", "CI", "SN", "CM", "BF", "ML", "NE", "TD", "CF", "GA", "CG", "CD", "AO", "GQ", "GW", "LR", "SL", "GN", "BJ", "TG", "BJ", "TG"]
    },
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Room 201, 2nd Floor, Building 2, No. 37, Getang Village, Jiangdong Street",
        "addressLocality": "Yiwu City",
        "addressRegion": "Zhejiang Province",
        "addressCountry": "CN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Tower 5, SkyPark @CYBERJAYA, Level 4 - 07",
        "addressLocality": "Cyberjaya",
        "addressRegion": "Selangor",
        "addressCountry": "MY"
      }
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Global"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Education Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "University Admission Services",
            "description": "Complete university application support for international students"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Visa Application Assistance",
            "description": "Student visa processing and documentation support"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Scholarship Guidance",
            "description": "CSC and university scholarship application support"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Accommodation Services",
            "description": "Student housing and airport pickup arrangements"
          }
        }
      ]
    }
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Website Schema
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DINOORA Education",
    "url": "https://dinoora.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://dinoora.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": ["en", "ar", "zh"]
  }

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Local Business Schema
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "DINOORA Education Consultancy",
    "image": "https://dinoora.com/og-image.jpg",
    "@id": "https://dinoora.com",
    "url": "https://dinoora.com",
    "telephone": "+8615587237864",
    "priceRange": "$$",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Room 201, 2nd Floor, Building 2, No. 37, Getang Village, Jiangdong Street",
        "addressLocality": "Yiwu City",
        "addressRegion": "Zhejiang Province",
        "addressCountry": "CN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Tower 5, SkyPark @CYBERJAYA, Level 4 - 07",
        "addressLocality": "Cyberjaya",
        "addressRegion": "Selangor",
        "addressCountry": "MY"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.9042,
      "longitude": 116.4074
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/share/17mLtvZn95/?mibextid=wwXIfr",
      "https://www.instagram.com/dinoora_education?igsh=YndmNTRubWYwbW80&utm_source=qr",
      "https://www.tiktok.com/@kingmorad0?is_from_webapp=1&sender_device=pc"
    ]
  }

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Breadcrumb Schema
export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// FAQ Schema
export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Article Schema (for blog posts if needed)
export function ArticleSchema({
  headline,
  description,
  image,
  author,
  datePublished,
  dateModified
}: {
  headline: string
  description: string
  image: string
  author: string
  datePublished: string
  dateModified: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": image,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "DINOORA Education",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dinoora.com/logo.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified
  }

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Service Schema
export function ServiceSchema({
  name,
  description,
  provider,
  areaServed
}: {
  name: string
  description: string
  provider: string
  areaServed: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": provider
    },
    "areaServed": areaServed
  }

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
