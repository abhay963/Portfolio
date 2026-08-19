// src/components/Technologies.jsx

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import {
  Environment,
  Float,
  Line,
  OrbitControls,
  Sparkles,
  Text,
} from "@react-three/drei";

import * as THREE from "three";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

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
  Activity,
  Brain,
  Bot,
  Check,
  Cpu,
  Database as DatabaseIcon,
  FileText,
  GitBranch,
  Layers3,
  Network,
  ScanSearch,
  Search,
  Server,
  Sparkles as SparklesIcon,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";

/* =========================================================
   TECHNOLOGIES
========================================================= */

const technologies = {
  languages: [
    ["C++", SiCplusplus, "DSA & problem solving", "blue"],
    ["JavaScript", SiJavascript, "Modern web development", "yellow"],
    ["HTML", FaHtml5, "Semantic interfaces", "orange"],
    ["CSS", FaCss3Alt, "Responsive styling", "sky"],
  ],

  frontend: [
    ["React.js", FaReact, "Interactive interfaces", "cyan"],
    ["Next.js", SiNextdotjs, "Full-stack React", "white"],
    ["TailwindCSS", SiTailwindcss, "Utility-first UI", "sky"],
  ],

  backend: [
    ["Node.js", FaNodeJs, "JavaScript runtime", "green"],
    ["Express.js", SiExpress, "REST API layer", "white"],
    ["Postman", SiPostman, "API development", "orange"],
  ],

  ai: [
    ["Generative AI", SparklesIcon, "AI-powered experiences", "cyan"],
    ["LLMs", Brain, "Intelligent language systems", "violet"],
    ["RAG", Network, "Grounded AI retrieval", "blue"],
    ["AI Agents", Bot, "Autonomous workflows", "fuchsia"],
    ["Prompt Engineering", Terminal, "LLM interaction design", "purple"],
    ["LangChain", Layers3, "LLM application framework", "emerald"],
    ["LangGraph", GitBranch, "Agent orchestration", "pink"],
  ],

  databases: [
    ["MongoDB", SiMongodb, "Document database", "green"],
    ["PostgreSQL", SiPostgresql, "Relational database", "blue"],
    ["SQL", FaDatabase, "Data querying", "indigo"],
    ["NeonDB", DatabaseIcon, "Serverless Postgres", "emerald"],
    ["Firebase", SiFirebase, "Backend services", "yellow"],
    ["Vector Databases", Network, "Semantic retrieval", "purple"],
  ],

  deployment: [
    ["GitHub", FaGithub, "Version control", "white"],
    ["Vercel", SiVercel, "Frontend deployment", "white"],
    ["Railway", SiRailway, "Backend deployment", "purple"],
    ["Netlify", SiNetlify, "Web deployment", "teal"],
  ],
};

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  {
    id: "languages",
    number: "01",
    title: "Languages",
    description: "Core programming foundations",
    icon: Terminal,
  },
  {
    id: "frontend",
    number: "02",
    title: "Frontend",
    description: "Interfaces & experiences",
    icon: Layers3,
  },
  {
    id: "backend",
    number: "03",
    title: "Backend",
    description: "APIs & application systems",
    icon: Server,
  },
  {
    id: "ai",
    number: "04",
    title: "AI Engineering",
    description: "Intelligent applications",
    icon: Brain,
  },
  {
    id: "databases",
    number: "05",
    title: "Data",
    description: "Storage & retrieval",
    icon: DatabaseIcon,
  },
  {
    id: "deployment",
    number: "06",
    title: "Deployment",
    description: "Production infrastructure",
    icon: GitBranch,
  },
];

/* =========================================================
   ICON COLORS
========================================================= */

