# DINOORA Education Platform

Premium student recruitment and study abroad services platform for global education opportunities.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local

# Update .env.local with your actual details:
# - NEXT_PUBLIC_WHATSAPP_NUMBER
# - NEXT_PUBLIC_CONTACT_EMAIL
# - NEXT_PUBLIC_PHONE_NUMBER
# - NEXT_PUBLIC_SITE_URL

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📋 Features

- 🌍 Multi-language support (English & Arabic)
- 📱 Fully responsive design
- ✨ Modern UI with Shadcn/UI components
- 🎨 Dark/Light theme support
- 📊 Student statistics and analytics
- 🏫 University listings and programs
- 💬 WhatsApp integration
- 📝 Application form with validation
- 🔒 Security headers configured

## 🏗️ Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Shadcn/UI components
│   ├── header.tsx        # Navigation header
│   ├── hero.tsx          # Hero section
│   ├── services.tsx      # Services section
│   └── ...              # Other sections
├── lib/                  # Utilities and helpers
│   ├── config.ts        # App configuration
│   ├── types.ts         # TypeScript types
│   └── language-context.tsx  # i18n context
├── styles/             # Global styles
├── public/             # Static assets
└── package.json        # Dependencies
```

## 🎯 Configuration

### Contact Information
Update your contact details in `lib/config.ts`:

```typescript
contact: {
  whatsapp: '+971503456789',
  email: 'contact@dinnoora.com',
  phone: '+971503456789',
  address: 'Dubai, United Arab Emirates',
}
```

### Environment Variables
Key environment variables in `.env.local`:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=+971503456789
NEXT_PUBLIC_CONTACT_EMAIL=contact@dinnoora.com
NEXT_PUBLIC_SITE_URL=https://dinnoora.com
```

## 🛠️ Development

### Build
```bash
pnpm build
```

### Production Start
```bash
pnpm start
```

### Linting
```bash
pnpm lint
```

## 📦 Dependencies

- **Next.js 16**: React framework
- **React 19**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS 4**: Styling
- **Shadcn/UI**: Component library
- **React Hook Form**: Form handling
- **Zod**: Schema validation
- **Lucide React**: Icons
- **Next.js Themes**: Dark mode

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect to Vercel
3. Set environment variables
4. Deploy

```bash
pnpm build
npm run start
```

### Docker
```bash
docker build -t dinnoora .
docker run -p 3000:3000 dinnoora
```

## 🔐 Security

- ✅ Security headers configured
- ✅ XSS protection
- ✅ CSRF protection
- ✅ Environment variables protected
- ✅ Input validation with Zod
- ✅ Type-safe code with TypeScript

## 🌍 i18n Support

Supported languages:
- English (en)
- العربية (ar)

Language switching available in header.

## 📊 Customization

### Update Statistics
Edit `lib/config.ts`:

```typescript
stats: {
  studentsPlaced: '10,000+',
  partnerUniversities: '500+',
  successRate: '98%',
  yearsExperience: '9+',
}
```

### Add New Destinations
Update the `destinations` array in `lib/config.ts`.

### Customize Colors
Edit Tailwind colors in `styles/globals.css`.

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## 📝 License

MIT License - feel free to use this project as you wish.

## 📞 Support

For inquiries and support:
- WhatsApp: [Contact via WhatsApp](https://wa.me/971503456789)
- Email: contact@dinnoora.com
- Website: https://dinnoora.com

---

**DINNOORA Education Platform** - Your Gateway to Global Education
# dinoora-education-done
