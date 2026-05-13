import type { DestinationEnrichmentProps } from "@/components/destination-enrichment"

export const chinaEnrichment: DestinationEnrichmentProps = {
  countryName: { en: "China", ar: "الصين" },
  topCities: [
    {
      name: { en: "Beijing", ar: "بكين" },
      description: {
        en: "Capital city home to top universities like Tsinghua and Peking, blending ancient heritage with cutting-edge innovation.",
        ar: "العاصمة وموطن أرقى الجامعات كتسينغهوا وبكين، تجمع بين التراث العريق والابتكار المتطور.",
      },
      highlight: { en: "8 Top-100 Universities", ar: "٨ جامعات ضمن أفضل ١٠٠" },
    },
    {
      name: { en: "Shanghai", ar: "شنغهاي" },
      description: {
        en: "Global financial hub with cosmopolitan vibes, modern campuses, and exceptional career opportunities for graduates.",
        ar: "المركز المالي العالمي بأجواء كوزموبوليتانية، حرم جامعي حديث وفرص مهنية استثنائية للخريجين.",
      },
      highlight: { en: "Top Business Schools", ar: "أفضل كليات إدارة الأعمال" },
    },
    {
      name: { en: "Guangzhou", ar: "قوانغتشو" },
      description: {
        en: "Southern gateway with strong medical schools, affordable living, and a thriving Arab student community.",
        ar: "بوابة الجنوب بكليات طب قوية، تكاليف معيشة منخفضة، ومجتمع طلابي عربي نشط.",
      },
      highlight: { en: "Best for MBBS", ar: "الأفضل لدراسة الطب" },
    },
  ],
  topUniversities: [
    {
      name: "Tsinghua University",
      ranking: "QS Ranking #14 Worldwide",
      city: { en: "Beijing", ar: "بكين" },
      programs: { en: "Engineering, AI, Business", ar: "هندسة، ذكاء اصطناعي، أعمال" },
    },
    {
      name: "Peking University",
      ranking: "QS Ranking #17 Worldwide",
      city: { en: "Beijing", ar: "بكين" },
      programs: { en: "Medicine, Sciences, Arts", ar: "طب، علوم، فنون" },
    },
    {
      name: "Fudan University",
      ranking: "QS Ranking #39 Worldwide",
      city: { en: "Shanghai", ar: "شنغهاي" },
      programs: { en: "Economics, Journalism, IR", ar: "اقتصاد، صحافة، علاقات دولية" },
    },
    {
      name: "Shanghai Jiao Tong",
      ranking: "QS Ranking #45 Worldwide",
      city: { en: "Shanghai", ar: "شنغهاي" },
      programs: { en: "Engineering, Medicine", ar: "هندسة، طب" },
    },
  ],
  livingCosts: [
    { label: { en: "Accommodation", ar: "السكن" }, amount: "$150-300", icon: "rent" },
    { label: { en: "Food", ar: "الطعام" }, amount: "$100-200", icon: "food" },
    { label: { en: "Transport", ar: "المواصلات" }, amount: "$30-50", icon: "transport" },
    { label: { en: "Internet & Bills", ar: "إنترنت وفواتير" }, amount: "$20-40", icon: "internet" },
    { label: { en: "Tuition/Year", ar: "الرسوم/سنة" }, amount: "$2,000-5,000", icon: "tuition" },
  ],
  visaSteps: [
    {
      title: { en: "Document Preparation", ar: "تجهيز الوثائق" },
      description: {
        en: "We help you gather all required documents: passport, certificates, photos, and financial proof.",
        ar: "نساعدك في جمع جميع الوثائق المطلوبة: جواز السفر، الشهادات، الصور، وإثبات الكفالة المالية.",
      },
      duration: { en: "1-2 weeks", ar: "١-٢ أسبوع" },
    },
    {
      title: { en: "University Admission", ar: "القبول الجامعي" },
      description: {
        en: "Submit applications to selected universities. Receive admission letter (JW202 form) within 2-4 weeks.",
        ar: "تقديم الطلبات للجامعات المختارة. استلام رسالة القبول (نموذج JW202) خلال ٢-٤ أسابيع.",
      },
      duration: { en: "2-4 weeks", ar: "٢-٤ أسابيع" },
    },
    {
      title: { en: "Visa Application (X1/X2)", ar: "تقديم التأشيرة (X1/X2)" },
      description: {
        en: "Apply for student visa at the Chinese embassy with admission documents. Approval rate: 98%.",
        ar: "تقديم تأشيرة الطالب في السفارة الصينية مع وثائق القبول. نسبة الموافقة: ٩٨٪.",
      },
      duration: { en: "1-2 weeks", ar: "١-٢ أسبوع" },
    },
    {
      title: { en: "Travel & Arrival", ar: "السفر والوصول" },
      description: {
        en: "We arrange airport pickup, dormitory check-in, and orientation upon your arrival in China.",
        ar: "نُرتب الاستقبال من المطار، تسجيل السكن الجامعي، والتوجيه عند وصولك إلى الصين.",
      },
      duration: { en: "Pre-semester", ar: "قبل الفصل الدراسي" },
    },
  ],
  testimonial: {
    name: "Ahmed Al-Mansouri",
    university: { en: "Tsinghua University", ar: "جامعة تسينغهوا" },
    program: { en: "MBA Student", ar: "طالب ماجستير إدارة أعمال" },
    quote: {
      en: "Dinoora made my dream a reality. From application to arrival in Beijing, every step was handled professionally. I'm now studying at one of the world's top universities with a full scholarship.",
      ar: "حوّلت دينورا حلمي إلى حقيقة. من التقديم حتى الوصول إلى بكين، كل خطوة تمت باحترافية. أدرس الآن في إحدى أفضل جامعات العالم بمنحة كاملة.",
    },
    rating: 5,
  },
}

