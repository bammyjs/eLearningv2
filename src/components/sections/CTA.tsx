import { Container, Section, Reveal } from '../ui/Layout';
import { Button } from '../ui/Button';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CTA() {
  return (
    <Section className="bg-background py-32 md:py-48 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary-900/30 via-background to-background -z-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/20 blur-[150px] rounded-full -z-10 pointer-events-none" />

      <Container className="text-center relative">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-8 leading-[1.1] max-w-4xl mx-auto">
            Ready to modernize <span className="text-gradient">academic operations?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with eLearning to deploy a secure, high-performance result processing system for your university.
          </p>
        </Reveal>

        <Reveal delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact">
          <Button size="lg" className="w-full sm:w-auto group">
            Book a Demo
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          </Link>
          <Link to="/contact">
          <Button  size="lg" variant="secondary" className="w-full sm:w-auto">
            <Mail className="mr-2 h-5 w-5 text-primary-300" />
            Contact Sales
          </Button>
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
