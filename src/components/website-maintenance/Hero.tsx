import heroChartDark from '@public/images/home-page-4/hero-chart-dark.png';
import heroChart from '@public/images/home-page-4/hero-chart.png';
import heroImg from '@public/images/home-page-4/hero-img.png';
import heroPattern from '@public/images/home-page-4/web-host-hero-pattern.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-[180px] pb-[200px] sm:pt-[100px] 2xl:pt-[264px]">
      <RevealAnimation delay={0.1} direction={'right'} offset={100}>
        <figure className="absolute top-0 right-0 z-[1] size-[882px]">
          <Image src={heroPattern} alt="Website maintenance" className="h-full w-full object-cover" />
        </figure>
      </RevealAnimation>
      <div className="main-container">
        <div className="grid grid-cols-12 items-start">
          <div className="col-span-12 xl:col-span-6">
            <div className="relative z-[1] text-center xl:text-left">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-cyan">Website Care Plans</span>
              </RevealAnimation>
              <div className="mx-auto mt-5 mb-14 max-w-[800px] space-y-4 xl:mx-0 xl:max-w-full">
                <RevealAnimation delay={0.2}>
                  <h1>
                    Reliable <span className="text-primary-500">Website Maintenance</span> & Support
                  </h1>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p>
                    Keep your site secure, fast, and up-to-date with proactive updates, monitoring, backups, and SLA-backed
                    support. Focus on your business—we’ll handle the rest.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.4}>
                <div className="mx-auto flex w-full max-w-[496px] flex-col items-center justify-center gap-3 opacity-0 md:flex-row xl:mx-0 xl:justify-start">
                  <LinkButton
                    href="/pricing-01"
                    className="btn btn-xl btn-primary hover:btn-secondary dark:hover:btn-accent h-[52px] w-[90%] md:w-auto"
                  >
                    Start a Care Plan
                  </LinkButton>
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-xl btn-outline hover:btn-secondary dark:btn-accent dark:hover:btn-white h-[52px] w-[90%] md:w-auto"
                  >
                    Talk to an Expert
                  </LinkButton>
                </div>
              </RevealAnimation>
              <div className="mt-8">
                <p className="text-secondary/60 dark:text-accent/60 mb-4">Includes updates, monitoring, backups, and support</p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <span className="text-lg font-medium">WordPress / CMS</span>
                  <span className="text-2xl font-bold">•</span>
                  <span className="text-lg font-medium">Security & Patching</span>
                  <span className="text-2xl font-bold">•</span>
                  <span className="text-lg font-medium">Performance</span>
                  <span className="text-2xl font-bold">•</span>
                  <span className="text-lg font-medium">Content Updates</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-[1] col-span-12 xl:col-span-6">
            <figure className="relative mx-auto mt-12 max-w-[679px] xl:mx-0 xl:-mt-20">
              <RevealAnimation delay={0.5} direction="up">
                <Image src={heroImg} alt="Website maintenance" className="h-full w-full opacity-0" />
              </RevealAnimation>
              <RevealAnimation delay={0.6} direction="right" offset={50}>
                <div className="max-lp:-bottom-24 max-w-2xl:right-0 max-w-2xl:-bottom-28 absolute mx-auto max-h-[192px] w-full max-w-[370px] rounded-[20px] bg-white p-10 opacity-0 max-xl:right-0 max-xl:-bottom-28 max-xl:left-0 max-lg:right-0 max-lg:left-0 2xl:right-0 2xl:-bottom-28 dark:bg-black">
                  <figure>
                    <Image src={heroChart} alt="Website KPIs" className="block h-full w-full dark:hidden" />
                    <Image src={heroChartDark} alt="Website KPIs" className="hidden h-full w-full dark:block" />
                  </figure>
                </div>
              </RevealAnimation>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
