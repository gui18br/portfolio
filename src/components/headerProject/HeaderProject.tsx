import { NavBar } from "../navBar/NavBar";
import background from "../../assets/jpeg/background.jpg";
import backgroundMobile from "../../assets/jpeg/background-mobile.jpg";
import { Button } from "../button/Button";

interface HeaderProjectProps {
  title: string;
  description: string;
  website: string;
}

export const HeaderProject = (props: HeaderProjectProps) => {
  const handleButtonClick = (url: string) => {
    if (url !== "") {
      window.open(url, "_blank");
    }
  };
  return (
    <div className="relative">
      <NavBar />
      <img
        src={background}
        className="w-full shadow-sm hidden sm:blocl"
        alt=""
      />
      <img
        src={backgroundMobile}
        className=" shadow-sm sm:hidden block"
        alt=""
      />
      <div className="absolute sm:bottom-36 bottom-20 w-full h-full flex flex-col justify-center text-center items-center gap-5">
        <h1 className="text-[#85502E] sm:text-5xl text-3xl">{props.title}</h1>
        <p className="text-primary text-lg w-[90%]">{props.description}</p>
        <Button
          style="transparent"
          onClick={() => handleButtonClick(props.website)}
        >
          WebSite
        </Button>
      </div>
    </div>
  );
};
