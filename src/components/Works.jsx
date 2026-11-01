import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { ExternalLink, Github as GithubIcon, ArrowUpRight } from "lucide-react";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      whileHover={{ y: -12 }}
      className="group relative overflow-hidden rounded-3xl border border-white/8 bg-zinc-900/30 backdrop-blur-2xl"
    >
      {/* Image Container */}
      <div className="relative w-full h-[280px] overflow-hidden">
        <motion.img
          src={image}
          alt={`${name} preview`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-80" />

        {/* Action Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(source_code_link, "_blank")}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm hover:bg-white/20 transition-colors"
          >
            <GithubIcon size={18} />
            <span>View Code</span>
          </motion.button>

          {source_code_link && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(source_code_link, "_blank")}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow"
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </motion.button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {name}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`px-3 py-1 text-xs font-medium rounded-lg ${tag.color} bg-white/5 border border-white/10`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <div className="mb-12">
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
