
import React, { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
  FaPython,
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
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiJupyter,
} from "react-icons/si";

import {
  Brain,
  Bot,
  Database as DatabaseIcon,
  GitBranch,
  Layers3,
  Network,
  Server,
  Sparkles as SparklesIcon,
  Terminal,
  Zap,
  Cpu,
  ArrowUpRight,
  ChartNoAxesCombined,
  MessageSquareText,
} from "lucide-react";

/* =========================================================
   TECHNOLOGIES DATA
========================================================= */

const technologies = {
  languages: [
    ["C++", SiCplusplus, "DSA & Low-Level Mechanics", "blue"],
    ["JavaScript", SiJavascript, "Modern Asynchronous Web", "yellow"],
    ["Python", FaPython, "Programming & AI Development", "yellow"],
   
  ],

  frontend: [
    ["React.js", FaReact, "Component Architecture", "cyan"],
   
    ["TailwindCSS", SiTailwindcss, "Utility-Driven Styling", "sky"],
     ["HTML5", FaHtml5, "Semantic Document Structure", "orange"],
    ["CSS3", FaCss3Alt, "Responsive Layout Systems", "sky"],
  ],

  backend: [
    ["Node.js", FaNodeJs, "Event-Driven Runtime", "green"],
    ["Express.js", SiExpress, "REST API Architecture", "white"],
    ["Postman", SiPostman, "API Testing & Docs", "orange"],
  ],

  dataScience: [
    ["NumPy", SiNumpy, "Numerical Computing & Arrays", "blue"],
    ["Pandas", SiPandas, "Data Analysis & Manipulation", "violet"],
    ["Matplotlib", ChartNoAxesCombined, "Data Visualization & Plotting", "sky"],
    ["Jupyter", SiJupyter, "Interactive Python Notebooks", "orange"],
    ["Machine Learning", SiScikitlearn, "Predictive Models & Algorithms", "green"],
    ["Scikit-learn", SiScikitlearn, "ML Model Training & Evaluation", "orange"],
  ],

  ai: [
    ["Generative AI", SparklesIcon, "AI-Powered Applications", "cyan"],
    ["LLMs", Brain, "Large Language Models", "violet"],
    ["NLP", MessageSquareText, "Natural Language Processing", "pink"],
    ["Deep Learning", Cpu, "Neural Networks & Representation Learning", "purple"],
 
    ["RAG Systems", Network, "Context Grounding & Retrieval", "blue"],
    ["AI Agents", Bot, "Autonomous AI Workflows", "fuchsia"],
    ["Prompt Engineering", Terminal, "Prompt Design & Optimization", "purple"],
    ["LangChain", Layers3, "LLM Application Development", "emerald"],
    ["LangGraph", GitBranch, "Agentic Workflow Orchestration", "pink"],
  ],

  databases: [
    ["MongoDB", SiMongodb, "NoSQL Document Store", "green"],
    ["PostgreSQL", SiPostgresql, "Relational Database Engine", "blue"],
    ["SQL", FaDatabase, "Structured Query Execution", "indigo"],
    ["NeonDB", DatabaseIcon, "Serverless Postgres Solution", "emerald"],
    ["Firebase", SiFirebase, "Realtime Cloud Backend", "yellow"],
    ["Vector DBs", Network, "Embeddings & Semantic Search", "purple"],
  ],

  deployment: [
    ["GitHub", FaGithub, "Source Control & CI/CD", "white"],
    ["Vercel", SiVercel, "Edge Network Deployment", "white"],
    ["Railway", SiRailway, "Cloud Infrastructure Hosting", "purple"],
    ["Netlify", SiNetlify, "Automated Web Platform", "teal"],
  ],
};

/* =========================================================
   CATEGORY CONFIGURATION
========================================================= */

const categories = [
  {
    id: "languages",
    number: "01",
    title: "Languages",
    description: "Core Syntax & Foundations",
    icon: Terminal,
  },
  {
    id: "frontend",
    number: "02",
    title: "Frontend",
    description: "UI/UX Interfaces",
    icon: Layers3,
  },
  {
    id: "backend",
    number: "03",
    title: "Backend",
    description: "APIs & Servers",
    icon: Server,
  },
  {
    id: "dataScience",
    number: "04",
    title: "Data Science",
    description: "Python, Data & ML",
    icon: ChartNoAxesCombined,
  },
  {
    id: "ai",
    number: "05",
    title: "AI & GenAI",
    description: "NLP, Agents & LLMs",
    icon: Brain,
  },
  {
    id: "databases",
    number: "06",
    title: "Databases",
    description: "Data Storage & Vector DBs",
    icon: DatabaseIcon,
  },
  {
    id: "deployment",
    number: "07",
    title: "DevOps",
    description: "Infrastructure & Cloud",
    icon: GitBranch,
  },
];

/* =========================================================
   COLOR PALETTE
========================================================= */

