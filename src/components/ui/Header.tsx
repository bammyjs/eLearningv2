import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { useEffect, useState } from 'react';
import { cn } from '../ui/Button';
import { Link, useLocation } from 'react-router-dom';
import elearningLogo from '@/assets/elearningLogo.png';
import elearningLogo2 from '@/assets/logo.png';
import { services } from '../../data/services';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileCompanyOpen(false);
  }, [location.pathname]);

  const serviceLinks = [
    { name: 'All Services', path: '/services' },
    ...services.map((service) => ({
      name: service.shortName,
      path: `/services/${service.slug}`,
    })),
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Careers', path: '/careers' },
  ];

  const isServicesActive = location.pathname === '/services' || location.pathname === '/features' || location.pathname.startsWith('/services/');
  const isCompanyActive = ['/about', '/team', '/careers'].some((path) => location.pathname.startsWith(path));
  const linkClasses = (active: boolean) =>
    cn('transition-colors hover:text-foreground', active ? 'text-foreground font-bold' : 'text-foreground/65');

  return (
    <header className={cn(
      'fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b',
      scrolled ? 'bg-background/85 backdrop-blur-xl border-white/10 shadow-xl' : 'bg-transparent border-transparent'
    )}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="hidden sm:flex items-center gap-2 group">
          <img src={elearningLogo} alt="eLearning" className="h-10 w-full" />
        </Link>
        <Link to="/" className="flex sm:hidden items-center gap-2 group">
          <img src={elearningLogo2} alt="eLearning" className="h-10 w-full" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className={linkClasses(location.pathname === '/')}>
            Home
          </Link>

          <div className="relative group">
            <Link to="/services" className={cn('inline-flex items-center gap-1', linkClasses(isServicesActive))}>
              Services
              <ChevronDown className="h-4 w-4 text-current transition-transform group-hover:rotate-180" />
            </Link>
            <div className="absolute left-0 top-full pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-opacity">
              <div className="min-w-[230px] rounded-2xl border border-foreground/10 bg-background/95 backdrop-blur-xl shadow-xl p-3">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block rounded-xl px-4 py-3 text-foreground/70 hover:bg-foreground/5 hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/security" className={linkClasses(location.pathname === '/security')}>
            Security
          </Link>

          <div className="relative group">
            <Link to="/about" className={cn('inline-flex items-center gap-1', linkClasses(isCompanyActive))}>
              Company
              <ChevronDown className="h-4 w-4 text-current transition-transform group-hover:rotate-180" />
            </Link>
            <div className="absolute left-0 top-full pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-opacity">
              <div className="min-w-[220px] rounded-2xl border border-foreground/10 bg-background/95 backdrop-blur-xl shadow-xl p-3">
                {companyLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block rounded-xl px-4 py-3 text-foreground/70 hover:bg-foreground/5 hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden md:inline-flex">
            <Button size="sm" className="hover:scale-105 transition-transform">Request Demo</Button>
          </Link>
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-foreground/10 bg-surface/80 text-foreground transition-colors hover:bg-surface-light"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          mobileMenuOpen ? 'max-h-fit opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 pb-4">
          <div className="rounded-2xl border border-foreground/10 bg-background/95 backdrop-blur-xl shadow-xl p-4">
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className={cn(
                  'rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                  location.pathname === '/' ? 'bg-primary-500/15 text-foreground' : 'text-foreground/70 hover:bg-foreground/5 hover:text-foreground'
                )}
              >
                Home
              </Link>

              <button
                type="button"
                onClick={() => setMobileServicesOpen((open) => !open)}
                className={cn(
                  'flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                  isServicesActive ? 'bg-primary-500/15 text-foreground' : 'text-foreground/70 hover:bg-foreground/5 hover:text-foreground'
                )}
              >
                <span>Services</span>
                <ChevronDown className={cn('h-4 w-4 transition-transform', mobileServicesOpen && 'rotate-180')} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-3 space-y-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={cn(
                        'block rounded-xl px-4 py-3 text-sm transition-colors',
                        location.pathname === link.path
                          ? 'bg-foreground/5 text-foreground'
                          : 'text-foreground/65 hover:bg-foreground/5 hover:text-foreground'
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                to="/security"
                className={cn(
                  'rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                  location.pathname === '/security' ? 'bg-primary-500/15 text-foreground' : 'text-foreground/70 hover:bg-foreground/5 hover:text-foreground'
                )}
              >
                Security
              </Link>

              <button
                type="button"
                onClick={() => setMobileCompanyOpen((open) => !open)}
                className={cn(
                  'flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                  isCompanyActive ? 'bg-primary-500/15 text-foreground' : 'text-foreground/70 hover:bg-foreground/5 hover:text-foreground'
                )}
              >
                <span>Company</span>
                <ChevronDown className={cn('h-4 w-4 transition-transform', mobileCompanyOpen && 'rotate-180')} />
              </button>
              {mobileCompanyOpen && (
                <div className="pl-3 space-y-2">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={cn(
                        'block rounded-xl px-4 py-3 text-sm transition-colors',
                        location.pathname === link.path
                          ? 'bg-foreground/5 text-foreground'
                          : 'text-foreground/65 hover:bg-foreground/5 hover:text-foreground'
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link to="/contact" className="pt-2">
                <Button size="sm" className="w-full justify-center">Request Demo</Button>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
