import LogoLoop, { type LogoItem } from "../components/LogoLoop";

import clockCloud from "../assets/logos/Clock&Cloud.png";
import din from "../assets/logos/Din Psykolog.png";
import faculty from "../assets/logos/Faculty.png";
import shook from "../assets/logos/Shook.png";
import strise from "../assets/logos/Strise.png";
import synthflow from "../assets/logos/Synthflow.png";
import way from "../assets/logos/Way.png";

const techLogos: LogoItem[] = [
  { src: clockCloud, title: "ClockCloud", href: "" },
  { src: din, title: "Din", href: "" },
  {
    src: faculty,
    title: "Faculty",
    href: "",
  },
  {
    src: shook,
    title: "Shook",
    href: "",
  },
  {
    src: strise,
    title: "Strise",
    href: "",
  },
  {
    src: synthflow,
    title: "Synthflow",
    href: "",
  },
  {
    src: way,
    title: "Way",
    href: "",
  },
];

export default function LogoLoopSection() {
  return (
    <div
      aria-label="Technology partners"
      className="relative w-full overflow-hidden my-10 md:my-20"
    >
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        width="100%"
        logoHeight={20}
        gap={48}
        hoverSpeed={30}
        scaleOnHover
        fadeOut
        fadeOutColor="white"
        ariaLabel="Technology stack"
      />
    </div>
  );
}
