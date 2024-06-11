import { NavBar } from "../navBar/NavBar";
import background from "../../assets/jpeg/background.jpg";
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
      <img src={background} className="w-full shadow-sm" alt="" />
      <div className="absolute bottom-36 w-full h-full flex flex-col justify-center items-center gap-5">
        <h1 className="text-[#85502E] text-5xl">{props.title}</h1>
        <p className="text-primary text-lg ">{props.description}</p>
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
