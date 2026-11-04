import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import ShapeGrid from "../components/ShapeGrid";
import FlexBubble from "../components/FlexBubble";

const needs = [
  {
    id: "admissions",
    title: "Admissions Management",
    description: "End-to-end application intake, review, shortlisting, and offer letter generation",
    icon: "right",
    bgColor: "bg-[#FFB60A]/50",
    accent: "#FFB60A",
  },
  {
    id: "registration",
    title: "Course Registration",
    description:
      "Online registration with prerequisite checks, timetable clash detection, and approval flows.",
    icon: "book",
    bgColor: "bg-[#2661EF]/50",
    accent: "#2661EF",
  },
  {
    id: "registration",
    title: "Course Registration",
    description:
      "Online registration with prerequisite checks, timetable clash detection, and approval flows.",
    icon: "book",
    bgColor: "bg-[#2661EF]/50",
    accent: "#2661EF",
  },
  {
    id: "registration",
    title: "Course Registration",
    description:
      "Online registration with prerequisite checks, timetable clash detection, and approval flows.",
    icon: "book",
    bgColor: "bg-[#2661EF]/50",
    accent: "#2661EF",
  },
  {
    id: "registration",
    title: "Course Registration",
    description:
      "Online registration with prerequisite checks, timetable clash detection, and approval flows.",
    icon: "book",
    bgColor: "bg-[#2661EF]/50",
    accent: "#2661EF",
  },
  {
    id: "registration",
    title: "Course Registration",
    description:
      "Online registration with prerequisite checks, timetable clash detection, and approval flows.",
    icon: "book",
    bgColor: "bg-[#2661EF]/50",
    accent: "#2661EF",
  },
];

