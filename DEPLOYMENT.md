# DINOORA Deployment Guide

## خطوات النشر السريعة (Quick Deployment)

### الخطوة 1️⃣: التحضير

```bash
# تحديث المتغيرات البيئية
nano .env.local

# تحديث البيانات التالية:
NEXT_PUBLIC_WHATSAPP_NUMBER=+971XXXXXXXXX  # رقمك
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com   # بريدك
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### الخطوة 2️⃣: الاختبار المحلي

```bash
# تثبيت المتعلقات
pnpm install

# تشغيل في وضع التطوير
pnpm dev
# اذهب إلى http://localhost:3000
```

### الخطوة 3️⃣: البناء والاختبار

```bash
# بناء التطبيق
pnpm build

# تشغيل الإنتاج محلياً
pnpm start
```

### الخطوة 4️⃣: النشر على Vercel ✨ (الأفضل)

#### الطريقة الأولى: عبر GitHub (موصى به)

1. ادفع الكود إلى GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dinnoora.git
git push -u origin main
```

2. اذهب إلى [vercel.com](https://vercel.com)
3. اضغط "New Project"
4. اختر مستودع GitHub
5. اختر `dinnoora`
6. أضف متغيرات البيئة (Environment Variables)
7. اضغط "Deploy"

#### الطريقة الثانية: Vercel CLI

```bash
# تثبيت Vercel CLI
npm i -g vercel

# النشر
vercel

# للإنتاج
vercel --prod
```

### الخطوة 5️⃣: شراء الدومين

1. اذهب إلى [namecheap.com](https://namecheap.com) أو [godaddy.com](https://godaddy.com)
2. ابحث عن الدومين المطلوب
3. اشتره
4. في Vercel، اذهب إلى Project Settings → Domains
5. أضف دومينك
6. اتبع التعليمات لربط DNS

---

## النشر باستخدام Docker 🐳

```bash
# بناء الصورة
docker build -t dinnoora .

# تشغيل الحاوية
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SITE_URL=https://yourdomain.com \
  -e NEXT_PUBLIC_WHATSAPP_NUMBER=+971XXXXXXXXX \
  dinnoora

# أو استخدم docker-compose
docker-compose up
```

---

## النشر على خوادم أخرى

### AWS Lightsail

```bash
# 1. أنشئ instance Ubuntu
# 2. اتصل بـ SSH
ssh -i your-key.pem ubuntu@your-ip

# 3. ثبت Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 4. استنسخ المشروع
git clone https://github.com/YOUR_USERNAME/dinnoora.git
cd dinnoora

# 5. ثبت المتعلقات والبناء
npm install
npm run build

# 6. استخدم PM2 للإدارة
npm install -g pm2
pm2 start "npm start" --name dinnoora
pm2 startup
pm2 save
```

### DigitalOcean App Platform

1. اذهب إلى [DigitalOcean](https://digitalocean.com)
2. اضغط "Create" → "App"
3. اتصل بـ GitHub
4. اختر مستودع `dinnoora`
5. اختر "Node.js"
6. أضف Environment Variables
7. اضغط "Launch App"

---

## الإعدادات بعد النشر

### 1️⃣ SSL Certificate
تلقائياً على Vercel ✓

### 2️⃣ CDN
تلقائياً على Vercel ✓

### 3️⃣ Analytics
```bash
# فعّل Google Analytics
# 1. اذهب إلى Google Analytics
# 2. أنشئ property
# 3. احصل على GA_ID
# 4. أضفه إلى .env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 4️⃣ Monitoring
```bash
# استخدم Vercel Analytics
# تلقائي في لوحة Vercel
```

---

## Checklist قبل الإطلاق ✅

- [ ] تحديث جميع بيانات الاتصال
- [ ] اختبار النموذج (Application Form)
- [ ] اختبار WhatsApp Integration
- [ ] تحديث Meta Tags و OG Images
- [ ] اختبار على جميع الأجهزة
- [ ] اختبار في وضع Dark/Light
- [ ] اختبار اللغة العربية والإنجليزية
- [ ] تفعيل HTTPS
- [ ] إضافة sitemap.xml
- [ ] إضافة robots.txt
- [ ] تحسين SEO
- [ ] إعداد البريد الإلكتروني للطلبات

---

## استكشاف الأخطاء

### الخطأ: "Build failed"
```bash
# امسح cache وأعد البناء
rm -rf .next node_modules
pnpm install
pnpm build
```

### الخطأ: "Port already in use"
```bash
# استخدم منفذ مختلف
pnpm dev -- -p 3001
```

### الخطأ: "WhatsApp link not working"
- تحقق من صيغة الرقم في `.env`
- اختبر في متصفح مباشرة: `https://wa.me/1234567890`

---

## دعم وتطوير مستمر

### تحديث التطبيق
```bash
git pull origin main
pnpm install
pnpm build
# Vercel سيعيد النشر تلقائياً
```

### إضافة ميزات جديدة
1. أنشئ فرع جديد: `git checkout -b feature/new-feature`
2. اعمل على الميزة
3. اعمل commit: `git commit -m "Add new feature"`
4. ادفع: `git push origin feature/new-feature`
5. اطلب PR على GitHub

---

## الدعم والمساعدة

- 📧 Email: contact@dinnoora.com
- 💬 WhatsApp: [تواصل معنا](https://wa.me/971503456789)
- 🌐 Website: https://dinnoora.com

---

**DINNOORA Education - جاهز للإطلاق! 🚀**
