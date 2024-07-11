import { NavBar } from "../navBar/NavBar";
import { Button } from "../button/Button";
import background from "../../assets/jpeg/bg-brown.jpg";

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
      <img src={background} className="w-full shadow-sm h-screen" alt="" />
      <div className="absolute sm:bottom-8 lg:bottom-0 bottom-6 w-full h-full flex flex-col justify-center text-center items-center gap-3">
        <h1 className="text-300 sm:text-5xl lg:text-5xl text-3xl">
          {props.title}
        </h1>
        <p className="text-300 text-lg xl:w-[90%] w-[60%]">
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