const iconStyles = {
  blue: {
    text: "text-blue-300",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  yellow: {
    text: "text-yellow-300",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
  },
  orange: {
    text: "text-orange-300",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
  },
  sky: {
    text: "text-sky-300",
    bg: "bg-sky-400/10",
    border: "border-sky-400/20",
  },
  cyan: {
    text: "text-cyan-300",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
  },
  white: {
    text: "text-zinc-200",
    bg: "bg-white/[0.06]",
    border: "border-white/10",
  },
  green: {
    text: "text-emerald-300",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },
  violet: {
    text: "text-violet-300",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
  },
  fuchsia: {
    text: "text-fuchsia-300",
    bg: "bg-fuchsia-400/10",
    border: "border-fuchsia-400/20",
  },
  purple: {
    text: "text-purple-300",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
  emerald: {
    text: "text-emerald-300",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },
  pink: {
    text: "text-pink-300",
    bg: "bg-pink-400/10",
    border: "border-pink-400/20",
  },
  indigo: {
    text: "text-indigo-300",
    bg: "bg-indigo-400/10",
    border: "border-indigo-400/20",
  },
  teal: {
    text: "text-teal-300",
    bg: "bg-teal-400/10",
    border: "border-teal-400/20",
  },
};

/* =========================================================
   BACKGROUND
========================================================= */

const Background = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="
          absolute inset-0
          opacity-[0.28]
          [background-image:linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
          [background-size:58px_58px]
          [mask-image:linear-gradient(to_bottom,black,transparent_95%)]
        "
      />

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -45, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-[320px]
          top-[8%]
          h-[800px]
          w-[800px]
          rounded-full
          bg-cyan-500/[0.07]
          blur-[180px]
        "
      />

      <motion.div
        animate={{
          x: [0, -90, 0],
          y: [0, 55, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-[300px]
          top-[25%]
          h-[800px]
          w-[800px]
          rounded-full
          bg-violet-600/[0.08]
          blur-[190px]
        "
      />

      <motion.div
        animate={{
          opacity: [0.2, 0.55, 0.2],
          scale: [0.95, 1.08, 0.95],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[35%]
          top-[12%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-blue-500/[0.05]
          blur-[160px]
        "
      />
    </div>
  );
};

/* =========================================================
   BACKGROUND PARTICLES
========================================================= */

const BackgroundParticles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 60 }, (_, index) => ({
        id: index,
        left: `${(index * 37.7) % 100}%`,
        top: `${(index * 61.3) % 100}%`,
        duration: 3 + (index % 5),
        delay: (index % 7) * 0.35,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          animate={{
            y: [0, -22, 0],
            opacity: [0.05, 0.5, 0.05],
            scale: [0.6, 1.7, 0.6],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            h-[2px]
            w-[2px]
            rounded-full
            bg-cyan-300
            shadow-[0_0_14px_rgba(103,232,249,.9)]
          "
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}
    </div>
  );
};

/* =========================================================
   TECHNOLOGY CARD
========================================================= */

const TechnologyCard = ({ item, index }) => {
  const ref = useRef(null);

  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
  });

  const [name, Icon, description, color] = item;

  const style =
    iconStyles[color] || iconStyles.white;

  const handleMove = (event) => {
    if (!ref.current) return;

    const rect =
      ref.current.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
        rect.width -
      0.5;

    const y =
      (event.clientY - rect.top) /
        rect.height -
      0.5;

    setRotation({
      x: -y * 7,
      y: x * 7,
    });
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() =>
        setRotation({
          x: 0,
          y: 0,
        })
      }
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -9,
      }}
      style={{
        transform: `
          perspective(1400px)
          rotateX(${rotation.x}deg)
          rotateY(${rotation.y}deg)
        `,
      }}
      className="
        group
        relative
        min-h-[230px]
        overflow-hidden
        rounded-[30px]
        border
        border-white/[0.08]
        bg-white/[0.035]
        p-7
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:border-cyan-300/20
        hover:bg-white/[0.055]
        hover:shadow-[0_30px_100px_rgba(0,0,0,.4)]
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-cyan-400/[0.07]
          blur-[70px]
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <span
        className="
          absolute
          right-6
          top-6
          font-mono
          text-[10px]
          tracking-[0.25em]
          text-white/15
          group-hover:text-cyan-300/50
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <motion.div
        whileHover={{
          rotate: -6,
          scale: 1.1,
        }}
        className={`
          relative
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          border
          ${style.bg}
          ${style.border}
          ${style.text}
        `}
      >
        <Icon size={29} />
      </motion.div>

      <div className="relative mt-8">
        <h3 className="text-[20px] font-semibold tracking-[-0.04em] text-white">
          {name}
        </h3>

        <p className="mt-2 max-w-[250px] text-[13px] leading-6 text-zinc-500">
          {description}
        </p>
      </div>

      <div
        className="
          absolute
          bottom-6
          left-7
          flex
          items-center
          gap-2
          font-mono
          text-[9px]
          uppercase
          tracking-[0.2em]
          text-white/20
        "
      >
        <span
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-cyan-300
            opacity-40
            shadow-[0_0_10px_rgba(103,232,249,.8)]
            group-hover:opacity-100
          "
        />
        active stack
      </div>
    </motion.article>
  );
};

/* =========================================================
   CATEGORY SELECTOR
========================================================= */

const CategorySelector = ({
  active,
  setActive,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        rounded-[32px]
        border
        border-white/[0.08]
        bg-white/[0.025]
        p-2
        shadow-[0_25px_100px_rgba(0,0,0,.28)]
        backdrop-blur-2xl
      "
    >
      <div
        className="
          grid
          grid-cols-2
          gap-1.5
          sm:grid-cols-3
          lg:grid-cols-6
        "
      >
        {categories.map((category) => {
          const Icon = category.icon;

          const isActive =
            active === category.id;

          return (
            <motion.button
              key={category.id}
              onClick={() =>
                setActive(category.id)
              }
              whileTap={{
                scale: 0.97,
              }}
              className={`
                group
                relative
                min-h-[110px]
                overflow-hidden
                rounded-[24px]
                px-4
                py-4
                text-left
                transition-all
                duration-300
                ${
                  isActive
                    ? "bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-violet-500/10 text-white shadow-[0_0_45px_rgba(34,211,238,.08)]"
                    : "text-zinc-500 hover:bg-white/[0.04] hover:text-white"
                }
              `}
            >
              {isActive && (
                <>
                  <motion.span
                    layoutId="categoryGlow"
                    className="
                      absolute
                      -right-12
                      -top-12
                      h-28
                      w-28
                      rounded-full
                      bg-cyan-300/10
                      blur-3xl
                    "
                  />

                  <motion.span
                    layoutId="categoryLine"
                    className="
                      absolute
                      bottom-0
                      left-5
                      right-5
                      h-[2px]
                      rounded-full
                      bg-gradient-to-r
                      from-transparent
                      via-cyan-300
                      to-transparent
                    "
                  />
                </>
              )}

              <div className="relative flex items-center justify-between">
                <span
                  className={`
                    font-mono
                    text-[10px]
                    tracking-[0.2em]
                    ${
                      isActive
                        ? "text-cyan-300/70"
                        : "text-white/15"
                    }
                  `}
                >
                  {category.number}
                </span>

                <Icon
                  size={20}
                  className={
                    isActive
                      ? "text-cyan-300"
                      : "text-zinc-600"
                  }
                />
              </div>

              <div className="relative mt-6">
                <div
                  className={`
                    text-[14px]
                    font-semibold
                    ${
                      isActive
                        ? "text-white"
                        : "text-zinc-400"
                    }
                  `}
                >
                  {category.title}
                </div>

                <div
                  className={`
                    mt-1
                    hidden
                    text-[10px]
                    leading-4
                    sm:block
                    ${
                      isActive
                        ? "text-white/40"
                        : "text-zinc-600"
                    }
                  `}
                >
                  {category.description}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

/* =========================================================
   RAG SIMULATION CONSTANTS
========================================================= */

const QUERY =
  "How does RAG improve LLM accuracy?";

const RESPONSE =
  "RAG improves LLM accuracy by grounding generation in retrieved external context, reducing unsupported responses.";

const PHASES = [
  "idle",
  "query",
  "embedding",
  "retrieval",
  "context",
  "thinking",
  "generation",
  "response",
];

const phaseMeta = {
  idle: {
    label: "SYSTEM READY",
    description: "Awaiting intelligent request",
  },
  query: {
    label: "QUERY INGESTED",
    description: "Transforming language into vectors",
  },
  embedding: {
    label: "SEMANTIC EMBEDDING",
    description: "Calculating vector similarity",
  },
  retrieval: {
    label: "VECTOR RETRIEVAL",
    description: "Searching the knowledge space",
  },
  context: {
    label: "CONTEXT ASSEMBLED",
    description: "Top-K relevant chunks selected",
  },
  thinking: {
    label: "LLM REASONING",
    description: "Processing grounded context",
  },
  generation: {
    label: "TOKEN GENERATION",
    description: "Producing grounded response",
  },
  response: {
    label: "RESPONSE COMPLETE",
    description: "Answer generated successfully",
  },
};

/* =========================================================
   SIMULATION CONTROLLER
========================================================= */

const useSimulationController = () => {
  const [phaseIndex, setPhaseIndex] =
    useState(0);

  const [typedQuery, setTypedQuery] =
    useState("");

  const [typedResponse, setTypedResponse] =
    useState("");

  const phase = PHASES[phaseIndex];

  useEffect(() => {
    const durations = {
      idle: 900,
      query: 2200,
      embedding: 2100,
      retrieval: 2500,
      context: 1800,
      thinking: 2300,
      generation: 2700,
      response: 3600,
    };

    const timer = setTimeout(() => {
      setPhaseIndex(
        (current) =>
          (current + 1) % PHASES.length
      );
    }, durations[phase]);

    return () => clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "query") {
      setTypedQuery("");
      return;
    }

    let index = 0;

    const interval = setInterval(() => {
      index += 1;

      setTypedQuery(
        QUERY.slice(0, index)
      );

      if (index >= QUERY.length) {
        clearInterval(interval);
      }
    }, 32);

    return () =>
      clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== "response") {
      setTypedResponse("");
      return;
    }

    let index = 0;

    const interval = setInterval(() => {
      index += 2;

      setTypedResponse(
        RESPONSE.slice(0, index)
      );

      if (index >= RESPONSE.length) {
        clearInterval(interval);
      }
    }, 20);

    return () =>
      clearInterval(interval);
  }, [phase]);

  return {
    phase,
    phaseIndex,
    typedQuery,
    typedResponse,
  };
};

/* =========================================================
   3D POSITIONS
========================================================= */

const positions = [
  [-5.8, 0.0, 0],
  [-3.55, 0.25, 0],
  [-1.25, -0.15, 0],
  [0.9, 0.25, 0],
  [3.25, 0.15, 0],
  [5.7, 0.0, 0],
];

/* =========================================================
   DOCUMENTS
========================================================= */

const docs = [
  {
    title: "RAG Architecture.pdf",
    subtitle: "retrieval / generation",
    position: [-1.8, 1.5, -0.4],
    relevant: true,
  },
  {
    title: "LLM Retrieval Guide",
    subtitle: "semantic search",
    position: [-1.55, -1.45, 0],
    relevant: true,
  },
  {
    title: "Vector Search Notes",
    subtitle: "embeddings",
    position: [-0.1, 1.85, -0.3],
    relevant: true,
  },
  {
    title: "Knowledge Base",
    subtitle: "general information",
    position: [0.4, -1.7, -0.15],
    relevant: false,
  },
  {
    title: "AI Research.pdf",
    subtitle: "language models",
    position: [1.2, 1.45, -0.5],
    relevant: false,
  },
];

/* =========================================================
   SHARED GLOW MATERIAL
========================================================= */

const GlowSphere = ({
  radius = 0.1,
  color = "#67e8f9",
  opacity = 1,
}) => {
  return (
    <mesh>
      <sphereGeometry
        args={[radius, 12, 12]}
      />

      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};

/* =========================================================
   DATA STREAM
========================================================= */

const DataStream = ({
  start,
  end,
  color = "#67e8f9",
  active = true,
  count = 16,
  speed = 0.55,
  curveLift = 0.5,
}) => {
  const refs = useRef([]);

  const curve = useMemo(() => {
    const a = new THREE.Vector3(
      ...start
    );

    const b = new THREE.Vector3(
      ...end
    );

    const direction = new THREE.Vector3()
      .subVectors(b, a);

    const mid = new THREE.Vector3()
      .addVectors(a, b)
      .multiplyScalar(0.5);

    mid.y +=
      curveLift +
      direction.length() * 0.05;

    mid.z += 0.45;

    return new THREE.CatmullRomCurve3([
      a,
      mid,
      b,
    ]);
  }, [start, end, curveLift]);

  useFrame(({ clock }) => {
    const t =
      clock.getElapsedTime() * speed;

    refs.current.forEach(
      (mesh, index) => {
        if (!mesh) return;

        mesh.visible = active;

        if (!active) return;

        const progress =
          (t + index / count) % 1;

        const point =
          curve.getPointAt(progress);

        mesh.position.copy(point);

        const pulse =
          0.55 +
          Math.sin(
            progress * Math.PI
          ) *
            0.8;

        mesh.scale.setScalar(pulse);
      }
    );
  });

  return (
    <>
      <Line
        points={curve.getPoints(80)}
        color={color}
        transparent
        opacity={active ? 0.3 : 0.05}
        lineWidth={1}
      />

      <Line
        points={curve.getPoints(80)}
        color={color}
        transparent
        opacity={active ? 0.08 : 0}
        lineWidth={4}
      />

      {Array.from({ length: count }).map(
        (_, index) => (
          <mesh
            key={index}
            ref={(node) => {
              refs.current[index] =
                node;
            }}
          >
            <sphereGeometry
              args={[
                index % 4 === 0
                  ? 0.065
                  : 0.032,
                8,
                8,
              ]}
            />

            <meshBasicMaterial
              color={color}
              transparent
              opacity={0.95}
              blending={
                THREE.AdditiveBlending
              }
            />
          </mesh>
        )
      )}
    </>
  );
};

/* =========================================================
   ENERGY BURST
========================================================= */

const EnergyBurst = ({
  position,
  active,
  color = "#67e8f9",
}) => {
  const refs = useRef([]);

  useFrame(({ clock }) => {
    const t =
      clock.getElapsedTime();

    refs.current.forEach(
      (mesh, index) => {
        if (!mesh) return;

        if (!active) {
          mesh.visible = false;
          return;
        }

        mesh.visible = true;

        const angle =
          (index / 18) *
            Math.PI *
            2 +
          t * 0.35;

        const cycle =
          (t * 0.85) % 1;

        const radius =
          0.1 + cycle * 1.05;

        mesh.position.set(
          position[0] +
            Math.cos(angle) * radius,
          position[1] +
            Math.sin(angle) * radius,
          position[2] +
            Math.sin(
              angle * 2
            ) *
              0.2
        );

        mesh.material.opacity =
          1 - cycle;
      }
    );
  });

  return (
    <>
      {Array.from({ length: 18 }).map(
        (_, index) => (
          <mesh
            key={index}
            ref={(node) => {
              refs.current[index] =
                node;
            }}
          >
            <sphereGeometry
              args={[0.035, 7, 7]}
            />

            <meshBasicMaterial
              color={color}
              transparent
              opacity={0}
              blending={
                THREE.AdditiveBlending
              }
            />
          </mesh>
        )
      )}
    </>
  );
};

/* =========================================================
   USER QUERY
========================================================= */

const UserQuery = ({
  position,
  phase,
}) => {
  const group = useRef(null);
  const ring1 = useRef(null);
  const ring2 = useRef(null);

  const active =
    phase === "query";

  useFrame(({ clock }) => {
    const t =
      clock.getElapsedTime();

    if (group.current) {
      group.current.position.y =
        position[1] +
        Math.sin(t * 1.6) *
          0.09;
    }

    if (ring1.current) {
      ring1.current.rotation.z =
        t * 0.65;

      ring1.current.scale.setScalar(
        active
          ? 1 +
              Math.sin(t * 6) *
                0.09
          : 1
      );
    }

    if (ring2.current) {
      ring2.current.rotation.z =
        -t * 0.35;
    }
  });

  return (
    <group
      ref={group}
      position={position}
    >
      <mesh>
        <sphereGeometry
          args={[0.72, 32, 32]}
        />

        <meshBasicMaterial
          color="#061523"
          transparent
          opacity={0.96}
        />
      </mesh>

      <mesh ref={ring1}>
        <torusGeometry
          args={[
            0.88,
            0.022,
            10,
            80,
          ]}
        />

        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={
            active ? 0.95 : 0.3
          }
          blending={
            THREE.AdditiveBlending
          }
        />
      </mesh>

      <mesh
        ref={ring2}
        rotation={[0, 0, Math.PI / 4]}
      >
        <torusGeometry
          args={[
            1.03,
            0.012,
            10,
            80,
          ]}
        />

        <meshBasicMaterial
          color="#818cf8"
          transparent
          opacity={0.45}
          blending={
            THREE.AdditiveBlending
          }
        />
      </mesh>

      <Text
        position={[0, 0.14, 0.75]}
        fontSize={0.22}
        color="#67e8f9"
        anchorX="center"
        anchorY="middle"
      >
        USER
      </Text>

      <Text
        position={[0, -0.2, 0.75]}
        fontSize={0.095}
        color="#ffffff"
        maxWidth={1.25}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
      >
        QUERY
      </Text>

      <Sparkles
        count={active ? 70 : 25}
        scale={2}
        size={2}
        speed={active ? 1.5 : 0.4}
        color="#67e8f9"
      />
    </group>
  );
};

/* =========================================================
   EMBEDDING SPACE
========================================================= */

const EmbeddingSpace = ({
  position,
  phase,
}) => {
  const pointsRef = useRef(null);

  const data = useMemo(() => {
    const clusters = [
      [-0.48, 0.35, 0],
      [0.2, 0.5, 0.1],
      [0.55, -0.18, -0.1],
      [-0.4, -0.55, 0.1],
      [0.45, 0.65, 0.15],
    ];

    const positionsArray = [];
    const colorsArray = [];

    const colorList = [
      new THREE.Color("#22d3ee"),
      new THREE.Color("#60a5fa"),
      new THREE.Color("#818cf8"),
      new THREE.Color("#a78bfa"),
      new THREE.Color("#67e8f9"),
    ];

    clusters.forEach(
      (cluster, clusterIndex) => {
        for (let i = 0; i < 55; i++) {
          const angle =
            Math.random() *
            Math.PI *
            2;

          const radius =
            Math.sqrt(
              Math.random()
            ) * 0.48;

          positionsArray.push(
            cluster[0] +
              Math.cos(angle) *
                radius,
            cluster[1] +
              Math.sin(angle) *
                radius,
            cluster[2] +
              (Math.random() - 0.5) *
                0.5
          );

          const color =
            colorList[
              clusterIndex %
                colorList.length
            ];

          colorsArray.push(
            color.r,
            color.g,
            color.b
          );
        }
      }
    );

    return {
      positions:
        new Float32Array(
          positionsArray
        ),
      colors:
        new Float32Array(
          colorsArray
        ),
    };
  }, []);

  const scanning =
    phase === "embedding";

  useFrame(({ clock }) => {
    if (!pointsRef.current)
      return;

    const t =
      clock.getElapsedTime();

    pointsRef.current.rotation.y =
      t * 0.08;

    pointsRef.current.rotation.x =
      Math.sin(t * 0.3) *
      0.05;

    pointsRef.current.material.opacity =
      scanning ? 0.95 : 0.5;
  });

  return (
    <group position={position}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={
              data.positions.length / 3
            }
            array={data.positions}
            itemSize={3}
          />

          <bufferAttribute
            attach="attributes-color"
            count={
              data.colors.length / 3
            }
            array={data.colors}
            itemSize={3}
          />
        </bufferGeometry>

        <pointsMaterial
          size={0.055}
          vertexColors
          transparent
          opacity={0.5}
          sizeAttenuation
          blending={
            THREE.AdditiveBlending
          }
        />
      </points>

      <mesh>
        <sphereGeometry
          args={[0.85, 32, 32]}
        />

        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.035}
          wireframe
        />
      </mesh>

      {scanning && (
        <ScanningRing />
      )}

      <Text
        position={[0, 1.05, 0]}
        fontSize={0.19}
        color="#67e8f9"
        anchorX="center"
      >
        EMBEDDING
      </Text>

      <Text
        position={[0, 0.82, 0]}
        fontSize={0.105}
        color="#dbeafe"
        anchorX="center"
      >
        SEMANTIC VECTOR SPACE
      </Text>
    </group>
  );
};

/* =========================================================
   SCANNING RING
========================================================= */

const ScanningRing = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (!ref.current)
      return;

    const progress =
      (clock.getElapsedTime() %
        1.7) /
      1.7;

    ref.current.scale.setScalar(
      0.2 + progress * 2.2
    );

    ref.current.material.opacity =
      (1 - progress) * 0.9;
  });

  return (
    <mesh
      ref={ref}
      rotation={[
        Math.PI / 2,
        0,
        0,
      ]}
    >
      <ringGeometry
        args={[
          0.025,
          0.055,
          64,
        ]}
      />

      <meshBasicMaterial
        color="#22d3ee"
        transparent
        opacity={0.8}
        side={THREE.DoubleSide}
        blending={
          THREE.AdditiveBlending
        }
      />
    </mesh>
  );
};

/* =========================================================
   DOCUMENT NODE
========================================================= */

const DocumentNode = ({
  document,
  phase,
  index,
}) => {
  const group = useRef(null);

  const selected =
    document.relevant &&
    phase === "retrieval";

  useFrame(({ clock }) => {
    if (!group.current)
      return;

    const t =
      clock.getElapsedTime();

    group.current.position.y =
      document.position[1] +
      Math.sin(
        t * 0.8 + index
      ) *
        0.12;

    group.current.rotation.y =
      Math.sin(
        t * 0.5 + index
      ) *
        0.08;

    group.current.rotation.x =
      Math.cos(
        t * 0.35 + index
      ) *
        0.025;
  });

  return (
    <group
      ref={group}
      position={document.position}
    >
      <mesh>
        <boxGeometry
          args={[
            1.05,
            0.78,
            0.055,
          ]}
        />

        <meshBasicMaterial
          color={
            selected
              ? "#092f3b"
              : "#07101c"
          }
          transparent
          opacity={
            selected ? 0.98 : 0.7
          }
        />
      </mesh>

      <Line
        points={[
          [-0.525, -0.39, 0.04],
          [0.525, -0.39, 0.04],
          [0.525, 0.39, 0.04],
          [-0.525, 0.39, 0.04],
          [-0.525, -0.39, 0.04],
        ]}
        color={
          selected
            ? "#22d3ee"
            : "#31506a"
        }
        transparent
        opacity={
          selected ? 1 : 0.35
        }
        lineWidth={
          selected ? 2 : 1
        }
      />

      <Text
        position={[
          -0.43,
          0.17,
          0.065,
        ]}
        fontSize={0.085}
        color={
          selected
            ? "#67e8f9"
            : "#dbeafe"
        }
        maxWidth={0.82}
        anchorX="left"
        anchorY="middle"
      >
        {document.title}
      </Text>

      <Text
        position={[
          -0.43,
          -0.03,
          0.065,
        ]}
        fontSize={0.06}
        color="#94a3b8"
        anchorX="left"
        anchorY="middle"
      >
        {document.subtitle}
      </Text>

      <Line
        points={[
          [-0.42, -0.19, 0.065],
          [-0.1, -0.19, 0.065],
        ]}
        color={
          selected
            ? "#22d3ee"
            : "#334155"
        }
        transparent
        opacity={0.75}
        lineWidth={2}
      />

      <Line
        points={[
          [-0.42, -0.27, 0.065],
          [0.25, -0.27, 0.065],
        ]}
        color={
          selected
            ? "#818cf8"
            : "#26394c"
        }
        transparent
        opacity={0.65}
        lineWidth={2}
      />

      {selected && (
        <>
          <Sparkles
            count={30}
            scale={1.6}
            size={2}
            speed={1}
            color="#22d3ee"
          />

          <mesh>
            <boxGeometry
              args={[
                1.18,
                0.91,
                0.02,
              ]}
            />

            <meshBasicMaterial
              color="#22d3ee"
              transparent
              opacity={0.05}
              blending={
                THREE.AdditiveBlending
              }
            />
          </mesh>
        </>
      )}
    </group>
  );
};

/* =========================================================
   VECTOR DATABASE
========================================================= */

const VectorDatabase = ({
  position,
  phase,
}) => {
  const group = useRef(null);
  const rings = useRef([]);

  const active =
    phase === "retrieval";

  useFrame(({ clock }) => {
    const t =
      clock.getElapsedTime();

    if (group.current) {
      group.current.rotation.y =
        t * 0.35;

      group.current.rotation.x =
        Math.sin(t * 0.4) *
        0.08;
    }

    rings.current.forEach(
      (ring, index) => {
        if (!ring) return;

        ring.rotation.z =
          t *
          (index % 2 === 0
            ? 0.55
            : -0.4);
      }
    );
  });

  return (
    <group
      ref={group}
      position={position}
    >
      <mesh>
        <cylinderGeometry
          args={[
            0.72,
            0.72,
            0.82,
            48,
          ]}
        />

        <meshBasicMaterial
          color="#061523"
          transparent
          opacity={0.95}
        />
      </mesh>

      {[0, 1, 2].map(
        (index) => (
          <mesh
            key={index}
            ref={(node) => {
              rings.current[index] =
                node;
            }}
            position={[
              0,
              -0.27 +
                index * 0.27,
              0,
            ]}
          >
            <torusGeometry
              args={[
                0.74,
                0.018,
                10,
                80,
              ]}
            />

            <meshBasicMaterial
              color={
                active
                  ? "#22d3ee"
                  : "#31506a"
              }
              transparent
              opacity={
                active ? 0.95 : 0.3
              }
              blending={
                THREE.AdditiveBlending
              }
            />
          </mesh>
        )
      )}

      <Text
        position={[0, 0.12, 0.76]}
        fontSize={0.19}
        color="#67e8f9"
        anchorX="center"
      >
        VECTOR DB
      </Text>

      <Text
        position={[0, -0.18, 0.76]}
        fontSize={0.09}
        color="#cbd5e1"
        anchorX="center"
      >
        TOP-K SEARCH
      </Text>

      {active && (
        <>
          <ScanningRing />

          <Sparkles
            count={50}
            scale={1.9}
            size={2}
            speed={1.3}
            color="#22d3ee"
          />
        </>
      )}
    </group>
  );
};

/* =========================================================
   CONTEXT NODE
========================================================= */

const ContextNode = ({
  position,
  phase,
}) => {
  const group = useRef(null);

  const active =
    phase === "context" ||
    phase === "thinking" ||
    phase === "generation";

  useFrame(({ clock }) => {
    if (!group.current)
      return;

    const t =
      clock.getElapsedTime();

    group.current.rotation.y =
      t * 0.3;

    group.current.scale.setScalar(
      active
        ? 1 +
            Math.sin(t * 5) *
              0.055
        : 1
    );
  });

  return (
    <group
      ref={group}
      position={position}
    >
      <mesh>
        <icosahedronGeometry
          args={[0.62, 2]}
        />

        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={
            active ? 0.28 : 0.09
          }
          wireframe
        />
      </mesh>

      {[0, 1, 2].map(
        (index) => (
          <mesh
            key={index}
            rotation={[
              index * 0.8,
              index * 0.6,
              index * 0.5,
            ]}
          >
            <torusGeometry
              args={[
                0.78 +
                  index * 0.1,
                0.016,
                10,
                80,
              ]}
            />

            <meshBasicMaterial
              color={
                index % 2 === 0
                  ? "#22d3ee"
                  : "#818cf8"
              }
              transparent
              opacity={
                active ? 0.7 : 0.15
              }
              blending={
                THREE.AdditiveBlending
              }
            />
          </mesh>
        )
      )}

      <Text
        position={[0, 0.15, 0.75]}
        fontSize={0.2}
        color="#67e8f9"
        anchorX="center"
      >
        CONTEXT
      </Text>

      <Text
        position={[0, -0.17, 0.75]}
        fontSize={0.095}
        color="#dbeafe"
        anchorX="center"
      >
        3 CHUNKS
      </Text>

      {active && (
        <Sparkles
          count={55}
          scale={1.8}
          size={2}
          speed={1.2}
          color="#67e8f9"
        />
      )}
    </group>
  );
};

/* =========================================================
   RETRIEVAL PARTICLES
========================================================= */

const RetrievalParticles = ({
  phase,
}) => {
  const refs = useRef([]);

  const active =
    phase === "retrieval" ||
    phase === "context";

  const starts = useMemo(
    () =>
      docs
        .filter(
          (doc) => doc.relevant
        )
        .map(
          (doc) =>
            doc.position
        ),
    []
  );

  const target = [
    positions[3][0],
    positions[3][1],
    positions[3][2],
  ];

  useFrame(({ clock }) => {
    const t =
      clock.getElapsedTime();

    refs.current.forEach(
      (mesh, index) => {
        if (!mesh) return;

        mesh.visible = active;

        if (!active) return;

        const start =
          starts[
            index %
              starts.length
          ];

        const p =
          new THREE.Vector3(
            ...start
          );

        const e =
          new THREE.Vector3(
            ...target
          );

        const mid =
          new THREE.Vector3()
            .addVectors(p, e)
            .multiplyScalar(0.5);

        mid.y +=
          index % 2 === 0
            ? 0.6
            : -0.5;

        mid.z += 0.5;

        const curve =
          new THREE.CatmullRomCurve3(
            [p, mid, e]
          );

        const progress =
          (t * 0.42 +
            index * 0.17) %
          1;

        mesh.position.copy(
          curve.getPointAt(
            progress
          )
        );

        mesh.scale.setScalar(
          0.7 +
            Math.sin(
              progress * Math.PI
            ) *
              1.2
        );
      }
    );
  });

  return (
    <>
      {Array.from({
        length: 24,
      }).map((_, index) => (
        <mesh
          key={index}
          ref={(node) => {
            refs.current[index] =
              node;
          }}
        >
          <sphereGeometry
            args={[
              index % 4 === 0
                ? 0.065
                : 0.032,
              8,
              8,
            ]}
          />

          <meshBasicMaterial
            color={
              index % 2 === 0
                ? "#22d3ee"
                : "#818cf8"
            }
            transparent
            opacity={0.95}
            blending={
              THREE.AdditiveBlending
            }
          />
        </mesh>
      ))}
    </>
  );
};

/* =========================================================
   LLM CORE
========================================================= */

const LLMCore = ({
  position,
  phase,
}) => {
  const core = useRef(null);
  const rings = useRef([]);
  const nodes = useRef([]);

  const active =
    phase === "thinking" ||
    phase === "generation";

  const intense =
    phase === "generation";

  useFrame(({ clock }) => {
    const t =
      clock.getElapsedTime();

    if (core.current) {
      core.current.rotation.x =
        t * 0.28;

      core.current.rotation.y =
        t * 0.48;

      core.current.rotation.z =
        Math.sin(t * 0.4) *
        0.15;

      const breathe =
        1 +
        Math.sin(
          t * (active ? 6 : 2.3)
        ) *
          (active ? 0.075 : 0.035);

      core.current.scale.setScalar(
        breathe
      );
    }

    rings.current.forEach(
      (ring, index) => {
        if (!ring) return;

        const speed =
          active
            ? 0.5 +
              index * 0.12
            : 0.18 +
              index * 0.04;

        ring.rotation.x =
          t * speed;

        ring.rotation.y =
          t *
          (index % 2 === 0
            ? 0.28
            : -0.24);

        ring.rotation.z =
          t *
          (index % 2 === 0
            ? 0.12
            : -0.16);
      }
    );

    nodes.current.forEach(
      (node, index) => {
        if (!node) return;

        const angle =
          t *
            (active
              ? 0.75
              : 0.3) +
          index;

        const radius =
          0.95 +
          Math.sin(
            t * 0.7 + index
          ) *
            0.08;

        node.position.set(
          Math.cos(angle) *
            radius,
          Math.sin(angle) *
            radius,
          Math.sin(
            t * 0.9 + index
          ) * 0.42
        );
      }
    );
  });

  return (
    <group position={position}>
      <group ref={core}>
        <mesh>
          <sphereGeometry
            args={[0.7, 40, 40]}
          />

          <meshBasicMaterial
            color="#172554"
            transparent
            opacity={
              active ? 0.35 : 0.2
            }
          />
        </mesh>

        <mesh>
          <icosahedronGeometry
            args={[0.58, 3]}
          />

          <meshBasicMaterial
            color={
              intense
                ? "#e9d5ff"
                : "#818cf8"
            }
            wireframe
            transparent
            opacity={
              active ? 0.95 : 0.58
            }
            blending={
              THREE.AdditiveBlending
            }
          />
        </mesh>

        <mesh>
          <sphereGeometry
            args={[0.19, 24, 24]}
          />

          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={
              intense ? 1 : 0.85
            }
            blending={
              THREE.AdditiveBlending
            }
          />
        </mesh>

        {[0, 1, 2, 3, 4].map(
          (index) => (
            <mesh
              key={index}
              ref={(node) => {
                rings.current[index] =
                  node;
              }}
              rotation={[
                index * 0.7,
                index * 0.4,
                index * 0.5,
              ]}
            >
              <torusGeometry
                args={[
                  0.86 +
                    index * 0.13,
                  0.015 +
                    index * 0.003,
                  10,
                  100,
                ]}
              />

              <meshBasicMaterial
                color={
                  index % 2 === 0
                    ? "#22d3ee"
                    : "#8b5cf6"
                }
                transparent
                opacity={
                  active ? 0.75 : 0.25
                }
                blending={
                  THREE.AdditiveBlending
                }
              />
            </mesh>
          )
        )}

        {Array.from({
          length: 18,
        }).map((_, index) => (
          <mesh
            key={index}
            ref={(node) => {
              nodes.current[index] =
                node;
            }}
          >
            <sphereGeometry
              args={[
                index % 3 === 0
                  ? 0.045
                  : 0.025,
                8,
                8,
              ]}
            />

            <meshBasicMaterial
              color={
                index % 2 === 0
                  ? "#67e8f9"
                  : "#c4b5fd"
              }
              blending={
                THREE.AdditiveBlending
              }
            />
          </mesh>
        ))}
      </group>

      <Sparkles
        count={active ? 140 : 55}
        scale={3}
        size={active ? 2.7 : 1.5}
        speed={active ? 1.8 : 0.45}
        color="#67e8f9"
      />

      <Text
        position={[0, 1.55, 0]}
        fontSize={0.25}
        color="#e9d5ff"
        anchorX="center"
      >
        LLM CORE
      </Text>

      <Text
        position={[0, 1.25, 0]}
        fontSize={0.115}
        color="#c4b5fd"
        anchorX="center"
      >
        NEURAL GENERATION ENGINE
      </Text>

      <Text
        position={[0, -1.55, 0]}
        fontSize={0.12}
        color={
          intense
            ? "#67e8f9"
            : active
            ? "#c4b5fd"
            : "#64748b"
        }
        anchorX="center"
      >
        {phase === "thinking"
          ? "CONTEXT RECEIVED"
          : phase === "generation"
          ? "GENERATING TOKENS"
          : "WAITING FOR CONTEXT"}
      </Text>
    </group>
  );
};

/* =========================================================
   TOKEN STREAM
========================================================= */

const TokenStream = ({
  phase,
}) => {
  const refs = useRef([]);

  const active =
    phase === "generation" ||
    phase === "response";

  const start =
    positions[4];

  const end =
    positions[5];

  const curve = useMemo(() => {
    const a = new THREE.Vector3(
      ...start
    );

    const b = new THREE.Vector3(
      ...end
    );

    const mid = new THREE.Vector3()
      .addVectors(a, b)
      .multiplyScalar(0.5);

    mid.y += 0.9;
    mid.z += 0.45;

    return new THREE.CatmullRomCurve3([
      a,
      mid,
      b,
    ]);
  }, [start, end]);

  useFrame(({ clock }) => {
    const t =
      clock.getElapsedTime();

    refs.current.forEach(
      (mesh, index) => {
        if (!mesh) return;

        mesh.visible = active;

        if (!active) return;

        const progress =
          (t * 0.55 +
            index * 0.12) %
          1;

        mesh.position.copy(
          curve.getPointAt(
            progress
          )
        );

        mesh.scale.setScalar(
          0.7 +
            Math.sin(
              progress * Math.PI
            ) *
              1.3
        );
      }
    );
  });

  return (
    <>
      <Line
        points={curve.getPoints(70)}
        color="#a78bfa"
        transparent
        opacity={active ? 0.28 : 0.04}
        lineWidth={1}
      />

      {Array.from({
        length: 22,
      }).map((_, index) => (
        <mesh
          key={index}
          ref={(node) => {
            refs.current[index] =
              node;
          }}
        >
          <sphereGeometry
            args={[
              index % 4 === 0
                ? 0.065
                : 0.032,
              8,
              8,
            ]}
          />

          <meshBasicMaterial
            color={
              index % 2 === 0
                ? "#c4b5fd"
                : "#67e8f9"
            }
            blending={
              THREE.AdditiveBlending
            }
          />
        </mesh>
      ))}
    </>
  );
};

/* =========================================================
   RESPONSE NODE
========================================================= */

const ResponseNode = ({
  position,
  phase,
}) => {
  const ref = useRef(null);

  const active =
    phase === "response";

  useFrame(({ clock }) => {
    if (!ref.current)
      return;

    const t =
      clock.getElapsedTime();

    ref.current.rotation.x =
      t * 0.25;

    ref.current.rotation.y =
      t * 0.45;

    ref.current.rotation.z =
      t * 0.35;

    ref.current.scale.setScalar(
      active
        ? 1 +
            Math.sin(t * 5) *
              0.07
        : 1
    );
  });

  return (
    <group position={position}>
      <group ref={ref}>
        <mesh>
          <torusKnotGeometry
            args={[
              0.48,
              0.075,
              100,
              18,
              2,
              3,
            ]}
          />

          <meshBasicMaterial
            color="#c4b5fd"
            wireframe
            transparent
            opacity={
              active ? 0.95 : 0.4
            }
            blending={
              THREE.AdditiveBlending
            }
          />
        </mesh>

        <mesh>
          <sphereGeometry
            args={[0.15, 24, 24]}
          />

          <meshBasicMaterial
            color="#ffffff"
            blending={
              THREE.AdditiveBlending
            }
          />
        </mesh>
      </group>

      <Text
        position={[0, 0.95, 0]}
        fontSize={0.24}
        color="#d8b4fe"
        anchorX="center"
      >
        RESPONSE
      </Text>

      <Text
        position={[0, 0.68, 0]}
        fontSize={0.105}
        color="#cbd5e1"
        anchorX="center"
      >
        GROUNDED ANSWER
      </Text>

      {active && (
        <Sparkles
          count={75}
          scale={2}
          size={2.5}
          speed={1.4}
          color="#c4b5fd"
        />
      )}
    </group>
  );
};

/* =========================================================
   FLOATING NEURAL WORDS
========================================================= */

const NeuralWords = ({
  phase,
}) => {
  const words = [
    "context",
    "attention",
    "tokens",
    "reasoning",
    "retrieval",
    "generation",
  ];

  const active =
    phase === "thinking" ||
    phase === "generation";

  return (
    <>
      {words.map(
        (word, index) => {
          const angle =
            (index / words.length) *
            Math.PI *
            2;

          return (
            <FloatingWord
              key={word}
              word={word}
              index={index}
              angle={angle}
              active={active}
            />
          );
        }
      )}
    </>
  );
};

const FloatingWord = ({
  word,
  index,
  angle,
  active,
}) => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (!ref.current)
      return;

    const t =
      clock.getElapsedTime();

    const a =
      angle +
      t *
        (index % 2 === 0
          ? 0.3
          : -0.24);

    ref.current.position.set(
      positions[4][0] +
        Math.cos(a) * 1.65,
      positions[4][1] +
        Math.sin(a) *
          1.1,
      Math.sin(a) * 0.45
    );

    ref.current.material.opacity =
      active
        ? 0.25 +
          Math.sin(
            t * 2.4 + index
          ) *
            0.2
        : 0;
  });

  return (
    <Text
      ref={ref}
      fontSize={0.095}
      color={
        index % 2 === 0
          ? "#67e8f9"
          : "#c4b5fd"
      }
      anchorX="center"
      anchorY="middle"
    >
      {word}
    </Text>
  );
};

