import { NavBar } from "../../components/navBar/NavBar";
import { ProjectList } from "../../components/projectList/ProjectList";

export const Home = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <img src="" className="bg-amber-950 w-full h-[700px] mt-[105px]" alt="" />
      <div className="flex justify-center">
        <div className="w-[88%]">
          <h1>Portfolio</h1>
          <ProjectList />
        </div>
      </div>
    </div>
  );
};
