import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://amitkumardas.com'),
  title: {
    default: 'Amit Kumar Das - Co-founder & CTO | AI Engineering Leader',
    template: '%s | Amit Kumar Das'
  },
  description: 'Co-founder & CTO at Ratl.ai. AI-native systems architect specializing in intelligent automation, microservices, and engineering productivity. Former engineering leader at Reliance Jio Platform (JioMart, TIRA, Ajio, Fynd).',
  keywords: [
    'Amit Kumar Das',
    'Co-founder',
    'CTO', 
    'AI Engineering Leader',
    'Ratl.ai',
    'System Architecture',
    'DevOps Engineering',
    'Microservices',
    'Intelligent Automation',
    'Engineering Productivity',
    'LangChain',
    'LangGraph',
    'OpenAI',
    'Kubernetes',
    'Cloud Architecture',
    'Reliance Jio',
    'JioMart',
    'Fynd',
    'Performance Engineering',
    'Chaos Engineering',
    'Full Stack Developer',
    'Tech Entrepreneur'
  ],
  authors: [{ name: 'Amit Kumar Das', url: 'https://amitkumardas.com' }],
  creator: 'Amit Kumar Das',
  publisher: 'Amit Kumar Das',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://amitkumardas.com',
    title: 'Amit Kumar Das - Co-founder & CTO | AI Engineering Leader',
    description: 'Co-founder & CTO at Ratl.ai. AI-native systems architect specializing in intelligent automation, microservices, and engineering productivity. Building next-gen software quality and automation platforms.',
    siteName: 'Amit Kumar Das - Portfolio',
    images: [
      {
        url: 'https://amitkumardas.com/logos/hero-img.png',
        width: 1200,
        height: 630,
        alt: 'Amit Kumar Das - Co-founder & CTO at Ratl.ai',
        type: 'image/png',
      },
      {
        url: 'https://amitkumardas.com/logos/hero-img.png',
        width: 800,
        height: 600,
        alt: 'Amit Kumar Das - AI Engineering Leader',
        type: 'image/png',
      }
    ],

  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amit Kumar Das - Co-founder & CTO | AI Engineering Leader',
    description: 'Co-founder & CTO at Ratl.ai. Building next-gen software quality and automation platforms with AI-native systems architecture.',
    creator: '@AmitKdas94',
    images: ['https://amitkumardas.com/logos/hero-img.png'],
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://amitkumardas.com',
  },
  category: 'technology',
  classification: 'Business',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Amit Kumar Das',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#3b82f6',
    'msapplication-TileImage': '/mstile-144x144.png',
    'theme-color': '#3b82f6',
  },
}

// Structured Data (JSON-LD) for rich snippets
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Amit Kumar Das',
  givenName: 'Amit Kumar',
  familyName: 'Das',
  jobTitle: 'Co-founder & CTO',
  description: 'AI-native systems architect specializing in intelligent automation, microservices, and engineering productivity',
  url: 'https://amitkumardas.com',
  image: 'https://amitkumardas.com/logos/hero-img.png',
  email: 'amitkiit1994@gmail.com',
  telephone: '+91-8093151099',
  sameAs: [
    'https://github.com/amitkiit1994',
    'https://x.com/AmitKdas94',
    'https://www.linkedin.com/in/amitkiit1994/',
    'https://instagram.com/amitkumardas___'
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Ratl.ai',
    url: 'https://ratl.ai',
    description: 'Next-gen software quality and automation platform'
  },
  alumniOf: [
    {
      '@type': 'Organization',
      name: 'Reliance Retail',
      url: 'https://www.relianceretail.com'
    },
    {
      '@type': 'Organization', 
      name: 'Fynd',
      url: 'https://www.fynd.com'
    },
    {
      '@type': 'Organization',
      name: 'Infosys',
      url: 'https://www.infosys.com'
    }
  ],
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'LangChain',
    'LangGraph',
    'OpenAI',
    'System Architecture',
    'Microservices',
    'DevOps',
    'Kubernetes',
    'Cloud Computing',
    'Performance Engineering',
    'Chaos Engineering',
    'Intelligent Automation',
    'Software Engineering',
    'Full Stack Development'
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressRegion: 'India'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Favicons and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3b82f6" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
        <link rel="dns-prefetch" href="//x.com" />
        <link rel="dns-prefetch" href="//instagram.com" />
        <link rel="dns-prefetch" href="//ratl.ai" />
        <link rel="dns-prefetch" href="//calendly.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 