/* =========================================================
   PIPELINE SCENE
========================================================= */

const PipelineScene = ({
  phase,
}) => {
  const connections = [
    [0, 1, "#67e8f9"],
    [1, 2, "#60a5fa"],
    [2, 3, "#818cf8"],
    [3, 4, "#22d3ee"],
    [4, 5, "#a78bfa"],
  ];

  const streamActive = [
    phase === "query" ||
      phase === "embedding" ||
      phase === "retrieval" ||
      phase === "context" ||
      phase === "thinking" ||
      phase === "generation" ||
      phase === "response",

    phase === "embedding" ||
      phase === "retrieval" ||
      phase === "context" ||
      phase === "thinking" ||
      phase === "generation" ||
      phase === "response",

    phase === "retrieval" ||
      phase === "context" ||
      phase === "thinking" ||
      phase === "generation" ||
      phase === "response",

    phase === "context" ||
      phase === "thinking" ||
      phase === "generation" ||
      phase === "response",

    phase === "generation" ||
      phase === "response",
  ];

  return (
    <>
      <ambientLight
        intensity={0.25}
      />

      <pointLight
        position={[0, 3, 6]}
        intensity={3}
        color="#22d3ee"
      />

      <pointLight
        position={[4, -2, 5]}
        intensity={2.8}
        color="#8b5cf6"
      />

      <pointLight
        position={[-4, 0, 3]}
        intensity={1.8}
        color="#60a5fa"
      />

      <Environment preset="night" />

      <Sparkles
        count={170}
        scale={14}
        size={1.4}
        speed={0.25}
        color="#334155"
      />

      <UserQuery
        position={positions[0]}
        phase={phase}
      />

      <EmbeddingSpace
        position={positions[1]}
        phase={phase}
      />

      <VectorDatabase
        position={positions[2]}
        phase={phase}
      />

      <ContextNode
        position={positions[3]}
        phase={phase}
      />

      <LLMCore
        position={positions[4]}
        phase={phase}
      />

      <ResponseNode
        position={positions[5]}
        phase={phase}
      />

      {docs.map(
        (document, index) => (
          <DocumentNode
            key={document.title}
            document={document}
            phase={phase}
            index={index}
          />
        )
      )}

      <RetrievalParticles
        phase={phase}
      />

      <TokenStream
        phase={phase}
      />

      <NeuralWords
        phase={phase}
      />

      {connections.map(
        ([from, to, color], index) => (
          <DataStream
            key={index}
            start={positions[from]}
            end={positions[to]}
            color={color}
            active={
              streamActive[index]
            }
            count={
              index === 4 ? 20 : 16
            }
            speed={
              phase === "generation"
                ? 1.1
                : 0.55
            }
            curveLift={
              index === 2
                ? 0.75
                : 0.45
            }
          />
        )
      )}

      <EnergyBurst
        position={positions[0]}
        active={
          phase === "query"
        }
        color="#67e8f9"
      />

      <EnergyBurst
        position={positions[2]}
        active={
          phase === "retrieval"
        }
        color="#818cf8"
      />

      <EnergyBurst
        position={positions[4]}
        active={
          phase === "thinking" ||
          phase === "generation"
        }
        color="#c4b5fd"
      />

      <EnergyBurst
        position={positions[5]}
        active={
          phase === "response"
        }
        color="#a78bfa"
      />

      <OrbitControls
        enablePan={false}
        enableZoom
        minDistance={9}
        maxDistance={15}
        minPolarAngle={
          Math.PI / 2.6
        }
        maxPolarAngle={
          Math.PI / 1.95
        }
        minAzimuthAngle={
          -Math.PI / 8
        }
        maxAzimuthAngle={
          Math.PI / 8
        }
        enableDamping
        dampingFactor={0.045}
      />
    </>
  );
};

