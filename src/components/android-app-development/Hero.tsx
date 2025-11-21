import { CheckIcon } from '@/icons';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const heroList = [
  {
    id: 1,
    title: 'Native Android Development',
  },
  {
    id: 2,
    title: 'Material Design 3',
  },
  {
    id: 3,
    title: 'Play Store Optimization',
  },
];

const Hero = () => {
  return (
    <section className="relative pt-36 lg:pt-[150px] md:pt-[180px] pb-12 sm:pb-0" aria-label="Android App Development">
      <div className="main-container md:mb-[70px] mb-10">
        <div className="text-center md:space-y-14 space-y-8">
          <div className="space-y-4 relative z-20">
            <RevealAnimation delay={0.1}>
              <h1 className="text-center max-w-[800px] mx-auto">
                Expert <span className="text-primary-500">Android App Development</span> Services
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="lg:max-w-[818px] md:max-w-[618px] sm:max-w-[518px] max-w-[450px] w-full mx-auto">
                Transform your business with custom Android applications built for performance, 
                scalability, and exceptional user experiences across all Android devices.
              </p>
            </RevealAnimation>
            <ul className="flex items-center lg:gap-9 sm:gap-6 gap-4 justify-center flex-wrap">
              {heroList.map((item, index) => (
                <RevealAnimation delay={0.3 + index * 0.1} key={item.id}>
                  <li className="flex items-center gap-1.5">
                    <span className="size-[18px] rounded-full bg-secondary shrink-0 flex items-center justify-center dark:bg-accent">
                      <CheckIcon />
                    </span>
                    <span className="text-secondary/60 text-tagline-2 dark:text-accent/60">{item.title}</span>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <RevealAnimation delay={0.4}>
              <LinkButton
                href="/contact-us"
                className="btn btn-xl btn-secondary hover:btn-white w-[90%] md:w-auto dark:hover:btn-white-dark"
                aria-label="Get a free quote">
                Get a Free Quote
              </LinkButton>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <LinkButton
                href="/portfolio"
                className="btn btn-xl dark:btn-white-dark hover:btn-secondary btn-white dark:hover:btn-accent w-[90%] md:w-auto"
                aria-label="View our work">
                View Our Work
              </LinkButton>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
