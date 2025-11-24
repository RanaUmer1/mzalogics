import CTAV2 from '../shared/cta/CTAV2';

const AWSManagementCTA = () => {
  return (
    <section className="bg-background-2 dark:bg-background-5">
      <CTAV2
        className="bg-background-2 dark:bg-background-5"
        ctaHeading="Get more from your"
        spanText="AWS investment."
        ctaDescription="Book a free consultation to review your current setup and discuss reliability, security, and cost improvements."
        ctaBtnText="Book an AWS review"
        ctaCheckListData={[
          { id: '1', text: 'No credit card required' },
          { id: '2', text: 'Works with your existing team & stack' },
          { id: '3', text: 'Actionable recommendations, not generic checklists' },
        ]}
      />
    </section>
  );
};

AWSManagementCTA.displayName = 'AWSManagementCTA';
export default AWSManagementCTA;
