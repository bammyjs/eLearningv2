import { Container, Reveal } from '../components/ui/Layout';
import { Button } from '../components/ui/Button';
import { AlertCircle, CheckCircle2, LoaderCircle, Mail, MapPin, Phone } from 'lucide-react';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { ContactSubmission, isSupabaseConfigured, supabase } from '../lib/supabase';

const initialFormState: ContactSubmission = {
  university_name: '',
  first_name: '',
  last_name: '',
  work_email: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactSubmission>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError('');
    setSubmitSuccess('');

    if (Object.values(formData).some((value) => !value.trim())) {
      setSubmitError('Please complete all fields before sending your message.');
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.from('contact_submissions').insert({
      university_name: formData.university_name.trim(),
      first_name: formData.first_name.trim(),
      last_name: formData.last_name.trim(),
      work_email: formData.work_email.trim(),
      message: formData.message.trim(),
    });

    setIsSubmitting(false);

    if (error) {
      setSubmitError(error.message || 'We could not send your message right now. Please try again.');
      return;
    }

    setFormData(initialFormState);
    setSubmitSuccess('Thanks, your message has been received. Our team will get back to you shortly.');
  };

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
              <form className="space-y-6" onSubmit={handleSubmit}>
                {!isSupabaseConfigured && (
                  <div className="rounded-xl border border-amber-400/25 bg-amber-400/10 px-4 py-3 text-sm text-amber-200">
                    Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` to `.env.local` to activate submissions.
                  </div>
                )}

                {submitError && (
                  <div className="flex items-start gap-3 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>{submitError}</span>
                  </div>
                )}

                {submitSuccess && (
                  <div className="flex items-start gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>{submitSuccess}</span>
                  </div>
                )}

                <div className="space-y-2">
                  <label htmlFor="university_name" className="text-sm font-medium text-foreground/80">University Name</label>
                  <input id="university_name" name="university_name" type="text" value={formData.university_name} onChange={handleChange} className="w-full bg-surface-light border border-foreground/10 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/35 focus:outline-none focus:ring-2 focus:ring-primary-500/40" placeholder="e.g. State University" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first_name" className="text-sm font-medium text-foreground/80">First Name</label>
                    <input id="first_name" name="first_name" type="text" value={formData.first_name} onChange={handleChange} className="w-full bg-surface-light border border-foreground/10 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/35 focus:outline-none focus:ring-2 focus:ring-primary-500/40" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last_name" className="text-sm font-medium text-foreground/80">Last Name</label>
                    <input id="last_name" name="last_name" type="text" value={formData.last_name} onChange={handleChange} className="w-full bg-surface-light border border-foreground/10 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/35 focus:outline-none focus:ring-2 focus:ring-primary-500/40" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="work_email" className="text-sm font-medium text-foreground/80">Work Email</label>
                  <input id="work_email" name="work_email" type="email" value={formData.work_email} onChange={handleChange} className="w-full bg-surface-light border border-foreground/10 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/35 focus:outline-none focus:ring-2 focus:ring-primary-500/40" placeholder="john@university.edu" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                  <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full bg-surface-light border border-foreground/10 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/35 focus:outline-none focus:ring-2 focus:ring-primary-500/40 resize-none" placeholder="How can we help?" />
                </div>
                <Button size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
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
                  <a href="mailto:hello@elearning.ng" className="text-primary-300 hover:text-accent-300 transition-colors">hello@elearning.ng</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-300/10 flex items-center justify-center flex-shrink-0 text-accent-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">Our HQ</h3>
                  <p className="text-foreground/70 mb-1">Come say hello at our office HQ.</p>
                  <span className="text-foreground/80">4, Morenikeji Street<br/>Ogba,Ikeja, Lagos, Nigeria.</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0 text-primary-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">Phone</h3>
                  <p className="text-foreground/70 mb-1">Mon-Fri from 8am to 5pm.</p>
                  <a href="tel:+2347043669754" className="text-primary-300 hover:text-accent-300 transition-colors">+2347043669754</a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </main>
  );
}
