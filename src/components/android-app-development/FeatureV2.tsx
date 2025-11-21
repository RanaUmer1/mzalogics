import { FC } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const featureList = [
  {
    id: 1,
    icon: 'ns-android',
    title: 'Kotlin & Java',
    description: 'Expert development in both Kotlin and Java for optimal performance and maintainability.'
  },
  {
    id: 2,
    icon: 'ns-design',
    title: 'Material Design 3',
    description: 'Beautiful, intuitive interfaces following Google\'s latest design language.'
  },
  {
    id: 3,
    icon: 'ns-phone',
    title: 'Responsive UI',
    description: 'Pixel-perfect layouts that work across all Android devices and screen sizes.'
  },
  {
    id: 4,
    icon: 'ns-rocket',
    title: 'Performance',
    description: 'Optimized apps that run smoothly even on low-end devices.'
  },
  {
    id: 5,
    icon: 'ns-shield',
    title: 'Security',
    description: 'Enterprise-grade security to protect user data and app integrity.'
  },
  {
    id: 6,
    icon: 'ns-sync',
    title: 'Integration',
    description: 'Seamless integration with third-party services and APIs.'
  }
];

const FeatureV2: FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-background-7">
      <div className="main-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-4">Why Choose Us</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-4">
              Why Businesses Choose Our <span className="text-primary-500">Android Development</span> Expertise
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/60 dark:text-accent/60">
              We combine technical excellence with business understanding to deliver Android apps that drive results.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((item, index) => (
            <RevealAnimation key={item.id} delay={0.1 + (index * 0.1)}>
              <div className="bg-background-1 dark:bg-background-8 p-8 rounded-xl h-full">
                <div className="w-14 h-14 rounded-xl bg-primary-500/10 flex items-center justify-center mb-6">
                  <i className={`ns ${item.icon} text-2xl text-primary-500`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-secondary/70 dark:text-accent/70">{item.description}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>

        <div className="text-center mt-12">
          <RevealAnimation delay={0.5}>
            <LinkButton
              href="/portfolio"
              className="btn btn-lg md:btn-xl btn-outline hover:btn-secondary dark:hover:btn-accent w-[85%] md:w-auto"
            >
              View Our Android Work
            </LinkButton>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default FeatureV2;
