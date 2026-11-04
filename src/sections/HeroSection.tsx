import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";
// import { useTranslation } from "react-i18next";
import { LoadingButton } from "../components/ui/LoadingButton";
import Icon from "../components/Icon";
import Profile1 from "../assets/Profile picture.png";
import Profile2 from "../assets/Profile picture-1.png";
import Profile3 from "../assets/Profile picture-2.png";
import Profile4 from "../assets/Profile picture-3.png";
import Profile5 from "../assets/Profile picture-4.png";
import Profile6 from "../assets/Profile picture-5.png";

// const Background2 = new URL("../assets/Screenshot.png", import.meta.url).href;

const examSessionVideo =
  "https://res.cloudinary.com/bamtech1/video/upload/v1777143985/elearning/20260325_095349_hlstbf.mp4";

const avatars = [
  {
    image: Profile1,
    position: "left-[0%] top-16 md:top-20",
  },
  {
    image: Profile2,
    position: "left-[15%] top-0 md:-top-20",
  },
  {
    image: Profile3,
    position: "left-[33%] top-16 md:top-10",
  },
  {
    image: Profile4,
    position: "left-[55%] top-1 md:top-20",
  },
  {
    image: Profile5,
    position: "left-[72%] top-16 md:-top-20",
  },
  {
    image: Profile6,
    position: "left-[82%] md:left-[90%]  -top-5 md:top-20",
  },
];

type AvatarOffset = {
  vX: number;
  vY: number;
  centerX: number;
  centerY: number;
  exitY: number;
};

type HeroAvatarProps = {
  avatar: (typeof avatars)[number];
  offset: AvatarOffset;
  scrollYProgress: MotionValue<number>;
  prefersReducedMotion: boolean | null;
  avatarRef: (element: HTMLImageElement | null) => void;
  index: number;
};

function HeroAvatar({
  avatar,
  offset,
  scrollYProgress,
  prefersReducedMotion,
  avatarRef,
  index,
}: HeroAvatarProps) {
  const vStart = 0.08 + index * 0.025;
  const vEnd = 0.25 + index * 0.025;
  const vX = prefersReducedMotion ? 0 : offset.vX;
  const vY = prefersReducedMotion ? 0 : offset.vY;
  const centerX = prefersReducedMotion ? 0 : offset.centerX;
  const centerY = prefersReducedMotion ? 0 : offset.centerY;
  const exitY = prefersReducedMotion ? 0 : offset.centerY + offset.exitY;
  const x = useTransform(scrollYProgress, [vStart, vEnd, 0.48, 0.66], [0, vX, centerX, centerX]);
  const y = useTransform(scrollYProgress, [vStart, vEnd, 0.48, 0.66], [0, vY, centerY, exitY]);
  const scale = useTransform(scrollYProgress, [0.08, 0.48, 0.66], [1, 0.9, 0.82]);

  return (
    <motion.img
      ref={avatarRef}
      src={avatar.image}
      alt=""
      className={`${avatar.position} w-10 h-10 md:w-20 md:h-20 absolute z-10 will-change-transform`}
      style={{ x, y, scale }}
    />
  );
}

