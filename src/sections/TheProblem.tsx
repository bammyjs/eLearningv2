import { motion, useAnimationControls } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Icon from "../components/Icon";
import type { ProblemSectionData } from "../data/problemSections";
import clickSoundSrc from "../assets/sounds/dragon-studio-clicking-433009-[AudioTrimmer.com].mp3";
import scrollSoundSrc from "../assets/sounds/dragon-studio-clicking-433009-[AudioTrimmer.com].mp3";

const problemPatternSvg = `
<svg width="32" height="448" viewBox="0 0 32 448" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 448)" fill="white"/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 432)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 416)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 400)" fill="white"/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 384)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 368)" fill="white"/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 352)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 336)" fill="white"/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 320)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 304)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 288)" fill="white"/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 272)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 256)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 240)" fill="white"/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 224)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 208)" fill="white"/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 192)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 176)" fill="white"/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 160)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 144)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 128)" fill="white"/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 112)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 96)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 80)" fill="white"/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 64)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 48)" fill="white"/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 32)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 0 16)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 448)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 432)" fill="white"/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 416)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 400)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 384)" fill="white"/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 368)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 352)" fill="white"/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 336)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 320)" fill="white"/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 304)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 288)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 272)" fill="white"/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 256)" fill="white"/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 240)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 224)" fill="white"/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 208)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 192)" fill="white"/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 176)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 160)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 144)" fill="white"/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 128)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 112)" fill="white"/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 96)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 80)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 64)" fill="white"/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 48)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 32)" fill={fill}/>
<rect width="16" height="16" transform="matrix(0 -1 1 0 16 16)" fill="white"/>
</svg>
`;
const getProblemPatternBackground = (backgroundClass: string) => {
  const fill = backgroundClass.match(/bg-\[(#[\da-f]{6})\]/i)?.[1] ?? "#2661EF";
  const svg = problemPatternSvg.replaceAll("fill={fill}", `fill="${fill}"`);
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
};

// const pattern = new URL("../assets/pattern.png", import.meta.url).href;

type TheProblemProps = {
  data: ProblemSectionData;
};

const BAR_COUNT = 115;

export default function TheProblem({ data }: TheProblemProps) {
  const problems = data.items;
  const isDark = data.theme === "dark";
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeBarIndex, setActiveBarIndex] = useState(0);
  const barAnimationControls = useAnimationControls();
  const scrollRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const trackerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const labelRefs = useRef<Array<HTMLParagraphElement | null>>([]);
  const activeRef = useRef(0);
  const activeBarRef = useRef(0);
  const clickAudioRef = useRef<HTMLAudioElement | null>(null);
  const scrollAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    clickAudioRef.current = new Audio(clickSoundSrc);
    scrollAudioRef.current = new Audio(scrollSoundSrc);

    if (clickAudioRef.current) {
      clickAudioRef.current.volume = 0.2;
      clickAudioRef.current.preload = "auto";
    }
    if (scrollAudioRef.current) {
      scrollAudioRef.current.volume = 0.2;
      scrollAudioRef.current.preload = "auto";
    }
  }, []);

  const playClickSound = () => {
    const audio = clickAudioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  const playScrollSound = () => {
    const audio = scrollAudioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  useEffect(() => {
    const updateActivePanel = () => {
      const scrollArea = scrollRef.current;
      if (!scrollArea) return;

      const rect = scrollArea.getBoundingClientRect();
      const scrollDistance = Math.max(scrollArea.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / scrollDistance, 0), 1);
      const nextIndex = Math.min(problems.length - 1, Math.round(progress * (problems.length - 1)));

      if (nextIndex !== activeRef.current) {
        activeRef.current = nextIndex;
        setActiveIndex(nextIndex);
        playScrollSound();
      }
    };

    const frameId = window.requestAnimationFrame(updateActivePanel);
    window.addEventListener("scroll", updateActivePanel, { passive: true });
    window.addEventListener("resize", updateActivePanel);
    return () => {
      window.removeEventListener("scroll", updateActivePanel);
      window.removeEventListener("resize", updateActivePanel);
      window.cancelAnimationFrame(frameId);
    };
  }, [problems.length]);

  useEffect(() => {
    const tabList = tabsRef.current;
    const activeButton = buttonRefs.current[activeIndex];
    if (!tabList || !activeButton) return;

    tabList.scrollTo({
      left: activeButton.offsetLeft - (tabList.clientWidth - activeButton.offsetWidth) / 2,
      behavior: "smooth",
    });
  }, [activeIndex]);

  useEffect(() => {
    const tabList = tabsRef.current;
    const tracker = trackerRef.current;
    const activeLabel = labelRefs.current[activeIndex];
    if (!tabList || !tracker || !activeLabel) return;

    let frameId: number | null = null;
    const updateMarkerPosition = () => {
      frameId = null;
      const trackerRect = tracker.getBoundingClientRect();
      const labelRect = activeLabel.getBoundingClientRect();
      const titleCenter = Math.max(
        0,
        Math.min(trackerRect.width, labelRect.left + labelRect.width / 2 - trackerRect.left),
      );
      const nextBarIndex = Math.round(
        (titleCenter / Math.max(trackerRect.width, 1)) * (BAR_COUNT - 1),
      );
      if (nextBarIndex !== activeBarRef.current) {
        const direction = nextBarIndex > activeBarRef.current ? 1 : -1;
        activeBarRef.current = nextBarIndex;
        setActiveBarIndex(nextBarIndex);
        void barAnimationControls.start({
          x: [0, direction * 6, 0],
          transition: { duration: 0.42, ease: "easeOut" },
        });
      }
    };
    const scheduleMarkerPosition = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(updateMarkerPosition);
    };

    const resizeObserver = new ResizeObserver(scheduleMarkerPosition);
    resizeObserver.observe(tabList);
    resizeObserver.observe(tracker);
    resizeObserver.observe(activeLabel);
    tabList.addEventListener("scroll", scheduleMarkerPosition, {
      passive: true,
    });
    window.addEventListener("resize", scheduleMarkerPosition);
    scheduleMarkerPosition();

    return () => {
      resizeObserver.disconnect();
      tabList.removeEventListener("scroll", scheduleMarkerPosition);
      window.removeEventListener("resize", scheduleMarkerPosition);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, [activeIndex, barAnimationControls]);

  const goTo = (index: number) => {
    playClickSound();
    const scrollArea = scrollRef.current;
    if (!scrollArea) return;
    const start = window.scrollY + scrollArea.getBoundingClientRect().top;
    const scrollDistance = Math.max(scrollArea.offsetHeight - window.innerHeight, 0);
    const interval = Math.max(problems.length - 1, 1);
    window.scrollTo({
      top: start + (scrollDistance * index) / interval,
      behavior: "smooth",
    });
  };

  return (
    <section
      id={data.id}
      className={`z-20 w-screen max-w-full overflow-x-clip  py-10 md:py-20 ${isDark ? "bg-base-black" : "bg-base-white"}`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-24">
        <div className="flex flex-col items-center pb-14 text-center md:pb-20">
          <span className={`mb-3  flex items-baseline gap-2 ${isDark ? "" : ""}`}>
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

            <p className="text-xs font-jetbrains font-medium text-[#06BAD6]">{data.eyebrow}</p>
          </span>
          <h2
            className={`heading2 max-w-4xl text-center text-3xl md:text-5xl ${isDark ? "text-base-white" : "text-[#0B0C0E]"}`}
          >
            {data.heading}
          </h2>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="relative px-4 md:px-24"
        style={{ height: `${Math.max(problems.length, 2) * 100}vh` }}
      >
        <div className="sticky  top-10 md:top-20 flex h-fit min-h-130 ">
          <div className="mx-auto  flex w-full max-w-7xl flex-col md:px-8">
            <div className="w-full ">
              <div
                ref={tabsRef}
                className="no-scrollbar flex justify-between gap-4 overflow-x-auto pb-3 scroll-smooth snap-x snap-mandatory md:place-items-center md:grid md:gap-x-8 md:overflow-visible"
                style={{
                  gridTemplateColumns: `repeat(${problems.length}, minmax(0, 1fr))`,
                }}
                role="tablist"
                aria-label="University challenges"
              >
                {problems.map((problem, index) => (
                  <button
                    ref={(el) => {
                      buttonRefs.current[index] = el;
                    }}
                    key={problem.tab}
                    type="button"
                    role="tab"
                    aria-selected={activeIndex === index}
                    aria-controls={`problem-panel-${index}`}
                    id={`problem-tab-${index}`}
                    tabIndex={activeIndex === index ? 0 : -1}
                    onClick={() => goTo(index)}
                    className="snap-center shrink-0 min-w-25 text-left md:min-w-0"
                  >
                    <p
                      ref={(el) => {
                        labelRefs.current[index] = el;
                      }}
                      className={`truncate text-xs font-bogoss font-medium transition-colors duration-500 md:text-sm ${activeIndex === index ? (isDark ? "text-base-white" : "text-[#0B0C0E]") : isDark ? "text-white/35 hover:text-white/65" : "text-black/35 hover:text-black/60"}`}
                    >
                      {problem.tab}
                    </p>
                  </button>
                ))}
              </div>
              <div
                ref={trackerRef}
                className="relative h-6 w-full overflow-hidden"
                aria-hidden="true"
              >
                <motion.div
                  animate={barAnimationControls}
                  className="grid h-full items-end"
                  style={{
                    gridTemplateColumns: `repeat(${BAR_COUNT}, minmax(0, 1fr))`,
                  }}
                >
                  {Array.from({ length: BAR_COUNT }, (_, index) =>
                    index === activeBarIndex ? (
                      <motion.div
                        key={index}
                        layoutId={`${data.id}-active-bar`}
                        className={`h-4 w-px justify-self-center rounded-full ${isDark ? "bg-base-white" : "bg-black"}`}
                        transition={{
                          type: "spring",
                          stiffness: 280,
                          damping: 26,
                        }}
                      />
                    ) : (
                      <div
                        key={index}
                        className={`h-2 w-px justify-self-center rounded-full ${isDark ? "bg-white/20" : "bg-black/20"}`}
                      />
                    ),
                  )}
                </motion.div>
              </div>
            </div>

            <div className="relative   mt-8 min-h-0 h-fit flex-1 justify-center   overflow-hidden">
              <motion.div
                className="flex h-fit items-center justify-center"
                style={{ width: `${problems.length * 100}%` }}
                animate={{ x: `${(-activeIndex * 100) / problems.length}%` }}
                transition={{
                  type: "spring",
                  stiffness: 130,
                  damping: 22,
                  mass: 0.7,
                }}
              >
                {problems.map((problem, index) => {
                  return (
                    <article
                      key={problem.title}
                      role="tabpanel"
                      id={`problem-panel-${index}`}
                      aria-labelledby={`problem-tab-${index}`}
                      aria-label={problem.title}
                      className="h-full shrink-0"
                      style={{ width: `${100 / problems.length}%` }}
                    >
                      <div
                        className={`group/card grid h-full min-h-75 gap-4 overflow-hidden md:gap-8 md:min-h-90 md:grid-cols-[1.10fr_.90fr]`}
                      >
                        <motion.div
                          className={`flex flex-col justify-between rounded-3xl p-4 transition-[border-radius] duration-300  md:p-16 ${isDark ? "text-base-white border border-[#82899140]" : "text-[#071218]"} ${problem.accentClass}`}
                          animate={{
                            opacity: activeIndex === index ? 1 : 0.55,
                            y: activeIndex === index ? 0 : 18,
                          }}
                          transition={{
                            duration: 0.45,
                            delay: activeIndex === index ? 0.12 : 0,
                          }}
                        >
                          <div className="flex flex-col gap-6">
                            <h3 className="mt-3 text-2xl font-bogoss font-medium tracking-[-.045em] ">
                              {problem.title}
                            </h3>
                            <p
                              className={`max-w-md text-sm font-saans md:text-base ${isDark ? "text-white/70" : "text-text-muted"}`}
                            >
                              {problem.description}
                            </p>
                          </div>
                          <a
                            href={problem.learnMoreHref ?? "/solutions"}
                            className="group mt-16 inline-flex w-fit items-center gap-2 text-sm font-saans"
                          >
                            <Icon
                              name="arrow_right_up"
                              variant="cute-regular"
                              sizeClass="text-base "
                              className={`transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-base-white rounded-full p-0.5 ${problem.backgroundClass}`}
                            />
                            Learn more{" "}
                          </a>
                        </motion.div>
                        <div
                          className={`group relative overflow-hidden rounded-3xl hover:rounded-l-none ${problem.backgroundClass} md:flex`}
                        >
                          {/* <div
                            aria-hidden="true"
                            className="absolute inset-0 z-0 bg-cover bg-center"
                            style={{ backgroundImage: `url("${pattern}")` }}
                          /> */}
                          <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0   opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
                            style={{
                              backgroundImage: getProblemPatternBackground(problem.backgroundClass),
                              backgroundRepeat: "no-repeat",
                            }}
                          />
                          <img src={problem.image} alt={problem.imageAlt} />
                        </div>
                      </div>
                    </article>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
