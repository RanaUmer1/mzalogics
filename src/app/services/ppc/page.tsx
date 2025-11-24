import Blog from '@/components/homepage-35/Blog';
import Features from '@/components/homepage-35/Features';
import Testimonial from '@/components/homepage-35/Testimonial';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import type { Metadata } from 'next';
import { Fragment } from 'react';
import CTA from '@/components/services-ppc/CTA';
import Hero from '@/components/services-ppc/Hero';
import Services from '@/components/services-ppc/Services';
import ServicesV2 from '@/components/services-ppc/ServicesV2';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'PPC Services - MzaLogics',
  description:
    'PPC strategy, account setup, optimization, and reporting for search and paid social campaigns focused on real business results.',
};

const PPCPage = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 backdrop-blur-[25px] dark:border-stroke-6 dark:bg-background-9"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-white dark:bg-black">
        <Hero />
        <Services />
        <ServicesV2 />
        <Features />
        <Testimonial />
        <Blog />
        <CTA />
      </main>
      <FooterOne />
    </Fragment>
  );
};

export default PPCPage;
