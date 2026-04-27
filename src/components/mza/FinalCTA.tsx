'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { MessageSquare, Mail, PhoneCall } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section id="contact" className="py-24 bg-mza-bg relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mza-gradient-primary opacity-10 blur-[150px] rounded-full"></div>
      
      <div className="main-container relative z-10">
        <div className="p-12 md:p-20 rounded-[3rem] bg-mza-bg-soft border border-white/10 text-center">
          <RevealAnimation delay={0.1}>
            <span className="text-mza-neon font-bold uppercase tracking-widest text-sm">Have an Idea?</span>
          </RevealAnimation>
          
          <RevealAnimation delay={0.2}>
            <h2 className="text-5xl lg:text-7xl font-bold mt-6 mb-10 text-white tracking-tighter">
              Let&apos;s talk about <span className="text-mza-neon italic">what you&apos;re building.</span>
            </h2>
          </RevealAnimation>
          
          <RevealAnimation delay={0.3}>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12">
              Tell us about your product — even if it&apos;s still an idea on a napkin. You&apos;ll get a thoughtful response from a senior engineer, usually within one business day.
            </p>
          </RevealAnimation>

          <div className="flex flex-wrap justify-center gap-6">
            <RevealAnimation delay={0.4} direction="up" offset={20}>
              <LinkButton
                href="https://wa.me/923003600188"
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#25D366] text-white font-bold hover:scale-105 transition-all shadow-xl shadow-[#25D366]/20"
              >
                <div className="bg-white/20 p-2 rounded-lg">
                  <MessageSquare size={18} />
                </div>
                WhatsApp · 0300 3600188
              </LinkButton>
            </RevealAnimation>

            <RevealAnimation delay={0.5} direction="up" offset={20}>
              <LinkButton
                href="mailto:Mzalogics@gmail.com"
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-mza-gradient-primary text-white font-bold hover:scale-105 transition-all shadow-xl shadow-mza-blue/20"
              >
                <div className="bg-white/20 p-2 rounded-lg">
                   <Mail size={18} />
                </div>
                Mzalogics@gmail.com
              </LinkButton>
            </RevealAnimation>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4 text-gray-400">
             <a href="tel:+923003600188" className="flex items-center gap-2 hover:text-mza-neon transition-colors">
                <PhoneCall size={16} />
                <span>0300 3600188</span>
             </a>
             <div className="flex items-center gap-2">
                <span className="text-mza-neon">●</span>
                <span>Free 30-minute discovery call — no obligation</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="text-mza-neon">●</span>
                <span>144 G Block, DHA Phase 1, Lahore, Pakistan</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
