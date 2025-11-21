import { FC } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const featureItems = [
  {
    id: 1,
    title: 'Native Android Development',
    description: 'Leverage the full power of the Android platform with native development using Kotlin and Java.',
    icon: 'ns-android',
  },
  {
    id: 2,
    title: 'Material Design 3',
    description: 'Beautiful, intuitive interfaces following Google\'s latest Material Design 3 guidelines.',
    icon: 'ns-design',
  },
  {
    id: 3,
    title: 'Android Jetpack',
    description: 'Build robust, high-quality apps faster with Android Jetpack components and architecture.',
    icon: 'ns-components',
  },
  {
    id: 4,
    title: 'Play Store Optimization',
    description: 'Maximize your app\'s visibility and downloads with expert Play Store optimization.',
    icon: 'ns-chart',
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
              Comprehensive <span className="text-primary-500">Android Development</span> Services
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/60 dark:text-accent/60">
              We deliver high-performance Android applications that engage users and drive business growth.
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
              Start Your Android Project
            </LinkButton>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Feature;
