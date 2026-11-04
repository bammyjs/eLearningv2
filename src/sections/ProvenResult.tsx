import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "../components/ScrollReveal";
import CountUp from "../components/CountUp";

export default function ProvenResult() {
  const stats = [
    { value: 73, suffix: "%", label: "Reduction in clearance processing time" },
    { value: 40, suffix: "%", label: "More applications processed per cycle" },
    { value: 2, suffix: "wks", label: "Saved on monthly fee reconciliation" },
  ];
  return (
    <section id="provenResult" className="bg-surface py-10 md:py-20 w-full place-items-center ">
      <div className="mx-auto mt- w-full items-center    gap-8 max-w-7xl px-4 md:px-24">
        <ScrollReveal className="flex flex-col justify-center items-start gap-4" preset="soft-blur">
          <p className="mb-3 rounded-full px-3 py-1 text-xs font-jetbrains font-medium tracking-[.14em] bg-[#06BAD61F]">
            Proven Results
          </p>
          <div className="w-full flex flex-col md:flex-row items-center gap-4 justify-between">
            <h2 className="heading2 max-w-2xl text-3xl  text-[#0B0C0E] md:text-5xl">
              Measurable gains within one semester.
            </h2>
            <p className="lead md:text-lg text-text-muted  font-regular leading-7 max-w-md">
              Every institution that deploys eLearning measures operational impact from the first
              cycle. These outcomes are from live deployments, not pilots.
            </p>
          </div>
        </ScrollReveal>
        <ScrollRevealGroup
          amount={0.16}
          delayChildren={0.08}
          staggerChildren={0.08}
          className="py-10 md:py-24 grid gap-6 sm:grid-cols-3"
        >
          {stats.map(({ value, suffix, label }, index) => (
            <ScrollRevealItem
              key={label}
              preset="soft-pop"
              className="  p-4 border-b  last:border-b-0 sm:border-b-0 sm:border-t-0 border-muted sm:border-l sm:pl-6 sm:pt-0 first:sm:border-l-0 first:sm:pl-0"
            >
              <p className="text-4xl md:text-5xl font-bogoss font-medium tracking-tight text-text-default">
                <CountUp
                  from={0}
                  to={value}
                  duration={1.2 + index * 0.12}
                  className="tabular-nums"
                />
                {suffix}
              </p>
              <p className="mt-2 text-sm md:text-lg font-saans font-medium  tracking-normal text-text-muted/70">
                {label}
              </p>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
        <ScrollRevealGroup
          className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 gap-1.5"
          staggerChildren={0.08}
          once
        >
          {/* {datas.map((data) => (
            <Card
              key={data.title}
              title={data.title}
              subtitle={data.subtitle}
              src={data.src}
              otherStyles="flex-col"
            />
          ))} */}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
