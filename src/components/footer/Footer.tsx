import linkedin from "../../assets/icons8-linkedin.svg";
import github from "../../assets/icons8-github.svg";

export const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center flex-col  bg-black text-300">
      <div className="flex items-center justify-between h-full sm:w-[88%] w-[90%] p-10  sm:text-xl text-lg  ">
        <h1 className="sm:w-full w-[10%]">GUILHERME NOVAIS</h1>
        <div className="flex flex-col items-center justify-center gap-2">
          <h1>SOCIAL</h1>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/guilherme-novais-b545a21a0/"
              target="_blank"
            >
              <img src={linkedin} alt="" className="sm:w-10 sm:h-10 w-8 h-8" />
            </a>
            <a href="https://github.com/gui18br" target="_blank">
              <img src={github} alt="" className="sm:w-10 sm:h-10 w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-8 text-center">
        <hr className="border-t border-300 w-[90%] " />
        <p>&copy; 2024 Guilherme Novais. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