export const malaysiaEnrichment: DestinationEnrichmentProps = {
  countryName: { en: "Malaysia", ar: "ماليزيا" },
  topCities: [
    {
      name: { en: "Kuala Lumpur", ar: "كوالالمبور" },
      description: {
        en: "Modern capital with iconic Petronas Towers, hosting Malaysia's premier universities and a vibrant international student community.",
        ar: "العاصمة الحديثة ببرجي بتروناس الشهيرين، تضم أرقى جامعات ماليزيا ومجتمع طلابي دولي نابض بالحياة.",
      },
      highlight: { en: "Tech & Business Hub", ar: "مركز التقنية والأعمال" },
    },
    {
      name: { en: "Cyberjaya", ar: "سايبرجايا" },
      description: {
        en: "Malaysia's Silicon Valley with state-of-the-art tech universities and innovation centers, perfect for IT and engineering students.",
        ar: "وادي السيليكون الماليزي بجامعات تقنية متطورة ومراكز ابتكار، مثالي لطلاب تكنولوجيا المعلومات والهندسة.",
      },
      highlight: { en: "IT & Innovation", ar: "تقنية وابتكار" },
    },
    {
      name: { en: "Penang", ar: "بينانغ" },
      description: {
        en: "UNESCO heritage island combining medical schools with cultural diversity, beautiful beaches, and authentic Malay-Chinese-Indian cuisine.",
        ar: "جزيرة تراث اليونسكو تجمع بين كليات الطب والتنوع الثقافي، الشواطئ الجميلة والمأكولات الأصيلة.",
      },
      highlight: { en: "Medical Education", ar: "تعليم طبي متميز" },
    },
  ],
  topUniversities: [
    {
      name: "University of Malaya (UM)",
      ranking: "QS Ranking #65 Worldwide",
      city: { en: "Kuala Lumpur", ar: "كوالالمبور" },
      programs: { en: "Medicine, Engineering, Law", ar: "طب، هندسة، قانون" },
    },
    {
      name: "Universiti Putra Malaysia",
      ranking: "QS Ranking #158 Worldwide",
      city: { en: "Selangor", ar: "سيلانجور" },
      programs: { en: "Agriculture, Veterinary", ar: "زراعة، بيطرة" },
    },
    {
      name: "Monash University Malaysia",
      ranking: "Australian University Branch",
      city: { en: "Selangor", ar: "سيلانجور" },
      programs: { en: "Business, IT, Science", ar: "أعمال، تقنية، علوم" },
    },
    {
      name: "Taylor's University",
      ranking: "QS 5-Star Rated",
      city: { en: "Kuala Lumpur", ar: "كوالالمبور" },
      programs: { en: "Hospitality, Design", ar: "ضيافة، تصميم" },
    },
  ],
  livingCosts: [
    { label: { en: "Accommodation", ar: "السكن" }, amount: "$200-400", icon: "rent" },
    { label: { en: "Food", ar: "الطعام" }, amount: "$150-250", icon: "food" },
    { label: { en: "Transport", ar: "المواصلات" }, amount: "$40-60", icon: "transport" },
    { label: { en: "Internet & Bills", ar: "إنترنت وفواتير" }, amount: "$30-50", icon: "internet" },
    { label: { en: "Tuition/Year", ar: "الرسوم/سنة" }, amount: "$2,000-8,000", icon: "tuition" },
  ],
  visaSteps: [
    {
      title: { en: "EMGS Registration", ar: "تسجيل EMGS" },
      description: {
        en: "Register through Education Malaysia Global Services. We handle the entire online submission with your documents.",
        ar: "التسجيل عبر خدمات التعليم العالمية الماليزية. نتولى الإرسال الإلكتروني الكامل مع وثائقك.",
      },
      duration: { en: "1 week", ar: "أسبوع واحد" },
    },
    {
      title: { en: "University Offer Letter", ar: "خطاب القبول الجامعي" },
      description: {
        en: "Receive conditional offer from your chosen university. English programs available with IELTS waivers.",
        ar: "استلام عرض مشروط من جامعتك المختارة. متاحة برامج إنجليزية مع إعفاء IELTS.",
      },
      duration: { en: "2-3 weeks", ar: "٢-٣ أسابيع" },
    },
    {
      title: { en: "VAL (Visa Approval Letter)", ar: "خطاب الموافقة على التأشيرة" },
      description: {
        en: "Get the Visa Approval Letter from Malaysian Immigration. Required before traveling to Malaysia.",
        ar: "احصل على خطاب موافقة التأشيرة من الهجرة الماليزية. مطلوب قبل السفر إلى ماليزيا.",
      },
      duration: { en: "3-4 weeks", ar: "٣-٤ أسابيع" },
    },
    {
      title: { en: "Single Entry Visa & Arrival", ar: "تأشيرة دخول واحدة والوصول" },
      description: {
        en: "Obtain visa from Malaysian embassy, fly to Malaysia, and we'll meet you for university registration.",
        ar: "احصل على التأشيرة من السفارة الماليزية، سافر إلى ماليزيا، وسنستقبلك للتسجيل الجامعي.",
      },
      duration: { en: "1-2 weeks", ar: "١-٢ أسبوع" },
    },
  ],
  testimonial: {
    name: "Layla Hussein",
    university: { en: "University of Malaya", ar: "جامعة ملايا" },
    program: { en: "Computer Science", ar: "علوم الحاسوب" },
    quote: {
      en: "Malaysia exceeded all my expectations! 100% English programs, friendly halal-friendly environment, and world-class education at affordable prices. Dinoora's team supported me every step of the way.",
      ar: "تجاوزت ماليزيا كل توقعاتي! برامج بالإنجليزية ١٠٠٪، بيئة حلال صديقة، وتعليم عالمي بأسعار معقولة. فريق دينورا دعمني في كل خطوة.",
    },
    rating: 5,
  },
}

