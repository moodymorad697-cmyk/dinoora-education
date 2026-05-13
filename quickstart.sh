#!/usr/bin/env bash

# DINOORA - Quick Start Guide
# اختر رقم الخيار:

echo ""
echo "╔════════════════════════════════════════════════════════╗"
echo "║      🚀 DINOORA Education Platform - Quick Start       ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

echo "اختر الخطوة التالية:"
echo ""
echo "1) 📖 اقرأ الوثائق (README)"
echo "2) 🔧 إعدادات التخصيص (SETUP)"
echo "3) 🚀 نشر الموقع (DEPLOYMENT)"
echo "4) 📋 ملخص التحسينات (IMPROVEMENTS)"
echo "5) 💻 تشغيل التطوير (dev)"
echo "6) 🔨 بناء الإنتاج (build)"
echo "7) ▶️  تشغيل الإنتاج (start)"
echo "8) 🌐 فتح المشروع"
echo "9) 📝 تحديث البيانات (.env.local)"
echo ""
echo "0) ❌ خروج"
echo ""
read -p "اختر رقم: " choice

case $choice in
  1)
    echo ""
    echo "📖 فتح README.md..."
    open README.md || cat README.md
    ;;
  2)
    echo ""
    echo "🔧 فتح SETUP.md..."
    open SETUP.md || cat SETUP.md
    ;;
  3)
    echo ""
    echo "🚀 فتح DEPLOYMENT.md..."
    open DEPLOYMENT.md || cat DEPLOYMENT.md
    ;;
  4)
    echo ""
    echo "📋 فتح IMPROVEMENTS.md..."
    open IMPROVEMENTS.md || cat IMPROVEMENTS.md
    ;;
  5)
    echo ""
    echo "💻 تشغيل التطوير..."
    pnpm dev || npm run dev
    ;;
  6)
    echo ""
    echo "🔨 بناء الإنتاج..."
    pnpm build || npm run build
    ;;
  7)
    echo ""
    echo "▶️  تشغيل الإنتاج..."
    pnpm start || npm start
    ;;
  8)
    echo ""
    echo "🌐 فتح المشروع..."
    open . || pwd
    ;;
  9)
    echo ""
    echo "📝 تحديث البيانات (.env.local)..."
    echo ""
    echo "افتح الملف: .env.local"
    echo "وقم بتحديث البيانات التالية:"
    echo "  - NEXT_PUBLIC_WHATSAPP_NUMBER"
    echo "  - NEXT_PUBLIC_CONTACT_EMAIL"
    echo "  - NEXT_PUBLIC_SITE_URL"
    echo ""
    nano .env.local 2>/dev/null || echo "استخدم محررك المفضل لتحرير .env.local"
    ;;
  0)
    echo ""
    echo "👋 وداعاً! جاهز للبدء متى شئت."
    echo ""
    ;;
  *)
    echo ""
    echo "❌ خيار غير صحيح. حاول مجدداً."
    ;;
esac
