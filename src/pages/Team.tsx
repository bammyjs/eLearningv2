import { TeamSection } from '../components/sections/TeamSection';
import { UserRoles } from '../components/sections/UserRoles';
import { CTA } from '../components/sections/CTA';
import { useEffect } from 'react';

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-20">
      <div className="py-20 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-900/20 via-background to-background -z-10" />
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our <span className="text-gradient">Team</span></h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Built by experts in education technology and enterprise software.</p>
      </div>
      <TeamSection />
      <UserRoles />
      <CTA />
    </main>
  );
}
