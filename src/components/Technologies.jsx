
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiPostman,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiTailwindcss,
  SiCplusplus,
  SiJavascript,
  SiNetlify,
  SiNextdotjs,
  SiPostgresql,
  SiRailway,
  SiVercel,
} from "react-icons/si";

import {
  Brain,
  Bot,
  Database as DatabaseIcon,
  Layers3,
  Network,
  Sparkles,
  Server,
  GitBranch,
  Terminal,
  ArrowUpRight,
  Zap,
  Orbit,
  Cpu,
} from "lucide-react";

/* =========================================================
   TECHNOLOGY DATA
========================================================= */

const technologies = {
  languages: [
    {
      name: "C++",
      icon: SiCplusplus,
      color: "text-blue-400",
      description: "DSA & problem solving",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "text-yellow-400",
      description: "Modern web development",
    },
    {
      name: "HTML",
      icon: FaHtml5,
      color: "text-orange-500",
      description: "Semantic interfaces",
    },
    {
      name: "CSS",
      icon: FaCss3Alt,
      color: "text-blue-500",
      description: "Responsive styling",
    },
  ],

  frontend: [
    {
      name: "React.js",
      icon: FaReact,
      color: "text-cyan-400",
      description: "Interactive interfaces",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "text-white",
      description: "Full-stack React",
    },
    {
      name: "TailwindCSS",
      icon: SiTailwindcss,
      color: "text-sky-400",
      description: "Utility-first UI",
    },
  ],

  backend: [
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "text-green-500",
      description: "JavaScript runtime",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "text-zinc-300",
      description: "REST API layer",
    },
    {
      name: "Postman",
      icon: SiPostman,
      color: "text-orange-500",
      description: "API development",
    },
  ],

  ai: [
    {
      name: "Generative AI",
      icon: Sparkles,
      color: "text-cyan-300",
      description: "AI-powered experiences",
    },
    {
      name: "LLMs",
      icon: Brain,
      color: "text-violet-300",
      description: "Intelligent language systems",
    },
    {
      name: "RAG",
      icon: Network,
      color: "text-blue-300",
      description: "Grounded AI retrieval",
    },
    {
      name: "AI Agents",
      icon: Bot,
      color: "text-fuchsia-300",
      description: "Autonomous workflows",
    },
    {
      name: "Prompt Engineering",
      icon: Terminal,
      color: "text-purple-300",
      description: "LLM interaction design",
    },
    {
      name: "LangChain",
      icon: Layers3,
      color: "text-emerald-300",
      description: "LLM application framework",
    },
    {
      name: "LangGraph",
      icon: GitBranch,
      color: "text-pink-300",
      description: "Agent orchestration",
    },
  ],

  databases: [
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "text-green-400",
      description: "Document database",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "text-blue-300",
      description: "Relational database",
    },
    {
      name: "SQL",
      icon: FaDatabase,
      color: "text-indigo-300",
      description: "Data querying",
    },
    {
      name: "NeonDB",
      icon: DatabaseIcon,
      color: "text-emerald-300",
      description: "Serverless Postgres",
    },
    {
      name: "Firebase",
      icon: SiFirebase,
      color: "text-yellow-400",
      description: "Backend services",
    },
    {
      name: "Vector Databases",
      icon: Network,
      color: "text-purple-300",
      description: "Semantic retrieval",
    },
  ],

  deployment: [
    {
      name: "GitHub",
      icon: FaGithub,
      color: "text-white",
      description: "Version control",
    },
    {
      name: "Vercel",
      icon: SiVercel,
      color: "text-white",
      description: "Frontend deployment",
    },
    {
      name: "Railway",
      icon: SiRailway,
      color: "text-purple-300",
      description: "Backend deployment",
    },
    {
      name: "Netlify",
      icon: SiNetlify,
      color: "text-teal-300",
      description: "Web deployment",
    },
  ],
};

/* =========================================================
   CATEGORY CONFIG
========================================================= */

