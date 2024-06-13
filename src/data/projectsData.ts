import { Skill } from "../components/skills/Skills";
import empireProject from "../assets/png/empire-burger-project.png";
import portfolioProject from "../assets/png/portfolio.png";
import empire2 from "../assets/png/empire-2.png";
import empire3 from "../assets/png/empire-3.png";
import portfolio2 from "../assets/png/portfolio-2.png";
import portfolio3 from "../assets/png/portfolio-3.png";
import react from "../assets/react.svg";
import typescript from "../assets/icons8-texto-datilografado.svg";
import tailwindcss from "../assets/icons8-tailwindcss.svg";
import vite from "../assets/icons8-rapidamente.svg";
import vercel from "../assets/vercel-svgrepo-com.svg";

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  about: string;
  skills: Skill[];
  website: string;
  github: string;
  imgs: string[];
}

const projectsData = [
  {
    id: 1,
    title: "Empire Burger",
    description:
      "Projeto desenvolvido com código altoral através do desafio proposto pela plataforma BRChallenges.",
    about:
      "O Empire Burger é um projeto de landing page para uma lanchonete especializada em hambúrgueres. Esse projeto foi proposto pela plataforma BRChallenges, que oferece desafios para desenvolvedores aperfeiçoarem suas habilidades e exporem seus trabalhos. O desenvolvimento foi realizado utilizando as tecnologias React, TypeScript, TailwindCSS, Vite e Vercel, além do consumo de APIs fornecidas. O código foi criado de forma autoral, baseando-se no design proposto através da plataforma Figma.",
    skills: [
      { id: 1, name: "React", icon: react },
      { id: 2, name: "TypeScript", icon: typescript },
      { id: 3, name: "TailwindCSS", icon: tailwindcss },
      { id: 4, name: "Vite", icon: vite },
      { id: 5, name: "Vercel", icon: vercel },
    ],
    website: "https://empire-burger-brchallenges-guilherme-novais.vercel.app/",
    github: "https://github.com/gui18br/empire-burger-brchallenges",
    imgs: [empireProject, empire2, empire3],
  },
  {
    id: 2,
    title: "Portfolio pessoal",
    description:
      "Projeto desenvolvido para apresentar meus projetos e habilidades.",
    about:
      "O projeto do portfolio foi desenvolvido visando expor as minhas habilidades relacionas com o desenvolvimento web. O site foi criado utilizando as tecnologias React, TypeScript, TailwindCSS, Vite e Vercel. O design foi criado de forma autoral, baseando-se em referências de outro site e adaptando para o meu gosto pessoal. O site é responsivo e possui animações para tornar a experiência do usuário mais agradável.",
    skills: [
      { id: 1, name: "React", icon: react },
      { id: 2, name: "TypeScript", icon: typescript },
      { id: 3, name: "TailwindCSS", icon: tailwindcss },
      { id: 4, name: "Vite", icon: vite },
      { id: 5, name: "Vercel", icon: vercel },
    ],
    website: "",
    github: "https://github.com/gui18br/portfolio",
    imgs: [portfolioProject, portfolio2, portfolio3],
  },
];

export default projectsData;
