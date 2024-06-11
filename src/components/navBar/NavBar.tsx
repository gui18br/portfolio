import avatar from "../../assets/jpeg/me.jpeg";
import { NavMenu } from "../navMenu/NavMenu";

export const NavBar = () => {
  return (
    <div className="fixed justify-center flex top-0 left-0 w-full bg-semiTransparent backdrop-blur-sm shadow-lg shadow-semiTransparent z-50">
      <div className="w-[88%]">
        <div className="flex justify-between pt-3 pb-3">
          <a href="/" className="flex items-center gap-5">
            <img src={avatar} alt="" className="w-20 h-20 rounded-full" />
            <h1 className="uppercase italic text-lg text-[#E9E0D9] ">
              Guilherme Novais
            </h1>
          </a>
          <NavMenu />
        </div>
      </div>
    </div>
  );
};
