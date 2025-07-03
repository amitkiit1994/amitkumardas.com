"use client"

import { motion } from 'framer-motion'
import { ChevronDown, Mail } from 'lucide-react'

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [2, 1, 1, 2, 2],
            rotate: [0, 270, 270, 0, 0],
            borderRadius: ["50%", "50%", "20%", "20%", "50%"],
          }}
          transition={{
            duration: 25,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Image - Centered */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <img
            src="/logos/hero-img.png"
            alt="Amit Kumar Das - Co-founder & CTO at Ratl.ai"
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full ring-4 ring-primary ring-offset-2 shadow-lg object-cover"
            loading="eager"
            width="176"
            height="176"
            decoding="async"
          />
        </div>
        
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-base sm:text-lg text-muted-foreground mb-3 sm:mb-4"
        >
          Hello, I'm
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight"
        >
          Amit Kumar Das
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-6 sm:mb-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-2 gap-y-2"
        >
          <span className="inline-flex items-center flex-wrap justify-center gap-2">
            <span>Co-founder & CTO</span>
            <a
              href="https://ratl.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-primary text-background shadow-sm hover:bg-primary/90 transition text-sm sm:text-base inline-flex items-center"
              style={{ fontFamily: 'var(--font-sans, Inter, Arial, sans-serif)' }}
              aria-label="Visit Ratl.ai website"
            >
              <img src="/logos/ratl-white.png" alt="Ratl.ai logo" className="h-4 sm:h-5 w-auto object-contain" />
            </a>
          </span>
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl">| AI Engineering Leader</span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2"
        >
          "Great engineering is about automating the repeatable and documenting the complex"
        </motion.p>

        {/* CTA Button - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center items-center mb-12 sm:mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 text-sm sm:text-base"
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToAbout}
          className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors duration-200"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
      </motion.div>
    </section>
  )
} 