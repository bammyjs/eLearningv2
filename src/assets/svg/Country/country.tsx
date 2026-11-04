import { countryPack, type CountryPackType } from "./countrypack";

interface CountryIconProps {
  name: CountryPackType;
  width?: number;
  height?: number;
}

/** Displays a country SVG bundled by Vite. */
export default function CountryIcon({ name, width = 24, height = 24 }: CountryIconProps) {
  const source = countryPack[name];
  return source ? <img src={source} alt="" width={width} height={height} /> : null;
}
