import Features from '@/components/homepage-03/Features';
import FeaturesV2 from '@/components/homepage-03/FeaturesV2';
import Integration from '@/components/homepage-03/Integration';
import Pricing from '@/components/homepage-03/Pricing';
import Testimonial from '@/components/homepage-03/Testimonial';
import Understanding from '@/components/homepage-03/Understanding';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import type { Metadata } from 'next';
import { Fragment } from 'react';
import CTA from '@/components/services-aws-management/CTA';
import Hero from '@/components/services-aws-management/Hero';
import Services from '@/components/services-aws-management/Services';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'AWS Management Services - MzaLogics',
  description:
    'Architecture, operations, and optimization services for AWS workloads, focused on reliability, security, and cost control.',
};

const AWSManagementPage = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-background-2 dark:bg-background-6 backdrop-blur-[15px]"
        btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
      />
      <main className="bg-background-2 dark:bg-background-5 shadow-7">
        <Hero />
        <Services />
        <Features />
        <FeaturesV2 />
        <Pricing />
        <Integration />
        <Understanding />
        <Testimonial badgeText="Reviews" />
        <CTA />
      </main>
      <FooterOne />
    </Fragment>
  );
};

export default AWSManagementPage;
