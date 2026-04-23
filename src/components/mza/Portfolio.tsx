'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Image from 'next/image';

const projects = [
  {
    title: "WalkFit App",
    category: "Health & Fitness",
    image: "/mza/mobile-mockup.png",
    problem: "Users struggled to maintain engagement with generic fitness tracking apps.",
    solution: "Designed a gamified mobile experience with real-time tracking and social integration.",
    result: "40% Increase in weekly average engagement.",
    tech: ["Flutter", "Firebase", "HealthKit"]
  }
];

const Portfolio = () => {
  return (
    <section id="work" className="py-24 bg-mza-bg overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <RevealAnimation delay={0.1}>
              <span className="text-mza-neon font-bold uppercase tracking-wider text-sm">Our Portfolio</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-white">Proven Results for Global Startups</h2>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.3}>
            <button className="px-6 py-3 rounded-xl border border-mza-glass-stroke text-white font-bold hover:bg-mza-glass transition-all">
              View All 150+ Projects
            </button>
          </RevealAnimation>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
              <RevealAnimation delay={0.2} direction={index % 2 === 0 ? "right" : "left"}>
                <div className="relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={800} 
                    height={1000} 
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mza-bg to-transparent opacity-60"></div>
                </div>
              </RevealAnimation>
              
              <div className={index % 2 === 0 ? "" : "lg:order-first"}>
                <RevealAnimation delay={0.3}>
                  <div className="inline-block px-3 py-1 rounded-md bg-mza-neon/10 text-mza-neon text-xs font-bold uppercase mb-4 tracking-widest">
                    Featured Case Study
                  </div>
                </RevealAnimation>
                
                <RevealAnimation delay={0.4}>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 uppercase tracking-tight">{project.title}</h3>
                </RevealAnimation>
                
                <div className="space-y-8">
                  <RevealAnimation delay={0.5} direction="down">
                    <div>
                      <h4 className="text-mza-neon font-bold text-sm uppercase mb-2">The Problem</h4>
                      <p className="text-gray-400 text-lg">{project.problem}</p>
                    </div>
                  </RevealAnimation>
                  
                  <RevealAnimation delay={0.6} direction="down">
                    <div>
                      <h4 className="text-mza-neon font-bold text-sm uppercase mb-2">The Solution</h4>
                      <p className="text-gray-400 text-lg">{project.solution}</p>
                    </div>
                  </RevealAnimation>

                  <RevealAnimation delay={0.7} direction="down">
                    <div className="p-6 rounded-2xl bg-mza-gradient-accent/10 border border-mza-neon/20">
                      <h4 className="text-white font-bold text-sm uppercase mb-2">The Result</h4>
                      <p className="text-2xl font-bold text-mza-neon italic">"{project.result}"</p>
                    </div>
                  </RevealAnimation>
                </div>

                <div className="flex flex-wrap gap-3 mt-10">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
