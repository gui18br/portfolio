import linkedin from "../../assets/icons8-linkedin.svg";
import github from "../../assets/icons8-github.svg";

export const Footer = () => {
  return (
    <footer className="w-full  bg-black text-[#E9E0D9]">
      <div className="flex items-center justify-between h-full w-full p-10  text-xl">
        <h1>GUILHERME NOVAIS</h1>
        <div className="flex flex-col items-center justify-center gap-2">
          <h1>SOCIAL</h1>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/guilherme-novais-b545a21a0/"
              target="_blank"
            >
              <img src={linkedin} alt="" className="w-10 h-10" />
            </a>
            <a href="https://github.com/gui18br" target="_blank">
              <img src={github} alt="" className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-8">
        <div className="border-[#E9E0D9] w-[88%] border-b-[0.1px]" />
        <p>&copy; 2024 Guilherme Novais. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
