import { Skill } from "../components/skills/Skills";
import empireProject from "../assets/png/empire-burger-project.png";
import empire2 from "../assets/png/empire-2.png";
import empire3 from "../assets/png/empire-3.png";
import react from "../assets/react.svg";
import typescript from "../assets/icons8-texto-datilografado.svg";
import tailwindcss from "../assets/icons8-tailwindcss.svg";
import vite from "../assets/icons8-rapidamente.svg";
import vercel from "../assets/vercel-svgrepo-com.svg";
import flutter from "../assets/flutterio-icon.svg";
import dart from "../assets/dartlang-icon.svg";
import nestJs from "../assets/icons8-carregou.svg";
import postgress from "../assets/icons8-postgreesql.svg";

import sgiComanda1 from "../assets/jpeg/sgi-comanda/sgiComanda1.jpg";
import sgiComanda2 from "../assets/jpeg/sgi-comanda/sgiComanda2.jpg";
import sgiComanda3 from "../assets/jpeg/sgi-comanda/sgiComanda3.jpg";
import sgiComanda4 from "../assets/jpeg/sgi-comanda/sgiComanda4.jpg";
import sgiComanda5 from "../assets/jpeg/sgi-comanda/sgiComanda5.jpg";
import sgiComanda6 from "../assets/jpeg/sgi-comanda/sgiComanda6.jpg";
import sgiComanda7 from "../assets/jpeg/sgi-comanda/sgiComanda7.jpg";
import sgiComanda8 from "../assets/jpeg/sgi-comanda/sgiComanda8.jpg";

import eficiente1 from "../assets/jpeg/eficiente-ms/eficiente-1.jpeg";
import eficiente2 from "../assets/jpeg/eficiente-ms/eficiente-2.jpeg";
import eficiente3 from "../assets/jpeg/eficiente-ms/eficiente-3.jpeg";
import eficiente4 from "../assets/jpeg/eficiente-ms/eficiente-4.jpeg";
import eficiente5 from "../assets/jpeg/eficiente-ms/eficiente-5.jpeg";

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
    title: "SGI Comanda",
    description: "Aplicativo desenvolvido para gerenciamento de comandas.",
    about:
      "O aplicativo de comandas foi desenvolvido para proporcionar ao usuário a mobilidade no gerenciamento de comandas, desde a sua criação até a adição de produtos e a finalização. Ele foi construído utilizando as tecnologias Flutter e Dart, consumindo APIs desenvolvidas pela própria empresa e pacotes do Flutter.",
    skills: [
      { id: 1, name: "Flutter", icon: flutter },
      { id: 2, name: "Dart", icon: dart },
    ],
    website:
      "https://play.google.com/store/apps/details?id=br.com.sgicomanda&hl=pt_BR",
    github: "",
    imgs: [
      sgiComanda1,
      sgiComanda2,
      sgiComanda3,
      sgiComanda4,
      sgiComanda5,
      sgiComanda6,
      sgiComanda7,
      sgiComanda8,
    ],
  },
  {
    id: 2,
    title: "Eficiente MS Delivery",
    description:
      "Projeto que fui responsável por fornecer manutenção durante minha passagem pela VCA Sistemas.",
    about:
      "O Aplicativo Eficiente MS Delivery sofria com diversos problemas de performance e usabilidade, o que prejudicava a experiência do usuário. Durante minha passagem pela VCA Sistemas, fui responsável por fornecer manutenção e melhorias no aplicativo, visando corrigir os problemas existentes e proporcionar uma melhor experiência ao usuário. O aplicativo se baseava em React Native legado, utilizando-se de componentes de classes na parte mobile, já no BackEnd o mesmo utilizava NestJs com Postgress no Banco de Dados. As melhorias foram realizadas através da refatoração de códigos, implementação de novas funcionalidades e correção de bugs.",
    skills: [
      { id: 1, name: "React Native", icon: react },
      { id: 2, name: "TypeScript", icon: typescript },
      { id: 3, name: "NestJs", icon: nestJs },
      { id: 4, name: "Postgress", icon: postgress },
    ],
    website: "",
    github: "",
    imgs: [eficiente1, eficiente2, eficiente3, eficiente4, eficiente5],
  },
  {
    id: 3,
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
];

export default projectsData;
