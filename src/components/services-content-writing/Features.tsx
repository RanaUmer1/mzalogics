import RevealAnimation from '../animation/RevealAnimation';

const Features = () => {
  return (
    <section className="pb-16 pt-16 md:pb-20 md:pt-20 lg:pb-[90px] lg:pt-[90px] xl:pb-[100px] xl:pt-[100px] bg-white dark:bg-background-8">
      <div className="main-container">
        <div className="text-center mb-12 md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green mb-3.5 md:mb-5">Content services</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2>Content writing that supports your entire funnel</h2>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 items-start gap-y-10 sm:gap-x-8">
          <RevealAnimation delay={0.4}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <h3 className="text-heading-6 md:text-heading-5 mb-2">Website &amp; product copy</h3>
              <p>
                Clear, convincing landing pages, feature pages, and in-product copy that explains value and nudges users
                to take action.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <h3 className="text-heading-6 md:text-heading-5 mb-2">Blog posts &amp; articles</h3>
              <p>
                Long-form and short-form content that educates your audience, builds trust, and supports SEO goals.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <h3 className="text-heading-6 md:text-heading-5 mb-2">Case studies &amp; success stories</h3>
              <p>
                Structured narratives that show where your customers started, what you did, and the impact you delivered.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.7}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <h3 className="text-heading-6 md:text-heading-5 mb-2">Email &amp; lifecycle flows</h3>
              <p>
                Onboarding sequences, nurture campaigns, and product updates that keep users engaged over time.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.8}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <h3 className="text-heading-6 md:text-heading-5 mb-2">Content briefs &amp; editing</h3>
              <p>
                Detailed outlines and editorial reviews so writers (yours or ours) can produce on-brand, effective
                content.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.9}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <h3 className="text-heading-6 md:text-heading-5 mb-2">Voice &amp; messaging guides</h3>
              <p>
                Documented tone, style, and messaging pillars that keep all your content feeling like the same brand.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Features;
