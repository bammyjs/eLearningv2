import { Hero } from '../components/sections/Hero';
import { ProblemSolution } from '../components/sections/ProblemSolution';
import { UserRoles } from '../components/sections/UserRoles';
import { KeyFeatures } from '../components/sections/KeyFeatures';
import { RoleFeatures } from '../components/sections/RoleFeatures';
import { SecurityPerformance } from '../components/sections/SecurityPerformance';
import { TeamSection } from '../components/sections/TeamSection';
import { Benefits } from '../components/sections/Benefits';
import { Timeline } from '../components/sections/Timeline';
import { CTA } from '../components/sections/CTA';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <UserRoles />
      <KeyFeatures />
      {/* <RoleFeatures /> */}
      <SecurityPerformance />
      <TeamSection />
      <Benefits />
      <Timeline />
      <CTA />
    </main>
  );
}
