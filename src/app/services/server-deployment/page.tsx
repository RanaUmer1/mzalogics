import Blog from '@/components/homepage-18/Blog';
import Counter from '@/components/homepage-18/Counter';
import Pricing from '@/components/homepage-18/Pricing';
import Projects from '@/components/homepage-18/Projects';
import Testimonial from '@/components/homepage-18/Testimonial';
import FooterFour from '@/components/shared/footer/FooterFour';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import type { Metadata } from 'next';
import { Fragment } from 'react';
import CTA from '@/components/services-server-deployment/CTA';
import Hero from '@/components/services-server-deployment/Hero';
import Services from '@/components/services-server-deployment/Services';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Server Deployment Services - MzaLogics',
  description:
    'Design and implementation of reliable server deployment processes, including environments, automation, monitoring, and runbooks.',
};

const ServerDeploymentPage = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-accent/60 border border-stroke-2 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-lg"
        btnClassName="btn-secondary hover:btn-primary dark:btn-accent"
      />
      <main className="bg-background-2 dark:bg-background-5">
        <Hero />
        <Services />
        <Projects />
        <Counter />
        <Testimonial />
        <Pricing />
        <Blog />
        <CTA />
      </main>
      <FooterFour className="border-t border-t-[#303032] dark:border-t-0 max-sm:z-[11]" />
    </Fragment>
  );
};

export default ServerDeploymentPage;
