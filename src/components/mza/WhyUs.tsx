'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { Sparkles, MessageCircle, Lightbulb, Handshake, Clock } from 'lucide-react';

const reasons = [
  {
    title: "Excellence",
    desc: "Scalable, secure, high-performing software is the baseline — not a premium upgrade. Every engagement is led by senior engineers.",
    icon: <Sparkles className="size-6 text-mza-neon" />,
  },
  {
    title: "Transparency",
    desc: "Clear scope, honest timelines and weekly reviews. You always know where your project stands — and why.",
    icon: <MessageCircle className="size-6 text-blue-400" />,
  },
  {
    title: "Innovation",
    desc: "We stay close to emerging tools — AI, cloud-native patterns, modern frameworks — and recommend them only when they genuinely help.",
    icon: <Lightbulb className="size-6 text-purple-400" />,
  },
  {
    title: "Partnership",
    desc: "We work as an extension of your team. No silos, no middlemen — just direct communication with the people building your product.",
    icon: <Handshake className="size-6 text-pink-400" />,
  },
  {
    title: "Reliability",
    desc: "On-time delivery, consistent post-launch support and SLAs for enterprise clients. We treat your product like our own.",
    icon: <Clock className="size-6 text-emerald-400" />,
  },
];

const WhyUs = () => {
  return (
    <section className="py-24 bg-mza-bg-soft relative">
      <div className="main-container">
        <div className="max-w-3xl mb-16">
          <RevealAnimation delay={0.1}>
            <span className="text-mza-neon font-bold uppercase tracking-wider text-sm">Our Values</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-white">Why clients stay with us — locally and across borders</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-gray-400 text-lg mt-6">
              We work with growing businesses across Pakistan, the Middle East, Europe and North America. Five values sit behind every engagement.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
