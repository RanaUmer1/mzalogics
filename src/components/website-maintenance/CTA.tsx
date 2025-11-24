import RevealAnimation from '../animation/RevealAnimation';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[112px] xl:pt-[112px]">
      <div className="main-container">
        <div className="text-center max-w-[720px] space-y-6 mx-auto">
          <RevealAnimation delay={0.1}>
            <h2>Protect your website with a care plan</h2>
          </RevealAnimation>
          <ul className="flex md:flex-row flex-col gap-y-3 md:gap-y-0 items-center justify-center gap-x-4">
            <RevealAnimation delay={0.3} direction="left" offset={50}>
              <li className="group list-none w-[90%] sm:w-auto">
                <Link
                  href="/pricing-01"
                  className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover:bg-primary-500 group-hover:scale-101 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase shadow-1 bg-secondary border-stroke-7 text-accent px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-full md:w-auto mx-auto md:mx-0">
                  <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                    Choose a plan
                  </span>
                </Link>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.4} direction="left" offset={50}>
              <li className="group list-none w-[90%] sm:w-auto">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover:bg-secondary group-hover:scale-101 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase bg-background-4 border-stroke-7 text-secondary group-hover:text-accent px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-full md:w-auto mx-auto md:mx-0">
                  <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                    Talk to us
                  </span>
                </Link>
              </li>
            </RevealAnimation>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CTA;
