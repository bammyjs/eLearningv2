import { Container, Section, Reveal } from '../ui/Layout';
import { Shield, Key, Database, Server, Smartphone, Lock } from 'lucide-react';
import { Card } from '../ui/Card';

export function SecurityPerformance() {
  return (
    <Section className="bg-surface border-y border-white/5 relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent-600/10 blur-[120px] rounded-full -z-10" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium">
              <Shield className="mr-2 h-4 w-4" />
              Enterprise-Grade Security
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Built for security, speed, and scale
            </h2>
            
            <p className="text-xl text-zinc-400 leading-relaxed">
              The system is designed with secure authentication methods including WebAuthn passkeys, TOTP, and 2FA. It uses encrypted storage, role-based access control, secure session handling, and detailed audit logs. The platform is optimized for peak academic periods and supports desktop, tablet, and mobile access.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Key, title: 'Secure Login', desc: 'WebAuthn & 2FA' },
                { icon: Lock, title: 'Access Control', desc: 'Strict role boundaries' },
                { icon: Database, title: 'Encrypted Storage', desc: 'Data protected at rest' },
                { icon: Server, title: 'High Availability', desc: 'Handles peak load' },
                { icon: Shield, title: 'Audit Logs', desc: 'Complete activity tracking' },
                { icon: Smartphone, title: 'Cross-Device', desc: 'Responsive interface' },
              ].map((item, i) => (
                <Card key={i} hoverEffect className="bg-background/50 border-white/5 p-6 flex flex-col items-start">
                  <div className="h-10 w-10 rounded-lg bg-surface flex items-center justify-center mb-4 border border-white/5">
                    <item.icon className="h-5 w-5 text-primary-400" />
                  </div>
                  <h4 className="text-white font-medium mb-1">{item.title}</h4>
                  <p className="text-sm text-zinc-500">{item.desc}</p>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
