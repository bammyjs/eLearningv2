import { AnimatePresence, motion, stagger } from "motion/react";
import { useEffect, useRef, useState } from "react";
import FlexBubble from "../components/FlexBubble";
import Icon from "../components/Icon";
import studentImg from "../assets/graduating-student.jpg";

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

const needs = [
  {
    id: "applicant",
    role: "Applicant",
    title: "Apply with confidence, from the first step to admission seamlessly",
    description:
      "Complete your application, upload required documents, track your admission status and follow every next step from one place. Provate keeps the process clear from submission through acceptance and enrolment.",
    icon: "mortarboard",
    image: studentImg,
  },
  {
    id: "operations",
    role: "Operations",
    title: "Keep every academic workflow moving without the chase",
    description:
      "Route requests, approvals, and follow-ups through one shared record so registry, faculty, and support teams stop working from separate lists.",
    icon: "settings_3",
    image: studentImg,
  },
  {
    id: "institution",
    role: "Institution",
    title: "See the whole campus from one operating layer",
    description:
      "Admissions, records, fees, and results stay connected, so leadership can act on a live picture of the institution instead of last week's export.",
    icon: "building_2",
    image: studentImg,
  },
  {
    id: "registry",
    role: "Registry",
    title: "Replace the spreadsheet trail with a single student record",
    description:
      "Capture bio-data, documents, and status changes once. Every office that needs the file reads from the same source.",
    icon: "documents",
    image: studentImg,
  },
  {
    id: "staff",
    role: "Staff",
    title: "Give lecturers and officers the same live student view",
    description:
      "Marks, attendance, and requests stay attached to the student, so staff spend less time hunting across portals and more time clearing the queue.",
    icon: "group",
    image: studentImg,
  },
  {
    id: "student",
    role: "Student",
    title: "One place for fees, results, clearance, and next steps",
    description:
      "Students stop hopping between portals. Status, payments, and documents stay together from enrolment through graduation.",
    icon: "user_3",
    image: studentImg,
  },
];

const copyVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: REVEAL_EASE },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.28, ease: REVEAL_EASE },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.04 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: REVEAL_EASE },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.28, ease: REVEAL_EASE },
  },
};

