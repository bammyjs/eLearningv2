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
              Manual academic workflows slow everything down
            </h2>
            
            <p className="text-xl text-zinc-400 leading-relaxed">
              Universities often struggle with slow result processing, inconsistent records, manual approvals, and overloaded administrative teams. Students wait too long for results and clearance, while staff spend hours reconciling data and managing approval chains.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <Card className="bg-background/50 border-white/5 p-5">
                <Clock className="h-8 w-8 text-zinc-500 mb-4" />
                <h4 className="text-white font-medium mb-2">Delayed Results</h4>
                <p className="text-sm text-zinc-500">Weeks of manual processing and reconciliation.</p>
              </Card>
              <Card className="bg-background/50 border-white/5 p-5">
                <Layers className="h-8 w-8 text-zinc-500 mb-4" />
                <h4 className="text-white font-medium mb-2">Fragmented Data</h4>
                <p className="text-sm text-zinc-500">Silos of information across departments.</p>
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
                A unified system for academic records and approvals
              </h2>
              
              <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                The Result Processing System centralizes course registration, result upload, broadsheet generation, transcript requests, clearance, and senate approvals. Every action is tracked, validated, and routed through the right role automatically.
              </p>

              <ul className="space-y-4">
                {[
                  'Automated approval chains (Lecturer → HOD → Dean)',
                  'Centralized broadsheet generation',
                  'Instant GPA/CGPA calculations',
                  'Role-based data validation'
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
