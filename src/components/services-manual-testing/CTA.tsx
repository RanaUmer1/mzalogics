import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const CTA = () => {
  return (
    <section className="bg-white dark:bg-black py-[100px]">
      <div className="main-container">
        <div className="text-center space-y-4 mb-6">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Let&apos;s start</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 className="max-w-[558px] mx-auto">Need a partner for manual testing?</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                Share your product, release cadence, and stack—and we&apos;ll propose a manual QA setup that fits your team
                and budget.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.4}>
          <div className="text-center">
            <li className="list-none">
              <LinkButton
                href="/contact-us"
                className="btn btn-md hover:btn-secondary dark:hover:btn-accent btn-primary"
                aria-label="Start a manual testing engagement">
                Book a manual testing call
              </LinkButton>
            </li>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CTA;
