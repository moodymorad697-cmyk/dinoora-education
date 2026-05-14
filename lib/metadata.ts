import { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dinoora.com'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'DINOORA Education - Study Abroad in China, Malaysia & Turkey',
    template: '%s | DINOORA Education',
  },
  description: 'Expert university admission services for international students. Study in China, Malaysia, or Turkey with full support.',
  keywords: ['study abroad', 'university admission', 'international education'],
}

// Services Pages Metadata
export const servicesMetadata: Record<string, Metadata> = {
  admission: {
    title: 'University Admission Services - Study Abroad Assistance',
    description: 'Expert university admission services for top universities in China, Malaysia & Turkey. 500+ partner universities, 98% acceptance rate. Free consultation.',
    keywords: [
      'university admission',
      'study abroad application',
      'China university admission',
      'Malaysia university admission',
      'Turkey university admission',
      'international student application',
      'university application help',
      'study abroad consultancy'
    ],
    openGraph: {
      title: 'University Admission Services - DINOORA Education',
      description: 'Expert admission services for 500+ universities. 98% acceptance rate.',
      images: ['/og-admission.jpg'],
    },
  },
  visa: {
    title: 'Student Visa Services - Visa Application Assistance',
    description: 'Professional student visa application services for China, Malaysia & Turkey. 98% visa success rate. Document preparation, interview coaching.',
    keywords: [
      'student visa',
      'China student visa',
      'Malaysia student visa',
      'Turkey student visa',
      'visa application',
      'study visa assistance',
      'student visa help'
    ],
    openGraph: {
      title: 'Student Visa Services - DINOORA Education',
      description: '98% visa success rate. Complete visa application support.',
      images: ['/og-visa.jpg'],
    },
  },
  scholarship: {
    title: 'Scholarship Services - CSC & University Scholarships',
    description: 'CSC scholarship application, university scholarships, and financial aid support. Full scholarship guidance for international students.',
    keywords: [
      'CSC scholarship',
      'Chinese Government Scholarship',
      'university scholarships',
      'study abroad scholarships',
      'international student scholarships',
      'full scholarship China'
    ],
    openGraph: {
      title: 'Scholarship Services - DINOORA Education',
      description: 'CSC scholarship and university scholarship support.',
      images: ['/og-scholarship.jpg'],
    },
  },
  accommodation: {
    title: 'Student Accommodation & Housing Services',
    description: 'Student housing, dormitory booking, and airport pickup services. Safe and affordable accommodation near universities in China, Malaysia & Turkey.',
    keywords: [
      'student accommodation',
      'student housing',
      'university dormitory',
      'airport pickup',
      'student housing China',
      'student housing Malaysia'
    ],
    openGraph: {
      title: 'Student Accommodation - DINOORA Education',
      description: 'Safe student housing and airport pickup services.',
      images: ['/og-accommodation.jpg'],
    },
  },
  documents: {
    title: 'Document Legalization & Authentication Services',
    description: 'Document authentication, notarization, and legalization services. WES evaluation, embassy attestation for study abroad applications.',
    keywords: [
      'document legalization',
      'document authentication',
      'WES evaluation',
      'embassy attestation',
      'notarization services'
    ],
    openGraph: {
      title: 'Document Services - DINOORA Education',
      description: 'Complete document authentication and legalization.',
      images: ['/og-documents.jpg'],
    },
  },
  airport: {
    title: 'Airport Pickup & Arrival Support Services',
    description: 'Airport pickup, arrival assistance, and student orientation. Safe transportation from airport to university accommodation.',
    keywords: [
      'airport pickup',
      'arrival support',
      'student orientation',
      'airport transfer',
      'student arrival services'
    ],
    openGraph: {
      title: 'Airport Services - DINOORA Education',
      description: 'Airport pickup and arrival support for students.',
      images: ['/og-airport.jpg'],
    },
  },
  followup: {
    title: 'Student Follow-up & Support Services',
    description: 'Ongoing student support, academic guidance, and university follow-up. 24/7 assistance throughout your study abroad journey.',
    keywords: [
      'student support',
      'academic guidance',
      'student follow-up',
      'study abroad support',
      'international student help'
    ],
    openGraph: {
      title: 'Student Support - DINOORA Education',
      description: '24/7 ongoing support throughout your studies.',
      images: ['/og-followup.jpg'],
    },
  },
}

