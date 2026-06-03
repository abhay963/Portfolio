import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const VIRTUAL_THREADS = [
  { core: "CORE_0", task: "sys::mount_kernel_ax_os" },
  { core: "CORE_1", task: "crypto::handshake_tls_tls1_3" },
  { core: "CORE_0", task: "gl::init_hardware_acceleration" },
  { core: "CORE_2", task: "wasm::instantiate_v8_modules" },
  { core: "CORE_1", task: "three::compile_compiled_shaders" },
  { core: "CORE_3", task: "db::shard_handshake_cluster_0" },
  { core: "CORE_2", task: "ai::hydrate_neural_weights_r6" },
  { core: "CORE_0", task: "sys::verify_integrity_hashes" },
  { core: "CORE_3", task: "runtime::jit_optimize_portfolio" },
  { core: "CORE_1", task: "sys::mainframe_ready_signal" }
];

export default function DeepspaceMainframeLoader() {
  const [threads, setThreads] = useState([]);
  const [threadIdx, setThreadIdx] = useState(0);
  const [sectors, setSectors] = useState([]);
  const [sysMetrics, setSysMetrics] = useState({ hz: "942.10", latency: "0.00" });
  
  const backgroundCanvasRef = useRef(null);

  // 1. Memory Sector Map Mock Generation (Static Layout, Dynamic Mutation)
  useEffect(() => {
    const totalSectors = 48;
    const initialSectors = Array.from({ length: totalSectors }, () => ({
      status: Math.random() > 0.6 ? "empty" : "read",
      hex: Math.floor(Math.random() * 255).toString(16).toUpperCase().padStart(2, "0")
    }));
    setSectors(initialSectors);

    const sectorInterval = setInterval(() => {
      setSectors(prev => prev.map(sector => {
        const rand = Math.random();
        if (rand > 0.85) return { ...sector, status: "write" };
        if (rand > 0.70) return { ...sector, status: "read" };
        if (rand > 0.60) return { ...sector, status: "empty" };
        return sector;
      }));
    }, 90);

    return () => clearInterval(sectorInterval);
  }, []);

  // 2. Self-Organizing Background Neural Mesh (Advanced Vector Field Canvas)
  useEffect(() => {
    const canvas = backgroundCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Node particle array
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2 + 1
    }));

    let animId;
    const renderField = () => {
      ctx.fillStyle = "rgba(4, 5, 12, 0.25)"; // High persistence trailing frame
      ctx.fillRect(0, 0, width, height);

      // Render & connect tracking mesh points
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        // Vector bounce containment
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(6, 182, 212, 0.4)";
        ctx.fill();

        // Connect vectors across threshold parameters
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      animId = requestAnimationFrame(renderField);
    };

    renderField();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 3. Spawning Multi-Thread Operational Stream Async Timeline
  useEffect(() => {
    if (threadIdx < VIRTUAL_THREADS.length) {
      const msDelay = Math.random() * 180 + 70;
      const timer = setTimeout(() => {
        setThreads(prev => [...prev, VIRTUAL_THREADS[threadIdx]].slice(-5));
        setThreadIdx(prev => prev + 1);
      }, msDelay);
      return () => clearTimeout(timer);
    }
  }, [threadIdx]);

  // 4. Telemetry Precision Frequency Calculator
  useEffect(() => {
    const telemetryInterval = setInterval(() => {
      setSysMetrics({
        hz: (940 + Math.random() * 8).toFixed(2),
        latency: (0.12 + Math.random() * 0.08).toFixed(3)
      });
    }, 200);
    return () => clearInterval(telemetryInterval);
  }, []);

  return (
    <motion.div
      exit={{ 
        opacity: 0,
        clipPath: "polygon(50% 0%, 50% 100%, 50% 100%, 50% 0%)", // Advanced vertical spatial compression horizon collapse
      }}
      transition={{ duration: 0.65, ease: [0.85, 0, 0.15, 1] }}
      className="fixed inset-0 z-[9999] bg-[#030408] text-slate-300 font-mono overflow-hidden p-6 select-none flex flex-col justify-between"
    >
      {/* Structural Vector Space Layer */}
      <canvas ref={backgroundCanvasRef} className="absolute inset-0 z-0 opacity-60 pointer-events-none" />

      {/* Cyber Frame Grid Overlay */}
      <div className="absolute inset-0 z-40 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_6px] pointer-events-none opacity-50" />

      {/* HUD HEADER SYSTEMS STATS */}
      <div className="z-10 w-full flex flex-wrap justify-between items-start gap-4 border-b border-cyan-500/10 pb-5 text-[10px] tracking-wider text-cyan-500/40">
        <div className="flex items-center gap-6">
          <div>
            <span className="text-cyan-400">SYS_IDENT::</span>
            <span className="text-white font-bold tracking-widest">AK_MAINFRAME_V3</span>
          </div>
          <div>STATUS: <span className="text-emerald-400 animate-pulse font-bold">MUTATING_EXECUTION</span></div>
        </div>
        <div className="flex gap-8 text-right">
          <div>FREQ_BUS: <span className="text-violet-400 font-bold">{sysMetrics.hz} GHz</span></div>
          <div>CORE_LATENCY: <span className="text-fuchsia-400 font-bold">{sysMetrics.latency} ms</span></div>
        </div>
      </div>

      {/* MIDSECTION ENGINE: BALANCED DUAL MODULE PANELS */}
      <div className="z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto items-center">
        
        {/* LEFT LOGO MODULE: SUB-PANEL (4 COLS) */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
          <div className="relative inline-block group">
            {/* Multi-frequency chromatic shifts */}
            <div className="absolute top-[2px] left-[-3px] text-9xl font-black text-rose-500/20 tracking-tighter uppercase mix-blend-screen animate-[glitch_2s_infinite_linear_alternate-reverse]">AK</div>
            <div className="absolute top-[-3px] left-[2px] text-9xl font-black text-cyan-400/20 tracking-tighter uppercase mix-blend-screen animate-[glitch_1s_infinite_linear]">AK</div>
            <h1 className="text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-white via-slate-200 to-slate-500 relative uppercase drop-shadow-[0_0_40px_rgba(139,92,246,0.25)]">
              AK
            </h1>
          </div>
          <div className="text-[9px] tracking-[0.5em] text-violet-400/60 uppercase pl-1 font-bold">
            Virtualization Architecture initialized
          </div>
        </div>

        {/* MIDDLE LOG PANEL: WORKER LOG THREADS (5 COLS) */}
        <div className="lg:col-span-5 w-full bg-black/60 border border-slate-800 backdrop-blur-md p-4 rounded h-56 flex flex-col justify-end gap-1.5 shadow-2xl relative">
          <div className="absolute top-2 left-3 text-[8px] text-slate-600 tracking-widest font-bold">ASYNC_THREAD_STREAM</div>
          <div className="absolute top-2 right-3 flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[8px] text-cyan-500/50 font-bold">STDOUT</span>
          </div>

          <AnimatePresence mode="popLayout">
            {threads.map((t, idx) => (
              <motion.div
                key={t.task}
                initial={{ opacity: 0, x: -10, y: 5 }}
                animate={{ opacity: idx === threads.length - 1 ? 1 : 0.25, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.12 }}
                className={`text-[11px] md:text-xs font-semibold font-mono ${
                  idx === threads.length - 1 ? "text-cyan-400" : "text-slate-500"
                }`}
              >
                <span className="text-violet-500/70 mr-1.5">[{t.core}]</span>
                <span className="text-slate-600 mr-2">~#</span>
                {t.task}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* RIGHT MODULE PANEL: SECTOR FRAGMENTATION MATRIX (3 COLS) */}
        <div className="lg:col-span-3 w-full bg-black/40 border border-slate-900 backdrop-blur-sm p-4 rounded h-56 flex flex-col justify-between">
          <div className="text-[8px] text-slate-600 tracking-widest font-bold">CORE_ALLOCATION_MAP</div>
          
          {/* Hex fragmentation grids */}
          <div className="grid grid-cols-6 gap-1 my-auto">
            {sectors.map((sec, idx) => (
              <div
                key={idx}
                className={`text-[8px] font-mono text-center p-[2px] transition-colors duration-200 rounded-[1px] font-bold ${
                  sec.status === "write" ? "bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/30" :
                  sec.status === "read" ? "bg-cyan-500/10 text-cyan-400/80" :
                  "bg-slate-950 text-slate-800 border border-slate-900/50"
                }`}
              >
                {sec.hex}
              </div>
            ))}
          </div>

          <div className="flex justify-between text-[8px] text-slate-500">
            <span className="flex items-center gap-1"><span className="w-1 h-1 bg-fuchsia-500 rounded-full" /> WRITE</span>
            <span className="flex items-center gap-1"><span className="w-1 h-1 bg-cyan-400 rounded-full" /> READ</span>
            <span className="flex items-center gap-1"><span className="w-1 h-1 bg-slate-800 rounded-full" /> EMPTY</span>
          </div>
        </div>

      </div>

      {/* FOOTER SYSTEM PROCESS FLOW BAR */}
      <div className="z-10 w-full flex flex-col gap-2.5 max-w-5xl mx-auto border-t border-slate-900 pt-5">
        <div className="flex justify-between items-center text-[9px] tracking-wider text-slate-500">
          <div className="flex items-center gap-2 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>SEQUENCING TARGET PACKETS INTO MEMORY LAYER...</span>
          </div>
          <div className="font-mono text-cyan-500/60">0x3A0FF98A2F2B</div>
        </div>

        {/* Customized segment progress block */}
        <div className="relative w-full h-2.5 bg-slate-950 rounded overflow-hidden p-[1px] border border-slate-900">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-500 rounded-sm"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 5,
              ease: [0.76, 0, 0.24, 1], // Custom slow ramp cubic-bezier for intense loading simulation
            }}
          />
          {/* Segment matrix block intersections mask */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_85%,#030408_85%)] bg-[length:10px_100%] pointer-events-none" />
        </div>
      </div>

      {/* Advanced Glitch Vectors Matrix */}
      <style>{`
        @keyframes glitch {
          0% { clip-path: inset(12% 0 71% 0); transform: scaleY(0.98) skewX(1deg); }
          15% { clip-path: inset(85% 0 2% 0); transform: scaleY(1.02) skewX(-2deg); }
          30% { clip-path: inset(5% 0 88% 0); transform: scaleY(1) skewX(0deg); }
          45% { clip-path: inset(62% 0 11% 0); transform: scaleY(0.95) skewX(2deg); }
          60% { clip-path: inset(23% 0 54% 0); transform: scaleY(1.05) skewX(-1deg); }
          85% { clip-path: inset(78% 0 3% 0); transform: scaleY(0.97) skewX(0.5deg); }
          100% { clip-path: inset(41% 0 49% 0); transform: scaleY(1) skewX(-0.5deg); }
        }
      `}</style>
    </motion.div>
  );
}