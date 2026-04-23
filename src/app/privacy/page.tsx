import Navbar from '@/components/mza/Navbar';
import Footer from '@/components/mza/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-mza-bg text-white pt-32 min-h-screen">
        <div className="main-container py-24 max-w-4xl">
          <h1 className="text-5xl font-bold mb-12">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none space-y-8 text-gray-400">
            <p>Last Updated: April 2026</p>
            <p>At MZA Logics, we respect your privacy and are committed to protecting it. This Privacy Policy describes how we collect, use, and process your personal information when you visit our website or use our services.</p>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Information We Collect</h2>
            <p>We may collect information that you provide directly to us, such as your name, email address, and company details when you contact us for a project or sign up for our newsletter.</p>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and develop new products. We do not sell your personal information to third parties.</p>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. Data Security</h2>
            <p>We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.</p>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at contact@mzalogics.com.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
