import { NavBar } from "../navBar/NavBar";
import background from "../../assets/jpeg/background.jpg";
import { Element, Link } from "react-scroll";
import { Button } from "../button/Button";

export const Header = () => {
  return (
    <Element name="home" className="relative">
      <NavBar />
      <img src={background} className="w-full shadow-sm" alt="" />
      <div className="absolute bottom-28 left-0 w-full h-full flex flex-col items-center justify-center gap-10">
        <h1 className="text-[#85502E] text-5xl">
          Bem-vindo ao meu <strong>portfolio</strong>!
        </h1>
        <Button style="transparent">
          <Link
            to="projetos"
            offset={-120}
            key={"Projetos"}
            smooth={true}
            duration={500}
          >
            Projetos
          </Link>
        </Button>
      </div>
    </Element>
  );
};
