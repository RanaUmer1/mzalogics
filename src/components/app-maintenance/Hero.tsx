'use client';

import { cn } from '@/utils/cn';
import gradient37 from '@public/images/gradient/gradient-37.png';
import heroImageDark from '@public/images/home-page-35/hero-dark.png';
import heroImage from '@public/images/home-page-35/hero.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  return (
    <section className="lg:pt-[180px] pt-[150px] relative overflow-hidden">
      <div className="main-container">
        <div className="relative z-20">
          <div className="text-center space-y-4 mb-14">
            <RevealAnimation delay={0.1}>
              <h1 className="md:max-w-[900px] sm:max-w-[650px] max-w-[420px] mx-auto">
                <span className="hero-text-gradient hero-text-color-1 block">
                  App Maintenance & 24/7 Support.
                </span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="md:max-w-full sm:max-w-[620px] max-w-[410px] mx-auto">
                Proactive monitoring, security patches, bug fixes, performance tuning, backups, and release management—
                delivered with clear SLAs and expert support.
              </p>
            </RevealAnimation>
          </div>

          <ul className="flex justify-center sm:flex-row flex-col items-center gap-4 mb-10">
            <li className="w-full sm:w-auto text-center sm:text-left">
              <RevealAnimation delay={0.3} direction="left" offset={50}>
                <Link href="/contact-us" className={cn('btn btn-xl sm:w-auto w-[90%]', 'btn-primary hover:btn-secondary')}>
                  <span>Talk to an expert</span>
                </Link>
              </RevealAnimation>
            </li>
            <li className="w-full sm:w-auto text-center sm:text-left">
              <RevealAnimation delay={0.4} direction="left" offset={50}>
                <Link href="/pricing-01" className={cn('btn btn-xl sm:w-auto w-[90%]', 'btn-white dark:btn-white-dark hover:btn-primary')}>
                  <span>See maintenance plans</span>
                </Link>
              </RevealAnimation>
            </li>
          </ul>

          <div className="mt-14 relative z-30">
            <RevealAnimation delay={1.2} instant>
              <figure
                className={cn(
                  'absolute z-[-1] size-[300px] md:size-[600px] lg:size-[800px] overflow-hidden rotate-90 select-none pointer-events-none',
                  'max-[376px]:left-[25px] left-[45px] sm:left-[78px] lg:left-[116px] xl:left-[198px]',
                  'top-[-81px] sm:top-[-136px] lg:top-[-157px]',
                )}>
                <Image src={gradient37} alt="Background gradient" className="size-full object-cover" priority />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={1}>
              <figure className="max-w-[1251px] mx-auto w-full">
                <Image src={heroImage} alt="Maintenance dashboard" className="size-full object-cover dark:hidden" priority />
                <Image src={heroImageDark} alt="Maintenance dashboard" className="size-full object-cover hidden dark:block" priority />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
