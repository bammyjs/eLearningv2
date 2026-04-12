import { Container, Section, Reveal, staggerContainer } from '../ui/Layout';
import { Card } from '../ui/Card';
import { Users, GraduationCap, Briefcase, Building, Landmark, Settings, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const roles = [
  { icon: GraduationCap, title: 'Students', desc: 'Course registration, results, clearance' },
  { icon: Briefcase, title: 'Lecturers', desc: 'Result upload, error validation' },
  { icon: Building, title: 'HODs', desc: 'Course allocation, workload review' },
  { icon: Activity, title: 'Level Coordinators', desc: 'Result vetting, academic tracking' },
  { icon: Landmark, title: 'Deans', desc: 'Faculty oversight, approvals' },
  { icon: Users, title: 'Senate / BCS', desc: 'Final academic endorsements' },
  { icon: Settings, title: 'ICT / Admin Units', desc: 'System management, access control' }
];

export function UserRoles() {
  return (
    <Section className="bg-background">
      <Container>
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Role-based access for <span className="text-gradient">every stakeholder</span>
          </h2>
          <p className="text-xl text-zinc-400">
            Each user sees only the tools and data relevant to their role.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {roles.map((role, i) => (
            <motion.div key={i} variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}>
              <Card hoverEffect className="h-full flex flex-col items-center text-center p-6 border-white/5 bg-surface/50">
                <div className="h-12 w-12 rounded-full bg-primary-500/10 flex items-center justify-center mb-4 text-primary-400">
                  <role.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{role.title}</h3>
                <p className="text-sm text-zinc-500">{role.desc}</p>
              </Card>
            </motion.div>
          ))}
          
          <motion.div variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}>
            <Card hoverEffect className="h-full flex flex-col items-center justify-center text-center p-6 border-dashed border-2 border-white/10 bg-transparent">
              <h3 className="text-lg font-medium text-zinc-400 mb-2">And more...</h3>
              <p className="text-sm text-zinc-600">Custom roles available</p>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
