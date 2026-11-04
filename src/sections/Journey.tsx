import { LoadingButton } from "../components/ui/LoadingButton";
import Icon from "../components/Icon";
import { ScrollReveal } from "../components/ScrollReveal";

const Background2 = new URL("../assets/Image Container.png", import.meta.url).href;

export default function Journey() {
  return (
    <section
      id="journey"
      className=" relative bg-brand-base overflow-hidden py-10 md:py-20 w-full place-items-center "
    >
      <div
        aria-hidden="true"
        className=" -bottom-20 -right-20 w-[452px] h-[336px] absolute inset- z-0"
        style={{ backgroundImage: `url("${Background2}")` }}
      />
      {/*Begin your Journey */}
      <ScrollReveal
        amount={0.22}
        once
        y={28}
        duration={0.5}
        className="mx-auto w-full items-center flex flex-col md:flex-row md:gap-20 max-w-7xl rounded-3xl px-4 md:px-24"
      >
        <div className=" md:w-[50%] flex flex-col justify-center items-start gap-6">
          <p className="mb-3 rounded-full px-3 py-1 text-xs text-base-black font-jetbrains font-medium tracking-[.14em] bg-[#C1F2FA]">
            Begin Your Journey
          </p>
          <h2 className="heading2 max-w-3xl  text-3xl  text-white md:text-5xl">
            Ready to modernise your university's operations ?
          </h2>
        </div>
        <div className="md:w-[40%]  rounded-3xl mt-10 grid grid-cols-1 gap-8 md:gap-16 ">
          <p className="font-saans font-regular text-base-white md:text-sm">
            Join the expanding community of 50+ institutions using eLearning solutions. Enjoy a
            tailored live demo that fits your university's specific workflow. Discover how we can
            meet your unique needs!
          </p>
          <div className=" flex gap-4 ">
            <LoadingButton otherStyles="!bg-[#06BAD6]">
              Contact Sales
              <Icon
                name="right"
                variant="cute-regular"
                sizeClass="text-base "
                className="text-base-white"
              />
            </LoadingButton>
            <LoadingButton otherStyles="!border !border-muted !bg-base-white !text-base-black">
              Explore Features
              <Icon name="right" variant="cute-regular" sizeClass="text-base " className="" />
            </LoadingButton>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
