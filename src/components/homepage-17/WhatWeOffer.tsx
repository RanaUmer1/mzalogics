import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import StackCardItem from '../ui/stack-card/StackCardItem';
import StackCardWrapper from '../ui/stack-card/StackCardWrapper';

// Interface for service data
interface ServiceData {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const servicesData: ServiceData[] = [
  {
    id: 'custom-software',
    icon: 'ns-shape-34',
    title: 'Custom Software Development',
    description: 'Enterprise-grade software solutions tailored to your unique business processes and requirements.',
  },
  {
    id: 'mobile-app',
    icon: 'ns-shape-38',
    title: 'Mobile App Development',
    description: 'Native iOS & Android apps, plus cross-platform solutions with Flutter and React Native.',
  },
  {
    id: 'web-app',
    icon: 'ns-shape-35',
    title: 'Web Applications & Design',
    description: 'Fast, secure, and scalable web applications with stunning UI/UX design.',
  },
  {
    id: 'ui-ux',
    icon: 'ns-shape-17',
    title: 'UI/UX Design',
    description: 'Intuitive interfaces and user experiences that boost engagement and satisfaction.',
  },
  {
    id: 'devops',
    icon: 'ns-shape-25',
    title: 'DevOps & Cloud Infrastructure',
    description: 'CI/CD pipelines, cloud deployment, and infrastructure management for seamless operations.',
  },
  {
    id: 'qa-testing',
    icon: 'ns-shape-25',
    title: 'QA Testing & Automation',
    description: 'Comprehensive testing strategies ensuring quality, performance, and reliability.',
  },
];

const WhatWeOffer = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px]">
      <RevealAnimation delay={0.1}>
        <div className="max-w-[1440px] bg-background-3 dark:bg-background-7 rounded-[30px] py-20 md:py-[100px] mx-auto">
          <div className="main-container">
            <div className="flex flex-col md:flex-row items-start gap-y-24 gap-x-[140px]">
              <div className="w-full lg:flex-1 lg:sticky lg:top-28 lg:max-w-full max-w-[520px] lg:mx-0 mx-auto text-center lg:text-left space-y-7 lg:space-y-14">
                <RevealAnimation delay={0.3}>
                  <span className="badge badge-primary-light mb-5">What we offer</span>
                </RevealAnimation>
                <div className="space-y-2 md:max-w-[595px]">
                  <RevealAnimation delay={0.4}>
                    <h2>Comprehensive Software Development Services</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.5}>
                    <p>Everything you need to transform your ideas into scalable, secure digital solutions.</p>
                  </RevealAnimation>
                </div>
                <RevealAnimation delay={0.6}>
                  <div>
                    <LinkButton
                      href="/our-services-01"
                      className="btn btn-white btn-lg lg:btn-xl w-[90%] md:w-auto mx-auto md:mx-0 dark:btn-transparent hover:btn-secondary dark:hover:btn-accent">
                      Explore our services
                    </LinkButton>
                  </div>
                </RevealAnimation>
              </div>
              <StackCardWrapper
                topOffset="15vh"
                gap="24px"
                initDelay={100}
                className="w-full lg:flex-1 lg:max-w-full md:max-w-[65%] max-w-[90%] lg:mx-0 mx-auto">
                {servicesData.map((service) => (
                  <StackCardItem key={service.id}>
                    <div className="border border-stroke-1/90 dark:border-stroke-5 bg-white dark:bg-background-6 rounded-[20px] space-y-6 p-8 h-full flex flex-col justify-center">
                      <span className={`block ${service.icon} text-heading-2 text-secondary dark:text-accent`} />
                      <div className="space-y-2">
                        <h3 className="text-heading-5">{service.title}</h3>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </StackCardItem>
                ))}
              </StackCardWrapper>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default WhatWeOffer;
