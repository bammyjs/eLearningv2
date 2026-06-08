import { ArrowRight, Briefcase, Building2, GraduationCap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Container, Section, Reveal } from '../ui/Layout';

const roleTeasers = [
  {
    icon: Building2,
    title: 'Registrars',
    desc: 'Reduce approval bottlenecks and improve record integrity with structured broadsheets and audit-ready workflows.',
  },
  {
    icon: Briefcase,
    title: 'Exams & Records',
    desc: 'Coordinate examination operations and result release with oversight, traceability, and clearer ownership.',
  },
  {
    icon: ShieldCheck,
    title: 'ICT Directors',
    desc: 'Deploy without disruption, with role-based access, security posture, and integration readiness.',
  },
  {
    icon: GraduationCap,
    title: 'Students & Staff',
    desc: 'Deliver cleaner portal access and self-service flows while governance and controls remain consistent.',
  },
];

export function SolutionsTeaser() {
  return (
    <Section className="bg-white py-20 md:py-28 relative overflow-hidden dark:bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-background to-background -z-10" />
      <Container>
        <div className="flex flex-col gap-12">
          <Reveal className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-primary-300">Solutions</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-heading font-bold leading-tight text-foreground">
              Speak to each stakeholder with clarity
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/72">
              Universities buy with governance in mind. This platform is positioned by role, while remaining one integrated institutional system.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {roleTeasers.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <Card className="h-full border-foreground/10 bg-surface/70 p-7" hoverEffect>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/15 text-primary-300">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/70">{item.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal className="flex">
            <Link to="/solutions" className="inline-flex items-center text-primary-300 hover:text-accent-300 transition-colors font-medium">
              Explore solutions by role
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
