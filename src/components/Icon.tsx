import {
  Home,
  MapPin,
  Sparkles,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  Rocket,
  User,
  Sun,
  Moon,
  Share2,
  Circle,
  Github,
  Linkedin,
  Youtube,
  Instagram,
  Trophy,
  type LucideProps,
} from "lucide-react";

const icons = {
  home: Home,
  "map-pin": MapPin,
  sparkles: Sparkles,
  "external-link": ExternalLink,
  code: Code,
  briefcase: Briefcase,
  "graduation-cap": GraduationCap,
  rocket: Rocket,
  user: User,
  sun: Sun,
  moon: Moon,
  share2: Share2,
  circle: Circle,
  github: Github,
  linkedin: Linkedin,
  youtube: Youtube,
  instagram: Instagram,
  trophy: Trophy,
} as const;

export type IconName = keyof typeof icons;

interface Props extends LucideProps {
  name: IconName;
}

export default function Icon({ name, ...props }: Props) {
  const LucideIcon = icons[name];
  return <LucideIcon {...props} />;
}
