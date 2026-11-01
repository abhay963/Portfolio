import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

import { Link } from "react-router-dom";
import { logo } from "../assets";
import { navLinks } from "../constants";

import {
  FiUser,
  FiLayers,
  FiBriefcase,
  FiMail,
  FiCode,
  FiGithub,
  FiLinkedin,
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiHome,
  FiZap,
} from "react-icons/fi";

import {
  SiLeetcode,
  SiGeeksforgeeks,
} from "react-icons/si";

// ==================================================
// CONFIGURATION & AUDIO SYNTHESIZER
// ==================================================

const SCROLL_OFFSET = 80;
const ROBOT_WIDTH = 28;

const clamp = (value, min, max) =>
  Math.min(Math.max(value, min), max);

// Web Audio API Synthesizer (Retro 8-Bit Jump Sound)
const playJumpSound = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(340, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(820, ctx.currentTime + 0.18);

    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.22);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.22);
  } catch (e) {
    // Graceful fallback for un-interacted browsers
  }
};

const getNavIcon = (title = "") => {
  const name = title.toLowerCase();

  if (name.includes("about")) return FiUser;
  if (name.includes("project")) return FiLayers;
  if (name.includes("experience") || name.includes("work"))
    return FiBriefcase;
  if (name.includes("contact")) return FiMail;

  return FiCode;
};

// ==================================================
// SOCIAL LINKS
// ==================================================

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/abhay963",
    icon: FiGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abhay9631/",
    icon: FiLinkedin,
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

// ==================================================
// NAVIGATION ROBOT ANIMATIONS
// ==================================================

const robotStyles = `
  .robot-character {
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 28px;
    height: 34px;
    z-index: 30;
    pointer-events: none;
    will-change: transform;
    filter: drop-shadow(0 3px 8px rgba(145,94,255,0.6));
  }

  .robot-character .robot-flip {
    width: 100%;
    height: 100%;
    transform-origin: bottom center;
    transition: transform 180ms ease;
  }

  .robot-character[data-direction="left"] .robot-flip {
    transform: scaleX(-1);
  }

  .robot-character .robot-leg-left,
  .robot-character .robot-leg-right,
  .robot-character .robot-arm-left,
  .robot-character .robot-arm-right {
    transform-box: fill-box;
  }

  .robot-character .robot-leg-left,
  .robot-character .robot-leg-right {
    transform-origin: 50% 10%;
  }

  .robot-character .robot-arm-left,
  .robot-character .robot-arm-right {
    transform-origin: 50% 15%;
  }

  .robot-character .robot-torso-head {
    transform-origin: center;
  }

  .robot-character[data-state="idle"] .robot-body-group {
    animation: robotIdle 2.5s ease-in-out infinite;
  }

  .robot-character[data-state="walking"] .robot-leg-left {
    animation: legSwingLeft .35s infinite linear;
  }

  .robot-character[data-state="walking"] .robot-leg-right {
    animation: legSwingRight .35s infinite linear;
  }

  .robot-character[data-state="walking"] .robot-arm-left {
    animation: armSwingLeft .35s infinite linear;
  }

  .robot-character[data-state="walking"] .robot-arm-right {
    animation: armSwingRight .35s infinite linear;
  }

  .robot-character[data-state="walking"] .robot-torso-head {
    animation: robotWalkBounce .35s infinite linear;
  }

  .robot-character[data-state="walking"] .robot-shadow {
    animation: robotShadow .35s infinite ease-in-out;
  }

  .robot-character[data-state="jumping"] .robot-flip {
    animation: smoothRobotJump 0.75s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  .robot-antenna {
    animation: antennaPulse 1.8s infinite ease-in-out;
  }

  .robot-eye {
    animation: eyeGlow 3s infinite ease-in-out;
  }

  .robot-core {
    animation: robotCore 1.4s infinite ease-in-out;
  }

  @keyframes antennaPulse {
    0%, 100% {
      fill: #915EFF;
      filter: drop-shadow(0 0 4px #915EFF);
    }
    50% {
      fill: #C4B5FD;
      filter: drop-shadow(0 0 12px #C4B5FD);
    }
  }

  @keyframes eyeGlow {
    0%, 100% { opacity: .95; }
    50% { opacity: .45; }
  }

  @keyframes robotCore {
    0%, 100% { opacity: .7; }
    50% { opacity: 1; }
  }

  @keyframes robotIdle {
    0%, 100% {
      transform: translateY(0) rotate(0);
    }
    50% {
      transform: translateY(-2px) rotate(.8deg);
    }
  }

  @keyframes smoothRobotJump {
    0% {
      transform: translateY(0) scale(1, 1);
    }
    15% {
      transform: translateY(3px) scale(1.18, 0.82);
    }
    45% {
      transform: translateY(-18px) scale(0.9, 1.15);
    }
    75% {
      transform: translateY(1px) scale(1.08, 0.92);
    }
    100% {
      transform: translateY(0) scale(1, 1);
    }
  }

  @keyframes legSwingLeft {
    0% { transform: rotate(24deg); }
    50% { transform: rotate(-24deg); }
    100% { transform: rotate(24deg); }
  }

  @keyframes legSwingRight {
    0% { transform: rotate(-24deg); }
    50% { transform: rotate(24deg); }
    100% { transform: rotate(-24deg); }
  }

  @keyframes armSwingLeft {
    0% { transform: rotate(-28deg); }
    50% { transform: rotate(28deg); }
    100% { transform: rotate(-28deg); }
  }

  @keyframes armSwingRight {
    0% { transform: rotate(28deg); }
    50% { transform: rotate(-28deg); }
    100% { transform: rotate(28deg); }
  }

  @keyframes robotWalkBounce {
    0%, 100% { transform: translateY(0); }
    25% { transform: translateY(-2px); }
    50% { transform: translateY(.5px); }
    75% { transform: translateY(-2px); }
  }

  @keyframes robotShadow {
    0%, 100% { transform: scaleX(1); opacity: .4; }
    50% { transform: scaleX(.6); opacity: .15; }
  }

  @keyframes shineSweep {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(200%); }
  }

  .cta-shine {
    animation: shineSweep 3.5s infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .robot-character *,
    .robot-antenna,
    .robot-eye,
    .robot-core,
    .cta-shine {
      animation: none !important;
    }
  }
`;

