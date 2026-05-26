// src/components/Hero.jsx

import { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { ArrowUpRight, Download } from "lucide-react";

const Hero = () => {

  /* ================= TYPEWRITER ================= */

  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "React Engineer",
      "AI Enthusiast",
      
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 10,
  });

  /* ================= JSON ================= */

  const jsonContent = `{
  "name": "Abhay",
  "role": "Full Stack Dev",
  "stack": ["React", "Next", "Node],
  "focus": "AI + Vibe Coding",
  "status": "Available"
}`;

  const [typedJson, setTypedJson] = useState("");

  /* ================= JSON TYPING ================= */

  useEffect(() => {

    let index = 0;

    const startTyping = () => {

      const interval = setInterval(() => {

        setTypedJson(jsonContent.substring(0, index));

        index++;

        if (index > jsonContent.length) {

          clearInterval(interval);

          setTimeout(() => {

            index = 0;
            setTypedJson("");

            startTyping();

          }, 1800);
        }

      }, 30);
    };

    startTyping();

  }, []);

  return (

    <section className="relative min-h-screen overflow-hidden bg-[#030014] text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 overflow-hidden">

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:55px_55px]" />

        {/* GLOW */}
        <div className="absolute top-[-10%] left-[-10%] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-[#915EFF]/15 blur-[130px]" />

        {/* PARTICLES */}
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-cyan-300/60 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* ================= MAIN ================= */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-6 py-24 lg:flex-row">

        {/* ================= LEFT ================= */}

        <div className="flex-1 text-center lg:text-left">

          {/* BADGE */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 backdrop-blur-xl">

            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-cyan-300">
              AVAILABLE FOR WORK
            </p>
          </div>

          {/* HEADING */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-[-3px]">

  <span className="block text-zinc-500 text-2xl sm:text-3xl md:text-4xl font-medium mb-3">
    Hi, I'm
  </span>

  <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
    Abhay
  </span>{" "}

  <span className="bg-gradient-to-r from-zinc-300 via-zinc-500 to-zinc-700 bg-clip-text text-transparent">
    Kumar Yadav
  </span>

</h1>

          {/* TYPEWRITER */}
          <div className="mt-6 flex items-center justify-center gap-2 lg:justify-start">

            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

            <p className="font-mono text-base sm:text-lg text-zinc-300">

              {text}

              <Cursor cursorColor="#22d3ee" />
            </p>
          </div>

          {/* SHORT DESC */}
          <p className="mt-5 max-w-md mx-auto text-sm leading-7 text-zinc-400 lg:mx-0">
            Modern web apps, immersive UI, and scalable AI experiences.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">

            {/* BUTTON */}
            <button
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 sm:px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(34,211,238,0.35)] transition-all duration-300 hover:scale-105"
              onClick={() =>
                window.open("mailto:abhayyadav96312@gmail.com", "_blank")
              }
            >

              <div className="absolute inset-0 translate-x-[-100%] bg-white/20 transition-transform duration-1000 group-hover:translate-x-[100%]" />

              <span className="relative flex items-center gap-2">
                Let's Talk
                <ArrowUpRight size={18} />
              </span>
            </button>

            {/* RESUME */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >

              <button className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 sm:px-7 py-3.5 text-sm font-semibold text-zinc-200 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10">

                <span className="flex items-center gap-2">
                  Resume
                  <Download size={18} />
                </span>
              </button>
            </a>
          </div>
        </div>

        {/* ================= RIGHT ================= */}

        <div className="relative flex flex-1 items-center justify-center w-full">

          {/* GLOW */}
          <div className="absolute h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

          {/* CARD */}
          <div className="relative w-full max-w-[520px] overflow-hidden rounded-[30px] border border-white/10 bg-black/70 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,255,255,0.08)] transition-all duration-500 hover:-translate-y-2">

            {/* TOPBAR */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-black/80 px-5 py-4">

              <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <div className="h-3 w-3 rounded-full bg-[#27c93f]" />

              <p className="ml-4 text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-zinc-500">
                developer.json
              </p>
            </div>

            {/* CONTENT */}
            <div className="relative min-h-[280px] sm:min-h-[320px] overflow-hidden bg-black/90 p-6 sm:p-8">

              {/* SIDE GLOW */}
              <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500" />

              {/* TERMINAL GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.06),transparent_40%)]" />

              {/* JSON */}
              <pre className="relative z-10 whitespace-pre-wrap break-words font-mono text-[13px] sm:text-[15px] leading-7 sm:leading-8 text-[#7dd3fc]">

                {typedJson}

                <span className="animate-pulse text-cyan-300">|</span>

              </pre>
            </div>

            {/* BOTTOM GLOW */}
            <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </div>

          {/* FLOATING STATUS */}
          <div className="absolute -bottom-5 left-0 sm:left-4 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-xl">

            <p className="font-mono text-[11px] sm:text-xs text-zinc-300">

              <span className="text-cyan-400">&gt;</span> System Online

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;