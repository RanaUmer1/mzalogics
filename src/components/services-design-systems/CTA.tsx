import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const CTA = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px] bg-background-2 dark:bg-background-5 relative overflow-hidden z-10">
      <div className="main-container">
        <div className="text-center max-w-[690px] mx-auto">
          <RevealAnimation>
            <span className="badge badge-blur mb-5 text-ns-yellow">Get started</span>
          </RevealAnimation>
          <RevealAnimation>
            <h2 className="mb-3">Let&apos;s level up your design system.</h2>
          </RevealAnimation>
          <RevealAnimation>
            <p className="mb-6 text-secondary/70 dark:text-accent/70">
              Share how your team designs and ships today, and we&apos;ll map out a design systems engagement that fits your
              product and stack.
            </p>
          </RevealAnimation>
          <RevealAnimation>
            <div className="md:inline-block text-center">
              <LinkButton
                href="/contact-us"
                className="btn btn-primary btn-md w-[85%] md:w-auto hover:btn-white dark:hover:btn-accent">
                Discuss design systems
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default CTA;
