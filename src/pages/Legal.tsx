import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Layout from "../components/layouts/Layout";
import { ScrollReveal } from "../components/ScrollReveal";
import { legalPolicies, privacyPolicy, type LegalPolicy } from "../data/legalPolicies";

export default function Legal() {
  const [openPolicyId, setOpenPolicyId] = useState<LegalPolicy["id"] | null>("privacy");
  const [activePolicy, setActivePolicy] = useState<LegalPolicy>(privacyPolicy);
  const [activeSection, setActiveSection] = useState(privacyPolicy.sections[0].title);

  const selectPolicy = (policy: LegalPolicy) => {
    setActivePolicy(policy);
    setActiveSection(policy.sections[0].title);
    document.getElementById("legal-document")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const selectSection = (policy: LegalPolicy, section: string) => {
    setActivePolicy(policy);
    setActiveSection(section);
    window.requestAnimationFrame(() => {
      document.getElementById(`legal-${policy.id}-${section}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <Layout>
      <section className="w-full bg-brand-base/20 px-4 py-10 md:py-20 ">
        <ScrollReveal
          className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-3 text-center"
          preset="soft-blur"
        >
          <p className="rounded-full bg-[#06BAD61F] px-3 py-1 font-jetbrains text-xs font-medium tracking-[.14em] text-text-default">
            LEGAL
          </p>
          <h1 className="heading2 max-w-5xl text-4xl leading-[1.05] text-text-default md:text-6xl">
            Our legal documents and policies.
          </h1>
          <p className="lead max-w-2xl text-base leading-7 text-text-muted md:text-lg">
            Plain-language summaries precede each section. The full legal text follows. If you have
            questions about any of these documents, contact us at legal@elearning.ng.
          </p>
        </ScrollReveal>
      </section>

      <section className="w-full bg-surface px-4 py-16 md:px-24 md:py-20">
        <div className="mx-auto grid w-full max-w-7xl  items-start gap-10 lg:grid-cols-[288px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-20" aria-label="Legal document navigation">
            <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_7px_24px_rgba(31,53,81,0.04)]">
              <div className="h-3 bg-[#cfe0ff]" />
              {legalPolicies.map((policy) => {
                const isOpen = openPolicyId === policy.id;
                const isActive = activePolicy.id === policy.id;

                return (
                  <div key={policy.id} className="border-t border-slate-100 first:border-t-0">
                    <button
                      type="button"
                      onClick={() => {
                        selectPolicy(policy);
                        setOpenPolicyId((openId) => (openId === policy.id ? null : policy.id));
                      }}
                      className={`flex w-full items-center justify-between px-5 py-4 text-left font-bogoss text-base font-medium transition-colors hover:bg-slate-50 ${isActive ? "text-text-default" : "text-text-muted"}`}
                      aria-expanded={isOpen}
                    >
                      {policy.title}
                      <ChevronDown
                        className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <nav className="px-5 pb-3" aria-label={`${policy.title} sections`}>
                        {policy.sections.map((section) => (
                          <button
                            key={section.title}
                            type="button"
                            onClick={() => selectSection(policy, section.title)}
                            className={`block w-full py-1 text-left font-saans text-sm transition-colors ${isActive && activeSection === section.title ? "font-medium text-text-default underline underline-offset-2" : "text-text-disable hover:text-text-default"}`}
                          >
                            {section.title}
                          </button>
                        ))}
                      </nav>
                    )}
                  </div>
                );
              })}
            </div>
          </aside>

          <article id="legal-document" className="min-w-0 scroll-mt-28 pb-4" aria-live="polite">
            <header className="border-b border-[#cfd6dd] pb-7">
              <h2 className="heading2 text-4xl leading-none text-text-default md:text-[46px]">
                {activePolicy.title}
              </h2>
              <p className="mt-5 font-saans text-sm leading-5 text-text-muted">
                Effective date:
                <br />
                <span className="font-medium text-text-default">{activePolicy.effectiveDate}</span>
              </p>
            </header>

            <div className="pt-10">
              {activePolicy.sections.map((section, index) => (
                <section
                  id={`legal-${activePolicy.id}-${section.title}`}
                  key={section.title}
                  className="scroll-mt-28 pb-11 last:pb-0"
                >
                  <h3 className="heading2 text-2xl leading-tight text-text-default">
                    {index + 1}. {section.title}
                  </h3>
                  <div className="mt-5 space-y-4 font-saans text-sm leading-[1.45] text-text-muted md:text-[15px]">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
}
