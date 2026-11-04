import { getLanguages, type Language } from "../../utils";

type LanguageDropDownProps = {
  isOpen: boolean;
  selectedLanguage: Language;
  onClose: () => void;
  onSelect: (language: Language) => void;
};

export function LanguageDropDown({
  isOpen,
  selectedLanguage,
  onClose,
  onSelect,
}: LanguageDropDownProps) {
  if (!isOpen) return null;

  return (
    <div
      role="menu"
      aria-label="Select language"
      className="absolute right-0 top-full z-50 mt-2 w-fit rounded-lg border border-neutral-200 bg-base-white "
    >
      <div className="flex max-h-64 flex-col gap-1 overflow-auto pr-4">
        {getLanguages().map((language) => (
          <button
            key={language.code}
            type="button"
            role="menuitemradio"
            aria-checked={language.code === selectedLanguage.code}
            onClick={() => {
              onSelect(language);
              onClose();
            }}
            className="flex items-center gap-3 rounded-md px-3 py-2 text-left text-sm  hover:text-brand-base"
          >
            <img src={language.flag} alt="" aria-hidden="true" className="h-4 w-4  object-cover" />
            <span className="flex-1">{language.name}</span>
            <span className="uppercase text-neutral-500">{language.code}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
