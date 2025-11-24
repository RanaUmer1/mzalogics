'use client';

import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: 'ns-shape-3',
    title: 'Validate ideas faster',
    description: 'Go from concept to clickable prototype quickly so you can test with users and stakeholders.',
  },
  {
    id: 2,
    icon: 'ns-shape-35',
    title: 'De-risk development',
    description: 'Catch UX issues, edge cases, and misalignment early—before engineering invests weeks of work.',
  },
  {
    id: 3,
    icon: 'ns-shape-46',
    title: 'Align your team',
    description: 'Use realistic flows and screens to get product, design, and engineering on the same page.',
  },
];

const Services = () => {
  return (
    <section className="lg:py-[150px] md:py-[100px] py-[50px] bg-background-2 dark:bg-background-5">
      <div className="main-container">
        {/* Header Section */}
        <div className="text-center space-y-3 mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2 className="md:max-w-[828px] sm:max-w-[600px] max-[375px]:max-w-[270px] mx-auto">
              Why prototyping is the smarter way to shape your product.
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <p className="md:max-w-[606px] sm:max-w-[400px] max-w-[390px] mx-auto">
              Use prototypes to explore ideas, validate assumptions, and make confident product decisions before you
              invest in full builds.
            </p>
          </RevealAnimation>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-12 lg:gap-9 md:gap-8 gap-y-6 mb-14">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={cn('col-span-12 lg:col-span-4', index < 2 ? 'md:col-span-6' : 'md:col-span-12')}>
              <RevealAnimation delay={0.3 + index * 0.1}>
                <div className="bg-white dark:bg-background-6 rounded-[20px] sm:p-8 p-6 sm:space-y-6 space-y-4">
                  {/* Service Icon */}
                  <div>
                    <span
                      className={cn(service.icon, 'sm:text-[52px] text-[40px] text-secondary dark:text-accent')}></span>
                  </div>

                  {/* Service Content */}
                  <div className="space-y-2">
                    <h3 className="sm:text-heading-5 text-heading-6">{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          ))}
        </div>
        {/* CTA Button */}
        <div className="flex items-center justify-center">
          <RevealAnimation delay={0.6}>
            <LinkButton
              href="/contact-us"
              className="btn hover:btn-secondary dark:hover:btn-accent btn-primary btn-md">
              <span>Talk about prototyping</span>
            </LinkButton>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Services;
