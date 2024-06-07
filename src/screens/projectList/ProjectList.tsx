import { Link } from "react-router-dom";
import projects from "../../data/projectsData";

export const ProjectList = () => {
  return (
    <div>
      <h1>Projects</h1>
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
