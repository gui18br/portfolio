import { AboutMe } from "../../components/aboutMe/AboutMe";
import { Contact } from "../../components/contact/Contact";
import { Header } from "../../components/header/Header";
import { ProjectList } from "../../components/projectList/ProjectList";

export const Home = () => {
  return (
    <div className="flex flex-col bg-[#E9E0D9]">
      <Header />
      <div className="flex justify-center">
        <div className="w-[88%]">
          <AboutMe />
          <ProjectList />
        </div>
      </div>
      <Contact />
    </div>
  );
};
