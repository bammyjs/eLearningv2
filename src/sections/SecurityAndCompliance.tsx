import SecurityFingerprintVisual from "../components/SecurityFingerprintVisual";
import { ScrollReveal } from "../components/ScrollReveal";
import pattern from "../assets/Pattern2.png";
import { LoadingButton } from "../components/ui/LoadingButton";
import { Icon } from "../components/Icon";

export default function SecurityAndCompliance() {
  return (
    <section
      id="securityAndCompliance"
      className="px-2 md:px-3 pt-3 z-0   w-full h-auto "
    >
      <div className="w-full relative rounded-3xl bg-[#090C10]  flex flex-col gap-6 md:gap-10   items-center h-full z-10 mx-auto  overflow-hidden ">
        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 overflow-visible  px-4 py-12 md:rounded-[40px] md:px-12  lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-8 lg:px-16 ">
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl md:rounded-[40px]"
            aria-hidden
          >
            <img
              src={pattern}
              alt=""
              className="h-full w-full object-cover opacity-[0.35]"
            />
          </div>

          <ScrollReveal
            className="relative z-10 flex flex-col items-start gap-5"
            preset="soft-blur"
            once
          >
            <p className="mb-1 flex items-center gap-2 font-jetbrains text-xs font-medium tracking-[0.14em] text-[#06BAD6]">
              <svg
                width="6"
                height="8"
                viewBox="0 0 6 8"
                fill="none"
                aria-hidden
              >
                <rect x="4" y="2" width="2" height="2" fill="#06BAD6" />
                <rect y="6" width="2" height="2" fill="#06BAD6" />
                <rect x="4" y="6" width="2" height="2" fill="#06BAD6" />
              </svg>
              DATA SECURITY AND COMPLIANCE
            </p>
            <h2 className="heading2 max-w-xl text-3xl text-white md:max-w-2xl md:text-5xl md:leading-[1.08]">
              Security isn&apos;t just a feature. It&apos;s the foundation of
              everything.
            </h2>
            <p className="max-w-xl text-base font-normal leading-7 text-[#9AA0A6] md:max-w-2xl md:text-lg">
              Security is the cornerstone of our service, not merely an add-on.
              Your data remains exclusively yours, with every response clearly
              traced back to its original source. Our infrastructure, proudly
              based in Nigeria, ensures that your information is securely stored
              separately, providing robust protection and transparency from the
              very beginning of our partnership.
            </p>
            <LoadingButton
              type="button"
              otherStyles="!mt-1 !border-0 !bg-white !px-5 !py-3 !text-sm !text-[#090C10] hover:!bg-white/90"
            >
              Contact Sales
              <Icon
                name="right"
                variant="cute-regular"
                sizeClass="text-base"
                className="text-[#090C10]"
              />
            </LoadingButton>
          </ScrollReveal>
          <ScrollReveal
            className="relative z-10 flex w-full min-w-0 justify-center overflow-visible lg:justify-end"
            preset="soft-blur"
            once
          >
            <SecurityFingerprintVisual />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
