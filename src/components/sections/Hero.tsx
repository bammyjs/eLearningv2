import { ArrowRight, Building2, Lock } from 'lucide-react';
import { Button } from '../ui/Button';
import { Container, Section, Reveal } from '../ui/Layout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import elearningDashboard from '@/assets/elearningDashbord.png';
import DarkVeil from '../ui/DarkVeil';

export function Hero() {
  return (
    <Section className="overflow-hidden bg-white pt-32 pb-20 md:pt-48 md:pb-32 dark:bg-background">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-15 dark:opacity-60 transition-opacity">
        <DarkVeil
          hueShift={15}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
          // resolutionScale={0.75}
        />
      </div>

      <Container className="text-center relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm font-medium text-primary-300 transition-colors hover:bg-slate-200 dark:border-foreground/10 dark:bg-foreground/5 dark:hover:bg-foreground/10">
              <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
              Multi-university academic operations platform
            </div>

            <h1 className="mb-8 text-4xl font-heading font-bold leading-[1.05] tracking-tight text-slate-900 dark:text-foreground md:text-6xl">
              Result and examination operations built for <span className="text-gradient-primary">institutional governance</span>
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-foreground/70 md:text-2xl">
              Deploy a secure, audit-ready workflow for results and examinations across departments, faculties, and leadership teams—without spreadsheet chaos.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full group">
                Book a Demo for Your Institution
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/success-stories/aaua" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full">
                <Building2 className="mr-2 h-5 w-5 text-primary-300" />
                View AAUA success story
              </Button>
            </Link>
          </Reveal>
        </div>

        {/* Dashboard Mockup Image */}
        <Reveal delay={0.55} className="mt-16 md:mt-24 relative">
          <motion.div 
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mx-auto max-w-5xl"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/30 to-accent-300/30 rounded-2xl blur-xl opacity-50 animate-pulse" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-2xl dark:border-foreground/10 dark:bg-surface/70">
              <div className="absolute top-0 z-10 flex h-12 w-full items-center gap-2 border-b border-slate-200 bg-white/80 px-4 backdrop-blur-md dark:border-foreground/10 dark:bg-background/75">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto flex items-center gap-2 rounded bg-slate-100 px-4 py-1 font-mono text-xs text-slate-600 dark:bg-foreground/5 dark:text-foreground/60">
                  <Lock className="w-3 h-3 text-primary-300" />
                  elearning.ng / dashboard
                </div>
              </div>
              <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-slate-50 pt-12 dark:bg-surface">
                <img 
                  src={elearningDashboard} 
                  alt="eLearning platform dashboard"
                  className="w-full h-full object-contain object-top opacity-95 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </Section>
  );
}
