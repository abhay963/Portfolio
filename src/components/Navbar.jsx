
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";

import {
  FiUser,
  FiBriefcase,
  FiFolder,
  FiMail,
  FiCode,
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiExternalLink,
} from "react-icons/fi";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiGeeksforgeeks,
} from "react-icons/si";

// Navigation icon mapping
const getNavIcon = (title) => {
  const name = title.toLowerCase();

  if (name.includes("about")) return FiUser;
  if (name.includes("project")) return FiFolder;
  if (name.includes("experience")) return FiBriefcase;
  if (name.includes("contact")) return FiMail;

  return FiCode;
};

// Social links
const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/abhay963",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abhay9631/",
    icon: FaLinkedinIn,
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

const Navbar = () => {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Optimized scroll handling
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu on Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = navLinks
      .map((nav) => document.getElementById(nav.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible.length) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleHome = () => {
    setActive("");
    closeMenu();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4"
        aria-label="Main navigation"
      >
        <div
          className={`
            max-w-7xl mx-auto
            flex items-center justify-between
            px-4 sm:px-6 py-3
            rounded-2xl
            border
            transition-all duration-300
            ${
              scrolled
                ? "bg-[#09090b]/85 border-white/[0.12] shadow-[0_8px_40px_rgba(0,0,0,0.3)] backdrop-blur-2xl"
                : "bg-black/20 border-white/[0.08] backdrop-blur-xl"
            }
          `}
        >
          {/* BRAND */}
          <Link
            to="/"
            onClick={handleHome}
            className="flex items-center gap-3 group shrink-0"
            aria-label="Go to homepage"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#915EFF]/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <img
                src={logo}
                alt="Abhay logo"
                className="relative w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-white font-bold text-[17px] tracking-tight leading-tight">
                Abhay<span className="text-[#915EFF]">.</span>
              </span>

              <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-medium">
                Developer
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 p-1 rounded-xl bg-white/[0.035] border border-white/[0.05]">
              {navLinks.map((nav) => {
                const Icon = getNavIcon(nav.title);
                const isActive = active === nav.id;

                return (
                  <a
                    key={nav.id}
                    href={`#${nav.id}`}
                    onClick={closeMenu}
                    aria-current={isActive ? "location" : undefined}
                    className={`
                      relative flex items-center gap-2
                      px-4 py-2.5 rounded-lg
                      text-[13px] font-medium
                      transition-colors duration-300
                      ${
                        isActive
                          ? "text-white"
                          : "text-white/50 hover:text-white"
                      }
                    `}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-lg bg-white/[0.10] border border-white/[0.07]"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}

                    <Icon className="relative z-10 text-[15px]" />

                    <span className="relative z-10 whitespace-nowrap">
                      {nav.title}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1 border-r border-white/10 pr-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="
                      w-9 h-9 flex items-center justify-center
                      rounded-lg text-white/45
                      hover:text-white hover:bg-white/10
                      transition-all duration-200
                    "
                  >
                    <Icon className="text-[17px]" />
                  </a>
                );
              })}
            </div>

            <a
              href="#contact"
              className="
                group flex items-center gap-2
                px-4 py-2.5 rounded-xl
                bg-[#915EFF] hover:bg-[#8050e8]
                text-white text-[13px] font-semibold
                shadow-[0_4px_20px_rgba(145,94,255,0.2)]
                hover:shadow-[0_4px_25px_rgba(145,94,255,0.4)]
                transition-all duration-300
              "
            >
              Let's Talk

              <FiArrowUpRight className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            className="
              lg:hidden w-10 h-10
              flex items-center justify-center
              rounded-xl border border-white/10
              bg-white/[0.04]
              text-white hover:bg-white/10
              transition-all
            "
          >
            {menuOpen ? (
              <FiX size={21} />
            ) : (
              <FiMenu size={21} />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="
                lg:hidden max-w-7xl mx-auto mt-3
                rounded-2xl overflow-hidden
                border border-white/10
                bg-[#0c0c10]/95
                backdrop-blur-2xl
                shadow-2xl
              "
            >
              <div className="p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/35 font-semibold mb-3 px-2">
                  Navigation
                </p>

                <div className="space-y-1">
                  {navLinks.map((nav, index) => {
                    const Icon = getNavIcon(nav.title);
                    const isActive = active === nav.id;

                    return (
                      <motion.a
                        key={nav.id}
                        href={`#${nav.id}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04 }}
                        onClick={closeMenu}
                        aria-current={isActive ? "location" : undefined}
                        className={`
                          flex items-center justify-between
                          px-4 py-3.5 rounded-xl
                          transition-all
                          ${
                            isActive
                              ? "bg-[#915EFF]/15 text-white border border-[#915EFF]/20"
                              : "text-white/55 hover:text-white hover:bg-white/[0.05] border border-transparent"
                          }
                        `}
                      >
                        <span className="flex items-center gap-3">
                          <Icon className="text-lg" />
                          <span className="text-sm font-medium">
                            {nav.title}
                          </span>
                        </span>

                        <FiArrowUpRight className="text-white/30" />
                      </motion.a>
                    );
                  })}
                </div>

                <div className="h-px bg-white/10 my-4" />

                <p className="text-[10px] uppercase tracking-[0.2em] text-white/35 font-semibold mb-3 px-2">
                  Connect
                </p>

                <div className="grid grid-cols-4 gap-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        aria-label={social.name}
                        className="
                          flex flex-col items-center gap-2
                          py-3 rounded-xl
                          bg-white/[0.035]
                          border border-white/[0.06]
                          text-white/50
                          hover:text-white hover:bg-white/10
                          transition-all
                        "
                      >
                        <Icon size={19} />

                        <span className="text-[9px] font-medium">
                          {social.name}
                        </span>
                      </a>
                    );
                  })}
                </div>

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="
                    flex items-center justify-center gap-2
                    mt-4 py-3.5 rounded-xl
                    bg-[#915EFF]
                    text-white text-sm font-semibold
                  "
                >
                  Let's Talk
                  <FiArrowUpRight />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
