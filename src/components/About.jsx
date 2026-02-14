
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn, textVariant, staggerContainer } from "../utils/motion";
import profilePic from "../assets/abhay.jpg";

// Custom SVG Icons for dependency-free usage
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);
const DatabaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
);
const CpuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
);
const RocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
);

const About = () => {
  return (
    <section className={`relative w-full h-full mx-auto overflow-hidden`}>
      {/* Background Ambient Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
      </div>

      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header Section */}
        <motion.div variants={textVariant()} className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            <p className="text-blue-300 text-xs font-bold tracking-[0.2em] uppercase">
              Who I Am
            </p>
          </div>
          <h2 className={`${styles.sectionHeadText} mt-4 text-white`}>
            Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">Code.</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Image & Visuals (Span 5) */}
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              {/* Rotating Tech Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-10px] border border-dashed border-blue-500/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-25px] border border-dotted border-purple-500/20 rounded-full"
              />

              {/* Image Container with Glassmorphism & Glow */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 z-10 group-hover:opacity-0 transition-opacity duration-500" />
                
                <img
                  src={profilePic}
                  alt="Abhay Kumar Yadav"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Bottom Gradient Fade */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent z-20" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 z-30 flex items-center gap-3 px-4 py-2 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
                  <div className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                  <span className="text-xs font-bold text-white tracking-wide">Open to Work</span>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 p-4 bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-20 hidden md:block"
              >
                <CodeIcon className="text-cyan-400 w-8 h-8" />
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-5 p-4 bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-20 hidden md:block"
              >
                <RocketIcon className="text-purple-400 w-8 h-8" />
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Text & Skills (Span 7) */}
          <motion.div
            variants={fadeIn("left", "tween", 0.4, 1)}
            className="lg:col-span-7 w-full"
          >
            {/* Bio Card */}
            <div className="relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10">
              <div className="bg-slate-900/80 rounded-[22px] p-6 md:p-8 h-full">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Hello, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    Abhay Kumar Yadav
                  </span>
                </h3>
                
                <p className="text-slate-400 text-[15px] md:text-[17px] leading-relaxed mb-6">
                  A B.Tech IT student at <span className="text-white font-medium">Chandigarh Engineering College</span>, transforming complex problems into elegant digital solutions. I don't just write code; I architect experiences. My journey is driven by a relentless curiosity for Full-Stack Development and Artificial Intelligence.
                </p>

                {/* Tech Stack Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {/* Skill Card 1 */}
                  <div className="group relative p-4 rounded-xl bg-slate-800/50 border border-white/5 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                        <CpuIcon />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">Core Logic</h4>
                        <p className="text-slate-400 text-xs mt-1">C, C++, Data Structures & Algorithms</p>
                      </div>
                    </div>
                  </div>

                  {/* Skill Card 2 */}
                  <div className="group relative p-4 rounded-xl bg-slate-800/50 border border-white/5 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                        <DatabaseIcon />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">Full Stack</h4>
                        <p className="text-slate-400 text-xs mt-1">MERN Stack (MongoDB, Express, React, Node)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats / Philosophy */}
                <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl font-bold text-white">3+</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Years Coding</div>
                  </div>
                  <div className="h-8 w-[1px] bg-white/10 hidden sm:block" />
                  <div className="flex items-center gap-3">
                    <div className="text-3xl font-bold text-white">20+</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Projects</div>
                  </div>
                  <div className="flex-1 text-right">
                    <span className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow cursor-pointer">
                      Let's Connect
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(About, "about");