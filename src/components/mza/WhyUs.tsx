'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { Rocket, Shield, Users, Layers } from 'lucide-react';

const reasons = [
  {
    title: "We Build for Scale, Not Just Launch",
    desc: "Most developers build for today. We build for your 10 millionth user from day one.",
    icon: <Layers className="size-6 text-mza-neon" />,
  },
  {
    title: "Clean Architecture Focus",
    desc: "Messy code kills businesses. We use industry-standard patterns to ensure maintainability.",
    icon: <Shield className="size-6 text-blue-400" />,
  },
  {
    title: "Product Owners, Not Just Coders",
    desc: "We look at your ROI, user retention, and business goals before a single line of code.",
    icon: <Users className="size-6 text-purple-400" />,
  },
  {
    title: "Hyper-Fast Performance",
    desc: "We optimize every byte. Our apps load faster, convert better, and feel premium.",
    icon: <Rocket className="size-6 text-pink-400" />,
  }
];

const WhyUs = () => {
  return (
    <section className="py-24 bg-mza-bg-soft relative">
      <div className="main-container">
        <div className="max-w-3xl mb-16">
          <RevealAnimation delay={0.1}>
            <span className="text-mza-neon font-bold uppercase tracking-wider text-sm">Why MZA Logics</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-white">Why the world’s most ambitious founders choose us</h2>
          </RevealAnimation>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <RevealAnimation key={index} delay={0.1 * index} direction="up" offset={40}>
              <div className="p-8 rounded-3xl bg-mza-bg border border-white/5 hover:border-mza-neon/20 transition-all group">
                <div className="size-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-mza-neon/10 transition-colors">
                  {reason.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 italic tracking-tight">{reason.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{reason.desc}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