export function HeroSection() {
  // const { t } = useTranslation("hero");
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const avatarStageRef = useRef<HTMLDivElement>(null);
  const avatarRefs = useRef<Array<HTMLImageElement | null>>([]);
  const [avatarOffsets, setAvatarOffsets] = useState<AvatarOffset[]>(
    avatars.map(() => ({
      vX: 0,
      vY: 0,
      centerX: 0,
      centerY: 0,
      exitY: 0,
    })),
  );
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const prefersReducedMotion = useReducedMotion();
  const videoY = useTransform(scrollYProgress, [0.54, 0.76], [prefersReducedMotion ? 0 : 20, 0]);
  const videoScale = useTransform(
    scrollYProgress,
    [0.54, 0.76],
    [prefersReducedMotion ? 1 : 0.96, 1],
  );

  useEffect(() => {
    const stage = avatarStageRef.current;
    if (!stage) return;

    let frameId: number | null = null;
    const measureAvatarOffsets = () => {
      frameId = null;
      const stageRect = stage.getBoundingClientRect();
      const isMobileLayout = stageRect.width < 768;
      const formationWidth = stageRect.width * (isMobileLayout ? 0.8 : 0.58);
      const formationLeft = stageRect.left + (stageRect.width - formationWidth) / 2;
      const formationTop = stageRect.top + stageRect.height * (isMobileLayout ? 0.32 : 0.26);
      const formationDepth = stageRect.height * (isMobileLayout ? 0.24 : 0.38);
      const midpoint = (avatars.length - 1) / 2;

      setAvatarOffsets(
        avatarRefs.current.map((avatar, index) => {
          if (!avatar) {
            return {
              vX: 0,
              vY: 0,
              centerX: 0,
              centerY: 0,
              exitY: stageRect.height,
            };
          }
          const avatarRect = avatar.getBoundingClientRect();
          const avatarCenterX = avatarRect.left + avatarRect.width / 2;
          const avatarCenterY = avatarRect.top + avatarRect.height / 2;
          const progressAcrossFormation = index / Math.max(avatars.length - 1, 1);
          const distanceFromCenter = Math.abs(index - midpoint) / Math.max(midpoint, 1);
          const formationX = formationLeft + formationWidth * progressAcrossFormation;
          const formationY = formationTop + (1 - distanceFromCenter) * formationDepth;

          return {
            vX: formationX - avatarCenterX,
            vY: formationY - avatarCenterY,
            centerX: stageRect.left + stageRect.width / 2 - avatarCenterX,
            centerY: stageRect.top + stageRect.height / 2 - avatarCenterY,
            exitY: stageRect.height + (isMobileLayout ? 48 : 120),
          };
        }),
      );
    };
    const scheduleMeasurement = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(measureAvatarOffsets);
    };

    const resizeObserver = new ResizeObserver(scheduleMeasurement);
    resizeObserver.observe(stage);
    avatarRefs.current.forEach((avatar) => {
      if (avatar) resizeObserver.observe(avatar);
    });
    scheduleMeasurement();

    return () => {
      resizeObserver.disconnect();
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative px-2 md:px-3 pt-2 md:pt-3 z-0   w-full h-auto "
    >
      <div className="w-full relative rounded-3xl bgGradient pt-20 flex flex-col gap-6  items-center h-full z-10 mx-auto   ">
        <div
          ref={contentRef}
          className="relative px-2 md:px-24 z-10  max-w-7xl mt-10 md:mt-20  mx-auto flex  w-full  flex-col gap-6 items-center text-center "
        >
          <h1 className="heading text-4xl md:text-6xl max-w-3xl text-[#0B0C0E]">
            {/* {t("heading")} */}
            One platform, every academic workflow
          </h1>
          <p className="lead text-lg text-[#44494E] font-regular leading-7 max-w-154">
            {/* {t("subheading")} */}
            eLearning unifies admissions, registration, results, hostel allocation, payments,
            clearance, and transcripts into one connected system built around how universities
            actually operate.
          </p>
          <div className=" flex gap-4 ">
            <LoadingButton>
              {/* {t("bookDemo")} */}
              Book a Demo
              <Icon
                name="right"
                variant="cute-regular"
                sizeClass="text-base "
                className="text-base-white"
              />
            </LoadingButton>
            <LoadingButton otherStyles="!border !border-muted !bg-base-white !text-base-black">
              {/* {t("exploreFeatures")} */}
              Explore Feature
              <Icon name="right" variant="cute-regular" sizeClass="text-base " className="" />
            </LoadingButton>
          </div>
          <div className="relative flex  w-full justify-center h-full max-h-[300px] ">
            <div ref={avatarStageRef} className="relative h-[100px] md:h-[700px]   w-full  ">
              {avatars.map((avatar, i) => (
                <HeroAvatar
                  key={i}
                  avatar={avatar}
                  offset={avatarOffsets[i]}
                  scrollYProgress={scrollYProgress}
                  prefersReducedMotion={prefersReducedMotion}
                  index={i}
                  avatarRef={(element) => {
                    avatarRefs.current[i] = element;
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <motion.video
          controls
          autoPlay={false}
          src={examSessionVideo}
          playsInline
          // preload=""
          className="relative max-w-7xl z-10 h-full aspect-6/8 md:aspect-video w-full mb-10 md:mb-auto md:max-h-[688px] rounded-4xl md:rounded-b-none border-b-8 md:border-b-0 border-x-8 border-t-8 border-base-white object-cover outline-8 outline-[#06BAD614] will-change-transform"
          style={{ y: videoY, scale: videoScale }}
        ></motion.video>
      </div>
    </section>
  );
}
