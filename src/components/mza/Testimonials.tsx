'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { Star } from 'lucide-react';

// Anonymized references — shared by clients under NDA. Real names & logos
// are available on request during the sales process.
const testimonials = [
  {
    role: "Head of Product",
    company: "Healthcare SaaS · Europe",
    text: "They behaved like an in-house team from day one. Weekly demos, clear trade-offs, and a real product mindset — not just ticket-takers.",
    result: "Dedicated Product Team"
  },
  {
    role: "Founder & CEO",
    company: "D2C E-commerce · Pakistan",
    text: "We rebuilt our storefront with MZA-Logics and finally stopped fire-fighting bugs every weekend. The codebase is something we can actually hand to the next developer.",
    result: "Stable, Maintainable Build"
  },
  {
    role: "VP of Engineering",
    company: "B2B SaaS · North America",
    text: "Senior engineers, honest timelines, and a PM who held the line on scope. Rare combination — we've already moved a second project to them.",
    result: "Repeat Engagement"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-mza-bg overflow-hidden">
      <div className="main-container">
        <div className="text-center mb-16">
          <RevealAnimation delay={0.1}>
            <span className="text-mza-neon font-bold uppercase tracking-wider text-sm">Testimonials</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-white">What our clients say</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              References are anonymized out of respect for client NDAs. Real names, logos and live references are shared during the sales process.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <RevealAnimation key={index} delay={0.1 * index} direction="up">
              <div className="p-8 rounded-3xl bg-mza-bg-soft border border-white/5 relative flex flex-col h-full">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-mza-neon text-mza-neon" />
                  ))}
                </div>
                
                <p className="text-gray-300 text-lg mb-8 italic flex-grow">"{t.text}"</p>
                
                <div className="mt-auto">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 inline-block mb-4">
                     <span className="text-mza-neon font-bold text-xs uppercase tracking-widest">{t.result}</span>
                  </div>
                  <h4 className="text-white font-bold text-lg">{t.role}</h4>
                  <p className="text-gray-500 text-sm">{t.company}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
