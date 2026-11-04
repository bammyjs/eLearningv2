import { useRef, useState, type ReactNode } from "react";
import Icon from "./Icon";

export type CarouselItem = {
  id: number | string;
};

type Props = {
  items: CarouselItem[];
  heading?: string;
  eyebrow?: string;
  children?: ReactNode;
  pill?: boolean;
  actionBtn?: ReactNode;
};

export default function Carousel({
  items,
  heading = "One platform. A different win for everyone who touches it.",
  eyebrow = "Built For Every Stakeholder",
  pill = true,
  actionBtn,
  children,
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
    <div className="mx-auto mt-10 flex h-full w-full max-w-7xl flex-col gap-4">
      <p className="mx-4 flex w-fit items-center gap-2 rounded-full px-3 py-1 font-jetbrains text-xs font-medium tracking-[.14em] text-[#06BAD6] md:mx-24">
        {pill && (
          <svg
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="4" y="2" width="2" height="2" fill="#06BAD6" />
            <rect y="6" width="2" height="2" fill="#06BAD6" />
            <rect x="4" y="6" width="2" height="2" fill="#06BAD6" />
          </svg>
        )}

        {eyebrow}
      </p>

      <div className="mx-4 flex flex-col items-start justify-between gap-4 md:mx-24 md:flex-row">
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
          {actionBtn}
        </div>
      </div>

      <div
        ref={contentRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto py-6 pl-4 pr-0 scroll-pl-4 md:gap-8 md:px-24 md:scroll-px-24"
        role="list"
      >
        {children}
        <div aria-hidden className="w-20 shrink-0 md:hidden" />
      </div>
    </div>
  );
}
