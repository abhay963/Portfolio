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
  FiFolder,
  FiBriefcase,
  FiMail,
  FiCode,
  FiGithub,
  FiLinkedin,
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiHome,
} from "react-icons/fi";

import {
  SiLeetcode,
  SiGeeksforgeeks,
} from "react-icons/si";

// ==================================================
// CONFIGURATION
// ==================================================

const SCROLL_OFFSET = 110;
const ROBOT_WIDTH = 36;

const clamp = (value, min, max) =>
  Math.min(Math.max(value, min), max);

const getNavIcon = (title = "") => {
  const name = title.toLowerCase();

  if (name.includes("about")) return FiUser;
  if (name.includes("project")) return FiFolder;
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
    width: 36px;
    height: 44px;
    z-index: 30;
    pointer-events: none;
    will-change: transform;
    filter: drop-shadow(0 2px 8px rgba(145,94,255,0.45));
  }

  .robot-character .robot-flip {
    width: 100%;
    height: 100%;
    transform-origin: center;
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

  /* JUMPING STATE ON CLICK */
  .robot-character[data-state="jumping"] .robot-flip {
    animation: robotJump 0.6s cubic-bezier(0.28, 0.84, 0.42, 1);
  }

  .robot-character[data-state="jumping"] .robot-arm-left {
    transform: rotate(-60deg);
  }

  .robot-character[data-state="jumping"] .robot-arm-right {
    transform: rotate(60deg);
  }

  .robot-character[data-state="jumping"] .robot-leg-left {
    transform: rotate(30deg);
  }

  .robot-character[data-state="jumping"] .robot-leg-right {
    transform: rotate(-30deg);
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

  @keyframes robotJump {
    0% {
      transform: translateY(0) scale(1, 1);
    }
    20% {
      transform: translateY(4px) scale(1.15, 0.85);
    }
    50% {
      transform: translateY(-22px) scale(0.9, 1.1);
    }
    80% {
      transform: translateY(0) scale(1.05, 0.95);
    }
    100% {
      transform: translateY(0) scale(1, 1);
    }
  }

  @keyframes antennaPulse {
    0%, 100% {
      fill: #915EFF;
      filter: drop-shadow(0 0 4px #915EFF);
    }
    50% {
      fill: #C4B5FD;
      filter: drop-shadow(0 0 10px #C4B5FD);
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
      transform: translateY(-1.5px) rotate(.5deg);
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
    50% { transform: scaleX(.7); opacity: .2; }
  }

  @media (prefers-reduced-motion: reduce) {
    .robot-character *,
    .robot-antenna,
    .robot-eye,
    .robot-core {
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
        width="36"
        height="44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Shadow */}
        <ellipse
          className="robot-shadow"
          cx="21"
          cy="42"
          rx="11"
          ry="1.5"
          fill="#915EFF"
          opacity=".35"
        />

        {/* Back arm */}
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

        {/* Back leg */}
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

        {/* Body */}
        <g className="robot-body-group">
          <g className="robot-torso-head">
            {/* Antenna */}
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

            {/* Head */}
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

            {/* Side-facing visor */}
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

            {/* Ear */}
            <circle
              cx="14"
              cy="15"
              r="1.5"
              fill="#6d28d9"
            />

            {/* Neck */}
            <rect
              x="19"
              y="21"
              width="5"
              height="2"
              fill="#4c1d95"
            />

            {/* Torso */}
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

            {/* Chest core */}
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

        {/* Front leg */}
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

        {/* Front arm */}
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

        {/* Gradients */}
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

  const trackRef = useRef(null);
  const robotRef = useRef(null);
  const linkRefs = useRef({});

  const currentXRef = useRef(0);
  const targetXRef = useRef(0);
  const directionRef = useRef("right");
  const animationRef = useRef(null);
  const idleTimerRef = useRef(null);
  const jumpTimerRef = useRef(null);
  const isJumpingRef = useRef(false);

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
  // TRIGGER JUMP ANIMATION ON CLICK
  // ------------------------------------------------

  const triggerJump = useCallback(() => {
    if (!robotRef.current) return;

    isJumpingRef.current = true;
    robotRef.current.dataset.state = "jumping";

    clearTimeout(jumpTimerRef.current);
    jumpTimerRef.current = setTimeout(() => {
      isJumpingRef.current = false;
      if (robotRef.current) {
        robotRef.current.dataset.state = "idle";
      }
    }, 600);
  }, []);

  // ------------------------------------------------
  // SET ROBOT TARGET
  // ------------------------------------------------

  const moveRobotTo = useCallback(
    (id, isClick = false) => {
      const position = getLinkPosition(id);

      targetXRef.current = position;

      if (position > currentXRef.current + 1) {
        directionRef.current = "right";
      } else if (position < currentXRef.current - 1) {
        directionRef.current = "left";
      }

      if (robotRef.current) {
        robotRef.current.dataset.direction =
          directionRef.current;
      }

      if (isClick) {
        triggerJump();
      }
    },
    [getLinkPosition, triggerJump]
  );

  // ------------------------------------------------
  // REQUEST ANIMATION FRAME MOVEMENT
  // ------------------------------------------------

  useEffect(() => {
    let lastTime = performance.now();

    const animate = (time) => {
      const delta = Math.min(
        (time - lastTime) / 1000,
        0.1
      );

      lastTime = time;

      const difference =
        targetXRef.current - currentXRef.current;

      if (Math.abs(difference) > 0.35) {
        const factor = 12;
        const step =
          difference * Math.min(delta * factor, 1);

        currentXRef.current += step;

        if (Math.abs(step) > 0.01) {
          const direction =
            step > 0 ? "right" : "left";

          directionRef.current = direction;

          if (robotRef.current) {
            robotRef.current.dataset.direction =
              direction;

            if (!isJumpingRef.current) {
              robotRef.current.dataset.state = "walking";
            }
          }
        }

        if (robotRef.current) {
          robotRef.current.style.transform =
            `translate3d(${currentXRef.current}px, 0, 0)`;
        }
      } else {
        currentXRef.current = targetXRef.current;

        if (robotRef.current) {
          robotRef.current.style.transform =
            `translate3d(${currentXRef.current}px, 0, 0)`;

          if (!isJumpingRef.current) {
            robotRef.current.dataset.state = "idle";
          }
        }
      }

      animationRef.current =
        requestAnimationFrame(animate);
    };

    animationRef.current =
      requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // ------------------------------------------------
  // SCROLL POSITION -> ROBOT POSITION
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
              ? element.getBoundingClientRect().top +
                window.scrollY
              : null,
          };
        }),
      ].filter((item) => item.top !== null);

      return items;
    };

    const updateFromScroll = () => {
      scrollFrame = null;

      const sections = getSectionPositions();

      if (!sections.length) return;

      const scrollPosition =
        window.scrollY + SCROLL_OFFSET + 30;

      let progressPosition = 0;
      let currentActive = "";

      if (scrollPosition < sections[0].top) {
        progressPosition = 0;
      } else {
        for (let i = 0; i < sections.length; i++) {
          const current = sections[i];
          const next = sections[i + 1];

          if (scrollPosition >= current.top) {
            currentActive =
              current.id === "home" ? "" : current.id;

            if (next) {
              const sectionDistance =
                Math.max(next.top - current.top, 1);

              const fraction = clamp(
                (scrollPosition - current.top) /
                  sectionDistance,
                0,
                1
              );

              progressPosition =
                i + fraction;
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
        currentActive =
          sections[sections.length - 1].id;
      }

      const index = Math.min(
        Math.floor(progressPosition),
        sections.length - 1
      );

      const nextIndex = Math.min(
        index + 1,
        sections.length - 1
      );

      const fraction = progressPosition - index;

      const currentPosition = getLinkPosition(
        sections[index].id
      );

      const nextPosition = getLinkPosition(
        sections[nextIndex].id
      );

      const interpolated =
        currentPosition +
        (nextPosition - currentPosition) * fraction;

      targetXRef.current = interpolated;

      if (interpolated > currentXRef.current + 1) {
        directionRef.current = "right";
      } else if (interpolated < currentXRef.current - 1) {
        directionRef.current = "left";
      }

      if (robotRef.current) {
        robotRef.current.dataset.direction =
          directionRef.current;
      }

      setActive(currentActive);

      clearTimeout(idleTimerRef.current);

      idleTimerRef.current = setTimeout(() => {
        if (
          Math.abs(targetXRef.current - currentXRef.current) <
          2
        ) {
          if (robotRef.current && !isJumpingRef.current) {
            robotRef.current.dataset.state = "idle";
          }
        }
      }, 180);
    };

    const handleScroll = () => {
      if (scrollFrame) return;

      scrollFrame =
        requestAnimationFrame(updateFromScroll);
    };

    const handleResize = () => {
      updateFromScroll();
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleResize);

    requestAnimationFrame(updateFromScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      if (scrollFrame) {
        cancelAnimationFrame(scrollFrame);
      }

      clearTimeout(idleTimerRef.current);
      clearTimeout(jumpTimerRef.current);
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

      moveRobotTo(targetId, true);

      window.scrollTo({
        top: targetTop,
        behavior: window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
          ? "auto"
          : "smooth",
      });
    },
    [moveRobotTo]
  );

  // ------------------------------------------------
  // SET INITIAL ROBOT POSITION AFTER MOUNT
  // ------------------------------------------------

  useEffect(() => {
    const initialize = () => {
      const position = getLinkPosition("home");

      currentXRef.current = position;
      targetXRef.current = position;

      if (robotRef.current) {
        robotRef.current.style.transform =
          `translate3d(${position}px, 0, 0)`;

        robotRef.current.dataset.state = "idle";
        robotRef.current.dataset.direction = "right";
      }
    };

    const timer = requestAnimationFrame(initialize);

    return () => cancelAnimationFrame(timer);
  }, [getLinkPosition]);

  // ------------------------------------------------
  // MOBILE MENU
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

      {/* FULL-WIDTH OVERLAPPING NAVBAR WITH BACKGROUND */}

      <header
        className="
          fixed top-0 left-0 right-0 z-50
          w-full
          bg-[#050816]/75 backdrop-blur-md
          border-b border-white/10
          shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]
          transition-all duration-300
        "
      >
        <div
          className="
            w-full min-h-[90px] sm:min-h-[100px]
            flex items-center justify-between
            gap-4
            px-5 sm:px-8 lg:px-10 xl:px-14 2xl:px-20
            py-2.5
          "
        >
          {/* LOGO */}

          <Link
            to="/"
            onClick={(event) => {
              event.preventDefault();
              goToSection("home");
            }}
            className="
              flex items-center gap-3
              shrink-0 group
            "
          >
            <img
              src={logo}
              alt="Abhay"
              className="
                w-10 h-10 sm:w-11 sm:h-11
                object-contain
                transition-transform duration-300
                group-hover:scale-110
              "
            />

            <div className="hidden sm:block">
              <p className="
                text-white text-[18px]
                font-bold tracking-tight leading-none
              ">
                Abhay<span className="text-[#915EFF]">.</span>
              </p>

              <p className="
                mt-1.5 text-[9px]
                uppercase tracking-[0.2em]
                text-white/40
              ">
                Developer
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav
            className="
              hidden lg:flex
              flex-1
              justify-center
              min-w-0
              mx-5 xl:mx-10
            "
            aria-label="Main navigation"
          >
            <div
              ref={trackRef}
              className="
                relative
                flex items-center justify-between
                w-full max-w-[540px]
                px-2
                pt-3 pb-7
              "
            >
              {/* WALKING / JUMPING ROBOT */}

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
                  relative z-10
                  flex flex-col items-center
                  gap-1.5
                  min-w-[65px]
                  transition-colors duration-300
                  ${
                    !active
                      ? "text-white"
                      : "text-white/45 hover:text-white"
                  }
                `}
              >
                <FiHome
                  size={19}
                  className={
                    !active ? "text-[#BDA5FF]" : ""
                  }
                />

                <span className="text-[11px] font-semibold">
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
                      relative z-10
                      flex flex-col items-center
                      gap-1.5
                      min-w-[65px]
                      transition-all duration-300
                      ${
                        isActive
                          ? "text-white"
                          : "text-white/45 hover:text-white"
                      }
                    `}
                  >
                    <Icon
                      size={19}
                      className={
                        isActive ? "text-[#BDA5FF]" : ""
                      }
                    />

                    <span className="
                      text-[11px] font-semibold
                      whitespace-nowrap
                    ">
                      {nav.title}
                    </span>

                    {isActive && (
                      <span className="
                        absolute -bottom-2
                        w-1 h-1 rounded-full
                        bg-[#915EFF]
                        shadow-[0_0_8px_#915EFF]
                      " />
                    )}
                  </button>
                );
              })}

              {/* TRACK BASELINE */}

              <div className="
                absolute
                left-5 right-5
                bottom-[19px]
                h-[3px]
                rounded-full
                bg-white/[0.10]
                -z-0
              ">
                <div className="
                  h-full w-full
                  rounded-full
                  bg-gradient-to-r
                  from-[#915EFF]/10
                  via-[#915EFF]/50
                  to-[#915EFF]/10
                " />
              </div>
            </div>
          </nav>

          {/* RIGHT SIDE SOCIAL LINKS + CTA */}

          <div className="
            hidden lg:flex
            items-center gap-3 xl:gap-5
            shrink-0
          ">
            <div className="
              hidden xl:flex
              items-center gap-2
              pr-4
              border-r border-white/10
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
                      w-9 h-9
                      flex items-center justify-center
                      rounded-lg
                      text-white/65
                      hover:text-[#BDA5FF]
                      hover:bg-white/[0.06]
                      transition-all duration-300
                    "
                  >
                    <Icon size={18} />
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
                flex items-center justify-center
                gap-2
                px-5 py-3
                rounded-xl
                bg-[#915EFF]
                text-white text-[13px]
                font-semibold
                hover:bg-[#8050e8]
                hover:shadow-[0_5px_25px_rgba(145,94,255,0.3)]
                active:scale-95
                transition-all duration-300
                whitespace-nowrap
              "
            >
              Let's Talk
              <FiArrowUpRight size={16} />
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="
              lg:hidden
              w-10 h-10
              flex items-center justify-center
              rounded-xl
              border border-white/10
              text-white
              bg-white/[0.04]
              hover:bg-white/10
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

        <div
          className={`
            lg:hidden
            absolute top-full
            left-4 right-4
            mt-1
            bg-[#09090f]/95
            backdrop-blur-2xl
            border border-white/10
            rounded-2xl
            overflow-hidden
            shadow-2xl
            transition-all duration-300
            ${
              menuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-3 pointer-events-none"
            }
          `}
        >
          <div className="p-5">
            <div className="
              flex items-center justify-between
              mb-5
            ">
              <span className="
                text-[10px] uppercase
                tracking-widest text-white/40
              ">
                Explore Portfolio
              </span>

              <span className="text-[#A78BFA] text-xs">
                {active
                  ? navLinks.find(
                      (nav) => nav.id === active
                    )?.title
                  : "Home"}
              </span>
            </div>

            {/* MOBILE NAV LINKS */}

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => goToSection("home")}
                className={`
                  flex items-center gap-3
                  p-3.5 rounded-xl border
                  transition-all
                  ${
                    !active
                      ? "bg-[#915EFF]/15 border-[#915EFF]/30 text-white"
                      : "bg-white/[0.025] border-white/[0.06] text-white/55"
                  }
                `}
              >
                <FiHome size={18} />
                <span className="text-sm font-medium">
                  Home
                </span>
              </button>

              {navLinks.map((nav) => {
                const Icon = getNavIcon(nav.title);

                return (
                  <button
                    key={nav.id}
                    type="button"
                    onClick={() => goToSection(nav.id)}
                    className={`
                      flex items-center gap-3
                      p-3.5 rounded-xl border
                      transition-all
                      ${
                        active === nav.id
                          ? "bg-[#915EFF]/15 border-[#915EFF]/30 text-white"
                          : "bg-white/[0.025] border-white/[0.06] text-white/55 hover:text-white"
                      }
                    `}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">
                      {nav.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* MOBILE SOCIAL LINKS */}

            <div className="
              flex items-center justify-between
              mt-5 pt-4
              border-t border-white/10
            ">
              <div className="flex items-center gap-4">
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
                        text-white/50
                        hover:text-[#A78BFA]
                        transition-colors
                      "
                    >
                      <Icon size={19} />
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
                  flex items-center gap-2
                  px-4 py-2
                  rounded-lg
                  bg-[#915EFF]
                  text-white text-xs
                  font-semibold
                "
              >
                Let's Talk
                <FiArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;