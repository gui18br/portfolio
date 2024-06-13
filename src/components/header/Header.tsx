import { NavBar } from "../navBar/NavBar";
import { Element, scroller } from "react-scroll";
import { Button } from "../button/Button";
import background from "../../assets/jpeg/background.jpg";
import backgroundMobile from "../../assets/jpeg/background-mobile.jpg";
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
        className="w-full shadow-sm hidden sm:block"
        alt=""
      />
      <img
        src={backgroundMobile}
        className="w-full shadow-sm sm:hidden block"
        alt=""
      />
      <div className="absolute sm:bottom-16 lg:bottom-20 xl:bottom-28 bottom-6 left-0 w-full h-full flex flex-col items-center justify-center sm:gap-5 lg:gap-10 gap-10">
        <h1 className="text-[#85502E] text-center sm:text-2xl lg:text-start lg:text-5xl text-3xl">
          <span className="">
            Bem-vindo ao meu <strong>portfolio</strong>!
          </span>
          <span className="hidden ">Bem-vindo!</span>
        </h1>
        <Button style="transparent" onClick={handleClick}>
          Projetos
        </Button>
      </div>
      <div className="absolute sm:bottom-16 xl:bottom-28 bottom-56 h-full flex flex-col items-start justify-center gap-2">
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
