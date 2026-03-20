import type { Lang } from "./translations";

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  label: Record<Lang, string>;
  skills: Skill[];
}

export interface Experience {
  title: Record<Lang, string>;
  company: string;
  type?: Record<Lang, string>;
  logo?: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: Record<Lang, string[]>;
  tags: string[];
}

export interface Education {
  degree: Record<Lang, string>;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: Record<Lang, string>;
}

export interface Achievement {
  title: Record<Lang, string>;
  issuer: string;
  date: string;
}

export interface Project {
  title: string;
  description: Record<Lang, string>;
  tags: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  highlight?: string;
}

// ──────────────────────────────────────
// EDIT YOUR DATA BELOW
// ──────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    label: { en: "Frontend", id: "Frontend" },
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Astro" },
      { name: "HTML/CSS" },
    ],
  },
  {
    label: { en: "Backend", id: "Backend" },
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "REST API" },
      { name: "GraphQL" },
    ],
  },
  {
    label: { en: "Tools & Others", id: "Alat & Lainnya" },
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "Linux" },
      { name: "Figma" },
      { name: "CI/CD" },
      { name: "AWS" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    title: { en: "Fullstack Engineer", id: "Fullstack Engineer" },
    company: "IDRX",
    type: { en: "Contract", id: "Kontrak" },
    logo: "/logos/idrx.png",
    location: "Remote",
    startDate: "2025-08",
    endDate: null,
    description: {
      en: [
        "Building and maintaining fullstack web applications for IDRX platform",
      ],
      id: [
        "Membangun dan memelihara aplikasi web fullstack untuk platform IDRX",
      ],
    },
    tags: ["TypeScript", "React", "Node.js"],
  },
  {
    title: {
      en: "Co-Founder, Frontend Engineer",
      id: "Co-Founder, Frontend Engineer",
    },
    company: "Centuari",
    type: { en: "Permanent", id: "Purnawaktu" },
    logo: "/logos/centuari.png",
    location: "Remote",
    startDate: "2025-06",
    endDate: null,
    description: {
      en: [
        "Co-founded the company and leading frontend engineering efforts",
        "Building scalable frontend architecture and design systems",
      ],
      id: [
        "Mendirikan perusahaan dan memimpin pengembangan frontend",
        "Membangun arsitektur frontend yang skalabel dan design system",
      ],
    },
    tags: ["React", "TypeScript", "Web3"],
  },
  {
    title: { en: "Full Stack Engineer", id: "Full Stack Engineer" },
    company: "PT. Varnion Technology Semesta",
    type: { en: "Contract", id: "Kontrak" },
    logo: "/logos/varnion.png",
    location: "Yogyakarta, Indonesia",
    startDate: "2024-07",
    endDate: "2025-09",
    description: {
      en: [
        "Developed and maintained full-stack web applications",
        "Worked with cross-functional teams to deliver product features",
      ],
      id: [
        "Mengembangkan dan memelihara aplikasi web full-stack",
        "Bekerja dengan tim lintas fungsi untuk menghadirkan fitur produk",
      ],
    },
    tags: ["TypeScript", "React", "Node.js"],
  },
  {
    title: {
      en: "Mentor - React Backend | Dicoding Bootcamp",
      id: "Mentor - React Backend | Dicoding Bootcamp",
    },
    company: "Dicoding Indonesia",
    type: { en: "Part-time", id: "Paruh Waktu" },
    logo: "/logos/dicoding.png",
    location: "Bandung, Indonesia",
    startDate: "2025-04",
    endDate: "2025-08",
    description: {
      en: [
        "Mentored bootcamp participants on React and backend development",
        "Conducted code reviews and provided technical guidance",
      ],
      id: [
        "Membimbing peserta bootcamp dalam pengembangan React dan backend",
        "Melakukan code review dan memberikan panduan teknis",
      ],
    },
    tags: ["React", "Node.js", "Mentoring"],
  },
  {
    title: {
      en: "Chief Suffering Officer (CSO)",
      id: "Chief Suffering Officer (CSO)",
    },
    company: "daily.dev",
    type: { en: "Seasonal", id: "Musiman" },
    logo: "/logos/dailydev.png",
    location: "London, UK",
    startDate: "2024-04",
    endDate: "2024-05",
    description: {
      en: [
        "Community engagement role at daily.dev developer platform",
      ],
      id: [
        "Peran keterlibatan komunitas di platform developer daily.dev",
      ],
    },
    tags: ["Community", "Developer Relations"],
  },
  {
    title: { en: "Frontend Engineer", id: "Frontend Engineer" },
    company: "PT Menara Astra",
    type: { en: "Contract", id: "Kontrak" },
    logo: "/logos/menara-astra.png",
    location: "Jakarta Selatan, Indonesia",
    startDate: "2023-11",
    endDate: "2024-05",
    description: {
      en: [
        "Built and maintained frontend applications for Menara Astra",
        "Collaborated with backend teams to integrate APIs",
      ],
      id: [
        "Membangun dan memelihara aplikasi frontend untuk Menara Astra",
        "Berkolaborasi dengan tim backend untuk integrasi API",
      ],
    },
    tags: ["React", "TypeScript", "REST API"],
  },
  {
    title: {
      en: "Instructor Web Programming",
      id: "Instruktur Pemrograman Web",
    },
    company: "Amikom Computer Club",
    logo: "/logos/amikom-cc.png",
    location: "Sleman, Yogyakarta, Indonesia",
    startDate: "2021-12",
    endDate: "2023-11",
    description: {
      en: [
        "Taught web programming fundamentals and modern frameworks",
        "Mentored students in building real-world web projects",
      ],
      id: [
        "Mengajarkan dasar-dasar pemrograman web dan framework modern",
        "Membimbing mahasiswa dalam membangun proyek web nyata",
      ],
    },
    tags: ["HTML/CSS", "JavaScript", "React", "Teaching"],
  },
  {
    title: { en: "Frontend Developer", id: "Frontend Developer" },
    company: "Erasys Consulting",
    type: { en: "Internship", id: "Magang" },
    logo: "/logos/erasys.png",
    location: "Bantul, Yogyakarta, Indonesia",
    startDate: "2023-03",
    endDate: "2023-06",
    description: {
      en: [
        "Developed frontend features and components during internship",
        "Participated in agile development processes",
      ],
      id: [
        "Mengembangkan fitur dan komponen frontend selama magang",
        "Berpartisipasi dalam proses pengembangan agile",
      ],
    },
    tags: ["React", "JavaScript", "Agile"],
  },
  {
    title: { en: "Frontend Developer", id: "Frontend Developer" },
    company: "PT. Infosys Solusi Terpadu",
    type: { en: "Internship", id: "Magang" },
    logo: "/logos/infosys.png",
    location: "Bantul, Yogyakarta, Indonesia",
    startDate: "2022-10",
    endDate: "2023-01",
    description: {
      en: [
        "Built frontend interfaces and improved existing UI components",
      ],
      id: [
        "Membangun antarmuka frontend dan memperbaiki komponen UI yang ada",
      ],
    },
    tags: ["React", "JavaScript", "CSS"],
  },
  {
    title: { en: "React Developer", id: "React Developer" },
    company: "Dicoding Academy",
    type: { en: "Internship", id: "Magang" },
    logo: "/logos/dicoding.png",
    location: "Bandung, Indonesia",
    startDate: "2022-08",
    endDate: "2023-01",
    description: {
      en: [
        "Developed React applications as part of the internship program",
        "Learned and applied best practices in React development",
      ],
      id: [
        "Mengembangkan aplikasi React sebagai bagian dari program magang",
        "Mempelajari dan menerapkan best practice dalam pengembangan React",
      ],
    },
    tags: ["React", "JavaScript", "REST API"],
  },
  {
    title: { en: "IT Support Technician", id: "Teknisi IT Support" },
    company: "Berau Coal",
    type: { en: "Internship", id: "Magang" },
    logo: "/logos/berau-coal.png",
    location: "Berau, Kalimantan Timur, Indonesia",
    startDate: "2018-01",
    endDate: "2018-04",
    description: {
      en: [
        "Provided IT support and troubleshooting for company systems",
      ],
      id: [
        "Memberikan dukungan IT dan troubleshooting untuk sistem perusahaan",
      ],
    },
    tags: ["IT Support", "Networking", "Troubleshooting"],
  },
];

