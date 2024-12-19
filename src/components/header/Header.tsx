import { NavBar } from "../navBar/NavBar";
import { Element, scroller } from "react-scroll";
import { Button } from "../button/Button";
import background from "../../assets/jpeg/bg-brown.jpg";
import github from "../../assets/icons8-github.svg";
import linkedin from "../../assets/icons8-linkedin.svg";

export const Header = () => {
  const handleClick = () => {
    scroller.scrollTo("projetos", {
      duration: 500,
      smooth: true,
      offset: -35,
    });
  };

  return (
    <Element name="home" className="relative">
      <NavBar />
      <img src={background} className="w-full shadow-sm h-screen" alt="" />
      <div className="absolute sm:bottom-8 lg:bottom-0 bottom-0 top-10 left-0 w-full h-full flex flex-col items-center justify-center sm:gap-5 gap-3">
        <h1 className="text-300 text-center sm:text-3xl lg:text-start lg:text-5xl text-3xl">
          <span className="">
            Desenvolvedor Mobile / Web <strong>Full</strong>stack
          </span>
          <span className="hidden ">Bem-vindo!</span>
        </h1>
        <p className="text-300 text-lg xl:w-[90%] w-[60%] text-center">
          Bem-vindo ao meu <strong>portfólio</strong>, aqui você encontrará meus
          projetos e conhecerá sobre mim.
        </p>
        <Button style="transparent" onClick={handleClick}>
          Projetos
        </Button>
      </div>
      <div className="absolute sm:bottom-2 bottom-36 h-full flex flex-col items-start justify-center gap-2">
        <a
          href="https://www.linkedin.com/in/guilherme-novais-b545a21a0/"
          target="_blank"
        >
          <img src={linkedin} alt="" className="lg:w-12 lg:h-12 w-10 " />
        </a>
        <a href="https://github.com/gui18br" target="_blank">
          <img src={github} alt="" className="lg:w-12 lg:h-12 w-10 " />
        </a>
      </div>
    </Element>
  );
};
