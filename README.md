# Kumar Pooja Store — Website

A premium dark-themed website for Kumar Pooja Store with smooth parallax scrolling and modern animations.

## Features

- 🎨 Dark premium theme with soft glow accents
- ✨ GSAP animations with smooth parallax effects
- 📱 Fully responsive design
- 🛒 WhatsApp-only ordering (no cart/checkout)
- 🖼️ Product showcase grid
- 📍 Contact information display

## Tech Stack

- React with TypeScript
- GSAP for animations
- Locomotive Scroll for smooth scrolling
- CSS3 with custom properties

## Development

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

## Deployment to Vercel

### Option 1: Using Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2: Using GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect the Create React App configuration
5. Deploy!

The `vercel.json` file is already configured for optimal deployment.

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx          # Hero section with parallax
│   ├── ValueStrips.tsx   # Scroll micro copy values
│   ├── Products.tsx      # Product grid
│   └── Contact.tsx       # Contact information
├── App.tsx               # Main app component
├── App.css               # Global app styles
└── index.css             # Base styles and theme
```

## Product Images

Product images should be placed in `public/images/` directory with the naming convention:
- `01-agarbatti.jpg`
- `02-aragaja.jpg`
- etc.

The component automatically maps product names to image filenames.

## Customization

### Theme Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --bg-dark: #0a0a0a;
  --bg-darker: #050505;
  --accent-gold: #b8860b;
  --accent-brass: #cd853f;
}
```

### Contact Information

Update contact details in `src/components/Contact.tsx`

## License

Free to use for Kumar Pooja Store
