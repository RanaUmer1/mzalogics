import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import type { Metadata } from 'next';
import { Fragment } from 'react';
import CTA from '@/components/services-performance-testing/CTA';
import Details from '@/components/services-performance-testing/Details';
import Hero from '@/components/services-performance-testing/Hero';
import Services from '@/components/services-performance-testing/Services';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Performance Testing Services - MzaLogics',
  description:
    'Load, stress, and performance testing services with clear metrics and prioritized recommendations to keep your app fast at scale.',
};

const PerformanceTestingPage = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 backdrop-blur-[25px] dark:border-stroke-6 dark:bg-background-9"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-white dark:bg-black">
        <Hero />
        <Services />
        <Details />
        <CTA />
      </main>
      <FooterOne />
    </Fragment>
  );
};

export default PerformanceTestingPage;
