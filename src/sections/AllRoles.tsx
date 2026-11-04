import student from "../assets/student.png";
import lecturer from "../assets/lecturer.png";
import coordinator from "../assets/coordinator.png";
import register from "../assets/register.png";
import finance from "../assets/finance.png";
import hostel from "../assets/hostel.png";
import hod from "../assets/hod.png";
import bcos from "../assets/bcos.png";
import superAdmin from "../assets/superAdmin.png";
import { ScrollReveal, ScrollRevealGroup } from "../components/ScrollReveal";
import Card from "../components/Card";

const datas = [
  {
    title: "Student",
    subtitle:
      "Applies, registers, pays fees, tracks every request and sees their full academic journey.",
    src: student,
  },
  {
    title: "Lecturer",
    subtitle: "Manages course rosters, uploads results and communicates with students.",
    src: lecturer,
  },
  {
    title: "Coordinator",
    subtitle: "Allocates courses and levels, builds timetables, approves registration changes.",
    src: coordinator,
  },
  {
    title: "Register Office",
    subtitle: "Reviews applicants, admits students, manages bio-data and transcript requests.",
    src: register,
  },
  {
    title: "Finance Staff",
    subtitle: "Builds fee schedules, reconciles payments, reviews loan applications.",
    src: finance,
  },
  {
    title: "Hostel Admin",
    subtitle: "Manages bedspace inventory, applicant lists and occupancy reporting.",
    src: hostel,
  },
  {
    title: "Dean/ HOD",
    subtitle: "Approves requests in their chain, views faculty dashboards and reports.",
    src: hod,
  },
  {
    title: "BCOS",
    subtitle: "Deploy within your institution's own infrastructure if required.",
    src: bcos,
  },
  {
    title: "Super Admin",
    subtitle: "Configures workflows, roles and system-wide settings with full audit visibility.",
    src: superAdmin,
  },
];

export default function AllRoles() {
  return (
    <section id="allRoles" className="bg-surface py-10 md:py-20 w-full place-items-center ">
      {/*Built for all Role */}
      <div className="mx-auto mt- w-full items-center    gap-8 max-w-7xl px-4 md:px-24">
        <ScrollReveal className="flex flex-col justify-center items-start gap-4" preset="soft-blur">
          <p className="mb-3 rounded-full px-3 py-1 text-xs font-jetbrains font-medium tracking-[.14em] bg-[#06BAD61F]">
            Built for every role
          </p>
          <h2 className="heading2 max-w-2xl text-3xl  text-[#0B0C0E] md:text-5xl">
            The same platform, a different view for everyone.
          </h2>
          <p className="lead text-lg text-text-muted  font-regular leading-7 max-w-2xl">
            Every role sees exactly what they need nothing they don't through permissions that are
            set once and enforced everywhere.
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
