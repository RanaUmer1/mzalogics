import { servicesContent } from '@/data/mzaServices';
import Navbar from '@/components/mza/Navbar';
import Footer from '@/components/mza/Footer';
import FinalCTA from '@/components/mza/FinalCTA';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesContent[slug as keyof typeof servicesContent];
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | MZA Logics`,
    description: service.intro,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesContent[slug as keyof typeof servicesContent];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="bg-mza-bg text-white pt-32">
        <section className="py-20 border-b border-white/5">
          <div className="main-container">
             <RevealAnimation delay={0.1}>
                <span className="text-mza-neon font-bold uppercase tracking-widest text-sm italic">Detailed Service</span>
             </RevealAnimation>
             <RevealAnimation delay={0.2}>
                <h1 className="text-5xl lg:text-7xl font-bold mt-6 mb-8 text-white">{service.title}</h1>
             </RevealAnimation>
             <RevealAnimation delay={0.3}>
                <p className="text-2xl text-gray-400 max-w-4xl leading-relaxed">{service.hero}</p>
             </RevealAnimation>
          </div>
        </section>

        <section className="py-24">
          <div className="main-container">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-16">
                 <div>
                    <h2 className="text-3xl font-bold mb-6 text-white italic">Overview</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">{service.intro}</p>
                 </div>

                 {service.sections.map((section, index) => (
                    <div key={index}>
                       <h3 className="text-2xl font-bold mb-4 text-mza-neon italic">{section.title}</h3>
                       <p className="text-gray-400 text-lg leading-relaxed">{section.content}</p>
                    </div>
                 ))}
                 
                 <div className="p-8 rounded-3xl bg-mza-bg-soft border border-white/10">
                    <h3 className="text-2xl font-bold mb-6">Why Choose Our {service.title} Solution?</h3>
                    <ul className="space-y-4">
                       {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-4 text-lg">
                             <div className="size-6 rounded-full bg-mza-neon/20 flex items-center justify-center text-mza-neon">
                                <svg size={16} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                             </div>
                             {benefit}
                          </li>
                       ))}
                    </ul>
                 </div>
              </div>

              <div className="space-y-8">
                 <div className="p-8 rounded-3xl bg-mza-bg-soft border border-white/10 sticky top-32">
                    <h4 className="text-xl font-bold mb-6 text-white uppercase tracking-tight italic">Tech Stack Used</h4>
                    <div className="flex flex-wrap gap-3">
                       {service.tech.map((t, i) => (
                          <span key={i} className="px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-sm text-gray-300">{t}</span>
                       ))}
                    </div>
                    
                    <button className="w-full mt-10 py-4 rounded-xl bg-mza-gradient-primary font-bold hover:scale-105 transition-all">
                       Let's Discuss Project
                    </button>
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
