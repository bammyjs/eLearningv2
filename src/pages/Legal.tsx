import { Container, Section, Reveal } from '../components/ui/Layout';
import { useEffect } from 'react';

export default function Legal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-32 pb-20 relative bg-background text-zinc-300">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/10 via-background to-background -z-10" />
      <Container className="max-w-4xl">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-bold mb-12 text-white">Legal & Privacy</h1>
          <div className="prose prose-invert max-w-none space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              <p className="leading-relaxed">
                At eLearning, we take your privacy seriously. We only collect the data necessary to provide and improve our Result Processing System. 
                All academic records are encrypted at rest and in transit, and we never share institutional data with third parties without explicit consent.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We comply with all standard academic data protection regulations.</li>
                <li>Your data is hosted in secure, redundant environments.</li>
                <li>We provide full data export capabilities for your institution at any time.</li>
              </ul>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Terms of Service</h2>
              <p className="leading-relaxed">
                By using our platform, you agree to these terms. Our software is provided "as is" and we are committed to maintaining 99.9% uptime. 
                Universities are responsible for managing access roles and ensuring authorized use of the system.
              </p>
            </section>

            {/* <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Cookie Policy</h2>
              <p className="leading-relaxed">
                We use strictly necessary cookies to keep you logged in and secure your session. 
                We do not use tracking or advertising cookies on the core Result Processing System platform.
              </p>
            </section> */}
          </div>
        </Reveal>
      </Container>
    </main>
  );
}
