import RevealAnimation from '../animation/RevealAnimation';

const faqs = [
  {
    id: 1,
    question: 'What kinds of content do you write?',
    answer:
      'We typically help with website copy, product pages, blog posts, case studies, email flows, and high-level messaging. If you have something more niche in mind, we can usually adapt.',
  },
  {
    id: 2,
    question: 'Do you handle ideation, or do we provide topics?',
    answer:
      'Both options work. We can generate topics and outlines based on your strategy, or we can work from a topic backlog your team already has.',
  },
  {
    id: 3,
    question: 'What does your review and revision process look like?',
    answer:
      'Most pieces go through at least one internal review and one round of client feedback. For larger projects, we can agree on more structured review cycles.',
  },
  {
    id: 4,
    question: 'Can you match our existing tone of voice?',
    answer:
      'Yes. We usually start with a short voice and messaging review using your current materials and then create a mini style guide to keep things consistent.',
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
            <h2>Content writing questions we get a lot</h2>
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
