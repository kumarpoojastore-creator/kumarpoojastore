# Quick Start Guide

## 🚀 Run Locally

1. **Install dependencies** (if not already done):
```bash
npm install
```

2. **Start development server**:
```bash
npm start
```

The site will open at `http://localhost:3000`

## 📝 Before Deploying

### 1. Add Hero Image
- Take/obtain high-resolution brass pooja element + smoke photo
- Place at: `public/images/hero-brass-pooja.jpg`
- Uncomment the hero image line in `src/components/Hero.tsx`:
  ```tsx
  <img src="/images/hero-brass-pooja.jpg" alt="Brass Pooja Elements" className="hero-image" />
  ```

### 2. Test Everything
- ✅ Hero section displays correctly
- ✅ WhatsApp button opens with pre-filled message
- ✅ Value strips scroll smoothly
- ✅ Product images load (all 50+ products)
- ✅ Contact information is correct
- ✅ Parallax scrolling works
- ✅ Mobile responsive (test on phone or browser dev tools)

## 🎨 Customization Checklist

- [ ] Hero image added
- [ ] Product images verified (in `public/images/`)
- [ ] Contact details verified
- [ ] WhatsApp phone number verified
- [ ] Google Maps link tested
- [ ] All animations work smoothly

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized build in the `build/` folder.

## 🌐 Deploy to Vercel

See `DEPLOYMENT.md` for detailed instructions.

Quick deploy:
```bash
npx vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

## ✅ Post-Deployment Checklist

- [ ] Test website on live URL
- [ ] Test WhatsApp link on mobile
- [ ] Verify all images load
- [ ] Check mobile responsiveness
- [ ] Test smooth scrolling
- [ ] Share URL with customers!

---

**Need Help?** Check `README.md` or `DEPLOYMENT.md` for more details.

