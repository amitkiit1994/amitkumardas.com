"use client"

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

const timelineData = [
  {
    year: '2024–Present',
    title: 'Co-founder @ Ratl.ai',
    description: 'Building an AI-native autonomous agentic test automation platform combining intelligent agents, continuous monitoring, and adaptive reliability engineering.',
    company: 'Ratl.ai',
    location: 'Mumbai, India',
    type: 'Founder'
  },
  {
    year: '2022–2024',
    title: 'Engineering Lead @ Fynd (Reliance Retail)',
    description: 'Led engineering productivity and built the GPT-powered Ratl Test Lab to automate functional, load, and device testing across Reliance e-commerce brands.',
    company: 'Fynd',
    location: 'Mumbai, India',
    type: 'Leadership'
  },
  {
    year: '2021–2022',
    title: 'Software Engineer @ Microsoft',
    description: 'Designed a robust automation framework to test Azure PAAS services and enhance streaming and fan engagement platforms.',
    company: 'Microsoft',
    location: 'Bangalore, India',
    type: 'Engineering'
  },
  {
    year: '2021',
    title: 'Software Development Engineer @ Jio',
    description: 'Engineered automation bots and load test frameworks for JioMart’s B2C order flow, enabling containerized testing and real-time performance metrics.',
    company: 'Jio',
    location: 'Bangalore, India',
    type: 'Engineering'
  },
  {
    year: '2019–2021',
    title: 'Senior Software Engineer @ SAS',
    description: 'Owned automation, testing, and CI/CD integration for statistical grid apps, microservices, and Kubernetes clusters across product releases.',
    company: 'SAS Institute',
    location: 'Pune, India',
    type: 'Engineering'
  },
  {
    year: '2017–2019',
    title: 'Software Engineer @ Infosys',
    description: 'Developed Selenium-based test frameworks and migrated QA projects to ALM using Java, Maven, and TestNG for enterprise clients.',
    company: 'Infosys',
    location: 'Pune, India',
    type: 'Engineering'
  }
]

export function JourneySection() {
  return (
    <section id="journey" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="journey-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Journey
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />

          {/* Company Logos Row */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-2">
            <a href="https://ratl.ai" target="_blank" rel="noopener noreferrer">
              <img src="/logos/ratl-dark.png" alt="Ratl.ai" className="h-10 w-auto object-contain dark:hidden" />
              <img src="/logos/ratl-white.png" alt="Ratl.ai" className="h-10 w-auto object-contain hidden dark:inline" />
            </a>
            <a href="https://www.fynd.com" target="_blank" rel="noopener noreferrer">
              <img src="/logos/fynd.png" alt="Fynd" className="h-10 w-auto object-contain" />
            </a>
            <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer">
              <img src="/logos/microsoft.png" alt="Microsoft" className="h-10 w-auto object-contain" />
            </a>
            <a href="https://www.jio.com" target="_blank" rel="noopener noreferrer">
              <img src="/logos/jio.png" alt="Jio" className="h-10 w-auto object-contain" />
            </a>
            <a href="https://www.sas.com" target="_blank" rel="noopener noreferrer">
              <img src="/logos/sas.png" alt="SAS" className="h-10 w-auto object-contain" />
            </a>
            <a href="https://www.infosys.com" target="_blank" rel="noopener noreferrer">
              <img src="/logos/infosys.png" alt="Infosys" className="h-10 w-auto object-contain" />
            </a>
          </div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 z-10" />

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {/* Year Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                      <Calendar className="w-4 h-4" />
                      {item.year}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>

                    {/* Company & Location */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        {item.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                    {/* Type Badge */}
                    <div className="mt-4">
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        item.type === 'Founder' ? 'bg-purple-500/20 text-purple-600 dark:text-purple-400' :
                        item.type === 'Leadership' ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400' :
                        'bg-green-500/20 text-green-600 dark:text-green-400'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-16 border-t border-border"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Ready to build the future together?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can leverage AI and automation to scale your engineering team and deliver exceptional software.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 