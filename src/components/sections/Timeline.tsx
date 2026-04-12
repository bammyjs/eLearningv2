import { Container, Section, Reveal } from '../ui/Layout';
import { Database, Users, Rocket, Globe } from 'lucide-react';

const steps = [
  {
    icon: Database,
    title: 'System setup and data onboarding',
    desc: 'We migrate your existing records and configure the platform for your institution.',
  },
  {
    icon: Users,
    title: 'Training for lecturers, HODs, registry, and ICT staff',
    desc: 'Comprehensive onboarding to ensure all stakeholders are confident.',
  },
  {
    icon: Rocket,
    title: 'Pilot deployment for selected departments',
    desc: 'Testing the workflow in real-world scenarios with a focused group.',
  },
  {
    icon: Globe,
    title: 'Full rollout across the institution',
    desc: 'Go live campus-wide with full support and continuous monitoring.',
  },
];

export function Timeline() {
  return (
    <Section className="bg-surface relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary-900/10 via-surface to-surface -z-10" />
      <Container>
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            A practical rollout plan
          </h2>
          <p className="text-xl text-zinc-400">
            We ensure a smooth transition with minimal disruption to ongoing academic activities.
          </p>
        </Reveal>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 0.2} className={`relative flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                
                {/* Timeline node */}
                <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-surface border-4 border-background -translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)] shadow-primary-500/20">
                  <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center">
                    <step.icon className="w-4 h-4 text-primary-400" />
                  </div>
                </div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 w-full md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                  <div className="glass-panel p-6 rounded-2xl relative group hover:border-primary-500/30 transition-colors">
                    <div className="text-primary-400 text-sm font-bold mb-2 uppercase tracking-wider">Step {i + 1}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
