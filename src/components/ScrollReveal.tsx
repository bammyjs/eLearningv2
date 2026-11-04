import type { PropsWithChildren } from "react";
import { useMemo, useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

type RevealPreset = "fade-up" | "fade-left" | "fade-right" | "soft-pop" | "soft-blur";

type ScrollRevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  amount?: number;
  duration?: number;
  once?: boolean;
  scale?: number;
  preset?: RevealPreset;
}>;

type ScrollRevealGroupProps = PropsWithChildren<{
  className?: string;
  amount?: number;
  once?: boolean;
  delayChildren?: number;
  staggerChildren?: number;
}>;

type ScrollRevealItemProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  duration?: number;
  preset?: RevealPreset;
}>;

const EASE = [0.22, 1, 0.36, 1] as const;

function getRevealState({
  preset,
  x,
  y,
  scale,
}: {
  preset: RevealPreset;
  x: number;
  y: number;
  scale: number;
}) {
  switch (preset) {
    case "fade-left":
      return {
        hidden: { opacity: 0, x: x || 28 },
        visible: { opacity: 1, x: 0 },
      };
    case "fade-right":
      return {
        hidden: { opacity: 0, x: x || -28 },
        visible: { opacity: 1, x: 0 },
      };
    case "soft-pop":
      return {
        hidden: { opacity: 0, y, scale },
        visible: { opacity: 1, y: 0, scale: 1 },
      };
    case "soft-blur":
      return {
        hidden: { opacity: 0, y, filter: "blur(12px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      };
    case "fade-up":
    default:
      return {
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0 },
      };
  }
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 34,
  x = 0,
  amount = 0.2,
  duration = 0.56,
  once = false,
  scale = 0.98,
  preset = "fade-up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once, amount });
  const shouldReduceMotion = useReducedMotion();
  const { hidden, visible } = useMemo(
    () => getRevealState({ preset, x, y, scale }),
    [preset, scale, x, y],
  );
  const initialState = shouldReduceMotion ? visible : hidden;

  return (
    <motion.div
      ref={ref}
      initial={initialState}
      animate={isInView || shouldReduceMotion ? visible : hidden}
      transition={shouldReduceMotion ? { duration: 0, delay: 0 } : { duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealGroup({
  children,
  className,
  amount = 0.18,
  once = false,
  delayChildren = 0,
  staggerChildren = 0.1,
}: ScrollRevealGroupProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once, amount });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView || shouldReduceMotion ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: shouldReduceMotion ? 0 : delayChildren,
            staggerChildren: shouldReduceMotion ? 0 : staggerChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealItem({
  children,
  className,
  delay = 0,
  duration = 0.48,
  preset = "fade-up",
}: ScrollRevealItemProps) {
  const shouldReduceMotion = useReducedMotion();
  const { hidden, visible } = getRevealState({
    preset,
    x: 0,
    y: preset === "fade-up" || preset === "soft-blur" ? 28 : preset === "soft-pop" ? 18 : 0,
    scale: preset === "soft-pop" ? 0.965 : 1,
  });
  const hiddenState = shouldReduceMotion ? visible : hidden;

  return (
    <motion.div
      variants={{
        hidden: hiddenState,
        visible: {
          ...visible,
          transition: {
            duration: shouldReduceMotion ? 0 : duration,
            delay: shouldReduceMotion ? 0 : delay,
            ease: EASE,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
