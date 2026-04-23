'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    company: "FitScale Global",
    text: "MZA Logics didn't just build our app; they improved our entire product strategy. The performance is rock solid, and our user engagement grew by 40% after the launch.",
    result: "40% Engagement Boost"
  },
  {
    name: "Ahmed Al-Fayed",
    company: "SwiftShip Logistics",
    text: "I've worked with many agencies, but Umer's team is on a different level. Their attention to clean architecture meant we could scale without bottlenecks.",
    result: "Scalable Infrastructure"
  },
  {
    name: "James Chen",
    company: "NextGen SaaS",
    text: "The UI/UX design is world-class. It feels like a Silicon Valley product. Highly professional and technically proficient.",
    result: "Premium UI/UX"
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
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-white">Trusted by Industry Leaders</h2>
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
                  <h4 className="text-white font-bold text-lg">{t.name}</h4>
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
