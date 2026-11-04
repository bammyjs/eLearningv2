import type { ReactNode } from "react";
import { LoadingButton } from "../components/ui/LoadingButton";
import Icon from "../components/Icon";
import LogoLoopSection from "./LogoLoopSection";
import { ScrollRevealGroup, ScrollRevealItem } from "./ScrollReveal";

export function Hero({
  eyebrow,
  heading,
  subheading,
  children,
}: {
  eyebrow?: string;
  heading: ReactNode;
  subheading: string;
  children: ReactNode;
}) {
  return (
    <section id="hero" className="relative px-2 md:px-3 pt-3 z-0   w-full h-auto ">
      <div className="w-full relative rounded-3xl bgGradient pt-20 flex flex-col gap-6 md:gap-10   items-center h-full z-10 mx-auto  overflow-hidden ">
        <ScrollRevealGroup
          className="relative px-2 md:px-24 z-10  max-w-7xl mt-10 md:mt-20  mx-auto flex  w-full  flex-col gap-6 items-center text-center "
          staggerChildren={0.1}
        >
          <ScrollRevealItem>
            {eyebrow && (
              <p className="mb-3 rounded-full bg-[#06BAD61F]  px-3 py-1 text-xs font-jetbrains font-medium tracking-[.14em] text-text-muted">
                {eyebrow}
              </p>
            )}
          </ScrollRevealItem>
          <ScrollRevealItem preset="soft-blur">{heading}</ScrollRevealItem>
          <ScrollRevealItem>
            <p className="lead text-base md:text-lg text-[#44494E] font-regular leading-7 max-w-154">
              {subheading}
            </p>
          </ScrollRevealItem>
          <ScrollRevealItem className="w-full">
            <div className="relative  flex gap-4  w-full justify-center h-full mt-4">
              <div className=" flex  gap-4 w-full max-w-sm">
                <LoadingButton otherStyles="flex-1 !border">
                  {/* {t("bookDemo")}*/}
                  Book a Demo
                  <Icon
                    name="right"
                    variant="cute-regular"
                    sizeClass="text-base "
                    className="text-base-white"
                  />
                </LoadingButton>
                <LoadingButton otherStyles="!border flex-1 !border-muted !bg-base-white !text-base-black">
                  {/* {t("exploreFeatures")} */}
                  Explore Features
                  <Icon name="right" variant="cute-regular" sizeClass="text-base " className="" />
                </LoadingButton>
              </div>
            </div>
          </ScrollRevealItem>
        </ScrollRevealGroup>
        {children}
        <LogoLoopSection />
      </div>
    </section>
  );
}
