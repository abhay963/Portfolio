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

import Education from "./components/Education";
import VapiWidget from "./VapiWidget";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Hero Section */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative">
          <Navbar />
          <Hero />
        </div>

        {/* About */}
        <About />

        {/* Education */}
        <Education />

        {/* Experience */}
        <Experience />

        {/* Tech Stack */}
        <Tech />

        {/* Projects */}
        <div className="relative z-0">
          <section id="projects">
            <Works />
          </section>
          <StarsCanvas />
        </div>

        {/* Contact */}
        <Contact />

        {/* AI Assistant */}
        <VapiWidget />
      </div>
    </BrowserRouter>
  );
};

export default App;