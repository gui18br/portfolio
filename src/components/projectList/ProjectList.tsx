import { Link } from "react-router-dom";
import projects from "../../data/projectsData";
import { Title } from "../title/Title";

export const ProjectList = () => {
  return (
    <div className="mt-48">
      <div className="flex justify-center">
        <Title size="5xl">Projects</Title>
      </div>
      <ul>
        {projects.map((project) => (
          <li>
            <Link to={`/${project.id}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
