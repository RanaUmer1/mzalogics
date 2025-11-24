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
              CI/CD setup and optimization
              <br className="hidden md:block" />
              for modern engineering teams.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto mb-8 lg:max-w-[696px]">
              From first pipeline design to refactoring existing setups, we help you connect your repos, tests,
              environments, and cloud infrastructure into a repeatable delivery workflow.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Services.displayName = 'CICDServices';
export default Services;
