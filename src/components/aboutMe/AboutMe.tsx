import { Skills } from "../skills/Skills";
import { Title } from "../title/Title";
import { Works } from "../works/Works";
import skillsData from "../../data/skillsData";
import { Element } from "react-scroll";

export const AboutMe = () => {
  return (
    <div>
      <Element name="sobre" className="flex flex-col justify-center mt-10">
        <div className="flex lg:flex-row flex-col  justify-between">
          <div className="flex flex-col items-center sm:mr-10 mb-10 lg:mb-0 ">
            <Title size="5xl">Sobre mim</Title>
            <p className="mt-5 text-justify sm:w-[500px]">
              Olá, me chamo Guilherme Novais e sou um desenvolvedor FullStack.
              Como estudante do curso de Bacharelado em Sistemas de Informação
              no Instituto Federal de Educação, Ciência e Tecnologia da Bahia
              (IFBA), venho desenvolvendo habilidades na área de tecnologia há
              cerca de 3 anos. Durante esse período, trabalhei com tecnologias
              como JavaScript, TypeScript, Dart, PHP, React, React Native,
              Flutter, Laravel e SQL, além de possuir conhecimento em Java.
              Minha experiência abrange o desenvolvimento de aplicações tanto
              web quanto mobile, a implementação de novas funcionalidades a
              projetos existentes, e a manutenção de código legado para
              aprimorar desempenho e usabilidade.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center">
              <Title size="3xl">Skills</Title>
            </div>
            <Skills skills={skillsData} />
          </div>
        </div>
        <div className="">
          <Works />
        </div>
      </Element>
      <hr className="bg-[#914e1e29] h-[2px] w-full" />
    </div>
  );
};
