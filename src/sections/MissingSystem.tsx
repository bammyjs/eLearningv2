import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import Profile1 from "../assets/Profile picture.png";
import Profile2 from "../assets/Profile picture-1.png";
import Profile3 from "../assets/Profile picture-2.png";
import Profile4 from "../assets/Profile picture-3.png";
import Profile5 from "../assets/Profile picture-4.png";
import Profile6 from "../assets/Profile picture-5.png";

const Background = new URL("../assets/LooperGroup.png", import.meta.url).href;

const AVATAR_IMAGES = [Profile1, Profile2, Profile3, Profile4, Profile5, Profile6];

const AVATAR_COUNT = 18;
const END_VISIBLE_COUNT = 12;
const MAX_RING_WIDTH = 1246;
const avatars = Array.from(
  { length: AVATAR_COUNT },
  (_, index) => AVATAR_IMAGES[index % AVATAR_IMAGES.length],
);

const APPEAR_STAGGER = 0.05;
const APPEAR_WINDOW = AVATAR_COUNT * APPEAR_STAGGER + 0.45;
const ORBIT_ROTATION = 360;
const FLUSH_DURATION = 1.85;
const SETTLE_HOLD = 2.2;
const OPEN_DURATION = 1.55;
const CIRCLE_HOLD = 0.65;
const EASE = [0.22, 1, 0.36, 1] as const;

type RingMetrics = {
  startRadius: number;
  endRadius: number;
  startSize: number;
  endSize: number;
  startCenterY: number;
  endCenterY: number;
  startStageHeight: number;
  endStageHeight: number;
  endVisibleCount: number;
};

function lerp(from: number, to: number, t: number) {
  return from + (to - from) * t;
}

function getAvatarPoint(
  index: number,
  count: number,
  radius: number,
  size: number,
  spread: number,
  rotation: number,
) {
  const closed = (spread - 180) / 180;
  const step = spread / (Math.max(count - 1, 1) + closed);
  const origin = -90 - (360 - spread) / 2;
  const angle = ((origin + index * step + rotation) * Math.PI) / 180;

  return {
    x: Math.cos(angle) * radius - size / 2,
    y: Math.sin(angle) * radius - size / 2,
  };
}

function semicircleFits(count: number, size: number, gap: number, availableWidth: number) {
  const radius = ((count - 1) * (size + gap)) / Math.PI;
  return 2 * radius + size <= availableWidth;
}

function measureRing(width: number): RingMetrics {
  const stageWidth = Math.min(width, MAX_RING_WIDTH);
  const isDesktop = stageWidth >= 768;
  const startSize = isDesktop ? 72 : 40;
  const startGap = isDesktop ? 16 : 8;
  const sideInset = isDesktop ? 96 : 16;
  const topPad = isDesktop ? 32 : 16;
  const bottomPad = isDesktop ? 32 : 16;
  const headerGap = isDesktop ? 32 : 20;
  const startRadius = (AVATAR_COUNT * (startSize + startGap)) / (2 * Math.PI);

  let endSize = isDesktop ? 110 : 52;
  let endGap = isDesktop ? 28 : 10;
  let endVisibleCount = isDesktop ? END_VISIBLE_COUNT : 8;
  const availableWidth = Math.max(stageWidth - sideInset * 2, endSize * 3);

  while (!semicircleFits(endVisibleCount, endSize, endGap, availableWidth) && endVisibleCount > 5) {
    if (endSize > 36) endSize -= 2;
    else if (endGap > 6) endGap -= 2;
    else endVisibleCount -= 1;
  }

  const gapBasedEndRadius = ((endVisibleCount - 1) * (endSize + endGap)) / Math.PI;
  const widthBasedEndRadius = (availableWidth - endSize) / 2;
  const endRadius = Math.min(widthBasedEndRadius, gapBasedEndRadius);
  const startCenterY = topPad + startRadius + startSize / 2;
  const startStageHeight = startCenterY + startRadius + startSize / 2 + bottomPad;
  const endCenterY = headerGap + endRadius + endSize / 2;
  const endStageHeight = endCenterY;

  return {
    startRadius,
    endRadius,
    startSize,
    endSize,
    startCenterY,
    endCenterY,
    startStageHeight,
    endStageHeight,
    endVisibleCount,
  };
}

