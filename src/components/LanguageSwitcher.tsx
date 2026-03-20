import type { Lang } from "../i18n/translations";

interface Props {
  currentLang: Lang;
}

export default function LanguageSwitcher({ currentLang }: Props) {
  function toggle() {
    const next = currentLang === "en" ? "id" : "en";
    window.location.pathname = next === "en" ? "/" : `/${next}/`;
  }

  return (
    <button
      onClick={toggle}
      aria-label={currentLang === "en" ? "Switch to Bahasa Indonesia" : "Switch to English"}
      className="relative w-[4.25rem] h-8 rounded-full bg-gray-200 dark:bg-neutral-800 transition-colors cursor-pointer flex items-center px-1"
    >
      {/* Sliding pill */}
      <span
        className={`absolute top-1 w-6 h-6 rounded-full bg-white dark:bg-neutral-600 shadow-sm transition-transform duration-200 ${
          currentLang === "en" ? "left-1" : "left-[calc(100%-1.75rem)]"
        }`}
      />

      {/* US flag */}
      <span className={`relative z-10 w-6 h-6 flex items-center justify-center text-sm ${currentLang === "en" ? "" : "opacity-50"}`}>
        🇺🇸
      </span>

      {/* ID flag */}
      <span className={`relative z-10 w-6 h-6 flex items-center justify-center text-sm ml-auto ${currentLang === "id" ? "" : "opacity-50"}`}>
        🇮🇩
      </span>
    </button>
  );
}
