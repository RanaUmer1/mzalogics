import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import type { Metadata } from 'next';
import { Fragment } from 'react';
import CTA from '@/components/services-content-writing/CTA';
import Faq from '@/components/services-content-writing/Faq';
import Features from '@/components/services-content-writing/Features';
import Hero from '@/components/services-content-writing/Hero';
import Reasons from '@/components/services-content-writing/Reasons';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Content Writing Services - MzaLogics',
  description:
    'Website copy, blog posts, case studies, and email content written to match your brand voice and support your growth goals.',
};

const ContentWritingPage = () => {
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

export default ContentWritingPage;
