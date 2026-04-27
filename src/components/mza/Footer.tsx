'use client';
import { Linkedin, Facebook, Instagram, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
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
              Custom software engineering for businesses in Pakistan and worldwide. Founded in 2021 by senior engineers — building products that actually fit how you work.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="LinkedIn" className="p-2 bg-white/5 rounded-lg hover:text-mza-neon hover:bg-white/10 transition-colors"><Linkedin size={18} /></a>
              <a href="#" aria-label="Facebook" className="p-2 bg-white/5 rounded-lg hover:text-mza-neon hover:bg-white/10 transition-colors"><Facebook size={18} /></a>
              <a href="#" aria-label="Instagram" className="p-2 bg-white/5 rounded-lg hover:text-mza-neon hover:bg-white/10 transition-colors"><Instagram size={18} /></a>
              <a href="https://wa.me/923003600188" aria-label="WhatsApp" className="p-2 bg-white/5 rounded-lg hover:text-mza-neon hover:bg-white/10 transition-colors"><MessageCircle size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="#services" className="hover:text-mza-neon transition-colors">Custom Software</Link></li>
              <li><Link href="#services" className="hover:text-mza-neon transition-colors">Mobile App Development</Link></li>
              <li><Link href="#services" className="hover:text-mza-neon transition-colors">Web Development &amp; CMS</Link></li>
              <li><Link href="#services" className="hover:text-mza-neon transition-colors">Cloud &amp; DevOps</Link></li>
              <li><Link href="#services" className="hover:text-mza-neon transition-colors">UI/UX Design</Link></li>
              <li><Link href="#services" className="hover:text-mza-neon transition-colors">QA &amp; Testing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="#about" className="hover:text-mza-neon transition-colors">About Us</Link></li>
              <li><Link href="#work" className="hover:text-mza-neon transition-colors">Selected Work</Link></li>
              <li><Link href="#process" className="hover:text-mza-neon transition-colors">Our Process</Link></li>
              <li><Link href="#contact" className="hover:text-mza-neon transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-mza-neon transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Get in touch</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-mza-neon shrink-0 mt-1" />
                <div>
                  <a href="tel:+923003600188" className="hover:text-white transition-colors block">0300 3600188</a>
                  <span className="text-xs text-gray-500">Mon–Sat · 10am – 7pm PKT</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-mza-neon shrink-0 mt-1" />
                <a href="mailto:Mzalogics@gmail.com" className="hover:text-white transition-colors break-all">Mzalogics@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-mza-neon shrink-0 mt-1" />
                <span>144 G Block, D.H.A. Main Blvd,<br/>DHA Phase 1, Lahore, Pakistan</span>
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
