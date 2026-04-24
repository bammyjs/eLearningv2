import { Hero } from '../components/sections/Hero';
import { ProblemSolution } from '../components/sections/ProblemSolution';
import { SecurityPerformance } from '../components/sections/SecurityPerformance';
import { TeamSection } from '../components/sections/TeamSection';
import { Benefits } from '../components/sections/Benefits';
import { ServiceOverview } from '../components/sections/ServiceOverview';
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
      <ServiceOverview />
      <SecurityPerformance />
      <Benefits />
      <TeamSection />
      <CTA />
    </main>
  );
}
