import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Download,
  Sparkles,
  Terminal,
  Circle,
} from "lucide-react";

const Hero = () => {
  /* ================= JSON ================= */

  const jsonContent = `{
  "name": "Abhay Kumar Yadav",
  "role": "Agentic AI Developer",
  "focus": "RAG & Multi-Agent Systems",
  "stack": ["React", "Node", "LangChain", "LangGraph"],
  "status": "Open to Work"
}`;

  const [typedJson, setTypedJson] = useState("");

  /* ================= JSON TYPING ================= */

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
          }, 2200);
        }
      }, 28);
    };

    startTyping();

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  /* ================= JSON SYNTAX ================= */

  const renderJson = () => {
    const lines = typedJson.split("\n");

    return lines.map((line, index) => {
      const keyMatch = line.match(/^(\s*)"([^"]+)":\s*(.*)$/);

      let content = line;

      if (keyMatch) {
        const [, spacing, key, value] = keyMatch;

        return (
          <div
            key={index}
            className="grid grid-cols-[28px_minmax(0,1fr)] gap-3"
          >
            <span className="select-none text-right text-[10px] leading-7 text-zinc-700 sm:text-[11px]">
              {index + 1}
            </span>

            <div className="min-w-0 whitespace-pre-wrap break-words leading-7">
              <span className="text-zinc-400">{spacing}"</span>

              <span className="text-cyan-300">{key}</span>

              <span className="text-zinc-500">": </span>

              <span className="break-words text-purple-300">
                {value}
              </span>
            </div>
          </div>
        );
      }

      return (
        <div
          key={index}
          className="grid grid-cols-[28px_minmax(0,1fr)] gap-3"
        >
          <span className="select-none text-right text-[10px] leading-7 text-zinc-700 sm:text-[11px]">
            {index + 1}
          </span>

          <div className="min-w-0 whitespace-pre-wrap break-words leading-7 text-cyan-100">
            {content}
          </div>
        </div>
      );
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030014] text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 overflow-hidden">

        {/* GRID */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),
            linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]
            bg-[size:55px_55px]
          "
        />

        {/* CYAN GLOW */}
        <div
          className="
            absolute
            left-[-12%]
            top-[-12%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-500/10
            blur-[130px]
          "
        />

        {/* PURPLE GLOW */}
        <div
          className="
            absolute
            bottom-[-12%]
            right-[-12%]
            h-[460px]
            w-[460px]
            rounded-full
            bg-[#915EFF]/15
            blur-[140px]
          "
        />

        {/* SMALL AMBIENT GLOW */}
        <div
          className="
            absolute
            left-[45%]
            top-[35%]
            h-[250px]
            w-[250px]
            rounded-full
            bg-blue-500/5
            blur-[110px]
          "
        />

        {/* PARTICLES */}
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="
              absolute
              h-[2px]
              w-[2px]
              rounded-full
              bg-cyan-300/50
              animate-pulse
            "
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 61) % 100}%`,
              animationDelay: `${i * 150}ms`,
            }}
          />
        ))}
      </div>

      {/* ================= MAIN ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          flex-col
          items-center
          justify-center
          gap-14
          px-6
          py-24
          lg:flex-row
          lg:gap-20
        "
      >

        {/* ================= LEFT ================= */}

        <div className="flex-1 text-center lg:text-left">

          {/* PREMIUM AVAILABILITY */}

         <div
  className="
    mb-7
    inline-flex
    items-center
    gap-3
    border-l-2
    border-cyan-400/70
    pl-4
  "
>
  <span
    className="
      text-[10px]
      font-semibold
      uppercase
      tracking-[0.22em]
      text-cyan-300
      sm:text-[11px]
    "
  >
    Available for opportunities
  </span>

  <span className="h-px w-8 bg-gradient-to-r from-cyan-400/60 to-transparent" />


</div>

          {/* HEADING */}

          <h1
            className="
              text-5xl
              font-black
              leading-[0.95]
              tracking-[-3px]
              sm:text-6xl
              md:text-7xl
            "
          >
            <span
              className="
                mb-3
                block
                text-2xl
                font-medium
                tracking-tight
                text-zinc-500
                sm:text-3xl
                md:text-4xl
              "
            >
              Hi, I'm
            </span>

            <span
              className="
                bg-gradient-to-r
                from-white
                via-zinc-200
                to-zinc-500
                bg-clip-text
                text-transparent
              "
            >
              Abhay
            </span>{" "}

            <span
              className="
                bg-gradient-to-r
                from-zinc-300
                via-zinc-500
                to-zinc-700
                bg-clip-text
                text-transparent
              "
            >
              Kumar Yadav
            </span>
          </h1>

          <div
  className="
    mt-7
    flex
    items-center
    justify-center
    gap-3
    lg:justify-start
  "
>
  <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400/60" />

  <p
    className="
      font-mono
      text-sm
      font-medium
      tracking-[0.18em]
      text-cyan-300
      sm:text-base
    "
  >
    Agentic AI Developer
  </p>

  <span className="h-px w-12 bg-gradient-to-r from-cyan-400/60 to-transparent" />
</div>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-5
              max-w-md
              text-sm
              leading-7
              text-zinc-400
              lg:mx-0
            "
          >
            Building intelligent applications with RAG,
            multi-agent systems, and modern full-stack technologies.
          </p>

          {/* BUTTONS */}

          <div
            className="
              mt-9
              flex
              flex-wrap
              items-center
              justify-center
              gap-4
              lg:justify-start
            "
          >

            {/* CONTACT */}

            <button
              onClick={() =>
                window.open(
                  "mailto:abhayyadav96312@gmail.com",
                  "_blank"
                )
              }
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-[0_0_40px_rgba(34,211,238,0.25)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_0_50px_rgba(34,211,238,0.35)]
                sm:px-7
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  translate-x-[-100%]
                  bg-white/20
                  transition-transform
                  duration-1000
                  group-hover:translate-x-[100%]
                "
              />

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
              <button
                className="
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.035]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-zinc-200
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/5
                  sm:px-7
                "
              >
                <span className="flex items-center gap-2">
                  Resume
                  <Download
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </span>
              </button>
            </a>

          </div>
        </div>

        {/* ================= RIGHT ================= */}

        <div
          className="
            relative
            flex
            w-full
            flex-1
            items-center
            justify-center
          "
        >

          {/* OUTER GLOW */}

          <div
            className="
              absolute
              h-[380px]
              w-[380px]
              rounded-full
              bg-cyan-500/10
              blur-[120px]
            "
          />

          {/* ================= CODE WINDOW ================= */}

          <div
            className="
              relative
              w-full
              max-w-[560px]
              overflow-hidden
              rounded-[26px]
              border
              border-white/[0.09]
              bg-[#07070c]/95
              shadow-[0_30px_100px_rgba(0,0,0,0.55)]
              backdrop-blur-2xl
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-cyan-400/20
              hover:shadow-[0_30px_100px_rgba(34,211,238,0.08)]
            "
          >

            {/* TOP BAR */}

            <div
              className="
                flex
                h-[58px]
                items-center
                justify-between
                border-b
                border-white/[0.07]
                bg-white/[0.018]
                px-5
              "
            >

              {/* MAC BUTTONS */}

              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
              </div>

              {/* FILE NAME */}

              <div
                className="
                  absolute
                  left-1/2
                  flex
                  -translate-x-1/2
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-white/[0.06]
                  bg-white/[0.025]
                  px-3
                  py-1.5
                "
              >
                <Terminal
                  size={12}
                  className="text-cyan-400"
                />

                <span
                  className="
                    font-mono
                    text-[10px]
                    tracking-[0.12em]
                    text-zinc-400
                    sm:text-[11px]
                  "
                >
                  developer.json
                </span>
              </div>

              {/* STATUS */}

              <div className="flex items-center gap-2">
                <Circle
                  size={7}
                  fill="currentColor"
                  className="text-cyan-400"
                />

                <span className="hidden font-mono text-[9px] text-zinc-600 sm:block">
                  LIVE
                </span>
              </div>
            </div>

            {/* CODE AREA */}

            <div
              className="
                relative
                min-h-[320px]
                overflow-hidden
                bg-[#050508]
                px-4
                py-6
                sm:min-h-[350px]
                sm:px-6
                sm:py-7
              "
            >

              {/* LEFT ACCENT */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  w-[2px]
                  bg-gradient-to-b
                  from-cyan-400
                  via-blue-500
                  to-purple-500
                "
              />

              {/* CODE GLOW */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.07),transparent_38%)]
                "
              />

              {/* SECONDARY GRID */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-30
                  bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),
                  linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)]
                  bg-[size:32px_32px]
                "
              />

              {/* CODE */}

              <div
                className="
                  relative
                  z-10
                  min-w-0
                  overflow-hidden
                  font-mono
                  text-[12px]
                  sm:text-[13px]
                "
              >
                {renderJson()}

                {/* CURSOR */}

                <div
                  className="
                    mt-1
                    ml-[40px]
                    h-4
                    w-[2px]
                    animate-pulse
                    bg-cyan-400
                  "
                />
              </div>
            </div>

            {/* FOOTER */}

            <div
              className="
                flex
                items-center
                justify-between
                border-t
                border-white/[0.06]
                bg-white/[0.018]
                px-5
                py-3
              "
            >
              <span className="font-mono text-[9px] text-zinc-600">
                UTF-8
              </span>

              <span className="font-mono text-[9px] text-zinc-600">
                JSON
              </span>

              <span className="font-mono text-[9px] text-cyan-400/60">
                READY
              </span>
            </div>

            {/* BOTTOM LIGHT */}

            <div
              className="
                absolute
                bottom-0
                left-1/2
                h-[1px]
                w-2/3
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-cyan-400/70
                to-transparent
              "
            />
          </div>

          {/* ================= FLOATING LABEL ================= */}

          <div
            className="
              absolute
              -bottom-6
              left-2
              rounded-2xl
              border
              border-white/[0.08]
              bg-[#08080d]/80
              px-4
              py-3
              shadow-[0_15px_40px_rgba(0,0,0,0.35)]
              backdrop-blur-xl
              sm:left-6
            "
          >
            <p className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
              <span className="text-cyan-400">&gt;</span>

              <span>
                building_ai
                <span className="text-zinc-600">()</span>
              </span>

              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;