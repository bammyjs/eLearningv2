import { ArrowRight, Building2, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Container, Section, Reveal } from '../ui/Layout';

const examSessionVideo =
  'https://res.cloudinary.com/bamtech1/video/upload/v1777143985/elearning/20260325_095349_hlstbf.mp4';

export function CaseStudyTeaser() {
  return (
    <Section className="bg-slate-50 py-20 md:py-28 relative overflow-hidden dark:bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary-900/20 via-background to-background -z-10" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-primary-300">Flagship proof</p>
              <h2 className="mt-4 text-3xl md:text-5xl font-heading font-bold leading-tight text-foreground">
                See a real exam session using the platform
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/72">
                Decision-makers need proof that the platform works in real institutional conditions. AAUA is our flagship deployment, and
                we use it to demonstrate governance, integrity, and adoption.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link to="/success-stories/aaua" className="inline-flex">
                  <span className="inline-flex items-center rounded-lg bg-brand-royal px-6 py-3 text-sm font-medium text-foreground shadow-[0_0_18px_rgba(0,95,240,0.35)] hover:bg-primary-500 transition-colors">
                    View AAUA success story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
                <Link to="/services/examination" className="inline-flex items-center text-foreground/70 hover:text-foreground transition-colors font-medium">
                  Explore examination service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="overflow-hidden border-slate-200 bg-white p-4 shadow-[0_34px_100px_-45px_rgba(0,0,0,0.18)] dark:border-foreground/10 dark:bg-surface/70 dark:shadow-[0_34px_100px_-45px_rgba(0,0,0,0.68)]">
              <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-foreground/10 dark:bg-background/55">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-500/15 text-primary-300">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">AAUA (flagship)</p>
                    <p className="text-xs text-foreground/60">Live examination session footage</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary-300">
                  <PlayCircle className="h-4 w-4" />
                  Video
                </div>
              </div>
              <div className="mt-4 overflow-hidden rounded-2xl border border-foreground/10 bg-black">
                <video src={examSessionVideo} controls playsInline preload="none" className="h-[320px] w-full object-cover" />
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
