import heroChatInterface from '@public/images/home-page-3/chat-interface.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import HeroDotBg from '../shared/HeroDotBg';

const Hero = () => {
  const benefits = [
    'Automated builds, tests, and deployments from a single source of truth.',
    'Clear pipeline stages for dev, staging, and production environments.',
    'Fewer manual steps and fewer surprises on release day.',
  ];

  return (
    <section className="relative pt-[140px] pb-16 md:pt-[200px] md:pb-20 lg:pb-[100px] 2xl:pt-[250px]" id="scene">
      <HeroDotBg className="lg:top-[120px]" />
      <div className="main-container relative z-30 text-center">
        <RevealAnimation delay={0.1}>
          <span className="badge badge-green-v2 mb-5">CI/CD Setup</span>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <h1 className="mb-4 font-medium">
            CI/CD pipelines that make
            <br className="hidden md:block" />
            shipping boring again.
          </h1>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <p className="mx-auto mb-8 max-w-[588px] md:mb-10">
            We design and implement CI/CD pipelines around your stack so every change runs through the same reliable
            pathfrom commit to production.
          </p>
        </RevealAnimation>
        <RevealAnimation delay={0.4}>
          <ul className="list-none mb-10 flex flex-col md:flex-row md:items-center md:justify-center md:flex-wrap lg:flex-nowrap gap-4 md:gap-6 w-fit md:mx-auto">
            {benefits.map((text, idx) => (
              <li
                key={idx}
                className="text-tagline-2 text-secondary/80 dark:text-accent/70 max-w-[260px] text-left mx-auto md:mx-0">
                • {text}
              </li>
            ))}
          </ul>
        </RevealAnimation>
        <RevealAnimation delay={0.5} instant>
          <figure className="mt-8 overflow-hidden rounded-xl md:mt-16 md:rounded-2xl lg:mt-[80px] lg:rounded-4xl">
            <Image src={heroChatInterface} alt="CI/CD pipeline dashboard" className="h-full w-full object-cover" />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

Hero.displayName = 'CICDHero';
export default Hero;
