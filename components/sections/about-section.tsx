"use client"

import { motion } from 'framer-motion'
import { Brain, Bot, Sparkles, Code, LayoutDashboard, TestTube, Database, BrainCog, Cloud, Rocket, CloudSun, Server, MonitorSmartphone, Network, ActivitySquare, GaugeCircle, Zap, Workflow } from 'lucide-react'

const expertiseAreas = [
  // 💡 AI/LLM Development
  { name: 'Agentic Frameworks (LangGraph, ReAct, AutoGen, CrewAI)', icon: Brain, color: 'bg-purple-500/20 text-purple-600 dark:text-purple-400' },
  { name: 'LLM Integration (LangChain, OpenAI, Gemini, Claude, Mistral)', icon: Bot, color: 'bg-violet-500/20 text-violet-600 dark:text-violet-400' },
  { name: 'Memory, Tools & Orchestration (MCPs, ToolCalling, Retrieval Augmented Generation)', icon: Sparkles, color: 'bg-rose-500/20 text-rose-600 dark:text-rose-400' },
  { name: 'Prompt Engineering & Agents (OpenAI Assistants, Function Calling)', icon: Sparkles, color: 'bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400' },

  // 💻 Software Engineering
  { name: 'Backend (Java, Python, Go, Node.js, FastAPI, Express, Django, Spring)', icon: Code, color: 'bg-blue-500/20 text-blue-600 dark:text-blue-400' },
  { name: 'Frontend (Next.js, React, Tailwind, ShadCN)', icon: LayoutDashboard, color: 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-400' },
  { name: 'API Design (REST, GraphQL, OpenAPI, gRPC)', icon: Code, color: 'bg-pink-500/20 text-pink-600 dark:text-pink-400' },
  { name: 'Testing (Gatling, JMeter, Locust, Selenium, Playwright)', icon: TestTube, color: 'bg-red-500/20 text-red-600 dark:text-red-400' },

  // 🗃️ Data & Storage
  { name: 'Databases (MongoDB, PostgreSQL, Redis, ClickHouse)', icon: Database, color: 'bg-green-500/20 text-green-600 dark:text-green-400' },
  { name: 'Vector DBs (Pinecone, Weaviate, Chroma, Qdrant)', icon: BrainCog, color: 'bg-lime-500/20 text-lime-600 dark:text-lime-400' },

  // ☁️ DevOps & Infra
  { name: 'DevOps (Docker, Kubernetes, Helm, ArgoCD, Tekton)', icon: Cloud, color: 'bg-orange-500/20 text-orange-600 dark:text-orange-400' },
  { name: 'CI/CD (GitHub Actions, GitLab CI, Azure DevOps, CircleCI)', icon: Rocket, color: 'bg-indigo-500/20 text-indigo-600 dark:text-indigo-400' },
  { name: 'Cloud Platforms (AWS, GCP, Azure)', icon: CloudSun, color: 'bg-sky-500/20 text-sky-600 dark:text-sky-400' },
  { name: 'Infrastructure as Code (Terraform, Pulumi)', icon: Server, color: 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400' },
  { name: 'Cloud Observability (Prometheus, Grafana, OpenTelemetry)', icon: MonitorSmartphone, color: 'bg-lime-500/20 text-lime-600 dark:text-lime-400' },

  // 🔧 Architecture
  { name: 'Microservices & Orchestration (gRPC, Kafka, NATS)', icon: Network, color: 'bg-teal-500/20 text-teal-600 dark:text-teal-400' },
  { name: 'Distributed Systems & Caching (Redis, Hazelcast, CDN)', icon: ActivitySquare, color: 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' },
  { name: 'Performance Tuning & Reliability Engineering', icon: GaugeCircle, color: 'bg-rose-500/20 text-rose-600 dark:text-rose-400' },
  { name: 'Chaos Engineering (Gremlin, Litmus, ToxiProxy)', icon: Zap, color: 'bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400' },

  // 🔄 Automation & Intelligence
  { name: 'Intelligent Automation (Task Graphs, RPA, AutoML)', icon: Sparkles, color: 'bg-violet-500/20 text-violet-600 dark:text-violet-400' },
  { name: 'DataOps & AI Pipelines (LangSmith, Airflow, Dagster)', icon: Workflow, color: 'bg-stone-500/20 text-stone-600 dark:text-stone-400' },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-3xl"
        >
          <h2 id="about-heading" className="text-2xl font-semibold text-foreground mb-6">
            Engineering leader, AI-native systems architect, and passionate builder
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            As Co-founder & Head of Engineering at <span className="text-primary font-semibold">Ratl.ai</span>, I'm committed to building high-impact, scalable solutions that redefine how engineering teams approach automation, testing, and developer productivity. My journey—from leading platform & DevOps at <span className="text-primary font-semibold">Reliance Jio Platform</span> (JioMart, TIRA, Ajio, Fynd Retail Platform) to founding Ratl.ai—has been driven by a relentless focus on system reliability, release engineering, and scaling engineering efficiency.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I specialize in scaling high-performance, fault-tolerant, and self-healing systems. My expertise spans microservices orchestration, chaos engineering, cloud observability, distributed systems, and intelligent automation. I thrive on solving mission-critical bottlenecks, fine-tuning system latencies, and driving engineering efficiency at scale.
          </p>
        </motion.div>

        {/* Expertise Badges - Centered Below Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Areas of Expertise
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-5xl">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-3 p-3 rounded-lg ${area.color} border border-current/20 justify-center`}
              >
                <area.icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">{area.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border"
      >
        {[
          { label: 'Years Experience', value: '7+' },
          { label: 'Companies Led', value: '5+' },
          { label: 'Projects Delivered', value: '50+' },
          { label: 'Team Members Led', value: '20+' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
} 