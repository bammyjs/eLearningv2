import student from "../assets/student.png";
import lecturer from "../assets/lecturer.png";
import coordinator from "../assets/coordinator.png";
import register from "../assets/register.png";
import finance from "../assets/finance.png";
import hostel from "../assets/hostel.png";
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "../components/ScrollReveal";

const datas = [
  {
    title: "Role-based access control",
    subtitle: "Fine-grained permissions, down to the field level, enforced across every module.",
    src: student,
  },
  {
    title: "Complete audit logging",
    subtitle: "Every change, approval and access is recorded with actor, timestamp and reason.",
    src: lecturer,
  },
  {
    title: "Secure document handling",
    subtitle: "Encrypted uploads, transcripts, and QR-verified official documents.",
    src: coordinator,
  },
  {
    title: "Encryption at rest & in transit",
    subtitle: "Student and financial data is encrypted end-to-end, on every module, by default.",
    src: register,
  },
  {
    title: "Configurable data residency",
    subtitle:
      "Deploy on cloud or on-premise, with hosting location matched to your institution's policy.",
    src: finance,
  },
  {
    title: "99.9% uptime SLA",
    subtitle: "Backed by a dedicated support line and daily automated backups.",
    src: hostel,
  },
];

export default function SecurityAndTrust() {
  return (
    <section
      id="securityAndTrust"
      className="bg-surface  py-5 md:py-10 px-2 md:px-20 w-full place-items-center "
    >
      {/*Built for all Role */}
      <div className="relative mx-auto w-full items-center border gap-8 max-w-7xl overflow-hidden rounded-3xl bg-base-black p-5 md:p-24">
        <div aria-hidden="true" className="mask-radial pointer-events-none absolute inset-0" />
        <ScrollReveal
          className="relative z-10 flex flex-col justify-center items-start gap-3"
          preset="soft-blur"
        >
          <p className="my-2 rounded-full px-3 py-1 text-xs text-white font-jetbrains font-medium tracking-[.14em] bg-[#06BAD61F]">
            Security & Trust
          </p>
          <h2 className="heading2 max-w-2xl text-2xl  text-white md:text-5xl">
            Built to hold institutional data responsibly.
          </h2>
          <p className="lead text-base md:text-lg text-subtle  font-regular leading-7 max-w-2xl">
            Configured to the standards African HEIs are actually audited against — not a generic
            enterprise checklist.
          </p>
        </ScrollReveal>
        <ScrollRevealGroup
          className="relative z-10 w-full bg-base-white/10 rounded-3xl mt-10 grid grid-cols-1 md:grid-cols-3 gap-1.5 "
          staggerChildren={0.1}
        >
          {datas.map((data) => (
            <ScrollRevealItem
              key={data.title}
              preset="fade-up"
              className="flex flex-col p-4 gap-4 md:p-10 md:gap rounded-3xl "
            >
              <img
                loading="lazy"
                src={data.src}
                alt={data.title}
                className="w-10.5 h-10.5 rounded-full "
              />
              <div className="flex flex-col gap-2">
                <h3 className="font-bogoss font-medium text-base-white text-sm md:text-lg">
                  {data.title}
                </h3>
                <p className="font-saans font-medium text-text-disable text-xs md:text-sm">
                  {data.subtitle}
                </p>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
