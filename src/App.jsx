// src/App.jsx

import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
} from "./components";
import useLenisScroll from "./utils/useLenisScroll";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

const App = () => {
  useLenisScroll();

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen relative">
          <Navbar />

          {/* Hero section with Spline on right */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 pt-10 gap-10">
            {/* Left side: Hero content */}
            <div className="w-full md:w-1/2 z-10">
              <Hero />
            </div>

            {/* Right side: Spline model */}
            <div className="w-full md:w-1/2 flex justify-center items-center h-[300px] sm:h-[400px] md:h-[500px]">
              <div className="w-[250px] sm:w-[400px] md:w-[600px] h-full">
                <Spline scene="https://prod.spline.design/kBZmUjfcsCPSEwkx/scene.splinecode" />
              </div>
            </div>
          </div>

          {/* ✅ Scroll Indicator - Center of Full Screen */}
          <div className="absolute top-10/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
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
        </div>

        {/* Remaining Sections */}
        <About />
        <Experience />
        <Feedbacks />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
