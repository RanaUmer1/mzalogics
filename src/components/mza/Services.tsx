'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { Smartphone, Layout, Cpu, Palette, Globe } from 'lucide-react';

const services = [
  {
    title: "Mobile App Development",
    description: "High-performance native apps that dominate the market.",
    icon: <Smartphone className="size-8 text-mza-neon" />,
    features: ["Native Android (Kotlin)", "iOS (Swift)", "Performance Optimization", "Play Store Deployment"],
    tech: ["Kotlin", "Swift", "Jetpack Compose", "SwiftUI"]
  },
  {
    title: "Web Development",
    description: "Robust backends and lighting-fast frontends.",
    icon: <Globe className="size-8 text-blue-400" />,
    features: ["Enterprise Architecture", "Admin Dashboards", "API Integrations", "Optimized SEO"],
    tech: ["Laravel", "Vue.js", "Next.js", "React"]
  },
  {
    title: "Cross Platform",
    description: "Ship faster without compromising quality.",
    icon: <Layout className="size-8 text-purple-400" />,
    features: ["Flutter Development", "Shared Codebase", "Fast Iterations", "Reliable Scaling"],
    tech: ["Flutter", "Dart", "Firebase"]
  },
  {
    title: "AI Solutions",
    description: "Integrate intelligence into your business workflow.",
    icon: <Cpu className="size-8 text-pink-400" />,
    features: ["Custom Chatbots", "Workflow Automation", "AI Integrations", "Data Insights"],
    tech: ["OpenAI", "Python", "TensorFlow"]
  },
  {
    title: "UI/UX Design",
    description: "Data-driven design that converts users to customers.",
    icon: <Palette className="size-8 text-yellow-400" />,
    features: ["User Wireframes", "Interactive Prototypes", "App Flows", "conversion-focused UI"],
    tech: ["Figma", "Adobe XD", "Prototyping"]
  }
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
            <h2 className="text-4xl lg:text-5xl font-bold mt-4">Precision Engineering for Every Screen</h2>
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
