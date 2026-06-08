import {Twitter, Linkedin, Instagram, } from 'lucide-react';
import elearningMark from '@/assets/logo.png';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';

export function Footer() {

  const socials = [
    {
      linkedin: 'https://www.linkedin.com/company/elearningng',
      x: 'https://twitter.com/elearning_ng',
      instagram: 'https://www.instagram.com/elearning_ng/',
      tiktok: 'https://www.tiktok.com/@elearning_ng',
    },
  ];
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 md:py-16 dark:bg-surface dark:border-foreground/10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 group">
              <img src={elearningMark} alt="eLearning" className="h-11 w-11" />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-heading font-bold tracking-tight text-slate-900 dark:text-foreground">eLearning</span>
                <span className="mt-1 text-[11px] uppercase tracking-[0.28em] text-primary-500">Solutions</span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-foreground/70">
              Modernizing university operations with secure, scalable services across portals, result workflows, and examination management.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 font-medium text-slate-900 dark:text-foreground">Services</h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-foreground/55">
              <li><Link to="/services" className="transition-colors hover:text-slate-900 dark:hover:text-foreground">All Services</Link></li>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="transition-colors hover:text-slate-900 dark:hover:text-foreground">
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 font-medium text-slate-900 dark:text-foreground">Company</h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-foreground/55">
              <li><Link to="/about" className="transition-colors hover:text-slate-900 dark:hover:text-foreground">About Us</Link></li>
              <li><Link to="/team" className="transition-colors hover:text-slate-900 dark:hover:text-foreground">Team</Link></li>
              <li><Link to="/careers" className="transition-colors hover:text-slate-900 dark:hover:text-foreground">Careers</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-slate-900 dark:hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 font-medium text-slate-900 dark:text-foreground">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-foreground/55">
              <li><Link to="/legal" className="transition-colors hover:text-slate-900 dark:hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/legal" className="transition-colors hover:text-slate-900 dark:hover:text-foreground">Terms of Service</Link></li>
              {/* <li><Link to="/legal" className="hover:text-foreground transition-colors">Cookie Policy</Link></li> */}
              <li><Link to="/security" className="transition-colors hover:text-slate-900 dark:hover:text-foreground">Security</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600 dark:text-foreground/55">
            © {new Date().getFullYear()} eLearning Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-600 dark:text-foreground/55">
            <a href={socials[0].x} className="transition-transform hover:scale-110 hover:text-slate-900 dark:hover:text-foreground"><Twitter className="h-5 w-5" /></a>
            <a href={socials[0].linkedin} className="transition-transform hover:scale-110 hover:text-slate-900 dark:hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
            <a href={socials[0].instagram} className="transition-transform hover:scale-110 hover:text-slate-900 dark:hover:text-foreground"><Instagram className="h-5 w-5" /></a>
            {/* <a href={socials[0].tiktok} className="hover:text-foreground hover:scale-110 transition-transform"><Tiktok className="h-5 w-5" /></a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
