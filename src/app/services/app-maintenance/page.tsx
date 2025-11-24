import ClientsMarquee from '@/components/homepage-36/ClientsMarquee';
import CaseStudy from '@/components/homepage-36/CaseStudy';
import Faq from '@/components/homepage-36/Faq';
import Features from '@/components/homepage-36/Features';
import HeaderWrapper from '@/components/homepage-36/HeaderWrapper';
import HowItsWork from '@/components/homepage-36/HowItsWork';
import Testimonial from '@/components/homepage-36/Testimonial';
import FooterThree from '@/components/shared/footer/FooterThree';
import { defaultMetadata } from '@/utils/generateMetaData';
import gradient36 from '@public/images/gradient/gradient-36.png';
import { Metadata } from 'next';
import { Fragment } from 'react';
import Hero from '@/components/app-maintenance/Hero';
import Services from '@/components/app-maintenance/Services';
import CTA from '@/components/app-maintenance/CTA';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'App Maintenance & Support - NextSaaS',
  description:
    'Proactive app maintenance and 24/7 support: monitoring, security patches, bug fixes, performance tuning, backups, and release management with defined SLAs.',
};

const AppMaintenancePage = () => {
  return (
    <Fragment>
      <HeaderWrapper />
      <main className="bg-white space-y-10">
        <Hero />
        <ClientsMarquee />
        <Features />
        <HowItsWork />
        <Services />
        <CaseStudy />
        <Testimonial />
        <Faq />
        <CTA />
      </main>
      <FooterThree
        defaultTheme="light"
        toggleTheme={false}
        className="relative !bg-background-2 overflow-hidden"
        gradientClassName="show-gradient !block size-[600px] md:size-[1220px] rotate-[-38deg] right-[-321px]  md:right-[-693px] top-[-237px] md:top-[-485px] select-none pointer-events-none"
        bgGradientImg={gradient36}
      />
    </Fragment>
  );
};

export default AppMaintenancePage;
