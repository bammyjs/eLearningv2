import { useRef, useState } from "react";
import Icon from "./Icon";

const patternDefault = new URL("../assets/pattern.png", import.meta.url).href;

export type TheTeamItem = {
  id: number | string;
  title: string;
  description: string;
  rank?: string;
  benefits: string[];
  image: string;
  overlayClass?: string;
};

type Props = {
  items: TheTeamItem[];
  heading?: string;
  pillTitle?: string;
  patternUrl?: string;
};

export default function TheTeam({
  items,
  heading = "A small team that has sat in the registry office.",
  pillTitle = "The Team",
  patternUrl = patternDefault,
}: Props) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const container = contentRef.current;
    if (!container || items.length === 0) return;

    const normalizedIndex = ((index % items.length) + items.length) % items.length;
    const child = container.children[normalizedIndex] as HTMLElement | undefined;
    if (child) {
      container.scrollTo({ left: child.offsetLeft - 16, behavior: "smooth" });
      setActiveIndex(normalizedIndex);
    }
  };

  const goPrev = () => scrollToIndex(activeIndex - 1);
  const goNext = () => scrollToIndex(activeIndex + 1);

  return (
    <div className="mx-auto mt-10 w-full flex flex-col gap-4 max-w-7xl px-4 md:px-24 h-full">
      <p className="w-fit flex items-center gap-2 rounded-full bg-base-white border border-muted px-3 py-1 text-xs font-jetbrains font-medium tracking-[.14em] text-black/60">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand-base" />
        {pillTitle}
      </p>

      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <h2 className="heading2 max-w-2xl text-2xl text-left text-[#0B0C0E] md:text-5xl">
          {heading}
        </h2>
        <div className="flex items-center gap-4">
          <button
            onClick={goPrev}
            disabled={items.length < 2}
            className="group inline-flex p-3 hover:bg-brand-base rounded-full ring ring-brand-base w-fit items-center gap-2 text-sm font-saans"
            aria-label="Previous"
          >
            <Icon name="left" variant="cute-regular" sizeClass="text-lg" />
          </button>
          <button
            onClick={goNext}
            disabled={items.length < 2}
            className="group inline-flex p-3 hover:bg-brand-base rounded-full ring ring-brand-base w-fit items-center gap-2 text-sm font-saans"
            aria-label="Next"
          >
            <Icon name="right" variant="cute-regular" sizeClass="text-lg" />
          </button>
        </div>
      </div>

      <div
        ref={contentRef}
        className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory px-4 py-6 scrollbar-hide"
        role="list"
      >
        {items.map((item) => (
          <article
            key={item.id}
            role="listitem"
            className="flex-none rounded-3xl w-full max-w-5xl h-auto overflow-hidden bg-white snap-start"
          >
            <div className="flex flex-col md:flex-row w-full h-full">
              <div aria-hidden="true" className="relative md:w-1/2 h-full">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 z-0 bg-cover bg-center"
                  style={{ backgroundImage: `url("${patternUrl}")` }}
                />
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 z-0 pointer-events-none ${item.overlayClass}`}
                />
                <div className="relative w-full h-full flex flex-col gap-4 md:gap-10 items-start justify-center p-6 md:p-14 text-white">
                  <p className="text-sm font-jetbrains font-bold tracking-[-.045em]">
                    {item.title}
                  </p>
                  <h3 className="text-xl md:text-3xl font-bogoss font-medium">
                    {item.description}
                  </h3>
                  {item.rank && <p className="text-sm font-jetbrains font-bold">{item.rank}</p>}
                  <div className="mt-4">
                    <p className="text-xs font-bogoss font-normal mb-2">Key Benefit</p>
                    <ul className="list-none list-inside text-sm font-saans font-medium">
                      {item.benefits.map((b, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Icon name="arrow_right_up" variant="cute-regular" sizeClass="text-sm" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="h-full hidden md:block w-full md:w-1/2"
                style={{
                  backgroundImage: `url("${item.image}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <button
                  type="button"
                  aria-label={`Learn more about ${item.title}`}
                  className="group place-self-end flex m-6 w-fit items-center gap-2 rounded-full bg-base-white p-3 text-sm font-saans hover:bg-brand-base hover:text-base-white"
                >
                  <Icon
                    name="arrow_right_up"
                    variant="cute-regular"
                    sizeClass="text-sm"
                    className=""
                  />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
