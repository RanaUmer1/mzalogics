import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const CTA = () => {
  return (
    <section className="bg-background-2 dark:bg-background-5 py-[80px] md:py-[100px]">
      <div className="main-container">
        <div className="text-center max-w-[690px] mx-auto space-y-4">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-3">Get started</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Ready to put your app under real pressure?</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/70 dark:text-accent/70">
              Tell us about your stack, traffic patterns, and performance goals—and we&apos;ll propose a tailored testing
              plan.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
              <LinkButton
                href="/contact-us"
                className="btn btn-primary btn-md w-[90%] sm:w-auto hover:btn-white dark:hover:btn-accent">
                Book a performance testing call
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default CTA;
