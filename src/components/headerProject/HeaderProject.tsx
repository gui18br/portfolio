import { NavBar } from "../navBar/NavBar";
import background from "../../assets/jpeg/background.jpg";

interface HeaderProjectProps {
  title: string;
  description: string;
}

export const HeaderProject = (props: HeaderProjectProps) => {
  return (
    <div className="relative">
      <NavBar />
      <img src={background} className="w-full shadow-sm" alt="" />
      <div className="absolute bottom-36 w-full h-full flex flex-col justify-center items-center gap-5">
        <h1 className="text-[#85502E] text-5xl">{props.title}</h1>
        <p className="text-primary text-lg ">{props.description}</p>
        <button className="text-white bg-primary transition-all duration-300 hover:bg-transparent hover:backdrop-blur-sm  w-40 h-12 rounded-md text-2xl">
          Live Link{" "}
        </button>
      </div>
    </div>
  );
};
