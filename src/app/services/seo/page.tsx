import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import type { Metadata } from 'next';
import { Fragment } from 'react';
import Features from '@/components/services-seo/Features';
import Hero from '@/components/services-seo/Hero';
import Reasons from '@/components/services-seo/Reasons';
import Faq from '@/components/services-seo/Faq';
import CTA from '@/components/services-seo/CTA';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'SEO Services - MzaLogics',
  description:
    'Technical SEO, content strategy, and on-page optimization services to grow qualified organic traffic for your product.',
};

const SEOPage = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 backdrop-blur-[25px] dark:border-stroke-6 bg-accent/60 dark:bg-background-9"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <Hero />
        <Features />
        <Reasons />
        <Faq />
        <CTA />
      </main>
      <FooterThree />
    </Fragment>
  );
};

export default SEOPage;