// ==================================================
// SIDE-FACING WALKING ROBOT
// ==================================================

const WalkingRobot = () => {
  return (
    <div className="robot-flip">
      <svg
        viewBox="0 0 40 44"
        width="28"
        height="34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse
          className="robot-shadow"
          cx="21"
          cy="42"
          rx="11"
          ry="1.5"
          fill="#915EFF"
          opacity=".35"
        />

        <g className="robot-arm-left">
          <rect
            x="13"
            y="18"
            width="4"
            height="10"
            rx="2"
            fill="#4c1d95"
          />
          <circle
            cx="15"
            cy="27"
            r="2"
            fill="#915EFF"
          />
        </g>

        <g className="robot-leg-left">
          <rect
            x="15"
            y="27"
            width="5"
            height="11"
            rx="2.5"
            fill="#3b0764"
          />
          <path
            d="M14 36H23C24.1 36 25 36.9 25 38V39H14V36Z"
            fill="#6d28d9"
          />
        </g>

        <g className="robot-body-group">
          <g className="robot-torso-head">
            <line
              x1="21"
              y1="10"
              x2="21"
              y2="4"
              stroke="#7c3aed"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <circle
              cx="21"
              cy="3"
              r="2.5"
              className="robot-antenna"
            />

            <rect
              x="14"
              y="9"
              width="16"
              height="12"
              rx="4"
              fill="url(#robotHeadGradient)"
              stroke="#7c3aed"
              strokeWidth="1"
            />

            <rect
              x="22"
              y="12"
              width="7"
              height="5"
              rx="2"
              fill="#090d16"
            />

            <circle
              cx="26"
              cy="14.5"
              r="1.8"
              fill="#38bdf8"
              className="robot-eye"
            />

            <circle
              cx="27"
              cy="13.8"
              r=".6"
              fill="#ffffff"
            />

            <circle
              cx="14"
              cy="15"
              r="1.5"
              fill="#6d28d9"
            />

            <rect
              x="19"
              y="21"
              width="5"
              height="2"
              fill="#4c1d95"
            />

            <rect
              x="15"
              y="23"
              width="13"
              height="11"
              rx="3.5"
              fill="url(#robotBodyGradient)"
              stroke="#6d28d9"
              strokeWidth="1"
            />

            <circle
              cx="23"
              cy="28"
              r="2"
              fill="#915EFF"
              className="robot-core"
            />

            <line
              x1="17"
              y1="26"
              x2="19"
              y2="26"
              stroke="#c4b5fd"
              strokeWidth="1"
              strokeLinecap="round"
            />

            <line
              x1="17"
              y1="29"
              x2="19"
              y2="29"
              stroke="#c4b5fd"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </g>
        </g>

        <g className="robot-leg-right">
          <rect
            x="21"
            y="27"
            width="5"
            height="11"
            rx="2.5"
            fill="#6d28d9"
          />
          <path
            d="M20 36H29C30.1 36 31 36.9 31 38V39H20V36Z"
            fill="#915EFF"
          />
        </g>

        <g className="robot-arm-right">
          <rect
            x="19"
            y="24"
            width="4"
            height="9"
            rx="2"
            fill="#7c3aed"
          />
          <circle
            cx="21"
            cy="32"
            r="2"
            fill="#c4b5fd"
          />
        </g>

        <defs>
          <linearGradient
            id="robotHeadGradient"
            x1="14"
            y1="9"
            x2="30"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3b0764" />
            <stop offset="1" stopColor="#6d28d9" />
          </linearGradient>

          <linearGradient
            id="robotBodyGradient"
            x1="15"
            y1="23"
            x2="28"
            y2="34"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2e1065" />
            <stop offset="1" stopColor="#5b21b6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// ==================================================
// MAIN NAVBAR
// ==================================================

const Navbar = () => {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const trackRef = useRef(null);
  const robotRef = useRef(null);
  const linkRefs = useRef({});

  const currentXRef = useRef(0);
  const targetXRef = useRef(0);
  const directionRef = useRef("right");
  const animationRef = useRef(null);
  const idleTimerRef = useRef(null);

  // ------------------------------------------------
  // GET CENTER POSITION OF EACH NAV ITEM
  // ------------------------------------------------

  const getLinkPosition = useCallback((id) => {
    const track = trackRef.current;
    const link = linkRefs.current[id];

    if (!track || !link) return 0;

    const trackRect = track.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();

    return (
      linkRect.left -
      trackRect.left +
      linkRect.width / 2 -
      ROBOT_WIDTH / 2
    );
  }, []);

  // ------------------------------------------------
  // SET ROBOT TARGET WITH JUMP & SOUND EFFECT
  // ------------------------------------------------

  const moveRobotTo = useCallback(
    (id) => {
      const position = getLinkPosition(id);

      targetXRef.current = position;

      if (position > currentXRef.current + 1) {
        directionRef.current = "right";
      } else if (position < currentXRef.current - 1) {
        directionRef.current = "left";
      }

      if (robotRef.current) {
        robotRef.current.dataset.direction = directionRef.current;

        playJumpSound();
        robotRef.current.dataset.state = "jumping";

        setTimeout(() => {
          if (robotRef.current && robotRef.current.dataset.state === "jumping") {
            robotRef.current.dataset.state = "walking";
          }
        }, 750);
      }
    },
    [getLinkPosition]
  );

  // ------------------------------------------------
  // REQUEST ANIMATION FRAME MOVEMENT
  // ------------------------------------------------

  useEffect(() => {
    let lastTime = performance.now();

    const animate = (time) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const difference = targetXRef.current - currentXRef.current;

      if (Math.abs(difference) > 0.35) {
        const factor = 10;
        const step = difference * Math.min(delta * factor, 1);

        currentXRef.current += step;

        if (Math.abs(step) > 0.01) {
          const direction = step > 0 ? "right" : "left";
          directionRef.current = direction;

          if (robotRef.current) {
            robotRef.current.dataset.direction = direction;
            if (robotRef.current.dataset.state !== "jumping") {
              robotRef.current.dataset.state = "walking";
            }
          }
        }

        if (robotRef.current) {
          robotRef.current.style.transform = `translate3d(${currentXRef.current}px, 0, 0)`;
        }
      } else {
        currentXRef.current = targetXRef.current;

        if (robotRef.current) {
          robotRef.current.style.transform = `translate3d(${currentXRef.current}px, 0, 0)`;
          if (robotRef.current.dataset.state !== "jumping") {
            robotRef.current.dataset.state = "idle";
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // ------------------------------------------------
  // SCROLL POSITION -> ROBOT POSITION & SCROLL DETECT
  // ------------------------------------------------

  useEffect(() => {
    let scrollFrame = null;

    const getSectionPositions = () => {
      const items = [
        { id: "home", top: 0 },
        ...navLinks.map((nav) => {
          const element = document.getElementById(nav.id);

          return {
            id: nav.id,
            top: element
              ? element.getBoundingClientRect().top + window.scrollY
              : null,
          };
        }),
      ].filter((item) => item.top !== null);

      return items;
    };

    const updateFromScroll = () => {
      scrollFrame = null;
      setScrolled(window.scrollY > 30);

      const sections = getSectionPositions();
      if (!sections.length) return;

      const scrollPosition = window.scrollY + SCROLL_OFFSET + 20;

      let progressPosition = 0;
      let currentActive = "";

      if (scrollPosition < sections[0].top) {
        progressPosition = 0;
      } else {
        for (let i = 0; i < sections.length; i++) {
          const current = sections[i];
          const next = sections[i + 1];

          if (scrollPosition >= current.top) {
            currentActive = current.id === "home" ? "" : current.id;

            if (next) {
              const sectionDistance = Math.max(next.top - current.top, 1);
              const fraction = clamp(
                (scrollPosition - current.top) / sectionDistance,
                0,
                1
              );
              progressPosition = i + fraction;
            } else {
              progressPosition = i;
            }
          }
        }
      }

      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 5
      ) {
        progressPosition = sections.length - 1;
        currentActive = sections[sections.length - 1].id;
      }

      const index = Math.min(
        Math.floor(progressPosition),
        sections.length - 1
      );

      const nextIndex = Math.min(index + 1, sections.length - 1);
      const fraction = progressPosition - index;

      const currentPosition = getLinkPosition(sections[index].id);
      const nextPosition = getLinkPosition(sections[nextIndex].id);

      const interpolated =
        currentPosition + (nextPosition - currentPosition) * fraction;

      targetXRef.current = interpolated;

      if (interpolated > currentXRef.current + 1) {
        directionRef.current = "right";
      } else if (interpolated < currentXRef.current - 1) {
        directionRef.current = "left";
      }

      if (robotRef.current) {
        robotRef.current.dataset.direction = directionRef.current;
      }

      setActive(currentActive);

      clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => {
        if (
          Math.abs(targetXRef.current - currentXRef.current) < 2
        ) {
          if (robotRef.current && robotRef.current.dataset.state !== "jumping") {
            robotRef.current.dataset.state = "idle";
          }
        }
      }, 180);
    };

    const handleScroll = () => {
      if (scrollFrame) return;
      scrollFrame = requestAnimationFrame(updateFromScroll);
    };

    const handleResize = () => {
      updateFromScroll();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    requestAnimationFrame(updateFromScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (scrollFrame) cancelAnimationFrame(scrollFrame);
      clearTimeout(idleTimerRef.current);
    };
  }, [getLinkPosition]);

  // ------------------------------------------------
  // CLICK NAVIGATION
  // ------------------------------------------------

  const goToSection = useCallback(
    (id) => {
      setMenuOpen(false);
      const targetId = id || "home";

      const targetElement =
        targetId === "home"
          ? document.getElementById("home")
          : document.getElementById(targetId);

      const targetTop = targetElement
        ? Math.max(
            0,
            targetElement.getBoundingClientRect().top +
              window.scrollY -
              SCROLL_OFFSET
          )
        : 0;

      setActive(targetId === "home" ? "" : targetId);
      moveRobotTo(targetId);

      window.scrollTo({
        top: targetTop,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    },
    [moveRobotTo]
  );

  // ------------------------------------------------
  // INITIAL ROBOT POSITION
  // ------------------------------------------------

  useEffect(() => {
    const initialize = () => {
      const position = getLinkPosition("home");

      currentXRef.current = position;
      targetXRef.current = position;

      if (robotRef.current) {
        robotRef.current.style.transform = `translate3d(${position}px, 0, 0)`;
        robotRef.current.dataset.state = "idle";
        robotRef.current.dataset.direction = "right";
      }
    };

    const timer = requestAnimationFrame(initialize);
    return () => cancelAnimationFrame(timer);
  }, [getLinkPosition]);

  // ------------------------------------------------
  // MOBILE MENU LISTENERS
  // ------------------------------------------------

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ==================================================
  // NAVBAR RENDER
  // ==================================================

  return (
    <>
      <style>{robotStyles}</style>

      {/* FLOATING GLASS CONTAINER */}

      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          w-full flex justify-center
          px-4 sm:px-6 lg:px-8
          transition-all duration-500 ease-out
          ${scrolled ? "pt-2 sm:pt-2.5" : "pt-3 sm:pt-4"}
        `}
      >
        <div
          className={`
            w-full max-w-7xl
            flex items-center justify-between
            gap-4
            px-4 sm:px-6 py-1.5 sm:py-2
            rounded-xl sm:rounded-2xl
            transition-all duration-500
            bg-[#09090f]/75 backdrop-blur-xl
            border border-white/[0.12]
            shadow-[0_8px_25px_rgba(0,0,0,0.5),0_0_30px_rgba(145,94,255,0.12)]
            hover:border-white/[0.2]
          `}
        >
          {/* LOGO WITH GLOW EFFECT */}

          <Link
            to="/"
            onClick={(event) => {
              event.preventDefault();
              goToSection("home");
            }}
            className="
              flex items-center gap-3
              shrink-0 group relative
            "
          >
            <div className="relative">
              <div className="
                absolute -inset-1 rounded-full
                bg-gradient-to-r from-[#915EFF] to-purple-400
                opacity-40 blur-sm group-hover:opacity-80
                transition duration-300
              " />
              <img
                src={logo}
                alt="Abhay Yadav"
                className="
                  relative w-8 h-8 sm:w-9 sm:h-9
                  object-contain
                  transition-transform duration-300
                  group-hover:scale-105
                "
              />
            </div>

            <div className="hidden sm:block">
              <div className="flex items-center gap-2">
                <p className="
                  text-white text-[15px] font-extrabold
                  tracking-tight leading-none
                ">
                  Abhay
                </p>
              </div>

              <p className="
                mt-0.5 text-[8px] uppercase tracking-[0.25em]
                text-white/40 font-mono
              ">
                AI & Full-Stack Engineer
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION TRACK */}

          <nav
            className="
              hidden lg:flex flex-1 justify-center
              min-w-0 mx-4 xl:mx-8
            "
            aria-label="Main navigation"
          >
            <div
              ref={trackRef}
              className="
                relative flex items-center justify-between
                w-full max-w-[500px]
                px-2 pt-1 pb-4
              "
            >
              {/* WALKING ROBOT */}

              <div
                ref={robotRef}
                className="robot-character"
                data-state="idle"
                data-direction="right"
                style={{
                  transform: "translate3d(0,0,0)",
                }}
              >
                <WalkingRobot />
              </div>

              {/* NAVIGATION LINKS */}

              <button
                ref={(element) => {
                  linkRefs.current.home = element;
                }}
                type="button"
                onClick={() => goToSection("home")}
                className={`
                  relative z-10 flex flex-col items-center gap-1
                  min-w-[55px] px-2.5 py-1 rounded-lg
                  transition-all duration-300
                  ${
                    !active
                      ? "text-white bg-white/[0.06] shadow-[0_0_12px_rgba(145,94,255,0.2)]"
                      : "text-white/45 hover:text-white hover:bg-white/[0.03]"
                  }
                `}
              >
                <FiHome
                  size={15}
                  className={!active ? "text-[#BDA5FF]" : ""}
                />

                <span className="text-[10px] font-semibold tracking-wide">
                  Home
                </span>
              </button>

              {navLinks.map((nav) => {
                const Icon = getNavIcon(nav.title);
                const isActive = active === nav.id;

                return (
                  <button
                    key={nav.id}
                    ref={(element) => {
                      linkRefs.current[nav.id] = element;
                    }}
                    type="button"
                    onClick={() => goToSection(nav.id)}
                    className={`
                      relative z-10 flex flex-col items-center gap-1
                      min-w-[55px] px-2.5 py-1 rounded-lg
                      transition-all duration-300
                      ${
                        isActive
                          ? "text-white bg-white/[0.06] shadow-[0_0_12px_rgba(145,94,255,0.2)]"
                          : "text-white/45 hover:text-white hover:bg-white/[0.03]"
                      }
                    `}
                  >
                    <Icon
                      size={15}
                      className={isActive ? "text-[#BDA5FF]" : ""}
                    />

                    <span className="text-[10px] font-semibold tracking-wide whitespace-nowrap">
                      {nav.title}
                    </span>

                    {isActive && (
                      <span className="
                        absolute -bottom-1.5
                        w-1 h-1 rounded-full
                        bg-[#915EFF]
                        shadow-[0_0_8px_#915EFF]
                      " />
                    )}
                  </button>
                );
              })}

              {/* NEON LASER TRACK BASELINE */}

              <div className="
                absolute left-3 right-3 bottom-[10px]
                h-[2px] rounded-full
                bg-white/[0.08] -z-0 overflow-hidden
              ">
                <div className="
                  h-full w-full rounded-full
                  bg-gradient-to-r from-transparent via-[#915EFF] to-transparent
                  opacity-75
                " />
              </div>
            </div>
          </nav>

          {/* RIGHT SIDE SOCIAL LINKS + CTA */}

          <div className="
            hidden lg:flex items-center gap-3 shrink-0
          ">
            <div className="
              hidden xl:flex items-center gap-1
              pr-3 border-r border-white/10
            ">
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
                      w-7 h-7 flex items-center justify-center
                      rounded-lg text-white/55
                      hover:text-[#BDA5FF] hover:bg-white/[0.08]
                      hover:shadow-[0_0_10px_rgba(145,94,255,0.2)]
                      transition-all duration-300
                    "
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => {
                const contact = navLinks.find((nav) =>
                  nav.title.toLowerCase().includes("contact")
                );

                if (contact) {
                  goToSection(contact.id);
                }
              }}
              className="
                group relative flex items-center justify-center gap-1.5
                px-4 py-1.5 rounded-lg
                bg-gradient-to-r from-[#915EFF] to-[#7c3aed]
                text-white text-[12px] font-semibold
                shadow-[0_3px_15px_rgba(145,94,255,0.4)]
                hover:shadow-[0_4px_20px_rgba(145,94,255,0.6)]
                hover:scale-[1.02] active:scale-95
                transition-all duration-300 overflow-hidden
              "
            >
              <div className="
                cta-shine absolute inset-0 w-1/2 h-full
                bg-gradient-to-r from-transparent via-white/25 to-transparent
                skew-x-[-20deg] pointer-events-none
              " />

              <span className="relative z-10 flex items-center gap-1.5">
                Let's Talk
                <FiZap size={13} className="text-yellow-300 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="
              lg:hidden w-8 h-8
              flex items-center justify-center
              rounded-lg border border-white/10
              text-white bg-white/[0.04]
              hover:bg-white/10 transition-all
            "
          >
            {menuOpen ? (
              <FiX size={18} />
            ) : (
              <FiMenu size={18} />
            )}
          </button>
        </div>

        {/* MOBILE MENU OVERLAY */}

        <div
          className={`
            lg:hidden absolute top-full left-4 right-4 mt-2
            bg-[#09090f]/95 backdrop-blur-2xl
            border border-white/10 rounded-2xl
            overflow-hidden shadow-2xl
            transition-all duration-300
            ${
              menuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-3 pointer-events-none"
            }
          `}
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">
                Navigation
              </span>

              <span className="text-[#A78BFA] text-xs font-semibold">
                {active
                  ? navLinks.find((nav) => nav.id === active)?.title
                  : "Home"}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => goToSection("home")}
                className={`
                  flex items-center gap-2.5 p-2.5 rounded-lg border transition-all
                  ${
                    !active
                      ? "bg-[#915EFF]/20 border-[#915EFF]/40 text-white"
                      : "bg-white/[0.02] border-white/[0.06] text-white/60 hover:text-white"
                  }
                `}
              >
                <FiHome size={16} />
                <span className="text-xs font-medium">Home</span>
              </button>

              {navLinks.map((nav) => {
                const Icon = getNavIcon(nav.title);

                return (
                  <button
                    key={nav.id}
                    type="button"
                    onClick={() => goToSection(nav.id)}
                    className={`
                      flex items-center gap-2.5 p-2.5 rounded-lg border transition-all
                      ${
                        active === nav.id
                          ? "bg-[#915EFF]/20 border-[#915EFF]/40 text-white"
                          : "bg-white/[0.02] border-white/[0.06] text-white/60 hover:text-white"
                      }
                    `}
                  >
                    <Icon size={16} />
                    <span className="text-xs font-medium">{nav.title}</span>
                  </button>
                );
              })}
            </div>

            <div className="
              flex items-center justify-between mt-4 pt-3
              border-t border-white/10
            ">
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      onClick={() => setMenuOpen(false)}
                      className="
                        p-1.5 rounded-lg text-white/50
                        hover:text-[#A78BFA] hover:bg-white/[0.05]
                        transition-colors
                      "
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => {
                  const contact = navLinks.find((nav) =>
                    nav.title.toLowerCase().includes("contact")
                  );

                  if (contact) {
                    goToSection(contact.id);
                  }
                }}
                className="
                  flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                  bg-[#915EFF] text-white text-xs font-semibold
                  shadow-[0_2px_15px_rgba(145,94,255,0.4)]
                "
              >
                Let's Talk
                <FiZap size={12} className="text-yellow-300" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;