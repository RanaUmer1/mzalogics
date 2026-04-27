'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { Lock, FileText, HeartPulse, ShoppingBag, Layers, GraduationCap, Wrench } from 'lucide-react';

const highlights = [
  {
    tag: 'Healthcare',
    icon: <HeartPulse className="size-5" />,
    title: 'Patient-facing mobile app + clinician portal',
    summary: 'HIPAA-aligned architecture, offline-first mobile experience and a real-time clinician dashboard.',
  },
  {
    tag: 'SaaS',
    icon: <Layers className="size-5" />,
    title: 'Multi-tenant B2B platform',
    summary: 'Role-based workspaces, usage-based billing and a plugin architecture for partner integrations.',
  },
  {
    tag: 'E-commerce',
    icon: <ShoppingBag className="size-5" />,
    title: 'Headless commerce rebuild',
    summary: 'Migration from a legacy monolith to a Next.js storefront — cutting time-to-first-byte by over 60%.',
  },
  {
    tag: 'Education',
    icon: <GraduationCap className="size-5" />,
    title: 'eLearning platform for K-12',
    summary: 'Live classes, assessments and parent reporting — delivered across web, Android and iOS.',
  },
  {
    tag: 'Utility',
    icon: <Wrench className="size-5" />,
    title: 'Field-service operations app',
    summary: 'Offline-capable Flutter app with route planning, job status sync and customer e-signatures.',
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="py-24 bg-mza-bg overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <RevealAnimation delay={0.1}>
              <span className="text-mza-neon font-bold uppercase tracking-wider text-sm">Selected Work</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-white">A glimpse of what we&apos;ve shipped</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-gray-400 text-lg mt-6">
                Many of our engagements are under NDA, so full case studies are shared privately on request. Here&apos;s a snapshot of the kinds of products our team has delivered.
              </p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.4}>
            <LinkButton
              href="#contact"
              className="px-6 py-3 rounded-xl border border-mza-glass-stroke text-white font-bold hover:bg-mza-glass transition-all inline-flex items-center gap-2"
            >
              <FileText size={18} />
              Request Full Case Studies
            </LinkButton>
          </RevealAnimation>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <RevealAnimation key={index} delay={0.1 * index} direction="up">
              <div className="h-full p-6 rounded-2xl bg-mza-bg-soft border border-white/5 hover:border-mza-neon/30 transition-all group flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mza-neon/10 text-mza-neon text-xs font-bold uppercase tracking-widest">
                    {item.icon}
                    {item.tag}
                  </div>
                  <Lock size={16} className="text-gray-600 group-hover:text-mza-neon transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-snug">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed flex-grow">{item.summary}</p>
                <div className="mt-6 pt-6 border-t border-white/5 text-xs uppercase tracking-widest text-gray-500">
                  Private case study · available on request
                </div>
              </div>
            </RevealAnimation>
          ))}

          <RevealAnimation delay={0.6} direction="up">
            <div className="h-full p-8 rounded-2xl bg-mza-gradient-primary text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4 leading-tight">Want the real thing?</h3>
                <p className="opacity-90 leading-relaxed">
                  We&apos;ll walk you through relevant case studies — architecture, metrics, what went well and what we&apos;d do differently — in a private session.
                </p>
              </div>
              <LinkButton
                href="#contact"
                className="mt-6 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-mza-bg font-bold hover:bg-white/90 transition-all"
              >
                Book a private walkthrough
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
