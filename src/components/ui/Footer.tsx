import {Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import elearningLogo from '@/assets/elearningLogo2.png';
import { Link } from 'react-router-dom';

export function Footer() {

  const socials = [
    {
      linkedin: 'https://www.linkedin.com/elearning_ng',
      x: 'https://twitter.com/elearning_ng',
      instagram: 'https://www.instagram.com/elearning_ng/',
      tiktok: 'https://www.tiktok.com/@elearning_ng',
    },
  ];
  return (
    <footer className="bg-surface border-t border-white/10 py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 group">
             <img src={elearningLogo} alt="eLearning" className="h-auto w-40 " />
           </Link>
            <p className="text-foreground/70 text-sm leading-relaxed max-w-sm">
              Modernizing academic workflows with secure, scalable systems that automate result processing and administrative tasks for universities globally.
            </p>
          </div>
          
          <div>
            <h4 className="text-foreground font-medium mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-foreground/55">
              <li><Link to="/features" className="hover:text-foreground transition-colors">Result Processing</Link></li>
              <li><Link to="/features" className="hover:text-foreground transition-colors">Course Registration</Link></li>
              <li><Link to="/features" className="hover:text-foreground transition-colors">Transcript Requests</Link></li>
              <li><Link to="/features" className="hover:text-foreground transition-colors">Clearance Automation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-medium mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-foreground/55">
              <li><Link to="/team" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/team" className="hover:text-foreground transition-colors">Team</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-medium mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-foreground/55">
              <li><Link to="/legal" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/legal" className="hover:text-foreground transition-colors">Cookie Policy</Link></li>
              <li><Link to="/security" className="hover:text-foreground transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/55 text-sm">
            © {new Date().getFullYear()} eLearning Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-foreground/55">
            <a href={socials[0].x} className="hover:text-foreground hover:scale-110 transition-transform"><Twitter className="h-5 w-5" /></a>
            <a href={socials[0].linkedin} className="hover:text-foreground hover:scale-110 transition-transform"><Linkedin className="h-5 w-5" /></a>
            <a href={socials[0].instagram} className="hover:text-foreground hover:scale-110 transition-transform"><Instagram className="h-5 w-5" /></a>
            {/* <a href={socials[0].tiktok} className="hover:text-foreground hover:scale-110 transition-transform"><Tiktok className="h-5 w-5" /></a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
