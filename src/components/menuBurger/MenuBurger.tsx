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
            <li
              key={item.name}
              className="border-b-2 border-[#E9E0D9] w-[77%] pb-2 flex justify-center"
            >
              <Link
                to={item.link}
                offset={item.link !== "contato" ? -130 : -290}
                smooth={true}
                duration={500}
                className="text-[#E9E0D9] hover:font-semibold cursor-pointer uppercase"
                onClick={onToggle}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </Transition>
    </div>
  );
};
