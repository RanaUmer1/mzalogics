'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-mza-bg text-white">
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-mza-purple opacity-20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-mza-blue opacity-10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="main-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <RevealAnimation delay={0.1} direction="down">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-mza-glass border border-mza-glass-stroke backdrop-blur-md mb-6">
                <span className="flex h-2 w-2 rounded-full bg-mza-neon animate-pulse mr-2"></span>
                <span className="text-xs uppercase tracking-widest font-semibold text-mza-neon">Leading App Engineering Agency</span>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={0.2} direction="down">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Build Apps That <span className="text-mza-neon">Scale</span>, Perform & Convert
              </h1>
            </RevealAnimation>
            
            <RevealAnimation delay={0.3} direction="down">
              <p className="text-xl text-gray-400 mb-8 max-w-xl">
                We help startups and businesses launch high-performance mobile and web apps used by thousands. High-performance, scalable, and user-centric.
              </p>
            </RevealAnimation>
            
            <RevealAnimation delay={0.4} direction="down">
              <div className="flex flex-col sm:flex-row gap-4">
                <LinkButton
                  href="#contact"
                  className="px-8 py-4 rounded-xl bg-mza-gradient-primary font-bold text-white hover:shadow-lg hover:shadow-mza-blue/20 transition-all text-center"
                >
                  Start Your Project
                </LinkButton>
                <LinkButton
                  href="/portfolio"
                  className="px-8 py-4 rounded-xl bg-mza-glass border border-mza-glass-stroke font-bold text-white hover:bg-white/10 transition-all backdrop-blur-md text-center"
                >
                  See Our Work
                </LinkButton>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={0.5} direction="up" offset={20}>
              <div className="mt-12 flex items-center gap-8">
                <div>
                  <p className="text-2xl font-bold text-white">150+</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Projects Delivered</p>
                </div>
                <div className="w-px h-10 bg-gray-800"></div>
                <div>
                  <p className="text-2xl font-bold text-white">10M+</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Users Reached</p>
                </div>
              </div>
            </RevealAnimation>
          </div>
          
          <div className="relative">
            <RevealAnimation delay={0.6} direction="left" offset={100}>
              <div className="relative z-10 rounded-2xl overflow-hidden border border-mza-glass-stroke shadow-2xl backdrop-blur-sm">
                 <Image src="/mza/hero-mockup.png" alt="MZA Logics App Mockup" width={800} height={600} className="w-full h-auto" />
              </div>
            </RevealAnimation>
            
            {/* Floating elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-mza-gradient-accent rounded-full opacity-20 blur-2xl animate-bounce-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
