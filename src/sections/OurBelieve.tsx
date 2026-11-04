import student from "../assets/student.png";
import lecturer from "../assets/lecturer.png";
import coordinator from "../assets/coordinator.png";
import imageBG from "../assets/Image (4).png";
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "../components/ScrollReveal";

const datas = [
  {
    title: "Fast Implementation",
    subtitle:
      "Deployed and live in 90 days. No 18-month implementation contracts or six-figure consulting fees",
    src: student,
  },
  {
    title: "Fully Modular",
    subtitle:
      "Start with the modules you need today. Expand as your institution grows — without re-platforming.",
    src: lecturer,
  },
  {
    title: "Built for Real Workflows",
    subtitle:
      "Designed with African university administrators, not adapted from generic ERP software.",
    src: coordinator,
  },
  {
    title: "Continuously Updated",
    subtitle:
      "New capabilities every quarter, included in your subscription. No annual upgrade fees.",
    src: coordinator,
  },
];

export default function OurBelieve() {
  return (
    <section id="ourBelieve" className="bg-base-white py-20 w-full place-items-center z-10">
      {/*Our Believe*/}
      <div className="mx-auto mt- w-full items-center flex flex-col   gap-8 md:gap-16 max-w-7xl px-4 md:px-24">
        <ScrollReveal
          className="flex flex-col justify-center items-center gap-4"
          preset="soft-blur"
        >
          <p className="mb-3 rounded-full bg-[#06BAD61F]  px-3 py-1 text-xs font-jetbrains font-medium tracking-[.14em] text-text-muted">
            WHAT WE BELIEVE
          </p>
          <h2 className="heading2 max-w-2xl text-3xl text-center text-[#0B0C0E] md:text-5xl">
            The principles behind every module we ship.
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <ScrollRevealGroup className="rounded-3xl grid grid-cols-1 gap-4" staggerChildren={0.12}>
            {datas.map((data, i) => (
              <ScrollRevealItem
                key={data.title}
                preset="fade-right"
                className="flex items-center px-4 py-3 gap-4 border-b  border-muted"
              >
                <span className="flex place-content-center place-items-center w-8 h-8 bg-secondary rounded-full font-saans font-bold text-base-black text- md:text-lg">
                  {i + 1}
                </span>
                <div className="flex flex-col ">
                  <h3 className="font-saans font-medium text-base-black text- md:text-lg">
                    {data.title}
                  </h3>
                  <p className="font-saans font-regular text-text-muted text-xs md:text-md">
                    {data.subtitle}
                  </p>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollRevealGroup>
          <ScrollReveal preset="fade-left" delay={0.08}>
            <img src={imageBG} alt="why Elearning" className="w-full h-auto object-cover" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