function RingAvatar({
  image,
  index,
  progress,
  metrics,
  visible,
  prefersReducedMotion,
}: {
  image: string;
  index: number;
  progress: MotionValue<number>;
  metrics: RingMetrics;
  visible: boolean;
  prefersReducedMotion: boolean | null;
}) {
  const staysOnRing = index < metrics.endVisibleCount;
  const x = useTransform(progress, (t) => {
    const radius = lerp(metrics.startRadius, metrics.endRadius, t);
    const size = lerp(metrics.startSize, metrics.endSize, t);
    const spread = staysOnRing ? lerp(360, 180, t) : 360;
    const count = staysOnRing ? lerp(AVATAR_COUNT, metrics.endVisibleCount, t) : AVATAR_COUNT;
    const rotation = lerp(0, ORBIT_ROTATION, t);
    return getAvatarPoint(index, count, radius, size, spread, rotation).x;
  });
  const y = useTransform(progress, (t) => {
    const radius = lerp(metrics.startRadius, metrics.endRadius, t);
    const size = lerp(metrics.startSize, metrics.endSize, t);
    const spread = staysOnRing ? lerp(360, 180, t) : 360;
    const count = staysOnRing ? lerp(AVATAR_COUNT, metrics.endVisibleCount, t) : AVATAR_COUNT;
    const rotation = lerp(0, ORBIT_ROTATION, t);
    return getAvatarPoint(index, count, radius, size, spread, rotation).y;
  });
  const size = useTransform(progress, [0, 1], [metrics.startSize, metrics.endSize]);
  const settledFade = useTransform(progress, [0.28, 0.72], [1, staysOnRing ? 1 : 0]);

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 will-change-transform"
      style={{ x, y, width: size, height: size }}
      initial={
        prefersReducedMotion
          ? { opacity: staysOnRing ? 1 : 0, scale: 1 }
          : { opacity: 0, scale: 0.42 }
      }
      animate={
        visible
          ? {
              opacity: prefersReducedMotion && !staysOnRing ? 0 : 1,
              scale: 1,
            }
          : { opacity: 0, scale: 0.42 }
      }
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : {
              delay: index * APPEAR_STAGGER,
              type: "spring",
              stiffness: 220,
              damping: 18,
              mass: 0.7,
            }
      }
    >
      <motion.img
        src={image}
        alt=""
        style={{
          opacity: prefersReducedMotion ? (staysOnRing ? 1 : 0) : settledFade,
        }}
        className="h-full w-full max-w-none rounded-full object-cover"
      />
    </motion.div>
  );
}

export default function MissingSystem() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [metrics, setMetrics] = useState<RingMetrics>(() => measureRing(768));
  const [visible, setVisible] = useState(false);
  const hasAppearedRef = useRef(false);
  const isInView = useInView(stageRef, {
    once: false,
    amount: 0.35,
    margin: "0px 0px -12% 0px",
  });
  const prefersReducedMotion = useReducedMotion();
  const showAvatars = prefersReducedMotion || visible;
  const progress = useMotionValue(prefersReducedMotion ? 1 : 0);

  const centerY = useTransform(progress, [0, 1], [metrics.startCenterY, metrics.endCenterY]);
  const stageHeight = useTransform(
    progress,
    [0, 1],
    [metrics.startStageHeight, metrics.endStageHeight],
  );
  const captionOpacity = useTransform(progress, [0.86, 1], [0, 1]);
  const captionY = useTransform(progress, [0.86, 1], [10, 0]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const updateMetrics = () => {
      setMetrics(measureRing(stage.clientWidth));
    };

    updateMetrics();
    const observer = new ResizeObserver(updateMetrics);
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      progress.set(1);
      return;
    }

    if (!isInView) return;

    let cancelled = false;
    let playback: ReturnType<typeof animate> | null = null;
    const timeouts = new Set<number>();

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const timeoutId = window.setTimeout(() => {
          timeouts.delete(timeoutId);
          resolve();
        }, ms);
        timeouts.add(timeoutId);
      });

    const play = async () => {
      setVisible(true);
      if (!hasAppearedRef.current) {
        hasAppearedRef.current = true;
        await wait(APPEAR_WINDOW * 1000);
      }
      if (cancelled) return;

      while (!cancelled) {
        playback = animate(progress, 1, {
          duration: FLUSH_DURATION,
          ease: EASE,
        });
        await playback;
        if (cancelled) return;
        await wait(SETTLE_HOLD * 1000);
        if (cancelled) return;
        playback = animate(progress, 0, {
          duration: OPEN_DURATION,
          ease: EASE,
        });
        await playback;
        if (cancelled) return;
        await wait(CIRCLE_HOLD * 1000);
      }
    };

    void play();

    return () => {
      cancelled = true;
      playback?.stop();
      timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, [isInView, prefersReducedMotion, progress]);

  return (
    <section
      ref={sectionRef}
      id="missingSystem"
      className="bg-surface relative z-0 w-full overflow-x-clip [overflow-anchor:none]"
    >
      <div className="relative flex h-full w-full flex-col items-center justify-center pt-10 md:pt-16">
        <img
          src={Background}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full bg-transparent object-cover opacity-80"
        />

        <h2 className="font-bogoss max-w-2xl px-4 text-center text-2xl font-medium md:text-5xl">
          The missing operating system for tertiary education
        </h2>
        <div className="relative z-10 flex w-full flex-col items-center ">
          <motion.div
            ref={stageRef}
            className="relative w-full max-w-[1246px] overflow-hidden"
            style={{ height: stageHeight }}
          >
            <motion.div
              className="absolute left-1/2"
              style={{
                top: centerY,
                x: "-50%",
              }}
            >
              {avatars.map((image, index) => (
                <RingAvatar
                  key={`${image}-${index}`}
                  image={image}
                  index={index}
                  progress={progress}
                  metrics={metrics}
                  visible={showAvatars}
                  prefersReducedMotion={prefersReducedMotion}
                />
              ))}
            </motion.div>
          </motion.div>

          <motion.p
            className="font-jetbrains text-text-subtle pointer-events-none absolute inset-x-0 bottom-3 z-10 px-6 text-center text-[11px] leading-5 tracking-[0.12em] uppercase md:px-4 md:text-[10px] md:tracking-[0.22em]"
            style={{
              opacity: prefersReducedMotion ? 1 : captionOpacity,
              y: prefersReducedMotion ? 0 : captionY,
            }}
          >
            <span className="block md:inline">Simple to deploy.</span>{" "}
            <span className="block md:inline">Powerful in practice.</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
