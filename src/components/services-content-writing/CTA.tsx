import CTAV3 from '../shared/cta/CTAV3';
import CTACheckList from '../shared/cta/CTACheckList';

const listItems = [
  { id: '1', text: 'No long-term contracts required' },
  { id: '2', text: 'Can collaborate with your internal team' },
];

const CTA = () => {
  return (
    <section className="bg-background-2 dark:bg-background-5 pt-[120px] pb-[100px] lg:pb-[160px]">
      <div className="main-container">
        <div className="space-y-8">
          <CTAV3
            badgeClass="badge-green mb-5"
            badgeText="Get started"
            ctaHeading=" Need a steady stream of on-brand content?"
            ctaHeadingClass="text-secondary dark:text-accent max-w-[1042px] mx-auto"
            description="Tell us about your product, audience, and current content cadencewe&apos;ll propose a plan that fits your team and goals."
            descriptionClass="max-w-[600px] mx-auto"
            inputFieldClass="px-[18px] h-12 py-3 shadow-1 placeholder:text-secondary/50 rounded-full border border-stroke-1 dark:bg-background-6 dark:placeholder:text-white/40 text-secondary/60 dark:text-white/60 dark:bg-dark-200 dark:border-[#31332F] focus:border-primary-500 dark:focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 md:w-[440px] w-[330px] max-[376px]:w-[285px] placeholder:font-normal"
            btnClass="btn-primary hover:btn-secondary dark:hover:btn-accent h-12 w-[85%] md:w-auto"
            ctaBtnText="Request a content plan"
          />
          <CTACheckList ctaCheckListData={listItems} className="sm:gap-x-[42px] gap-y-5" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