const categories = [
  {
    id: "languages",
    label: "01",
    title: "Languages",
    description: "The fundamentals I build with.",
    icon: Terminal,
  },
  {
    id: "frontend",
    label: "02",
    title: "Frontend",
    description: "Interfaces designed for people.",
    icon: Layers3,
  },
  {
    id: "backend",
    label: "03",
    title: "Backend",
    description: "APIs and systems behind the UI.",
    icon: Server,
  },
  {
    id: "ai",
    label: "04",
    title: "AI Engineering",
    description: "Where software meets intelligence.",
    icon: Brain,
  },
  {
    id: "databases",
    label: "05",
    title: "Data",
    description: "Storage, retrieval and persistence.",
    icon: DatabaseIcon,
  },
  {
    id: "deployment",
    label: "06",
    title: "Deployment",
    description: "From local development to production.",
    icon: GitBranch,
  },
];

/* =========================================================
   MOUSE SPOTLIGHT
========================================================= */

const useMousePosition = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return position;
};

/* =========================================================
   TECH ITEM
========================================================= */

const TechItem = ({ tech, index, featured = false }) => {
  const cardRef = useRef(null);

  const [hovered, setHovered] = useState(false);

  const Icon = tech.icon;

  const handleMouseMove = (event) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x =
      event.clientX -
      rect.left -
      rect.width / 2;

    const y =
      event.clientY -
      rect.top -
      rect.height / 2;

    const rotateX = (-y / rect.height) * 7;
    const rotateY = (x / rect.width) * 7;

    card.style.transform = `
      perspective(900px)
      translateY(-7px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.015,1.015,1.015)
    `;
  };

  const handleMouseLeave = () => {
    setHovered(false);

    if (cardRef.current) {
      cardRef.current.style.transform = "";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        animationDelay: `${index * 70}ms`,
      }}
      className={`
        tech-card
        group
        relative
        overflow-hidden
        rounded-[22px]
        border border-white/[0.07]
        bg-white/[0.025]
        backdrop-blur-xl
        transition-[transform,border-color,background]
        duration-300
        will-change-transform
        animate-tech-in

        ${
          featured
            ? "min-h-[145px]"
            : "min-h-[132px]"
        }

        hover:border-cyan-300/20
        hover:bg-white/[0.045]
      `}
    >
      {/* Cursor glow */}

      <div
        className={`
          pointer-events-none
          absolute
          -right-12
          -top-12
          h-32
          w-32
          rounded-full
          blur-3xl
          transition-all
          duration-500
          ${tech.color.replace(
            "text-",
            "bg-"
          )}
          ${
            hovered
              ? "opacity-20 scale-125"
              : "opacity-0 scale-75"
          }
        `}
      />

      {/* Animated top border */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[1px]
          w-0
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-cyan-300
          to-transparent
          transition-all
          duration-500
          group-hover:w-[75%]
        "
      />

      {/* Scan line */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-20
          -translate-y-full
          bg-gradient-to-b
          from-transparent
          via-white/[0.025]
          to-transparent
          transition-transform
          duration-1000
          group-hover:translate-y-[500%]
        "
      />

      <div className="relative flex h-full flex-col justify-between p-5">
        {/* Top */}

        <div className="flex items-start justify-between">
          <div
            className={`
              relative
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-[14px]
              border
              border-white/[0.07]
              bg-black/30
              ${tech.color}
              transition-all
              duration-500

              group-hover:scale-110
              group-hover:border-white/[0.14]
              group-hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]
            `}
          >
            <Icon
              size={featured ? 24 : 22}
              strokeWidth={1.7}
            />

            {/* tiny orbit dot */}

            <span
              className="
                absolute
                -right-1
                -top-1
                h-2
                w-2
                rounded-full
                bg-cyan-300
                opacity-0
                scale-0
                transition-all
                duration-500
                group-hover:scale-100
                group-hover:opacity-100
              "
            />
          </div>

          <ArrowUpRight
            size={15}
            className="
              text-zinc-700
              opacity-0
              -translate-x-2
              translate-y-2
              transition-all
              duration-300
              group-hover:translate-x-0
              group-hover:translate-y-0
              group-hover:opacity-100
              group-hover:text-cyan-300
            "
          />
        </div>

        {/* Bottom */}

        <div className="mt-7">
          <h3
            className="
              text-sm
              font-semibold
              tracking-tight
              text-zinc-200
              transition-all
              duration-300
              group-hover:translate-x-0.5
              group-hover:text-white
            "
          >
            {tech.name}
          </h3>

          <p
            className="
              mt-1
              text-[10px]
              leading-4
              text-zinc-600
              transition-colors
              duration-300
              group-hover:text-zinc-400
            "
          >
            {tech.description}
          </p>
        </div>
      </div>

      {/* Bottom indicator */}

      <div
        className="
          absolute
          bottom-3
          right-4
          h-[2px]
          w-4
          overflow-hidden
          rounded-full
          bg-white/[0.05]
        "
      >
        <div
          className="
            h-full
            w-full
            -translate-x-full
            bg-cyan-300
            transition-transform
            duration-500
            group-hover:translate-x-0
          "
        />
      </div>
    </div>
  );
};

