// src/App.jsx

import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
import PortfolioLoader from "./components/PortfolioLoader";
import VapiWidget from "./VapiWidget";

const sectionVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {/* LOADER */}
      <AnimatePresence mode="wait">
        {loading && <PortfolioLoader />}
      </AnimatePresence>

      {/* MAIN WEBSITE */}
      {!loading && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.15,
            filter: "blur(25px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="relative z-0 bg-primary"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {/* HERO SECTION */}
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative">
              <Navbar />

              <Hero />

              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50"
              >
                <a href="#about">
                  <div className="w-[30px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1">
                    <div className="w-2 h-2 rounded-full bg-secondary mb-1 animate-bounce" />
                  </div>
                </a>
              </motion.div>
            </div>

            {/* ABOUT */}
            <motion.div variants={sectionVariant}>
              <About />
            </motion.div>

            {/* EDUCATION */}
            <motion.div variants={sectionVariant}>
              <Education />
            </motion.div>

            {/* EXPERIENCE */}
            <motion.div variants={sectionVariant}>
              <Experience />
            </motion.div>

            {/* TECH STACK */}
            <motion.div variants={sectionVariant}>
              <Tech />
            </motion.div>

            {/* PROJECTS */}
            <motion.div variants={sectionVariant}>
              <div className="relative z-0">
                <section id="projects">
                  <Works />
                </section>

                <StarsCanvas />
              </div>
            </motion.div>

            {/* CONTACT */}
            <motion.div variants={sectionVariant}>
              <Contact />
            </motion.div>
          </motion.div>

          {/* AI ASSISTANT */}
          <VapiWidget />
        </motion.div>
      )}
    </BrowserRouter>
  );
};

export default App;