export default function RoleSolutions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const targetIndexRef = useRef<number | null>(null);
  const activeNeed = needs[activeIndex];

  useEffect(() => {
    const updateActiveItem = () => {
      const scrollArea = scrollRef.current;
      if (!scrollArea) return;

      const rect = scrollArea.getBoundingClientRect();
      const scrollDistance = Math.max(scrollArea.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / scrollDistance, 0), 1);

      if (targetIndexRef.current !== null) {
        const targetProgress = targetIndexRef.current / Math.max(needs.length - 1, 1);
        if (Math.abs(progress - targetProgress) > 0.015) return;
        targetIndexRef.current = null;
      }

      const nextIndex = Math.min(needs.length - 1, Math.round(progress * (needs.length - 1)));

      if (nextIndex !== activeRef.current) {
        activeRef.current = nextIndex;
        setActiveIndex(nextIndex);
      }
    };
    const cancelProgrammaticScroll = () => {
      targetIndexRef.current = null;
    };

    const frameId = window.requestAnimationFrame(updateActiveItem);
    window.addEventListener("scroll", updateActiveItem, { passive: true });
    window.addEventListener("resize", updateActiveItem);
    window.addEventListener("wheel", cancelProgrammaticScroll, {
      passive: true,
    });
    window.addEventListener("touchstart", cancelProgrammaticScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateActiveItem);
      window.removeEventListener("resize", updateActiveItem);
      window.removeEventListener("wheel", cancelProgrammaticScroll);
      window.removeEventListener("touchstart", cancelProgrammaticScroll);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  const goTo = (index: number) => {
    const scrollArea = scrollRef.current;
    if (!scrollArea) return;

    targetIndexRef.current = index;
    activeRef.current = index;
    setActiveIndex(index);

    const start = window.scrollY + scrollArea.getBoundingClientRect().top;
    const scrollDistance = Math.max(scrollArea.offsetHeight - window.innerHeight, 0);
    window.scrollTo({
      top: start + (scrollDistance * index) / Math.max(needs.length - 1, 1),
      behavior: "smooth",
    });
  };

  return (
    <section id="roleSolutions" className="relative z-10 w-full overflow-x-clip">
      <div
        ref={scrollRef}
        className="relative"
        style={{ height: `${Math.max(needs.length, 2) * 100}vh` }}
      >
        <div className="sticky top-0 flex h-svh items-center px-2 py-3 md:px-4 md:py-5">
          <div className="flex h-full w-full flex-col items-center justify-center rounded-[28px] bgGradient px-4 py-8 md:rounded-[40px] md:px-10 md:py-12">
            <nav
              className="mb-4 flex items-center  gap-3 justify-center md:mb-6"
              aria-label="Role solutions"
            >
              {needs.map((need, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={need.id}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Show ${need.role}`}
                    aria-pressed={isActive}
                    className={`relative ${isActive ? "z-20" : "z-10 hover:z-20"}`}
                  >
                    <FlexBubble
                      className={`size-12 transition-transform duration-300 md:size-14 ${
                        isActive ? "scale-100 " : "scale-100 "
                      }`}
                      filled={isActive}
                      icon={need.icon}
                      iconClassName={isActive ? "text-white" : "text-[#8B95A5]"}
                    />
                  </button>
                );
              })}
            </nav>

            <div className="  w-full max-w-4xl  overflow-hidden rounded-[28px] bg-white shadow-[0_18px_50px_rgba(38,97,239,0.08)] md:rounded-[32px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.article
                  key={activeNeed.id}
                  className="grid h-full  gap-8 p-2 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:place-content-between"
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: 0.07,
                        delayChildren: 0.04,
                      },
                    },
                    exit: {
                      transition: {
                        // delayChildren: stagger(0.04),
                        delayChildren: stagger(0.04, { from: "last" }),
                        // staggerDirection: -1,
                      },
                    },
                  }}
                >
                  <div className="flex min-h-0 flex-col justify-between p-4">
                    <div className="flex flex-col gap-4">
                      <motion.span className="flex items-baseline gap-2" variants={copyVariants}>
                        <svg width="6" height="8" viewBox="0 0 6 8" fill="none" aria-hidden>
                          <rect x="4" y="2" width="2" height="2" fill="#06BAD6" />
                          <rect y="6" width="2" height="2" fill="#06BAD6" />
                          <rect x="4" y="6" width="2" height="2" fill="#06BAD6" />
                        </svg>
                        <p className="font-jetbrains text-xs font-medium tracking-[0.14em] text-[#06BAD6] uppercase">
                          {activeNeed.role}
                        </p>
                      </motion.span>
                      <motion.h3
                        className="font-bogoss max-w-md text-lg md:text-2xl font-medium tracking-[-0.045em] text-[#0B0C0E] "
                        variants={copyVariants}
                      >
                        {activeNeed.title}
                      </motion.h3>
                      <motion.p
                        className="font-saans max-w-md text-sm leading-6 text-[#3A4150] md:text-base md:leading-7"
                        variants={copyVariants}
                      >
                        {activeNeed.description}
                      </motion.p>
                    </div>
                    <motion.a
                      href="/solutions"
                      className="group mt-10 inline-flex w-fit items-center gap-3 text-sm font-saans text-[#0B0C0E] md:mt-16"
                      variants={copyVariants}
                    >
                      <span className="grid size-7 place-items-center rounded-full bg-[#06BAD6] text-white">
                        <Icon name="right" variant="cute-regular" sizeClass="text-sm" />
                      </span>
                      Explore solutions
                    </motion.a>
                  </div>
                  <motion.div
                    className="h-full w-full  aspect-square overflow-hidden rounded-3xl md:rounded-[28px]"
                    variants={imageVariants}
                  >
                    <img src={activeNeed.image} alt="" className="h-full w-full object-cover" />
                  </motion.div>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
