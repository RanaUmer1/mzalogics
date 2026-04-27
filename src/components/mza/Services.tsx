'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { Smartphone, Cloud, Palette, Globe, ShieldCheck, GitMerge, Code2 } from 'lucide-react';

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored platforms built around how your business actually works — not around a template.",
    icon: <Code2 className="size-8 text-mza-neon" />,
    features: ["Business process automation", "Internal tools & dashboards", "SaaS & B2B platforms", "Legacy system modernization"],
    tech: ["Node.js", ".NET", "Python", "PostgreSQL"]
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform apps engineered for performance, reliability and long-term maintainability.",
    icon: <Smartphone className="size-8 text-blue-400" />,
    features: ["Android (Kotlin / Java)", "iOS (Swift)", "Flutter & React Native", "Store submission & post-launch support"],
    tech: ["Kotlin", "Swift", "Flutter", "React Native"]
  },
  {
    title: "Web Development & CMS",
    description: "Fast, SEO-ready websites and web applications — from marketing sites to complex admin portals.",
    icon: <Globe className="size-8 text-purple-400" />,
    features: ["Next.js & React front-ends", "Laravel / Node.js back-ends", "Headless & traditional CMS", "E-commerce builds"],
    tech: ["Next.js", "React", "Laravel", "WordPress"]
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description: "Production-grade cloud setups, CI/CD pipelines and monitoring so your product stays online.",
    icon: <Cloud className="size-8 text-pink-400" />,
    features: ["AWS / GCP / Azure setup", "CI/CD pipelines", "Container orchestration", "Monitoring & cost optimization"],
    tech: ["AWS", "Docker", "Kubernetes", "Terraform"]
  },
  {
    title: "UI/UX Design & Product Strategy",
    description: "Design-led thinking that starts with users and business outcomes, then turns them into clean interfaces.",
    icon: <Palette className="size-8 text-yellow-400" />,
    features: ["Discovery & user research", "Wireframes & prototypes", "Design systems", "Conversion-focused UI"],
    tech: ["Figma", "Design Systems", "Prototyping"]
  },
  {
    title: "QA, Testing & Automation",
    description: "Independent QA engineers and automated test suites to catch issues before your users do.",
    icon: <ShieldCheck className="size-8 text-emerald-400" />,
    features: ["Manual & exploratory QA", "Automated test suites", "Performance & load testing", "Security reviews"],
    tech: ["Cypress", "Playwright", "Appium", "JMeter"]
  },
  {
    title: "Agile Project Management",
    description: "Dedicated PMs who keep delivery predictable — clear scope, clear sprints, clear communication.",
    icon: <GitMerge className="size-8 text-indigo-400" />,
    features: ["Sprint planning & delivery", "Scope & risk management", "Weekly client reviews", "Transparent reporting"],
    tech: ["Scrum", "Kanban", "Jira", "Linear"]
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-mza-bg-soft text-white">
      <div className="main-container">
        <div className="text-center mb-20">
          <RevealAnimation delay={0.1}>
            <span className="text-mza-neon font-bold uppercase tracking-wider text-sm">What We Do</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4">End-to-end engineering, under one roof</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
              Seven tightly-integrated service lines, one senior team. Engage us for a single capability — or for full product ownership from idea to launch.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <RevealAnimation key={index} delay={0.1 * index} direction="up">
              <div className="p-8 rounded-2xl bg-mza-bg border border-white/5 hover:border-mza-neon/30 transition-all group hover:bg-mza-bg/50">
                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-mza-neon/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="size-1.5 rounded-full bg-mza-neon"></div>
                      {feat}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {service.tech.map((t, i) => (
                    <span key={i} className="text-[10px] uppercase font-bold px-2 py-1 bg-white/5 rounded-md text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
