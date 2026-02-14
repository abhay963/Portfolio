
import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
  FaEnvelope,

} from "react-icons/fa";

import {
  SiPostman,
  SiMongodb,
  SiExpress,
  SiExpo,
  SiFirebase,
  SiTailwindcss,
  SiCplusplus,
  SiJavascript,
  SiNetlify,
  SiNextdotjs,
} from "react-icons/si";

// Grouped technologies
const techCategories = {
  Languages: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  ],

  Frameworks_Libraries: [
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
   
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "TanStack Query", icon: <FaReact className="text-red-400" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
  ],

  Databases: [
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "SQL", icon: <FaDatabase className="text-indigo-400" /> },
    { name: "Firebase Firestore", icon: <SiFirebase className="text-yellow-500" /> },
  ],

  Tools_Services: [
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
   
   
  ],
};

const Technologies = () => {
  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white selection:bg-cyan-500 selection:text-white">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          {/* Animated Ambient Blobs */}
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] animate-float-slow pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-float-medium pointer-events-none" />
          <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[80px] animate-float-fast pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          {Object.entries(techCategories).map(([category, items], catIdx) => (
            <div key={catIdx} className="mb-32 last:mb-0">
              {/* Category Header */}
              <div className="flex items-center gap-6 mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: `${catIdx * 100}ms`, animationFillMode: 'forwards' }}>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg">
                  {category.replace("_", " ")}
                </h2>
                <div className="h-[2px] flex-grow bg-gradient-to-r from-gray-700 via-gray-600 to-transparent rounded-full" />
              </div>

              {/* Tech Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {items.map((tech, index) => (
                  <div
                    key={index}
                    className="group relative flex flex-col items-center justify-center p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-xl overflow-hidden cursor-default transition-all duration-500 hover:bg-slate-800/60 hover:border-cyan-500/30 hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.3)] hover:-translate-y-3 opacity-0 animate-fade-in-up"
                    style={{ 
                      animationDelay: `${catIdx * 100 + (index * 50)}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    {/* Shimmer Effect on Hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent z-0 pointer-events-none" />
                    
                    {/* Glow Background behind icon */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                    {/* Icon Container */}
                    <div className="relative z-10 text-5xl mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] filter">
                      {tech.icon}
                    </div>
                    
                    {/* Text */}
                    <p className="relative z-10 text-sm md:text-base font-semibold text-gray-400 group-hover:text-white transition-colors duration-300 tracking-wide">
                      {tech.name}
                    </p>

                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Styles for Animations */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -50px) scale(1.1); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 30px) scale(1.05); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 20px); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }

        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 12s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 8s ease-in-out infinite; }
        .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-shimmer { animation: shimmer 1.5s infinite; }
      `}</style>
    </>
  );
};

export default Technologies;