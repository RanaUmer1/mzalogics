'use client';

import { CheckIcon } from '@/icons';
import { useParallaxEffect } from '@/hooks/useParallaxEffect';
import heroChatInterface from '@public/images/home-page-3/chat-interface.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import HeroDotBg from '../shared/HeroDotBg';
import HeroShapes from '../homepage-03/HeroShapes';

export interface HeroShapesProps {
  className?: string;
}

const Hero = () => {
  const sceneRef = useParallaxEffect();
  const benefits = [
    {
      id: 1,
      text: 'Design custom web apps around your workflows.',
    },
    {
      id: 2,
      text: 'Ship fast, secure, and scalable experiences.',
    },
    {
      id: 3,
      text: 'Partner with a team that builds for the long term.',
    },
  ];

  return (
    <section
      ref={sceneRef}
      className="relative pt-[140px] pb-16 md:pt-[200px] md:pb-20 lg:pb-[100px] 2xl:pt-[250px]"
      id="scene">
      <HeroDotBg className="lg:top-[120px]" />
      <HeroShapes />
      <div className="main-container relative z-30 text-center">
        <RevealAnimation delay={0.1}>
          <span className="badge badge-green-v2 mb-5">Custom Web Applications</span>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <h1 className="mb-4 font-medium">
            Launch tailored <span className="text-primary-500">web apps</span>
            <br className="hidden md:block" />
            that fit your business.
          </h1>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <p className="mx-auto mb-10 max-w-[588px] md:mb-14">
            We design and build bespoke web applications, portals, and internal tools that match your exact processes
            instead of forcing you to adapt to off-the-shelf software.
          </p>
        </RevealAnimation>
        <RevealAnimation delay={0.4}>
          <ul className="list-none mb-10 flex flex-col md:flex-row md:items-center md:justify-center md:flex-wrap lg:flex-nowrap gap-4 md:gap-9 w-fit md:mx-auto">
            {benefits.map((item, idx) => (
              <RevealAnimation key={item.id} delay={0.5 + idx * 0.1}>
                <li className="flex items-center gap-2.5">
                  <span className="size-[19px] rounded-full bg-secondary dark:bg-accent/20">
                    <CheckIcon className="w-[18px] h-[18px] fill-white dark:fill-accent" />
                  </span>
                  <span className="text-tagline-2 dark:text-accent/60">{item.text}</span>
                </li>
              </RevealAnimation>
            ))}
          </ul>
        </RevealAnimation>
        <RevealAnimation delay={0.5} instant>
          <figure className="mt-12 overflow-hidden rounded-xl md:mt-20 md:rounded-2xl lg:mt-[100px] lg:rounded-4xl">
            <Image src={heroChatInterface} alt="Web app interface" className="h-full w-full object-cover" />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

Hero.displayName = 'CustomWebAppsHero';
export default Hero;
