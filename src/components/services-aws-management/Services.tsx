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
              Managed AWS services that
              <br className="hidden md:block" />
              support your engineering team.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto mb-8 lg:max-w-[696px]">
              From landing zone design and security hardening to monitoring, backups, and cost optimization, we act as
              your AWS partner instead of another black box provider.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Services.displayName = 'AWSManagementServices';
export default Services;
