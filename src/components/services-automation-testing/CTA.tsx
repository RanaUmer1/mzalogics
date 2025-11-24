import CTAV2 from '../shared/cta/CTAV2';

const AutomationTestingCTA = () => {
  return (
    <section className="bg-background-2 dark:bg-background-5">
      <CTAV2
        className="bg-background-2 dark:bg-background-5"
        ctaHeading="Bring automation to your"
        spanText="testing workflow."
        ctaDescription="Book a free consultation to map out which flows to automate first and how to integrate tests into your pipeline."
        ctaBtnText="Book an automation call"
        ctaCheckListData={[
          { id: '1', text: 'No credit card required' },
          { id: '2', text: 'Flexible engagement models' },
          { id: '3', text: 'Works with your existing tools' },
        ]}
      />
    </section>
  );
};

AutomationTestingCTA.displayName = 'AutomationTestingCTA';
export default AutomationTestingCTA;
