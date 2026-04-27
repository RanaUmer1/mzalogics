'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We sit down with you — remote or in person — to understand your business, users and commercial goals. You leave with clarity on scope, risks and trade-offs."
  },
  {
    num: "02",
    title: "Planning",
    desc: "Architecture decisions, stack selection and sprint roadmap. Written estimates, milestones and a shared backlog so expectations are never fuzzy."
  },
  {
    num: "03",
    title: "Design",
    desc: "User flows, wireframes and a component-based design system. Reviewed with you at every step — no surprises at hand-off."
  },
  {
    num: "04",
    title: "Development",
    desc: "Senior engineers shipping in weekly sprints. You get access to the repo, a staging environment and demos at the end of every sprint."
  },
  {
    num: "05",
    title: "QA & Testing",
    desc: "Dedicated QA runs manual, automated and performance tests. Security reviews for anything touching payments, PII or healthcare data."
  },
  {
    num: "06",
    title: "Launch & Support",
    desc: "Store submissions, cloud deployment, monitoring, and an SLA-backed support plan so your product keeps getting better after day one."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-mza-bg-soft relative overflow-hidden">
      <div className="main-container">
        <div className="text-center mb-20">
          <RevealAnimation delay={0.1}>
            <span className="text-mza-neon font-bold uppercase tracking-wider text-sm">How We Work</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-white">A delivery process you can actually plan around</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
              Six clearly-defined stages, weekly sprints, and a senior lead accountable for your product from day one.
            </p>
          </RevealAnimation>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-mza-neon/50 via-mza-purple/50 to-transparent"></div>
          
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="lg:flex items-center group">
                <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-24 lg:text-right" : "lg:pl-24 lg:order-last lg:text-left"}`}>
                  <RevealAnimation delay={0.1 * index} direction={index % 2 === 0 ? "right" : "left"}>
                    <div className="p-8 rounded-2xl bg-mza-bg border border-white/5 hover:border-mza-neon/20 transition-all">
                      <span className="text-5xl font-black text-white/10 group-hover:text-mza-neon/20 transition-colors mb-4 block leading-none">{step.num}</span>
                      <h3 className="text-2xl font-bold text-white mb-4 italic tracking-tight">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </RevealAnimation>
                </div>
                
                {/* Connector dot */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 size-4 rounded-full bg-mza-bg border-4 border-mza-neon z-10 shadow-[0_0_15px_rgba(0,245,255,0.5)]"></div>
                
                <div className="lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
