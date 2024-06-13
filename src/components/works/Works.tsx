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
        "Durante meu estágio no programa de bolsas da Compass UOL, fui responsável por estudar tecnologias, linguagens de programação e bibliotecas. Através de ferramentas como TypeScript e React Native, participei de projetos mobile e web, tanto individuais quanto em grupo, aplicando metodologias ágeis como Agile e Scrum.",
    },
  ];

  return (
    <div className="flex flex-col  mt-5">
      <div className="flex lg:justify-start sm:justify-center justify-start">
        <Title size="3xl">Experiência</Title>
      </div>
      <ul className="flex lg:flex-row flex-col justify-around items-center lg:mt-5 mt-10 ml-2 lg:gap-0 gap-10">
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
            <p className="lg:w-[400px] sm:w-[500px] w-[300px] xl:w-[500px] text-justify">
              {work.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
