import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer hidden sm:block">
            Abhay
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex flex-row gap-8">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-secondary text-[16px] hover:text-white transition-all font-medium cursor-pointer ${
                active === nav.title ? "text-white" : ""
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li>
            <a
              href="https://www.linkedin.com/in/abhay9631/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white text-[16px] font-medium"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/abhay963"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white text-[16px] font-medium"
            >
              GitHub
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 black-gradient absolute top-16 right-4 min-w-[200px] z-40 rounded-xl shadow-xl`}
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`text-secondary text-[16px] hover:text-white font-medium cursor-pointer ${
                    active === nav.title ? "text-white" : ""
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}

              <li
                className="text-secondary hover:text-white text-[16px] font-medium cursor-pointer"
                onClick={() => setToggle(false)}
              >
                <a
                  href="https://www.linkedin.com/in/abhay9631/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>

              <li
                className="text-secondary hover:text-white text-[16px] font-medium cursor-pointer"
                onClick={() => setToggle(false)}
              >
                <a
                  href="https://github.com/abhay963"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
