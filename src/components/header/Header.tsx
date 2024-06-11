import { NavBar } from "../navBar/NavBar";
import { Element, Link } from "react-scroll";
import { Button } from "../button/Button";
import background from "../../assets/jpeg/background.jpg";
import github from "../../assets/icons8-github.svg";
import linkedin from "../../assets/icons8-linkedin.svg";

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
      <div className="absolute bottom-28 h-full flex flex-col items-start justify-center gap-2">
        <a
          href="https://www.linkedin.com/in/guilherme-novais-b545a21a0/"
          target="_blank"
        >
          <img src={linkedin} alt="" className="w-12 h-12" />
        </a>
        <a href="https://github.com/gui18br" target="_blank">
          <img src={github} alt="" className="w-12 h-12" />
        </a>
      </div>
    </Element>
  );
};
