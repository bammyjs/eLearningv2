import Carousel from "../components/Carousel";
import studentImg from "../assets/graduating-student.jpg";
import Icon from "../components/Icon";

type OurStoryItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  overlayClass: string;
};

const pattern = new URL("../assets/pattern.png", import.meta.url).href;

const items: OurStoryItem[] = [
  {
    id: 1,
    title: "A registry office, and a spreadsheet problem",
    description:
      "Our founding team built a small admissions tool for one university drowning in paper applications during a single intake season.",
    image: studentImg,
    overlayClass: "bg-brand-base/80",
  },
  {
    id: 2,
    title: "Fees and results join the record",
    description:
      "What started as an admissions tool grew into a shared student record, as finance and academic affairs asked for the same visibility.",

    image: studentImg,
    overlayClass: "bg-brand-base/80",
  },
];

export default function OurStory() {
  return (
    <section id="ourStory" className="bg-base-white py-10 md:py-20 w-full place-items-center z-10">
      {/*Our story carousel*/}
      <Carousel
        eyebrow="OUR STORY"
        heading="From one frustrated registry office to a full platform."
        items={items}
      >
        {items.map((item) => (
          <article
            key={item.id}
            role="listitem"
            className="h-auto w-[calc(100vw-6rem)] max-w-4xl flex-none snap-start overflow-hidden rounded-3xl bg-white md:w-full"
          >
            <div className={`flex  flex-col md:flex-row w-full h-full  ${item.overlayClass}`}>
              <div aria-hidden="true" className="relative w-full md:w-1/2 h-full">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 z-0 bg-cover bg-center"
                  style={{ backgroundImage: `url("${pattern}")` }}
                />
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 z-0 pointer-events-none ${item.overlayClass}`}
                />
                <div className="relative w-full h-full flex flex-col gap-4 md:gap-10 items-start justify-center p-4 md:p-6 text-white">
                  <h3 className="text-xl md:text-3xl font-bogoss font-medium tracking-[-.045em]">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-base font-saans font-regular max-w-sm">
                    {item.description}
                  </p>
                  <a
                    href={"#"}
                    className="group mt-10 md:mt-20 inline-flex w-fit items-center gap-2 text-sm font-saans"
                  >
                    <Icon
                      name="arrow_right_up"
                      variant="cute-regular"
                      sizeClass="text-base "
                      className={`transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 bg-base-white text-brand-base rounded-full p-0.5 `}
                    />
                    Learn more
                  </a>
                </div>
              </div>
              <div
                className="aspect-square w-ful   md:w-1/2 m-2 rounded-2xl place-content-end"
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
