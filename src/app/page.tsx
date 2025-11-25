import CTA from '@/components/homepage-17/CTA';
import Features from '@/components/homepage-17/Features';
import Hero from '@/components/homepage-17/Hero';
import Integration from '@/components/homepage-17/Integration';
import Pricing from '@/components/homepage-17/Pricing';
import Process from '@/components/homepage-17/Process';
import WhatWeOffer from '@/components/homepage-17/WhatWeOffer';
import WhyChooseUs from '@/components/homepage-17/WhyChooseUs';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'MZA Logics - Custom Software Development & Digital Solutions',
  description: 'Leading software development company offering custom software, mobile app development, web applications, UI/UX design, and DevOps solutions. Transform your business with scalable, secure technology.',
};

const Homepage = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-white top-12 dark:bg-background-5"
        btnClassName="btn-secondary hover:btn-white dark:btn-accent dark:hover:btn-white-dark"
      />
      <main className="bg-background-2 dark:bg-background-5">
        <Hero />
        <WhatWeOffer />
        <WhyChooseUs />
        <Features />
        <Process />
        <Integration />
        <Pricing />
        <CTA />
      </main>
      <FooterThree />
    </Fragment>
  );
};

Homepage.displayName = 'Homepage';
export default Homepage;
