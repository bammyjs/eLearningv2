import { Container, Section, Reveal } from '../ui/Layout';
import { Card } from '../ui/Card';
import { Clock, AlertTriangle, Layers, Zap, CheckCircle, ShieldCheck } from 'lucide-react';

export function ProblemSolution() {
  return (
    <Section className="bg-surface relative border-y border-white/5">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Problem Side */}
          <Reveal delay={0.1} className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-4">
              <AlertTriangle className="mr-2 h-4 w-4" />
              The Challenge
            </div>
            
            <h2 className="text-4xl font-bold leading-tight">
              Fragmented academic systems create unnecessary friction
            </h2>
            
            <p className="text-xl text-zinc-400 leading-relaxed">
              Universities often juggle disconnected portals, examination processes, result workflows, and manual approvals. That leaves students waiting, staff reconciling records by hand, and leadership without clear operational visibility.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <Card className="bg-background/50 border-white/5 p-5">
                <Clock className="h-8 w-8 text-zinc-500 mb-4" />
                <h4 className="text-white font-medium mb-2">Slow Service Delivery</h4>
                <p className="text-sm text-zinc-500">Critical student and staff tasks take longer than they should.</p>
              </Card>
              <Card className="bg-background/50 border-white/5 p-5">
                <Layers className="h-8 w-8 text-zinc-500 mb-4" />
                <h4 className="text-white font-medium mb-2">Disconnected Processes</h4>
                <p className="text-sm text-zinc-500">Departments rely on siloed tools and inconsistent records.</p>
              </Card>
            </div>
          </Reveal>

          {/* Solution Side */}
          <Reveal delay={0.3} className="relative">
            <div className="absolute inset-0 bg-primary-500/10 blur-[100px] rounded-full" />
            <Card className="relative z-10 border-primary-500/20 shadow-[0_0_50px_-12px_rgba(99,102,241,0.2)] p-10 bg-surface/90">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-300 text-sm font-medium mb-6">
                <Zap className="mr-2 h-4 w-4" />
                The Solution
              </div>
              
              <h2 className="text-3xl font-bold leading-tight mb-6">
                One platform for portal, results, and examination operations
              </h2>
              
              <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                eLearning brings institutional portal workflows, result processing, and examination operations into one coordinated environment. Every action is structured, visible, and routed through the right people with stronger control and less manual overhead.
              </p>

              <ul className="space-y-4">
                {[
                  'Connected workflows across portal, result, and examination services',
                  'Role-based approvals for academic and administrative teams',
                  'Centralized records with stronger visibility and accountability',
                  'A better digital experience for students, staff, and leadership'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0" />
                    <span className="text-zinc-200">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

        </div>
      </Container>
    </Section>
  );
}
