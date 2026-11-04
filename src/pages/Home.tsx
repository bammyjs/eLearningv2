import { HeroSection } from "../sections/HeroSection";
import Layout from "../components/layouts/Layout";
import TheProblem from "../sections/TheProblem";
import { homeProblemSection } from "../data/problemSections";
import Testimonial from "../sections/Testimonial";
import InstitutionNeeds from "../sections/InstitutionNeeds";
import MissingSystem from "../sections/MissingSystem";
import RoleSolutions from "../sections/RoleSolutions";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <TheProblem data={homeProblemSection} />
      <InstitutionNeeds />
      <MissingSystem />
      <RoleSolutions />
      {/* <BuiltFor /> */}
      {/* <WhyElearning /> */}
      <Testimonial />
    </Layout>
  );
}
