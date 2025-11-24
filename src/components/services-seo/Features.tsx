import RevealAnimation from '../animation/RevealAnimation';

const Features = () => {
  return (
    <section className="pb-16 pt-16 md:pb-20 md:pt-20 lg:pb-[90px] lg:pt-[90px] xl:pb-[100px] xl:pt-[100px] bg-white dark:bg-background-8">
      <div className="main-container">
        <div className="text-center mb-12 md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green mb-3.5 md:mb-5">Core SEO services</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2>Everything you need to grow organic traffic</h2>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 items-start gap-y-10 sm:gap-x-8">
          <RevealAnimation delay={0.4}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <h3 className="text-heading-6 md:text-heading-5 mb-2">Technical SEO audits</h3>
              <p>
                Crawlability, indexation, site speed, and structured data reviews that surface the issues holding your
                rankings back.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <h3 className="text-heading-6 md:text-heading-5 mb-2">Keyword &amp; content strategy</h3>
              <p>
                Research and mapping for topics, keywords, and clusters that match search intent and your business
                funnel.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <h3 className="text-heading-6 md:text-heading-5 mb-2">On-page optimization</h3>
              <p>
                Page-level recommendations for titles, headings, internal linking, and content improvements that move the
                needle.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.7}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <h3 className="text-heading-6 md:text-heading-5 mb-2">Content briefs &amp; editing</h3>
              <p>
                Detailed briefs and SEO reviews so writers can produce content that ranks and converts consistently.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.8}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <h3 className="text-heading-6 md:text-heading-5 mb-2">Analytics &amp; reporting setup</h3>
              <p>
                Measurement plans, dashboards, and monthly reporting focused on the metrics that matter to your team.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.9}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <h3 className="text-heading-6 md:text-heading-5 mb-2">Ongoing SEO support</h3>
              <p>
                Iterative improvements, experiments, and consulting as your site, content, and competition evolve.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Features;
