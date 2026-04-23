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
  title: 'MZA Logics | Build Apps That Scale, Perform & Convert',
  description: 'MZA Logics is a mobile-first product engineering company that builds scalable, high-performance apps for startups and businesses. Specialized in Android, iOS, Flutter, and Web development.',
  keywords: ['Mobile App Development Company Pakistan', 'Android App Developers', 'AI App Development Services', 'Flutter App Development', 'SaaS Development', 'Scalable Software'],
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