export const educations: Education[] = [
  {
    degree: { en: "Bachelor of Computer Science", id: "Sarjana Ilmu Komputer" },
    school: "University Name",
    location: "Jakarta, Indonesia",
    startDate: "2020",
    endDate: "2024",
    description: {
      en: "Focused on software engineering and web development",
      id: "Fokus pada rekayasa perangkat lunak dan pengembangan web",
    },
  },
];

export const achievements: Achievement[] = [
  {
    title: {
      en: "Winner in Surreal World Assets Buildathon",
      id: "Pemenang Surreal World Assets Buildathon",
    },
    issuer: "Encode Club",
    date: "2025-12",
  },
  {
    title: {
      en: "2nd Place Winner at U2U Hackathon International",
      id: "Juara 2 di U2U Hackathon International",
    },
    issuer: "U2U Blockchain",
    date: "2025-10",
  },
  {
    title: {
      en: "5th Place Winner at Pharos Hackathon International",
      id: "Juara 5 di Pharos Hackathon International",
    },
    issuer: "Pharos",
    date: "2025-07",
  },
  {
    title: {
      en: "Finalist Monad Hackathon International",
      id: "Finalis Monad Hackathon International",
    },
    issuer: "Monad Chain",
    date: "2025-05",
  },
];

export const projects: Project[] = [
  {
    title: "Crypto Fantasy League",
    description: {
      en: "Fantasy Sports for Crypto Tokens where you draft token squad, compete in PvP based on real market movements.",
      id: "Fantasy Sports untuk Token Crypto di mana kamu membuat squad token, berkompetisi dalam PvP berdasarkan pergerakan pasar nyata.",
    },
    tags: ["React", "Solana", "TypeScript"],
    highlight: "1ST PLACE - GAMING",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: {
      en: "Personal portfolio website built with Astro, React, and Tailwind CSS. Features dark mode and i18n support.",
      id: "Website portfolio pribadi dibangun dengan Astro, React, dan Tailwind CSS. Dilengkapi dark mode dan dukungan i18n.",
    },
    tags: ["Astro", "React", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Task Management App",
    description: {
      en: "A full-stack task management application with real-time collaboration features and team workspaces.",
      id: "Aplikasi manajemen tugas full-stack dengan fitur kolaborasi real-time dan workspace tim.",
    },
    tags: ["Next.js", "PostgreSQL", "WebSocket"],
    repoUrl: "#",
  },
];
