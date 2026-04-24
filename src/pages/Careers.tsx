import { ArrowRight, Briefcase, Mail } from 'lucide-react';
import { useEffect } from 'react';
import { Container, Reveal } from '../components/ui/Layout';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-32 pb-20 relative bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-background to-background -z-10" />
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[720px] h-[320px] bg-primary-500/15 blur-[130px] rounded-full -z-10 pointer-events-none" />

      <Container>
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 text-primary-200 text-sm font-medium mb-8">
              <Briefcase className="w-4 h-4" />
              Careers at eLearning
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
              We Are Not Hiring <span className="text-gradient-primary">At The Moment</span>
            </h1>

            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Thank you for your interest in joining eLearning. Our team is not actively recruiting right now,
              but we are always excited to connect with people who care about improving academic systems for universities.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-stretch">
            <Reveal delay={0.1} className="rounded-3xl border border-foreground/10 bg-surface/80 shadow-2xl p-8 md:p-10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Stay connected with us</h2>
              <p className="text-foreground/70 leading-relaxed mb-8">
                While there are no open roles right now, we welcome thoughtful introductions from people who are passionate about improving university operations through technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full group">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="mailto:hello@elearning.ng" className="w-full sm:w-auto">
                  <Button size="lg" variant="secondary" className="w-full">
                    <Mail className="mr-2 h-5 w-5 text-primary-300" />
                    Send Email
                  </Button>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="rounded-3xl border border-foreground/10 bg-background/70 p-8 md:p-10 shadow-xl">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">What To Expect</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-primary-300 mb-2">Current Status</p>
                  <p className="text-foreground/75 leading-relaxed">There are no open roles at this time.</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-primary-300 mb-2">Future Openings</p>
                  <p className="text-foreground/75 leading-relaxed">New roles will be announced when we begin hiring again.</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-primary-300 mb-2">Best Contact</p>
                  <p className="text-foreground/75 leading-relaxed">
                    Reach us at <a href="mailto:hello@elearning.ng" className="text-primary-300 hover:text-accent-300 transition-colors">hello@elearning.ng</a>.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </main>
  );
}
