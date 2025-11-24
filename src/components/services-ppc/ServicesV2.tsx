import { cn } from '@/utils/cn';
import service1Dark from '@public/images/home-page-35/service-1-dark.png';
import service1 from '@public/images/home-page-35/service-1.png';
import service2Dark from '@public/images/home-page-35/service-2-dark.png';
import service2 from '@public/images/home-page-35/service-2.png';
import service3Dark from '@public/images/home-page-35/service-3-dark.png';
import service3 from '@public/images/home-page-35/service-3.png';
import service4Dark from '@public/images/home-page-35/service-4-dark.png';
import service4 from '@public/images/home-page-35/service-4.png';
import service5Dark from '@public/images/home-page-35/service-5-dark.png';
import service5 from '@public/images/home-page-35/service-5.png';
import Image, { StaticImageData } from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

interface ServiceV2 {
  id: number;
  title: string;
  description: string;
  image: {
    light: StaticImageData;
    dark: StaticImageData;
    alt: string;
  };
  layout: 'large' | 'medium' | 'full';
  hasInnerBackground?: boolean;
}

const servicesV2: ServiceV2[] = [
  {
    id: 1,
    title: 'Search campaigns (Google &amp; Bing)',
    description: 'Capture high-intent traffic with tightly themed ad groups, keywords, and ad copy.',
    image: {
      light: service1,
      dark: service1Dark,
      alt: 'Search campaign performance dashboard',
    },
    layout: 'large',
    hasInnerBackground: true,
  },
  {
    id: 2,
    title: 'Paid social campaigns',
    description: 'Meta, LinkedIn, and other paid social channels with creative and targeting tuned to your ICP.',
    image: {
      light: service2,
      dark: service2Dark,
      alt: 'Paid social ads interface',
    },
    layout: 'medium',
  },
  {
    id: 3,
    title: 'Remarketing & retention',
    description: 'Bring back visitors with dynamic remarketing and nurture sequences tailored to their behavior.',
    image: {
      light: service3,
      dark: service3Dark,
      alt: 'Remarketing campaign overview',
    },
    layout: 'medium',
  },
  {
    id: 4,
    title: 'Experimentation & A/B testing',
    description: 'Systematic tests across ads and landing pages to steadily improve conversion and CAC.',
    image: {
      light: service4,
      dark: service4Dark,
      alt: 'Experiment results dashboard',
    },
    layout: 'large',
  },
  {
    id: 5,
    title: 'Reporting & insights',
    description: 'Clear dashboards and reviews focused on the metrics that matter most to your business.',
    image: {
      light: service5,
      dark: service5Dark,
      alt: 'PPC reporting overview',
    },
    layout: 'full',
  },
];

const ServicesV2 = () => {
  return (
    <section className="lg:py-[150px] md:py-[100px] py-[80px] bg-white dark:bg-black">
      <div className="main-container">
        {/* Header Section */}
        <div className="text-center space-y-3 mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2>PPC services tailored to your funnel</h2>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <p>From net-new acquisition to retention and upsell, we map campaigns to each stage of your journey.</p>
          </RevealAnimation>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-12 xl:gap-8 md:gap-6 gap-y-8">
          {servicesV2.map((service, index) => (
            <div
              key={service.id}
              className={cn(
                'col-span-12',
                service.layout === 'large' && 'xl:col-span-8',
                service.layout === 'medium' && 'xl:col-span-4 md:col-span-6',
                service.layout === 'full' && 'xl:col-span-12',
              )}>
              <RevealAnimation delay={0.3 + index * 0.1}>
                <div className="sm:p-8 p-6 rounded-[20px] bg-background-2 dark:bg-background-5 sm:space-y-6 space-y-4 md:min-h-[408px]">
                  {/* Service Header */}
                  <div className="space-y-1 text-center md:text-left">
                    <h3 className="lg:text-heading-5 sm:text-heading-6 text-tagline-1">{service.title}</h3>
                    <p className={cn(service.layout === 'full' && 'max-w-[311px]')}>{service.description}</p>
                  </div>

                  {/* Service Image */}
                  <div
                    className={cn(
                      service.hasInnerBackground && 'bg-white dark:bg-background-6 p-4 rounded-2xl md:min-h-[226px]',
                    )}>
                    <figure
                      className={cn(
                        'rounded-2xl overflow-hidden',
                        service.hasInnerBackground &&
                          'bg-background-2 dark:bg-background-6 rounded-xl md:p-12 p-8 flex items-center justify-center',
                        service.layout === 'full' && !service.hasInnerBackground && 'h-[234px]',
                        (service.layout === 'large' || service.layout === 'medium') &&
                          !service.hasInnerBackground &&
                          'h-[234px] bg-white dark:bg-background-6',
                      )}>
                      <Image
                        src={service.image.light}
                        alt={service.image.alt}
                        className="w-full h-full object-cover dark:hidden"
                      />
                      <Image
                        src={service.image.dark}
                        alt={service.image.alt}
                        className="w-full h-full object-cover hidden dark:block"
                      />
                    </figure>
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

export default ServicesV2;