export const turkeyEnrichment: DestinationEnrichmentProps = {
  countryName: { en: "Turkey", ar: "تركيا" },
  topCities: [
    {
      name: { en: "Istanbul", ar: "إسطنبول" },
      description: {
        en: "Where Europe meets Asia! Home to Turkey's top universities, rich history, and a magnetic blend of cultures spanning two continents.",
        ar: "حيث تلتقي أوروبا بآسيا! موطن أرقى الجامعات التركية، التاريخ العريق، ومزيج آسر من الثقافات على قارتين.",
      },
      highlight: { en: "Cultural Capital", ar: "العاصمة الثقافية" },
    },
    {
      name: { en: "Ankara", ar: "أنقرة" },
      description: {
        en: "Modern capital with prestigious public universities, lower cost of living, and a calm academic atmosphere ideal for focused study.",
        ar: "العاصمة الحديثة بجامعات حكومية مرموقة، تكاليف معيشة أقل، وأجواء أكاديمية هادئة مثالية للدراسة المركزة.",
      },
      highlight: { en: "Academic Excellence", ar: "تميز أكاديمي" },
    },
    {
      name: { en: "Izmir", ar: "إزمير" },
      description: {
        en: "Coastal Aegean gem with vibrant student life, beautiful Mediterranean weather, and innovative engineering programs.",
        ar: "جوهرة بحر إيجه الساحلية بحياة طلابية نابضة، طقس متوسطي جميل، وبرامج هندسية مبتكرة.",
      },
      highlight: { en: "Engineering Hub", ar: "مركز الهندسة" },
    },
  ],
  topUniversities: [
    {
      name: "Boğaziçi University",
      ranking: "QS Ranking #623 Worldwide",
      city: { en: "Istanbul", ar: "إسطنبول" },
      programs: { en: "Engineering, Economics", ar: "هندسة، اقتصاد" },
    },
    {
      name: "Middle East Technical University",
      ranking: "QS Ranking #501 Worldwide",
      city: { en: "Ankara", ar: "أنقرة" },
      programs: { en: "Engineering, Architecture", ar: "هندسة، عمارة" },
    },
    {
      name: "Istanbul Technical University",
      ranking: "Top Engineering School",
      city: { en: "Istanbul", ar: "إسطنبول" },
      programs: { en: "Engineering, IT", ar: "هندسة، تقنية معلومات" },
    },
    {
      name: "Koç University",
      ranking: "Private Excellence",
      city: { en: "Istanbul", ar: "إسطنبول" },
      programs: { en: "Business, Medicine, Law", ar: "أعمال، طب، قانون" },
    },
  ],
  livingCosts: [
    { label: { en: "Accommodation", ar: "السكن" }, amount: "$150-300", icon: "rent" },
    { label: { en: "Food", ar: "الطعام" }, amount: "$120-200", icon: "food" },
    { label: { en: "Transport", ar: "المواصلات" }, amount: "$25-45", icon: "transport" },
    { label: { en: "Internet & Bills", ar: "إنترنت وفواتير" }, amount: "$20-35", icon: "internet" },
    { label: { en: "Tuition/Year", ar: "الرسوم/سنة" }, amount: "$2,000-4,000", icon: "tuition" },
  ],
  visaSteps: [
    {
      title: { en: "Türkiye Bursları Application", ar: "التقديم لمنحة تركيا" },
      description: {
        en: "Apply for the Turkish Government Scholarship (full funding) or directly to universities. We optimize your application for higher acceptance.",
        ar: "تقدم لمنحة الحكومة التركية (تمويل كامل) أو مباشرة للجامعات. نُحسّن طلبك لزيادة فرص القبول.",
      },
      duration: { en: "2-4 weeks", ar: "٢-٤ أسابيع" },
    },
    {
      title: { en: "Acceptance Letter", ar: "خطاب القبول" },
      description: {
        en: "Receive your official acceptance letter. Many programs offered in English; Turkish prep year available if needed.",
        ar: "استلم خطاب قبولك الرسمي. كثير من البرامج بالإنجليزية، مع سنة تحضيرية للتركية إن لزم.",
      },
      duration: { en: "3-6 weeks", ar: "٣-٦ أسابيع" },
    },
    {
      title: { en: "Student Visa at Consulate", ar: "تأشيرة الطالب في القنصلية" },
      description: {
        en: "Apply for student visa at Turkish consulate with acceptance letter. Fast processing for most Arab nationalities.",
        ar: "تقدم لتأشيرة الطالب في القنصلية التركية مع خطاب القبول. معالجة سريعة لمعظم الجنسيات العربية.",
      },
      duration: { en: "1-2 weeks", ar: "١-٢ أسبوع" },
    },
    {
      title: { en: "Residence Permit", ar: "إقامة الطالب" },
      description: {
        en: "Within 30 days of arrival, we help you obtain your residence permit (Ikamet) for the duration of your studies.",
        ar: "خلال ٣٠ يوماً من الوصول، نساعدك في الحصول على إقامة الطالب (إقامت) طوال فترة دراستك.",
      },
      duration: { en: "After arrival", ar: "بعد الوصول" },
    },
  ],
  testimonial: {
    name: "Omar Khalifa",
    university: { en: "Istanbul Technical University", ar: "جامعة إسطنبول التقنية" },
    program: { en: "Civil Engineering", ar: "هندسة مدنية" },
    quote: {
      en: "Studying in Turkey gave me European-quality education with deep cultural familiarity. Istanbul is breathtaking, the people welcoming, and Dinoora's guidance made everything seamless. Highly recommended!",
      ar: "منحتني الدراسة في تركيا تعليماً بجودة أوروبية مع ألفة ثقافية عميقة. إسطنبول مذهلة، الناس مرحبون، وتوجيه دينورا جعل كل شيء سلساً. أنصح بها بشدة!",
    },
    rating: 5,
  },
}
