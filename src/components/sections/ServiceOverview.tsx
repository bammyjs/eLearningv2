import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import { Card } from '../ui/Card';
import { Container, Reveal, Section } from '../ui/Layout';

export function ServiceOverview() {
  return (
    <Section className="bg-surface relative border-y border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/10 via-surface to-surface -z-10" />
      <Container>
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-6">
            Services
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
            Purpose-built services for <span className="text-gradient-primary">modern institutions</span>
          </h2>
          <p className="text-xl text-foreground/70">
            eLearning supports universities with a focused suite of services that improve student experience,
            academic operations, and institutional control.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.slug} className="h-full">
              <Card hoverEffect className="h-full bg-background/70 border-foreground/10 p-8">
                <div className="w-12 h-12 rounded-2xl bg-primary-500/15 text-primary-300 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{service.shortName}</h3>
                <p className="text-foreground/65 leading-relaxed mb-6">{service.summary}</p>
                <ul className="space-y-3 mb-8">
                  {service.heroPoints.slice(0, 2).map((point) => (
                    <li key={point} className="text-sm text-foreground/65 leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center text-primary-300 hover:text-accent-300 transition-colors font-medium"
                >
                  Explore service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            View all services and shared platform capabilities
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