/* =========================================================
   CATEGORY BLOCK
========================================================= */

const CategoryBlock = ({
  category,
  index,
}) => {
  const Icon = category.icon;

  const items = technologies[category.id];

  const isAI = category.id === "ai";

  return (
    <div
      style={{
        animationDelay: `${index * 120}ms`,
      }}
      className="
        category-card
        group/category
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-white/[0.06]
        bg-white/[0.018]
        p-5
        sm:p-7
        backdrop-blur-xl
        animate-category-in

        transition-all
        duration-500

        hover:border-white/[0.10]
        hover:bg-white/[0.025]
      "
    >
      {/* Ambient glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-24
          -top-24
          h-56
          w-56
          rounded-full
          bg-cyan-400/[0.035]
          blur-[100px]
          transition-all
          duration-700
          group-hover/category:bg-cyan-400/[0.07]
        "
      />

      {/* Header */}

      <div className="relative mb-7 flex items-center gap-4">
        {/* Number */}

        <div
          className="
            relative
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-white/[0.07]
            bg-black/20
            font-mono
            text-[10px]
            tracking-widest
            text-zinc-600
            transition-all
            duration-500
            group-hover/category:border-cyan-400/20
            group-hover/category:text-cyan-300
          "
        >
          {category.label}

          <span
            className="
              absolute
              -right-1
              -top-1
              h-2
              w-2
              scale-0
              rounded-full
              bg-cyan-300
              opacity-0
              transition-all
              duration-500
              group-hover/category:scale-100
              group-hover/category:opacity-100
            "
          />
        </div>

        {/* Icon */}

        <div
          className="
            hidden
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-cyan-400/[0.07]
            bg-cyan-400/[0.035]
            text-cyan-400/70
            transition-all
            duration-500

            sm:flex

            group-hover/category:rotate-6
            group-hover/category:scale-110
            group-hover/category:bg-cyan-400/[0.08]
            group-hover/category:text-cyan-300
          "
        >
          <Icon size={18} />
        </div>

        {/* Heading */}

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h2
              className="
                text-lg
                font-semibold
                tracking-tight
                text-zinc-100
                sm:text-xl
              "
            >
              {category.title}
            </h2>

            {isAI && (
              <span
                className="
                  hidden
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-cyan-400/15
                  bg-cyan-400/[0.04]
                  px-2
                  py-1
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-widest
                  text-cyan-300/70

                  sm:inline-flex
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    animate-pulse
                    rounded-full
                    bg-cyan-400
                    shadow-[0_0_10px_rgba(34,211,238,0.8)]
                  "
                />

                Focus
              </span>
            )}
          </div>

          <p className="mt-0.5 text-xs text-zinc-600">
            {category.description}
          </p>
        </div>

        {/* Line */}

        <div
          className="
            ml-auto
            hidden
            h-px
            flex-1
            bg-gradient-to-r
            from-white/[0.06]
            to-transparent

            md:block
          "
        />
      </div>

      {/* Items */}

      <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((tech, techIndex) => (
          <TechItem
            key={tech.name}
            tech={tech}
            index={techIndex}
            featured={isAI}
          />
        ))}
      </div>
    </div>
  );
};

/* =========================================================
   AI PIPELINE
========================================================= */

