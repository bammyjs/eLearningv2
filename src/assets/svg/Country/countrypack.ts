// src/assets/svg/countrypack.ts
const svgModules = import.meta.glob("./*.svg", {
  eager: true,
  import: "default",
});

export const countryPack = Object.entries(svgModules).reduce(
  (pack, [path, mod]) => {
    const key = path.replace("./", "").replace(".svg", "").toLowerCase().replace(/ /g, "-"); // Normalize to "united-states" format
    pack[key] = mod as string;
    return pack;
  },
  {} as Record<string, string>,
);

export type CountryPackType = keyof typeof countryPack;