/* =========================================================
   RAG HUD
========================================================= */

const RagHUD = ({
  phase,
  typedQuery,
  typedResponse,
}) => {
  const [retrieved, setRetrieved] =
    useState(0);

  useEffect(() => {
    if (phase !== "retrieval") {
      if (phase === "context") {
        setRetrieved(3);
      }

      if (phase === "idle") {
        setRetrieved(0);
      }

      return;
    }

    let value = 0;

    const timer = setInterval(() => {
      value += 1;

      setRetrieved(value);

      if (value >= 3) {
        clearInterval(timer);
      }
    }, 450);

    return () =>
      clearInterval(timer);
  }, [phase]);

  return (
    <>
      {/* TOP LEFT */}
      <div
        className="
          pointer-events-none
          absolute
          left-7
          top-6
          z-30
          flex
          items-center
          gap-4
        "
      >
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            border
            border-cyan-300/20
            bg-cyan-300/[0.07]
            text-cyan-300
            shadow-[0_0_35px_rgba(34,211,238,.12)]
          "
        >
          <Workflow size={21} />
        </div>

        <div>
          <div className="font-mono text-[12px] font-semibold uppercase tracking-[0.28em] text-cyan-300/85">
            LIVE RAG PIPELINE
          </div>

          <div className="mt-1 font-mono text-[10px] tracking-[0.16em] text-white/30">
            RETRIEVE → AUGMENT → GENERATE
          </div>
        </div>
      </div>

      {/* TOP RIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          right-7
          top-6
          z-30
          flex
          items-center
          gap-4
        "
      >
        <div
          className="
            rounded-full
            border
            border-emerald-300/15
            bg-emerald-300/[0.045]
            px-5
            py-3
            backdrop-blur-xl
          "
        >
          <div className="flex items-center gap-3">
            <motion.span
              animate={{
                scale: [1, 1.6, 1],
                opacity: [
                  0.4,
                  1,
                  0.4,
                ],
              }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
              }}
              className="
                h-2
                w-2
                rounded-full
                bg-emerald-300
                shadow-[0_0_15px_rgba(110,231,183,.9)]
              "
            />

            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300/80">
              {phaseMeta[phase]?.label}
            </span>
          </div>
        </div>

        <div className="hidden rounded-full border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl sm:block">
          <span className="font-mono text-[10px] tracking-[0.16em] text-white/35">
            142ms
          </span>
        </div>
      </div>

      {/* PHASE DESCRIPTION */}
      <motion.div
        key={phase}
        initial={{
          opacity: 0,
          y: -8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[17%]
          z-30
          -translate-x-1/2
          rounded-full
          border
          border-white/10
          bg-black/35
          px-6
          py-3
          backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-3">
          <Activity
            size={14}
            className="text-cyan-300"
          />

          <span className="font-mono text-[11px] tracking-[0.14em] text-white/55">
            {phaseMeta[phase]?.description}
          </span>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {/* QUERY */}
        {phase === "query" && (
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: -30,
              scale: 0.94,
            }}
            className="
              absolute
              bottom-7
              left-7
              z-30
              max-w-[390px]
              rounded-[24px]
              border
              border-cyan-300/15
              bg-[#050816]/80
              px-6
              py-5
              shadow-[0_25px_80px_rgba(0,0,0,.45)]
              backdrop-blur-2xl
            "
          >
            <div className="mb-3 flex items-center gap-3">
              <Search
                size={15}
                className="text-cyan-300"
              />

              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300/70">
                Incoming Query
              </span>
            </div>

            <p className="font-mono text-[17px] leading-7 text-white/85">
              {typedQuery}
              <span className="ml-1 animate-pulse text-cyan-300">
                |
              </span>
            </p>
          </motion.div>
        )}

        {/* RETRIEVAL */}
        {phase === "retrieval" && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.92,
            }}
            className="
              absolute
              bottom-7
              left-1/2
              z-30
              w-[260px]
              -translate-x-1/2
              rounded-[24px]
              border
              border-cyan-300/15
              bg-[#050816]/85
              px-6
              py-5
              text-center
              shadow-[0_25px_80px_rgba(0,0,0,.45)]
              backdrop-blur-2xl
            "
          >
            <div className="font-mono text-[12px] font-semibold tracking-[0.22em] text-cyan-300">
              TOP-K RETRIEVAL
            </div>

            <motion.div
              key={retrieved}
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="mt-2 text-[22px] font-bold text-white"
            >
              {retrieved}
            </motion.div>

            <div className="mt-1 text-[11px] tracking-[0.08em] text-white/45">
              RELEVANT CHUNKS FOUND
            </div>
          </motion.div>
        )}

        {/* THINKING */}
        {phase === "thinking" && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            className="
              absolute
              bottom-7
              left-1/2
              z-30
              -translate-x-1/2
              rounded-full
              border
              border-violet-300/20
              bg-violet-300/[0.06]
              px-7
              py-4
              backdrop-blur-xl
            "
          >
            <div className="flex items-center gap-3">
              <Brain
                size={16}
                className="text-violet-300"
              />

              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-200/80">
                LLM processing context
              </span>

              <motion.span
                animate={{
                  opacity: [
                    0.2,
                    1,
                    0.2,
                  ],
                }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                }}
                className="text-violet-300"
              >
                •••
              </motion.span>
            </div>
          </motion.div>
        )}

        {/* GENERATION */}
        {phase === "generation" && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            className="
              absolute
              bottom-7
              left-1/2
              z-30
              -translate-x-1/2
              rounded-full
              border
              border-violet-300/20
              bg-violet-300/[0.06]
              px-7
              py-4
              shadow-[0_0_50px_rgba(139,92,246,.12)]
              backdrop-blur-xl
            "
          >
            <div className="flex items-center gap-3">
              <Cpu
                size={16}
                className="text-violet-300"
              />

              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-200/80">
                Generating grounded tokens
              </span>

              <motion.span
                animate={{
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                }}
                className="text-violet-300"
              >
                →
              </motion.span>
            </div>
          </motion.div>
        )}

        {/* RESPONSE */}
        {phase === "response" && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
            }}
            className="
              absolute
              bottom-6
              left-1/2
              z-30
              w-[calc(100%-48px)]
              max-w-[620px]
              -translate-x-1/2
              rounded-[28px]
              border
              border-violet-300/20
              bg-[#050816]/90
              p-6
              shadow-[0_30px_100px_rgba(139,92,246,.18)]
              backdrop-blur-2xl
            "
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <SparklesIcon
                  size={17}
                  className="text-violet-300"
                />

                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-200/80">
                  Generated Response
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Check
                  size={14}
                  className="text-emerald-300"
                />

                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-emerald-300/70">
                  Grounded
                </span>
              </div>
            </div>

            <p className="mt-4 text-[15px] leading-7 text-white/75">
              {typedResponse}
              <span className="ml-1 animate-pulse text-violet-300">
                |
              </span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BOTTOM TECHNICAL BAR */}
      <div className="pointer-events-none absolute bottom-5 left-7 z-20 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-white/20 lg:block">
        QUERY → EMBEDDING → RETRIEVAL → CONTEXT → LLM → RESPONSE
      </div>

      <div className="pointer-events-none absolute bottom-5 right-7 z-20 hidden font-mono text-[10px] uppercase tracking-[0.18em] text-white/20 lg:block">
        TOP-K 3 · VECTOR SEARCH · 142MS
      </div>
    </>
  );
};

