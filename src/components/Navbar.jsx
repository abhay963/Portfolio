import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

// React Icons
import {
  FaGithub,
  FaLinkedinIn,
  FaUser,
  FaFolderOpen,
  FaBriefcase,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";

import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

// =========================================================
// NAV ICON MAPPING
// =========================================================

const getNavIcon = (title) => {
  const name = title.toLowerCase();

  if (name.includes("about")) {
    return FaUser;
  }

  if (name.includes("project")) {
    return FaFolderOpen;
  }

  if (name.includes("experience")) {
    return FaBriefcase;
  }

  if (
    name.includes("contact") ||
    name.includes("email")
  ) {
    return FaEnvelope;
  }

  return FaCode;
};

// =========================================================
// SOCIAL LINKS
// =========================================================

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abhay9631/",
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    href: "https://github.com/abhay963",
    icon: FaGithub,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/abhayyadav96312/",
    icon: SiLeetcode,
  },
  {
    name: "GeeksforGeeks",
    href: "https://www.geeksforgeeks.org/profile/abhayyadav96",
    icon: SiGeeksforgeeks,
  },
];

// =========================================================
// NAVBAR
// =========================================================

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (title) => {
    setActive(title);
    setToggle(false);
  };

  return (
    <nav
      className={`
        ${styles.paddingX}
        w-full
        flex
        items-center
        py-4
        fixed
        top-0
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? "bg-black/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">

        {/* =================================================
            LOGO
        ================================================== */}

        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => {
            setActive("");
            setToggle(false);
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="Abhay"
            className="
              w-10
              h-10
              object-contain
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />

          <p className="text-white text-[18px] font-bold hidden sm:block">
            Abhay
          </p>
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <div className="hidden sm:flex items-center gap-3">

          {/* Portfolio Icons */}
          <ul className="flex items-center gap-1">

            {navLinks.map((nav) => {
              const Icon = getNavIcon(nav.title);
              const isActive = active === nav.title;

              return (
                <li
                  key={nav.id}
                  className="relative group"
                >
                  <a
                    href={`#${nav.id}`}
                    onClick={() => handleNavClick(nav.title)}
                    aria-label={nav.title}
                    className={`
                      w-10
                      h-10
                      flex
                      items-center
                      justify-center
                      rounded-lg
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "text-white bg-white/10"
                          : "text-secondary hover:text-white hover:bg-white/10"
                      }
                    `}
                  >
                    <Icon className="w-[19px] h-[19px]" />
                  </a>

                  {/* Tooltip */}
                  <span
                    className="
                      absolute
                      top-12
                      left-1/2
                      -translate-x-1/2
                      whitespace-nowrap
                      px-2.5
                      py-1.5
                      rounded-md
                      bg-black/95
                      border
                      border-white/10
                      text-white
                      text-xs
                      opacity-0
                      pointer-events-none
                      group-hover:opacity-100
                      transition-opacity
                      duration-200
                      shadow-xl
                    "
                  >
                    {nav.title}
                  </span>
                </li>
              );
            })}

          </ul>

          {/* Divider */}
          <div className="h-7 w-px bg-white/20 mx-2" />

          {/* =================================================
              SOCIAL ICONS
          ================================================== */}

          <div className="flex items-center gap-1">

            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="
                    relative
                    group
                    w-10
                    h-10
                    flex
                    items-center
                    justify-center
                    rounded-lg
                    text-secondary
                    hover:text-white
                    hover:bg-white/10
                    transition-all
                    duration-300
                  "
                >
                  <Icon
                    className="
                      w-[19px]
                      h-[19px]
                      transition-all
                      duration-300
                      group-hover:scale-110
                    "
                  />

                  {/* Tooltip */}
                  <span
                    className="
                      absolute
                      top-12
                      left-1/2
                      -translate-x-1/2
                      whitespace-nowrap
                      px-2.5
                      py-1.5
                      rounded-md
                      bg-black/95
                      border
                      border-white/10
                      text-white
                      text-xs
                      opacity-0
                      pointer-events-none
                      group-hover:opacity-100
                      transition-opacity
                      duration-200
                      shadow-xl
                    "
                  >
                    {social.name}
                  </span>
                </a>
              );
            })}

          </div>
        </div>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <div className="sm:hidden flex items-center">

          <button
            type="button"
            onClick={() => setToggle(!toggle)}
            aria-label={toggle ? "Close menu" : "Open menu"}
            className="
              w-10
              h-10
              flex
              items-center
              justify-center
              rounded-lg
              hover:bg-white/10
              transition-all
            "
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[26px] h-[26px] object-contain"
            />
          </button>

          {/* =================================================
              MOBILE MENU
          ================================================== */}

          <div
            className={`
              absolute
              top-[68px]
              right-4
              min-w-[240px]
              p-4
              black-gradient
              rounded-xl
              shadow-xl
              border
              border-white/10
              transition-all
              duration-200

              ${
                toggle
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-3 pointer-events-none"
              }
            `}
          >
            <ul className="flex flex-col gap-1">

              {/* Portfolio */}
              {navLinks.map((nav) => {
                const Icon = getNavIcon(nav.title);
                const isActive = active === nav.title;

                return (
                  <li key={nav.id}>
                    <a
                      href={`#${nav.id}`}
                      onClick={() => handleNavClick(nav.title)}
                      className={`
                        flex
                        items-center
                        gap-3
                        px-3
                        py-3
                        rounded-lg
                        transition-all

                        ${
                          isActive
                            ? "text-white bg-white/10"
                            : "text-secondary hover:text-white hover:bg-white/10"
                        }
                      `}
                    >
                      <Icon className="w-5 h-5" />

                      <span className="text-[15px] font-medium">
                        {nav.title}
                      </span>
                    </a>
                  </li>
                );
              })}

              {/* Divider */}
              <div className="h-px bg-white/10 my-2" />

              {/* Social Profiles */}
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setToggle(false)}
                      className="
                        flex
                        items-center
                        gap-3
                        px-3
                        py-3
                        rounded-lg
                        text-secondary
                        hover:text-white
                        hover:bg-white/10
                        transition-all
                      "
                    >
                      <Icon className="w-5 h-5" />

                      <span className="text-[15px] font-medium">
                        {social.name}
                      </span>
                    </a>
                  </li>
                );
              })}

            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;