// Destinations Pages Metadata
export const destinationsMetadata: Record<string, Metadata> = {
  china: {
    title: 'Study in China - Top Universities & CSC Scholarships',
    description: 'Study in China at top-ranked universities. Tsinghua, Peking, Fudan. CSC scholarships, MBBS programs, engineering degrees. Low tuition fees.',
    keywords: [
      'study in China',
      'CSC scholarship China',
      'MBBS in China',
      'Chinese universities',
      'Tsinghua University',
      'Peking University',
      'engineering in China',
      'medicine in China'
    ],
    openGraph: {
      title: 'Study in China - DINOORA Education',
      description: 'Top Chinese universities. CSC scholarships. Low tuition.',
      images: ['/og-china.jpg'],
    },
  },
  malaysia: {
    title: 'Study in Malaysia - Affordable Quality Education',
    description: 'Study in Malaysia at affordable tuition fees. University of Malaya, Taylor\'s University. English programs, multicultural environment.',
    keywords: [
      'study in Malaysia',
      'Malaysia universities',
      'University of Malaya',
      'affordable study abroad',
      'English programs Malaysia'
    ],
    openGraph: {
      title: 'Study in Malaysia - DINOORA Education',
      description: 'Affordable quality education in Malaysia.',
      images: ['/og-malaysia.jpg'],
    },
  },
  turkey: {
    title: 'Study in Turkey - Turkish Universities & Scholarships',
    description: 'Study in Turkey with scholarships. Bogazici, METU, Koc University. English programs, historical culture, affordable living costs.',
    keywords: [
      'study in Turkey',
      'Turkish universities',
      'Turkey scholarships',
      'Bogazici University',
      'METU',
      'study Turkey English'
    ],
    openGraph: {
      title: 'Study in Turkey - DINOORA Education',
      description: 'Turkish universities with scholarships.',
      images: ['/og-turkey.jpg'],
    },
  },
}

// Programs Metadata
export const programsMetadata: Record<string, Metadata> = {
  engineering: {
    title: 'Engineering Programs - Study Engineering Abroad',
    description: 'Engineering degrees in China, Malaysia & Turkey. Civil, mechanical, electrical, computer engineering. Top engineering universities.',
    keywords: [
      'engineering degree',
      'study engineering',
      'civil engineering',
      'mechanical engineering',
      'computer engineering',
      'engineering China',
      'engineering Malaysia'
    ],
  },
  medicine: {
    title: 'MBBS & Medicine Programs - Study Medicine Abroad',
    description: 'MBBS programs in China, Malaysia & Turkey. WHO-recognized medical degrees. English medium, affordable tuition, clinical training.',
    keywords: [
      'MBBS',
      'study medicine',
      'medical degree',
      'MBBS China',
      'MBBS Malaysia',
      'medicine abroad',
      'WHO recognized MBBS'
    ],
  },
  business: {
    title: 'Business & MBA Programs - Study Business Abroad',
    description: 'Business administration, MBA, finance, marketing degrees. Study business in China, Malaysia & Turkey. Internship opportunities.',
    keywords: [
      'business degree',
      'MBA program',
      'study business',
      'business China',
      'finance degree',
      'marketing degree'
    ],
  },
}

// Utility function to generate metadata for any page
export function generateMetadata(
  title: string,
  description: string,
  keywords: string[] = [],
  ogImage: string = '/og-image.jpg'
): Metadata {
  return {
    title,
    description,
    keywords: [...defaultMetadata.keywords || [], ...keywords],
    openGraph: {
      title,
      description,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}
