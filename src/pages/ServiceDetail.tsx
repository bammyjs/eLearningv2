import { ArrowRight, BadgeCheck, Sparkles } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { CTA } from '../components/sections/CTA';
import { Card } from '../components/ui/Card';
import { Container, Reveal } from '../components/ui/Layout';
import { services } from '../data/services';

export default function ServiceDetail() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const service = useMemo(() => services.find((item) => item.slug === slug), [slug]);

  if (!service) {
    return (
      <main className="min-h-screen pt-32 pb-20 bg-background">
        <Container>
          <div className="max-w-3xl mx-auto text-center rounded-3xl border border-foreground/10 bg-surface/70 p-12">
            <h1 className="text-3xl font-heading font-bold text-foreground mb-4">Service not found</h1>
            <p className="text-foreground/70 mb-8">
              The service page you requested is not available right now.
            </p>
            <Link to="/services" className="inline-flex items-center text-primary-300 hover:text-accent-300 transition-colors font-medium">
              Back to services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  const [firstGalleryImage, secondGalleryImage] = service.media.gallery;

  return (
    <main className="min-h-screen pt-20">
      <section className="relative overflow-hidden pb-12 pt-16 md:pt-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(0,95,240,0.2),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(231,237,245,0.08),_transparent_35%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[540px] bg-[linear-gradient(180deg,rgba(8,12,28,0.9),rgba(8,12,28,0))]" />
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <Reveal className="max-w-2xl pt-4">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-3 py-1 text-sm font-medium text-primary-300">
                <Sparkles className="h-4 w-4" />
                {service.shortName}
              </div>
              <h1 className="mb-6 max-w-[12ch] text-4xl font-heading font-bold leading-[0.98] tracking-[-0.03em] text-foreground md:text-6xl">
                {service.name}
              </h1>
              <p className="mb-4 max-w-xl text-xl text-primary-200">{service.tagline}</p>
              <p className="mb-8 max-w-[62ch] text-lg leading-relaxed text-foreground/70">{service.description}</p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/contact" className="inline-flex">
                  <span className="inline-flex items-center rounded-lg bg-brand-royal px-6 py-3 text-sm font-medium text-foreground shadow-[0_0_18px_rgba(0,95,240,0.35)] transition-colors hover:bg-primary-500">
                    Talk to our team
                  </span>
                </Link>
                <Link to="/services" className="inline-flex items-center font-medium text-foreground/70 transition-colors hover:text-foreground">
                  Back to all services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
                <div className="relative overflow-hidden rounded-[36px] border border-foreground/10 bg-surface/70 shadow-[0_34px_100px_-45px_rgba(0,0,0,0.68)]">
                  <img
                    src={service.media.image}
                    alt={service.media.imageAlt}
                    className="h-[580px] w-full object-cover"
                    style={{ objectPosition: service.media.imagePosition ?? 'center' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08101f] via-[#08101f]/15 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex items-center rounded-full border border-white/15 bg-[#0c1531d9] px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-primary-200">
                    {service.media.eyebrow}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="rounded-3xl border border-white/10 bg-[#0c1531d9] p-5 backdrop-blur-md">
                      <p className="text-sm uppercase tracking-[0.18em] text-primary-200">Institutional view</p>
                      <p className="mt-2 text-2xl font-heading font-semibold text-white">{service.media.label}</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[30px] border border-foreground/10 bg-surface/70 p-6 shadow-[0_24px_70px_-44px_rgba(0,0,0,0.75)]">
                    <p className="text-xs uppercase tracking-[0.22em] text-primary-300">Governance priorities</p>
                    <div className="mt-6 space-y-5">
                      {service.heroPoints.map((point, index) => (
                        <div key={point} className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-primary-500/20 bg-primary-500/10 text-sm font-semibold text-primary-200">
                            0{index + 1}
                          </div>
                          <p className="text-sm leading-relaxed text-foreground/76">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                    <div className="relative overflow-hidden rounded-[28px] border border-foreground/10 bg-surface/70 shadow-[0_24px_70px_-44px_rgba(0,0,0,0.68)]">
                      <img
                        src={firstGalleryImage.src}
                        alt={firstGalleryImage.alt}
                        className="h-[180px] w-full object-cover"
                        style={{ objectPosition: firstGalleryImage.position ?? 'center' }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#091123] via-[#091123]/15 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-primary-200">Deployment context</p>
                        <p className="mt-2 text-sm leading-relaxed text-white/90">{firstGalleryImage.caption}</p>
                      </div>
                    </div>

                    {service.media.video ? (
                      <div className="rounded-[28px] border border-foreground/10 bg-surface/70 p-4 shadow-[0_24px_70px_-44px_rgba(0,0,0,0.68)]">
                        <p className="text-xs uppercase tracking-[0.18em] text-primary-200">{service.media.video.label}</p>
                        <p className="mt-2 text-sm leading-relaxed text-foreground/72">{service.media.video.description}</p>
                        <div className="mt-4 overflow-hidden rounded-[22px] border border-white/10 bg-black">
                          <video
                            src={service.media.video.src}
                            controls
                            playsInline
                            preload="metadata"
                            className="h-[180px] w-full object-cover"
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                    ) : (
                      <div className="relative overflow-hidden rounded-[28px] border border-foreground/10 bg-surface/70 shadow-[0_24px_70px_-44px_rgba(0,0,0,0.68)]">
                        <img
                          src={secondGalleryImage.src}
                          alt={secondGalleryImage.alt}
                          className="h-[180px] w-full object-cover"
                          style={{ objectPosition: secondGalleryImage.position ?? 'center' }}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#091123] via-[#091123]/15 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-primary-200">Stakeholder readiness</p>
                          <p className="mt-2 text-sm leading-relaxed text-white/90">{secondGalleryImage.caption}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <div className="rounded-[36px] border border-foreground/10 bg-[linear-gradient(180deg,rgba(14,20,48,0.92),rgba(10,14,32,0.82))] p-6 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.82)] lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <Reveal>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-primary-300">Enterprise controls</p>
                  <h2 className="mt-4 max-w-xl text-3xl font-heading font-bold leading-tight text-foreground md:text-4xl">
                    Built for institutions that need structure, oversight, and accountable delivery
                  </h2>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/72">
                    The experience is framed around governance, coordinated ownership, and reliable execution across departments, registry teams, and leadership.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="grid gap-4 md:grid-cols-3">
                  {service.proofPoints.map((item, index) => (
                    <Card key={item.title} className="h-full border-white/10 bg-white/[0.03] p-6 shadow-none" hoverEffect>
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary-500/20 bg-primary-500/10 text-lg font-heading font-semibold text-primary-200">
                        0{index + 1}
                      </div>
                      <h3 className="text-xl font-heading font-bold text-foreground">{item.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-foreground/72">{item.description}</p>
                    </Card>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <Reveal>
              <div className="rounded-[34px] border border-foreground/10 bg-surface/70 p-8 shadow-[0_24px_70px_-48px_rgba(0,0,0,0.72)]">
                <p className="text-sm uppercase tracking-[0.18em] text-primary-300">Control framework</p>
                <h2 className="mt-3 max-w-md text-2xl font-heading font-bold text-foreground md:text-3xl">
                  {service.media.previewTitle}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-foreground/72">
                  {service.media.previewDescription}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid gap-4 md:grid-cols-3">
                {service.media.previewPoints.map((point, index) => (
                  <div
                    key={point}
                    className="rounded-[28px] border border-foreground/10 bg-surface/60 p-6 shadow-[0_24px_70px_-52px_rgba(0,0,0,0.72)]"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-primary-300">Control 0{index + 1}</p>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/74">{point}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-12 md:pb-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr]">
            <Reveal>
              <Card className="h-full border-foreground/10 bg-surface/70 p-8 shadow-[0_24px_70px_-48px_rgba(0,0,0,0.72)]">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-primary-300">Operational scope</p>
                    <h2 className="mt-3 text-2xl font-heading font-bold text-foreground">Core modules</h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/15 text-primary-300">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="space-y-4">
                  {service.modules.map((module, index) => (
                    <div key={module} className="rounded-2xl border border-foreground/10 bg-background/60 px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-primary-300">Module {index + 1}</p>
                      <p className="mt-2 text-foreground/74">{module}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid gap-8">
                <Card className="h-full border-foreground/10 bg-surface/70 p-8 shadow-[0_24px_70px_-48px_rgba(0,0,0,0.72)]">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary-300">Expected outcomes</p>
                  <h2 className="mt-3 text-2xl font-heading font-bold text-foreground">Institutional impact</h2>
                  <div className="mt-6 space-y-4">
                    {service.outcomes.map((outcome) => (
                      <div key={outcome} className="flex gap-3 rounded-2xl border border-foreground/10 bg-background/60 px-4 py-4">
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary-300" />
                        <p className="text-sm leading-relaxed text-foreground/72">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="overflow-hidden border-primary-500/20 bg-[linear-gradient(135deg,rgba(0,95,240,0.16),rgba(21,23,48,0.96))] p-8 shadow-[0_24px_70px_-48px_rgba(0,0,0,0.75)]">
                  <p className="text-sm uppercase tracking-[0.18em] text-primary-200">Primary stakeholders</p>
                  <h2 className="mt-3 text-2xl font-heading font-bold text-foreground">Designed for cross-functional institutional use</h2>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {service.audiences.map((audience) => (
                      <span
                        key={audience}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground/80"
                      >
                        {audience}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTA
        title={`Plan your ${service.shortName.toLowerCase()} rollout with eLearning`}
        description={`Work with our team to define the right governance model, delivery approach, and institutional rollout path for ${service.name.toLowerCase()}.`}
        primaryLabel="Book a strategy call"
        secondaryLabel="Speak with our team"
      />
    </main>
  );
}
