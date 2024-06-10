import { useNavigate } from "react-router-dom";
import projectsData from "../../data/projectsData";
import { Title } from "../title/Title";

export const ProjectList = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="mt-48">
      <div className="flex justify-center">
        <Title size="5xl">Projects</Title>
      </div>
      <ul className="flex flex-col items-center gap-24 mt-20 w-full">
        {projectsData.map((project) => (
          <li className="flex items-center gap-44">
            <img
              src={project.img}
              className="w-[550px] h-[350px] rounded-md shadow-lg transition-transform duration-300 transform hover:-translate-y-1"
              alt=""
            />
            <div className="flex flex-col gap-5 w-full">
              <h1 className="text-3xl">{project.title}</h1>
              <p className="text-lg">{project.description}</p>
              <div className="flex justify-end">
                <button
                  className="bg-primary text-[#E9E0D9] w-36 h-10 rounded-md text-xl transition-transform duration-300 transform hover:-translate-y-1"
                  onClick={() => handleProjectClick(project.id)}
                >
                  Project
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
