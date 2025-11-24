import marketSalesCardDark from '@public/images/home-page-11/market-sales-card-dark.png';
import marketSalesCard from '@public/images/home-page-11/market-sales-card.png';
import personTabletDark from '@public/images/home-page-11/person-tablet-dark.png';
import personTablet from '@public/images/home-page-11/person-tablet.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const reasons = [
  { id: 1, shape: 'ns-shape-50', text: 'B2B, SaaS, and product-focused writing' },
  { id: 2, shape: 'ns-shape-52', text: 'Process that starts with research, not guesswork' },
  { id: 3, shape: 'ns-shape-41', text: 'Content tied to specific business outcomes' },
  { id: 4, shape: 'ns-shape-47', text: 'Option to plug into your existing content team' },
];

const Reasons = () => {
  return (
    <section className="bg-background-1 dark:bg-background-6 pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px] overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-y-12 lg:gap-x-24">
          <div className="md:flex-1 flex flex-col items-start">
            <div className="space-y-5 mb-6 lg:mb-14">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-green">Why teams work with us for content</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.3}>
                  <h2 className="lg:max-w-[465px]">Content that sounds human and serves a purpose.</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p className="lg:max-w-[508px]">
                    We dig into your product, customers, and positioning so every piece of content has a clear job  and
                    doesn&apos;t just add noise.
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <ul className="md:space-y-2">
              {reasons.map((reason) => (
                <RevealAnimation key={reason.id} delay={0.4 + reason.id * 0.1}>
                  <li className="text-tagline-1 font-medium flex items-center gap-4 py-2 md:px-3 dark:text-accent">
                    <span className={`${reason.shape} text-[36px] text-secondary dark:text-accent`}> </span>
                    {reason.text}
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>
          <div className="md:flex-1 relative flex justify-start w-full lg:w-auto">
            <RevealAnimation delay={0.6} offset={70}>
              <figure className="w-full max-w-[605px] h-auto">
                <Image
                  src={personTablet}
                  alt="Writer reviewing content performance on a tablet"
                  className="w-full h-auto block dark:hidden"
                  width={583}
                  height={707}
                  priority
                />
                <Image
                  src={personTabletDark}
                  alt="Writer reviewing content performance on a tablet"
                  className="hidden dark:block"
                  width={583}
                  height={707}
                  priority
                />
              </figure>
            </RevealAnimation>
            <RevealAnimation direction="right" delay={0.8} offset={70}>
              <figure
                className="absolute -bottom-4 md:bottom-7 lg:-bottom-4 right-2 2xl:-right-10 rounded-[10px] lg:rounded-[20px] overflow-hidden max-w-[200px] sm:max-w-[324px]"
                aria-hidden="true">
                <Image
                  src={marketSalesCard}
                  alt="Content performance dashboard card"
                  width={324}
                  height={340}
                  className="block dark:hidden"
                  loading="lazy"
                />
                <Image
                  src={marketSalesCardDark}
                  alt="Content performance dashboard card"
                  width={324}
                  height={340}
                  className="hidden dark:block shadow-2"
                  loading="lazy"
                />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reasons;
