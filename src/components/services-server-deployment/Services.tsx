import RevealAnimation from '../animation/RevealAnimation';

const Services = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px] bg-[url('/images/home-page-18/hero-bg.png')] bg-no-repeat bg-cover bg-top">
      <div className="main-container">
        <div className="text-center space-y-5 max-w-[750px] mx-auto mb-14">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Services</span>
          </RevealAnimation>
          <div>
            <RevealAnimation delay={0.3}>
              <h2 className="mb-3">Server deployment services that scale with your product.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="max-w-[600px] mx-auto">
                Whether you&apos;re deploying monoliths, microservices, or something in between, we help you design a
                deployment flow that&apos;s safe, observable, and easy to operate.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 space-y-8 md:space-y-0 md:gap-8 mb-10 lg:mb-18 max-w-[1010px] mx-auto">
          <RevealAnimation delay={0.5}>
            <div className="col-span-12 md:col-span-6 lg:col-span-7 p-8 rounded-[20px] bg-white dark:bg-background-6 space-y-6 sm:min-h-[288px]">
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6">Environment &amp; release design.</h5>
                <p className="max-w-[430px]">
                  Define dev, staging, and production environments, plus branching and release strategies that fit your
                  team size and risk tolerance.
                </p>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="col-span-12 md:col-span-6 lg:col-span-5 p-8 rounded-[20px] bg-white dark:bg-background-6 space-y-6 sm:min-h-[288px]">
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6">Automation &amp; tooling.</h5>
                <p>
                  Connect your CI/CD, configuration management, and infrastructure tools so deployments are predictable
                  and auditable.
                </p>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.7}>
            <div className="col-span-12 md:col-span-6 lg:col-span-5 p-8 rounded-[20px] bg-white dark:bg-background-6 space-y-6 sm:min-h-[288px]">
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6">Monitoring &amp; rollback paths.</h5>
                <p className="max-w-[430px]">
                  Set up health checks, alerts, and rollback options so you can react quickly when something goes wrong.
                </p>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.8}>
            <div className="col-span-12 md:col-span-6 lg:col-span-7 p-8 rounded-[20px] bg-white dark:bg-background-6 space-y-6 sm:min-h-[288px]">
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6">Runbooks &amp; enablement.</h5>
                <p className="max-w-[430px]">
                  Documented runbooks and training so your team knows how to deploy, monitor, and recover without relying
                  on a single person.
                </p>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Services;
