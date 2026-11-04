import Carousel from "../components/Carousel";
import studentImg from "../assets/graduating-student.jpg";

type TheTeamItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  overlayClass: string;
};

const items: TheTeamItem[] = [
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

export default function TheTeam() {
  return (
    <section id="theTeam" className="bg-base-white py-10 md:py-20 w-full place-items-center z-10">
      {/*Our Team carousel*/}
      <Carousel
        eyebrow="THE TEAM"
        pill={false}
        heading="A small team that has sat in the registry office."
        items={items}
      >
        {items.map((item) => (
          <article
            key={item.id}
            role="listitem"
            className="flex-none rounded-3xl w-full  max-w-sm h-[450px] border overflow-hidden bg-white snap-start"
          ></article>
        ))}
      </Carousel>
    </section>
  );
}
