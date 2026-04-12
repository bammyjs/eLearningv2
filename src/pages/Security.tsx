import { SecurityPerformance } from '../components/sections/SecurityPerformance';
import { Benefits } from '../components/sections/Benefits';
import { Timeline } from '../components/sections/Timeline';
import { CTA } from '../components/sections/CTA';
import { useEffect } from 'react';

export default function Security() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-20">
      <div className="py-20 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-background to-background -z-10" />
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Enterprise <span className="text-gradient">Security</span></h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Your academic data is protected by industry-leading security standards.</p>
      </div>
      <SecurityPerformance />
      <Benefits />
      <Timeline />
      <CTA />
    </main>
  );
}
