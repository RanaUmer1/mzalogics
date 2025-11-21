import { FC } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const featureItems = [
  {
    id: 1,
    title: 'React Native Development',
    description: 'Leverage the power of React Native for building cross-platform apps with native performance and feel.',
    icon: 'ns-react',
  },
  {
    id: 2,
    title: 'Flutter Development',
    description: 'Create beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
    icon: 'ns-flutter',
  },
  {
    id: 3,
    title: 'Single Codebase',
    description: 'Maintain one codebase for multiple platforms, reducing development time and costs significantly.',
    icon: 'ns-code',
  },
  {
    id: 4,
    title: 'Native Performance',
    description: 'Deliver app experiences that feel native on every platform with optimized performance.',
    icon: 'ns-rocket',
  },
];

const Feature: FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-background-3 dark:bg-background-5">
      <div className="main-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-4">Our Expertise</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-4">
              Comprehensive <span className="text-primary-500">Cross-Platform</span> Solutions
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/60 dark:text-accent/60">
              We deliver high-quality cross-platform applications that provide native-like performance and user experience.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureItems.map((item, index) => (
            <RevealAnimation
              key={item.id}
              delay={0.2 + index * 0.1}
            >
              <div className="bg-white dark:bg-background-8 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <div className="w-14 h-14 rounded-full bg-primary-500/10 flex items-center justify-center mb-6">
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
              href="/contact-us"
              className="btn btn-lg md:btn-xl btn-secondary hover:btn-white dark:hover:btn-accent dark:btn-transparent w-[85%] md:w-auto"
            >
              Start Your Cross-Platform Project
            </LinkButton>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Feature;
