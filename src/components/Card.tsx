import { ScrollRevealItem } from "./ScrollReveal";

type CardProps = {
  title?: string;
  subtitle?: string;
  src?: string | undefined;
  otherStyles?: string | undefined;
};

export default function Card({ title, src, subtitle, otherStyles }: CardProps) {
  return (
    <ScrollRevealItem
      preset="soft-pop"
      className={`flex  p-4 gap-4 md:p-10 md:gap-10 rounded-3xl bg-subtle ${otherStyles}`}
    >
      <img loading="lazy" src={src} alt={title} className="w-10.5 h-10.5 rounded-full " />
      <div className="flex flex-col gap-2">
        <h3 className="font-bogoss font-medium text-[#0B0C0E] text-lg md:text-xl">{title}</h3>
        <p className="font-saans font-medium text-[#5C5C5C] md:text-md">{subtitle}</p>
      </div>
    </ScrollRevealItem>
  );
}
