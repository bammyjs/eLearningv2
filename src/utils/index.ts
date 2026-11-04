import unitedStatesFlag from "../assets/svg/Country/United States.svg";
import franceFlag from "../assets/svg/Country/France.svg";

export type Language = {
  code: "en" | "fr";
  name: string;
  flag: string;
};

/** Languages that have translation resources in `public/locales`. */
export const languages: readonly Language[] = [
  { code: "en", name: "English", flag: unitedStatesFlag },
  { code: "fr", name: "Français", flag: franceFlag },
];

export const getLanguages = (): readonly Language[] => languages;

export const getLanguage = (code?: string): Language =>
  languages.find((language) => language.code === code) ?? languages[0];
