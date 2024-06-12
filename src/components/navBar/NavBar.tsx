import { useState } from "react";
import avatar from "../../assets/jpeg/me.jpeg";
import { MenuBurger } from "../menuBurger/MenuBurger";
import { NavMenu } from "../navMenu/NavMenu";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed justify-center flex top-0 left-0 w-full bg-semiTransparent backdrop-blur-sm shadow-lg shadow-semiTransparent z-50">
      <div className="w-[88%]">
        <div className="flex justify-between items-center pt-3 pb-3">
          <a href="/" className="flex items-center gap-5">
            <img src={avatar} alt="" className="w-20 h-20 rounded-full" />
            <h1 className="uppercase italic text-xl text-[#E9E0D9] ">
              Guilherme Novais
            </h1>
          </a>
          <button
            onClick={toggleNavbar}
            className={`bg-[#1D060526] p-1 rounded-md lg:hidden block ${
              currentPath !== "/" ? "hidden" : ""
            }`}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
          <NavMenu />
        </div>
        <div>
          <MenuBurger isOpen={isOpen} onToggle={toggleNavbar} />
        </div>
      </div>
    </div>
  );
};
