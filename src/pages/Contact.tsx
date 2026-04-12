import { Container, Section, Reveal } from '../components/ui/Layout';
import { Button } from '../components/ui/Button';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-background to-background -z-10" />
      
      <Container>
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Contact <span className="text-gradient-primary">Sales</span></h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Ready to modernize your university's academic workflows? Get in touch with our team today.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12">
            <Reveal delay={0.1} className="glass-panel p-8 rounded-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">University Name</label>
                  <input type="text" className="w-full bg-surface-light border border-foreground/10 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/35 focus:outline-none focus:ring-2 focus:ring-primary-500/40" placeholder="e.g. State University" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">First Name</label>
                    <input type="text" className="w-full bg-surface-light border border-foreground/10 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/35 focus:outline-none focus:ring-2 focus:ring-primary-500/40" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Last Name</label>
                    <input type="text" className="w-full bg-surface-light border border-foreground/10 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/35 focus:outline-none focus:ring-2 focus:ring-primary-500/40" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Work Email</label>
                  <input type="email" className="w-full bg-surface-light border border-foreground/10 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/35 focus:outline-none focus:ring-2 focus:ring-primary-500/40" placeholder="john@university.edu" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Message</label>
                  <textarea rows={4} className="w-full bg-surface-light border border-foreground/10 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/35 focus:outline-none focus:ring-2 focus:ring-primary-500/40 resize-none" placeholder="How can we help?" />
                </div>
                <Button size="lg" className="w-full">Send Message</Button>
              </form>
            </Reveal>

            <Reveal delay={0.3} className="space-y-8 flex flex-col justify-center">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0 text-primary-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">Email Us</h3>
                  <p className="text-foreground/70 mb-1">Our friendly team is here to help.</p>
                  <a href="mailto:hello@elearning.com" className="text-primary-300 hover:text-accent-300 transition-colors">hello@elearning.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-300/10 flex items-center justify-center flex-shrink-0 text-accent-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">Our HQ</h3>
                  <p className="text-foreground/70 mb-1">Come say hello at our office HQ.</p>
                  <span className="text-foreground/80">100 Tech Hub Avenue<br/>Innovation City, CA 94043</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0 text-primary-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">Phone</h3>
                  <p className="text-foreground/70 mb-1">Mon-Fri from 8am to 5pm.</p>
                  <a href="tel:+15550000000" className="text-primary-300 hover:text-accent-300 transition-colors">+1 (555) 000-0000</a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </main>
  );
}
