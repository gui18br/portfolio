import { Header } from "../../components/header/Header";
import { ProjectList } from "../../components/projectList/ProjectList";

export const Home = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex justify-center">
        <div className="w-[88%]">
          <h1>Portfolio</h1>
          <ProjectList />
        </div>
      </div>
    </div>
  );
};
