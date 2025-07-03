"use client"

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useState } from 'react'

const recommendations = [
  {
    name: 'Sunita Singh',
    role: 'Principal PM @ SAS',
    quote: 'Nothing was too difficult… dependable; an asset to his team.',
    avatar: '/avatars/sunita.jpg'
  },
  {
    name: 'Ankit Mehrotra',
    role: 'Manager @ SAS',
    quote: 'Diligent, suave and a problem solver… reduced regression time via automation.',
    avatar: '/avatars/ankit.jpg'
  },
  {
    name: 'Gorang Khandelwal',
    role: 'Manager @ SAS',
    quote: 'Self‑motivated perfectionist; finishes ahead of deadlines.',
    avatar: '/avatars/gorang.jpg'
  },
  {
    name: 'Mahesh Purandare',
    role: 'BI Specialist @ SAS',
    quote: 'Fantastic tester with mastery over web automation.',
    avatar: '/avatars/mahesh.jpg'
  },
  {
    name: 'Santosh Revatgaon',
    role: 'Sr. Analyst @ Accenture',
    quote: 'Bug-finding master; delivered quality releases.',
    avatar: '/avatars/santosh.jpg'
  }
]

export function RecommendationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % recommendations.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + recommendations.length) % recommendations.length)
  }

  return (
    <section id="recommendations" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="recommendations-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What People Say
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-background border border-border shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-background border border-border shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex"
            >
              {recommendations.map((recommendation, index) => (
                <div
                  key={recommendation.name}
                  className="w-full flex-shrink-0 px-4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                  >
                    <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      {/* Quote Icon */}
                      <div className="flex justify-center mb-6">
                        <div className="p-3 rounded-full bg-primary/10">
                          <Quote className="w-8 h-8 text-primary" />
                        </div>
                      </div>

                      {/* Quote Text */}
                      <blockquote className="text-xl text-center text-muted-foreground leading-relaxed mb-8">
                        "{recommendation.quote}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary">
                            {recommendation.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-foreground">
                            {recommendation.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {recommendation.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {recommendations.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-primary'
                    : 'bg-border hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {recommendations.slice(0, 3).map((recommendation, index) => (
            <motion.div
              key={`grid-${recommendation.name}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-card border border-border rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-primary">
                    {recommendation.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-3">
                    "{recommendation.quote}"
                  </p>
                  <div className="font-semibold text-foreground text-sm">
                    {recommendation.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {recommendation.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 