import { ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { CTA } from '../components/sections/CTA';
import { Card } from '../components/ui/Card';
import { Container, Reveal } from '../components/ui/Layout';
import { services } from '../data/services';

export default function ServiceDetail() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const service = useMemo(() => services.find((item) => item.slug === slug), [slug]);

  if (!service) {
    return (
      <main className="min-h-screen pt-32 pb-20 bg-background">
        <Container>
          <div className="max-w-3xl mx-auto text-center rounded-3xl border border-foreground/10 bg-surface/70 p-12">
            <h1 className="text-3xl font-heading font-bold text-foreground mb-4">Service not found</h1>
            <p className="text-foreground/70 mb-8">
              The service page you requested is not available right now.
            </p>
            <Link to="/services" className="inline-flex items-center text-primary-300 hover:text-accent-300 transition-colors font-medium">
              Back to services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-background to-background -z-10" />
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] items-start">
            <Reveal className="max-w-3xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-6">
                {service.shortName}
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight text-foreground">
                {service.name}
              </h1>
              <p className="text-xl text-primary-200 mb-4">{service.tagline}</p>
              <p className="text-lg text-foreground/70 leading-relaxed mb-8">{service.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex">
                  <span className="inline-flex items-center rounded-lg bg-brand-royal px-6 py-3 text-sm font-medium text-foreground shadow-[0_0_18px_rgba(0,95,240,0.35)] hover:bg-primary-500 transition-colors">
                    Talk to our team
                  </span>
                </Link>
                <Link to="/services" className="inline-flex items-center text-foreground/70 hover:text-foreground transition-colors font-medium">
                  Back to all services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Card className="bg-surface/75 border-foreground/10 p-8">
                <div className="w-12 h-12 rounded-2xl bg-primary-500/15 text-primary-300 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Service highlights</h2>
                <ul className="space-y-4">
                  {service.heroPoints.map((point) => (
                    <li key={point} className="text-foreground/70 leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-12 md:pb-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full bg-surface/70 border-foreground/10 p-8">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Core modules</h2>
                <div className="space-y-4">
                  {service.modules.map((module) => (
                    <div key={module} className="rounded-2xl border border-foreground/10 bg-background/60 px-4 py-4 text-foreground/70">
                      {module}
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.1}>
              <Card className="h-full bg-surface/70 border-foreground/10 p-8">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Expected outcomes</h2>
                <div className="space-y-4">
                  {service.outcomes.map((outcome) => (
                    <div key={outcome} className="rounded-2xl border border-foreground/10 bg-background/60 px-4 py-4 text-foreground/70">
                      {outcome}
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTA />
    </main>
  );
}
