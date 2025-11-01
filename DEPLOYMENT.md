# Deployment Guide — Kumar Pooja Store Website

## Quick Deploy to Vercel

### Method 1: Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Navigate to project directory:
```bash
cd C:\Documents\Projects\kumar-pooja-store-website
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts to link/create your project

### Method 2: GitHub Integration

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit - Kumar Pooja Store website"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "Add New Project"

4. Import your GitHub repository

5. Vercel will auto-detect Create React App settings

6. Click "Deploy"

## Adding Hero Image

**Important**: The brief specifies you need your own high-resolution brass pooja element + smoke hero photo.

1. Place your hero image in `public/images/` directory
2. Name it `hero-brass-pooja.jpg`
3. Uncomment the hero image line in `src/components/Hero.tsx`:
   - Find: `{/* <img src="/images/hero-brass-pooja.jpg" ... /> */}`
   - Change to: `<img src="/images/hero-brass-pooja.jpg" ... />`

## Environment Variables

No environment variables needed for this project.

## Build Command

Vercel will automatically run:
```bash
npm run build
```

## Output Directory

Vercel will automatically detect:
```
build/
```

## Post-Deployment

After deployment:
1. Test the WhatsApp link (should open with pre-filled message)
2. Verify all product images load correctly
3. Check mobile responsiveness
4. Test smooth scrolling and parallax effects

## Custom Domain

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Troubleshooting

### Images not loading:
- Verify images are in `public/images/` directory
- Check image filenames match the mapping in `Products.tsx`
- Ensure images are committed to git (not in .gitignore)

### Parallax not working:
- Check browser console for errors
- Ensure Locomotive Scroll initialized correctly
- Verify GSAP ScrollTrigger plugin is registered

### Build fails:
- Run `npm install` locally to check for dependency issues
- Check for TypeScript errors: `npm run build`
- Verify all imports are correct

