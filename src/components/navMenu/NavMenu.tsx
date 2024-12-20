import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";

export const NavMenu = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { name: "Home", link: "home" },
    { name: "Sobre", link: "sobre" },
    { name: "Projetos", link: "projetos" },
    { name: "Contato", link: "contato" },
  ];
  return (
    <div className={`${currentPath === "/" ? "hidden lg:block" : "block"} `}>
      <div className="flex items-center">
        <ul className="flex gap-10 uppercase text-300 font-bold ">
          {currentPath === "/" ? (
            <>
              {menuItems.map((item) => (
                <li>
                  <Link
                    key={item.name}
                    to={item.link}
                    offset={
                      item.link == "sobre"
                        ? -140
                        : item.link == "projetos"
                        ? -40
                        : -0
                    }
                    smooth={true}
                    duration={500}
                    className="hover:text-primary hover:border-b-2 pb-10 border-primary cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </>
          ) : (
            <>
              <li>
                <a
                  href="/"
                  className="hover:text-primary hover:border-b-2 sm:pb-10 pb-9 ml-2 border-primary "
                >
                  Voltar
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
