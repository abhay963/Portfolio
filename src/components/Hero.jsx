import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Terminal,
  Circle,
  Sparkles,
  Code2,
  Cpu,
  Globe,
  Bot,
} from "lucide-react";

const Hero = () => {
  const jsonContent = `{
  "developer": "Abhay",
  "building": "Intelligent Software",
  "specialty": "Full-Stack & AI Engineering",
  "tools": ["C++", "React", "Python", "LangChain", "LangGraph", "MERN"],
  "availability": "Let's Collaborate"
}`;

  const [typedJson, setTypedJson] = useState("");

  /* ================= JSON TYPING EFFECT ================= */
  useEffect(() => {
    let index = 0;
    let interval;
    let timeout;

    const startTyping = () => {
      interval = setInterval(() => {
        setTypedJson(jsonContent.substring(0, index));
        index++;

        if (index > jsonContent.length) {
          clearInterval(interval);
          timeout = setTimeout(() => {
            index = 0;
            setTypedJson("");
            startTyping();
          }, 3500);
        }
      }, 25);
    };

    startTyping();

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  /* ================= RICH SYNTAX HIGHLIGHTING ================= */
  const renderJson = () => {
    const lines = typedJson.split("\n");

    return lines.map((line, idx) => {
      const keyMatch = line.match(/^(\s*)"([^"]+)":\s*(.*)$/);

      if (keyMatch) {
        const [, spacing, key, value] = keyMatch;

        let formattedValue = value;

        if (value.startsWith('"') && value.endsWith('"')) {
          formattedValue = (
            <span className="font-mono text-emerald-300">
              {value}
            </span>
          );
        } else if (value.startsWith("[")) {
          formattedValue = (
            <span className="text-amber-300">{value}</span>
          );
        } else {
          formattedValue = (
            <span className="font-mono text-purple-300">
              {value}
            </span>
          );
        }

        return (
          <div
            key={idx}
            className="group/line grid grid-cols-[32px_minmax(0,1fr)] gap-3 rounded px-2 py-0.5 transition-colors hover:bg-white/[0.02]"
          >
            <span className="select-none font-mono text-[11px] leading-6 text-zinc-600 group-hover/line:text-zinc-400 text-right">
              {idx + 1}
            </span>

            <div className="min-w-0 whitespace-pre-wrap break-words font-mono text-[12px] leading-6 sm:text-[13px]">
              <span className="text-zinc-500">{spacing}"</span>
              <span className="font-semibold text-cyan-300">
                {key}
              </span>
              <span className="text-zinc-400">": </span>
              {formattedValue}
            </div>
          </div>
        );
      }

      return (
        <div
          key={idx}
          className="group/line grid grid-cols-[32px_minmax(0,1fr)] gap-3 rounded px-2 py-0.5 transition-colors hover:bg-white/[0.02]"
        >
          <span className="select-none font-mono text-[11px] leading-6 text-zinc-600 group-hover/line:text-zinc-400 text-right">
            {idx + 1}
          </span>

          <div className="min-w-0 whitespace-pre-wrap break-words font-mono text-[12px] leading-6 text-zinc-300 sm:text-[13px]">
            {line}
          </div>
        </div>
      );
    });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#030014] text-white selection:bg-cyan-500/30 selection:text-cyan-200">

      {/* ================= BACKGROUND GRAPHICS ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-cyan-600/20 to-blue-600/10 blur-[140px]" />

        <div className="absolute bottom-1/4 right-1/4 h-[550px] w-[550px] translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-bl from-purple-600/20 to-indigo-600/10 blur-[160px]" />

        <div className="absolute top-0 left-1/2 h-px w-3/4 max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-6 pt-28 pb-24 sm:px-10 lg:flex-row lg:gap-20 lg:pt-32 lg:pb-28 xl:gap-24">

        {/* ================= LEFT SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex-1 text-center lg:text-left"
        >

          {/* MAIN HEADINGS */}
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:leading-[1.05]">
            <span className="mb-4 block text-2xl font-medium tracking-normal text-zinc-400 sm:text-3xl">
              Hello, I'm
            </span>

            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Abhay Kumar
            </span>{" "}

            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(34,211,238,0.2)]">
              Yadav
            </span>
          </h1>

          {/* SUBTITLE & BRIEF SUMMARY */}
          <div className="mt-6 space-y-4">
          

            <p className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base lg:mx-0">
              Crafting autonomous multi-agent workflows, enterprise RAG pipelines with pgvector, and high-performance full-stack web applications. 
            </p>
          </div>

          {/* CTAS */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5 lg:justify-start">

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                window.open("mailto:abhayyadav96312@gmail.com", "_blank")
              }
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 p-[1px] shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-shadow hover:shadow-[0_0_50px_rgba(34,211,238,0.5)]"
            >
              <div className="flex items-center gap-2 rounded-[11px] bg-[#07070d] px-7 py-4 text-sm font-semibold text-white transition-colors group-hover:bg-transparent">
                <span>Let's Build Together</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-zinc-200 backdrop-blur-xl transition-all hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-white"
            >
              <span>Download Resume</span>
              <Download size={18} />
            </motion.a>
          </div>

          {/* KEY SKILLS BADGES */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-5 border-t border-white/10 pt-8 lg:justify-start">
            <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
              <Bot className="h-4 w-4 text-cyan-400" />
              <span>Multi-Agent Workflows</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
              <Cpu className="h-4 w-4 text-purple-400" />
              <span>RAG Pipelines</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
              <Globe className="h-4 w-4 text-blue-400" />
              <span>Full-Stack AI Solutions</span>
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative w-full max-w-[550px] flex-1 lg:mt-8"
        >

          {/* TERMINAL GLOW FRAME */}
          <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-xl opacity-70" />

          {/* TERMINAL CONTAINER */}
          <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#080811]/90 shadow-[0_20px_80px_rgba(0,0,0,0.8)] backdrop-blur-2xl">

            {/* TOP BAR */}
            <div className="flex h-12 items-center justify-between border-b border-white/10 bg-white/[0.02] px-4">

              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>

              <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-1">
                <Terminal size={12} className="text-cyan-400" />
                <span className="font-mono text-xs font-medium text-zinc-300">
                  agent_profile.json
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <Circle
                  size={6}
                  fill="currentColor"
                  className="animate-pulse text-emerald-400"
                />
                <span className="font-mono text-[10px] tracking-wider text-zinc-500">
                  LIVE
                </span>
              </div>
            </div>

            {/* TERMINAL BODY */}
            <div className="relative min-h-[330px] p-5 font-mono sm:p-6">

              <div className="pointer-events-none absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600" />

              <div className="relative z-10">
                {renderJson()}

                <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-cyan-400" />
              </div>
            </div>

            {/* TERMINAL FOOTER */}
            <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-4 py-3 font-mono text-[10px] text-zinc-500">
              <span className="flex items-center gap-1">
                <Sparkles size={12} className="text-cyan-400" />
                LangGraph Engine
              </span>
              <span>JSON | UTF-8</span>
            </div>
          </div>

          {/* FLOATING BADGE */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-7 -left-2 rounded-xl border border-white/10 bg-[#090912]/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:-left-7"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
                <Code2 size={18} />
              </div>

              <div>
                <p className="font-mono text-xs font-bold text-white">
                  LangChain & LangGraph
                </p>
                <p className="mt-1 text-[10px] text-zinc-400">
                  Agentic RAG Pipelines
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;