import { Container, Section, Reveal } from '../ui/Layout';
import { Card } from '../ui/Card';
import { CheckCircle, GraduationCap, Briefcase, Building } from 'lucide-react';
import { motion } from 'framer-motion';

export function RoleFeatures() {
  return (
    <Section className="bg-background relative">
      <Container className="space-y-32 ">
        {/* Student Features */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-primary-500/10 blur-[80px] rounded-full" />
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative aspect-square md:aspect-[4/3] rounded-2xl border border-white/10 bg-surface/80 overflow-hidden shadow-2xl flex items-center justify-center"
            >
              <img 
                src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20student%20portal%20dashboard%20ui%20showing%20GPA%20and%20course%20registration%20dark%20mode%20clean%20interface&image_size=landscape_4_3" 
                alt="Student Portal Dashboard"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </Reveal>
          <Reveal className="order-1 lg:order-2 space-y-6">
            <div className="h-12 w-12 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400 mb-6">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              A simpler academic experience for students
            </h2>
            <ul className="space-y-4 mt-8">
              {[
                'Register only for eligible and paid semesters',
                'View clean result cards with course breakdowns',
                'Calculate GPA and CGPA automatically',
                'Download results as branded PDFs',
                'Start clearance requests online',
                'Track transcript requests in real time'
              ].map((point, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0" />
                  <span className="text-lg text-zinc-300">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Lecturer Features */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal className="space-y-6">
            <div className="h-12 w-12 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-400 mb-6">
              <Briefcase className="h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Fast result entry and fewer errors
            </h2>
            <ul className="space-y-4 mt-8">
              {[
                'Download prefilled Excel templates',
                'Upload results with real-time validation',
                'Detect missing IDs and invalid scores instantly',
                'Receive notifications for corrections',
                'Support multiple approval stages without confusion'
              ].map((point, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent-400 mr-3 flex-shrink-0" />
                  <span className="text-lg text-zinc-300">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="relative">
            <div className="absolute inset-0 bg-accent-500/10 blur-[80px] rounded-full" />
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: -5, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative aspect-square md:aspect-[4/3] rounded-2xl border border-white/10 bg-surface/80 overflow-hidden shadow-2xl"
            >
              <img 
                src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20teacher%20portal%20dashboard%20ui%20showing%20excel%20upload%20and%20grades%20dark%20mode%20clean%20interface&image_size=landscape_4_3" 
                alt="Lecturer Portal Dashboard"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </Reveal>
        </div>

        {/* HOD / Admin Features */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-primary-500/10 blur-[80px] rounded-full" />
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative aspect-square md:aspect-[4/3] rounded-2xl border border-white/10 bg-surface/80 overflow-hidden shadow-2xl"
            >
              <img 
                src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20university%20admin%20dashboard%20ui%20showing%20course%20allocation%20and%20statistics%20dark%20mode&image_size=landscape_4_3" 
                alt="HOD Admin Dashboard"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </Reveal>
          <Reveal className="order-1 lg:order-2 space-y-6">
            <div className="h-12 w-12 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400 mb-6">
              <Building className="h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Oversight tools for departments and administration
            </h2>
            <ul className="space-y-4 mt-8">
              {[
                'Allocate courses per semester',
                'Assign level coordinators',
                'Review lecturer workload',
                'Monitor enrollment numbers',
                'Trigger approval chains automatically',
                'Manage graduation eligibility checks'
              ].map((point, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-400 mr-3 flex-shrink-0" />
                  <span className="text-lg text-zinc-300">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

      </Container>
    </Section>
  );
}
