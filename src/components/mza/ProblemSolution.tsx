'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { AlertCircle, Zap, ShieldCheck, TrendingUp } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    {
      icon: <AlertCircle className="text-red-400" />,
      text: "Developers who disappear mid-project.",
    },
    {
      icon: <Zap className="text-yellow-400" />,
      text: "Poor app performance and laggy UI.",
    },
    {
      icon: <ShieldCheck className="text-orange-400" />,
      text: "Bad UI/UX that kills conversions.",
    },
    {
      icon: <TrendingUp className="text-blue-400" />,
      text: "Projects that won't scale with users.",
    }
  ];

  return (
    <section className="py-24 bg-mza-bg overflow-hidden">
      <div className="main-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <RevealAnimation delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                Stop Settling for <span className="text-gray-500 line-through">Average</span> Software
              </h2>
            </RevealAnimation>
            
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <RevealAnimation key={index} delay={0.2 + index * 0.1} direction="right">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="p-2 bg-white/5 rounded-lg">{problem.icon}</div>
                    <p className="text-gray-300 font-medium">{problem.text}</p>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
          
          <div className="relative p-8 rounded-3xl bg-mza-gradient-primary">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <RevealAnimation delay={0.5}>
              <div className="relative z-10 text-white">
                <h3 className="text-3xl font-bold mb-6">The MZA Difference</h3>
                <p className="text-xl opacity-90 mb-8 leading-relaxed">
                  We don’t just build apps — we build scalable products that grow businesses. MZA Logics focuses on speed, stability, and conversion-focused design.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Battle-tested clean architecture",
                    "Senior-only engineering team",
                    "Conversion-optimized UI/UX",
                    "Direct communication (No middlemen)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="size-6 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="size-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealAnimation>
            
            {/* Decorative circles */}
            <div className="absolute -bottom-12 -right-12 size-48 bg-mza-neon/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
