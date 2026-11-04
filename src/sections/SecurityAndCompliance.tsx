import student from "../assets/student.png";
import lecturer from "../assets/lecturer.png";
import coordinator from "../assets/coordinator.png";
import register from "../assets/register.png";
import finance from "../assets/finance.png";
import hostel from "../assets/hostel.png";
import { ScrollReveal, ScrollRevealGroup } from "../components/ScrollReveal";
import Card from "../components/Card";

const datas = [
  {
    title: "AES-256 Encryption",
    subtitle: "Data encrypted in transit (TLS 1.3) and at rest on all storage layers.",
    src: student,
  },
  {
    title: "NDPR Compliant",
    subtitle: "Designed to meet Nigeria Data Protection Regulation requirements.",
    src: lecturer,
  },
  {
    title: "Daily Automated Backups",
    subtitle: "90-day backup retention with point-in-time restore capability.",
    src: coordinator,
  },
  {
    title: "Role-Based Access",
    subtitle: "Granular permissions per module, role, and individual user account.",
    src: register,
  },
  {
    title: "99.9% Uptime SLA",
    subtitle: "Contractually guaranteed with real-time public status monitoring.",
    src: finance,
  },
  {
    title: "On-Premise Option",
    subtitle: "Deploy within your institution's own infrastructure if required.",
    src: hostel,
  },
];

export default function SecurityAndCompliance() {
  return (
    <section
      id="securityAndCompliance"
      className="bg-surface py-10 md:py-20 w-full place-items-center "
    >
      <div className="mx-auto mt- w-full items-center    gap-8 max-w-7xl px-4 md:px-24">
        <ScrollReveal className="flex flex-col justify-center items-start gap-4" preset="soft-blur">
          <p className="mb-3 rounded-full px-3 py-1 text-xs font-jetbrains font-medium tracking-[.14em] bg-[#06BAD61F]">
            Security and Compliance
          </p>
          <h2 className="heading2 max-w-2xl text-3xl  text-[#0B0C0E] md:text-5xl">
            Institutional data deserves enterprise-grade protection.
          </h2>
          <p className="lead text-lg text-text-muted  font-regular leading-7 max-w-2xl">
            When your university's data lives in one place, every question has an instant answer.
            Walk into any senate meeting fully prepared, with real-time reports generated in
            seconds.
          </p>
        </ScrollReveal>
        <ScrollRevealGroup
          className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 gap-1.5"
          staggerChildren={0.08}
          once
        >
          {datas.map((data) => (
            <Card
              key={data.title}
              title={data.title}
              subtitle={data.subtitle}
              src={data.src}
              otherStyles="flex-col"
            />
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
