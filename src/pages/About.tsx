import Layout from "../components/layouts/Layout";
import { Hero } from "../components/Hero";
import ImageLoop from "../components/ImageLoop";
import one from "../assets/Floral.png";
import two from "../assets/Vector-1.png";
import three from "../assets/Vector-2.png";
import four from "../assets/Vector-3.png";
import five from "../assets/Clover.png";
import six from "../assets/Spiky.png";
import OurStory from "../sections/OurStory";
import TheTeam from "../sections/TheTeam";
import SupportStudent from "../sections/SupportStudent";

const images = [
  { src: one, title: "" },
  { src: two, title: "" },
  {
    src: three,
    title: "",
  },
  {
    src: four,
    title: "",
  },
  {
    src: five,
    title: "",
  },
  {
    src: six,
    title: "",
  },
];

const TITLE = (
  <h1 className="heading text-4xl md:text-6xl max-w-3xl text-[#0B0C0E]">
    We build the <span className="text-brand-base">operating</span> layer
    African universities run on.
  </h1>
);
const SUBTITLE =
  "Every institution we've spoken with had the same story: brilliant staff, buried under paperwork infrastructure was never built to carry. So we built the infrastructure instead.";

export default function About() {
  return (
    <Layout>
      <Hero heading={TITLE} subheading={SUBTITLE}>
        <ImageLoop imageLoop={images} gap={32} />
      </Hero>
      <OurStory />
      <SupportStudent />

      {/* <OurBelieve /> */}
      <TheTeam />
    </Layout>
  );
}
