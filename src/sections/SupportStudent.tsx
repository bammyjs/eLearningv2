import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Profile1 from "../assets/Profile picture.png";
import Profile2 from "../assets/Profile picture-1.png";
import Profile3 from "../assets/Profile picture-2.png";
import Profile4 from "../assets/Profile picture-3.png";
import Profile5 from "../assets/Profile picture-4.png";
import Profile6 from "../assets/Profile picture-5.png";

const Background = new URL("../assets/LooperGroup.png", import.meta.url).href;

const avatars = [
  {
    image: Profile1,
    position: "left-10 top-5 md:left-30 md:top-10",
  },
  {
    image: Profile2,
    position: "left-24 bottom-2 md:left-60 md:-bottom-0",
  },
  {
    image: Profile3,
    position: "right-24 bottom-2 md:right-60 md:-bottom-0",
  },
  {
    image: Profile4,
    position: "left-0 bottom-20 md:left-10 md:bottom-20",
  },
  {
    image: Profile5,
    position: "right-10 top-5 md:right-30 md:top-10",
  },
  {
    image: Profile6,
    position: "left- -top-3 md:-top-10",
    // isCentered: true,
  },
  {
    image: Profile6,
    position: "right-0 bottom-20 md:right-10 md:bottom-20",
  },
];

export default function SupportStudent() {
  const sectionRef = useRef<HTMLElement>(null);
  const animationTriggerRef = useRef<HTMLDivElement>(null);
  const avatarContainerRef = useRef<HTMLDivElement>(null);
  const avatarRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [originOffsets, setOriginOffsets] = useState<Array<{
    x: number;
    y: number;
  }> | null>(null);
  const [isOriginPositioned, setIsOriginPositioned] = useState(false);
  const isInView = useInView(animationTriggerRef, {
    once: true,
    margin: "0px 0px -45% 0px",
  });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const container = avatarContainerRef.current;
    if (!container) return;

    let frameId: number | null = null;
    const measureOrigins = () => {
      frameId = null;
      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;
      const centerY = containerRect.top + containerRect.height / 2;

      setOriginOffsets(
        avatarRefs.current.map((avatar) => {
          if (!avatar) return { x: 0, y: 0 };
          const avatarRect = avatar.getBoundingClientRect();
          return {
            x: centerX - (avatarRect.left + avatarRect.width / 2),
            y: centerY - (avatarRect.top + avatarRect.height / 2),
          };
        }),
      );
    };
    const scheduleMeasurement = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(measureOrigins);
    };

    const resizeObserver = new ResizeObserver(scheduleMeasurement);
    resizeObserver.observe(container);
    scheduleMeasurement();

    return () => {
      resizeObserver.disconnect();
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    if (!originOffsets) return;
    const frameId = window.requestAnimationFrame(() => {
      setIsOriginPositioned(true);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [originOffsets]);

  return (
    <section
      ref={sectionRef}
      id="supportForStudent"
      className="bg-surface relative h-full   z-0  w-full place-items-center "
    >
      {/*support for students */}
      <div className=" relative  flex gap-4 items-center w-full justify-center h-full px-4 md:px-24  mt-4">
        <div
          ref={animationTriggerRef}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-[50%] h-px w-px"
        />
        <img
          src={Background}
          alt=""
          className="object-cover  w-full h-auto bg-transparent animate-pulse"
        />
        <div className="absolute   w-full max-w-4xl px-4  place-items-center">
          <div
            ref={avatarContainerRef}
            className="relative flex min-h-[280px] w-full items-center justify-center px-4 md:min-h-[360px] md:px-24"
          >
            <h3 className="max-w-md  absolute text-center text-2xl md:text-4xl font-bogoss font-medium z-10">
              One platform, better outcomes for everyone who depends on it.
            </h3>

            {avatars.map((avatar, i) => {
              const origin = originOffsets?.[i] ?? { x: 0, y: 0 };
              const readyToAnimate = originOffsets !== null;

              return (
                <motion.div
                  key={i}
                  ref={(element) => {
                    avatarRefs.current[i] = element;
                  }}
                  className={`${avatar.position}   absolute z-0 will-change-transform`}
                  animate={
                    readyToAnimate && isOriginPositioned && isInView
                      ? { opacity: 1, scale: 1, x: 0, y: 0 }
                      : { opacity: 0, scale: 0.72, x: origin.x, y: origin.y }
                  }
                  transition={
                    prefersReducedMotion || !isOriginPositioned
                      ? { duration: 0 }
                      : {
                          type: "spring",
                          stiffness: 155,
                          damping: 18,
                          mass: 0.75,
                        }
                  }
                >
                  <img
                    src={avatar.image}
                    alt=""
                    className="w-10 h-1w-10 md:w-20 md:h-20 rounded-full object-cover"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
