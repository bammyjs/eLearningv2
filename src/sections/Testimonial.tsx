import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import FlexBubble from "../components/FlexBubble";
import amaraPoster from "../assets/Profile picture-2.png";
import davidPoster from "../assets/Profile picture-3.png";
import irinoyePoster from "../assets/Profile picture-1.png";

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;
const AUTO_SLIDE_MS = 5500;
const DESKTOP_OFFSETS = [-2, -1, 0, 1, 2] as const;
const MOBILE_OFFSETS = [-1, 0, 1] as const;

type TestimonialItem = {
  id: string;
  quote: string;
  name: string;
  role: string;
  poster: string;
  videoSrc?: string;
};

const SAMPLE_VIDEO_A = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
const SAMPLE_VIDEO_B = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/bee.mp4";

const testimonials: TestimonialItem[] = [
  {
    id: "irinoye",
    quote: "Provate helps us speed up our processes and get more done in less time.",
    name: "Professor Omolola Oladunni Irinoye",
    role: "Vice Chancellor of Achievers University, Owo",
    poster: irinoyePoster,
    videoSrc: SAMPLE_VIDEO_A,
  },
  {
    id: "amara",
    quote:
      "Everything our students need is in one place. The experience feels clear, quick, and easy to trust.",
    name: "Amara O.",
    role: "Director of Student Affairs",
    poster: amaraPoster,
    videoSrc: SAMPLE_VIDEO_B,
  },
  {
    id: "david",
    quote:
      "We spend less time chasing updates and more time helping students move forward with confidence.",
    name: "David M.",
    role: "Registry Administrator",
    poster: davidPoster,
  },
];

function wrapIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

function slotMetrics(offset: number, compact: boolean) {
  const distance = Math.abs(offset);
  if (distance === 0) {
    return compact
      ? { width: 320, height: 320, className: "z-30", opacity: 1, y: 0 }
      : { width: 576, height: 576, className: "z-30", opacity: 1, y: 0 };
  }
  if (distance === 1) {
    return compact
      ? { width: 160, height: 214, className: "z-20", opacity: 0.9, y: 10 }
      : { width: 146, height: 384, className: "z-20", opacity: 0.92, y: 12 };
  }
  return {
    width: 108,
    height: 256,
    className: "z-10",
    opacity: 0.78,
    y: 24,
  };
}

