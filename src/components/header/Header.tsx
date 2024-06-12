import { NavBar } from "../navBar/NavBar";
import { Element, scroller } from "react-scroll";
import { Button } from "../button/Button";
import background from "../../assets/jpeg/background.jpg";
import github from "../../assets/icons8-github.svg";
import linkedin from "../../assets/icons8-linkedin.svg";

export const Header = () => {
  const handleClick = () => {
    scroller.scrollTo("projetos", {
      duration: 500,
      smooth: true,
      offset: -130,
    });
  };

  return (
    <Element name="home" className="relative">
      <NavBar />
      <img
        src={background}
        className="w-full h-[600px] lg:h-full shadow-sm"
        alt=""
      />
      <div className="absolute lg:bottom-28 bottom-16 left-0 w-full h-full flex flex-col items-center justify-center gap-10">
        <h1 className="text-[#85502E] lg:text-5xl text-4xl">
          <span className="hidden lg:inline">
            Bem-vindo ao meu <strong>portfolio</strong>!
          </span>
          <span className="lg:hidden ">Bem-vindo!</span>
        </h1>
        <Button style="transparent" onClick={handleClick}>
          Projetos
        </Button>
      </div>
      <div className="absolute lg:bottom-28 bottom-16 h-full flex flex-col items-start justify-center gap-2">
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
