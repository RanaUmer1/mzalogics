import { FC } from 'react';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const integrationLogos = [
  { id: 1, src: '/images/integrations/google-play.png', alt: 'Google Play' },
  { id: 2, src: '/images/integrations/firebase.png', alt: 'Firebase' },
  { id: 3, src: '/images/integrations/google-maps.png', alt: 'Google Maps' },
  { id: 4, src: '/images/integrations/stripe.png', alt: 'Stripe' },
  { id: 5, src: '/images/integrations/aws.png', alt: 'AWS' },
];

const Integration: FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-background-2 dark:bg-background-8">
      <div className="main-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-4">Seamless Integration</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-4">
              Seamless <span className="text-primary-500">Third-Party</span> Integrations
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/60 dark:text-accent/60">
              We integrate your Android app with the tools and services your business needs to succeed.
            </p>
          </RevealAnimation>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 py-8">
          {integrationLogos.map((logo, index) => (
            <RevealAnimation key={logo.id} delay={0.1 + (index * 0.1)}>
              <div className="bg-white dark:bg-background-7 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative w-24 h-16 md:w-32 md:h-20">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 6rem, 8rem"
                  />
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        <div className="text-center mt-12">
          <RevealAnimation delay={0.5}>
            <LinkButton
              href="/contact-us"
              className="btn btn-lg md:btn-xl btn-secondary hover:btn-white dark:hover:btn-accent w-[85%] md:w-auto"
            >
              Discuss Your Integration Needs
            </LinkButton>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Integration;
