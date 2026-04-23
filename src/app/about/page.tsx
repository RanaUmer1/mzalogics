import Navbar from '@/components/mza/Navbar';
import Footer from '@/components/mza/Footer';
import FinalCTA from '@/components/mza/FinalCTA';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | MZA Logics',
  description: 'Learn about MZA Logics, a mobile-first product engineering company led by Umer Javed. 6+ years of experience and 150+ apps built.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-mza-bg text-white pt-32">
        <section className="py-24">
          <div className="main-container">
            <div className="max-w-4xl">
              <RevealAnimation delay={0.1}>
                <span className="text-mza-neon font-bold uppercase tracking-widest text-sm italic">Our Story</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="text-5xl lg:text-8xl font-bold mt-6 mb-12 italic tracking-tighter">Engineering <span className="text-mza-neon">Scalability</span> From the First Line of Code.</h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-2xl text-gray-400 leading-relaxed mb-12">
                  At MZA Logics, we don't just write code. We architect solutions that empower businesses to grow without technical limits. Founded on the principle of "Performance First," we've spent the last 6 years perfecting the art of mobile and web engineering.
                </p>
              </RevealAnimation>
            </div>
          </div>
        </section>

        <section className="py-24 bg-mza-bg-soft">
           <div className="main-container">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                 <div className="space-y-8">
                    <h2 className="text-4xl font-bold italic">The MZA Philosophy</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                       MZA Logics was born out of a frustration with the status quo. We saw too many startups failing not because their ideas were bad, but because their software couldn't scale. Developers were delivering "working" code that broke under the weight of real users.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                       We decided to do things differently. Our approach is rooted in **Clean Architecture**. This isn't just a buzzword for us; it's the foundation of everything we build. It means our apps are easier to test, easier to maintain, and—most importantly—ready to scale from 1,000 to 10 million users.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-8 pt-8">
                       <div>
                          <p className="text-3xl font-bold text-mza-neon">150+</p>
                          <p className="text-sm uppercase font-bold text-gray-500">Products Shipped</p>
                       </div>
                       <div>
                          <p className="text-3xl font-bold text-mza-neon">10M+</p>
                          <p className="text-sm uppercase font-bold text-gray-500">Users Reached</p>
                       </div>
                    </div>
                 </div>
                 
                 <div className="relative">
                    <div className="aspect-square rounded-[3rem] bg-mza-gradient-primary rotate-3 absolute inset-0 opacity-20 blur-xl"></div>
                    <div className="relative z-10 aspect-square rounded-[3rem] bg-gray-900 border border-white/10 flex items-center justify-center p-12 overflow-hidden">
                       <div className="text-center">
                          <p className="text-6xl font-black text-white/5 uppercase tracking-widest leading-none">CULTURE</p>
                          <p className="text-6xl font-black text-white/10 uppercase tracking-widest leading-none">QUALITY</p>
                          <p className="text-6xl font-black text-white/5 uppercase tracking-widest leading-none">SCALE</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        <section className="py-24">
           <div className="main-container">
              <div className="max-w-3xl mx-auto text-center">
                 <h2 className="text-4xl font-bold mb-12 italic">Meet the Architect</h2>
                 <div className="p-12 rounded-[3rem] bg-mza-bg-soft border border-white/10">
                    <div className="size-32 bg-mza-gradient-primary rounded-full mx-auto mb-8 flex items-center justify-center">
                       <span className="text-4xl font-black text-white">UJ</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Umer Javed</h3>
                    <p className="text-mza-neon font-bold uppercase tracking-widest text-sm mb-6">Founder & Senior Android Engineer</p>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                       With 6+ years of specialized experience in mobile engineering, Umer has led teams to build some of the most successful apps in the market. His deep understanding of Android SDK, Swift, and scalable backend architectures is what drives the technical excellence at MZA Logics. 
                    </p>
                    <div className="flex justify-center gap-6">
                       <a href="#" className="font-bold border-b-2 border-mza-neon pb-1 hover:text-mza-neon transition-colors">LinkedIn</a>
                       <a href="#" className="font-bold border-b-2 border-mza-neon pb-1 hover:text-mza-neon transition-colors">Twitter</a>
                       <a href="#" className="font-bold border-b-2 border-mza-neon pb-1 hover:text-mza-neon transition-colors">GitHub</a>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