export default function Testimonial() {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const active = testimonials[activeIndex];
  const slotOffsets = isCompact ? MOBILE_OFFSETS : DESKTOP_OFFSETS;

  const goTo = useCallback((index: number) => {
    setActiveIndex(wrapIndex(index, testimonials.length));
    setIsPlaying(false);
  }, []);

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsCompact(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || testimonials.length < 2 || isPlaying) return;

    const timer = window.setInterval(goNext, AUTO_SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [goNext, isPlaying, prefersReducedMotion]);

  useEffect(() => {
    if (!isPlaying) return;
    const video = videoRef.current;
    if (!video) return;
    void video.play().catch(() => setIsPlaying(false));
  }, [isPlaying, activeIndex]);

  return (
    <section id="testimonial" className="relative z-0 w-full px-3 pt-3">
      <div className="bgGradient mx-auto flex w-full flex-col items-center gap- rounded-3xl px-4 py-14 md:gap- md:px-8 md:py-20">
        <div className="flex max-w-4xl flex-col items-center text-center">
          <span className="mb-3 flex items-baseline gap-2">
            <svg width="6" height="8" viewBox="0 0 6 8" fill="none" aria-hidden>
              <rect x="4" y="2" width="2" height="2" fill="#06BAD6" />
              <rect y="6" width="2" height="2" fill="#06BAD6" />
              <rect x="4" y="6" width="2" height="2" fill="#06BAD6" />
            </svg>
            <p className="font-jetbrains text-xs font-medium tracking-[0.14em] text-[#06BAD6] uppercase">
              Customer stories
            </p>
          </span>
          <h2 className="heading2 text-center text-3xl text-text-default md:text-5xl">
            Don’t just take our word for it, hear it from them
          </h2>
        </div>

        <div
          className="flex items-center justify-center gap-2  my-4"
          role="tablist"
          aria-label="Testimonial slides"
        >
          {testimonials.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Show story from ${item.name}`}
                onClick={() => goTo(index)}
                className={`rounded-full transition-all duration-300 ${
                  isActive ? "h-2 w-8 bg-brand-base" : "size-2 bg-[#D5DCE3] hover:bg-[#B8C0CA]"
                }`}
              />
            );
          })}
        </div>

        <div className="flex w-full  max-w-6xl mx-auto overflow-x-hidden items-center justify-center gap- ">
          {slotOffsets.map((offset) => {
            const itemIndex = wrapIndex(activeIndex + offset, testimonials.length);
            const item = testimonials[itemIndex];
            const isCenter = offset === 0;
            const metrics = slotMetrics(offset, isCompact);

            return (
              <motion.button
                key={`${item.id}-${offset}`}
                type="button"
                onClick={() => goTo(itemIndex)}
                aria-label={
                  isCenter ? `Featured story from ${item.name}` : `View story from ${item.name}`
                }
                className={`relative shrink-0  ${metrics.className} `}
                initial={false}
                animate={{
                  opacity: metrics.opacity,
                  y: metrics.y,
                  scale: 1,
                }}
                transition={{ duration: 0.55, ease: REVEAL_EASE }}
              >
                <FlexBubble
                  width={metrics.width}
                  height={metrics.height}
                  fill="#0B0C0E"
                  stroke="white"
                  strokeWidth={2}
                  src={item.poster}
                  alt=""
                  contentClassName="overflow-hidden"
                >
                  {isCenter ? (
                    <div className="relative h-full w-full border">
                      {isPlaying && item.videoSrc ? (
                        <video
                          ref={videoRef}
                          src={item.videoSrc}
                          poster={item.poster}
                          controls
                          controlsList=""
                          playsInline
                          preload="metadata"
                          className="absolute inset-0 z-30 h-full w-full object-cover "
                          onEnded={() => setIsPlaying(false)}
                          onPause={() => setIsPlaying(false)}
                        />
                      ) : null}
                      {!isPlaying && item.videoSrc ? (
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();
                            setIsPlaying(true);
                          }}
                          className="absolute inset-0 z-20 grid place-items-center bg-black/15 transition-colors hover:bg-black/25"
                          aria-label="Play testimonial video"
                        >
                          <span className="grid size-14 place-items-center rounded-full bg-white/16 text-white shadow-lg md:size-16">
                            <svg
                              width="40"
                              height="40"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden
                            >
                              <path d="M8 5.14v13.72L19 12 8 5.14z" />
                            </svg>
                          </span>
                        </button>
                      ) : null}
                      <div
                        className={`pointer-events-none  absolute inset-0 z-10 flex flex-col justify-self-center text-left   place-self-end just ${
                          isCompact ? "px-3 pb-[8%] w-[300px]" : "px-6 pb-[5%] md:px-8  w-[530px]"
                        }`}
                      >
                        <div
                          className={`relative flex w-full flex-col justify-start overflow-hidden  ${
                            isCompact ? "max-h-[56%] p-2 " : "max-h-[46%] md:max-h-[42%] p-4"
                          }`}
                        >
                          <div
                            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent"
                            aria-hidden
                          />

                          <AnimatePresence mode="wait">
                            <motion.p
                              key={item.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -6 }}
                              transition={{
                                duration: 0.45,
                                ease: REVEAL_EASE,
                              }}
                              className={`relative font-saans text-white text-center w-full ${
                                isCompact
                                  ? "px-4  mx-auto py-2 text-xs leading-[1.4]"
                                  : "px-4 mx-auto py-8 text-sm leading-6 md:px-5 md:py-10 md:text-base md:leading-7"
                              }`}
                            >
                              “{item.quote}”
                            </motion.p>
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </FlexBubble>
              </motion.button>
            );
          })}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: REVEAL_EASE }}
            className="flex max-w-xl flex-col items-center gap-2 text-center"
          >
            <h3 className="font-bogoss text-2xl font-medium tracking-[-0.045em] text-[#0B0C0E]">
              {active.name}
            </h3>
            <p className="font-jetbrains text-xs uppercase tracking-[0.12em] text-text-muted">
              {active.role}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
