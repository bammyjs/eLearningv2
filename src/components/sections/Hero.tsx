import { ArrowRight, Lock, PlayCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Container, Section, Reveal } from '../ui/Layout';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import elearningDashboard from '@/assets/elearningDashbord.png';
import DarkVeil from '../ui/DarkVeil';

const heroSlides = [
  {
    eyebrow: 'Modernizing Academic Workflows',
    title: 'Academic Result Processing for',
    highlight: 'Modern Universities',
    description:
      'eLearning automates course registration, result processing, transcripts, clearance, and approval workflows in one secure platform.',
  },
  {
    eyebrow: 'Operational Efficiency for Campus Teams',
    title: 'Registration and Clearance Built for',
    highlight: 'Campus Operations',
    description:
      'Streamline student onboarding, academic validation, departmental sign-offs, and graduation clearance with fewer manual bottlenecks.',
  },
  {
    eyebrow: 'Trusted Student Service Delivery',
    title: 'Secure Transcript Requests and Approvals at',
    highlight: 'Institutional Scale',
    description:
      'Deliver faster transcript fulfillment, transparent approval routing, and audit-ready record management for students, staff, and senate teams.',
  },
];

export function Hero() {
  const containerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, []);

  const currentSlide = heroSlides[activeSlide];

  return (
    <Section ref={containerRef} className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Effects */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/40 via-background to-background -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/20 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(231, 237, 245, 0.2) 1px, transparent 0)",
          backgroundSize: "14px 14px",
        }}
      />
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
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
        <div className="max-w-4xl mx-auto min-h-[420px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-primary-200 text-sm font-medium mb-8 hover:bg-foreground/10 transition-colors">
                <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
                {currentSlide.eyebrow}
              </div>

              <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-8 leading-[1.1]">
                {currentSlide.title} <span className="text-gradient">{currentSlide.highlight}</span>
              </h1>

              <p className="text-xl md:text-2xl text-foreground/70 mb-10 max-w-3xl mx-auto leading-relaxed">
                {currentSlide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-3 mb-12">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.highlight}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeSlide
                    ? 'w-10 bg-brand-royal'
                    : 'w-2.5 bg-foreground/25 hover:bg-foreground/45'
                }`}
              />
            ))}
          </div>
        </div>

        <Reveal delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="w-full sm:w-auto">
            <Button size="lg" className="w-full group">
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/features" className="w-full sm:w-auto">
            <Button size="lg" variant="secondary" className="w-full">
              <PlayCircle className="mr-2 h-5 w-5 text-primary-300" />
              View Features
            </Button>
          </Link>
        </Reveal>

        {/* Dashboard Mockup Image */}
        <Reveal delay={0.5} className="mt-20 md:mt-32 relative">
          <motion.div 
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mx-auto max-w-5xl"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/30 to-accent-300/30 rounded-2xl blur-xl opacity-50 animate-pulse" />
            <div className="relative glass-panel rounded-2xl overflow-hidden border border-foreground/10 shadow-2xl">
              <div className="h-12 border-b border-foreground/10 flex items-center px-4 gap-2 bg-background/75 backdrop-blur-md absolute top-0 w-full z-10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto px-4 py-1 rounded bg-foreground/5 text-xs text-foreground/60 font-mono flex items-center gap-2">
                  <Lock className="w-3 h-3 text-primary-300" />
                  elearning-dashboard
                </div>
              </div>
              <div className="aspect-[16/9] bg-surface relative overflow-hidden flex items-center justify-center pt-12">
                <img 
                  src={elearningDashboard} 
                  alt="Result Processing Dashboard"
                  className="w-full h-full object-contain object-top opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </Section>
  );
}
