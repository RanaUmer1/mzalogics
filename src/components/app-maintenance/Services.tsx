import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const services = [
  {
    id: 1,
    icon: 'ns-shape-8',
    title: '24/7 Monitoring & Alerts',
    desc: 'Real-time uptime, error, and performance monitoring with on-call escalation.',
  },
  {
    id: 2,
    icon: 'ns-shape-35',
    title: 'Security Patches & Upgrades',
    desc: 'Apply OS, runtime, and dependency updates with zero-downtime strategies.',
  },
  {
    id: 3,
    icon: 'ns-shape-41',
    title: 'Bug Fixes & Hotfixes',
    desc: 'Triage, reproduce, and resolve defects with defined SLA response windows.',
  },
  {
    id: 4,
    icon: 'ns-shape-19',
    title: 'Performance & Backups',
    desc: 'Tune DB and caching, optimize queries, and automate verified backups.',
  },
  {
    id: 5,
    icon: 'ns-shape-3',
    title: 'Release Management',
    desc: 'Plan, test, and ship releases with rollbacks and change management.',
  },
  {
    id: 6,
    icon: 'ns-shape-46',
    title: 'SLA & Reporting',
    desc: 'Monthly reports, incident postmortems, and transparent KPIs.',
  },
];

const Services = () => {
  return (
    <section className="xl:py-[100px] md:py-[80px] py-14 bg-background-2 dark:bg-background-5">
      <div className="main-container">
        <div className="text-center space-y-3 mb-10 md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-gray-light-v2">Our Maintenance Services</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="md:mb-3 mb-1">Keep your app healthy, secure, and fast</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="lg:max-w-[650px] mx-auto">
              Comprehensive app maintenance and support covering monitoring, security, stability, performance, and releases.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-12 lg:gap-8 gap-6">
          {services.map((s, idx) => (
            <div key={s.id} className="col-span-12 md:col-span-6 lg:col-span-4">
              <RevealAnimation delay={0.3 + idx * 0.05}>
                <div className="bg-white dark:bg-background-6 rounded-[20px] p-6 space-y-4 h-full">
                  <div>
                    <span className={`${s.icon} text-[52px] text-secondary dark:text-accent`} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-heading-6 md:text-heading-5">{s.title}</h3>
                    <p className="text-secondary/70 dark:text-accent/70">{s.desc}</p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-10">
          <RevealAnimation delay={0.6}>
            <LinkButton href="/contact-us" className="btn btn-primary btn-md hover:btn-secondary dark:hover:btn-accent w-[85%] md:w-auto">
              <span>Discuss your support needs</span>
            </LinkButton>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Services;
