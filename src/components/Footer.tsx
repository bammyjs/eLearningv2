import { footerNavItems } from "../data/navigation";
import {
  motion,
  useAnimationControls,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";
import ndpc from "../assets/logos/NDPC.png";
import brand from "../assets/logos/Brand.png";
import facebook from "../assets/logos/facebook.png";
import instagram from "../assets/logos/instagram.png";
import x from "../assets/logos/x.png";
import linkedin from "../assets/logos/linkedin.png";

const BAR_COUNT = 24;
const BRAND_COPIES = 6;

const socials = [
  {
    label: "Facebook",
    icon: facebook,
    link: "http",
  },
  {
    label: "Instagram",
    icon: instagram,
    link: "http",
  },
  {
    label: "Linkedin",
    icon: linkedin,
    link: "http",
  },
  {
    label: "X",
    icon: x,
    link: "http",
  },
];

function ScrollBrandStrip() {
  const stripRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const setWidthRef = useRef(1);
  const lastTouchY = useRef<number | null>(null);
  const offset = useMotionValue(0);
  const isInView = useInView(stripRef, { amount: 0.15 });
  const prefersReducedMotion = useReducedMotion();
  const x = useTransform(offset, (value) => {
    const width = setWidthRef.current;
    const wrapped = ((value % width) + width) % width;
    return -wrapped;
  });

  useEffect(() => {
    const set = setRef.current;
    if (!set) return;

    const measure = () => {
      const parent = set.parentElement;
      const gap = parent ? Number.parseFloat(getComputedStyle(parent).columnGap || "0") : 0;
      setWidthRef.current = Math.max(set.scrollWidth + gap, 1);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(set);
    set.querySelectorAll("img").forEach((image) => {
      image.addEventListener("load", measure);
    });
    return () => {
      observer.disconnect();
      set.querySelectorAll("img").forEach((image) => {
        image.removeEventListener("load", measure);
      });
    };
  }, []);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    const html = document.documentElement;
    const scroller = document.scrollingElement ?? html;

    const shift = (delta: number) => {
      if (delta === 0) return;
      offset.set(offset.get() + delta);
    };

    const scrollPage = (delta: number) => {
      scroller.scrollTop += delta;
    };

    const isPageAtBottom = () =>
      scroller.scrollTop + window.innerHeight >= scroller.scrollHeight - 4;

    const isOnStrip = (target: EventTarget | null) =>
      Boolean(stripRef.current?.contains(target as Node | null));

    const onWheel = (event: WheelEvent) => {
      const delta = event.deltaY;
      const onStrip = isOnStrip(event.target);

      if (delta > 0 && (onStrip || isPageAtBottom())) {
        event.preventDefault();
        shift(delta);
        return;
      }

      if (delta < 0 && onStrip) {
        event.preventDefault();
        scrollPage(delta);
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      lastTouchY.current = event.touches[0]?.clientY ?? null;
    };

    const onTouchMove = (event: TouchEvent) => {
      const currentY = event.touches[0]?.clientY;
      if (currentY == null || lastTouchY.current == null) return;
      const delta = lastTouchY.current - currentY;
      const onStrip = isOnStrip(event.target);

      if (delta > 0 && (onStrip || isPageAtBottom())) {
        event.preventDefault();
        shift(delta);
      } else if (delta < 0 && onStrip) {
        event.preventDefault();
        scrollPage(delta);
      }

      lastTouchY.current = currentY;
    };

    const onTouchEnd = () => {
      lastTouchY.current = null;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [isInView, offset, prefersReducedMotion]);

  const renderBrands = (keyPrefix: string) =>
    Array.from({ length: BRAND_COPIES }, (_, index) => (
      <img
        key={`${keyPrefix}-${index}`}
        src={brand}
        alt=""
        className="h-24 w-auto max-w-none md:h-52 "
      />
    ));

  return (
    <div
      ref={stripRef}
      className="w-full border-t border-muted overflow-hidden overscroll-none py-6 md:py-10 mt-4"
      aria-label="Provette brand"
    >
      <motion.div className="flex w-max gap-8 will-change-transform md:gap-12" style={{ x }}>
        <div ref={setRef} className="flex shrink-0 items-center gap-8 md:gap-12">
          {renderBrands("set")}
        </div>
        <div aria-hidden className="flex shrink-0 items-center gap-8 md:gap-12">
          {renderBrands("loop")}
        </div>
      </motion.div>
    </div>
  );
}

export function Footer() {
  const barAnimationControls = useAnimationControls();
  const groupedItems = footerNavItems.reduce<Record<string, typeof footerNavItems>>(
    (sections, item) => {
      if (!sections[item.section]) {
        sections[item.section] = [];
      }

      sections[item.section].push(item);
      return sections;
    },
    {},
  );

  return (
    <footer className="w-full bg-brand-base px-2 pb-2 footerGradient">
      <div className="flex flex-col items-center bg-surface rounded-b-3xl">
        <motion.div
          animate={barAnimationControls}
          className="w-full flex gap-2 h-full items-start"
          style={{
            gridTemplateColumns: `repeat(${BAR_COUNT}, minmax(0, 1fr))`,
          }}
        >
          {Array.from({ length: BAR_COUNT }, (_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 bg-brand-base justify-self-center hover:bg-base-white `}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
            />
          ))}
        </motion.div>
        <div className="container mx-auto flex flex-col gap-8 py-4 px-4  md:px-24 max-w-7xl">
          <div className=" grid grid-cols-2 gap-4 md:grid-cols-5">
            {Object.entries(groupedItems).map(([section, items]) => (
              <div key={section} className="p-3 flex flex-col gap-2 md:gap-4">
                <p className="text-base md:text-xl font-bogoss font-medium text-text-default ">
                  {section}
                </p>

                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={`${section}-${item.label}`}>
                      <a
                        href={item.route}
                        className="text-sm md:text-base font-saans font-medium text-text-subtle transition-colors hover:text-brand-accent"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4 item-center justify-between">
            <img src={ndpc} alt="ndpc" className="w-full max-w-[176px] h-12" />
            <p className="text-sm text-center flex items-center font-jetbrains font-medium uppercase">
              © 2026 eLearning - All rights reserved
            </p>
            <div className="flex items-center md:gap-4">
              {socials.map((social, i) => (
                <a key={i} href={social.link}>
                  <img src={social.icon} alt={social.label} />
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="w-full h-px bg-muted my-8" /> */}
        <ScrollBrandStrip />
      </div>
    </footer>
  );
}
