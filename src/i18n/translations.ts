export const languages = {
  en: "English",
  id: "Bahasa Indonesia",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const translations = {
  en: {
    // Nav
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.projects": "Projects",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.name": "Muh Alex Saputra 🚀",
    "hero.role": "Developer & Creator",
    "hero.description":
      "Passionate developer crafting digital experiences. I build modern web applications with clean code and thoughtful design.",
    "hero.cta": "View Projects",
    "hero.contact": "Contact Me",

    // Section titles
    "section.skills": "Skills",
    "section.experience": "Experience",
    "section.education": "Education",
    "section.projects": "Projects",
    "section.achievements": "Achievements",

    // Skills
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.tools": "Tools & Others",

    // Experience
    "experience.present": "Present",

    // Projects
    "projects.viewProject": "View Project",
    "projects.viewCode": "Source Code",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.builtWith": "Built with",

    // Theme
    "theme.light": "Light",
    "theme.dark": "Dark",

    // Share
    "share.title": "Share",
  },
  id: {
    // Nav
    "nav.about": "Tentang",
    "nav.skills": "Keahlian",
    "nav.experience": "Pengalaman",
    "nav.education": "Pendidikan",
    "nav.projects": "Proyek",

    // Hero
    "hero.greeting": "Halo, Saya",
    "hero.name": "Alex",
    "hero.role": "Developer & Kreator",
    "hero.description":
      "Developer yang bersemangat dalam membangun pengalaman digital. Saya membangun aplikasi web modern dengan kode yang bersih dan desain yang matang.",
    "hero.cta": "Lihat Proyek",
    "hero.contact": "Hubungi Saya",

    // Section titles
    "section.skills": "Keahlian",
    "section.experience": "Pengalaman",
    "section.education": "Pendidikan",
    "section.projects": "Proyek",
    "section.achievements": "Pencapaian",

    // Skills
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.tools": "Alat & Lainnya",

    // Experience
    "experience.present": "Sekarang",

    // Projects
    "projects.viewProject": "Lihat Proyek",
    "projects.viewCode": "Kode Sumber",

    // Footer
    "footer.rights": "Hak cipta dilindungi.",
    "footer.builtWith": "Dibuat dengan",

    // Theme
    "theme.light": "Terang",
    "theme.dark": "Gelap",

    // Share
    "share.title": "Bagikan",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["en"];

export function t(lang: Lang, key: TranslationKey): string {
  return translations[lang][key] ?? translations[defaultLang][key] ?? key;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in translations) return lang as Lang;
  return defaultLang;
}

export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}
