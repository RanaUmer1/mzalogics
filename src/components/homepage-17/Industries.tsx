import { Stethoscope, ShoppingCart, Laptop, GraduationCap, Wrench } from 'lucide-react';
import RevealAnimation from '../animation/RevealAnimation';

const industries = [
    {
        title: 'Healthcare & Life Sciences',
        description: 'Patient management systems, telemedicine apps, and secure healthcare platforms.',
        icon: <Stethoscope size={40} className="text-ns-blue" />,
    },
    {
        title: 'E-commerce & Retail',
        description: 'Custom online stores, marketplace solutions, and inventory management.',
        icon: <ShoppingCart size={40} className="text-ns-blue" />,
    },
    {
        title: 'SaaS & B2B Platforms',
        description: 'Scalable software-as-a-service products and complex business tools.',
        icon: <Laptop size={40} className="text-ns-blue" />,
    },
    {
        title: 'Education & eLearning',
        description: 'Learning management systems, interactive apps, and educational platforms.',
        icon: <GraduationCap size={40} className="text-ns-blue" />,
    },
    {
        title: 'Utility Apps',
        description: 'High-performance tools and utility applications for everyday business needs.',
        icon: <Wrench size={40} className="text-ns-blue" />,
    },
];

const Industries = () => {
    return (
        <section className="pt-[100px] pb-[100px] md:pb-[200px]">
            <div className="max-w-[1440px] sm:mx-auto mx-5">
                <div className="bg-background-3 dark:bg-background-7 rounded-[30px] py-[100px]">
                    <div className="main-container">
                        <div className="flex flex-col items-center text-center mb-16">
                            <RevealAnimation delay={0.2}>
                                <span className="badge badge-primary-light mb-5">Industries We Serve</span>
                            </RevealAnimation>
                            <RevealAnimation delay={0.3}>
                                <h2 className="md:max-w-[600px] mx-auto">Expertise across diverse business sectors</h2>
                            </RevealAnimation>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {industries.map((industry, index) => (
                                <RevealAnimation key={industry.title} delay={0.4 + index * 0.1}>
                                    <div className="bg-white dark:bg-background-6 p-10 rounded-[20px] h-full transition-transform hover:scale-[102%] border border-stroke-1/50 dark:border-stroke-5">
                                        <div className="mb-6">{industry.icon}</div>
                                        <h3 className="text-heading-5 mb-4">{industry.title}</h3>
                                        <p className="text-secondary/70 dark:text-accent/70">{industry.description}</p>
                                    </div>
                                </RevealAnimation>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Industries;
