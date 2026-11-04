import Layout from "../components/layouts/Layout";
import BuiltFor from "../sections/BuiitFor";
import SupportStudent from "../sections/SupportStudent";
import { Hero } from "../components/Hero";
import SecurityAndCompliance from "../sections/SecurityAndCompliance";
import ProvenResult from "../sections/ProvenResult";
import content1 from "../assets/Content-1.png";
import content2 from "../assets/Content.png";

// const EYEBROW = "The complete platform";
const TITLE = (
  <h1 className="heading text-4xl md:text-6xl max-w-3xl text-[#0B0C0E]">
    Built for every <span className="text-brand-base">person</span> in your institution.
  </h1>
);
const SUBTITLE =
  "Every role gets a purpose-built experience, all powered by the same shared data layer. No more juggling seven different systems to answer one question.";

export default function Solutions() {
  return (
    <Layout>
      <Hero heading={TITLE} subheading={SUBTITLE}>
        <div className="w-full  flex flex-col  items-center h-full z-10 mx-auto max-w-7xl px-4 md:px-24 ">
          <div className="flex flex-col md:flex-row gap-6 justify-between w-full">
            <img src={content2} alt="" className="w-full h-auto md:w-[40%] " />
            <img src={content1} alt="" className="w-full h-auto md:w-[55%]" />
          </div>
        </div>
      </Hero>
      <ProvenResult />
      <SecurityAndCompliance />
      <BuiltFor />
      <SupportStudent />
    </Layout>
  );
}
