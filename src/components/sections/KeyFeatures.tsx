import { Container, Section, Reveal, staggerContainer } from '../ui/Layout';
import { Card } from '../ui/Card';
import { LayoutDashboard } from 'lucide-react';
import { motion } from 'framer-motion';
import { sharedPlatformCapabilities } from '../../data/services';

export function KeyFeatures() {
  return (
    <Section className="bg-surface relative border-y border-black/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/10 via-surface to-surface -z-10" />
      <Container>
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-300/10 border border-foreground/10 text-accent-300 text-sm font-medium mb-6">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Shared Platform Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
            The foundation behind every <span className="text-gradient">eLearning service</span>
          </h2>
          <p className="text-xl text-foreground/70">
            Core capabilities that support portal experiences, result workflows, and examination operations across the institution.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {sharedPlatformCapabilities.map((feature, i) => (
            <motion.div key={i} variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
            }}>
              <Card hoverEffect className="h-full bg-background/60 border-foreground/10 group">
                <div className="h-10 w-10 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center mb-5 group-hover:bg-primary-500/20 group-hover:border-primary-500/40 transition-colors">
                  <feature.icon className="h-5 w-5 text-foreground/60 group-hover:text-primary-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/55 leading-relaxed">{feature.desc}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