/* =========================================================
   RAG VISUALIZATION
========================================================= */

const RagVisualization = () => {
  const {
    phase,
    typedQuery,
    typedResponse,
  } = useSimulationController();

  return (
    <div
      className="
        group
        relative
        h-[760px]
        overflow-hidden
        rounded-[38px]
        border
        border-cyan-300/[0.12]
        bg-[#02040d]
        shadow-[0_45px_150px_rgba(0,0,0,.6)]
        sm:h-[800px]
        lg:h-[850px]
      "
    >
      {/* GRID */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          opacity-[0.16]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* RADIAL LIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-10
          h-[600px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.025]
          blur-[100px]
        "
      />

      {/* MOVING SCAN */}
      <motion.div
        animate={{
          y: [
            "-20%",
            "120%",
          ],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          z-20
          h-[1px]
          bg-gradient-to-r
          from-transparent
          via-cyan-300/40
          to-transparent
          shadow-[0_0_25px_rgba(34,211,238,.5)]
        "
      />

      {/* CANVAS */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{
            position: [
              0,
              0,
              14,
            ],
            fov: 42,
          }}
          dpr={[1, 1.6]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference:
              "high-performance",
          }}
        >
          <PipelineScene
            phase={phase}
          />
        </Canvas>
      </div>

      <RagHUD
        phase={phase}
        typedQuery={typedQuery}
        typedResponse={
          typedResponse
        }
      />

      {/* CENTER STATUS */}
      <motion.div
        key={phase}
        initial={{
          opacity: 0,
          scale: 0.85,
          y: 10,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[30%]
          z-30
          -translate-x-1/2
          text-center
        "
      >
        <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-white/25">
          {phase === "idle"
            ? "INITIALIZING"
            : phaseMeta[phase]?.label}
        </div>
      </motion.div>

      {/* EDGE GLOW */}
      <motion.div
        animate={{
          opacity: [
            0.15,
            0.65,
            0.15,
          ],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
        }}
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          z-40
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-cyan-300
          to-transparent
          shadow-[0_0_30px_rgba(34,211,238,.6)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[38px]
          border
          border-white/[0.025]
        "
      />
    </div>
  );
};

/* =========================================================
   AI ENGINEERING
========================================================= */

const AIEngineering = () => {
  const capabilities = [
    "RAG",
    "LLMs",
    "Vector Search",
    "AI Agents",
    "LangChain",
    "LangGraph",
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        overflow-hidden
        rounded-[42px]
        border
        border-cyan-300/[0.12]
        bg-[#050816]
        text-white
        shadow-[0_45px_150px_rgba(0,0,0,.55)]
      "
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 70, 0],
            y: [0, -45, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            -top-40
            h-[600px]
            w-[600px]
            rounded-full
            bg-cyan-500/[0.09]
            blur-[140px]
          "
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 35, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-40
            left-[20%]
            h-[550px]
            w-[550px]
            rounded-full
            bg-violet-600/[0.08]
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.06]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />
      </div>

      <div
        className="
          relative
          grid
          gap-12
          p-7
          sm:p-10
          lg:grid-cols-[0.82fr_1.18fr]
          lg:p-12
        "
      >
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-cyan-300/20
                bg-cyan-300/[0.06]
                text-cyan-300
              "
            >
              <Brain size={25} />
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-300/65">
                Primary capability
              </p>

              <h3 className="mt-1 text-xl font-semibold">
                AI Engineering
              </h3>
            </div>
          </div>

          <h4
            className="
              mt-10
              max-w-3xl
              text-[clamp(3.2rem,5vw,5.5rem)]
              font-black
              leading-[0.88]
              tracking-[-0.065em]
            "
          >
            Building software
            <br />
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-transparent">
              that understands.
            </span>
            <br />
            <span className="text-white/25">
              retrieves & acts.
            </span>
          </h4>

          <p className="mt-8 max-w-xl text-[15px] leading-8 text-white/45">
            I build grounded AI systems that
            connect knowledge, retrieval,
            embeddings, language models and
            agent workflows into useful
            products.
          </p>

          <div className="mt-9 flex flex-wrap gap-2.5">
            {capabilities.map(
              (capability, index) => (
                <motion.div
                  key={capability}
                  whileHover={{
                    y: -4,
                    scale: 1.03,
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/[0.08]
                    bg-white/[0.035]
                    px-4
                    py-3
                    transition-all
                    duration-300
                    hover:border-cyan-300/25
                    hover:bg-cyan-300/[0.06]
                  "
                >
                  <span
                    className="
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-cyan-300/10
                      bg-cyan-300/[0.05]
                      text-cyan-300
                    "
                  >
                    <Check size={11} />
                  </span>

                  <span className="font-mono text-[10px] text-white/55">
                    {capability}
                  </span>

                  {index === 0 && (
                    <motion.span
                      animate={{
                        scale: [
                          1,
                          1.5,
                          1,
                        ],
                        opacity: [
                          0.5,
                          1,
                          0.5,
                        ],
                      }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                      }}
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-cyan-300
                        shadow-[0_0_12px_rgba(103,232,249,.9)]
                      "
                    />
                  )}
                </motion.div>
              )
            )}
          </div>

          <div className="mt-9 grid max-w-xl grid-cols-3 gap-2">
            {[
              [
                "01",
                "Retrieve",
              ],
              [
                "02",
                "Augment",
              ],
              [
                "03",
                "Generate",
              ],
            ].map(
              ([number, label]) => (
                <div
                  key={number}
                  className="
                    rounded-2xl
                    border
                    border-white/[0.06]
                    bg-white/[0.02]
                    p-4
                  "
                >
                  <div className="font-mono text-[9px] text-cyan-300/50">
                    {number}
                  </div>

                  <div className="mt-2 text-[12px] font-medium text-white/55">
                    {label}
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="relative">
          <RagVisualization />
        </div>
      </div>

      <motion.div
        animate={{
          opacity: [
            0.25,
            0.9,
            0.25,
          ],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-cyan-300
          to-transparent
        "
      />
    </motion.div>
  );
};

/* =========================================================
   MAIN
========================================================= */

const Technologies = () => {
  const [active, setActive] =
    useState("ai");

  const [mouse, setMouse] =
    useState({
      x: 0,
      y: 0,
    });

  const total = useMemo(
    () =>
      Object.values(
        technologies
      ).reduce(
        (sum, list) =>
          sum + list.length,
        0
      ),
    []
  );

  const selectedCategory =
    categories.find(
      (category) =>
        category.id === active
    );

  const items =
    technologies[active];

  useEffect(() => {
    const handleMouseMove =
      (event) => {
        setMouse({
          x: event.clientX,
          y: event.clientY,
        });
      };

    window.addEventListener(
      "mousemove",
      handleMouseMove,
      {
        passive: true,
      }
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
  }, []);

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
        lg:py-36
      "
    >
      <Background />
      <BackgroundParticles />

      <motion.div
        className="
          pointer-events-none
          fixed
          z-0
          hidden
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.025]
          blur-[130px]
          lg:block
        "
        animate={{
          x: mouse.x,
          y: mouse.y,
        }}
        transition={{
          type: "spring",
          stiffness: 65,
          damping: 25,
          mass: 0.5,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* =================================================
            HEADER
        ================================================= */}

        <header
          className="
            grid
            gap-14
            lg:grid-cols-[1.15fr_.85fr]
            lg:items-end
          "
        >
          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="
                mb-9
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-cyan-300/10
                bg-cyan-300/[0.04]
                px-5
                py-3
                backdrop-blur-xl
              "
            >
              <motion.span
                animate={{
                  scale: [
                    1,
                    1.6,
                    1,
                  ],
                  opacity: [
                    0.5,
                    1,
                    0.5,
                  ],
                }}
                transition={{
                  duration: 1.7,
                  repeat: Infinity,
                }}
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-cyan-300
                  shadow-[0_0_16px_rgba(103,232,249,.9)]
                "
              />

              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-300/70">
                Engineering Stack
              </span>

              <Zap
                size={13}
                className="text-white/20"
              />
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="
                max-w-7xl
                text-[clamp(4.5rem,10vw,9.5rem)]
                font-black
                leading-[0.78]
                tracking-[-0.085em]
              "
            >
              <span className="text-white">
                The tools
              </span>

              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-cyan-200
                  via-blue-300
                  to-violet-300
                  bg-clip-text
                  text-transparent
                "
              >
                behind the
              </span>

              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-zinc-300
                  via-zinc-500
                  to-zinc-800
                  bg-clip-text
                  text-transparent
                "
              >
                work.
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="lg:pb-3"
          >
            <div
              className="
                mb-7
                h-[2px]
                w-20
                bg-gradient-to-r
                from-cyan-300
                to-transparent
              "
            />

            <p
              className="
                max-w-md
                text-[16px]
                leading-8
                text-zinc-500
              "
            >
              A carefully selected engineering
              stack for building modern products —
              from interfaces and APIs to intelligent
              AI systems and production infrastructure.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <div
                className="
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.035]
                  px-5
                  py-4
                  backdrop-blur-xl
                "
              >
                <span className="font-mono text-lg font-semibold text-cyan-300">
                  {total}+
                </span>

                <span className="ml-2 text-[10px] uppercase tracking-[0.16em] text-white/25">
                  technologies
                </span>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.035]
                  px-5
                  py-4
                "
              >
                <span className="font-mono text-lg font-semibold text-white">
                  06
                </span>

                <span className="ml-2 text-[10px] uppercase tracking-[0.16em] text-white/25">
                  layers
                </span>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-cyan-300/10
                  bg-cyan-300/[0.035]
                  px-5
                  py-4
                "
              >
                <span className="font-mono text-lg font-semibold text-cyan-300">
                  AI
                </span>

                <span className="ml-2 text-[10px] uppercase tracking-[0.16em] text-white/25">
                  focused
                </span>
              </div>
            </div>
          </motion.div>
        </header>

        {/* =================================================
            CATEGORY NAV
        ================================================= */}

        <div className="mt-20">
          <CategorySelector
            active={active}
            setActive={setActive}
          />
        </div>

        {/* =================================================
            SELECTED CATEGORY
        ================================================= */}

        <div className="mt-8">
          <motion.div
            layout
            className="
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-6
              shadow-[0_30px_110px_rgba(0,0,0,.3)]
              backdrop-blur-2xl
              sm:p-8
              lg:p-10
            "
          >
            <div
              className="
                absolute
                left-0
                right-0
                top-0
                h-[2px]
                bg-gradient-to-r
                from-transparent
                via-cyan-300/35
                to-transparent
              "
            />

            <div
              className="
                mb-9
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-end
                sm:justify-between
              "
            >
              <div>
                <div
                  className="
                    mb-3
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span className="font-mono text-[10px] tracking-[0.25em] text-cyan-300/50">
                    {selectedCategory.number}
                  </span>

                  <span className="h-[2px] w-8 bg-white/10" />

                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
                    {items.length} tools
                  </span>
                </div>

                <AnimatePresence
                  mode="wait"
                >
                  <motion.h2
                    key={active}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="
                      text-4xl
                      font-black
                      tracking-[-0.055em]
                      text-white
                      sm:text-5xl
                    "
                  >
                    {selectedCategory.title}
                  </motion.h2>
                </AnimatePresence>

                <p className="mt-2 text-sm text-zinc-600">
                  {selectedCategory.description}
                </p>
              </div>

              <div
                className="
                  flex
                  w-fit
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-emerald-400/10
                  bg-emerald-400/[0.035]
                  px-4
                  py-2.5
                "
              >
                <motion.span
                  animate={{
                    scale: [
                      1,
                      1.5,
                      1,
                    ],
                    opacity: [
                      0.5,
                      1,
                      0.5,
                    ],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                  }}
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-emerald-400
                    shadow-[0_0_14px_rgba(52,211,153,.8)]
                  "
                />

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-300/50">
                  Active layer
                </span>
              </div>
            </div>

            <AnimatePresence
              mode="wait"
            >
              <motion.div
                key={active}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="
                  grid
                  gap-3
                  sm:grid-cols-2
                  lg:grid-cols-4
                "
              >
                {items.map(
                  (
                    item,
                    index
                  ) => (
                    <TechnologyCard
                      key={
                        item[0]
                      }
                      item={item}
                      index={
                        index
                      }
                    />
                  )
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* =================================================
            AI ENGINEERING
        ================================================= */}

        <div className="mt-8">
          <AIEngineering />
        </div>

        {/* =================================================
            PRINCIPLES
        ================================================= */}

        <div
          className="
            mt-8
            grid
            gap-4
            sm:grid-cols-3
          "
        >
          {[
            [
              "01 / BUILD",
              "Product first.",
              "Technology serves the product, not the other way around.",
            ],
            [
              "02 / LEARN",
              "Always evolving.",
              "The stack changes as better tools and ideas emerge.",
            ],
            [
              "03 / SHIP",
              "Built for production.",
              "From local development to real users and real systems.",
            ],
          ].map(
            (
              [
                label,
                title,
                description,
              ],
              index
            ) => (
              <motion.div
                key={label}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay:
                    index * 0.08,
                }}
                whileHover={{
                  y: -7,
                }}
                className="
                  group
                  rounded-[30px]
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  p-7
                  transition-all
                  duration-300
                  hover:border-cyan-300/15
                  hover:bg-white/[0.04]
                  hover:shadow-[0_25px_70px_rgba(0,0,0,.25)]
                "
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300/30 transition-colors group-hover:text-cyan-300/60">
                  {label}
                </span>

                <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-white">
                  {title}
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-zinc-600">
                  {description}
                </p>
              </motion.div>
            )
          )}
        </div>

        {/* =================================================
            FOOTER
        ================================================= */}

        <footer
          className="
            mt-14
            flex
            flex-col
            gap-3
            border-t
            border-white/[0.07]
            pt-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/20">
            Always learning. Always building.
          </p>

          <div className="flex items-center gap-3">
            <motion.span
              animate={{
                scale: [
                  1,
                  1.5,
                  1,
                ],
                opacity: [
                  0.5,
                  1,
                  0.5,
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="
                h-2
                w-2
                rounded-full
                bg-cyan-300
                shadow-[0_0_12px_rgba(103,232,249,.8)]
              "
            />

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
              Stack evolving
            </span>
          </div>
        </footer>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        canvas {
          display: block;
        }
      `}</style>
    </section>
  );
};

export default Technologies;