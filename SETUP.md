# 🎯 دليل التخصيص والإعداد - DINOORA

هذا الدليل يساعدك على تخصيص المشروع بالكامل لاستخدامك الخاص.

---

## 1️⃣ تحديث بيانات الاتصال

### في ملف `lib/config.ts`:

```typescript
export const config = {
  site: {
    name: 'DINNOORA Education',  // اسم موقعك
    url: 'https://yourdomain.com', // رابط موقعك
    author: 'Your Name',  // اسمك
  },

  contact: {
    whatsapp: '+971XXXXXXXXX',    // رقم الواتس الخاص بك
    email: 'your@email.com',       // بريدك الإلكتروني
    phone: '+971XXXXXXXXX',        // رقم الهاتف
    address: 'Your Address',       // عنوانك
  },

  social: {
    twitter: 'https://twitter.com/yourprofile',
    linkedin: 'https://linkedin.com/company/yourcompany',
    facebook: 'https://facebook.com/yourpage',
    instagram: 'https://instagram.com/yourprofile',
  },
}
```

### في ملف `.env.local`:

```env
# تحديث جميع البيانات
NEXT_PUBLIC_WHATSAPP_NUMBER=+971XXXXXXXXX
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com
NEXT_PUBLIC_PHONE_NUMBER=+971XXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## 2️⃣ تحديث الإحصائيات والبيانات

### في `lib/config.ts` - الإحصائيات:

```typescript
stats: {
  studentsPlaced: '15,000+',       // عدد الطلاب الفعلي
  partnerUniversities: '250+',     // عدد الجامعات
  successRate: '95%',              // نسبة النجاح
  yearsExperience: '10+',          // سنوات الخبرة
},
```

### الدول المستهدفة:

```typescript
destinations: [
  { code: 'CN', name: 'China', flag: '🇨🇳' },
  { code: 'MY', name: 'Malaysia', flag: '🇲🇾' },
  { code: 'TR', name: 'Turkey', flag: '🇹🇷' },
  // أضف دول أخرى هنا
],
```

---

## 3️⃣ تخصيص الألوان والتصميم

### في `styles/globals.css`:

ابحث عن المقاطع التالية وعدّلها:

```css
/* Gold Gradient - اللون الذهبي الرئيسي */
.gold-gradient {
  @apply bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500;
}

/* Gradient Text */
.gradient-text {
  @apply bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent;
}
```

### في `tailwind.config.ts`:

```typescript
const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: '#FBBF24',      // اللون الأساسي
        accent: '#F97316',        // لون إضافي
        // أضف ألوانك المخصصة
      },
    },
  },
}
```

---

## 4️⃣ تحديث الصور والأيقونات

### الصور المهمة:

```
/public/
├── images/
│   ├── hero-bg.jpg          # صورة الخلفية الرئيسية
│   ├── logo.png             # الشعار
│   └── ...
├── icon.svg                 # أيقونة الموقع
├── apple-icon.png          # أيقونة Apple
└── og-image.png            # صورة OG (عند المشاركة)
```

---

## 5️⃣ تحديث محتوى اللغات

### البحث عن ملف اللغات (`lib/language-context.tsx`):

```typescript
const translations = {
  en: {
    nav: {
      whyUs: "Why Choose Us",        // عدّل النصوص
      howItWorks: "How It Works",
      // ...
    },
  },
  ar: {
    nav: {
      whyUs: "لماذا تختارنا",        // النصوص العربية
      // ...
    },
  },
}
```

---

## 6️⃣ إضافة محتوى مخصص

### إضافة مكون جديد:

```typescript
// components/my-custom-section.tsx
"use client"

import { useLanguage } from "@/lib/language-context"

export function MyCustomSection() {
  const { t, dir } = useLanguage()
  
  return (
    <section className="py-24">
      <div className="container">
        <h2>محتواي المخصص</h2>
        {/* محتوى هنا */}
      </div>
    </section>
  )
}
```

### إضافة المكون إلى الصفحة الرئيسية:

في `app/page.tsx`:

```typescript
import { MyCustomSection } from "@/components/my-custom-section"

export default function Home() {
  return (
    <LanguageProvider>
      <main>
        {/* المكونات الأخرى */}
        <MyCustomSection />  {/* أضف مكونك هنا */}
        {/* المكونات الأخرى */}
      </main>
    </LanguageProvider>
  )
}
```

---

## 7️⃣ إضافة ميزات مخصصة

### 📧 نموذج البريد الإلكتروني:

```typescript
// في handleSubmit
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  // إرسال البيانات إلى API الخاص بك
  const response = await fetch('/api/submit-form', {
    method: 'POST',
    body: JSON.stringify(formData),
  })
}
```

### 💬 تكامل البريد الإلكتروني:

استخدم خدمات مثل:
- SendGrid
- Mailgun
- EmailJS
- Resend

---

## 8️⃣ SEO وتحسين محركات البحث

### في `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'DINNOORA - عنوان مخصص',
  description: 'وصف مخصص لموقعك',
  keywords: ['تعليم', 'دراسة', ...], // كلماتك المفتاحية
}
```

### إضافة Schema Markup:

```typescript
// في أي مكون
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'DINNOORA',
  url: 'https://yourdomain.com',
  logo: 'https://yourdomain.com/logo.png',
  // ...
}
```

---

## 9️⃣ التكامل مع الخدمات الخارجية

### Google Analytics:

```bash
# في .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Facebook Pixel:

```typescript
// في layout.tsx
<script async defer crossOrigin="anonymous"
  src="https://connect.facebook.net/...">
</script>
```

---

## 🔟 اختبار النموذج النهائي

```bash
# 1. التطوير
pnpm dev

# 2. الاختبار على جميع الأجهزة
# استخدم أدوات مثل ngrok لاختبار على هاتفك

# 3. البناء
pnpm build

# 4. الاختبار النهائي
pnpm start

# 5. اختبار الأداء
pnpm run build --analyze
```

---

## ✅ Checklist التخصيص النهائي

- [ ] تحديث كل بيانات الاتصال
- [ ] تحديث الإحصائيات
- [ ] تغيير الألوان والتصميم
- [ ] تحميل الصور والشعارات
- [ ] تحديث المحتوى (EN & AR)
- [ ] إضافة الميزات المخصصة
- [ ] اختبار شامل على الجوال
- [ ] اختبار الأداء
- [ ] إعداد SEO
- [ ] تفعيل Analytics
- [ ] الاختبار قبل النشر

---

## 🆘 الدعم والمساعدة

إذا احتجت إلى مساعدة:

1. اقرأ `README.md` - دليل شامل
2. اقرأ `DEPLOYMENT.md` - نشر الموقع
3. تواصل عبر الإيميل: contact@dinnoora.com

---

**جاهز للعمل! استمتع بتطوير موقعك 🚀**
