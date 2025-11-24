'use client';

import { CheckIcon } from '@/icons';
import gradient37 from '@public/images/gradient/gradient-37.png';
import heroImageDark from '@public/images/home-page-35/hero-dark.png';
import heroImage from '@public/images/home-page-35/hero.png';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  const benefits = [
    'Catch performance regressions before your users do.',
    'Test realistic load and concurrency scenarios.',
    'Turn results into clear, prioritized recommendations.',
  ];

  return (
    <section className="lg:pt-[180px] pt-[150px] relative overflow-hidden">
      <div className="main-container">
        <div className="relative z-20">
          <div className="text-center space-y-4 mb-10 md:mb-12">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Performance Testing</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="md:max-w-[804px] sm:max-w-[600px] max-w-[400px] mx-auto">
                <span className="hero-text-gradient hero-text-color-1 block">
                  Keep your app fast when it matters most.
                </span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="md:max-w-full sm:max-w-[560px] max-w-[390px] mx-auto">
                We design and run performance tests to uncover bottlenecks, validate SLAs, and give your team a clear
                plan to scale with confidence.
              </p>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.4}>
            <ul className="list-none flex flex-col md:flex-row md:items-center md:justify-center gap-3 md:gap-6 mb-10">
              {benefits.map((text, idx) => (
                <li key={idx} className="flex items-center gap-2.5 justify-center">
                  <span className="size-[19px] rounded-full bg-secondary dark:bg-accent/20 flex items-center justify-center">
                    <CheckIcon className="w-[18px] h-[18px] fill-white dark:fill-accent" />
                  </span>
                  <span className="text-tagline-2 dark:text-accent/60 max-w-[260px] text-left">{text}</span>
                </li>
              ))}
            </ul>
          </RevealAnimation>

          <ul className="hero-buttons flex flex-col md:flex-row gap-4 max-md:w-full justify-center mb-8">
            <RevealAnimation delay={0.45} direction="left" offset={40}>
              <li className="max-md:w-[90%] md:w-auto max-md: mx-auto">
                <Link
                  href="/contact-us"
                  className="btn btn-lg md:btn-xl hover:btn-secondary dark:hover:btn-white btn-primary w-full md:w-auto"
                  aria-label="Book a performance testing call">
                  Book a performance testing call
                </Link>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.55} direction="left" offset={40}>
              <li className="max-md:w-[90%] max-md:mx-auto md:w-auto">
                <Link
                  href="/projects"
                  className="btn btn-lg md:btn-xl hover:btn-primary btn-white dark:btn-white-dark w-full md:w-auto"
                  aria-label="View performance case studies">
                  View performance case studies
                </Link>
              </li>
            </RevealAnimation>
          </ul>
        </div>

        {/* Hero Images */}
        <div className="mt-10 md:mt-14 relative z-30">
          <RevealAnimation delay={0.9} instant>
            <figure
              className={cn(
                'absolute z-[-1] size-[300px] md:size-[600px] lg:size-[800px] overflow-hidden rotate-90 select-none pointer-events-none',
                'max-[376px]:left-[25px] left-[45px] sm:left-[78px] lg:left-[116px] xl:left-[198px]',
                'top-[-81px] sm:top-[-136px] lg:top-[-157px]',
              )}>
              <Image src={gradient37} alt="Background gradient" className="size-full object-cover" priority />
            </figure>
          </RevealAnimation>

          <RevealAnimation delay={0.8}>
            <figure className="max-w-[1251px] mx-auto w-full">
              <Image
                src={heroImage}
                alt="Performance testing dashboard"
                className="size-full object-cover dark:hidden"
                priority
              />
              <Image
                src={heroImageDark}
                alt="Performance testing dashboard dark mode"
                className="size-full object-cover hidden dark:block"
                priority
              />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
