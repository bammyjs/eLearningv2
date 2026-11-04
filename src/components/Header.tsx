import { useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LoadingButton } from "./ui/LoadingButton";
import { navItems } from "../data/navigation";
import Logo2 from "../assets/Logo2.png";
import Logo1 from "../assets/Logo.png";
import Icon from "./Icon";

export default function Header() {
  const { t } = useTranslation("common");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const items = useMemo(() => navItems, []);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <header ref={headerRef} className="sticky  top-4 z-50 w-full bg-transparent">
      <div className="container mx-auto flex max-w-7xl items-center justify-between py-4 px-4 md:px-24">
        <a href="/" className="sm:hidden" aria-label="eLearning home">
          <img src={Logo1} alt="eLearning" className="h-auto w-5" />
        </a>
        <a href="/" className="hidden sm:block" aria-label="eLearning home">
          <img src={Logo2} alt="eLearning" className="h-auto w-39" />
        </a>
        <nav
          className="hidden items-center space-x-1 lg:flex bg- p-2 rounded-full"
          aria-label="Main navigation"
        >
          <ul className="flex items-center gap-6 px-1">
            {items.map((item) => (
              <li key={item.href} className="text-sm font-bogoss font-medium">
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    [
                      "inline-flex items-center gap-2",
                      "transition-colors duration-200",
                      isActive ? "text-brand-base" : "text-text-muted hover:text-brand-base",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                  aria-label={t(`navigation.${item.label}`)}
                >
                  {item.label === "home" ? (
                    <Icon
                      name="home_2"
                      variant="cute-filled"
                      sizeClass="text-base"
                      className="text-current  mt-1"
                    />
                  ) : null}
                  {item.label !== "home" ? t(`navigation.${item.label}`) : null}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3 whitespace-nowrap">
          {/* <div ref={languageMenuRef} className="relative">
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-haspopup="menu"
              aria-expanded={isOpen}
              className="flex items-center gap-2 rounded-full px-3 py-2 text-sm hover:border border-brand-base"
            >
              <img
                src={selectedLanguage.flag}
                alt=""
                aria-hidden="true"
                className="h-4 w-4 rounded-sm object-cover"
              />
              <span className="text-center">
                {selectedLanguage.code.toLocaleUpperCase()}
              </span>
              <Icon
                name="down"
                variant="cute-regular"
                sizeClass="text-base"
                className="text-base-black"
              />
            </button>
            <LanguageDropDown
              isOpen={isOpen}
              selectedLanguage={selectedLanguage}
              onClose={() => setIsOpen(false)}
              onSelect={selectLanguage}
            />
          </div> */}
          <LoadingButton type="button" otherStyles="hidden lg:flex">
            {t("actions.bookDemo")}
          </LoadingButton>
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-muted lg:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-navigation"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <span
              aria-hidden="true"
              className={`absolute h-0.5 w-4 bg-base-black transition-transform duration-200 ${
                isMobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              aria-hidden="true"
              className={`absolute h-0.5 w-4 bg-base-black transition-opacity duration-200 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              aria-hidden="true"
              className={`absolute h-0.5 w-4 bg-base-black transition-transform duration-200 ${
                isMobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>
      {isMobileMenuOpen ? (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-y border-muted bg-base-white px-4 py-5 shadow-lg lg:hidden"
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-1">
              {items.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      [
                        "flex items-center rounded-xl px-4 py-3 text-base font-medium transition-colors duration-200",
                        isActive
                          ? "bg-brand-base/10 text-brand-base"
                          : "text-text-muted hover:bg-base-black/5 hover:text-base-black",
                      ].join(" ")
                    }
                  >
                    {item.label === "home" ? (
                      <Icon
                        name="home_2"
                        variant="cute-filled"
                        sizeClass="mr-2 text-base"
                        className="text-current"
                      />
                    ) : null}
                    {t(`navigation.${item.label}`)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-4 border-t border-muted pt-4">
            <LoadingButton
              type="button"
              otherStyles="w-full justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("actions.bookDemo")}
            </LoadingButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
