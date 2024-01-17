import { useState } from "react";
import { Link } from "react-scroll";
import { LuAlignRight } from "react-icons/lu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="sticky top-0 text-white bg-black p-8 shadow-sm shadow-orange-500 z-50">
      <section className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="font-itim text-4xl font-medium cursor-pointer">
          M.Muiz
        </h1>
        <div>
          <button
            className="text-3xl md:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            <LuAlignRight />
          </button>
          <nav className="hidden md:block transition-all duration-150 text-textColor font-medium text-xl space-x-8">
            <Link
              to="hero"
              smooth="true"
              offset={-100}
              duration={500}
              className="cursor-pointer decoration-2 decoration-orange-500 hover:underline hover:underline-offset-8"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth="true"
              offset={-100}
              duration={500}
              className="cursor-pointer decoration-2 decoration-orange-500 hover:underline hover:underline-offset-8"
            >
              About
            </Link>
            <Link
              to="projects"
              smooth="true"
              offset={-100}
              duration={500}
              className="cursor-pointer decoration-2 decoration-orange-500 hover:underline hover:underline-offset-8"
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth="true"
              offset={-100}
              duration={500}
              className="cursor-pointer decoration-2 decoration-orange-500 hover:underline hover:underline-offset-8"
            >
              Skills
            </Link>
            <Link
              to="contact"
              smooth="true"
              offset={-100}
              duration={500}
              className="cursor-pointer decoration-2 decoration-orange-500 hover:underline hover:underline-offset-8"
            >
              Contact Me
            </Link>
          </nav>
        </div>
      </section>

      {showMenu && (
        <section className="md:hidden transition-all duration-150  mt-5 font-itim text-xl flex flex-col justify-center gap-4 items-center">

          <Link
            to="hero"
            className="cursor-pointer decoration-2 decoration-orange-500 hover:underline hover:underline-offset-8"
            smooth="true"
            offset={-100}
            duration={500}
          >
            Hero
          </Link>
          <Link
            to="about"
            className="decoration-2 decoration-orange-500 cursor-pointer hover:underline hover:underline-offset-8"
            smooth="true"
            offset={-100}
            duration={500}
          >
            About
          </Link>
          <Link
            to="projects"
            className="decoration-2 decoration-orange-500 cursor-pointer hover:underline hover:underline-offset-8"
            smooth="true"
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
          <Link
            to="skills"
            className="decoration-2 decoration-orange-500  cursor-pointer hover:underline hover:underline-offset-8"
            smooth="true"
            offset={-100}
            duration={500}
          >
            Skills
          </Link>
          <Link
            to="contact"
            className="decoration-2 decoration-orange-500 cursor-pointer hover:underline hover:underline-offset-8"
            smooth="true"
            offset={-100}
            duration={500}
          >
            Contact Me
          </Link>
        </section>
      )}
    </header>
  );
};

export default Header;
