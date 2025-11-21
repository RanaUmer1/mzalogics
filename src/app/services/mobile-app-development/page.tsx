import React from 'react';
import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';
import PageHero from '@/components/shared/PageHero';
import NavbarOne from '@/components/shared/header/NavbarOne';
import FooterOne from '@/components/shared/footer/FooterOne';
import CTAV1 from '@/components/shared/cta/CTAV1';
import Features from '@/components/our-services-01/Features';
import Services from '@/components/our-services-01/Services';
import RevealAnimation from '@/components/animation/RevealAnimation';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="bg-white dark:bg-background-7 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
    <div className="text-4xl mb-4 text-accent">
      <i className={icon}></i>
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-foreground/70">{description}</p>
  </div>
);

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Mobile App Development Services | MZA Logics',
  description: 'Expert mobile app development services for iOS and Android. We create custom, high-performance mobile applications tailored to your business needs.',
};

const features = [
  {
    title: 'Native & Cross-Platform',
    description: 'We develop both native and cross-platform apps for maximum reach and performance.',
    icon: 'icon-mobile'
  },
  {
    title: 'UI/UX Focused',
    description: 'Beautiful, intuitive interfaces designed for optimal user experience.',
    icon: 'icon-layout'
  },
  {
    title: 'Full-Cycle Development',
    description: 'From concept to launch and beyond, we handle every aspect of app development.',
    icon: 'icon-code'
  }
];

const MobileAppDevelopmentPage = () => {
  return (
    <>
      <NavbarOne 
        className="bg-accent/60 border border-stroke-2 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:bg-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-1 dark:bg-background-6">
        <PageHero 
          title="Mobile App Development" 
          heading="Transform Your Business with Custom Mobile Solutions"
          link="/services/mobile-app-development"
        />
        
        {/* Services Section */}
        <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px] bg-background-2 dark:bg-background-8">
          <div className="main-container">
            <div className="text-center space-y-5 mb-[70px]">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-yellow-v2">Our Services</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2>Our Mobile App Development Services</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="max-w-[700px] mx-auto">
                    We offer end-to-end mobile app development services to bring your ideas to life.
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <Services />
          </div>
        </section>

        {/* Features Section */}
        <Features 
          className="bg-background-1 dark:bg-background-7"
          badgeClassName="bg-accent/10 text-accent dark:bg-accent/20"
          btnClassName="btn-primary hover:bg-secondary dark:hover:bg-accent"
        />
        
        {/* Why Choose Us Section */}
        <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px] bg-background-2 dark:bg-background-8">
          <div className="main-container">
            <div className="text-center space-y-5 mb-[70px]">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-yellow-v2">Why Choose Us</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2>Why Choose Us for Mobile App Development</h2>
                </RevealAnimation>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <RevealAnimation key={index} delay={0.1 + (index * 0.1)}>
                  <FeatureCard {...feature} />
                </RevealAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTAV1
          className="dark:bg-background-6 bg-white"
          ctaHeading="Ready to build your mobile app?"
          description="Let's discuss how we can turn your app idea into reality."
          ctaBtnText="Get Started"
          btnClass="btn-primary hover:bg-secondary dark:hover:bg-accent"
        />
      </main>
      <FooterOne />
    </>
  );
};

export default MobileAppDevelopmentPage;
