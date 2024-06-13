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
        className="w-full shadow-sm hidden lg:block xl:h-[750px]"
        alt=""
      />
      <img
        src={backgroundMobile}
        className="shadow-sm lg:hidden block sm:h-[900px] sm:w-full "
        alt=""
      />
      <div className="absolute sm:bottom-20 lg:bottom-36 xl:bottom-32 bottom-20 w-full h-full flex flex-col justify-center text-center items-center gap-3">
        <h1 className="text-[#85502E] sm:text-5xl lg:text-5xl text-3xl">
          {props.title}
        </h1>
        <p className="text-primary text-lg xl:w-[90%] w-[60%]">
          {props.description}
        </p>
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
