import { Title } from "../title/Title";
import { Works } from "../works/Works";
import jsLogo from "../../assets/icons8-javascript.svg";
import tsLogo from "../../assets/icons8-texto-datilografado.svg";
import htmlLogo from "../../assets/icons8-html.svg";
import cssLogo from "../../assets/icons8-css.svg";
import javaLogo from "../../assets/icons8-logo-java-coffee-cup.svg";
import reactLogo from "../../assets/react.svg";
import nodeLogo from "../../assets/icons8-nó-js.svg";
import androidStudioLogo from "../../assets/icons8-android-studio.svg";
import expoLogo from "../../assets/icons8-exposição.svg";
import gitLogo from "../../assets/icons8-git.svg";
import githubLogo from "../../assets/icons8-github.svg";
import viteLogo from "../../assets/icons8-rapidamente.svg";
import tailwindLogo from "../../assets/icons8-tailwindcss.svg";
import vercelLogo from "../../assets/vercel-svgrepo-com.svg";

export const AboutMe = () => {
  const skills = [
    {
      id: 1,
      name: "JavaScript",
      logo: jsLogo,
      documentation: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      id: 2,
      name: "TypeScript",
      logo: tsLogo,
      documentation: "https://www.typescriptlang.org/docs",
    },
    {
      id: 3,
      name: "HTML",
      logo: htmlLogo,
      documentation: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      id: 4,
      name: "CSS",
      logo: cssLogo,
      documentation: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      id: 5,
      name: "Java",
      logo: javaLogo,
      documentation: "https://docs.oracle.com/en/java/",
    },
    {
      id: 6,
      name: "React",
      logo: reactLogo,
      documentation: "https://react.dev/",
    },
    {
      id: 7,
      name: "React Native",
      logo: reactLogo,
      documentation: "https://reactnative.dev/docs/environment-setup",
    },
    {
      id: 8,
      name: "Node.js",
      logo: nodeLogo,
      documentation: "https://nodejs.org/en/docs/",
    },
    {
      id: 9,
      name: "Android Studio",
      logo: androidStudioLogo,
      documentation: "https://developer.android.com/",
    },
    {
      id: 10,
      name: "Expo",
      logo: expoLogo,
      documentation: "https://docs.expo.dev/",
    },
    {
      id: 11,
      name: "Git",
      logo: gitLogo,
      documentation: "https://git-scm.com/doc",
    },
    {
      id: 12,
      name: "GitHub",
      logo: githubLogo,
      documentation: "https://docs.github.com/",
    },
    {
      id: 13,
      name: "Vite",
      logo: viteLogo,
      documentation: "https://vitejs.dev/guide/",
    },
    {
      id: 14,
      name: "Tailwind CSS",
      logo: tailwindLogo,
      documentation: "https://tailwindcss.com/docs",
    },
    {
      id: 15,
      name: "Vercel",
      logo: vercelLogo,
      documentation: "https://vercel.com/docs",
    },
  ];

  return (
    <div className="flex flex-col justify-center mt-10">
      <div className="flex flex-col items-center">
        <Title size="5xl">About Me</Title>
        <p className="mt-5 text-justify">
          Sou aluno do curso de Bacharel em Sistemas de Informações no Instituto
          Federal de Educação, Ciência e Tecnologia da Bahia - IFBA. Minha
          carreira na área de desenvolvimento começou como estagiário na Compass
          UOL. Nessa posição, pude evoluir e demonstrar habilidades como
          proatividade e tomada de responsabilidade. Além disso, aprendi sobre
          metodologias ágeis e Scrum, e tive a oportunidade de estudar e
          praticar tecnologias que apliquei através de projetos individuais e em
          grupo. Posteriormente, desempenhei a função de desenvolvedor de
          software Júnior em uma empresa da minha cidade, atuando em funções
          diversas como front-end e back-end no desenvolvimento de sites e
          aplicativos mobile. Meu objetivo profissional é consolidar minha
          carreira na área de tecnologia e desenvolver ideias próprias nesse
          âmbito.
        </p>
      </div>
      <Works />
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="flex items-center justify-center">
          <Title size="3xl">Skills</Title>
        </div>
        <div className="mt-5">
          <ul className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <li key={skill.id} className="w-[10.9%] relative group">
                <a href={skill.documentation} target="_blank">
                  <p className="text-[#E9E0D9] bg-primary p-2 rounded-sm text-center transition-opacity duration-300 group-hover:opacity-0">
                    {skill.name}
                  </p>
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                    <img
                      src={skill?.logo}
                      alt={skill.name}
                      className="max-h-full max-w-full"
                    />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
