import Navbar from '@/components/mza/Navbar';
import Footer from '@/components/mza/Footer';

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-mza-bg text-white pt-32 min-h-screen">
        <div className="main-container py-24 max-w-4xl">
          <h1 className="text-5xl font-bold mb-12">Terms & Conditions</h1>
          <div className="prose prose-invert max-w-none space-y-8 text-gray-400">
            <p>Last Updated: April 2026</p>
            <p>By accessing or using the services of MZA Logics, you agree to be bound by these Terms & Conditions. Please read them carefully.</p>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Services</h2>
            <p>MZA Logics provides software development, design, and consulting services. The specific scope of work for any project will be defined in a separate agreement or proposal.</p>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. Intellectual Property</h2>
            <p>Unless otherwise agreed in writing, all intellectual property rights created during a project remain the property of MZA Logics until full payment is received. Upon full payment, ownership is transferred to the client, subject to any third-party licenses.</p>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. Payment Terms</h2>
            <p>Payment terms will be specified in each project proposal. We typically require a deposit before commencing work.</p>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Limitation of Liability</h2>
            <p>MZA Logics will not be liable for any indirect, incidental, or consequential damages arising out of the use of our services.</p>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. Governing Law</h2>
            <p>These terms are governed by the laws of Pakistan.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
