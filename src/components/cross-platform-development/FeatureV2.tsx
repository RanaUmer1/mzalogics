import { FC } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const benefitItems = [
  {
    id: 1,
    title: 'Cost-Efficient Development',
    description: 'Reduce development costs by up to 60% with a single codebase for iOS, Android, and web platforms.',
    icon: 'ns-dollar',
  },
  {
    id: 2,
    title: 'Rapid Deployment',
    description: 'Launch your app 2x faster with simultaneous deployment across all major platforms.',
    icon: 'ns-clock',
  },
  {
    id: 3,
    title: 'Seamless User Experience',
    description: 'Deliver native-like performance with platform-specific UI/UX best practices.',
    icon: 'ns-design',
  },
  {
    id: 4,
    title: 'Simplified Maintenance',
    description: 'One codebase means easier updates, bug fixes, and feature rollouts across all platforms.',
    icon: 'ns-settings',
  },
  {
    id: 5,
    title: 'Maximum Market Reach',
    description: 'Engage users across all devices and platforms with a single, unified app experience.',
    icon: 'ns-users',
  },
  {
    id: 6,
    title: 'Native Performance',
    description: 'Leverage native modules and APIs for hardware-accelerated performance when needed.',
    icon: 'ns-mobile',
  },
];

const FeatureV2: FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-background-7">
      <div className="main-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-4">Why Businesses Love Cross-Platform</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-4">
              The Power of <span className="text-primary-500">Cross-Platform</span> Solutions
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/60 dark:text-accent/60">
              Experience faster development cycles, reduced costs, and broader market reach with our expert cross-platform solutions.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitItems.map((item, index) => (
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
              See Our Cross-Platform Success Stories
            </LinkButton>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default FeatureV2;
