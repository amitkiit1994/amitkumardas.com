"use client"

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

const timelineData = [
  {
    year: '2024–Present',
    title: 'Co-founder @ Ratl.ai',
    description: 'In the dynamic world of software development, ensuring reliability and efficiency is paramount. RATL.ai revolutionizes your development process by integrating intelligent automation, comprehensive testing, and continuous monitoring. Our platform ensures that your software meets and exceeds industry standards for performance, security, and user satisfaction.',
    company: 'Ratl.ai',
    location: 'Mumbai, India',
    type: 'Founder'
  },
  {
    year: '2022-2024',
    title: 'Engineering Lead @ Fynd (Reliance Retail)',
    description: 'AI lead the engineering productivity and reliability for e-commerce sales channels, including Jiomart, Tira, Jiomart Partners, Swadesh, Azorte, Gap, and Ajio. I architected and built Ratl, a Generative AI-powered test lab solution using technologies like Redis Search, Text Da Vinci Model, and OpenAI Engine. Rattle automates functional and load testing with tools like Rest Assured, Spring Boot, TestNG, Playwright, and Appium, integrated with platforms such as Headspin, BrowserStack, LambdaTest, and Applitools. The platform supports containerized test orchestration, visualizes reports through Slack, Report Portal, Grafana, and Geckoboard, and includes load testing powered by Gatling. Additionally, I developed the Jio Commerce Device Lab for remote testing on real devices and created Ratl CoPilot, a GPT-powered productivity tool that assists in test case generation, automation script creation, pipeline building, and enhancing release decision-making.',
    company: 'Fynd',
    location: 'Mumbai, India',
    type: 'Leadership'
  },
  {
    year: '2021–2022',
    title: 'Software Engineer @ Microsoft',
    description: 'As an integral part of a team developing a cutting-edge direct-to-consumer platform, I am dedicated to delivering innovative fan engagement experiences and enhanced streaming capabilities, leveraging the robust power of Microsoft Azure and its AI capabilities. My core responsibility is to ensure the highest quality of the application by automating and enhancing frameworks for seamless Azure PAAS integrations, including Cosmos DB, Event Hubs, Event Grid, Service Bus, Azure Data Explorer (ADX), Function Apps, and Azure Web Apps. I am architecting an advanced in-house test automation framework that not only supports the programmatic execution of these integrations but also ensures efficient, reliable, and scalable testing processes. This framework is designed to facilitate comprehensive test coverage, optimize performance, and enhance the overall reliability of our platform, thereby ensuring a superior user experience.',
    company: 'Microsoft',
    location: 'Bangalore, India',
    type: 'Engineering'
  },
  {
    year: '2021',
    title: 'Software Development Engineer @ Jio',
    description: 'As a crucial member of the initial Quality Assurance team for the JioMart e-commerce application, I played a key role in developing bots using Spring Boot and HTTP client to automate APIs for end-to-end B2C order processing, aligning with the Software Testing as a Service (STAAS) model. I integrated this framework with MySQL for storing test data, InfluxDB for custom metrics, and Grafana for visualizing incoming order metrics. Additionally, I built an automation framework with Gatling and Maven to simulate load on high-traffic endpoints, ensuring robust load testing. I containerized the project using Docker, enabling seamless deployment and testing across all servers. Furthermore, I created and set up service virtualization using the Specmatic tool to mock external API responses, and containerized all test automation projects for consistent deployment across various environments.',
    company: 'Jio',
    location: 'Bangalore, India',
    type: 'Engineering'
  },
  {
    year: '2019–2021',
    title: 'Senior Software Engineer @ SAS',
    description: 'I was responsible for testing various aspects of statistical calculations, data seeding, and the Grid and Visual Analytics interface from a functional perspective. This included data validations through database testing and backend validation for API requests and responses. I scrutinized logs for every microservice and pod in a container-orchestrated system and ensured the maintenance and RPM updates of microservices to maintain a CI/CD approach using Jenkins or the Linux terminal. Additionally, I created and administered Kubernetes clusters, troubleshooting pods, deployments, services, persistent volumes, and more. I wrote automation codes for both API (Groovy) and UI (Selenium) to support the CI/CD DevOps model, maintained clean BVT and sanity API automation reports, and regularly updated code against test case failures. I was solely responsible for the classic product version release, ensuring customer-reported defect fixes and thorough regression testing. Managing the UI automation team, I handled project planning through JIRA, created stories and test cases, validated code from a functional perspective, and interacted regularly with product management and stakeholders. Furthermore, I conducted performance testing, prepared comparison insight reports, and documented test cases and reports to ensure a comprehensive and agile testing approach.',
    company: 'SAS Institute',
    location: 'Pune, India',
    type: 'Engineering'
  },
  {
    year: '2017–2019',
    title: 'Software Engineer @ Infosys',
    description: 'Starting my career with Infosys in the Mysuru Area, India, I received professional training in various fundamental technologies including Python, RDBMS (Oracle and MySQL), Data Structures, Core Java, JavaScript, HTML5, CSS, Spring Boot, Hibernate, and Servlets. Additionally, I gained expertise in automation testing tools such as Selenium, UFT, and ALM-QC. In my role as a Software Engineer from January 2017 to April 2017, I reviewed business requirements, prepared test plans and scripts, and identified and reported defects through smoke testing, continuous regression testing, and performance testing. I was responsible for migrating projects into Application Lifecycle Management (ALM) and developed a data-driven automation framework using the Page Object Design pattern. I identified automation scenarios from test cases and developed web automation scripts using Selenium WebDriver and TestNG. Furthermore, I integrated TestNG with Maven to create a robust framework, implementing the Listeners interface, Page Object pattern, Log4j, and Excel Data-Driven testing.',
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