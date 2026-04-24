import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { KeyFeatures } from '../components/sections/KeyFeatures';
import { CTA } from '../components/sections/CTA';
import { Card } from '../components/ui/Card';
import { Container, Reveal } from '../components/ui/Layout';
import { services } from '../data/services';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-background to-background -z-10" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[720px] h-[320px] bg-primary-500/15 blur-[120px] rounded-full -z-10 pointer-events-none" />
        <Container>
          <Reveal className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-6">
              Services
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Services built for <span className="text-gradient">digital universities</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              eLearning supports institutions with focused services across portal experience, result processing,
              and examination operations, all backed by one secure platform.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-12 md:pb-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.08}>
                <Card hoverEffect className="h-full bg-surface/70 border-foreground/10 p-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary-500/15 text-primary-300 flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-3">{service.name}</h2>
                  <p className="text-primary-200 text-sm font-medium mb-4">{service.tagline}</p>
                  <p className="text-foreground/65 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.modules.slice(0, 4).map((module) => (
                      <li key={module} className="text-sm text-foreground/65 leading-relaxed">
                        {module}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center text-primary-300 hover:text-accent-300 transition-colors font-medium"
                  >
                    View service page
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <KeyFeatures />
      <CTA />
    </main>
  );
}
