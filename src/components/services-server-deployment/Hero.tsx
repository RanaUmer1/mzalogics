'use client';

import { CheckIcon } from '@/icons';
import heroBottomImage from '@public/images/home-page-18/hero-bottom-image.png';
import heroImageDark from '@public/images/home-page-18/hero-image-dark.png';
import heroImage from '@public/images/home-page-18/hero-image.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const benefits = [
  'Repeatable deployment process for every environment.',
  'Rollbacks and safety nets when something goes wrong.',
  'Less time deploying, more time building features.',
];

const Hero = () => {
  return (
    <section className="pt-[320px] md:pt-[200px] lg:pt-[200px] xl:pt-[260px] pb-16 md:pb-20 lg:pb-[120px] xl:pb-[150px] bg-[url('/images/home-page-18/hero-bg.png')] bg-no-repeat bg-top relative z-0">
      <div className="main-container flex flex-col items-center space-y-[124px] relative z-10 mb-[100px] lg:mb-[150px] xl:mb-[220px]">
        <div className="text-left md:text-center max-md:pt-[150px] max-lg:pt-[200px]">
          <RevealAnimation delay={0.2}>
            <h1 className="mb-4">
              Server deployments that
              <br className="hidden md:block" />
              are boringly reliable.
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-w-[650px] mx-auto mb-6">
              We help you design and automate deployment processes so changes go out consistentlywith fewer manual
              steps and fewer late-night fire drills.
            </p>
          </RevealAnimation>
          <ul className="list-none mb-8 flex flex-col md:flex-row md:items-center md:justify-center md:flex-wrap lg:flex-nowrap gap-4 md:gap-6 w-fit md:mx-auto">
            {benefits.map((text, idx) => (
              <RevealAnimation key={text} delay={0.35 + idx * 0.1}>
                <li className="flex items-center gap-2.5">
                  <span className="size-[19px] rounded-full bg-secondary dark:bg-accent/20 flex items-center justify-center">
                    <CheckIcon className="w-[18px] h-[18px] fill-white dark:fill-accent" />
                  </span>
                  <span className="text-tagline-2 dark:text-accent/60">{text}</span>
                </li>
              </RevealAnimation>
            ))}
          </ul>
          <RevealAnimation delay={0.7}>
            <div className="block md:inline-block">
              <LinkButton
                href="/contact-us"
                className="btn btn-secondary hover:btn-primary dark:btn-accent btn-md md:btn-xl w-[90%] md:w-auto mx-auto">
                Book a deployment review
              </LinkButton>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.8} instant duration={0.9}>
            <figure className="max-w-[408px] mx-auto mt-20 md:mt-[124px] rounded-[20px] flex justify-center items-center overflow-hidden">
              <Image src={heroImage} alt="Server deployment dashboard" className="inline-block dark:hidden w-full h-full object-cover" />
              <Image src={heroImageDark} alt="Server deployment dashboard" className="hidden dark:inline-block w-full h-full object-cover" />
            </figure>
          </RevealAnimation>
        </div>
      </div>
      {/* Hero Bottom item */}
      <div className="main-container">
        <div className="relative z-0">
          <div className="w-full h-full bg-white dark:bg-background-8 absolute -z-10 overflow-hidden rounded-[20px]" />
          <div className="flex flex-col lg:flex-row">
            <div className="lg:flex-1/2 py-16 max-lg:px-5 lg:pl-14">
              <div className="mb-9">
                <RevealAnimation delay={0.2}>
                  <h2 className="mb-3">From manual deploys to repeatable releases.</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="max-w-[530px]">
                    We work with your team to document the current process, design a better one, and then automate as
                    much as makes sensewhether you&apos;re on bare metal, VMs, or containers.
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <div className="lg:flex-1/2 lg:pe-[42px]">
              <RevealAnimation delay={0.5} direction="right">
                <div className="relative h-full max-lg:max-w-[525px] max-lg:mx-auto">
                  <figure className="lg:absolute lg:right-0 lg:bottom-0 max-w-[525px] max-lg:mx-auto">
                    <Image src={heroBottomImage} alt="Deployment process illustration" className="w-full h-full" />
                  </figure>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
