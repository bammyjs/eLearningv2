import { Building2, GraduationCap, ShieldCheck, Users } from 'lucide-react';
import { useEffect } from 'react';
import { CTA } from '../components/sections/CTA';
import { TeamSection } from '../components/sections/TeamSection';
import { Card } from '../components/ui/Card';
import { Container, Reveal } from '../components/ui/Layout';

const principles = [
  {
    icon: Building2,
    title: 'Institution-first thinking',
    desc: 'We design for the realities of universities, faculties, registry teams, and academic leadership.',
  },
  {
    icon: GraduationCap,
    title: 'Better academic experience',
    desc: 'Our work is focused on reducing friction for students and staff across critical institutional processes.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted operations',
    desc: 'We value accountability, traceability, and secure digital infrastructure for education systems.',
  },
  {
    icon: Users,
    title: 'Collaborative delivery',
    desc: 'We work closely with institutions to align technology with policy, process, and operational needs.',
  },
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-900/20 via-background to-background -z-10" />
        <Container>
          <Reveal className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-300/10 border border-accent-300/20 text-accent-300 text-sm font-medium mb-6">
              Company
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              About <span className="text-gradient-primary">eLearning</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              eLearning builds digital infrastructure for universities. We help institutions modernize academic
              operations with services that improve portal experience, result workflows, examination processes,
              and institutional visibility.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-12 md:pb-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <Reveal>
              <Card className="bg-surface/75 border-foreground/10 p-8 md:p-10">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Why we exist</h2>
                <div className="space-y-5 text-foreground/70 leading-relaxed">
                  <p>
                    Many institutions still manage important academic processes across disconnected systems, manual
                    approvals, and fragmented records. That affects service delivery, visibility, and confidence in
                    institutional operations.
                  </p>
                  <p>
                    eLearning exists to make those workflows more connected, more accountable, and easier to manage
                    at scale. Our approach balances usability, institutional control, and secure digital operations.
                  </p>
                  <p>
                    We are building for long-term operational maturity, not just one isolated workflow.
                  </p>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid gap-4">
                {principles.map((item) => (
                  <Card key={item.title} className="bg-surface/65 border-foreground/10 p-6">
                    <div className="w-11 h-11 rounded-2xl bg-primary-500/15 text-primary-300 flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-foreground/65 leading-relaxed">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <TeamSection />
      <CTA />
    </main>
  );
}
