export const NavMenu = () => {
  return (
    <div className="flex items-center">
      <ul className="flex gap-10 uppercase text-[#E9E0D9] font-bold ">
        <li>
          <a
            href="/"
            className="hover:text-primary hover:border-b-2 pb-10 border-primary "
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/projects"
            className="hover:text-primary hover:border-b-2 pb-10 border-primary"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="hover:text-primary hover:border-b-2 pb-10 border-primary"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="hover:text-primary hover:border-b-2 pb-10 border-primary"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
