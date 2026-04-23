'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { Linkedin, Github, Twitter } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-mza-bg overflow-hidden">
      <div className="main-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <RevealAnimation delay={0.2} direction="right">
            <div className="relative group">
              <div className="absolute inset-0 bg-mza-gradient-primary rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative z-10 p-4 rounded-3xl bg-mza-bg border border-white/10 hover:border-mza-neon/30 transition-all">
                {/* Image Placeholder - I'll assume an image exists or just use a styled div if not provided */}
                <div className="aspect-[4/5] rounded-2xl bg-gray-800 flex items-center justify-center overflow-hidden">
                   <div className="text-center">
                      <p className="text-4xl font-bold text-white/20 uppercase tracking-widest">Umer Javed</p>
                      <p className="text-mza-neon text-sm mt-2">Senior Android Engineer</p>
                   </div>
                </div>
                
                <div className="pt-8 pb-4 px-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white uppercase italic">Umer Javed</h3>
                    <p className="text-gray-400">Founder & Tech Lead</p>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-mza-neon/20 hover:text-mza-neon transition-all"><Linkedin size={20} /></a>
                    <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-mza-neon/20 hover:text-mza-neon transition-all"><Github size={20} /></a>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>

          <div>
            <RevealAnimation delay={0.1}>
              <span className="text-mza-neon font-bold uppercase tracking-wider text-sm italic">The Visionary Behind MZA</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-white mb-8 tracking-tighter">Engineered for <span className="text-mza-neon italic">Perfection</span></h2>
            </RevealAnimation>
            
            <RevealAnimation delay={0.4}>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                With over <span className="text-white font-bold">6+ years of specialized experience</span> in Android engineering and a portfolio of <span className="text-white font-bold text-lg">150+ successfully launched apps</span>, I founded MZA Logics to bridge the gap between "working software" and "high-performance products."
              </p>
            </RevealAnimation>
            
            <RevealAnimation delay={0.5}>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                My focus is on scalable architecture and solving real-world business problems through code. I think like a product owner, not just a coder. Every line we write at MZA is designed to help your business grow.
              </p>
            </RevealAnimation>

            <div className="grid grid-cols-2 gap-8">
              <RevealAnimation delay={0.6} direction="up" offset={20}>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-3xl font-bold text-mza-neon mb-1 tracking-tight">150+</p>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Apps Built</p>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.7} direction="up" offset={20}>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-3xl font-bold text-mza-neon mb-1 tracking-tight">6+ Yrs</p>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Industry Exp.</p>
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
