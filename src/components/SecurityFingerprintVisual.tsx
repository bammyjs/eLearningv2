import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { useEffect, useMemo, useState } from "react";
import secfingerprintRaw from "../assets/secfingerprint.svg?raw";

const WIDTH = 432;
const HEIGHT = 596;
const CX = WIDTH / 2;
const CY = HEIGHT / 2;

const RING_PATHS = [
  "M216 0.5C335.017 0.5 431.5 96.9827 431.5 216V380C431.5 499.017 335.017 595.5 216 595.5C96.9826 595.5 0.5 499.017 0.5 380V216C0.5 96.9827 96.9826 0.5 216 0.5Z",
  "M216 25.5C321.21 25.5 406.5 110.79 406.5 216V380C406.5 485.21 321.21 570.5 216 570.5C110.79 570.5 25.5 485.21 25.5 380V216C25.5 110.79 110.79 25.5 216 25.5Z",
  "M216 46.5C307.403 46.5 381.5 120.597 381.5 212V384C381.5 475.403 307.403 549.5 216 549.5C124.597 549.5 50.5 475.403 50.5 384V212C50.5 120.597 124.597 46.5 216 46.5Z",
  "M216 71.5C293.596 71.5 356.5 134.404 356.5 212V384C356.5 461.596 293.596 524.5 216 524.5C138.404 524.5 75.5 461.596 75.5 384V212C75.5 134.404 138.404 71.5 216 71.5Z",
  "M216 96.5C279.789 96.5 331.5 148.211 331.5 212V384C331.5 447.789 279.789 499.5 216 499.5C152.211 499.5 100.5 447.789 100.5 384V212C100.5 148.211 152.211 96.5 216 96.5Z",
] as const;

/** arcSpan ≈ fraction of the ring lit (~0.5 ≈ half the stroke); scales down on inner rings. */
const RING_ACCENTS = [
  {
    color: "#22DB72",
    opacity: 0.58,
    arcSpan: 0.52,
    gradScale: 1.1,
    duration: 14,
    delay: 0,
  },
  {
    color: "#06BAD6",
    opacity: 0.5,
    arcSpan: 0.48,
    gradScale: 1.04,
    duration: 17,
    delay: 1.2,
  },
  {
    color: "#06BAD6",
    opacity: 0.62,
    arcSpan: 0.46,
    gradScale: 1,
    duration: 12,
    delay: 2.4,
  },
  {
    color: "#22DB72",
    opacity: 0.42,
    arcSpan: 0.42,
    gradScale: 0.94,
    duration: 19,
    delay: 0.8,
  },
  {
    color: "#FFFFFF",
    opacity: 0.58,
    arcSpan: 0.36,
    gradScale: 0.88,
    duration: 11,
    delay: 3.6,
  },
] as const;

function ringGradientEndpoints(gradScale: number) {
  return {
    x1: CX - 136 * gradScale,
    y1: CY - 249 * gradScale,
    x2: CX - 42 * gradScale,
    y2: CY - 66 * gradScale,
  };
}

function ArcGradientStops({
  color,
  opacity,
  arcSpan,
}: {
  color: string;
  opacity: number;
  arcSpan: number;
}) {
  const half = arcSpan / 2;
  const mid = 0.5;
  const start = mid - half;
  const end = mid + half;
  const feather = Math.min(0.07, arcSpan * 0.14);
  const rampIn = start + arcSpan * 0.12;
  const rampOut = end - arcSpan * 0.12;

  return (
    <>
      <stop offset="0" stopColor={color} stopOpacity={0} />
      <stop
        offset={String(Math.max(0, start - feather))}
        stopColor={color}
        stopOpacity={0}
      />
      <stop
        offset={String(Math.max(0, start))}
        stopColor={color}
        stopOpacity={opacity * 0.2}
      />
      <stop
        offset={String(Math.max(0, rampIn))}
        stopColor={color}
        stopOpacity={opacity * 0.85}
      />
      <stop offset={String(mid)} stopColor={color} stopOpacity={opacity} />
      <stop
        offset={String(Math.min(1, rampOut))}
        stopColor={color}
        stopOpacity={opacity * 0.85}
      />
      <stop
        offset={String(Math.min(1, end))}
        stopColor={color}
        stopOpacity={opacity * 0.2}
      />
      <stop
        offset={String(Math.min(1, end + feather))}
        stopColor={color}
        stopOpacity={0}
      />
      <stop offset="1" stopColor={color} stopOpacity={0} />
    </>
  );
}

function stripRingStrokes(svg: string) {
  return svg.replace(/<path d="M216[^"]*" stroke="[^"]*"[^/]*\/>/g, "");
}

function RotatingRingGradient({
  index,
  accent,
  animateRings,
}: {
  index: number;
  accent: (typeof RING_ACCENTS)[number];
  animateRings: boolean;
}) {
  const rotation = useMotionValue(0);
  const gradientTransform = useTransform(
    rotation,
    (deg) => `rotate(${deg} ${CX} ${CY})`,
  );
  const [gradientTransformAttr, setGradientTransformAttr] = useState(
    `rotate(0 ${CX} ${CY})`,
  );

  useMotionValueEvent(gradientTransform, "change", setGradientTransformAttr);

  useEffect(() => {
    if (!animateRings) return;
    const controls = animate(rotation, 360, {
      duration: accent.duration,
      delay: accent.delay,
      ease: "linear",
      repeat: Infinity,
    });
    return () => controls.stop();
  }, [accent.delay, accent.duration, animateRings, rotation]);

  const gradId = `sec-ring-grad-${index}`;
  const { x1, y1, x2, y2 } = ringGradientEndpoints(accent.gradScale);

  return (
    <linearGradient
      id={gradId}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      gradientUnits="userSpaceOnUse"
      gradientTransform={gradientTransformAttr}
    >
      <ArcGradientStops
        color={accent.color}
        opacity={accent.opacity}
        arcSpan={accent.arcSpan}
      />
    </linearGradient>
  );
}

function AnimatedRingsOverlay({ animateRings }: { animateRings: boolean }) {
  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      fill="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {RING_ACCENTS.map((accent, index) => (
          <RotatingRingGradient
            key={index}
            index={index}
            accent={accent}
            animateRings={animateRings}
          />
        ))}
      </defs>
      {RING_PATHS.map((d, index) => (
        <g key={index}>
          <path d={d} stroke="white" strokeOpacity={0.12} fill="none" />
          <path d={d} stroke={`url(#sec-ring-grad-${index})`} fill="none" />
        </g>
      ))}
    </svg>
  );
}

export default function SecurityFingerprintVisual() {
  const prefersReducedMotion = useReducedMotion();
  const animateRings = !prefersReducedMotion;

  const baseSvgMarkup = useMemo(() => {
    if (!animateRings) return secfingerprintRaw;
    return stripRingStrokes(secfingerprintRaw);
  }, [animateRings]);

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[432px] shrink-0"
      style={{ aspectRatio: `${WIDTH} / ${HEIGHT}` }}
      aria-hidden
      initial={false}
      animate={prefersReducedMotion ? {} : { y: [0, -4, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
    >
      {animateRings ? (
        <>
          <div
            className="pointer-events-none absolute inset-0 [&>svg]:h-full [&>svg]:w-full"
            dangerouslySetInnerHTML={{ __html: baseSvgMarkup }}
          />
          <AnimatedRingsOverlay animateRings={animateRings} />
        </>
      ) : (
        <div
          className="h-full w-full [&>svg]:h-full [&>svg]:w-full"
          dangerouslySetInnerHTML={{ __html: baseSvgMarkup }}
        />
      )}
    </motion.div>
  );
}
