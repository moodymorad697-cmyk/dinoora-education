import { 
  ArrowLeft, 
  Clock, 
  Calendar,
  Share2,
  GraduationCap,
  Building2,
  Globe,
  CheckCircle,
  AlertCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"

// Generate static params for all articles
export function generateStaticParams() {
  return [
    { slug: "csc-scholarship-complete-guide" },
    { slug: "emgs-guide" },
    { slug: "turkiye-burslari-guide" },
    { slug: "beijing-student-guide" },
    { slug: "kuala-lumpur-student-guide" },
    { slug: "istanbul-student-guide" },
  ]
}

// Blog articles database
const articles: Record<string, {
  title: { en: string; ar: string }
  content: { en: string; ar: string }
  country: string
  countryName: { en: string; ar: string }
  category: string
  categoryName: { en: string; ar: string }
  readingTime: number
  date: string
  author: string
  icon: any
}> = {
  "csc-scholarship-complete-guide": {
    title: {
      en: "CSC Scholarship: Complete Guide 2024-2025",
      ar: "المنحة الحكومية الصينية CSC: الدليل الشامل 2024-2025"
    },
    country: "china",
    countryName: { en: "China", ar: "الصين" },
    category: "scholarships",
    categoryName: { en: "Scholarships", ar: "منح دراسية" },
    readingTime: 15,
    date: "2024-05-15",
    author: "DINOORA Education Team",
    icon: GraduationCap,
    content: {
      en: `## What is CSC Scholarship?

CSC = Chinese Scholarship Council. It's a full government scholarship covering tuition, accommodation, health insurance, and monthly stipend (2000-3500 CNY).

## Types of CSC Scholarships

**Type A - Full Scholarship (Best)**
- Bachelor's: 2,500 CNY/month
- Master's: 3,000 CNY/month
- PhD: 3,500 CNY/month

**Type B - Partial Scholarship**
Tuition fees only

**Type C - Specific Scholarship**
Fixed amount

## Requirements

- Nationality: Non-Chinese
- Age: Bachelor's 18-25, Master's under 35, PhD under 40
- Language: HSK4 for Chinese programs, IELTS 6.0/TOEFL 80 for English programs
- GPA: Above 75% or 3.0/4.0

## Application Timeline

| Month | Task |
|-------|------|
| Oct-Dec | Research universities, contact professors |
| Jan-Feb | Get pre-admission letter |
| Mar-Apr | Fill CSC application |
| April | Submit before deadline |
| May-Jun | CSC reviews |
| Jul-Aug | Results announced |
| September | Travel to China |

## Common Mistakes to Avoid

❌ Applying without pre-admission (10% chance)
❌ Low GPA (below 70%)
❌ Copy-pasted study plan
❌ Documents not translated/notarized
❌ Applying after deadline

## DINOORA Tips

✅ Start early (October, not April!)
✅ Focus on mid-tier universities
✅ Make your letter unique
✅ Double-check everything

**Ready to apply?**

Contact us on WhatsApp: +86 155 8723 7864`,
      ar: `## ما هي منحة CSC؟

CSC = مجلس المنح الدراسية الصيني. منحة حكومية كاملة تغطي الرسوم والسكن والتأمين ومخصص شهري (2000-3500 يوان).

## أنواع منح CSC

**النوع A - المنحة الكاملة (الأفضل)**
- بكالوريوس: 2500 يوان/شهر
- ماجستير: 3000 يوان/شهر
- دكتوراه: 3500 يوان/شهر

**النوع B - المنحة الجزئية**
الرسوم فقط

**النوع C - المنحة المحددة**
مبلغ محدد

## الشروط

- الجنسية: غير صيني
- العمر: بكالوريوس 18-25، ماجستير أقل 35، دكتوراه أقل 40
- اللغة: HSK4 للبرامج الصينية، IELTS 6.0/TOEFL 80 للإنجليزية
- المعدل: فوق 75% أو 3.0/4.0

## التايم لاين

| الشهر | المهمة |
|-------|--------|
| أكتوبر-ديسمبر | البحث عن الجامعات |
| يناير-فبراير | الحصول على قبول مبدئي |
| مارس-أبريل | تعبئة طلب CSC |
| أبريل | التقديم قبل الموعد النهائي |
| مايو-يونيو | مراجعة CSC |
| يوليو-أغسطس | إعلان النتائج |
| سبتمبر | السفر إلى الصين |

## الأخطاء الشائعة

❌ التقديم بدون قبول مبدئي (فرصة 10%)
❌ معدل ضعيف (أقل 70%)
❌ خطة دراسة منسوخة
❌ وثائق غير مترجمة/مؤرشفة
❌ التقديم بعد الموعد

## نصائح DINOORA

✅ ابدأ مبكراً (أكتوبر وليس أبريل!)
✅ ركز على الجامعات المتوسطة
✅ اجعل خطابك مميزاً
✅ تحقق من كل شيء مرتين

**مستعد للتقديم؟**

تواصل معنا على واتساب: +86 155 8723 7864`
    }
  },
  "emgs-guide": {
    title: {
      en: "EMGS: Complete Guide to Malaysia Student Visa 2024",
      ar: "EMGS: الدليل الكامل للتأشيرة الدراسية الماليزية 2024"
    },
    country: "malaysia",
    countryName: { en: "Malaysia", ar: "ماليزيا" },
    category: "visa",
    categoryName: { en: "Visa & Immigration", ar: "تأشيرة وهجرة" },
    readingTime: 12,
    date: "2024-05-15",
    author: "DINOORA Education Team",
    icon: Building2,
    content: {
      en: `## What is EMGS?

EMGS = Education Malaysia Global Services. The only authorized body for international student applications in Malaysia.

Website: educationmalaysia.gov.my

## EMGS Percentage System

| Percentage | Status |
|------------|--------|
| 0% | Not submitted |
| 5% | University sending |
| 15% | EMGS received |
| 35% | Under review |
| 70% | Approved |
| 80% | eVAL issued |
| 100% | Student Pass issued |

## Required Documents

1. Passport (all pages)
2. University offer letter
3. Educational certificates
4. Transcript
5. Language certificate (IELTS/TOEFL/MUET)
6. Medical report
7. Insurance
8. Photos (blue background)
9. Bank statement
10. EMGS fees (2000-3000 MYR)

## Costs

- EMGS fees: 2,000-3,000 MYR
- Medical checkup: 200-400 MYR
- Insurance: 500-800 MYR/year
- **Total: 3,000-5,000 MYR**

## Processing Time

Total: **4-8 weeks**

Peak season (April-June) takes longer.

## DINOORA Success Rate

**97%** success rate with EMGS applications.

Contact us: +86 155 8723 7864`,
      ar: `## ما هو EMGS؟

EMGS = Education Malaysia Global Services. الجهة الوحيدة المخولة لطلبات الطلاب الدوليين في ماليزيا.

الموقع: educationmalaysia.gov.my

## نظام النسب المئوية

| النسبة | الحالة |
|--------|--------|
| 0% | لم يُرسل |
| 5% | الجامعة ترسل |
| 15% | EMGS استلم |
| 35% | قيد المراجعة |
| 70% | تمت الموافقة |
| 80% | eVAL صدر |
| 100% | Student Pass صدر |

## الوثائق المطلوبة

1. جواز السفر (جميع الصفحات)
2. خطاب القبول
3. الشهادات الدراسية
4. كشف الدرجات
5. شهادة اللغة (IELTS/TOEFL/MUET)
6. تقرير طبي
7. تأمين
8. صور (خلفية زرقاء)
9. كشف حساب بنكي
10. رسوم EMGS (2000-3000 رنجيت)

## التكاليف

- رسوم EMGS: 2,000-3,000 رنجيت
- فحص طبي: 200-400 رنجيت
- تأمين: 500-800 رنجيت/سنة
- **الإجمالي: 3,000-5,000 رنجيت**

## مدة المعالجة

الإجمالي: **4-8 أسابيع**

الموسم المزدحم (أبريل-يونيو) يستغرق وقتاً أطول.

## نسبة نجاح DINOORA

**97%** نسبة نجاح مع طلبات EMGS.

تواصل معنا: +86 155 8723 7864`
    }
  },
  "turkiye-burslari-guide": {
    title: {
      en: "Türkiye Bursları: Complete Scholarship Guide 2024",
      ar: "منحة تركيا Bursları: الدليل الشامل 2024"
    },
    country: "turkey",
    countryName: { en: "Turkey", ar: "تركيا" },
    category: "scholarships",
    categoryName: { en: "Scholarships", ar: "منح دراسية" },
    readingTime: 18,
    date: "2024-05-15",
    author: "DINOORA Education Team",
    icon: Globe,
    content: {
      en: `## What is Türkiye Bursları?

The largest government scholarship offered by Turkey for international students, managed by YTB (Presidency for Turks Abroad).

## What Does It Cover?

**For Bachelor's:**
- Round-trip flight tickets
- Full tuition fees
- Free university accommodation
- Monthly stipend: 1,000 TRY
- Health insurance
- 1-year Turkish language course

**For Master's:** 1,400 TRY/month
**For PhD:** 1,800 TRY/month

## Requirements

- Nationality: Any except Turkish
- Age: Bachelor's max 21, Master's max 30, PhD max 35
- Health: Physically fit
- No criminal record

**Academic Requirements:**
- Bachelor's: High school 70%+ (90%+ for Medicine/Dentistry)
- Master's: Bachelor's 75%+, GRE 61+ or ALES 55+
- PhD: Master's 75%+, GRE 61+ or ALES 55+

## Application Timeline 2024-2025

| Stage | Date |
|-------|------|
| Application opens | January 10, 2024 |
| **Deadline** | **February 20, 2024** |
| Interviews | March-April |
| Results | July-August |
| Travel | September-October |

⚠️ **Deadline is final and NOT extended!**

## Common Mistakes

❌ Copy-pasted motivation letter
❌ Unclear photo
❌ Documents not translated/notarized
❌ Low GPA
❌ Missing deadline
❌ Not knowing anything about Turkey in interview

## DINOORA Success Rate

**78%** success rate with Türkiye Bursları applications.

Contact us for free consultation: +86 155 8723 7864`,
      ar: `## ما هي Türkiye Bursları؟

أكبر منحة حكومية تقدمها تركيا للطلاب الدوليين، تديرها YTB (الرئاسة لشؤون الأتراك في الخارج).

## ما الذي تغطيه؟

**للبكالوريوس:**
- تذاكر طيران ذهاب وعودة
- رسوم دراسية كاملة
- سكن جامعي مجاني
- مخصص شهري: 1000 ليرة
- تأمين صحي
- دورة لغة تركية لمدة سنة

**للماجستير:** 1400 ليرة/شهر
**للدكتوراه:** 1800 ليرة/شهر

## الشروط

- الجنسية: أي جنسية عدا التركية
- العمر: بكالوريوس أقصى 21، ماجستير أقصى 35، دكتوراه أقصى 40
- صحة: لائق طبياً
- لا يوجد سجل جنائي

**الشروط الأكاديمية:**
- بكالوريوس: ثانوية 70%+ (90%+ للطب/طب الأسنان)
- ماجستير: بكالوريوس 75%+، GRE 61+ أو ALES 55+
- دكتوراه: ماجستير 75%+، GRE 61+ أو ALES 55+

## التايم لاين 2024-2025

| المرحلة | التاريخ |
|---------|---------|
| فتح التقديم | 10 يناير 2024 |
| **الموعد النهائي** | **20 فبراير 2024** |
| المقابلات | مارس-أبريل |
| النتائج | يوليو-أغسطس |
| السفر | سبتمبر-أكتوبر |

⚠️ **الموعد النهائي نهائي ولا يُمدد!**

## الأخطاء الشائعة

❌ خطاب تحفيز منسوخ
❌ صورة غير واضحة
❌ وثائق غير مترجمة/مؤرشفة
❌ معدل منخفض
❌ تفويت الموعد النهائي
❌ عدم معرفة شيء عن تركيا في المقابلة

## نسبة نجاح DINOORA

**78%** نسبة نجاح مع طلبات Türkiye Bursları.

تواصل معنا للاستشارة المجانية: +86 155 8723 7864`
    }
  },
  "beijing-student-guide": {
    title: {
      en: "Complete Guide to Student Life in Beijing 2024-2025",
      ar: "الدليل الشامل للحياة الطلابية في بكين 2024-2025"
    },
    country: "china",
    countryName: { en: "China", ar: "الصين" },
    category: "living",
    categoryName: { en: "Student Life", ar: "حياة الطلاب" },
    readingTime: 15,
    date: "2024-01-15",
    author: "DINOORA Team",
    icon: GraduationCap,
    content: {
      en: `## Why Choose Beijing?

### World-Class Universities
- Peking University (北京大学) - Founded 1898, China's top university. [pku.edu.cn](https://www.pku.edu.cn)
- Tsinghua University (清华大学) - China's MIT-equivalent. [tsinghua.edu.cn](https://www.tsinghua.edu.cn)
- Beijing Language and Culture University - Premier for international students. [blcu.edu.cn](https://www.blcu.edu.cn)

### Affordable Education
- Tuition: $3,000 - $8,000 USD/year
- Living costs: $400 - $800 USD/month
- Scholarships: CSC, Beijing Government Scholarship

## Cost of Living (2024)

| Expense | Monthly Cost (USD) |
|---------|-------------------|
| Rent (shared) | $200 - $400 |
| Food | $150 - $250 |
| Transportation | $30 - $50 |
| Internet & Phone | $20 - $40 |
| Entertainment | $50 - $100 |
| **Total** | **$450 - $840** |

## Transportation
- Subway: $0.50 - $1 per trip. Get [Beijing Municipal Card](https://www.bjsubway.com)
- Bus: $0.30 - $0.60 per trip
- Didi: China's Uber. Download [Didi App](https://www.didiglobal.com)

## Food
- University Cafeterias: $2 - $4 per meal
- Street Food: $1 - $3 per dish (Jiaozi, Jianbing, Roujiamo)
- Halal Food: Niujie (牛街) Muslim quarter

## Must-Visit Sites
- Forbidden City (故宫) - $15 entry. [dpm.org.cn](https://www.dpm.org.cn)
- Great Wall (长城) - Multiple sections. [visitbeijing.com.cn](https://www.visitbeijing.com.cn)
- Summer Palace (颐和园) - $8 entry

**Contact DINOORA:** +86 15587237864`,
      ar: `## لماذا بكين؟

### جامعات عالمية
- جامعة بكين (北京大学) - تأسست 1898، أفضل جامعة في الصين. [pku.edu.cn](https://www.pku.edu.cn)
- جامعة تسينغهوا (清华大学) - معهد ماساتشوستس الصيني. [tsinghua.edu.cn](https://www.tsinghua.edu.cn)
- جامعة بكين للغة والثقافة - الأولى للطلاب الدوليين. [blcu.edu.cn](https://www.blcu.edu.cn)

### تعليم ميسور
- الرسوم: 3,000 - 8,000 دولار/سنة
- تكاليف المعيشة: 400 - 800 دولار/شهر
- منح: CSC، منحة حكومة بكين

## تكاليف المعيشة (2024)

| البند | شهرياً (دولار) |
|-------|----------------|
| الإيجار (مشترك) | 200 - 400 |
| الطعام | 150 - 250 |
| المواصلات | 30 - 50 |
| الإنترنت والهاتف | 20 - 40 |
| الترفيه | 50 - 100 |
| **المجموع** | **450 - 840** |

## المواصلات
- المترو: 0.50 - 1 دولار لكل رحلة. احصل على [بطاقة بكين](https://www.bjsubway.com)
- الحافلات: 0.30 - 0.60 دولار لكل رحلة
- Didi: أوبر الصين. حمل [تطبيق Didi](https://www.didiglobal.com)

## الطعام
- مقاصف الجامعات: 2 - 4 دولار لكل وجبة
- طعام الشارع: 1 - 3 دولار (زلابية، كريب، برجر صيني)
- طعام حلال: نيوجي (牛街) حي المسلمين

## مواقع يجب زيارتها
- المدينة المحرمة (故宫) - 15 دولار للدخول. [dpm.org.cn](https://www.dpm.org.cn)
- الجدار العظيم (长城) - أقسام متعددة. [visitbeijing.com.cn](https://www.visitbeijing.com.cn)
- قصر الصيف (颐和园) - 8 دولار للدخول

**تواصل مع DINOORA:** +86 15587237864`
    }
  },
  "kuala-lumpur-student-guide": {
    title: {
      en: "Complete Guide to Student Life in Kuala Lumpur 2024-2025",
      ar: "الدليل الشامل للحياة الطلابية في كوالالمبور 2024-2025"
    },
    country: "malaysia",
    countryName: { en: "Malaysia", ar: "ماليزيا" },
    category: "living",
    categoryName: { en: "Student Life", ar: "حياة الطلاب" },
    readingTime: 18,
    date: "2024-01-20",
    author: "DINOORA Team",
    icon: Building2,
    content: {
      en: `## Why Choose Kuala Lumpur?

### Top Universities
- University of Malaya (UM) - Malaysia's #1, QS #65. [um.edu.my](https://www.um.edu.my)
- Taylor's University - Top private university. [taylors.edu.my](https://www.taylors.edu.my)
- Monash University Malaysia - Australian branch. [monash.edu](https://www.monash.edu)

### Affordable Living
- Tuition: $3,000 - $12,000 USD/year
- Living costs: $400 - $700 USD/month
- Halal food everywhere

## Cost of Living (2024)

| Expense | Monthly Cost (USD) |
|---------|-------------------|
| Rent (shared) | $150 - $300 |
| Food | $150 - $250 |
| Transportation | $30 - $60 |
| Internet & Phone | $20 - $40 |
| Entertainment | $50 - $100 |
| **Total** | **$400 - $750** |

## Transportation
- MRT/LRT: $0.30 - $1 per trip. Get [MyRapid Card](https://www.myrapid.com.my)
- Grab: Malaysia's Uber. Download [Grab App](https://www.grab.com)

## Food
- Hawker Centers: $2 - $5 per meal. Try Nasi Lemak, Roti Canai
- Halal Food: Available everywhere (Malaysia is Muslim-majority)

## Must-Visit Sites
- Petronas Twin Towers - $15 entry. [petronastwintowers.com.my](https://www.petronastwintowers.com.my)
- Batu Caves - Free entry. [batucaves.com.my](https://www.batucaves.com.my)
- KLCC Park - Free

**Contact DINOORA:** +86 15587237864`,
      ar: `## لماذا كوالالمبور؟

### أفضل الجامعات
- جامعة مالايا (UM) - #1 في ماليزيا، QS #65. [um.edu.my](https://www.um.edu.my)
- جامعة تايلورز - أفضل جامعة خاصة. [taylors.edu.my](https://www.taylors.edu.my)
- جامعة موناش ماليزيا - فرع أسترالي. [monash.edu](https://www.monash.edu)

### معيشة ميسورة
- الرسوم: 3,000 - 12,000 دولار/سنة
- تكاليف المعيشة: 400 - 700 دولار/شهر
- طعام حلال في كل مكان

## تكاليف المعيشة (2024)

| البند | شهرياً (دولار) |
|-------|----------------|
| الإيجار (مشترك) | 150 - 300 |
| الطعام | 150 - 250 |
| المواصلات | 30 - 60 |
| الإنترنت والهاتف | 20 - 40 |
| الترفيه | 50 - 100 |
| **المجموع** | **400 - 750** |

## المواصلات
- MRT/LRT: 0.30 - 1 دولار لكل رحلة. احصل على [بطاقة MyRapid](https://www.myrapid.com.my)
- Grab: أوبر ماليزيا. حمل [تطبيق Grab](https://www.grab.com)

## الطعام
- مراكز الطعام: 2 - 5 دولار لكل وجبة. جرّب Nasi Lemak، Roti Canai
- طعام حلال: متوفر في كل مكان

## مواقع يجب زيارتها
- أبراج بتروناس التوأم - 15 دولار للدخول. [petronastwintowers.com.my](https://www.petronastwintowers.com.my)
- كهوف باتو - دخول مجاني. [batucaves.com.my](https://www.batucaves.com.my)
- حديقة KLCC - مجانية

**تواصل مع DINOORA:** +86 15587237864`
    }
  },
  "istanbul-student-guide": {
    title: {
      en: "Complete Guide to Student Life in Istanbul 2024-2025",
      ar: "الدليل الشامل للحياة الطلابية في إسطنبول 2024-2025"
    },
    country: "turkey",
    countryName: { en: "Turkey", ar: "تركيا" },
    category: "living",
    categoryName: { en: "Student Life", ar: "حياة الطلاب" },
    readingTime: 20,
    date: "2024-01-25",
    author: "DINOORA Team",
    icon: Globe,
    content: {
      en: `## Why Choose Istanbul?

### Top Universities
- Boğaziçi University - Turkey's #1, founded 1863. [boun.edu.tr](https://www.boun.edu.tr)
- Istanbul Technical University - Leading engineering. [itu.edu.tr](https://www.itu.edu.tr)
- Sabancı University - Modern research university. [sabanciuniv.edu](https://www.sabanciuniv.edu)

### Affordable Living
- Tuition: $2,000 - $8,000/year (public universities)
- Living costs: $350 - $650 USD/month
- Türkiye Bursları scholarship available

## Cost of Living (2024)

| Expense | Monthly Cost (USD) |
|---------|-------------------|
| Rent (shared) | $150 - $300 |
| Food | $150 - $250 |
| Transportation | $30 - $50 |
| Internet & Phone | $20 - $35 |
| Entertainment | $40 - $80 |
| **Total** | **$390 - $715** |

## Transportation
- Public Transport: Metro, tram, bus, ferry. Get [Istanbulkart](https://www.istanbulkart.istanbul)
- Ride-hailing: [BiTaksi](https://www.bitaksi.com), [Uber](https://www.uber.com)

## Food
- Street Food: $1 - $3 per dish. Try Döner Kebab, Simit, Balık Ekmek
- Halal Food: Available everywhere

## Must-Visit Sites
- Hagia Sophia - Free. [muze.gov.tr](https://muze.gov.tr)
- Blue Mosque - Free. [bluemosqueistanbul.com](https://www.bluemosqueistanbul.com)
- Grand Bazaar - Free. [grandbazaaristanbul.org](https://www.grandbazaaristanbul.org)

**Contact DINOORA:** +86 15587237864`,
      ar: `## لماذا إسطنبول؟

### أفضل الجامعات
- جامعة بوجازيتشي - #1 في تركيا. [boun.edu.tr](https://www.boun.edu.tr)
- جامعة إسطنبول التقنية - رائدة الهندسة. [itu.edu.tr](https://www.itu.edu.tr)
- جامعة صابانجي - جامعة بحثية حديثة. [sabanciuniv.edu](https://www.sabanciuniv.edu)

### معيشة ميسورة
- الرسوم: 2,000 - 8,000 دولار/سنة (الجامعات الحكومية)
- تكاليف المعيشة: 350 - 650 دولار/شهر
- منحة Türkiye Bursları متاحة

## تكاليف المعيشة (2024)

| البند | شهرياً (دولار) |
|-------|----------------|
| الإيجار (مشترك) | 150 - 300 |
| الطعام | 150 - 250 |
| المواصلات | 30 - 50 |
| الإنترنت والهاتف | 20 - 35 |
| الترفيه | 40 - 80 |
| **المجموع** | **390 - 715** |

## المواصلات
- النقل العام: مترو، ترام، حافلات، عبارات. احصل على [Istanbulkart](https://www.istanbulkart.istanbul)
- استدعاء السيارات: [BiTaksi](https://www.bitaksi.com)، [Uber](https://www.uber.com)

## الطعام
- طعام الشارع: 1 - 3 دولار. جرّب Döner Kebab، Simit، Balık Ekmek
- طعام حلال: متوفر في كل مكان

## مواقع يجب زيارتها
- آيا صوفيا - مجانية. [muze.gov.tr](https://muze.gov.tr)
- الجامع الأزرق - مجانية. [bluemosqueistanbul.com](https://www.bluemosqueistanbul.com)
- البازار الكبير - مجاني. [grandbazaaristanbul.org](https://www.grandbazaaristanbul.org)

**تواصل مع DINOORA:** +86 15587237864`
    }
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // Get locale from URL or default to English
  const searchParams = await Promise.resolve({})
  const locale: 'en' | 'ar' = 'en' // Default to English
  const { slug } = await params
  const article = articles[slug]

  if (!article) {
    notFound()
  }

  const ContentIcon = article.icon
  const content = article.content[locale]
  const lines = content.split('\n')

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative py-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <div className="flex items-center gap-3 mb-6">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {locale === "en" ? "Back to Blog" : "العودة للمدونة"}
            </Link>
            <span className="text-slate-600">|</span>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors"
            >
              {locale === "en" ? "Home" : "الرئيسية"}
            </Link>
          </div>

          {/* Category & Country */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
              {article.categoryName[locale]}
            </span>
            <span className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full">
              {article.countryName[locale]}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {article.title[locale]}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readingTime} {locale === "en" ? "min read" : "دقيقة قراءة"}
            </span>
            <span className="flex items-center gap-1">
              <ContentIcon className="w-4 h-4" />
              {article.author}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            {lines.map((line, index) => {
              // Heading
              if (line.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
                    {line.replace('## ', '')}
                  </h2>
                )
              }
              if (line.startsWith('**') && line.endsWith('**')) {
                return (
                  <h3 key={index} className="text-xl font-bold text-amber-400 mt-6 mb-3">
                    {line.replace(/\*\*/g, '')}
                  </h3>
                )
              }
              // Table row
              if (line.startsWith('|') && line.includes('|')) {
                const cells = line.split('|').filter(c => c.trim()).map(c => c.trim())
                if (cells[0] !== '---' && cells[0] !== '--------' && cells[0] !== '-------') {
                  return (
                    <div key={index} className="grid grid-cols-2 gap-4 py-2 border-b border-slate-800">
                      {cells.map((cell, i) => (
                        <div key={i} className={i === 0 ? 'font-semibold text-white' : 'text-slate-300'}>
                          {cell}
                        </div>
                      ))}
                    </div>
                  )
                }
                return null
              }
              // Checkmarks
              if (line.startsWith('✅')) {
                return (
                  <div key={index} className="flex items-start gap-3 my-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-300">{line.replace('✅ ', '')}</span>
                  </div>
                )
              }
              // X marks
              if (line.startsWith('❌')) {
                return (
                  <div key={index} className="flex items-start gap-3 my-2">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-slate-300">{line.replace('❌ ', '')}</span>
                  </div>
                )
              }
              // Empty line
              if (line.trim() === '') {
                return <div key={index} className="h-4" />
              }
              // List item
              if (line.startsWith('- ') || line.startsWith('1.') || line.startsWith('2.')) {
                return (
                  <li key={index} className="text-slate-300 ml-4 my-1">
                    {line.replace(/^- /, '').replace(/^\d+\. /, '')}
                  </li>
                )
              }
              // Bold text
              if (line.includes('**')) {
                const parts = line.split('**')
                return (
                  <p key={index} className="text-slate-300 my-2">
                    {parts.map((part, i) => 
                      i % 2 === 1 ? <strong key={i} className="text-white">{part}</strong> : part
                    )}
                  </p>
                )
              }
              // Regular paragraph
              return (
                <p key={index} className="text-slate-300 my-2 leading-relaxed">
                  {line}
                </p>
              )
            })}
          </div>

          {/* Share & CTA */}
          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Button variant="outline" className="border-slate-700">
                <Share2 className="w-4 h-4 mr-2" />
                {locale === "en" ? "Share" : "مشاركة"}
              </Button>
              <a href="https://wa.me/8615587237864" className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">{locale === "en" ? "Contact on WhatsApp" : "تواصل عبر واتساب"}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            {locale === "en" ? "Related Guides" : "أدلة ذات صلة"}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(articles)
              .filter(([articleSlug]) => articleSlug !== slug)
              .map(([articleSlug, art]) => (
                <Link 
                  key={articleSlug} 
                  href={`/blog/${articleSlug}`}
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <art.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm text-slate-500">{art.countryName[locale]}</span>
                  </div>
                  <h3 className="font-semibold text-white line-clamp-2">
                    {art.title[locale]}
                  </h3>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