export default function InstitutionNeeds() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [panelStep, setPanelStep] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<Array<HTMLElement | null>>([]);
  const activeRef = useRef(0);
  const targetIndexRef = useRef<number | null>(null);

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

  useEffect(() => {
    const firstPanel = panelRefs.current[0];
    const secondPanel = panelRefs.current[1];
    if (!firstPanel || !secondPanel) return;

    const measurePanelStep = () => {
      setPanelStep(secondPanel.offsetLeft - firstPanel.offsetLeft);
    };

    const resizeObserver = new ResizeObserver(measurePanelStep);
    resizeObserver.observe(firstPanel);
    resizeObserver.observe(secondPanel);
    measurePanelStep();

    return () => resizeObserver.disconnect();
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
    <section id="institutionNeeds" className="relative w-full bg-s py-20 z-10">
      <div className="absolute top-0 w-full flex items-center gap-4">
        <div className="flex-1 w-ful h-0.5  bg-[#F1F4F7]" />
        <svg
          width="32"
          height="24"
          viewBox="0 0 32 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.869 17.3045C24.6506 17.6809 23.7131 18.5291 23.2 19.5813C23.1191 19.747 23.1825 19.947 23.3441 20.0385C24.3725 20.6138 25.6298 20.7837 26.8482 20.4073C28.0667 20.031 29.0041 19.1828 29.5173 18.1306C29.5981 17.9649 29.5348 17.7649 29.3732 17.6733C28.3448 17.098 27.0875 16.9282 25.869 17.3045Z"
            fill="#E3E7EB"
          />
          <path
            d="M22.4149 15.8108C23.0892 16.8792 23.2412 18.1238 22.9382 19.2521C22.8893 19.4327 22.7083 19.5446 22.5239 19.5086C21.3661 19.2841 20.3018 18.6028 19.6258 17.5362C18.9515 16.4678 18.7993 15.2231 19.1025 14.0949C19.1513 13.9142 19.3326 13.8025 19.5166 13.8383C20.6746 14.063 21.7389 14.7442 22.4149 15.8108Z"
            fill="#E3E7EB"
          />
          <path
            d="M23.8534 11.9152C24.702 12.8548 25.0652 14.0581 24.9582 15.2221C24.9418 15.4058 24.7824 15.5444 24.5973 15.5409C23.4158 15.5134 22.2478 15.0214 21.3988 14.0815C20.5502 13.1418 20.1873 11.9387 20.2941 10.7746C20.3106 10.5909 20.4697 10.4522 20.6551 10.4559C21.8364 10.4832 23.0044 10.9753 23.8534 11.9152Z"
            fill="#E3E7EB"
          />
          <path
            d="M23.1625 7.53564C24.0575 8.12097 24.62 9.01752 24.7984 9.984C24.8323 10.1668 24.7122 10.3468 24.5275 10.3878C23.5557 10.6036 22.5016 10.4432 21.607 9.85809C20.7122 9.27284 20.1497 8.37633 19.9712 7.40976C19.9373 7.22686 20.0573 7.04686 20.242 7.00589C21.2137 6.79008 22.2677 6.9504 23.1625 7.53564Z"
            fill="#E3E7EB"
          />
          <path
            d="M21.5401 4.31629C22.2337 4.69866 22.7032 5.32675 22.8974 6.02911C22.9392 6.18201 22.8488 6.34063 22.6965 6.38599C21.9892 6.59148 21.2028 6.52601 20.5088 6.14224C19.8149 5.75843 19.3457 5.13174 19.1515 4.42938C19.1097 4.27648 19.2001 4.1179 19.3524 4.07255C20.0598 3.86701 20.8462 3.93248 21.5401 4.31629Z"
            fill="#E3E7EB"
          />
          <path
            d="M27.1738 13.1589C26.0776 13.804 25.3637 14.8423 25.1091 15.9837C25.0697 16.1645 25.1788 16.345 25.3591 16.3958C26.4941 16.7181 27.7564 16.5947 28.8506 15.9511C29.9449 15.3076 30.6608 14.2677 30.9154 13.1263C30.9548 12.9454 30.8457 12.765 30.6654 12.7142C29.5303 12.3919 28.2681 12.5154 27.1738 13.1589Z"
            fill="#E3E7EB"
          />
          <path
            d="M27.5477 8.7997C26.5117 9.53559 25.8905 10.6306 25.7362 11.7893C25.713 11.973 25.8371 12.1433 26.0213 12.1787C27.1803 12.4032 28.4273 12.1728 29.4617 11.4388C30.4978 10.7029 31.1185 9.60763 31.2728 8.44891C31.2964 8.2655 31.1718 8.09493 30.9881 8.05982C29.8291 7.83528 28.5822 8.06562 27.5477 8.7997Z"
            fill="#E3E7EB"
          />
          <path
            d="M25.4003 5.70038C24.7702 6.59449 24.583 7.66258 24.7911 8.65069C24.8262 8.81666 24.9856 8.9267 25.1551 8.90104C26.1664 8.75088 27.114 8.20542 27.7437 7.31107C28.3739 6.41696 28.561 5.34891 28.353 4.36084C28.3179 4.19478 28.1585 4.08466 27.9891 4.11028C26.9776 4.26078 26.0301 4.80602 25.4003 5.70038Z"
            fill="#E3E7EB"
          />
          <path
            d="M23.8246 3.3265C23.4573 4.11963 23.4578 4.98594 23.7567 5.7363C23.8128 5.87824 23.9754 5.95149 24.1214 5.90123C24.8927 5.63475 25.5586 5.06918 25.9259 4.27731C26.2934 3.48409 26.2928 2.61773 25.9938 1.86762C25.9376 1.72577 25.7752 1.65237 25.6292 1.70268C24.8576 1.96906 24.1921 2.53473 23.8246 3.3265Z"
            fill="#E3E7EB"
          />
          <path
            d="M20.4972 2.74724C20.8962 3.51514 21.58 4.04343 22.3553 4.27204C22.5038 4.31582 22.6644 4.23474 22.7148 4.08903C22.9753 3.33084 22.9367 2.47371 22.5377 1.70732C22.1388 0.940959 21.455 0.411176 20.6797 0.182434C20.5313 0.138527 20.3707 0.219572 20.3202 0.36565C20.0598 1.12362 20.0984 1.98079 20.4972 2.74724Z"
            fill="#E3E7EB"
          />
          <path
            d="M6.13773 17.5098C7.34569 17.9149 8.25998 18.7851 8.74499 19.8489C8.82129 20.0165 8.75239 20.2151 8.58854 20.3026C7.54486 20.8536 6.28337 20.9936 5.07549 20.5884C3.86754 20.1833 2.95324 19.3131 2.46819 18.2493C2.39193 18.0817 2.46084 17.8831 2.62464 17.7955C3.66837 17.2447 4.92981 17.1046 6.13773 17.5098Z"
            fill="#E3E7EB"
          />
          <path
            d="M9.62958 16.0975C8.92691 17.1495 8.74149 18.3902 9.01429 19.5252C9.05826 19.707 9.23641 19.823 9.42133 19.7915C10.5851 19.5943 11.6671 18.9387 12.3717 17.8882C13.0743 16.8362 13.2598 15.5956 12.987 14.4605C12.943 14.2787 12.7648 14.1627 12.5799 14.1942C11.4161 14.3914 10.3342 15.047 9.62958 16.0975Z"
            fill="#E3E7EB"
          />
          <path
            d="M8.29561 12.1692C7.42185 13.0886 7.02677 14.2827 7.10239 15.449C7.11388 15.633 7.2693 15.7754 7.45469 15.7761C8.63631 15.7768 9.81728 15.3125 10.691 14.3931C11.5648 13.4738 11.9598 12.2796 11.8843 11.1134C11.8728 10.9293 11.7173 10.7869 11.5319 10.7862C10.3503 10.7855 9.16935 11.2498 8.29561 12.1692Z"
            fill="#E3E7EB"
          />
          <path
            d="M9.10335 7.80775C8.19311 8.37166 7.60672 9.25458 7.40245 10.2166C7.36359 10.3986 7.47868 10.5814 7.66222 10.6267C8.62789 10.8655 9.68581 10.7302 10.596 10.1663C11.5063 9.60244 12.0927 8.71952 12.2969 7.75753C12.3358 7.57553 12.2207 7.39272 12.0372 7.34737C11.0714 7.10861 10.0136 7.24389 9.10335 7.80775Z"
            fill="#E3E7EB"
          />
          <path
            d="M10.8119 4.62797C10.1083 4.99379 9.62212 5.6106 9.40916 6.30807C9.36324 6.45995 9.44942 6.62066 9.60036 6.66961C10.302 6.89182 11.0899 6.84499 11.794 6.47774C12.498 6.11049 12.9838 5.4951 13.1967 4.79763C13.2427 4.64575 13.1565 4.48504 13.0055 4.43609C12.3039 4.21389 11.516 4.26072 10.8119 4.62797Z"
            fill="#E3E7EB"
          />
          <path
            d="M4.94295 13.3332C6.02142 14.0041 6.70731 15.059 6.93122 16.2061C6.96573 16.3878 6.85182 16.5656 6.67026 16.6121C5.52692 16.9074 4.26836 16.7541 3.19174 16.0849C2.11508 15.4156 1.42734 14.3591 1.20346 13.212C1.16894 13.0303 1.28285 12.8524 1.46438 12.806C2.60772 12.5107 3.86628 12.664 4.94295 13.3332Z"
            fill="#E3E7EB"
          />
          <path
            d="M4.68633 8.96702C5.70229 9.72722 6.29378 10.8366 6.41696 11.9986C6.43558 12.1826 6.30661 12.3501 6.1217 12.381C4.95703 12.578 3.7166 12.3183 2.70234 11.5598C1.68634 10.7996 1.09489 9.6902 0.971712 8.52821C0.953091 8.34422 1.08207 8.17671 1.26698 8.14581C2.43164 7.94883 3.67208 8.20859 4.68633 8.96702Z"
            fill="#E3E7EB"
          />
          <path
            d="M6.91672 5.91997C7.52261 6.82876 7.68101 7.90102 7.44642 8.88393C7.40682 9.04898 7.24464 9.15516 7.07565 9.12563C6.06903 8.95139 5.13637 8.38366 4.53041 7.47489C3.92452 6.5661 3.76612 5.49384 4.0007 4.51092C4.04027 4.34591 4.20242 4.23971 4.37147 4.26922C5.37809 4.44347 6.31076 5.0112 6.91672 5.91997Z"
            fill="#E3E7EB"
          />
          <path
            d="M8.55702 3.58407C8.90287 4.38565 8.87912 5.2517 8.56024 5.99471C8.50029 6.13525 8.33581 6.20463 8.19125 6.15094C7.42711 5.86638 6.77691 5.28507 6.43077 4.48486C6.08492 3.68328 6.10865 2.81728 6.42755 2.07422C6.4875 1.93368 6.65198 1.8643 6.79654 1.91799C7.56069 2.20255 8.21086 2.7839 8.55702 3.58407Z"
            fill="#E3E7EB"
          />
          <path
            d="M11.8957 3.08381C11.4763 3.842 10.7785 4.35395 9.99732 4.56415C9.84764 4.60439 9.68927 4.5195 9.64283 4.37263C9.40272 3.60854 9.46436 2.75256 9.88368 1.99579C10.303 1.23903 11.0008 0.725661 11.782 0.515455C11.9317 0.475237 12.0901 0.560081 12.1365 0.706981C12.3766 1.47104 12.315 2.32703 11.8957 3.08381Z"
            fill="#E3E7EB"
          />
        </svg>
        <div className="flex-1 w-ful h-0.5  bg-[#F1F4F7]" />
      </div>
      <div className="flex flex-col gap-4 items-center pb-14 text-center md:pb-20">
        <span className={`mb-3  flex items-baseline gap-2 `}>
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

          <p className="text-xs font-jetbrains font-medium text-[#06BAD6]">
            ONE CONNECTED ECOSYSTEM
          </p>
        </span>
        <h2 className="heading2 mx-auto max-w-3xl px-4 text-center text-3xl text-[#0B0C0E] md:text-5xl">
          Everything your institution needs, expertly built in.
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="relative mt-10  px-4 md:px-8"
        style={{ height: `${Math.max(needs.length, 2) * 100}vh` }}
      >
        <div className="sticky  top-0 h-svh md:top-10 md:h-[calc(100svh-5rem)]">
          <div className="mx-auto flex h-full w-full max-w-7xl flex-col gap-4 md:flex-row md:items-end md:gap-8">
            <aside
              className="hidden h-full flex-none flex-col justify-end gap-2  p-2 md:flex"
              aria-label="Institution needs"
            >
              {needs.map((need, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    // key={need.id}
                    key={`${need.id}-${index}-desktop`}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Show ${need.title}`}
                    aria-pressed={isActive}
                    // className={`relative ${isActive ? "z-20" : "z-10 hover:z-20"}`}
                    // className={`relative  transition-colors duration-300 ${isActive ? "bg-[#0B0C0E] text-base-white" : "bg-muted text-[#0B0C0E] hover:bg-[#0B0C0E]/10"}`}
                  >
                    <FlexBubble
                      className="mx-auto size-12"
                      filled={false}
                      fill={isActive ? "#090C10" : undefined}
                      strokeWidth={isActive ? 0 : 8}
                      icon={need.icon}
                      iconSizeClass="text-2xl"
                      iconClassName={isActive ? "text-white" : "text-[#8B95A5]"}
                    />
                  </button>
                  // <button
                  //   key={need.id}
                  //   type="button"
                  //   onClick={() => goTo(index)}
                  //   aria-label={`Show ${need.title}`}
                  //   aria-pressed={isActive}
                  //   className={`rounded-md p-2 transition-colors duration-300 ${isActive ? "bg-[#0B0C0E] text-base-white" : "bg-muted text-[#0B0C0E] hover:bg-[#0B0C0E]/10"}`}
                  // >
                  //   <Icon
                  //     name={need.icon}
                  //     variant="cute-regular"
                  //     sizeClass="text-2xl"
                  //   />
                  // </button>
                );
              })}
            </aside>

            <div className="order-1 min-h-0 w-full flex-1 overflow-hidden  rounded-3xl md:order-0 md:h-full">
              <motion.div
                className="flex h-full gap-10 "
                animate={{ x: -activeIndex * panelStep }}
                transition={{
                  type: "spring",
                  stiffness: 130,
                  damping: 22,
                  mass: 0.7,
                }}
              >
                {needs.map((need, index) => (
                  <article
                    key={need.id}
                    ref={(element) => {
                      panelRefs.current[index] = element;
                    }}
                    className="flex h-full w-full shrink-0 flex-col md:w-[1023px] "
                    aria-hidden={activeIndex !== index}
                  >
                    <h3 className="mt-3 text-2xl font-bogoss font-medium tracking-[-.045em]">
                      {need.title}
                    </h3>
                    <p className="font-bogoss text-sm text-text-muted md:text-base">
                      {need.description}
                    </p>
                    <div className="relative rounded-3xl mt-4 min-h-0 w-full flex-1 overflow-visible px-6 pb-18 pt-14 sm:block sm:min-h- sm:px-8 sm:pb-22 sm:pt-18 md:w-[1023px] lg:px-10 lg:pb-24 lg:pt-20">
                      <div
                        aria-hidden="true"
                        className={`absolute inset-0 z-0 ${need.bgColor} rounded-3xl overflow-hidden`}
                      >
                        <ShapeGrid
                          speed={0.05}
                          squareSize={50}
                          direction="diagonal"
                          borderColor={need.accent}
                          hoverFillColor={need.accent}
                          shape="square"
                          hoverTrailAmount={8}
                        />
                      </div>
                    </div>
                  </article>
                ))}
              </motion.div>
            </div>
            <aside
              className="order-1 mt-auto flex w-full items-center justify-between rounded-2xl  bg-base-white/90 p-2  md:hidden"
              aria-label="Institution needs"
            >
              {needs.map((need, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    // key={need.id}
                    key={`${need.id}-${index}-mobile`}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Show ${need.title}`}
                    aria-pressed={isActive}
                    // className={`relative ${isActive ? "z-20" : "z-10 hover:z-20"}`}
                    // className={`relative  transition-colors duration-300 ${isActive ? "bg-[#0B0C0E] text-base-white" : "bg-muted text-[#0B0C0E] hover:bg-[#0B0C0E]/10"}`}
                  >
                    <FlexBubble
                      className="mx-auto size-12"
                      filled={false}
                      fill={isActive ? "#090C10" : undefined}
                      strokeWidth={isActive ? 0 : 8}
                      icon={need.icon}
                      iconSizeClass="text-2xl"
                      iconClassName={isActive ? "text-white" : "text-[#8B95A5]"}
                    />
                  </button>
                  // <button
                  //   key={need.id}
                  //   type="button"
                  //   onClick={() => goTo(index)}
                  //   aria-label={`Show ${need.title}`}
                  //   aria-pressed={isActive}
                  //   className={`flex-1 rounded-md p-2 transition-colors duration-300 ${isActive ? "bg-[#0B0C0E] text-base-white" : "bg-muted text-[#0B0C0E] hover:bg-[#0B0C0E]/10"}`}
                  // >
                  //   <Icon
                  //     name={need.icon}
                  //     variant="cute-regular"
                  //     sizeClass="text-2xl"
                  //   />
                  // </button>
                );
              })}
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
