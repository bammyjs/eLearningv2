import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Container, Reveal } from '../components/ui/Layout';
import { Card } from '../components/ui/Card';

const solutions = [
  {
    title: 'For Registrars',
    summary: 'Reduce bottlenecks in results, records, approvals, and transcript workflows with structured governance.',
    outcomes: ['Audit-ready broadsheets', 'Faster approvals', 'Cleaner institutional records'],
    to: '/contact?persona=registrar',
  },
  {
    title: 'For Exams & Records',
    summary: 'Coordinate examination operations and result integrity with clearer ownership and traceable controls.',
    outcomes: ['Operational oversight', 'Controlled release', 'Reduced manual reconciliation'],
    to: '/contact?persona=exams-records',
  },
  {
    title: 'For ICT Directors',
    summary: 'Deploy without disrupting existing infrastructure, with role-based access, security posture, and integration support.',
    outcomes: ['Secure access controls', 'Integration readiness', 'Scalable multi-department rollout'],
    to: '/contact?persona=ict-director',
  },
  {
    title: 'For Lecturers',
    summary: 'Improve grade submission speed and accuracy with validation, workflows, and fewer back-and-forth corrections.',
    outcomes: ['Structured submissions', 'Fewer errors', 'Clear correction loop'],
    to: '/contact?persona=lecturer',
  },
  {
    title: 'For Students',
    summary: 'Deliver a cleaner academic experience: portal access, registration flows, and result visibility without confusion.',
    outcomes: ['Faster access', 'Clear status visibility', 'Less friction on key tasks'],
    to: '/contact?persona=student',
  },
];

export default function Solutions() {
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
              Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight text-foreground">
              A platform mapped to <span className="text-gradient-primary">university roles</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              eLearning helps different stakeholders solve their specific operational problems, while keeping governance, security,
              and accountability consistent institution-wide.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-12 md:pb-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {solutions.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <Card hoverEffect className="h-full bg-surface/70 border-foreground/10 p-8">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary-300">Solution</p>
                  <h2 className="mt-4 text-2xl font-heading font-bold text-foreground">{item.title}</h2>
                  <p className="mt-4 text-foreground/70 leading-relaxed">{item.summary}</p>
                  <ul className="mt-6 space-y-3">
                    {item.outcomes.map((outcome) => (
                      <li key={outcome} className="text-sm text-foreground/70 leading-relaxed">
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={item.to}
                    className="mt-8 inline-flex items-center text-primary-300 hover:text-accent-300 transition-colors font-medium"
                  >
                    Book a demo for this role
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

