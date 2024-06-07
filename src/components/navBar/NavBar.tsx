import avatar from "../../assets/jpeg/me.jpeg";

export const NavBar = () => {
  return (
    <div className="fixed justify-center flex top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="w-[88%]">
        <div className="flex justify-between pt-3 pb-3">
          <div className="flex items-center gap-5">
            <img src={avatar} alt="" className="w-20 h-20 rounded-full" />
            <h1 className="uppercase italic">Guilherme Novais</h1>
          </div>
          <div className="flex items-center">
            <ul className="flex gap-10 uppercase ">
              <li>
                <a
                  href="/"
                  className="hover:text-amber-950 hover:border-b-2 pb-10 border-amber-900 "
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="hover:text-amber-950 hover:border-b-2 pb-10 border-amber-900"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-amber-950 hover:border-b-2 pb-10 border-amber-900"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-amber-950 hover:border-b-2 pb-10 border-amber-900"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
