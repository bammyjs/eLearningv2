import { Button } from '../ui/Button';
import { useEffect, useState } from 'react';
import { cn } from '../ui/Button';
import { Link, useLocation } from 'react-router-dom';
import elearningLogo from '@/assets/elearningLogo.png';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Security', path: '/security' },
    { name: 'Team', path: '/team' },
  ];

  return (
    <header className={cn(
      'fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b',
      scrolled ? 'bg-background/85 backdrop-blur-xl border-white/10 shadow-xl' : 'bg-transparent border-transparent'
    )}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={elearningLogo} alt="eLearning" className="h-10 w-full" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={cn(
                'transition-colors hover:text-foreground',
                location.pathname === link.path ? 'text-foreground font-semibold' : 'text-foreground/65'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/contact">
            <Button size="sm" className="hover:scale-105 transition-transform">Request Demo</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
