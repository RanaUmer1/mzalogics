'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { Linkedin, Quote, HeartPulse, ShoppingBag, Layers, GraduationCap, Wrench } from 'lucide-react';

const industries = [
  { icon: <HeartPulse size={18} />, label: 'Healthcare & Life Sciences' },
  { icon: <ShoppingBag size={18} />, label: 'E-commerce & Retail' },
  { icon: <Layers size={18} />, label: 'SaaS & B2B Platforms' },
  { icon: <GraduationCap size={18} />, label: 'Education & eLearning' },
  { icon: <Wrench size={18} />, label: 'Utility Apps' },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-mza-bg overflow-hidden">
      <div className="main-container">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Founder card */}
          <RevealAnimation delay={0.2} direction="right">
            <div className="relative group lg:col-span-2 lg:sticky lg:top-28">
              <div className="absolute inset-0 bg-mza-gradient-primary rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative z-10 p-4 rounded-3xl bg-mza-bg border border-white/10 hover:border-mza-neon/30 transition-all">
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-mza-bg-soft via-mza-bg to-mza-bg-soft flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,245,255,0.12),transparent_60%)]" />
                  <div className="relative text-center px-6">
                    <div className="mx-auto mb-6 size-28 rounded-full bg-mza-gradient-primary flex items-center justify-center text-4xl font-bold text-white shadow-xl shadow-mza-blue/30">
                      UJ
                    </div>
                    <p className="text-xs uppercase tracking-[0.3em] text-mza-neon mb-2">Chief Executive Officer</p>
                    <p className="text-2xl font-bold text-white">Umer Javed</p>
                    <p className="text-sm text-gray-400 mt-2">Founder · MZA-Logics</p>
                  </div>
                </div>

                <div className="pt-6 pb-2 px-2">
                  <blockquote className="relative pl-8 text-gray-300 italic leading-relaxed">
                    <Quote size={20} className="absolute left-0 top-0 text-mza-neon" />
                    Our mission is simple: build software that creates real value. We partner closely with clients to transform ideas into reliable, future-ready digital products.
                  </blockquote>
                  <div className="mt-6 flex justify-between items-center">
                    <p className="text-xs text-gray-500 uppercase tracking-widest">— Umer Javed, CEO</p>
                    <a href="#" aria-label="LinkedIn" className="p-2 bg-white/5 rounded-lg hover:bg-mza-neon/20 hover:text-mza-neon transition-all">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>

          {/* Narrative */}
          <div className="lg:col-span-3">
            <RevealAnimation delay={0.1}>
              <span className="text-mza-neon font-bold uppercase tracking-wider text-sm">Who We Are</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-white mb-8 tracking-tight">
                A team of senior engineers, <span className="text-mza-neon">building software with intent.</span>
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Our foundation</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  MZA-Logics was founded in 2021 by a group of senior engineers who shared a common belief — every business deserves software designed specifically for how it operates. Our founders came from enterprise systems, early-stage startups and product-led environments, and built MZA-Logics as the team they always wished they could hire.
                </p>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.5}>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Our philosophy</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Powerful software is not just about writing code — it’s about understanding people, processes and business goals. Before we write a single line, we invest in understanding your goals, your users and the realities of your market. That&apos;s how we make sure what we ship is not only powerful, but genuinely useful.
                </p>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.6}>
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-white mb-4">Industries we serve</h3>
                <div className="flex flex-wrap gap-3">
                  {industries.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-mza-neon/30 hover:text-white transition-all"
                    >
                      <span className="text-mza-neon">{item.icon}</span>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </RevealAnimation>

            <div className="grid grid-cols-3 gap-4">
              <RevealAnimation delay={0.7} direction="up" offset={20}>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-3xl font-bold text-mza-neon mb-1 tracking-tight">25+</p>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Team members</p>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.8} direction="up" offset={20}>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-3xl font-bold text-mza-neon mb-1 tracking-tight">50+</p>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Products shipped</p>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.9} direction="up" offset={20}>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-3xl font-bold text-mza-neon mb-1 tracking-tight">2021</p>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Founded</p>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
