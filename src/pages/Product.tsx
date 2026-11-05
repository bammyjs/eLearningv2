import Layout from "../components/layouts/Layout";
import TheProblem from "../sections/TheProblem";
import { productProblemSection } from "../data/problemSections";
import InstitutionNeeds from "../sections/InstitutionNeeds";
import { Hero } from "../components/Hero";
import content1 from "../assets/Content-1.png";
import content2 from "../assets/Content.png";
import AllRoles from "../sections/AllRoles";
import SecurityAndTrust from "../sections/SecurityAndTrust";
import Enabler from "../sections/Enabler";
import SupportStudent from "../sections/SupportStudent";
import SecurityAndCompliance from "../sections/SecurityAndCompliance";

const TITLE = (
  <h1 className="heading text-4xl md:text-6xl max-w-3xl text-[#0B0C0E]">
    Every stage of the <span className="text-brand-base">academic</span>{" "}
    journey. One system.
  </h1>
);
const SUBTITLE =
  "Admissions, bio-data, fees, timetables, requests and results unified under one roof, with a live view of every student's progress from application to graduation.";

export default function Product() {
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
      <InstitutionNeeds />
      <TheProblem data={productProblemSection} />
      {/* <AllRoles /> */}
      <SecurityAndCompliance />
      <SupportStudent />
      {/* <Enabler /> */}
      {/* <SecurityAndTrust /> */}
    </Layout>
  );
}
