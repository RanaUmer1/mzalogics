import Features from '@/components/homepage-03/Features';
import FeaturesV2 from '@/components/homepage-03/FeaturesV2';
import Hero from '@/components/homepage-03/Hero';
import Integration from '@/components/homepage-03/Integration';
import Pricing from '@/components/homepage-03/Pricing';
import Testimonial from '@/components/homepage-03/Testimonial';
import Understanding from '@/components/homepage-03/Understanding';
import CTAV2 from '@/components/shared/cta/CTAV2';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Python Development Services - MzaLogics',
  description: 'Homepage for our custom Python development, APIs, automation, and data solutions.',
};

const HomePage03 = () => {
  return (
    <>
      <NavbarOne
        className="bg-background-2 dark:bg-background-6 backdrop-blur-[15px]"
        btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
      />
      <main className="bg-background-2 dark:bg-background-5 shadow-7">
        <Hero />
        <Features />
        <FeaturesV2 />
        <Pricing />
        <Integration />
        <Understanding />
        <Testimonial badgeText="Reviews" />
        <CTAV2
          className="bg-background-2 dark:bg-background-5"
          ctaHeading=" Start your next Python project with"
          spanText="senior engineers."
          ctaDescription="Book a free consultation to discuss APIs, automation, data pipelines, or full-stack apps built in Python."
          ctaBtnText="Book a free call"
          ctaCheckListData={[
            {
              id: '1',
              text: 'No credit card required',
            },
            {
              id: '2',
              text: 'free for 30 day trial.',
            },
            {
              id: '3',
              text: 'Money back guarantee.',
            },
          ]}
        />
      </main>
      <FooterOne />
    </>
  );
};

export default HomePage03;
