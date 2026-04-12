import { Container, Section, Reveal, staggerContainer } from '../ui/Layout';
import { Card } from '../ui/Card';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';
import frontendEngineer from '@/assets/1000220974.jpg';
import cto from '@/assets/IMG-20220429-WA0014.jpg';
import designEngineer from '@/assets/IMG-20260413-WA0006.jpg';
import analyst from '@/assets/IMG_5544.jpeg';


const team = [
  {
    name: 'Mololuwa Ajibade',
    role: 'Chief Technology Officer',
    image: cto,
    socials: {
      linkedin: 'https://www.linkedin.com/in/mololuwa-ajibade',
      x: 'https://twitter.com/AjibadeMololuwa',
      github: 'https://github.com/dreamephraim',
    }    
  },
  {
    name: 'Gbenga Bayode',
    role: 'Frontend Engineer',
    image: frontendEngineer,
    socials: {
      linkedin: 'https://www.linkedin.com/in/gbenga-bayode',
      x: 'https://x.com/bami_dele19',
      github: 'https://github.com/bammyjs',
    } 
  },
  {
    name: 'Olawale Balogun',
    role: 'Design Engineer',
    image: designEngineer,
    socials: {
      linkedin: 'https://www.linkedin.com/in/walebuilds',
      x: 'https://twitter.com/walebuilds_',
      github: 'https://github.com/walebuilds',
    } 
  },
  {
    name: 'Tosin Oyinlola',
    role: 'Data Analyst',
    image: analyst,
    socials: {
      linkedin: 'https://www.linkedin.com/in/oyinlola-oluwatosin-101545127?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      x: 'https://x.com/oyin_ot',
      github: '',
    } 
  }
];

export function TeamSection() {
  return (
    <Section className="bg-surface relative border-y border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-900/10 via-surface to-surface -z-10" />
      <Container>
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Meet the <span className="text-gradient-primary">Experts</span>
          </h2>
          <p className="text-xl text-zinc-400">
            Our team combines decades of experience in enterprise software and higher education administration.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, i) => (
            <motion.div key={i} variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}>
              <Card hoverEffect className="bg-background/60 border-white/5 p-0 overflow-hidden group">
                <div className="aspect-square  overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    loading="lazy"
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-auto object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-[#005ff0] font-medium mb-4">{member.role}</p>
                  <div className="flex items-center justify-center gap-4 text-zinc-500">
                    <a href={member.socials?.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
                    <a href={member.socials?.x} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
                    <a href={member.socials?.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
