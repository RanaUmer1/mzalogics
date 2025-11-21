import heroBgDark from '@public/images/home-page-16/hero-bg-dark.png';
import heroBg from '@public/images/home-page-16/hero-bg.png';
import heroImageDark from '@public/images/home-page-16/hero-image-dark.png';
import heroImage from '@public/images/home-page-16/hero-image.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Hero = () => {
  return (
    <section className="pt-[150px] md:pt-[190px] lg:pt-[230px] overflow-hidden relative">
      <RevealAnimation delay={0.3}>
        <div className="absolute top-20 z-[-1] left-1/2 -translate-x-1/2">
          <Image src={heroBg} alt="Hero background pattern" className="dark:hidden" />
          <Image src={heroBgDark} alt="Hero background pattern" className="hidden dark:inline-block" />
        </div>
      </RevealAnimation>
      <div className="main-container relative z-10">
        <div className="flex flex-col items-center justify-center mb-14">
          <div className="max-w-[1075px] mb-14 space-y-4 w-full mx-auto text-center">
            <RevealAnimation delay={0.2}>
              <h1>
                Transform Your Business with <span className="text-primary-500">iOS App Development</span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[650px] mx-auto">
                Create stunning, high-performance iOS applications that deliver exceptional user experiences and drive business growth with our expert development team.
              </p>
            </RevealAnimation>
          </div>
          <ul className="flex flex-col max-md:items-center text-center max-md:justify-center md:flex-row gap-4 w-[90%] md:w-auto">
            <RevealAnimation delay={0.4}>
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="/contact-us"
                  className="btn btn-xl btn-secondary dark:btn-accent hover:btn-white w-[90%] md:w-auto dark:hover:btn-white-dark"
                  aria-label="Get a free quote">
                  Get a Free Quote
                </LinkButton>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="/portfolio"
                  className="btn btn-xl dark:btn-white-dark hover:btn-secondary btn-white dark:hover:btn-accent w-[90%] md:w-auto"
                  aria-label="View our work">
                  <span>View Our Work</span>
                </LinkButton>
              </li>
            </RevealAnimation>
          </ul>
        </div>
        <RevealAnimation delay={0.6}>
          <figure className="max-w-[1290px] w-full">
            <Image
              src={heroImage}
              alt="hero-image"
              className="dark:hidden size-full object-cover scale-[150%] md:scale-100"
            />
            <Image
              src={heroImageDark}
              alt="hero-image"
              className="hidden dark:block size-full object-cover scale-[150%] md:scale-100"
            />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Hero;
