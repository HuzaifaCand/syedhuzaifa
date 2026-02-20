import bgHongKong from "../../public/images/hongkong.webp";
import bgCityu from "../../public/images/cityu.webp";
import bgWorkspace from "../../public/images/workspace.webp";
import bgWorkspaceTwo from "../../public/images/workspace-two.webp";
import bgSpace from "../../public/images/space.webp";
import { StaticImageData } from "next/image";

type projectType =
  | "utility"
  | "hackathon"
  | "business"
  | "volunteering"
  | "personal";

const colors = {
  financehk: {},
  oneilm: {},
  ss: {},
  cityucs: {},
  spaceapps: {},
};

type projects = "financehk" | "oneilm" | "ss" | "cityucs" | "spaceapps";

export interface Project {
  id: projects;
  href: string;
  liveUrl?: string;
  github?: string;
  title: string;
  logo?: string;
  description: string;
  subtitle: string;
  audioUrl?: string;
  image: StaticImageData;
  imageAlt: string;
  tags?: string[];
  projectType: projectType;
}

export const projects: Project[] = [
  {
    id: "financehk",
    href: "/financehk",
    liveUrl: "https://financehk.vercel.app",
    github: "https://github.com/HuzaifaCand/finance",
    title: "FinanceHK",
    logo: "/logos/financehk.png",
    subtitle: "Highly optimized Expense Tracker for students in Hong Kong",
    description: "",
    audioUrl: "/audio/financehk.mp3",
    image: bgHongKong,
    imageAlt:
      "Hong Kong city skyline at night background, representing FinanceHK project",
    projectType: "utility",
  },
  {
    id: "spaceapps",
    href: "/spaceapps",
    liveUrl: "https://zerorain.vercel.app",
    github: "https://github.com/HuzaifaCand/space-apps-frontend",
    title: "ZeroRain",
    subtitle:
      "Our submission for NASA Space Apps 2025's challenge: Will it Rain on My Parade?",
    description: "",
    audioUrl: "/audio/spaceapps.mp3",
    image: bgSpace,
    imageAlt:
      "Outer space scene with a sattelite background symbolizing NASA Space Apps project ZeroRain",
    logo: "/logos/zero.png",
    tags: ["Leadership", "Teamwork"],
    projectType: "hackathon",
  },
  {
    id: "oneilm",
    href: "/oneilm",
    title: "Oneilm",
    liveUrl: "https://www.oneilm.org",
    subtitle: "",
    description: "",
    logo: "/logos/ilm.png",
    image: bgWorkspaceTwo,
    imageAlt:
      "Modern workspace background representing the Oneilm organization project",
    audioUrl: "/audio/oneilm.mp3",
    tags: ["Entrepreneurship", "Leadership", "Impact", "Problem Solving"],
    projectType: "business",
  },
  {
    id: "ss",
    href: "/oneilm/ss",
    liveUrl: "https://www.sirsaeedsurti.com",
    title: "Oneilm - Saeed Surti",
    subtitle: "",
    description: "",
    logo: "/images/ilm-ss.png",
    image: bgWorkspace,
    imageAlt:
      "Professional workspace background used for Oneilm Saeed Surti project",
    audioUrl: "/audio/ilm-ss.mp3",
    projectType: "business",
  },
  {
    id: "cityucs",
    href: "/cityucs",
    liveUrl: "https://cityu-cs-guide.vercel.app",
    title: "CityU CS Guide",
    subtitle: "",
    description: "",
    image: bgCityu,
    imageAlt:
      "City University of Hong Kong campus exterior background representing CityU CS Guide",
    audioUrl: "/audio/cityu.mp3",
    tags: ["Educational"],
    projectType: "utility",
  },
];
