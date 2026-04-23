'use client';
import { Linkedin, Github, Twitter, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mza-bg border-t border-white/5 pt-20 pb-10 text-white">
      <div className="main-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold italic tracking-tighter">MZA <span className="text-mza-neon">LOGICS</span></h3>
            <p className="text-gray-400 leading-relaxed">
              Mobile-first product engineering company building scalable, high-performance apps for global startups.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:text-mza-neon transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:text-mza-neon transition-colors"><Github size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:text-mza-neon transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/services/mobile-apps" className="hover:text-mza-neon transition-colors">Mobile App Development</Link></li>
              <li><Link href="/services/web-development" className="hover:text-mza-neon transition-colors">Web Development</Link></li>
              <li><Link href="/services/ai-solutions" className="hover:text-mza-neon transition-colors">AI & Automation</Link></li>
              <li><Link href="/services/ui-ux" className="hover:text-mza-neon transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/about" className="hover:text-mza-neon transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-mza-neon transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-mza-neon transition-colors">Our Blog</Link></li>
              <li><Link href="/contact" className="hover:text-mza-neon transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-mza-neon" />
                <span>contact@mzalogics.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-mza-neon shrink-0 mt-1" />
                <span>Lahore, Pakistan<br/>Serving Clients Globally</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© {currentYear} MZA Logics. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