const AIPipeline = () => {
  const pipeline = [
    {
      name: "RAG",
      icon: Network,
    },
    {
      name: "LLMs",
      icon: Brain,
    },
    {
      name: "Agents",
      icon: Bot,
    },
    {
      name: "LangChain",
      icon: Layers3,
    },
    {
      name: "LangGraph",
      icon: GitBranch,
    },
  ];

  return (
    <div
      className="
        relative
        mt-8
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.07]
        bg-black/20
        p-3
      "
    >
      {/* Moving beam */}

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          w-24
          animate-pipeline-beam
          bg-gradient-to-r
          from-transparent
          via-cyan-300/[0.07]
          to-transparent
          blur-xl
        "
      />

      <div className="relative flex flex-wrap items-center gap-2">
        {pipeline.map((item, index) => {
          const ItemIcon = item.icon;

          return (
            <React.Fragment key={item.name}>
              <div
                className="
                  group/pipeline
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/[0.06]
                  bg-white/[0.025]
                  px-3
                  py-2
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-cyan-400/20
                  hover:bg-cyan-400/[0.05]
                "
              >
                <ItemIcon
                  size={13}
                  className="
                    text-zinc-500
                    transition-colors
                    duration-300
                    group-hover/pipeline:text-cyan-300
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-mono
                    tracking-wide
                    text-zinc-500
                    transition-colors
                    duration-300
                    group-hover/pipeline:text-cyan-300
                  "
                >
                  {item.name}
                </span>
              </div>

              {index < pipeline.length - 1 && (
                <span
                  className="
                    hidden
                    text-[10px]
                    text-zinc-700
                    sm:block
                  "
                >
                  →
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const Technologies = () => {
  const mouse = useMousePosition();

  const [activeTech, setActiveTech] =
    useState("AI Engineering");

  const totalTechnologies = useMemo(
    () =>
      Object.values(technologies).reduce(
        (total, category) =>
          total + category.length,
        0
      ),
    []
  );

  return (
    <section
      id="technologies"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#030014]
        px-5
        py-28
        text-white
        sm:px-8
        lg:px-12
      "
    >
      {/* =====================================================
          GLOBAL MOUSE SPOTLIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          fixed
          z-0
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.035]
          blur-[120px]
        "
        style={{
          left: mouse.x,
          top: mouse.y,
        }}
      />

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.35]
            bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)]
            bg-[size:55px_55px]
            [mask-image:linear-gradient(to_bottom,black,transparent_90%)]
          "
        />

        {/* Cyan orb */}

        <div
          className="
            absolute
            left-[-12%]
            top-[3%]
            h-[500px]
            w-[500px]
            animate-orb
            rounded-full
            bg-cyan-500/[0.06]
            blur-[140px]
          "
        />

        {/* Purple orb */}

        <div
          className="
            absolute
            bottom-[-12%]
            right-[-8%]
            h-[550px]
            w-[550px]
            animate-orb-reverse
            rounded-full
            bg-[#915EFF]/[0.07]
            blur-[150px]
          "
        />

        {/* Center */}

        <div
          className="
            absolute
            left-1/2
            top-[35%]
            h-[400px]
            w-[400px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/[0.025]
            blur-[130px]
          "
        />

        {/* Noise */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 180 180%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%22.4%22/%3E%3C/svg%3E')]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="mb-16 max-w-4xl">
          {/* Eyebrow */}

          <div
            className="
              mb-7
              inline-flex
              animate-fade-up
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/15
              bg-cyan-400/[0.04]
              px-4
              py-2
              backdrop-blur-xl
            "
          >
            <span
              className="
                relative
                flex
                h-2
                w-2
              "
            >
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-cyan-400
                  opacity-50
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2
                  w-2
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_15px_rgba(34,211,238,0.8)]
                "
              />
            </span>

            <span
              className="
                text-[10px]
                font-mono
                uppercase
                tracking-[0.3em]
                text-cyan-300
              "
            >
              Technology Stack
            </span>

            <Zap
              size={11}
              className="text-cyan-400/60"
            />
          </div>

          {/* Heading */}

          <h1
            className="
              animate-fade-up
              text-4xl
              font-black
              leading-[0.95]
              tracking-[-2px]
              sm:text-5xl
              md:text-6xl
              lg:text-[76px]
            "
            style={{
              animationDelay: "100ms",
            }}
          >
            <span className="text-zinc-100">
              The stack behind
            </span>

            <br />

            <span
              className="
                relative
                bg-gradient-to-r
                from-cyan-300
                via-blue-400
                to-[#915EFF]
                bg-clip-text
                text-transparent
              "
            >
              intelligent products.
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mt-7
              max-w-2xl
              animate-fade-up
              text-sm
              leading-7
              text-zinc-500
              sm:text-base
            "
            style={{
              animationDelay: "180ms",
            }}
          >
            A carefully selected engineering stack for
            building scalable products across modern
            frontend, backend infrastructure, data,
            deployment and AI systems.
          </p>

          {/* Stats */}

          <div
            className="
              mt-9
              flex
              animate-fade-up
              flex-wrap
              items-center
              gap-3
            "
            style={{
              animationDelay: "260ms",
            }}
          >
            {/* Stat */}

            <div
              className="
                group/stat
                rounded-xl
                border
                border-white/[0.06]
                bg-white/[0.025]
                px-4
                py-2.5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/15
              "
            >
              <span className="font-mono text-xs text-cyan-300">
                {totalTechnologies}+
              </span>

              <span className="ml-2 text-[10px] uppercase tracking-wider text-zinc-600">
                technologies
              </span>
            </div>

            {/* Stat */}

            <div
              className="
                group/stat
                rounded-xl
                border
                border-white/[0.06]
                bg-white/[0.025]
                px-4
                py-2.5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-purple-400/15
              "
            >
              <span className="font-mono text-xs text-purple-300">
                AI
              </span>

              <span className="ml-2 text-[10px] uppercase tracking-wider text-zinc-600">
                focused
              </span>
            </div>

            {/* Stat */}

            <div
              className="
                group/stat
                rounded-xl
                border
                border-white/[0.06]
                bg-white/[0.025]
                px-4
                py-2.5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-emerald-400/15
              "
            >
              <span className="font-mono text-xs text-emerald-300">
                Full Stack
              </span>
            </div>
          </div>
        </div>

        {/* ===================================================
            AI FEATURE PANEL
        =================================================== */}

        <div
          className="
            group/ai
            relative
            mb-8
            overflow-hidden
            rounded-[32px]
            border
            border-cyan-400/10
            bg-gradient-to-br
            from-cyan-400/[0.055]
            via-white/[0.018]
            to-purple-500/[0.045]
            p-6
            animate-panel-in
            sm:p-8
          "
        >
          {/* Animated border */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[32px]
              opacity-0
              transition-opacity
              duration-700
              group-hover/ai:opacity-100
              [background:linear-gradient(90deg,transparent,rgba(34,211,238,.12),transparent)]
              animate-border-flow
            "
          />

          {/* Glows */}

          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-72
              w-72
              rounded-full
              bg-cyan-400/[0.08]
              blur-[100px]
              transition-transform
              duration-1000
              group-hover/ai:scale-125
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              right-1/3
              h-56
              w-56
              rounded-full
              bg-purple-500/[0.07]
              blur-[100px]
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* Left */}

            <div className="max-w-xl">
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="
                    relative
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-cyan-400/15
                    bg-cyan-400/[0.05]
                    text-cyan-300
                    transition-all
                    duration-500
                    group-hover/ai:rotate-6
                    group-hover/ai:scale-110
                  "
                >
                  <Brain size={20} />

                  <span
                    className="
                      absolute
                      inset-0
                      animate-pulse
                      rounded-xl
                      border
                      border-cyan-300/10
                    "
                  />
                </div>

                <div>
                  <p
                    className="
                      text-[9px]
                      font-mono
                      uppercase
                      tracking-[0.25em]
                      text-cyan-300
                    "
                  >
                    Primary Focus
                  </p>

                  <h2 className="text-lg font-semibold text-zinc-100">
                    AI Engineering
                  </h2>
                </div>
              </div>

              <p className="text-sm leading-6 text-zinc-500">
                Designing applications around LLMs,
                retrieval, agents and intelligent
                workflows — not just adding AI as
                another feature.
              </p>

              <AIPipeline />
            </div>

            {/* Visual */}

            <div
              className="
                relative
                hidden
                h-40
                w-40
                shrink-0
                items-center
                justify-center
                lg:flex
              "
            >
              {/* Outer orbit */}

              <div
                className="
                  absolute
                  h-36
                  w-36
                  animate-spin-slow
                  rounded-full
                  border
                  border-cyan-400/10
                  border-dashed
                "
              />

              {/* Second orbit */}

              <div
                className="
                  absolute
                  h-28
                  w-28
                  animate-spin-reverse
                  rounded-full
                  border
                  border-purple-400/10
                "
              />

              {/* Core */}

              <div
                className="
                  relative
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-cyan-300/20
                  bg-cyan-300/[0.05]
                  text-cyan-300
                  shadow-[0_0_50px_rgba(34,211,238,0.12)]
                "
              >
                <Cpu size={26} />

                <div
                  className="
                    absolute
                    inset-[-8px]
                    animate-ping
                    rounded-2xl
                    border
                    border-cyan-300/10
                  "
                />
              </div>

              {/* Orbit node */}

              <div
                className="
                  absolute
                  right-2
                  top-8
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-purple-400/15
                  bg-purple-400/[0.06]
                  text-purple-300
                "
              >
                <Sparkles size={12} />
              </div>

              <div
                className="
                  absolute
                  bottom-7
                  left-2
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-cyan-400/15
                  bg-cyan-400/[0.06]
                  text-cyan-300
                "
              >
                <Network size={12} />
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            CATEGORY GRID
        =================================================== */}

        <div className="grid gap-5 lg:grid-cols-2">
          {categories.map((category, index) => (
            <CategoryBlock
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            gap-4
            border-t
            border-white/[0.05]
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-[10px]
              font-mono
              uppercase
              tracking-[0.2em]
              text-zinc-700
            "
          >
            Always learning. Always building.
          </p>

          <div className="flex items-center gap-2">
            <span
              className="
                relative
                flex
                h-2
                w-2
              "
            >
              <span
                className="
                  absolute
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-emerald-400
                  opacity-40
                "
              />

              <span
                className="
                  relative
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_10px_rgba(52,211,153,0.7)]
                "
              />
            </span>

            <span
              className="
                text-[10px]
                font-mono
                uppercase
                tracking-[0.18em]
                text-zinc-600
              "
            >
              Stack evolving
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes techIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes categoryIn {
          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes panelIn {
          from {
            opacity: 0;
            transform: translateY(25px) scale(.985);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes orb {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(35px, 25px, 0) scale(1.08);
          }
        }

        @keyframes orbReverse {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-30px, -25px, 0) scale(1.1);
          }
        }

        @keyframes pipelineBeam {
          from {
            transform: translateX(-120%);
          }

          to {
            transform: translateX(900%);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @keyframes borderFlow {
          0% {
            transform: translateX(-100%);
          }

          100% {
            transform: translateX(100%);
          }
        }

        .animate-fade-up {
          opacity: 0;
          animation: fadeUp .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .animate-tech-in {
          opacity: 0;
          animation: techIn .7s cubic-bezier(.22,1,.36,1) forwards;
        }

        .animate-category-in {
          opacity: 0;
          animation: categoryIn .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .animate-panel-in {
          opacity: 0;
          animation: panelIn .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .animate-orb {
          animation: orb 12s ease-in-out infinite;
        }

        .animate-orb-reverse {
          animation: orbReverse 14s ease-in-out infinite;
        }

        .animate-pipeline-beam {
          animation: pipelineBeam 5s linear infinite;
        }

        .animate-spin-slow {
          animation: spinSlow 18s linear infinite;
        }

        .animate-spin-reverse {
          animation: spinReverse 12s linear infinite;
        }

        .animate-border-flow {
          animation: borderFlow 4s linear infinite;
        }

        .tech-card {
          transform-style: preserve-3d;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Technologies;
