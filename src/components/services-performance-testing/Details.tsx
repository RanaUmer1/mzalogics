import RevealAnimation from '../animation/RevealAnimation';

const Details = () => {
  return (
    <section className="py-[80px] md:py-[100px] bg-white dark:bg-black">
      <div className="main-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="space-y-4">
          <RevealAnimation delay={0.1}>
            <h2>How we approach performance testing</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="text-secondary/70 dark:text-accent/70">
              We start by understanding your architecture, critical journeys, and SLAs. Then we design tests, run them in
              controlled environments, and translate the data into clear, prioritized fixes.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <ul className="list-disc pl-5 space-y-2 text-secondary/80 dark:text-accent/80">
              <li>Work with your team to define realistic load profiles and scenarios.</li>
              <li>Use tools that fit your stack (e.g., k6, JMeter, Gatling, or your cloud provider&apos;s suite).</li>
              <li>Provide concise reports with graphs, hotspots, and next-step recommendations.</li>
            </ul>
          </RevealAnimation>
        </div>
        <div className="space-y-4">
          <RevealAnimation delay={0.2}>
            <h3 className="text-heading-5">What you get from an engagement</h3>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <ul className="list-disc pl-5 space-y-2 text-secondary/80 dark:text-accent/80">
              <li>Documented test plan and scenarios.</li>
              <li>Baseline metrics and comparison across runs.</li>
              <li>List of bottlenecks with impact and suggested fixes.</li>
              <li>Optionally, support integrating tests into CI/CD for ongoing checks.</li>
            </ul>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Details;
