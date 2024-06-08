import { Title } from "../title/Title";
import vcaLogo from "../../assets/jpeg/vca-sistemas.jpeg";
import compassLogo from "../../assets/jpeg/compass_uol_logo.jpeg";

export const Works = () => {
  const works = [
    {
      id: 1,
      logo: vcaLogo,
      link: "https://vcasistemas.com.br/",
      title: "VCA Sistemas",
      date: "03/2024 - 05/2024",
      description:
        "Atuei como desenvolvedor de software júnior, sendo responsável por desenvolver aplicações tanto web quanto mobile, além de dar manutenção em códigos baseados em TypeScript e JavaScript que utilizavam de bibliotecas React e/ou React Native.",
    },
    {
      id: 2,
      logo: compassLogo,
      link: "https://compass.uol/",
      title: "Compass UOL",
      date: "07/2023 - 12/2023",
      description:
        "Atuei como estagiário no programa de bolsas da Compass UOL. Nesse estágio fui responsável por estudar tecnologias, linguagens de programação e frameworks. Através de algumas dessas tecnologias foram realizados projetos mobile e web, tanto individuais quanto em grupo, aplicando metodologias como Agile e Scrum.",
    },
  ];

  return (
    <div className="flex flex-col  mt-5">
      <div className="flex items-start">
        <Title size="3xl">Works</Title>
      </div>
      <ul className="flex justify-around mt-5 ml-3">
        {works.map((work) => (
          <li key={work.id} className="">
            <div className="flex">
              <div className="mb-3">
                <div className="flex items-center gap-2">
                  <img
                    src={work.logo}
                    className="w-10 h-10 rounded-sm"
                    alt=""
                  />
                  <a href={work.link} target="_blank">
                    <Title size="xl">{work.title}</Title>
                  </a>
                  <p className="">{work.date}</p>
                </div>
              </div>
            </div>
            <p className="ml-3 w-[500px]">{work.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};