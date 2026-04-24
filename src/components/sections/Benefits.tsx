import { Container, Section, Reveal, staggerContainer } from '../ui/Layout';
import { Card } from '../ui/Card';
import { TrendingUp, CheckCircle, Zap, ShieldCheck, Clock, Users, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  { icon: Zap, title: 'Faster service delivery across key academic workflows' },
  { icon: CheckCircle, title: 'Fewer manual errors' },
  { icon: Users, title: 'Better transparency for students and staff' },
  { icon: ShieldCheck, title: 'Stronger control over institutional records' },
  { icon: Clock, title: 'Less administrative waiting and follow-up' },
  { icon: TrendingUp, title: 'Reduced administrative bottlenecks' },
  { icon: Building2, title: 'Better trust in institutional processes' },
];

export function Benefits() {
  return (
    <Section className="bg-background">
      <Container>
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What universities <span className="text-gradient-primary">gain</span>
          </h2>
          <p className="text-xl text-zinc-400">
            A more coordinated digital operating model for students, staff, and institutional leadership.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {benefits.map((benefit, i) => (
            <motion.div key={i} variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className={i === benefits.length - 1 ? 'lg:col-span-3' : ''}
            >
              <Card hoverEffect className={`h-full bg-surface/50 border-white/5 flex items-center p-6 ${i === benefits.length - 1 ? 'justify-center text-center' : ''}`}>
                <benefit.icon className="h-8 w-8 text-primary-400 mr-4 flex-shrink-0" />
                <span className="text-lg font-medium text-zinc-200">{benefit.title}</span>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
