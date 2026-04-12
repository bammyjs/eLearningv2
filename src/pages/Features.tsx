import { KeyFeatures } from '../components/sections/KeyFeatures';
import { RoleFeatures } from '../components/sections/RoleFeatures';
import { ProblemSolution } from '../components/sections/ProblemSolution';
import { CTA } from '../components/sections/CTA';
import { useEffect } from 'react';

export default function Features() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-20">
      <div className="py-20 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-background to-background -z-10" />
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Platform <span className="text-gradient">Features</span></h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Discover how our Result Processing System transforms university operations from the ground up.</p>
      </div>
      <ProblemSolution />
      <KeyFeatures />
      {/* <RoleFeatures /> */}
      <CTA />
    </main>
  );
}
