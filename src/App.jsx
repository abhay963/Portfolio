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
import Education from "./components/Education";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        
        {/* HERO SECTION */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative">
          
          <Navbar />

          {/* Full Hero */}
          <Hero />

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50">
            <a href="#about">
              <div className="w-[30px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1">
                <div className="w-2 h-2 rounded-full bg-secondary mb-1 animate-bounce" />
              </div>
            </a>
          </div>
        </div>

        {/* OTHER SECTIONS */}
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

      <VapiWidget />
    </BrowserRouter>
  );
};

export default App;