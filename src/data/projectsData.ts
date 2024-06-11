import empireProject from "../assets/png/empire-burger-project.png";
import portfolioProject from "../assets/png/portfolio.png";
import react from "../assets/react.svg";
import typescript from "../assets/icons8-texto-datilografado.svg";
import tailwindcss from "../assets/icons8-tailwindcss.svg";
import vite from "../assets/icons8-rapidamente.svg";
import vercel from "../assets/vercel-svgrepo-com.svg";
import { Skill } from "../components/skills/Skills";

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  skills: Skill[];
  website: string;
  github: string;
  img: string;
}

const projectsData = [
  {
    id: 1,
    title: "Empire Burger",
    description:
      "Projeto desenvolvido com código altoral através do desafio proposto pela plataforma BRChallenges.",
    skills: [
      { id: 1, name: "React", icon: react },
      { id: 2, name: "TypeScript", icon: typescript },
      { id: 3, name: "TailwindCSS", icon: tailwindcss },
      { id: 4, name: "Vite", icon: vite },
      { id: 5, name: "Vercel", icon: vercel },
    ],
    website: "https://empire-burger-brchallenges-beige.vercel.app/",
    github: "https://github.com/gui18br/empire-burger-brchallenges",
    img: empireProject,
  },
  {
    id: 2,
    title: "Portfolio pessoal",
    description:
      "Projeto desenvolvido para apresentar meus projetos e habilidades.",
    skills: [
      { id: 1, name: "React", icon: react },
      { id: 2, name: "TypeScript", icon: typescript },
      { id: 3, name: "TailwindCSS", icon: tailwindcss },
      { id: 4, name: "Vite", icon: vite },
      { id: 5, name: "Vercel", icon: vercel },
    ],
    website: "",
    github: "https://github.com/gui18br/portfolio",
    img: portfolioProject,
  },
];

export default projectsData;
