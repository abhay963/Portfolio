import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Text Content */}
      <div
        className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Abhay Kumar Yadav</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full-Stack Developer <br className="sm:block hidden" />
            <span className="text-[14px] text-secondary block mt-1">
             Bridging UI with API  |  Delivering Real Impact via Projects
            </span>
          </p>
        </div>
      </div>

      {/* 3D or fallback image */}
      {isMobile ? (
        <div className="w-full h-full absolute inset-0 flex items-center justify-center">
          {/* Replace below with an actual optimized image if available */}
          <img
            src="/fallback-energy.png"
            alt="Energy Model"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
      ) : (
        <ComputersCanvas />
      )}

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.3, repeat: Infinity, repeatType: "loop" }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
