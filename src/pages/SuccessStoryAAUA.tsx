import { ArrowRight, BadgeCheck, Building2, ClipboardCheck, FileSpreadsheet, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Container, Reveal } from '../components/ui/Layout';
import { Card } from '../components/ui/Card';
import { CTA } from '../components/sections/CTA';
import portalDashboard from '../assets/elearningDashbord.png';

const examSessionVideo =
  'https://res.cloudinary.com/bamtech1/video/upload/v1777143985/elearning/20260325_095349_hlstbf.mp4';

export default function SuccessStoryAAUA() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm font-medium mb-6">
              <Building2 className="h-4 w-4" />
              Success story
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight text-foreground">
              Flagship deployment at <span className="text-gradient-primary">AAUA</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Adekunle Ajasin University adopted eLearning to strengthen academic governance, improve process integrity, and reduce
              friction across portal access, result workflows, and examination operations.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="inline-flex w-full sm:w-auto">
                <span className="inline-flex w-full items-center justify-center rounded-lg bg-brand-royal px-6 py-3 text-sm font-medium text-foreground shadow-[0_0_18px_rgba(0,95,240,0.35)] hover:bg-primary-500 transition-colors">
                  Book a demo for your institution
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
              <Link to="/services/examination" className="inline-flex items-center text-foreground/70 hover:text-foreground transition-colors font-medium">
                View the examination solution
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: LayoutDashboard,
                title: 'Institutional portal experience',
                desc: 'Role-based access for students and staff, with structured workflows and clearer visibility.',
              },
              {
                icon: FileSpreadsheet,
                title: 'Result processing governance',
                desc: 'Controlled uploads, validation, moderation, and approval readiness with traceable records.',
              },
              {
                icon: ClipboardCheck,
                title: 'Examination operations integrity',
                desc: 'Operational checkpoints, oversight, and real session workflows that support compliance.',
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <Card className="h-full border-foreground/10 bg-surface/70 p-8" hoverEffect>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/15 text-primary-300">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-foreground">{item.title}</h2>
                  <p className="mt-4 text-foreground/70 leading-relaxed">{item.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <Reveal>
              <div className="overflow-hidden rounded-[36px] border border-foreground/10 bg-surface/70 shadow-[0_34px_100px_-45px_rgba(0,0,0,0.68)]">
                <div className="border-b border-foreground/10 bg-background/60 px-6 py-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-primary-300">Live usage</p>
                  <h2 className="mt-2 text-2xl font-heading font-bold text-foreground">Students using the examination software</h2>
                </div>
                <div className="bg-black">
                  <video src={examSessionVideo} controls playsInline preload="none" className="w-full h-[420px] object-cover" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="space-y-4">
                <Card className="border-foreground/10 bg-surface/70 p-8">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary-300">What institutions care about</p>
                  <div className="mt-6 space-y-4">
                    {[
                      'Role-based access and accountable workflow ownership',
                      'Audit-ready records for approvals, corrections, and releases',
                      'Operational visibility across departments and leadership',
                      'Support for institutional rollout and staff onboarding',
                    ].map((point) => (
                      <div key={point} className="flex gap-3 rounded-2xl border border-foreground/10 bg-background/60 px-4 py-4">
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary-300" />
                        <p className="text-sm leading-relaxed text-foreground/72">{point}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="border-primary-500/20 bg-[linear-gradient(135deg,rgba(0,95,240,0.16),rgba(21,23,48,0.96))] p-8">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary-200">Metrics</p>
                  <p className="mt-4 text-foreground/80 leading-relaxed">
                    If you want measurable outcomes and rollout details, we share the full operational baseline and post-deployment
                    changes during a demo session.
                  </p>
                </Card>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-12 md:pb-20">
        <Container>
          <Reveal>
            <div className="grid gap-6 rounded-[36px] border border-foreground/10 bg-surface/70 p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-primary-300">Example interface</p>
                <h2 className="mt-4 text-3xl font-heading font-bold text-foreground">Clean dashboards that support accountability</h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/72">
                  The platform provides clear role-specific experiences so teams can execute workflows without confusion and leadership
                  can review progress without chasing manual updates.
                </p>
              </div>
              <div className="overflow-hidden rounded-[28px] border border-foreground/10 bg-background/60">
                <img src={portalDashboard} alt="eLearning dashboard" className="h-[360px] w-full object-cover object-top" loading="lazy" />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTA
        title="See how eLearning fits your institution"
        description="Book a demo to review your current workflow, pain points, and the fastest rollout path for your teams."
        primaryLabel="Book a demo"
        secondaryLabel="Contact sales"
      />
    </main>
  );
}
