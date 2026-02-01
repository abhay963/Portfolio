// src/App.jsx

import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
  
} from "./components";
import VapiWidget from "./VapiWidget";


import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import Education from "./components/Education";

const App = () => {
  

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen relative">
          <Navbar />

          {/* Hero section with Spline */}
          <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-10 gap-10">
            {/* Hero content */}
            <div className="w-full md:w-1/2 z-10">
              <Hero />
            </div>

            {/* Spline animation */}
            <div className="w-full md:w-1/2 flex justify-center items-center h-[300px] sm:h-[400px] md:h-[500px]">
              <div className="w-full sm:w-[400px] md:w-[500px] h-full">
                <Spline scene="https://prod.spline.design/kBZmUjfcsCPSEwkx/scene.splinecode" />
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute top-[85%] left-1/2 transform -translate-x-1/2 z-50">

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

        {/* Remaining sections */}
        <About />
        <Education />
        <Experience />
        <Tech />
      
        

        <div className="relative z-0">
             <section id="projects">
          <Works />
        </section>
         
          <StarsCanvas />
        </div>
         <Contact />
      </div>
<VapiWidget/>
    </BrowserRouter>

  );
};

export default App;
