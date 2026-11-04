import student from "../assets/student.png";
import lecturer from "../assets/lecturer.png";
import coordinator from "../assets/coordinator.png";
import { LoadingButton } from "../components/ui/LoadingButton";
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "../components/ScrollReveal";

const datas = [
  {
    title: "Student submits a request",
    subtitle: "LOA, course update, transcript, clearance",
    src: student,
  },
  {
    title: "Routes to the right approver",
    subtitle: "Coordinator, finance, HOD or dean — configurable per type",
    src: lecturer,
  },
  {
    title: "SLA timers keep it moving",
    subtitle: "Escalation and reminders, no manual follow-up",
    src: coordinator,
  },
  {
    title: "Decision logged, student notified",
    subtitle: "Full audit trail who, when, and why",
    src: coordinator,
  },
];

export default function Enabler() {
  return (
    <section
      id="criticalEnabler"
      className="bg-base-black  py-10 md:py-20 w-full place-items-center overflow-x-hidden"
    >
      {/*Built for all Role */}
      <div className="mx-auto w-full items-center flex flex-col md:flex-row md:gap-20 max-w-7xl bg-base-black rounded-3xl px-4 md:px-24">
        <ScrollReveal
          className="md:w-1/2 flex flex-col justify-center items-start gap-6"
          preset="fade-right"
        >
          <p className="mb-3 rounded-full px-3 py-1 text-xs text-white font-jetbrains font-medium tracking-[.14em] bg-[#06BAD61F]">
            The critical enabler
          </p>
          <h2 className="heading2 max-w-2xl text-3xl  text-white md:text-5xl">
            Every approval, one engine, zero guesswork.
          </h2>
          <p className="lead text-lg text-subtle  font-regular leading-7 max-w-2xl">
            Leave of absence, course updates, transcripts, clearance, bio-data changes, instead of a
            different email thread for each, everything routes through a single, configurable
            workflow engine that everyone can see into.
          </p>
          <LoadingButton>See how approvals work</LoadingButton>
        </ScrollReveal>
        <ScrollRevealGroup
          className="md:w-[40%] rounded-3xl mt-10 grid grid-cols-1 gap-4"
          staggerChildren={0.12}
        >
          {datas.map((data, i) => (
            <ScrollRevealItem
              key={data.title}
              preset="fade-left"
              className="flex items-center px-4 py-3 gap-4 rounded-3xl border bg-base-white/5"
            >
              <span className="flex place-content-center place-items-center w-8 h-8 bg-secondary rounded-full font-saans font-bold text-base-black text- md:text-lg">
                {i + 1}
              </span>
              <div className="flex flex-col ">
                <h3 className="font-saans font-bold text-base-white text- md:text-lg">
                  {data.title}
                </h3>
                <p className="font-saans font-medium text-text-disable md:text-sm">
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
