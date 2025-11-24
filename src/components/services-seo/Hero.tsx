import heroBgPatternDark from '@public/images/home-page-11/hero-bg-pattern-dark.svg';
import heroBgPattern from '@public/images/home-page-11/hero-bg-pattern.svg';
import heroImg from '@public/images/home-page-11/hero-img.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Hero = () => {
  return (
    <section className="relative pt-[150px] lg:pt-[220px] pb-[100px] overflow-hidden" aria-label="SEO services hero">
      <RevealAnimation delay={0.2} duration={0.4} useSpring={true} offset={0}>
        <div className="absolute top-[10%] lg:top-[13%] 2xl:-top-5 z-[1] left-1/2 -translate-x-1/2 w-full h-full">
          <Image src={heroBgPattern} alt="Hero background pattern" className="block dark:hidden w-full" priority />
          <Image src={heroBgPatternDark} alt="Hero background pattern" className="hidden dark:block w-full" priority />
        </div>
      </RevealAnimation>

      <div className="main-container relative z-10">
        <div className="flex flex-col items-center justify-center mb-12 md:mb-[72px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">SEO &amp; Organic Growth</span>
          </RevealAnimation>

          <div className="max-w-6xl mt-5 mb-10 md:mb-14 space-y-4 w-full mx-auto text-center">
            <RevealAnimation delay={0.2}>
              <h1>Bring qualified traffic, not just clicks.</h1>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="max-w-[652px] mx-auto">
                We combine technical SEO, content strategy, and on-site UX improvements to help you rank for the terms
                your ideal customers actually search1and convert.
              </p>
            </RevealAnimation>
          </div>

          <ul className="hero-buttons flex flex-col md:flex-row gap-4 max-md:w-full">
            <RevealAnimation delay={0.3} direction="left" offset={50}>
              <li className="max-md:w-[90%] md:w-auto max-md: mx-auto">
                <LinkButton
                  href="/contact-us"
                  className="btn btn-lg md:btn-xl hover:btn-secondary dark:hover:btn-white btn-primary w-full md:w-auto"
                  aria-label="Book an SEO strategy call">
                  Book an SEO strategy call
                </LinkButton>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.5} direction="left" offset={50}>
              <li className="max-md:w-[90%] max-md:mx-auto md:w-auto">
                <LinkButton
                  href="/blog"
                  className="btn btn-lg md:btn-xl hover:btn-primary btn-white dark:btn-white-dark w-full md:w-auto"
                  aria-label="Explore SEO resources">
                  Explore SEO resources
                </LinkButton>
              </li>
            </RevealAnimation>
          </ul>
        </div>

        <div className="flex items-center relative justify-center sm:gap-8 sm:after:absolute sm:after:content-[''] sm:after:z-40 sm:after:w-[641px] sm:after:h-[504px] dark:after:h-[254px] after:bg-gradient-to-b after:from-[rgba(240,242,246,0.00)] dark:after:from-[rgba(24, 29, 38, 0.00)] after:from-[45.78%] dark:after:from-[25.78%] after:to-[#F4F5F8] dark:after:to-[#181D26] after:to-[87.09%] dark:after:to-[97.09%] after:bottom-0 after:left-1/2 after:-translate-x-1/2">
          <RevealAnimation direction="down" offset={20} delay={0.2}>
            <figure className="opacity-0 max-w-[572px] w-full">
              <Image src={heroImg} alt="SEO analytics dashboard" priority />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
