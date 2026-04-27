import Navbar from '@/components/mza/Navbar';
import Hero from '@/components/mza/Hero';
import ProblemSolution from '@/components/mza/ProblemSolution';
import Services from '@/components/mza/Services';
import Portfolio from '@/components/mza/Portfolio';
import Process from '@/components/mza/Process';
import About from '@/components/mza/About';
import WhyUs from '@/components/mza/WhyUs';
import Testimonials from '@/components/mza/Testimonials';
import FinalCTA from '@/components/mza/FinalCTA';
import Footer from '@/components/mza/Footer';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'MZA-Logics | Custom Software That Drives Your Business Forward',
  description: 'MZA-Logics is a 25+ person software engineering company founded in 2021. We partner with startups and enterprises in Pakistan and worldwide to build custom software, mobile apps, web platforms, and cloud infrastructure.',
  keywords: [
    'Custom Software Development Pakistan',
    'Software House Lahore',
    'Mobile App Development Company',
    'Android App Developers',
    'iOS App Development',
    'Flutter & React Native',
    'Web Development Pakistan',
    'Cloud & DevOps',
    'SaaS Development',
    'UI/UX Design',
    'MZA Logics',
  ],
};

const Homepage = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="bg-mza-bg min-h-screen">
        <Hero />
        <ProblemSolution />
        <Services />
        <Portfolio />
        <Process />
        <About />
        <WhyUs />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </Fragment>
  );
};

Homepage.displayName = 'Homepage';
export default Homepage;
