// src/components/Technologies.jsx
import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaDatabase, FaCuttlefish } from "react-icons/fa";
import { 
  SiPostman, 
  
  SiMongodb, 
  SiExpress, 
   SiExpo, 
  SiFirebase, 
  
  SiTailwindcss, 
  SiRedux, 
  SiReactrouter, 
  SiNetlify, 
  SiCplusplus, 
  SiJavascript 
} from "react-icons/si";

// Grouped technologies
const techCategories = {
  Languages: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-6xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-6xl" /> },
   
    { name: "C++", icon: <SiCplusplus className="text-blue-500 text-6xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-6xl" /> },
  ],
  Frameworks_Libraries: [
    { name: "React", icon: <FaReact className="text-cyan-400 text-6xl" /> },
    { name: "React Native", icon: <SiExpo className="text-green-400 text-6xl" /> },
  
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-6xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-700 text-6xl" /> },
  
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400 text-6xl" /> },
  ],
  Databases: [
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-6xl" /> },
    { name: "SQL", icon: <FaDatabase className="text-indigo-500 text-6xl" /> },
    { name: "Firebase Firestore", icon: <SiFirebase className="text-yellow-500 text-6xl" /> },
  ],
  Tools: [
    { name: "GitHub", icon: <FaGithub className="#fff text-6xl" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500 text-6xl" /> },
  
      { name: "Netlify", icon: <SiNetlify className="text-green-500 text-6xl" /> },
  ],
 
};

const Technologies = () => {
  return (
    <section className="mt-6 px-4 text-center">
      {Object.entries(techCategories).map(([category, items], idx) => (
        <div key={idx} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{category.replace("_", " ")}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
            {items.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-2xl shadow-md hover:scale-105 transition-transform duration-200"
              >
                {tech.icon}
                <p className="mt-2 text-lg font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Technologies;
