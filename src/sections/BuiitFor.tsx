import Carousel from "../components/Carousel";
import ImageLoop from "../components/ImageLoop";
import studentImg from "../assets/graduating-student.jpg";
import one from "../assets/Frame 105.png";
import two from "../assets/Frame 106.png";
import three from "../assets/Frame 107.png";
import four from "../assets/Frame 108.png";
import five from "../assets/Frame 111.png";
import six from "../assets/Frame 105.png";
import Icon from "../components/Icon";
import { LoadingButton } from "../components/ui/LoadingButton";

type BuiltForItem = {
  id: number;
  title: string;
  description: string;
  rank: string;
  benefits: string[];
  image: string;
  overlayClass: string;
};

const pattern = new URL("../assets/pattern.png", import.meta.url).href;

const items: BuiltForItem[] = [
  {
    id: 1,
    title: "Administrators",
    description:
      "“For the first time, we can see the state of every student across every department — in one view, in real time.”",
    rank: "Registrar, University of Port Harcourt",
    benefits: [
      "Full-institution visibility across all departments",
      "Audit-ready reporting generated in seconds",
      "Reduce manual coordination effort by 60%",
      "Configurable approval workflows per department",
    ],
    image: studentImg,
    overlayClass: "bg-brand-base/80",
  },
  {
    id: 2,
    title: "Administrators",
    description:
      "“For the first time, we can see the state of every student across every department — in one view, in real time.”",
    rank: "Registrar, University of Port Harcourt",
    benefits: [
      "Full-institution visibility across all departments",
      "Audit-ready reporting generated in seconds",
      "Reduce manual coordination effort by 60%",
      "Configurable approval workflows per department",
    ],
    image: studentImg,
    overlayClass: "bg-brand-base/80",
  },
  {
    id: 3,
    title: "Administrators",
    description:
      "“For the first time, we can see the state of every student across every department — in one view, in real time.”",
    rank: "Registrar, University of Port Harcourt",
    benefits: [
      "Full-institution visibility across all departments",
      "Audit-ready reporting generated in seconds",
      "Reduce manual coordination effort by 60%",
      "Configurable approval workflows per department",
    ],
    image: studentImg,
    overlayClass: "bg-brand-base/80",
  },
];

const images = [
  { src: one, title: "ClockCloud" },
  { src: two, title: "Din" },
  {
    src: three,
    title: "Faculty",
  },
  {
    src: four,
    title: "Shook",
  },
  {
    src: five,
    title: "Strise",
  },
  {
    src: six,
    title: "Synthflow",
  },
];

export default function BuiltFor() {
  return (
    <section
      id="institutionNeeds"
      className="bg-base-white flex flex-col gap-5 md:gap-10 py-10 md:py-20 w-full  place-items-center z-10"
    >
      {/*Built for students */}
      <div className="mx-auto mt- w-full items-center    gap-8 max-w-7xl px-4 md:px-24">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="heading2 max-w-lg text-3xl text-center text-[#0B0C0E] md:text-5xl">
            Built for every moment of student life.
          </h2>
          <p className="lead text-lg text-text-muted text-center font-regular leading-7 max-w-md">
            Your academic journey, handled quietly in the background. You focus on what matters.
          </p>
        </div>
        {/*students carousel*/}
      </div>
      <ImageLoop imageLoop={images} />
      {/*Built for carousel*/}
      <Carousel items={items}>
        {items.map((item) => (
          <article
            key={item.id}
            role="listitem"
            className="flex-none rounded-3xl w-full max-w-5xl h-auto overflow-hidden bg-white snap-start"
          >
            <div className={`flex flex-col md:flex-row w-full h-full ${item.overlayClass}`}>
              <div aria-hidden="true" className="relative md:w-1/2 h-full">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 z-0 bg-cover bg-center"
                  style={{ backgroundImage: `url("${pattern}")` }}
                />
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 z-0 pointer-events-none ${item.overlayClass}`}
                />
                <div className="relative w-full h-full flex flex-col gap-4 md:gap-10 items-start justify-center p-6 md:p-14 text-white">
                  <h3 className="text-xl md:text-3xl font-bogoss font-medium tracking-[-.045em]">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-base font-saans font-regular">{item.description}</p>
                  {/* {item.rank && (
                    <p className="text-sm font-jetbrains font-bold">
                      {item.rank}
                    </p>
                  )} */}
                  <LoadingButton type="button" otherStyles="bg-transparent">
                    <Icon
                      name="right"
                      variant="cute-regular"
                      sizeClass="text-base"
                      className="text-primary whitespace-nowrap bg-white rounded-full p-1"
                    />
                    Learn more
                  </LoadingButton>
                </div>
              </div>
              {/* right side image */}
              <div
                className="aspect-square w-full md:aspect-auto md:h- md:w-1/2 m-2 rounded-2xl place-content-end"
                style={{
                  backgroundImage: `url("${item.image}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="p-4  ">
                  <h3 className="text-xl md:text-2xl text-white font-bogoss font-medium">
                    Toluwalope Owolabi
                  </h3>
                  <p className="text-xs text-white/70 font-jetbrains font-regular">
                    FOUNDER & CHIEF TECHNOLOGY OFFICER
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </Carousel>
    </section>
  );
}
