import RevealAnimation from '../animation/RevealAnimation';

const Services = () => {
  return (
    <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mb-10 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2 mb-5">Services</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">
              Automation testing services that
              <br className="hidden md:block" />
              keep your product stable.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto mb-8 lg:max-w-[696px]">
              From smoke and regression suites to API and end-to-end tests, we build automation around the flows that
              matter most to your users and business.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Services.displayName = 'AutomationTestingServices';
export default Services;
