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
    title: 'User flows & low-fidelity prototypes',
    description: 'Map journeys and screens quickly so you can see the product end-to-end before polishing visuals.',
    image: {
      light: service1,
      dark: service1Dark,
      alt: 'Decentralized asset management dashboard',
    },
    layout: 'large',
    hasInnerBackground: true,
  },
  {
    id: 2,
    title: 'High-fidelity UI prototypes',
    description: 'Interactive Figma prototypes that look and feel close to the final product.',
    image: {
      light: service2,
      dark: service2Dark,
      alt: 'Smart wallet interface',
    },
    layout: 'medium',
  },
  {
    id: 3,
    title: 'Multi-state & edge-case explorations',
    description: 'Prototype empty states, errors, and edge cases so nothing is left undefined for engineers.',
    image: {
      light: service3,
      dark: service3Dark,
      alt: 'Yield farming dashboard',
    },
    layout: 'medium',
  },
  {
    id: 4,
    title: 'Design systems for prototypes',
    description: 'Reusable components and styles that keep your prototypes consistent and easy to iterate.',
    image: {
      light: service4,
      dark: service4Dark,
      alt: 'Portfolio analytics interface',
    },
    layout: 'large',
  },
  {
    id: 5,
    title: 'Prototype testing & iterations',
    description: 'Gather feedback from users and stakeholders, then refine flows in rapid cycles.',
    image: {
      light: service5,
      dark: service5Dark,
      alt: 'Security features overview',
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
            <h2>Prototyping services to de-risk your roadmap</h2>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <p>Everything you need to visualize, test, and refine product ideas before they reach your engineering team.</p>
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
                    <p
                      className={cn(
                        service.layout === 'medium' && service.id === 2 && 'md:max-w-[272px]',
                        service.layout === 'large' && service.id === 4 && 'max-w-[272px]',
                        service.layout === 'full' && 'max-w-[311px]',
                      )}>
                      {service.description}
                    </p>
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
                        service.layout === 'medium' &&
                          service.id === 3 &&
                          'max-h-[234px] max-w-full max-sm:relative max-sm:left-[9%]',
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
