import CTAV2 from '../shared/cta/CTAV2';

const CICDCTA = () => {
  return (
    <section className="bg-background-2 dark:bg-background-5">
      <CTAV2
        className="bg-background-2 dark:bg-background-5"
        ctaHeading="Bring structure to your"
        spanText="delivery pipeline."
        ctaDescription="Book a free consultation to review your current process and map out a CI/CD setup that fits your stack and team."
        ctaBtnText="Book a CI/CD review"
        ctaCheckListData={[
          { id: '1', text: 'No credit card required' },
          { id: '2', text: 'Works with your existing tools (GitHub, GitLab, Bitbucket, etc.)' },
          { id: '3', text: 'Clear next steps and recommendations' },
        ]}
      />
    </section>
  );
};

CICDCTA.displayName = 'CICDCTA';
export default CICDCTA;
