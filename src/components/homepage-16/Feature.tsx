import feature1Dark from '@public/images/home-page-16/feature-1-dark.png';
import feature1 from '@public/images/home-page-16/feature-1.png';
import feature2Dark from '@public/images/home-page-16/feature-2-dark.png';
import feature2 from '@public/images/home-page-16/feature-2.png';
import feature3Dark from '@public/images/home-page-16/feature-3-dark.png';
import feature3 from '@public/images/home-page-16/feature-3.png';
import feature4Dark from '@public/images/home-page-16/feature-4-dark.png';
import feature4 from '@public/images/home-page-16/feature-4.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const featureItems = [
  {
    title: 'Custom iOS Development',
    description: 'Tailor-made iOS applications designed specifically for your business needs',
    image: feature1,
    imageDark: feature1Dark,
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that follow Apple’s Human Interface Guidelines',
    image: feature2,
    imageDark: feature2Dark,
  },
  {
    title: 'Native iOS Features',
    description: 'Leverage the full power of iOS with features like ARKit, CoreML, and more',
    image: feature3,
    imageDark: feature3Dark,
  },
  {
    title: 'App Store Optimization',
    description: 'Expert guidance to help your app rank higher in the App Store',
    image: feature4,
    imageDark: feature4Dark,
  },
];
const Feature = () => {
  return (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[150px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[150px] bg-background-3 dark:bg-background-7">
      <div className="main-container">
        <div className="text-center space-y-5 max-w-[650px] mx-auto mb-14">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Core features</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2>
              Comprehensive <span className="text-primary-500">iOS Development Services</span>
            </h2>
          </RevealAnimation>
        </div>
        {/* feature Items */}
        <div className="grid grid-cols-12 space-y-8 md:space-y-0 md:gap-8 mb-18">
          {featureItems.map((feature, index) => (
            <RevealAnimation key={index} delay={0.3 + index * 0.1}>
              <div
                className={`${index === 0 || index === 3 ? 'col-span-12 md:col-span-6 lg:col-span-8' : 'col-span-12 md:col-span-6 lg:col-span-4'} p-6 rounded-[20px] border-8 border-white dark:border-background-9 dark:bg-background-7 bg-background-3 space-y-6 `}>
                <div className={`space-y-1 ${featureItems.length - 1 ? 'max-w-[285px]' : ''}`}>
                  <h5>{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
                <figure className="w-full h-auto object-cover rounded-2xl overflow-hidden">
                  <Image
                    src={feature.image}
                    alt="feature image"
                    className="w-full h-full object-cover block dark:hidden"
                  />
                  <Image
                    src={feature.imageDark}
                    alt="feature image"
                    className="w-full h-full object-cover hidden dark:block"
                  />
                </figure>
              </div>
            </RevealAnimation>
          ))}
        </div>
        <RevealAnimation delay={0.8}>
          <div className="flex items-center justify-center">
            <LinkButton
              href="/contact-us"
              className="btn btn-lg md:btn-xl btn-secondary hover:btn-white dark:hover:btn-accent dark:btn-transparent w-[85%] md:w-auto">
Start Your iOS Project
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Feature;
