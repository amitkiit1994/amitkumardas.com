# Amit Kumar Das - Personal Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features a clean design with smooth animations and dark mode support.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Scrolling**: Animated navigation between sections
- **Interactive Elements**: Hover effects and micro-interactions
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Optimized images and code splitting

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **TypeScript**: Full type safety
- **Deployment**: Vercel ready

## 📋 Sections

1. **Hero**: Animated introduction with call-to-action buttons
2. **About**: Personal information and expertise areas
3. **Journey**: Professional timeline with company details
4. **Recommendations**: Testimonials carousel
5. **Contact**: Contact form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/amitkumardas/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── navigation.tsx       # Navigation bar with theme toggle
│   ├── theme-provider.tsx   # Theme context provider
│   └── sections/            # Page sections
│       ├── hero-section.tsx
│       ├── about-section.tsx
│       ├── journey-section.tsx
│       ├── recommendations-section.tsx
│       └── contact-section.tsx
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
└── package.json
```

## 🎨 Customization

### Colors and Theme

The color scheme is defined in `app/globals.css` using CSS custom properties. You can modify the colors by updating the `:root` and `.dark` selectors.

### Content

Update the content in each section component:
- Personal information in `about-section.tsx`
- Timeline data in `journey-section.tsx`
- Testimonials in `recommendations-section.tsx`
- Contact information in `contact-section.tsx`

### Styling

The design uses Tailwind CSS classes. You can customize the appearance by modifying the className props in each component.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

Dark mode is implemented using `next-themes` and automatically detects the user's system preference. Users can toggle between light and dark themes using the button in the navigation.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📈 Performance

- Lighthouse score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals optimized
- Image optimization with Next.js Image component
- Code splitting and lazy loading

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

The project uses:
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting (recommended)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: amit@amitkumardas.com
- **LinkedIn**: [amitkumardas](https://linkedin.com/in/amitkumardas)
- **GitHub**: [amitkumardas](https://github.com/amitkumardas)
- **Twitter**: [@amitkumardas](https://twitter.com/amitkumardas)

---

Built with ❤️ by Amit Kumar Das 