import React from 'react';
import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';
import PageHero from '@/components/shared/PageHero';
import NavbarOne from '@/components/shared/header/NavbarOne';
import FooterOne from '@/components/shared/footer/FooterOne';
import CTAV1 from '@/components/shared/cta/CTAV1';
import Features from '@/components/our-services-01/Features';
import Services from '@/components/our-services-01/Services';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Mobile App Development Services | MZA Logics',
  description: 'Expert mobile app development services for iOS and Android. We create custom, high-performance mobile applications tailored to your business needs.',
};

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
          description="We create powerful, user-friendly mobile applications that drive engagement and deliver results for your business."
        />
        
        <Services 
          title="Our Mobile App Development Services"
          description="We offer end-to-end mobile app development services to bring your ideas to life."
        />
        
        <Features 
          title="Why Choose Us for Mobile App Development"
          features={[
            {
              title: 'Native & Cross-Platform',
              description: 'We develop both native and cross-platform apps for maximum reach and performance.',
              icon: 'mobile'
            },
            {
              title: 'UI/UX Focused',
              description: 'Beautiful, intuitive interfaces designed for optimal user experience.',
              icon: 'layout'
            },
            {
              title: 'Full-Cycle Development',
              description: 'From concept to launch and beyond, we handle every aspect of app development.',
              icon: 'code'
            }
          ]}
        />
        
        <CTAV1
          className="dark:bg-background-6 bg-white"
          ctaHeading="Ready to build your mobile app?"
          description="Let's discuss how we can turn your app idea into reality."
          ctaBtnText="Get a Free Consultation"
          btnClass="hover:btn-secondary dark:hover:btn-accent"
        />
      </main>
      <FooterOne />
    </>
  );
};

export default MobileAppDevelopmentPage;
