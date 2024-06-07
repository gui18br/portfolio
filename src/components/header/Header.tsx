import { NavBar } from "../navBar/NavBar";
import background from "../../assets/jpeg/background.jpg";

export const Header = () => {
  return (
    <div className="relative">
      <NavBar />
      <img src={background} className="w-full" alt="" />
      <div className="absolute bottom-28 left-0 w-full h-full flex flex-col items-center justify-center gap-10">
        <h1 className="text-[#85502E] text-5xl">
          Bem-vindo ao meu <strong>portfolio</strong>!
        </h1>
        <button className="text-white bg-primary transition-all duration-300 hover:bg-transparent hover:backdrop-blur-sm  w-40 h-12 rounded-lg text-2xl">
          Projects
        </button>
      </div>
    </div>
  );
};
