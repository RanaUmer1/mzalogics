'use client';

import { cn } from '@/utils/cn';
import avatar1 from '@public/images/avatar/avatar-1.png';
import avatar2 from '@public/images/avatar/avatar-2.png';
import avatar3 from '@public/images/avatar/avatar-3.png';
import gradient37 from '@public/images/gradient/gradient-37.png';
import heroImageDark from '@public/images/home-page-35/hero-dark.png';
import heroImage from '@public/images/home-page-35/hero.png';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

interface CTAButton {
  id: number;
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
  delay: number;
}

interface AvatarUser {
  id: number;
  image: StaticImageData;
  alt: string;
  bgColor: string;
  delay: number;
}

const ctaButtons: CTAButton[] = [
  {
    id: 1,
    text: 'Book a testing call',
    href: '/contact-us',
    variant: 'primary',
    delay: 0.3,
  },
  {
    id: 2,
    text: 'View QA case studies',
    href: '/projects',
    variant: 'secondary',
    delay: 0.4,
  },
];

const avatarUsers: AvatarUser[] = [
  {
    id: 1,
    image: avatar1,
    alt: 'QA engineer avatar 1',
    bgColor: 'bg-ns-yellow',
    delay: 0.5,
  },
  {
    id: 2,
    image: avatar2,
    alt: 'QA engineer avatar 2',
    bgColor: 'bg-ns-red',
    delay: 0.6,
  },
  {
    id: 3,
    image: avatar3,
    alt: 'QA engineer avatar 3',
    bgColor: 'bg-ns-green',
    delay: 0.7,
  },
];

const Hero = () => {
  return (
    <section className="lg:pt-[180px] pt-[150px] relative overflow-hidden">
      <div className="main-container">
        {/* Hero Content */}
        <div className="relative z-20">
          <div className="text-center space-y-4 mb-14">
            <RevealAnimation delay={0.1}>
              <h1 className="md:max-w-[804px] sm:max-w-[600px] max-w-[400px] mx-auto">
                <span className="hero-text-gradient hero-text-color-1 block">
                  Manual testing that keeps releases safe.
                </span>
              </h1>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <p className="md:max-w-full sm:max-w-[560px] max-w-[390px] mx-auto">
                We design and execute manual test plans to catch critical issues, protect user experience, and give your
                team confidence before every deployment.
              </p>
            </RevealAnimation>
          </div>
          {/* CTA Buttons */}
          <ul className="flex justify-center sm:flex-row flex-col items-center gap-4 mb-10">
            {ctaButtons.map((button) => (
              <li key={button.id} className="w-full sm:w-auto text-center sm:text-left">
                <RevealAnimation delay={button.delay} direction="left" offset={50}>
                  <Link
                    href={button.href}
                    className={cn(
                      'btn btn-xl sm:w-auto w-[90%]',
                      button.variant === 'primary'
                        ? 'btn-primary hover:btn-secondary dark:hover:btn-accent'
                        : 'btn-white dark:btn-white-dark hover:btn-primary',
                    )}>
                    <span>{button.text}</span>
                  </Link>
                </RevealAnimation>
              </li>
            ))}
          </ul>

          {/* User Avatars & Stats */}
          <div>
            <div className="flex items-center justify-center sm:gap-4 gap-y-4 sm:flex-row flex-col">
              <div className="flex -space-x-3.5">
                {avatarUsers.map((user) => (
                  <RevealAnimation key={user.id} delay={user.delay} direction="right" offset={50}>
                    <Image
                      src={user.image}
                      alt={user.alt}
                      width={48}
                      height={48}
                      className={cn('inline-block sm:size-12 size-10 rounded-full ring-2 ring-white', user.bgColor)}
                    />
                  </RevealAnimation>
                ))}

                <RevealAnimation delay={0.8} direction="right" offset={50}>
                  <div className="inline-flex items-center justify-center sm:size-12 size-10 rounded-full ring-2 ring-white dark:text-accent text-secondary/80 bg-background-3 dark:bg-background-6 text-tagline-3 font-medium">
                    99+
                  </div>
                </RevealAnimation>
              </div>

              <RevealAnimation delay={0.9} direction="right" offset={50}>
                <div className="text-center sm:text-left">
                  <p className="text-tagline-2 font-medium text-secondary dark:text-accent">Teams we test with</p>
                  <p className="text-tagline-3">From SaaS products to internal tools and platforms.</p>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>

        {/* Hero Images */}
        <div className="mt-14 relative z-30">
          {/* Background Gradient */}
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

          {/* Main Hero Image */}
          <RevealAnimation delay={1}>
            <figure className="max-w-[1251px] mx-auto w-full">
              <Image
                src={heroImage}
                alt="Manual testing dashboard"
                className="size-full object-cover dark:hidden"
                priority
              />
              <Image
                src={heroImageDark}
                alt="Manual testing dashboard dark mode"
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
