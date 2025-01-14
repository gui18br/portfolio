import { useNavigate } from "react-router-dom";
import { Title } from "../title/Title";
import { Element } from "react-scroll";
import { Button } from "../button/Button";
import projectsData from "../../data/projectsData";

export const ProjectList = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <Element name="projetos" className="pt-24">
      <div className="flex justify-center">
        <Title size="5xl">Projetos</Title>
      </div>
      <ul className="flex flex-col items-center gap-24 lg:mt-20 mt-10 w-full">
        {projectsData.map((project) => (
          <li className="flex flex-col lg:flex-row items-center lg:gap-44 gap-16">
            <img
              src={project.imgs[0]}
              className="lg:w-[50%] lg:h-[50%] h-[250px] rounded-md shadow-lg transition-transform duration-300 transform"
              alt=""
            />
            <div className="flex flex-col gap-5 w-full">
              <h1 className="text-3xl">{project.title}</h1>
              <p className="text-lg">{project.description}</p>
              <div className="flex justify-end">
                <Button
                  style="elevation"
                  onClick={() => handleProjectClick(project.id)}
                >
                  Detalhes
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Element>
  );
};
