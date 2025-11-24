import RevealAnimation from '../animation/RevealAnimation';

const faqs = [
  {
    id: 1,
    question: 'How long does SEO take to show results?',
    answer:
      'It depends on your domain history, competition, and current state. Many clients start to see meaningful movement in 33 months, with compounding gains over 612 months.',
  },
  {
    id: 2,
    question: 'Do you only handle technical SEO, or content as well?',
    answer:
      'We cover technical, on-page, and content strategy. We can also work with your writers using detailed SEO briefs and content reviews.',
  },
  {
    id: 3,
    question: 'Can you work with our existing dev and marketing teams?',
    answer:
      'Yes. We often plug into existing teams, providing audits, prioritized backlogs, and support implementing recommendations.',
  },
  {
    id: 4,
    question: 'What tools do you use for SEO?',
    answer:
      'We typically use a mix of Google Search Console, Google Analytics, a professional SEO suite (like Ahrefs/Semrush), and log/crawl analysis tools depending on your stack.',
  },
];

const Faq = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]">
      <div className="main-container max-w-[900px] mx-auto">
        <div className="text-center mb-10 md:mb-[60px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-3">FAQ</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>SEO questions we get a lot</h2>
          </RevealAnimation>
        </div>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <RevealAnimation key={item.id} delay={0.2 + index * 0.1}>
              <details className="group bg-white dark:bg-background-6 rounded-2xl p-5 md:p-6">
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <h3 className="text-tagline-1 md:text-heading-6 font-medium text-secondary dark:text-accent">
                    {item.question}
                  </h3>
                  <span className="text-secondary/50 dark:text-accent/60 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-secondary/70 dark:text-accent/70">{item.answer}</p>
              </details>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
