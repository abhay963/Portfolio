import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

import { FaUniversity } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { GiSchoolBag } from "react-icons/gi";

const educations = [
  {
    title: "B.Tech in Information Technology",
    institute: "Chandigarh Engineering College, Landran",
    duration: "2023 - Present",
    grade: "CGPA : 8.8",
    icon: FaUniversity,
    tag: "Higher Education",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    glowColor: "rgba(34, 211, 238, 0.35)",
    textGlow: "group-hover:text-cyan-300",
    border: "group-hover:border-cyan-500/60",
    dot: "bg-cyan-400 shadow-[0_0_12px_#22d3ee]",
  },
  {
    title: "Senior Secondary (XII) - Science",
    institute: "International Hindu School, Varanasi",
    duration: "2021 - 2023",
    grade: "CBSE Board",
    icon: HiAcademicCap,
    tag: "Senior High",
    gradient: "from-purple-500 via-indigo-500 to-pink-500",
    glowColor: "rgba(192, 132, 252, 0.35)",
    textGlow: "group-hover:text-purple-300",
    border: "group-hover:border-purple-500/60",
    dot: "bg-purple-400 shadow-[0_0_12px_#c084fc]",
  },
  {
    title: "Secondary (X)",
    institute: "DAV Public School, Mohania",
    duration: "2019 - 2021",
    grade: "CBSE Board",
    icon: GiSchoolBag,
    tag: "Secondary",
    gradient: "from-pink-500 via-rose-500 to-amber-500",
    glowColor: "rgba(244, 114, 182, 0.35)",
    textGlow: "group-hover:text-pink-300",
    border: "group-hover:border-pink-500/60",
    dot: "bg-pink-400 shadow-[0_0_12px_#f472b6]",
  },
];

const Education = () => {
  return (
    <div className="relative z-10 mx-auto max-w-5xl">
      {/* SECTION HEADER */}
      <motion.div variants={textVariant()} className="mb-14">
      
        
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {educations.map((edu, index) => {
          const Icon = edu.icon;
          return (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.2, 0.75)}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#070710]/90 p-6 backdrop-blur-xl transition-all duration-500 ${edu.border}`}
              style={{
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.8)",
              }}
            >
              {/* HOVER GLOW BEAM */}
              <motion.div
                className={`pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full bg-gradient-to-b ${edu.gradient} opacity-0 blur-2xl group-hover:opacity-40 transition-opacity duration-500`}
              />

              <div>
                {/* CARD HEADER */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-colors group-hover:bg-white/10 group-hover:border-white/20"
                  >
                    <Icon className={`text-2xl ${edu.textGlow} transition-colors duration-300`} />
                  </motion.div>

                  <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-zinc-400 border border-white/10 bg-white/[0.02] px-3 py-1 rounded-full group-hover:border-white/20 transition-colors">
                    {edu.tag}
                  </span>
                </div>

                {/* TITLE & INSTITUTE */}
                <h3 className={`text-base font-bold text-white transition-colors duration-300 ${edu.textGlow}`}>
                  {edu.title}
                </h3>
                
                <p className="mt-2 text-xs font-medium text-zinc-400 leading-relaxed">
                  {edu.institute}
                </p>
              </div>

              {/* CARD FOOTER METRICS */}
              <div className="mt-8 border-t border-white/10 pt-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                    {edu.duration}
                  </span>

                  <span className="flex items-center gap-2 font-mono font-semibold text-white">
                    <span className={`h-2 w-2 rounded-full ${edu.dot}`} />
                    {edu.grade}
                  </span>
                </div>

                {/* CYBER BOTTOM LASER */}
                <div className="mt-3 h-[2px] w-full overflow-hidden rounded-full bg-white/5">
                  <div className={`h-full w-full bg-gradient-to-r ${edu.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
