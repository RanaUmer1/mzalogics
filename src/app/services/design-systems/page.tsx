import Blog from '@/components/homepage-15/Blog';
import Process from '@/components/homepage-15/Process';
import Projects from '@/components/homepage-15/Projects';
import Testimonial from '@/components/homepage-15/Testimonial';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import type { Metadata } from 'next';
import { Fragment } from 'react';
import CTA from '@/components/services-design-systems/CTA';
import Hero from '@/components/services-design-systems/Hero';
import Services from '@/components/services-design-systems/Services';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Design Systems Services - MzaLogics',
  description:
    'Design tokens, component libraries, and documentation that keep your product UI consistent across teams and platforms.',
};

const DesignSystemsPage = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-white/60 backdrop-blur-[25px] top-5 dark:border dark:border-stroke-7 dark:bg-background-7"
        btnClassName="btn-secondary hover:btn-white dark:btn-accent dark:hover:btn-white-dark"
      />
      <main className="bg-background-2 dark:bg-background-5 overflow-x-hidden">
        <Hero />
        <Services />
        <Process />
        <Projects />
        <Testimonial />
        <Blog />
        <CTA />
      </main>
      <FooterOne className="dark:bg-background-8" />
    </Fragment>
  );
};

export default DesignSystemsPage;
