import CTA from '@/components/homepage-16/CTA';
import Feature from '@/components/homepage-16/Feature';
import FeatureV2 from '@/components/homepage-16/FeatureV2';
import Hero from '@/components/homepage-16/Hero';
import Integration from '@/components/homepage-16/Integration';
import Pricing from '@/components/homepage-16/Pricing';
import Publish from '@/components/homepage-16/Publish';
import Steps from '@/components/homepage-16/Steps';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import ReviewsV3 from '@/components/shared/reviews/ReviewsV3';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'iOS App Development Services | MZA Logics',
  description: 'Expert iOS app development services. We create custom, high-performance iOS applications that drive business growth and deliver exceptional user experiences.',
};

const IosAppDevelopmentPage = () => {
  return (
    <>
      <NavbarOne
        className="bg-background-2 backdrop-blur-[15px] dark:border dark:border-stroke-6 dark:bg-background-9"
        megaMenuColor="dark:!bg-background-9 !bg-background-2"
        btnClassName="btn-secondary hover:btn-white dark:btn-accent dark:hover:btn-white-dark"
      />
      <main className="dark:bg-background-6">
        <Hero />
        <Integration />
        <Feature />
        <Steps />
        <FeatureV2 />
        <ReviewsV3
          className="bg-background-3 dark:bg-background-5"
          badgeText="Client Success"
          badgeColor="badge-green"
          title="Real Apps. Real Results"
          description="Our clients trust us to deliver high-quality iOS applications that drive business growth and user engagement."
          buttonText="View all case studies"
        />
        <Pricing />
        <Publish />
        <CTA />
      </main>
      <FooterOne />
    </>
  );
};

export default IosAppDevelopmentPage;
