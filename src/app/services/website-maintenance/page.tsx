import Solutions from '@/components/homepage-04/Solutions';
import Process from '@/components/homepage-04/Process';
import Pricing from '@/components/homepage-04/Pricing';
import HeaderWrapper from '@/components/homepage-36/HeaderWrapper';
import FooterThree from '@/components/shared/footer/FooterThree';
import { defaultMetadata } from '@/utils/generateMetaData';
import gradient36 from '@public/images/gradient/gradient-36.png';
import { Metadata } from 'next';
import { Fragment } from 'react';
import Hero from '@/components/website-maintenance/Hero';
import Services from '@/components/website-maintenance/Services';
import CTA from '@/components/website-maintenance/CTA';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Website Maintenance & Care Plans - NextSaaS',
  description:
    'Website maintenance and care plans: CMS/plugin updates, security patches, uptime monitoring, backups, performance optimization, content updates, and SLA-backed support.'
};

const WebsiteMaintenancePage = () => {
  return (
    <Fragment>
      <HeaderWrapper />
      <main className="bg-white space-y-10">
        <Hero />
        <Solutions />
        <Services />
        <Process />
        <Pricing />
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

export default WebsiteMaintenancePage;
