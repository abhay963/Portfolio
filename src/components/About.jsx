

import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn, textVariant, staggerContainer } from "../utils/motion";
import profilePic from "../assets/abhay.jpg";

// --- Professional Modern Icons (Lucide Style) ---
const Code2Icon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
);
const DatabaseZapIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M12 12v9"/></svg>
);
const CpuIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 14h3"/><path d="M1 9h3"/><path d="M1 14h3"/></svg>
);
const RocketIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
);
const TerminalIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>
);
const SparklesIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
);

const About = () => {
  return (
    <section className="relative w-full min-h-screen py-20 mx-auto overflow-hidden flex items-center justify-center">
     
      {/* --- Ambient Background Effects --- */}
      <div className="absolute inset-0 -z-10 bg-slate-950">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
       
        {/* Glowing Orbs */}
        <motion.div
          animate={{ y: [0, -50, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ y: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-cyan-600/20 rounded-full blur-[120px]"
        />
      </div>

      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 w-full"
      >
        {/* Section Header */}
        <motion.div variants={textVariant()} className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse" />
            <p className="text-cyan-300 text-xs font-bold tracking-[0.2em] uppercase">Overview</p>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Architecting the <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Future Web
            </span>
          </h2>
        </motion.div>

        {/* --- Bento Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
         
          {/* 1. Profile Card (Spans 2 rows on desktop) */}
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="md:row-span-2 relative group rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-xl"
          >
            {/* Decorative Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90 z-10" />
           
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="relative w-full h-full max-w-[300px] max-h-[400px]">
                {/* Animated Border Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 border border-dashed border-cyan-500/30 rounded-[2rem]"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 border border-dotted border-purple-500/30 rounded-[2rem]"
                />
               
                {/* Image Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-cyan-900/20">
                  <img
                    src={profilePic}
                    alt="Abhay Kumar Yadav"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay Status */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
                        <span className="text-white text-sm font-medium tracking-wide">Available for work</span>
                      </div>
                      <div className="p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                        <Code2Icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Intro Card (Spans 2 cols) */}
          <motion.div
            variants={fadeIn("left", "tween", 0.3, 1)}
            className="md:col-span-2 relative rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-8 flex flex-col justify-center overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-32 bg-blue-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
           
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <SparklesIcon className="text-purple-400 w-8 h-8" />
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Abhay</span>
            </h3>
           
            <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-2xl">
              I am a B.Tech IT student at <span className="text-white font-semibold">Chandigarh Engineering College</span>.
            Engineer by mindset. Creator by passion.
Full-Stack Developer & AI enthusiast turning complex problems into elegant digital solutions.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 flex items-center gap-2 hover:bg-white/10 transition-colors">
                <TerminalIcon className="w-4 h-4 text-cyan-400" />
                Full Stack Dev
              </div>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 flex items-center gap-2 hover:bg-white/10 transition-colors">
                <CpuIcon className="w-4 h-4 text-purple-400" />
                AI Enthusiast
              </div>
            </div>
          </motion.div>

          {/* 3. Tech Stack Card */}
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="relative rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-8 flex flex-col justify-center"
          >
            <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <DatabaseZapIcon className="text-cyan-400" /> Core Competencies
            </h4>
            <div className="flex flex-wrap gap-5">
              {[
  'Problem Solving',
 
,
  'API Development',
  'Responsive Design',

]
.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium text-cyan-100 bg-cyan-900/30 border border-cyan-500/20 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 4. Stats & Action Card */}
   <motion.div
  variants={fadeIn("up", "tween", 0.5, 1)}
  whileHover={{ y: -6 }}
  className="relative rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-8 flex flex-col justify-between transition-all duration-500"
>

  {/* Stats */}
  <div className="flex justify-between items-start mb-6">
    
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-1"
      >
        3+
      </motion.div>
      <div className="text-slate-400 text-xs uppercase tracking-wider">
        Years Coding
      </div>
    </div>

    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-white mb-1"
      >
        20+
      </motion.div>
      <div className="text-slate-400 text-xs uppercase tracking-wider">
        Projects
      </div>
    </div>

  </div>

  {/* Clickable Mail Button */}
  <motion.a
    href="mailto:abhayyadav96312@gmail.com"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 flex flex-col items-center justify-center gap-1 relative overflow-hidden cursor-pointer"
  >

    {/* Flying Rocket Emoji */}
    <motion.span
      animate={{
        y: [0, -12, 0],
        x: [0, 4, -4, 0],
        rotate: [0, -10, 10, 0]
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="text-xl"
    >
      🚀
    </motion.span>

    <span>Let's Connect</span>

  </motion.a>

</motion.div>


        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(About, "about");