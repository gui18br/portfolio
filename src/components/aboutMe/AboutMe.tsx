import { Skills } from "../skills/Skills";
import { Title } from "../title/Title";
import { Works } from "../works/Works";
import skillsData from "../../data/skillsData";
import { Element } from "react-scroll";

export const AboutMe = () => {
  return (
    <div>
      <Element name="sobre" className="flex flex-col justify-center mt-10">
        <div className="flex flex-col items-center">
          <Title size="5xl">Sobre mim</Title>
          <p className="mt-5 text-justify">
            Sou aluno do curso de Bacharel em Sistemas de Informações no
            Instituto Federal de Educação, Ciência e Tecnologia da Bahia - IFBA.
            Minha carreira na área de desenvolvimento começou como estagiário na
            Compass UOL. Nessa posição, pude evoluir e demonstrar habilidades
            como proatividade e tomada de responsabilidade. Além disso, aprendi
            sobre metodologias ágeis e Scrum, e tive a oportunidade de estudar e
            praticar tecnologias que apliquei através de projetos individuais e
            em grupo. Posteriormente, desempenhei a função de desenvolvedor de
            software Júnior em uma empresa da minha cidade, atuando em funções
            diversas como front-end e back-end no desenvolvimento de sites e
            aplicativos mobile. Meu objetivo profissional é consolidar minha
            carreira na área de tecnologia e desenvolver ideias próprias nesse
            âmbito.
          </p>
        </div>
        <Works />
        <div>
          <div className="flex items-center justify-center mt-10">
            <Title size="3xl">Skills</Title>
          </div>
          <Skills skills={skillsData} />
        </div>
      </Element>
    </div>
  );
};
