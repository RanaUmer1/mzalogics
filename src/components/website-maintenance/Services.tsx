import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const services = [
  { id: 1, icon: 'ns-shape-8', title: 'CMS & Plugin Updates', desc: 'Keep WordPress/CMS core, themes, and plugins updated and compatible.' },
  { id: 2, icon: 'ns-shape-35', title: 'Security & Patching', desc: 'Harden configs, patch vulnerabilities, malware scanning and cleanup.' },
  { id: 3, icon: 'ns-shape-41', title: 'Uptime Monitoring', desc: '24/7 checks with instant alerts and on-call escalation.' },
  { id: 4, icon: 'ns-shape-19', title: 'Backups & Recovery', desc: 'Automated offsite backups, verified restores, and disaster recovery.' },
  { id: 5, icon: 'ns-shape-3', title: 'Performance & SEO Health', desc: 'Core Web Vitals, caching/CDN, image optimization, and technical SEO checks.' },
  { id: 6, icon: 'ns-shape-46', title: 'Content & Minor Updates', desc: 'Rapid updates to pages, menus, forms, and small enhancements.' },
];

const Services = () => {
  return (
    <section className="bg-background-2 dark:bg-background-5 xl:py-[100px] md:py-[80px] py-14">
      <div className="main-container">
        <div className="text-center space-y-3 mb-10 md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Website Maintenance Services</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="md:mb-3 mb-1">Everything your site needs to stay secure and fast</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="lg:max-w-[650px] mx-auto">Proactive care covering updates, security, monitoring, backups, performance, and content changes.</p>
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
              <span>Get a maintenance audit</span>
            </LinkButton>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Services;
