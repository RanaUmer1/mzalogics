import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';

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
    title: 'Load & stress testing',
    description: 'Understand how your application behaves under peak traffic and beyond its comfort zone.',
  },
  {
    id: 2,
    icon: 'ns-shape-35',
    title: 'Performance baselines & SLAs',
    description: 'Define and track realistic targets for response times, throughput, and error rates.',
  },
  {
    id: 3,
    icon: 'ns-shape-46',
    title: 'Profiling & bottleneck analysis',
    description: 'Identify slow endpoints, heavy queries, and front-end bottlenecks with actionable findings.',
  },
];

const Services = () => {
  return (
    <section className="lg:py-[120px] md:py-[90px] py-[60px] bg-background-2 dark:bg-background-5">
      <div className="main-container">
        <div className="text-center space-y-3 mb-[60px]">
          <RevealAnimation delay={0.1}>
            <h2 className="md:max-w-[828px] sm:max-w-[600px] max-[375px]:max-w-[270px] mx-auto">
              Performance testing services for modern apps.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="md:max-w-[606px] sm:max-w-[400px] max-w-[390px] mx-auto">
              We focus on realistic scenarios, clear metrics, and prioritized recommendations—so your team knows exactly
              what to fix and why.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-12 lg:gap-9 md:gap-8 gap-y-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={cn('col-span-12 lg:col-span-4', index < 2 ? 'md:col-span-6' : 'md:col-span-12')}>
              <RevealAnimation delay={0.3 + index * 0.1}>
                <div className="bg-white dark:bg-background-6 rounded-[20px] sm:p-8 p-6 sm:space-y-6 space-y-4">
                  <div>
                    <span
                      className={cn(service.icon, 'sm:text-[52px] text-[40px] text-secondary dark:text-accent')}></span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="sm:text-heading-5 text-heading-6">{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
