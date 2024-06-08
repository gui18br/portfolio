import { Title } from "../title/Title";
import { Works } from "../works/Works";

export const AboutMe = () => {
  const skills = [
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "TypeScript",
    },
    {
      id: 3,
      name: "HTML",
    },
    {
      id: 4,
      name: "CSS",
    },
    {
      id: 5,
      name: "Java",
    },
    {
      id: 6,
      name: "React",
    },
    {
      id: 7,
      name: "React Native",
    },
    {
      id: 8,
      name: "Node.js",
    },
    {
      id: 9,
      name: "Android Studio",
    },
    {
      id: 10,
      name: "Expo",
    },
    {
      id: 11,
      name: "Git",
    },
    {
      id: 12,
      name: "GitHub",
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
          <ul className="flex flex-wrap justify-center">
            {skills.map((skill) => (
              <li key={skill.id} className="w-[11.9%] m-2">
                <p className="text-[#E9E0D9] bg-primary p-2 rounded-sm text-center">
                  {skill.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
