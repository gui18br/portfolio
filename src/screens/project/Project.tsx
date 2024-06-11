import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projectsData, { ProjectData } from "../../data/projectsData";
import { HeaderProject } from "../../components/headerProject/HeaderProject";
import { BodyProject } from "../../components/bodyProject/BodyProject";
import { Footer } from "../../components/footer/Footer";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

export const Project = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState<ProjectData>({
    id: 0,
    description: "",
    about: "",
    title: "",
    skills: [{ id: 0, name: "", icon: "" }],
    website: "",
    github: "",
    imgs: [""],
  });

  useEffect(() => {
    const project = projectsData.find(
      (project) => project.id === Number(projectId)
    );
    if (project !== null && project !== undefined) {
      setProject(project);
    }
  }, [projectId]);

  return (
    <div className="flex flex-col bg-[#E9E0D9]">
      <ScrollToTop />
      <HeaderProject
        title={project.title}
        description={project.description}
        website={project.website}
      />
      <BodyProject
        imgs={project.imgs}
        about={project.about}
        skills={project.skills}
        github={project.github}
        website={project.website}
      />
      <Footer />
    </div>
  );
};