const colorPalette = {
  blue: {
    text: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    glow: "rgba(59, 130, 246, 0.15)",
  },
  yellow: {
    text: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    glow: "rgba(234, 179, 8, 0.15)",
  },
  orange: {
    text: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    glow: "rgba(249, 115, 22, 0.15)",
  },
  sky: {
    text: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    glow: "rgba(14, 165, 233, 0.15)",
  },
  cyan: {
    text: "text-cyan-300",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
    glow: "rgba(34, 211, 238, 0.18)",
  },
  white: {
    text: "text-zinc-200",
    bg: "bg-white/10",
    border: "border-white/15",
    glow: "rgba(255, 255, 255, 0.12)",
  },
  green: {
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    glow: "rgba(16, 185, 129, 0.15)",
  },
  violet: {
    text: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    glow: "rgba(139, 92, 246, 0.15)",
  },
  fuchsia: {
    text: "text-fuchsia-400",
    bg: "bg-fuchsia-500/10",
    border: "border-fuchsia-500/20",
    glow: "rgba(217, 70, 239, 0.15)",
  },
  purple: {
    text: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    glow: "rgba(168, 85, 247, 0.15)",
  },
  emerald: {
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    glow: "rgba(16, 185, 129, 0.15)",
  },
  pink: {
    text: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    glow: "rgba(236, 72, 153, 0.15)",
  },
  indigo: {
    text: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    glow: "rgba(99, 102, 241, 0.15)",
  },
  teal: {
    text: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
    glow: "rgba(20, 184, 166, 0.15)",
  },
};

/* =========================================================
   BACKGROUND VISUALS
========================================================= */

const CyberBackground = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

    <motion.div
      animate={{
        x: [0, 80, 0],
        y: [0, -40, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full bg-cyan-600/10 blur-[150px]"
    />

    <motion.div
      animate={{
        x: [0, -60, 0],
        y: [0, 60, 0],
        scale: [1, 1.15, 1],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -right-40 top-1/2 h-[650px] w-[650px] rounded-full bg-violet-600/10 blur-[160px]"
    />
  </div>
);

const ParticleStream = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: `${(i * 2.5) % 100}%`,
        y: `${(i * 7.3) % 100}%`,
        size: Math.random() * 2 + 1,
        duration: 4 + (i % 4),
        delay: (i % 5) * 0.4,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0.1, y: 0 }}
          animate={{
            y: [-10, -40, -10],
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
          }}
          className="absolute rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
        />
      ))}
    </div>
  );
};

/* =========================================================
   TECH CARD
========================================================= */

const TechCard = ({ item, index }) => {
  const [name, Icon, description, color] = item;
  const style = colorPalette[color] || colorPalette.white;

  const cardRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/40 p-6 backdrop-blur-xl transition-colors duration-300 hover:border-white/20"
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${cursorPos.x}px ${cursorPos.y}px, ${style.glow}, transparent 80%)`,
          }}
        />
      )}

      <div className="relative z-10 flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl border ${style.bg} ${style.border} ${style.text} transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className="h-6 w-6" />
        </div>

        <span className="font-mono text-xs tracking-wider text-zinc-600 group-hover:text-zinc-400">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="relative z-10 mt-6">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold text-zinc-100 transition-colors duration-200 group-hover:text-white">
            {name}
          </h3>

          <ArrowUpRight className="h-4 w-4 text-cyan-400 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
        </div>

        <p className="mt-1 text-xs leading-relaxed text-zinc-400">
          {description}
        </p>
      </div>

      <div className="relative z-10 mt-6 flex items-center gap-2 border-t border-white/5 pt-4">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />

        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300">
          Technology Stack
        </span>
      </div>
    </motion.div>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState("ai");

  const activeData = categories.find(
    (category) => category.id === activeCategory
  );

  const items = technologies[activeCategory] || [];

  const totalTech = useMemo(
    () =>
      Object.values(technologies).reduce(
        (acc, list) => acc + list.length,
        0
      ),
    []
  );

  return (
    <section
      id="technologies"
      className="relative min-h-screen overflow-hidden bg-[#030014] px-4 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      <CyberBackground />
      <ParticleStream />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* CATEGORY SELECTOR */}

        <nav className="mb-8 rounded-2xl border border-white/10 bg-white/[0.02] p-2 backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative flex flex-col justify-between rounded-xl p-4 text-left transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 rounded-xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  <div className="relative z-10 flex w-full items-center justify-between">
                    <span
                      className={`font-mono text-[10px] tracking-widest ${
                        isActive ? "text-cyan-400" : "text-zinc-600"
                      }`}
                    >
                      {cat.number}
                    </span>

                    <Icon
                      className={`h-5 w-5 ${
                        isActive ? "text-cyan-400" : "text-zinc-500"
                      }`}
                    />
                  </div>

                  <div className="relative z-10 mt-4">
                    <div className="text-sm font-bold tracking-tight">
                      {cat.title}
                    </div>

                    <div className="mt-0.5 hidden truncate text-[11px] text-zinc-500 sm:block">
                      {cat.description}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </nav>

        {/* CATEGORY DISPLAY PANEL */}

        <div className="rounded-3xl border border-white/10 bg-white/[0.015] p-6 backdrop-blur-2xl sm:p-10">
          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-semibold text-cyan-400">
                  {activeData?.number}
                </span>

                <span className="h-1 w-1 rounded-full bg-zinc-600" />

                <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                  {activeData?.title}
                </h2>
              </div>

              <p className="mt-1 text-sm text-zinc-400">
                {activeData?.description}
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
              <Zap className="h-3.5 w-3.5 text-emerald-400" />

              <span className="font-mono text-xs font-medium text-emerald-300">
                {items.length} Technologies
              </span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {items.map((item, index) => (
                <TechCard
                  key={item[0]}
                  item={item}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 text-center">
          <p className="font-mono text-xs tracking-widest text-zinc-600">
            EXPLORING {totalTech}+ TECHNOLOGIES & TOOLS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
