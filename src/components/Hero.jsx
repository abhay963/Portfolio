// src/components/Hero.jsx

import { useEffect, useState } from "react";
import { styles } from "../styles";

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
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start gap-5`}
      >
        {/* Left Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Text + Button */}
        <div className="flex flex-col gap-4">
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF] ">Abhay Kumar Yadav</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Full-Stack Developer <br className="sm:block hidden" />
              
            </p>
          </div>

          {/* ✅ Professional & Responsive Hire Me Button */}
          <div>
            <button
              className="mt-3 w-fit px-6 py-3 bg-gradient-to-r from-[#915EFF] to-[#5B2EFF] text-white font-medium rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
              onClick={() => window.open("mailto:abhayyadav96312@gmail.com", "_blank")}
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
