# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring a professional gold and white color scheme.

## Features

- 🎨 Professional gold and white color theme
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Smooth animations and transitions
- 🎯 SEO optimized
- 🎨 Tailwind CSS for styling
- 📦 Lucide React icons

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Ready for Vercel/Netlify

## Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills section
│   ├── Projects.tsx       # Projects showcase
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer
├── constants/
│   └── colors.ts          # Color constants
└── public/                # Static assets
```

## Customization

### Colors

Edit the color scheme in `tailwind.config.ts` and `constants/colors.ts`.

### Content

Update your personal information in the following components:
- `components/Hero.tsx` - Your name and introduction
- `components/About.tsx` - Your bio and highlights
- `components/Skills.tsx` - Your skills and expertise
- `components/Projects.tsx` - Your project portfolio
- `components/Contact.tsx` - Your contact information

### Social Links

Update social media links in:
- `components/Hero.tsx`
- `components/Footer.tsx`

## Sections

1. **Hero** - Eye-catching introduction with CTA buttons
2. **About** - Professional background and highlights
3. **Skills** - Technical skills with progress bars
4. **Projects** - Portfolio showcase with project cards
5. **Contact** - Contact form and information
6. **Footer** - Quick links and social media

## Performance

- Optimized for Core Web Vitals
- Lazy loading for images
- Minimal JavaScript bundle
- Server-side rendering with Next.js

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

For questions or feedback, reach out through the contact form on the website.
