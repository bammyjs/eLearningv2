import { Container, Reveal } from '../components/ui/Layout';
import { Button } from '../components/ui/Button';
import { AlertCircle, CheckCircle2, LoaderCircle, Mail, MapPin, Phone } from 'lucide-react';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { ContactSubmission, isSupabaseConfigured, supabase } from '../lib/supabase';
import { useLocation } from 'react-router-dom';

const initialFormState: ContactSubmission = {
  university_name: '',
  first_name: '',
  last_name: '',
  work_email: '',
  message: '',
};

type LeadDetails = {
  role: string;
  enrollment: string;
  painPoint: string;
  timeline: string;
  modules: string[];
};

const initialLeadDetails: LeadDetails = {
  role: '',
  enrollment: '',
  painPoint: '',
  timeline: '',
  modules: [],
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactSubmission>(initialFormState);
  const [leadDetails, setLeadDetails] = useState<LeadDetails>(initialLeadDetails);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const persona = params.get('persona');
    if (!persona) {
      return;
    }

    const personaToRole: Record<string, string> = {
      registrar: 'Registrar / Records',
      'exams-records': 'Exams & Records',
      'ict-director': 'ICT / IT Leadership',
      lecturer: 'Lecturer / Department',
      student: 'Student Affairs / Student',
    };

    const preset = personaToRole[persona];
    if (!preset) {
      return;
    }

    setLeadDetails((current) => (current.role ? current : { ...current, role: preset }));
  }, [location.search]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setLeadDetails((current) => ({ ...current, [name]: value }));
  };

  const toggleModule = (module: string) => {
    setLeadDetails((current) => {
      const hasModule = current.modules.includes(module);
      return {
        ...current,
        modules: hasModule ? current.modules.filter((item) => item !== module) : [...current.modules, module],
      };
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError('');
    setSubmitSuccess('');

    if (!supabase) {
      setSubmitError('Demo requests are not available right now. Please try again shortly.');
      return;
    }

    if (!formData.university_name.trim() || !formData.first_name.trim() || !formData.last_name.trim() || !formData.work_email.trim()) {
      setSubmitError('Please complete all required fields before booking a demo.');
      return;
    }

    if (!leadDetails.role || !leadDetails.enrollment || !leadDetails.painPoint || !leadDetails.timeline) {
      setSubmitError('Please complete your demo requirements so we can prepare the right walkthrough.');
      return;
    }

    setIsSubmitting(true);

    const composedMessage = [
      formData.message.trim() || 'Demo request submitted.',
      '',
      '--- Demo context ---',
      `Role: ${leadDetails.role}`,
      `Enrollment: ${leadDetails.enrollment}`,
      `Primary pain point: ${leadDetails.painPoint}`,
      `Timeline: ${leadDetails.timeline}`,
      `Modules of interest: ${leadDetails.modules.length ? leadDetails.modules.join(', ') : 'Not specified'}`,
    ].join('\n');

    const { error } = await supabase.from('contact_submissions').insert({
      university_name: formData.university_name.trim(),
      first_name: formData.first_name.trim(),
      last_name: formData.last_name.trim(),
      work_email: formData.work_email.trim(),
      message: composedMessage,
    });

    setIsSubmitting(false);

    if (error) {
      setSubmitError(error.message || 'We could not send your message right now. Please try again.');
      return;
    }

    setFormData(initialFormState);
    setLeadDetails(initialLeadDetails);
    setSubmitSuccess('Thanks, your demo request has been received. Our team will get back to you shortly.');
  };

  return (
    <main className="min-h-screen pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-background to-background -z-10" />
      
      <Container>
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Book a <span className="text-gradient-primary">Demo</span></h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Tell us about your institution and your primary bottleneck. We will prepare a walkthrough that matches your governance and rollout needs.
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
                    <label htmlFor="role" className="text-sm font-medium text-foreground/80">Your Role</label>
                    <select id="role" name="role" value={leadDetails.role} onChange={handleSelectChange} className="w-full bg-surface-light border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500/40">
                      <option value="">Select role</option>
                      <option value="Registrar / Records">Registrar / Records</option>
                      <option value="Exams & Records">Exams & Records</option>
                      <option value="ICT / IT Leadership">ICT / IT Leadership</option>
                      <option value="Dean / Faculty leadership">Dean / Faculty leadership</option>
                      <option value="Lecturer / Department">Lecturer / Department</option>
                      <option value="Student Affairs / Student">Student Affairs / Student</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="enrollment" className="text-sm font-medium text-foreground/80">Enrollment</label>
                    <select id="enrollment" name="enrollment" value={leadDetails.enrollment} onChange={handleSelectChange} className="w-full bg-surface-light border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500/40">
                      <option value="">Select range</option>
                      <option value="Below 5,000">Below 5,000</option>
                      <option value="5,000–15,000">5,000–15,000</option>
                      <option value="15,000–30,000">15,000–30,000</option>
                      <option value="30,000+">30,000+</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="painPoint" className="text-sm font-medium text-foreground/80">Primary pain point</label>
                    <select id="painPoint" name="painPoint" value={leadDetails.painPoint} onChange={handleSelectChange} className="w-full bg-surface-light border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500/40">
                      <option value="">Select</option>
                      <option value="Result delays">Result delays</option>
                      <option value="Manual GPA/CGPA calculation">Manual GPA/CGPA calculation</option>
                      <option value="Examination integrity / supervision">Examination integrity / supervision</option>
                      <option value="Transcript bottlenecks">Transcript bottlenecks</option>
                      <option value="Approval and governance visibility">Approval and governance visibility</option>
                      <option value="Security and access control">Security and access control</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="timeline" className="text-sm font-medium text-foreground/80">Timeline</label>
                    <select id="timeline" name="timeline" value={leadDetails.timeline} onChange={handleSelectChange} className="w-full bg-surface-light border border-foreground/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary-500/40">
                      <option value="">Select</option>
                      <option value="Immediately (0–30 days)">Immediately (0–30 days)</option>
                      <option value="This semester (1–3 months)">This semester (1–3 months)</option>
                      <option value="This session (3–6 months)">This session (3–6 months)</option>
                      <option value="Exploring (6+ months)">Exploring (6+ months)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground/80">Modules of interest</p>
                  <div className="grid grid-cols-2 gap-3">
                    {['Institutional Portal', 'Result Processing', 'Examination Management', 'Transcript / Registry'].map((module) => {
                      const checked = leadDetails.modules.includes(module);
                      return (
                        <button
                          key={module}
                          type="button"
                          onClick={() => toggleModule(module)}
                          className={`rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
                            checked
                              ? 'border-primary-500/30 bg-primary-500/10 text-foreground'
                              : 'border-foreground/10 bg-surface-light text-foreground/75 hover:bg-surface'
                          }`}
                          aria-pressed={checked}
                        >
                          {module}
                        </button>
                      );
                    })}
                  </div>
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
                    'Request Demo'
                  )}
                </Button>
              </form>
            </Reveal>

            <Reveal delay={0.3} className="space-y-8 flex flex-col justify-center">
              <div className="rounded-2xl border border-foreground/10 bg-surface/70 p-7">
                <p className="text-sm uppercase tracking-[0.18em] text-primary-300">What happens next</p>
                <div className="mt-6 space-y-4">
                  {[
                    'A 30-minute discovery call to understand your current workflow and stakeholders',
                    'A guided demo mapped to your governance model and rollout timeline',
                    'A recommended rollout path by module (start small, expand when ready)',
                    'A follow-up plan for onboarding, training, and institutional support',
                  ].map((step) => (
                    <div key={step} className="flex items-start gap-3 rounded-xl border border-foreground/10 bg-background/55 px-4 py-4">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary-300" />
                      <p className="text-sm leading-relaxed text-foreground/75">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

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
