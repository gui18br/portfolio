import { Link } from "react-scroll";
import { Transition } from "@headlessui/react";

interface MenuBurgerProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MenuBurger = ({ isOpen, onToggle }: MenuBurgerProps) => {
  const menuItems = [
    { name: "Home", link: "home" },
    { name: "Sobre", link: "sobre" },
    { name: "Projetos", link: "projetos" },
    { name: "Contato", link: "contato" },
  ];

  return (
    <div className="block lg:hidden">
      <Transition
        show={isOpen}
        enter="transition-all duration-300 ease-in-out"
        enterFrom="opacity-0 max-h-0"
        enterTo="opacity-100 max-h-screen"
        leave="transition-all duration-300 ease-in-out"
        leaveFrom="opacity-100 max-h-screen"
        leaveTo="opacity-0 max-h-0"
      >
        <ul className="overflow-hidden flex flex-col items-center bg-primary rounded-md h-64 justify-center gap-5 mb-2">
          {menuItems.map((item) => (
            <Link
              to={item.link}
              offset={item.link !== "contato" ? -145 : -90}
              smooth={true}
              duration={500}
              className="text-[#E9E0D9] cursor-pointer uppercase w-[77%]"
              onClick={onToggle}
            >
              <li
                key={item.name}
                className=" hover:bg-[#6e41277c] p-2 transition-colors rounded-md duration-300 flex justify-center"
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </Transition>
    </div>
  );
};
