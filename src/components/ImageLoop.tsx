import LogoLoop, { type LogoItem } from "./LogoLoop";

export default function ImageLoop({
  imageLoop,
  gap = 12,
  direction = "left",
  pauseOnHover = true,
  logoHeight = 286,
}: {
  imageLoop: LogoItem[];
  gap?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  logoHeight?: number;
}) {
  return (
    <div aria-label="Image Loop" className="w-full relative overflow-hidden">
      <LogoLoop
        logos={imageLoop}
        speed={40}
        direction={direction}
        width="100%"
        logoHeight={logoHeight}
        gap={gap}
        hoverSpeed={30}
        scaleOnHover={false}
        fadeOut={false}
        fadeOutColor="white"
        ariaLabel="Image stack"
        pauseOnHover={pauseOnHover}
      />
    </div>
  );
}
